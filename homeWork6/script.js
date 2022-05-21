const users = [
    {
    "id": 1,
    
    "first_name": "Dulcinea",
    
    "last_name": "Beeton",
    
    "email": "dbeeton0@google.co.uk"
    
    }, 
    {
    "id": 2,
    
    "first_name": "Shoshanna",
    
    "last_name": "Eymer",
    
    "email": "seymer1@behance.net"
    
    }, 
    {
    
    "id": 3,
    
    "first_name": "Cull",
    
    "last_name": "Nazareth",
    
    "email": "cnazareth2@squidoo.com"
    
    },
    {
    
    "id": 4,
    
    "first_name": "Dorella",
    
    "last_name": "Damerell",
    
    "email": "ddamerell3@taobao.com"
    
    }, 
    {
    
    "id": 5,
    
    "first_name": "Robena",
    
    "last_name": "Jankovic",
    
    "email": "rjankovic4@youtube.com"
    
    }, 
    {
    
    "id": 6,
    
    "first_name": "Jarret",
    
    "last_name": "Guitton",
    
    "email": "jguitton5@ucoz.ru"
    
    }, 
    {
    
    "id": 7,
    
    "first_name": "Elias",
    
    "last_name": "Hanson",
    
    "email": "ehanson6@aol.com"
    
    }, 
    {
    
    "id": 8,
    
    "first_name": "Corby",
    
    "last_name": "Gartrell",
    
    "email": "cgartrell7@sogou.com"
    
    }, 
    {
    
    "id": 9,
    
    "first_name": "Scarlet",
    
    "last_name": "Eilhertsen",
    
    "email": "seilhertsen8@reverbnation.com"
    
    }, 
    {
    
    "id": 10,
    
    "first_name": "Merv",
    
    "last_name": "Lequeux",
    
    "email": "mlequeux9@sohu.com"
    
    }
];
    
(function(){
    const container = document.querySelector(".container");
    const table = document.createElement("table");
    const form = document.querySelector("form");

    const storage = {
        setItem: (key,value) => {
            localStorage.setItem(key, JSON.stringify(value));
        },

        getItem: (key) => {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    if(!localStorage.getItem("users")) {
        storage.setItem("users", users)
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const dataUsers = storage.getItem("users");
        const id = dataUsers.length + 1;
        const first_name = this.first_name.value;
        const last_name = this.last_name.value;
        const email = this.email.value;
        dataUsers.push({
            id, 
            first_name,
            last_name,
            email,
        })
        storage.setItem("users", dataUsers)
        this.first_name.value = '';
        this.last_name.value = '';
        this.email.value = '';
        render()
    })

    function render () {
        table.innerHTML = '';
        const dataUsers = storage.getItem("users")
        dataUsers.forEach(function (item) {
            const tableTr = document.createElement("tr");
            tableTr.addEventListener('click', setRed);
            tableTr.addEventListener('dblclick', showName );
            tableTr.innerHTML = createHtml(item);
            table.append(tableTr)
        })
        container.append(table)
    }

    function createHtml(item){
        return` <td>${item.id}</td><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.email}</td>`
    }

    function setRed () {
        this.classList.toggle('yellow');
    }

    function showName(event) {
        const allMa = this.querySelectorAll('td');
        alert(allMa[1].innerHTML);
    }

    render()
})()
