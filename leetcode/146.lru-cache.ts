/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

链接：https://leetcode-cn.com/problems/lru-cache

 */

class LinkNode {
    public val: number;
    public key: number;
    public prev: LinkNode | null = null;
    public next: LinkNode | null = null;
    constructor(key: number, val: number) {
        this.val = val;
        this.key = key;
    }
}

class LRUCache {
    private size: number;
    private curLen: number = 0;
    private head: LinkNode = new LinkNode(-1, -1);
    private nail: LinkNode = new LinkNode(-1, -1);
    private hash: { [key: number]: LinkNode } = {}
    constructor(capacity: number) {
        this.size = capacity;
        this.head.next = this.nail;
        this.nail.prev = this.head;
    }

    get(key: number): number {
        const node = this.hash[key];
        if (node) {
            this.removeNode(node);
            this.addNode2Head(node);
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        const node = this.hash[key];
        if (node) {
            node.val = value;
            this.removeNode(node);
            this.addNode2Head(node);
        } else {
            const newNode = new LinkNode(key, value);
            this.addNode2Head(newNode);
            this.hash[key] = newNode;
            if (this.curLen === this.size) {
                delete this.hash[(this.nail.prev as LinkNode).key];
                this.removeNode(this.nail.prev as LinkNode);
            } else {
                this.curLen++;
            }
        }
    }

    private removeNode(node: LinkNode) {
        (node.prev as LinkNode).next = node.next;
        (node.next as LinkNode).prev = node.prev;
        node.prev = null;
        node.next = null;
    }

    private addNode2Head(node: LinkNode) {
        const next = this.head.next as LinkNode;
        this.head.next = node;
        node.prev = this.head;
        node.next = next;
        (next.prev as LinkNode) = node;
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */