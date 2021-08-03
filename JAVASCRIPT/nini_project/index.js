fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let users_block = document.getElementsByClassName('user_block')[0];
        for ( let user of value){
            let usersWithBaton = document.createElement('div')
            let users = document.createElement('div');
            users.innerText = `${user.id} ${user.name}`;
            usersWithBaton.append(users);
            let batonDiv = document.createElement('div')
            let baton = document.createElement('button');
            batonDiv.append(baton);
            usersWithBaton.append(batonDiv)
            let a = document.createElement('a');
            a.innerText = 'Деталі';
            a.href = `user_detail.html?user=${JSON.stringify(user)}`;
            baton.appendChild(a)
            users_block.appendChild(usersWithBaton)
        }
    })