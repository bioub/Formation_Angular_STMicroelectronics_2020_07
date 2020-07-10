const { interval } = require('rxjs');
const { filter, map, take } = require('rxjs/operators');

// ----0----1----2----3----4----...
// filter((val) => val % 2 === 0)
// ----0---- ----2---- ----4----...
// map((val) => val * 2)
// ----0---- ----4---- ----8----...
// take(3)
// ----0---- ----4---- ----8----|
interval(1000)
  .pipe(
    filter((val) => val % 2 === 0),
    map((val) => val * 2),
    take(3)
  )
  .subscribe((val) => {
    console.log(val);
  });
