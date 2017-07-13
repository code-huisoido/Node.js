var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function(){
	console.log('some_event事件触发');
});
setTimeout(function(){
	event.emit('some_event');
}, 1000);

event.on('other_event', function(arg1, arg2){
	console.log('listener1', arg1, arg2);
});

var callback = function(arg1, arg2){
	console.log('listener2', arg1, arg2);
}

event.on('other_event', callback);

//移除callback监听器
//event.removeListener('other_event', callback);

//移除所有监听器
//event.removeAllListeners();

//设置监听器的限制数量(默认10，设置10以下没有效果)
event.setMaxListeners(0);

//返回指定事件的监听器数组，不过测试后没有任何输出，暂时保留
event.listeners('other_event');

event.emit('other_event', '参数1', '参数2');
