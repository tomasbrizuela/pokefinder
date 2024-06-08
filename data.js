let div = document.querySelector('#list');
let div2 = document.querySelector('#list2');
let input = document.querySelector('input');

let getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    let array = data.results;
    return array;
}

let pokeList = [];

let pok = async () => {
    let pokemon = await getPokemons();

    pokemon.forEach(item => {
        pokeList.push({
            name: item.name,
        })
    });
}

pok();

setTimeout(() => {
    pokeList.forEach(item => {
        let p = document.createElement('p');
        p.style.border = "0px solid black";
        p.style.borderRadius = "5px";
        p.style.padding = "5px";
        p.style.width = "200px";
        p.style.backgroundColor = "white"
        p.textContent = item.name;
        p.className = "m-1 shadow text-center"

        div.appendChild(p);
    })
}, 200)


let search = (x) => {   
    let ans = pokeList.filter((item) => item.name.includes(x))

    let ps = div2.querySelectorAll('p');
    ps.forEach((item) => {
        item.remove()
    })

    if (ans.length > 0){
        ans.forEach(item => {
            let p = document.createElement('p');
            p.style.border = "0px solid black";
            p.style.borderRadius = "5px";
            p.style.padding = "5px";
            p.style.width = "200px";
            p.style.backgroundColor = "white";
            p.textContent = item.name;
            p.className = "m-1 shadow text-center"
            div2.appendChild(p);
            input.value = "";
        })
    } else {
        let p = document.createElement('p');
        p.textContent = "No pokemos name contains: " + `"${x}"` 
        div2.appendChild(p);
    }
}

let add = document.querySelector('button');

add.addEventListener('click',function(){
    let text = input.value;
    search(text);
});