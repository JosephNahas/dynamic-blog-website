import { Blog } from "./blogModule.js";

const blogObjects = [];

let blogList = document.getElementById("blog-list");

// pass the correct ID to localstorage based on which post is clicked
function PassIDtoStorage(link){
    link.addEventListener("click", function(event){
        event.preventDefault();
        let idPass = link.parentNode.id;
        localStorage.setItem('postID', idPass);
        window.location.href = "post.html";
    });
}

// initialize the initial page load with 2 blog posts and set the local storage blog list
if (localStorage.getItem('blog-objects') === null){
    // blog post 1
    let title1 = 'Lorem ipsum dolor sit amet';
    let content1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor non ipsum a interdum. In cursus consectetur est, nec aliquet diam sodales lobortis. Maecenas non posuere justo, sit amet gravida dolor. Nunc dolor libero, blandit vitae purus eu, dictum euismod lectus. Nulla fermentum ligula vel metus dignissim consequat. Suspendisse eget mauris id justo porttitor egestas ac ac leo. Suspendisse potenti. In et elit in diam tristique rutrum. Praesent viverra mi velit, id aliquet nunc tincidunt vitae. Quisque at imperdiet erat. Suspendisse malesuada tortor eu massa gravida, sit amet scelerisque neque posuere. Vestibulum at velit orci. Suspendisse convallis blandit tellus cursus mollis.'
    let blog1 = new Blog(title1,title1, content1, 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png');
    blogObjects.push(blog1);
    // dynamically create the html blog list 
    let entry = document.createElement('li');
    entry.setAttribute('id', title1);
    blogList.appendChild(entry);
    // add link to view post page
    let a1 = document.createElement('a');
    let linkText = document.createTextNode(blog1.title);
    a1.appendChild(linkText);
    a1.title = blog1.title;
    a1.href = 'post.html';
    entry.appendChild(a1);
    PassIDtoStorage(a1); 

    // repeat for blog post 2, if there were more I'd make a function to avoid repetition, but two is fine for now
    let title2 = 'Phasellus magna eros, interdum non.';
    let content2 = 'Nunc sed vulputate arcu. Duis in fermentum ex, at aliquam ante. Pellentesque vel bibendum velit. Aenean vestibulum condimentum faucibus. Aliquam et est sed elit tristique condimentum nec vel nisi. Vivamus iaculis odio sed nisl accumsan iaculis. Donec sit amet libero malesuada, consequat lectus ac, cursus leo. Praesent nulla nisi, vulputate at tincidunt suscipit, ornare eget ligula. Vestibulum blandit volutpat massa quis tempus.';
    let blog2 = new Blog(title2, title2, content2, 'https://sm.ign.com/t/ign_nordic/review/b/black-myth/black-myth-wukong-review_xcgh.1200.jpg');
    blogObjects.push(blog2);
    let entry2 = document.createElement('li');
    entry2.setAttribute('id', title2);
    blogList.appendChild(entry2);
    let a2 = document.createElement('a');
    let linkText2 = document.createTextNode(blog2.title);
    a2.appendChild(linkText2);
    a2.title = blog2.title;
    a2.href = 'post.html';
    entry2.appendChild(a2);
    PassIDtoStorage(a2);

    // pass the blog objects array to local storage
    localStorage.setItem('blog-objects', JSON.stringify(blogObjects));
}
else{ // blog objects array already initialized, load all the objects and dynamically create html blog list
    let storedBlogObjects = JSON.parse(localStorage.getItem('blog-objects'));
    for(const blogObject of storedBlogObjects){  // for each blog object in local storage create a list item with correct properties and link it to view post page
        let entry = document.createElement('li');
        entry.setAttribute('id', blogObject.id);
        blogList.appendChild(entry);
        let a = document.createElement('a');
        let linkText = document.createTextNode(blogObject.title);
        a.appendChild(linkText);
        a.title = blogObject.title;
        a.href = 'post.html';
        entry.appendChild(a);
        PassIDtoStorage(a);
    }
}

let clearbtn = document.getElementById('clear-btn');

// reset to defaults
clearbtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    window.location.href = "index.html";
});

let postbtn = document.getElementById('post-btn');

// new post button to new post page
postbtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "new-post.html";
});

