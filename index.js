// Create a new <div> element
const element = document.createElement("div");
console.log(element);

// Create a new <ul> elementconst element = document.createElement("div");
element.style.backgroundColor = "black"; // Add background color
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);
ul.style.border = "2px solid red"; 

// Add the <div> element to the DOM
document.getElementById("main").append(element);

// Change properties of the <div> element
element.style.height = "300px";
element.style.backgroundColor = "green";
console.log(element);

// Remove the <ul> element from the DOM
ul.remove();

// Check if <ul> is removed
console.log(document.querySelector("ul"));
