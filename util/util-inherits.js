//javascript的面向对象特性是基于原型的，与常见的基于类的不同。
//javascript没有提供对象继承的语言级别特性，而是通过原型复制来实现的（重点）
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello ' + this.name);
	};
};
Base.prototype.showName = function(){
	console.log(this.name);
};
function Sub(){
	this.name = 'sub';
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//这个sayHello函数不会继承
//objSub.sayHello();
console.log(objSub);