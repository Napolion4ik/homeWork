


export  function getUsers(url,container) {
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {for(let item of data) {
        container.innerHTML += `<ul>
            <h4>${item.name}</h4>
            <li>${item.username}</li>
            <li>${item.email}</li>
        </ul>`;
    }})
}
