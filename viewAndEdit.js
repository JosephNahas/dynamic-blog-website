import { Blog } from "./blogModule.js";

let postTitle = document.getElementById('title');
let postContent = document.getElementById('content');
let postImage = document.getElementById('image');
let editButton = document.getElementById('edit-btn');
let saveButton = document.getElementById('save-btn');
let deleteButton = document.getElementById('delete-btn');

let passedID;
if (localStorage.getItem('postID') !== null){  
    passedID = localStorage.getItem('postID'); // get the correct ID based on which post was clicked in main page
}

let blogToView;
let indexofBlog;
let blogList;
// grab the correctt bloglist object from local storage based on ID and store the index
if (localStorage.getItem('blog-objects') !== null){
    blogList = JSON.parse(localStorage.getItem('blog-objects'));
    blogToView = blogList.find(blog => blog.id === passedID);
    indexofBlog = blogList.indexOf(blogToView);
}

let imageSource;
// fill out the post details 
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

// edit button, make the title and content editable
editButton.addEventListener("click", function(event){
    event.preventDefault();
    postTitle.setAttribute('contenteditable', true);
    postContent.setAttribute('contenteditable', true);
});


let editedBlog;
// save button, change the blog post details and replace the post in the stored blog list at the correct index
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    editedBlog = new Blog(postTitle.innerHTML, postTitle.innerHTML, postContent.innerHTML, postImage.src);
    blogList[indexofBlog] = editedBlog;
    localStorage.setItem('blog-objects', JSON.stringify(blogList));
    window.location.href = "index.html";
});

// delete button, ask for confirmation and delete the post from local storage
deleteButton.addEventListener('click', function(event){
    event.preventDefault();
    if (confirm("Are you sure you want to delete this post?")){
        blogList.splice(indexofBlog, 1);
        localStorage.setItem('blog-objects', JSON.stringify(blogList));
        window.location.href = "index.html";
    }
});