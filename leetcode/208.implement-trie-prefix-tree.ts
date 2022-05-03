interface TrieObj {
    [key: string]: TrieObj
}
class Trie {
    private map: TrieObj;
    private endFlag: Symbol;

    constructor() {
        this.map = {};
        this.endFlag = Symbol('isEnd');
    }

    insert(word: string): void {
        let map = this.map;
        for (let i = 0; i < word.length; i++) {
            if (!map[word[i]]) {
                map[word[i]] = {};
            }
            map = map[word[i]];
        }
        map.end = {};
    }

    search(word: string): boolean {
        let map = this.map;
        for (let i = 0; i < word.length; i++) {
            if (!map[word[i]]) {
                return false;
            }
            map = map[word[i]];
        }
        return !!map.end;
    }

    startsWith(prefix: string): boolean {
        let map = this.map;
        for (let i = 0; i < prefix.length; i++) {
            if (!map[prefix[i]]) {
                return false;
            }
            map = map[prefix[i]];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
