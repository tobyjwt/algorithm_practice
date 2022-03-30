class Limit {
    constructor(x) {
      this.max = x;
      this.count = 0;
      this.queue = [];
    }
  
    async add(fun, arg) {
      return new Promise((resolve, reject) => {
        const task = () => {
          fun(arg).then(resolve).catch(reject).finally(() => {
            this.count--;
            if (this.count < this.max && this.queue.length) {
              this.queue.shift()();
            }
          });
        };
  
        if (this.count < this.max) {
          this.count++;
          task();
        } else {
          this.queue.push(task);
        }
      });
    }
  }
  
  const instance = new Limit(3);

  // use
  // return instance.add(request, arg);