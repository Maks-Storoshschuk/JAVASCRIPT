const url = new URL(location);
const full_info = url.searchParams.get('user');
const user = JSON.parse(full_info);
document.body.innerHTML = `<div class="main_info">
    <h1>${user.username}</h1>
    Ім'я - ${user.name}, email: ${user.email}.
    <br> <h2>Адреса:</h2> місто - ${user.address.city}
    <br>Вулиця - ${user.address.street}
    <br>Апартамент - ${user.address.suite}
    <br>Індекс - ${user.address.zipcode}
    <br>Координати: довгота ${user.address.geo.lat}, широта - ${user.address.geo.lng}
    <br><h2>Компанія:</h2>
    ${user.company.name}.Слоган: "${user.company.catchPhrase}". ${user.company.bs}
</div><button>post of current user</button>`;
let baton = document.getElementsByTagName('button')[0];
baton.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
                let block = document.getElementsByClassName('block')[0];
                block.innerText = ' '
                for (const user of value){
                    let div = document.createElement('div');
                    let baTon = document.createElement('button');
                    let a = document.createElement('a');
                    a.innerText = 'Відкрити';
                    a.href = `post-details.html?post=${JSON.stringify(user)}`;
                    baTon.append(a)
                    div.innerText = user.title
                    div.append(baTon)
                    block.append(div)
                }
            }
        )
}








