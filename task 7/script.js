function validateForm() {
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();
    let isValid = true;

    if (title === '') {
        isValid = false;
        showError('titleError', 'Title is required');
        document.getElementById('title').classList.add('is-invalid');
    } else {
        clearError('titleError');
        document.getElementById('title').classList.remove('is-invalid');
    }

    if (body === '') {
        isValid = false;
        showError('bodyError', 'Body is required');
        document.getElementById('body').classList.add('is-invalid');
    } else {
        clearError('bodyError');
        document.getElementById('body').classList.remove('is-invalid');
    }

    if (isValid) {
        console.log('Form submitted successfully');
        // Handle form submission (e.g., send data to the server)
    }
}
