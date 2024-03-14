// userstack = '';

// function reset()
// {
//     userName = document.getElementById('username');
//     email = document.getElementById('email');
//     passWord = document.getElementById('password');
//     passWord1 = document.getElementById('password1');

//     userName.value = '';
//     email.value = '';
//     passWord.value = '';
//     passWord1.value = '';

//     if (userName.style.borderBottom !== "")
//     {
//         userName.style.borderBottom = "transparent";
//         userName.style.borderBottom = "3px solid gray";
//     }
//     else
//     {

//     }
//     if (email.style.borderBottom !== "")
//     {
//         email.style.borderBottom = "transparent";
//         email.style.borderBottom = "3px solid gray";
//     }
//     else
//     {

//     }

//     if (passWord.style.borderBottom !== "")
//     {
//         passWord.style.borderBottom = "transparent";
//         passWord.style.borderBottom = "3px solid gray";
//     }
//     else
//     {

//     }

//     if (passWord1.style.borderBottom !== "")
//     {
//         passWord1.style.borderBottom = "transparent";
//         passWord1.style.borderBottom = "3px solid gray";
//     }
//     else
//     {

//     }
    
// }

// function create()
// {
//     userName = document.getElementById('username');
//     email = document.getElementById('email');
//     passWord = document.getElementById('password');
//     passWord1 = document.getElementById('password1');

//     if(userName.value === '')
//     {
//         userName.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         userName.style.borderBottom = "3px solid #50C878"; //green
//     }

//     if(validateEmail(email.value))
//     {
//         email.style.borderBottom = "3px solid #50C878"; //green
//     }
//     else
//     {
//         email.style.borderBottom = "3px solid #F70D1A"; //red
//     }

//     if(passWord.value === '')
//     {
//         passWord.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         passWord.style.borderBottom = "3px solid #50C878"; //green
//     }

//     if(passWord1.value === '' || passWord1.value !== passWord.value)
//     {
//         passWord1.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         passWord1.style.borderBottom = "3px solid #50C878"; //green
//     }

//     if(userName.value === '' || email.value === '' || passWord.value === '' || passWord1.value === '')
//     {
//         alert("Please make sure you fill up the form right!");
//     }
//     else if(passWord.value !== passWord1.value)
//     {
//         alert("Password does not match");
//     }
//     else if(userName.value !== '' && email.value.includes("@gmail.com") && passWord.value === passWord1.value)
//     {
//         var sub = "Successfully Registered";
//         userstack = userName.value;
//         alert(sub);
//         userName.value = '';
//         email.value = '';
//         passWord.value = '';
//         passWord1.value = '';
//     }
//     else
//     {
//         alert("Please input valid email");
//     }
// }

// function validateEmail(email) {
//     // Regular expression to check if email ends with @gmail.com
//     var regex = /^[^\s@]+@gmail\.com$/;
//     return regex.test(email);
// }

// function userchecker()
// {
//     var userName = document.getElementById('username');

//     if(userName.value === '')
//     {
//         userName.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         userName.style.borderBottom = "3px solid #50C878"; //green
//     }
// }

// function emailchecker()
// {
//     email = document.getElementById('email');

//     if(validateEmail(email.value))
//     {
//         email.style.borderBottom = "3px solid #50C878"; //green
//     }
//     else
//     {
//         email.style.borderBottom = "3px solid #F70D1A"; //red
//     }
// }

// function passchecker()
// {
//     passWord = document.getElementById('password');

//     if(passWord.value === '')
//     {
//         passWord.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         passWord.style.borderBottom = "3px solid #50C878"; //green
//     }
// }

// function pass1checker()
// {
//     passWord1 = document.getElementById('password1');

//     if(passWord1.value === '' || passWord1.value !== passWord.value)
//     {
//         passWord1.style.borderBottom = "3px solid #F70D1A"; //red
//     }
//     else
//     {
//         passWord1.style.borderBottom = "3px solid #50C878"; //green
//     }
// }


// function userlogger()
// {
//     var userlog = document.getElementById('loginUser')

//     if(userlog === userstack)
//     {
//         userlog.style.borderBottom = "3px solid #50C878"; //green
//     }
//     else
//     {
//         userlog.style.borderBottom = "3px solid #F70D1A"; //red
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        if (validateForm()) {
            createUser();
        }
    });
});

function validateForm() {
    let isValid = true;
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const passWord = document.getElementById('password').value;
    const passWord1 = document.getElementById('password1').value;

    // Validation logic here

    return isValid;
}

function createUser() {
    const form = document.getElementById('signupForm');
    const userName = form.elements['user'].value;
    const email = form.elements['Email'].value;
    const passWord = form.elements['pass'].value;

    // Send the form data to the server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, email: email, password: passWord }),
    })
        .then((response) => response.text())
        .then((data) => {
            alert(data); // Show the response from the server
            // Clear form fields
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
}
