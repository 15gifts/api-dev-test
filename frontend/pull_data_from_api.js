async function getCocktailsByName(cocktailName, path) {
    let resp = await fetch(`${path}${cocktailName}`)

    let data = await resp.json()

    return data[0]
}

async function getCocktailsByIngredient(cocktailIngredient, path) {
    let resp = await fetch(`${path}${cocktailIngredient}`)

    let data = await resp.json()

    return data[0]
}

async function getPopularCocktails(path) {
    let resp = await fetch(`${path}`)

    let data = await resp.json()

    return data[0]
}

async function main() {
    let data = await getCocktailsByName("A1", "http://localhost:5002/cocktails/name/")
    console.log(data)
}

main();
