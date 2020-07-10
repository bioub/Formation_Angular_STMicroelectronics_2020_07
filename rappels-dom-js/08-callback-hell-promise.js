const fs = require("fs");

// SYNC
try {
  const content = fs.readFileSync(".gitignore"); // bloquante (4Go, plusieurs secondes)
  fs.writeFileSync(".gitignore.copy", content);
  console.log("Copy Done");
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell / Pyramid of doom
fs.readFile(".gitignore", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".gitignore.copy", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Copy Done");
      }
    });
  }
});

// ASYNC
// Promise
// Apparu milieu des années 2000 (jQuery à un équivalent : defer)
// via des libs (Bluebird, q)
// Normé en 2015 avec ES2015
fs.promises
  .readFile(".gitignore")
  .then((content) => fs.promises.writeFile(".gitignore.copy", content))
  .then(() => console.log("Copy Done"))
  .catch((err) => console.log(err));

// ASYNC
// Promise + async / await (ES2017)
async function copy() {
  try {
    const content = await fs.promises.readFile(".gitignore");
    await fs.promises.writeFile(".gitignore.copy", content);
    console.log("Copy Done");
  } catch (err) {
    console.log(err);
  }
}

copy();

// console.log('juste après readFile avant que le fichier ait été lu');
// Top Level Await (ES2021) TypeScript 3.8
// try {
//   const content = await fs.promises.readFile(".gitignore");
//   await fs.promises.writeFile(".gitignore.copy", content);
//   console.log("Copy Done");
// } catch (err) {
//   console.log(err);
// }