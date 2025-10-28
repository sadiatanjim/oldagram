const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-container")

let listPosts = ""
for(let i = 0; i < posts.length; i++) {
    listPosts += `
        <div class="container">
            <div class="post-content-1">
                <img class="avatar" src="${posts[i].avatar}">
                <div class="user-info">
                    <h3 class="user-full-name">${posts[i].name}</h3>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}">
            <div class="icons">
                <img class="icon-design heart-icon" src="images/icon-heart.png">
                <img class="icon-design" src="images/icon-comment.png">
                <img class="icon-design" src="images/icon-dm.png">
            </div>
            <p class="like-counts"><span class="like-counter">${posts[i].likes}</span> likes</p>
            <p class="username-caption">${posts[i].username} <span class="caption">${posts[i].comment}</span></p>
        </div>
    `;
}

postEl.innerHTML = listPosts;



// After rendering, select the elements
const postImages = document.querySelectorAll(".post-image");
const likeCounts = document.querySelectorAll(".like-counter");
const heartIcons = document.querySelectorAll(".heart-icon");

// Double click to like 
// looping through node list for multiple posts
postImages.forEach((img, index) => {
    img.addEventListener("dblclick", () => {
        let currentLikes = Number(likeCounts[index].textContent.replace(/,/g, ''));
        currentLikes += 1;
        likeCounts[index].textContent = currentLikes.toLocaleString('en-US');
    });
});

// Click heart icon to like
heartIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        let currentLikes = Number(likeCounts[index].textContent.replace(/,/g, ''));
        currentLikes += 1;
        likeCounts[index].textContent = currentLikes.toLocaleString('en-US');
    });
});






