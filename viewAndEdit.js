import { Blog } from "./blogModule.js";


let blogToView;
let passedID;
let imageSource;
let postTitle = document.getElementById('title');
let postContent = document.getElementById('content');
let postImage = document.getElementById('image');
let editButton = document.getElementById('edit-btn');
let saveButton = document.getElementById('save-btn');
let deleteButton = document.getElementById('delete-btn');


if (localStorage.getItem('postID') !== null){
    passedID = localStorage.getItem('postID');
}

let indexofBlog;
let blogList;
if (localStorage.getItem('blog-objects') !== null){
    blogList = JSON.parse(localStorage.getItem('blog-objects'));
    blogToView = blogList.find(blog => blog.id === passedID);
    indexofBlog = blogList.indexOf(blogToView);
}

if (blogToView !== null){
    let postTitleText = document.createTextNode(blogToView.title);
    postTitle.appendChild(postTitleText);
    let postContentText = document.createTextNode(blogToView.content);
    postContent.appendChild(postContentText);
    if (blogToView.image !== ""){
        imageSource = blogToView.image;
        postImage.src = imageSource;
    }
    else{
        postImage.remove();
    }
}

editButton.addEventListener("click", function(event){
    event.preventDefault();
    postTitle.setAttribute('contenteditable', true);
    postContent.setAttribute('contenteditable', true);
});


let editedBlog;
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    editedBlog = new Blog(postTitle.innerHTML, postTitle.innerHTML, postContent.innerHTML, postImage.src);
    blogList[indexofBlog] = editedBlog;
    localStorage.setItem('blog-objects', JSON.stringify(blogList));
    window.location.href = "index.html";
});

deleteButton.addEventListener('click', function(event){
    event.preventDefault();
    if (confirm("Are you sure you want to delete this post?")){
        blogList.splice(indexofBlog, 1);
        localStorage.setItem('blog-objects', JSON.stringify(blogList));
        window.location.href = "index.html";
    }
});