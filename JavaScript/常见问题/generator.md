
```js
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
let f = foo(1)
f.next() // {value: 2, done: false}
f.next() // {value: 3, done: false} 
f.next() // {value: 4, done: false}
f.next() // {value: undefined, done: false}
```