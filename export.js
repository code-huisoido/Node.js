/*var hello = require("./hello");
hello.world();
*/

//与一般高级语言的类同理。
var Hello = require('./hello');
hello = new Hello();
hello.setName('hui');
hello.sayHello();