const addProduct = () => {
  
  const task = document.querySelector("input").value;

  
  const listItem = document.createElement("li");

  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  
  listItem.textContent = task;

  
  listItem.appendChild(checkbox);

  
  const list = document.querySelector("ul");

  
  list.appendChild(listItem);

  // Puliamo il campo di input
  document.querySelector("input").value = "";
};
