
const users = [{
    "id": 1,
    
    "name": "Veronika",
    
    "email": "vgroves0@vistaprint.com",
    
    "age": 50,
    
    "city": "Javhlant",
    
    "gender": "Female",
    
    "inn": 2604048463,

    "img": "img/2.jpg"
    
    }, {
    
    "id": 2,
    
    "name": "Correy",
    
    "email": "cskidmore1@shop-pro.jp",
    
    "age": 50,
    
    "city": "Junglinster",
    
    "gender": "Male",
    
    "inn": 5396152028,

    "img": "img/3.jpg"
    
    }, {
    
    "id": 3,
    
    "name": "Chrissie",
    
    "email": "csobieski2@go.com",
    
    "age": 40,
    
    "city": "Mercaderes",
    
    "gender": "Female",
    
    "inn": 7437115687,

    "img": "img/4.jpg"
    
    }, {
    
    "id": 4,
    
    "name": "Adrianna",
    
    "email": "awharrier3@hud.gov",
    
    "age": 33,
    
    "city": "Manuel Cavazos Lerma",
    
    "gender": "Non-binary",
    
    "inn": 6292774004,

    "img": "img/5.jpg"
    
    }, {
    
    "id": 5,
    
    "name": "Fairlie",
    
    "email": "feliasen4@bing.com",
    
    "age": 34,
    
    "city": "Радовиш",
    
    "gender": "Female",
    
    "inn": 5943534093,

    "img": "img/1.jpg"
    
    },
    {
    
    "id": 6,
        
    "name": "Vick",
        
    "email": "vickdick4@bing.com",
        
    "age": 23,
        
    "city": "Мухосранськ",
        
    "gender": "Male",
        
    "inn": 5923334012,
    
    "img": "img/2.jpg"
        
        }
];

    
(function(){
    const container = document.querySelector('.container');

    function addHtml (item) {
        return `
            <div class="information">
                <div class="information__image">
                <img src="${item.img}" alt="">
                </div>
                <div class="information__info">
                    <div class="information__info-box">
                        <div class="information__info-inn information__info-wrapper">
                        inn: ${item.inn}
                        </div>
                        <div class="information__info-name information__info-wrapper">
                            name: ${item.name}
                        </div>
                        <div class="information__info-age information__info-wrapper">
                            age: ${item.age}
                        </div>
                    </div>
                    <div class="information__info-box">
                        <div class="information__info-email information__info-wrapper">
                            email: ${item.email}
                        </div>
                        <div class="information__info-city information__info-wrapper">
                            city: ${item.city}
                        </div>
                        <div class="information__info-gender  information__info-wrapper">
                            gender: ${item.gender}
                        </div>
                    </div>
                </div>
            </div>
            `;
    };

    function creatHtml(){
        const btnArrow = document.createElement("img");
        btnArrow.setAttribute("src", 'img/arrow.svg');
        for(let item of users) {
            const containerBox = document.createElement("div");
            const btnName = document.createElement("div");

            btnName.classList = 'btn-name';
            btnName.innerHTML = item.name;
            btnName.append(btnArrow)

            containerBox.prepend(btnName);
            containerBox.innerHTML += addHtml(item)
            containerBox.querySelector(".btn-name").addEventListener("click", openAccordion)

            container.append(containerBox);
            }
        };


    function openAccordion (event) {
        const information = this.nextElementSibling;
        const btnArrow = this.querySelector('img')
        const allBox = document.querySelectorAll(".information");
        const allBtnArrow = document.querySelectorAll("img[src='img/arrow.svg']");


        if(information.style.maxHeight) {
            information.style.maxHeight = null;
            btnArrow.style.transform = 'rotate(0deg)';
        }
        else {
            allBox.forEach(item => {
                item.style.maxHeight = null;
            })
            allBtnArrow.forEach(items => {
                items.style.transform = 'rotate(0deg)';
            })
            information.style.maxHeight = 220 + 'px';
            btnArrow.style.transform = 'rotate(90deg)';
        }
    }
    creatHtml()

})()
