class EventEmitter {
    constructor() {
        this.eventList = {};
    }

    on(eventName, cb) {
        if (!this.eventList[eventName]) {
            this.eventList[eventName] = [];
        }
        this.eventList[eventName].push(cb);
    }

    emit(eventName, value) {
        if (this.eventList[eventName]) {
            this.eventList[eventName].forEach(cb => {
                cb(value);
            });
        }
    }

    off(eventName, cb) {
        if (this.eventList[eventName]) {
            const idx = this.eventList[eventName].indexOf(cb);
            this.eventList[eventName].splice(idx, 1);
        }
    }

    once(eventName, cb) {
        this.on(eventName, () => {
            cb();
            this.off(eventName, cb);
        });
    }
}

const instance = new EventEmitter();

instance.once('name', () => {
    console.log('123');
});
instance.on('name1', () => {
    console.log('1234');
});
instance.emit('name', 1234);
instance.emit('name', 1234);
instance.emit('name1', 1234);
instance.emit('name1', 1234);