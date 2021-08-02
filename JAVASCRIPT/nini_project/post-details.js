const url = new URL(location);
const full_info = url.searchParams.get('user');
const user = JSON.parse(full_info);
console.log(user);
document.body.innerText = JSON.stringify(user);