interface User {
    posts: {time: number, id: number}[],
    followed: Set<number>
}

class Twitter {
    private userMap: Map<number, User>
    private tweetGlobalId: number

    constructor() {
        this.userMap = new Map();
        this.tweetGlobalId = 1;
    }

    postTweet(userId: number, tweetId: number): void {
        if (this.userMap.has(userId)) {
            const user = this.userMap.get(userId);
            user.posts.push({
                time: this.tweetGlobalId++,
                id: tweetId
            });
            if (user.posts.length > 10) {
                user.posts.shift();
            }
        } else {
            this.userMap.set(userId, {
                posts: [{
                    time: this.tweetGlobalId++,
                    id: tweetId
                }],
                followed: new Set()
            })
        }
    }

    getNewsFeed(userId: number): number[] {
        if (this.userMap.has(userId)) {
            let posts = [];
            Array.from(this.userMap.get(userId).followed).forEach(item => {
                // posts = posts.concat(this.userMap.get(item).posts);
                posts = posts.concat(this.userMap.has(item) ? this.userMap.get(item).posts : []);
            });
            posts = posts.concat(this.userMap.get(userId).posts);
            posts.sort((a, b) => b.time - a.time);
            return posts.slice(0, 10).map(item => item.id);
        }
        return [];
    }

    follow(followerId: number, followeeId: number): void {
        if (this.userMap.has(followerId)) {
            this.userMap.get(followerId).followed.add(followeeId);
        } else {
            this.userMap.set(followerId, {
                posts: [],
                followed: new Set([followeeId])
            })
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.userMap.has(followerId)) {
            this.userMap.get(followerId).followed.delete(followeeId);
        } else {
            this.userMap.set(followerId, {
                posts: [],
                followed: new Set()
            })
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */