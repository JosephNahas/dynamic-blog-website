class Blog {
    constructor(id, title, content, image){
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
    }
}

const blogObjects = [];

let blogList = document.getElementById("blog-list");

if (localStorage.getItem('blog-objects') === null){
    blog1 = new Blog('id1', 'title1', 'content1', 'image1');
    blogObjects.push(blog1);
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(blog1.title));
    blogList.appendChild(entry);
    blog2 = new Blog('id2', 'title2', 'content2', 'image2');
    blogObjects.push(blog2);
    let entry2 = document.createElement('li');
    entry2.appendChild(document.createTextNode(blog2.title));
    blogList.appendChild(entry2);
    localStorage.setItem('blog-objects', JSON.stringify(blogObjects));
    console.log('block1');
}
else{
    storedBlogObjects = JSON.parse(localStorage.getItem('blog-objects'));
    for(const blogObject of storedBlogObjects){
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(blogObject.title));
        blogList.appendChild(entry);
    }
    console.log('block2');
}