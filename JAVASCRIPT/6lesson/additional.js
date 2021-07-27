// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let main = document.getElementsByClassName('main')[0];
        for (let user of value) {
            let adblock = document.createElement('div');
            let users = `${user.id} ${user.name}`;
            let baton = document.createElement('button');
            baton.innerText = 'Читати пости цього штриха';
            baton.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`)
                    .then(something => something.json())
                    .then(something => {
                        let posts = document.getElementsByClassName('posts')[0];
                        let postBlock = document.createElement('div')
                        posts.innerText = ' '
                        postBlock.innerText = something.body;
                        posts.append(postBlock);
                        let baton2 = document.createElement('button');
                        baton2.innerText = 'читати коментарі цього штриха'
                        let comentar = document.createElement('div');
                        posts.append(baton2, comentar)
                        baton2.onclick = () => {
                            comentar.innerHTML = ''
                            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${user.id}`)
                                .then(coments => coments.json())
                                .then(coments => {
                                    for (let coment of coments) {
                                        let comentDiv = document.createElement('div')
                                        comentDiv.innerText = coment.body;
                                        comentar.append(comentDiv)
                                        posts.append(comentar)
                                    }

                                })

                        }
                        posts.append(comentar)
                    })
            }
            adblock.append(users);
            main.append(baton, adblock);
        }
    })