// Add a new person
document.getElementById('add-person-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      age: form.elements.age.value,
      gender: form.elements.gender.value
    };
    fetch('/persons', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        window.location.reload();
        alert('Done!')
      } else {
        alert('Error adding person');
      }
    });
  });
  
  // Update a person
  document.getElementById('update-person-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var id = form.elements.id.value;
    var data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      age: form.elements.age.value,
      gender: form.elements.gender.value
    };
    fetch('/persons/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        window.location.reload();
      } else {
        alert('Error updating person');
      }
    });
  });
  
  // Delete a person
  document.getElementById('delete-person-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var id = form.elements.id.value;
    fetch('/persons/' + id, {
      method: 'DELETE'
    })
    .then(function(response) {
      if (response.ok) {
        window.location.reload();
      } else {
        alert('Error deleting person');
      }
    });
  });