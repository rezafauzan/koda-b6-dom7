function elementor(element, attribute = [['', '']], content, parrent) {
    const e = document.createElement(element)
    attribute.forEach(
        item => {
            e.setAttribute(item[0], item[1])
        }
    )
    if (typeof content === "string") {
        const textNode = document.createTextNode(content)
        e.appendChild(textNode)
    }

    parrent.appendChild(e)
    return e
}

async function ambilData(url) {
    const data = await fetch(url)
    const json = await data.json()
    return json.results
}

const searchInput = document.getElementById('search')
const charactersContainer = document.getElementById('characters-container')

let url = "https://rickandmortyapi.com/api/character/?name="

searchInput.addEventListener('keypress',
    input => {
        url = "https://rickandmortyapi.com/api/character/?name=" + input.target.value
        charactersContainer.innerHTML = ''

        ambilData(url).then(
            characters => {
                characters.forEach(
                    character => {
                        if (character) {
                            const card = elementor('div', [['class', 'card']], undefined, charactersContainer)
                            const cardHeader = elementor('div', [['class', 'card-header']], undefined, card)
                            const cardHeaderImg = elementor('img', [['src', character.image], ['class', 'card']], undefined, card)
                            const cardBody = elementor('div', [['class', 'card-body']], undefined, card)
                            const characterName = elementor('h4', [], character.name, cardBody)
                        }
                    }
                )
            }
        )
            .catch(
        )
    }
)

ambilData(url).then(
    characters => {
        characters.forEach(
            character => {
                if (character) {
                    const card = elementor('div', [['class', 'card']], undefined, charactersContainer)
                    const cardHeader = elementor('div', [['class', 'card-header']], undefined, card)
                    const cardHeaderImg = elementor('img', [['src', character.image], ['class', 'card']], undefined, card)
                    const cardBody = elementor('div', [['class', 'card-body']], undefined, card)
                    const characterName = elementor('h4', [], character.name, cardBody)
                }
            }
        )
    }
)
    .catch(
)