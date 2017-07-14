'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function like(sport) {
    console.log('like ' + sport + '!');
}

module.exports = {
    greet: greet,
    like: like
};