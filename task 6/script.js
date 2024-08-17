document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();

    const form = document.getElementById('postForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayPosts(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);

        postsContainer.appendChild(postElement);
    });
}

function validateForm() {
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();
    let isValid = true;

    if (title === '') {
        isValid = false;
        showError('titleError', 'Title is required');
    } else {
        clearError('titleError');
    }

    if (body === '') {
        isValid = false;
        showError('bodyError', 'Body is required');
    } else {
        clearError('bodyError');
    }

    if (isValid) {
        console.log('Form submitted successfully');
        // Here you can handle the form submission (e.g., send data to the server)
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}
