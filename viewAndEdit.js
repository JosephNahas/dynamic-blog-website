import { Blog } from "./blogModule.js";


let blogToView;
let passedID;
let imageSource;
let postTitle = document.getElementById('title');
let postContent = document.getElementById('content');
let postImage = document.getElementById('image');
let editButton = document.getElementById('edit-btn');
let saveButton = document.getElementById('save-btn');


if (localStorage.getItem('postID') !== null){
    passedID = localStorage.getItem('postID');
    console.log(passedID);
}

let indexofBlog;
let blogList;
if (localStorage.getItem('blog-objects') !== null){
    blogList = JSON.parse(localStorage.getItem('blog-objects'));
    blogToView = blogList.find(blog => blog.id === passedID);
    //console.log(blogToView);
    indexofBlog = blogList.indexOf(blogToView);
}

if (blogToView !== null){
    //console.log(blogToView);
    let postTitleText = document.createTextNode(blogToView.title);
    postTitle.appendChild(postTitleText);
    let postContentText = document.createTextNode(blogToView.content);
    postContent.appendChild(postContentText);
    if (blogToView.image !== null){
        imageSource = blogToView.image;
        postImage.src = imageSource;
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
    console.log(postTitle.innerHTML);
    editedBlog = new Blog(postTitle.innerHTML, postTitle.innerHTML, postContent.innerHTML, postImage.src);
    blogList[indexofBlog] = editedBlog;
    localStorage.setItem('blog-objects', JSON.stringify(blogList));
    window.location.href = "index.html";
});