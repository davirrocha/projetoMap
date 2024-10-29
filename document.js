let list = document.querySelector('ul')

const btnForEach = document.querySelector('#show-all')
const btnMap = document.querySelector('#titles')
const btnFilter = document.querySelector('#the-biggest')
const btnReduce = document.querySelector('#total-titles')


function teams(teams) {

    let myList = ''

    teams.forEach(team => {
        myList += `
    <li>
        <div class="div-img">
            <img src=${team.img}>
        </div>
        <div class="text">
            <h3>${team.name}</h3>
            <p class"titulos">${team.first}</p>
            <p class"titulos">${team.second}</p>
            <p class"titulos">${team.third}</p>
        </div>
    </li>
`
        list.innerHTML = myList
    })
}


function titles() {

    const title = menuOptions.map(titles => ({
        ...titles, /*O operador ... espalha as propriedades do objeto titles original no novo objeto. Dessa forma, o novo objeto gerado por map incluirá todas as propriedades existentes em cada item original de menuOptions. */
        first: `Campeões da Champions: ${titles.champs}`,
        second: '',
        third: ''
    }))
    teams(title)
}


function filter() {

    const filter = menuOptions.filter(champs => champs.fiveWin == true)

    teams(filter)
}

function reduce() {

    const totalTiles = menuOptions.reduce((acc, itens) => acc + itens.total, 0)
    list.innerHTML = `
        <li class="total">
            <p>TOTAL DE TITUTOLS SOMADOS: <span>${totalTiles}</span></p>
        </li>
    `
    teams(totalTiles)
}

btnForEach.addEventListener('click', () => teams(menuOptions))
btnMap.addEventListener('click', titles)
btnFilter.addEventListener('click', filter)
btnReduce.addEventListener('click', reduce)