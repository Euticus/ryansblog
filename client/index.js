// Fetch all blog posts from the API and display them.
fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        const postsDiv = document.getElementById('posts');

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.textContent = post.title;
            postsDiv.appendChild(postElement);
        });
    });
