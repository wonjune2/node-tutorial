function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

console.log(add2(1, 2));

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFrieds: function() {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        })
    }
}

relationship1.logFrieds();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        })
    }
}

relationship2.logFriends();