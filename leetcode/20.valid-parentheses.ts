function isValid(s: string): boolean {
    const rightQueue: string[] = [];
    const queue = s.split('');
    const map: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    while(queue.length) {
        const cur = queue.pop() as string;
        if ([')', '}', ']'].includes(cur)) {
            rightQueue.push(cur);
        } else {
            if (map[cur] !== rightQueue.pop()) {
                return false;
            }
        }
    }

    return !rightQueue.length;
};