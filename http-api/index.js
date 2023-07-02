fetch('https://dummyjson.com/users/5/posts?select=title')
    .then(data => data.json())
    .then(console.log)