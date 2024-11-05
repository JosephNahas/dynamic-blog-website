import { Blog } from "./blogModule.js";

let postButton = document.getElementById('post-btn');
let titleField = document.getElementById('title');
let contentField = document.getElementById('newContent');
let imageField = document.getElementById('newImage');

// when post button is clicked, make a new blog post and add it to the list of posts in the local storage
postButton.addEventListener("click", function(event){
    if ((titleField.value === "") || (contentField.value === "")){ // check for title and content input
        alert("Please fill out the title and content");
    }
    else{
        let id = titleField.value;
        let newPost = new Blog(id, titleField.value, contentField.value, imageField.value);
        let blogList = JSON.parse(localStorage.getItem('blog-objects'));
        blogList.push(newPost);
        localStorage.setItem('blog-objects', JSON.stringify(blogList));
        event.preventDefault();
        window.location.href = "index.html";
    }
});