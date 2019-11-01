// Select the image

const cat = document.querySelector("img");
//counter for counting clicks
let counter = 0;

//Select the span with id click
const click = document.querySelector("#click");

// Set counter into click
click.textContent = counter;

cat.addEventListener("click", () => {
  counter++;
  click.textContent = counter;
});
