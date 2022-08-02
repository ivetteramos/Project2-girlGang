const signupFormHandler = async (event) => {
    event.preventDefault();
    const newName = document.querySelector('#create-name').value.trim();

    const newEmail = document.querySelector('#create-email').value.trim();

    const newPassword = document.querySelector('#create-password').value.trim();

    const approvePass = document.querySelector('#approve-password').value.trim();

    if(newPassword === approvePass) {

        const response =await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ name:newName, email:newEmail ,password:newPassword}),
        headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create account!');
        }
    }
}

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

