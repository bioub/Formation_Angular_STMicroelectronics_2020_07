// setTimeout(() => console.log('1s'), 1000);

const { Observable } = require("rxjs");

// function timeout(delay) {
//   return new Promise((resolve) => {
//     // executor appelée au moment du new
//     setTimeout(() => {
//       // appeler le callback passé au then
//       // dans notre cas -> resolve
//       resolve();
//     }, delay);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

function interval(delay) {
  return new Observable((observer) => {
    // subcribe appelée au moment du subscribe
    setInterval(() => {
      // appeler le callback passé au then
      // dans notre cas -> resolve
      observer.next(delay);
      // observer.error(new Error());
      // observer.complete();
    }, delay);
  });
}

const interval$ = interval(1000);

interval$.subscribe({
  next(val) {
    console.log(val + 'ms');
  },
  error(err) {

  },
  complete() {

  }
});
