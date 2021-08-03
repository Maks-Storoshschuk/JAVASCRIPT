const url = new URL(location);
const full_info = url.searchParams.get('post');
const post = JSON.parse(full_info);
console.log(post);
document.body.innerHTML = `<div class="info_post">
    User ID - ${post.userId}.
    <h2>${post.id}. ${post.title}</h2>
    ${post.body}`;
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
            let comments = document.getElementsByClassName('comments')[0];
            for (let comment of value){
                let div = document.createElement('div');
                div.innerText = comment.body
                comments.append(div)
            }
        }
    )