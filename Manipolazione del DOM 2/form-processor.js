const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;

  const person = {
    firstName,
    lastName,
    age: parseInt(age), // Convert age to a number (optional)
  };

  const personJson = JSON.stringify(person);
  form.dataset.person = personJson;

  console.log('Person object:', person);
  console.log('Person JSON:', personJson);
});
