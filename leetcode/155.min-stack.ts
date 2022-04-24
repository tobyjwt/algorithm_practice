class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    private stack: number[]
    private minStack: number[]

    push(val: number): void {
        this.stack.push(val);
        if (!this.minStack.length) {
            this.minStack.push(val);
        } else {
            const lastMin = this.minStack[this.minStack.length - 1];
            if (val > lastMin) {
                this.minStack.push(lastMin);
            } else {
                this.minStack.push(val);
            }
        }
    }

    pop(): void {
        this.minStack.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[0];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
