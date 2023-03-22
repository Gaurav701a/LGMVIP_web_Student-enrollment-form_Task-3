const form = document.querySelector('form');
      const studentInfo = document.getElementById('student-info');
      
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Get form values
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const website = form.elements.website.value;
        const imageLink = form.elements['image-link'].value;
        const gender = form.elements.gender.value;
        const skills = [];
        form.querySelectorAll('input[name="skills"]:checked').forEach(input => skills.push(input.value));
        
        // Create student info element
        const studentInfoEl = document.createElement('div');
        studentInfoEl.innerHTML = `
          
        <div class="student-info__container">
        <img src="${imageLink}" alt="Student Image" class="student-info__image">
        <div class="student-info__text">
          <h2><strong>Name: </strong>${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Skills:</strong> ${skills.join(', ')}</p>
        </div>
      </div>
          
        `;
        
        // Add student info element to the page
        studentInfo.appendChild(studentInfoEl);
        
        // Clear form fields
        form.reset();
      });