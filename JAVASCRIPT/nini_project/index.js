fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let users_block = document.getElementsByClassName('user_block')[0];
        for ( let user of value){
            let users = document.createElement('div');
            users.innerText = `${user.id} ${user.name}`;
            users_block.append(users);
            let baton = document.createElement('button');
            users_block.append(baton);
            let a = document.createElement('a');
            a.innerText = 'Деталі';
            a.href = `user_detail.html?user=${JSON.stringify(user)}`;
            baton.appendChild(a)
        }
    })