const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// collegamento al container della pagina
const container = document.getElementById('container');

// creazione template da js
const post = document.createElement('div');
post.className = 'post';
container.appendChild(post);

const postHeader = document.createElement('div');
postHeader.className = 'post__header';
post.appendChild(postHeader);


const postMeta = document.createElement('div');
postMeta.className = 'post-meta';
postHeader.appendChild(postMeta);

const postMetaIcon = document.createElement('div');
postMetaIcon.className = 'post-meta__icon';
postMeta.appendChild(postMetaIcon);
postMetaIcon.innerHTML = `
<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">`;

const postMetaData = document.createElement('div');
postMetaData.className = 'post-meta__data';
postMeta.appendChild(postMetaData);

const postMetaAuthor = document.createElement('div');
postMetaAuthor.className = 'post-meta__author';
postMetaData.appendChild(postMetaAuthor);
postMetaAuthor.innerHTML = 'Phil Mangione';

const postMetaTime = document.createElement('div');
postMetaTime.className = 'post-meta__time';
postMetaData.appendChild(postMetaTime);
postMetaTime.innerHTML = '4 mesi fa';

const postText = document.createElement('div');
postText.className = 'post__text';
post.appendChild(postText);
postText.innerHTML = 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.';

const postImage = document.createElement('div');
postImage.className = 'post__image';
post.appendChild(postImage);
postImage.innerHTML = '<img src="https://unsplash.it/600/300?image=171" alt="">';

const postFooter = document.createElement('div');
postFooter.className = 'post__footer';
post.appendChild(postFooter);

const jsLike = document.createElement('div');
jsLike.className = 'likes js-likes';
postFooter.appendChild(jsLike);

const likeCta = document.createElement('div');
likeCta.className = 'likes__cta';
jsLike.appendChild(likeCta);
likeCta.innerHTML = `
<a class="like-button  js-like-button" href="#" data-postid="1">
<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
<span class="like-button__label">Mi Piace</span>
</a>`;

const likesCounter = document.createElement('div');
likesCounter.className = 'likes__counter';
jsLike.appendChild(likesCounter);
likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone`

console.log(post);



// for (let i = 0; posts.length; i++) {
//     itemsContent = `

//     `
// }