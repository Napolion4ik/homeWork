var nameUser = prompt(`Введите имя`, "My <b>name</b> is <i>Alex</i>!");

var result = ``;

for( let i = 0; i < nameUser.length; i++) {
    if (nameUser[i] == '<' )   {
        while (nameUser[i] !== '>' ) { // выводит 0, затем 1, затем 2
            i++
            
            // alert(result += nameUser[i])
        }
        continue
    }
    result += nameUser[i];
    console.log(result)
}

alert(result)