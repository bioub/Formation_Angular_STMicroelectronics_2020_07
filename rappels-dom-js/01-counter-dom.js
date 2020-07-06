const btnEl = document.createElement("button");
btnEl.innerText = 0; // HTMLButtonElement -> MDN
btnEl.addEventListener("click", ($event) => {
  $event.target.innerText = Number($event.target.innerText) + step;
  // $event.target.disabled = $event.target.innerText > 5;
});
document.body.appendChild(btnEl);

let step = 1;

const stepEl = document.createElement("input");
stepEl.type = 'number';

stepEl.addEventListener('input', ($event) => {
    step = Number($event.target.value);
});

document.body.appendChild(stepEl);