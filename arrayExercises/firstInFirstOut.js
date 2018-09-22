var stack = [];
stack.push(2); // stack is now [2]
stack.push(5); // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
console.log(i); // displays 5

var queue = [];
queue.push(2); // queue is now [2]
queue.push(5); // queue is now [2, 5]
var j = queue.shift(); // queue is now [5]
console.log(j); // displays 2

/*
Queue is first in, first out (FIFO)

Stack is last in, first out (LIFO)

Use a queue when you want to get things out in the order that you put them in.

Use a stack when you want to get things out in the reverse order than you put them in.

Use a list when you want to get anything out, regardless of when you put them in (and when you don't want them to automatically be removed).
*/
