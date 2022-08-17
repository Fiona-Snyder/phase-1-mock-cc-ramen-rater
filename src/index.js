// write your code here

function fetchResource() {
    fetch ("http://localhost:3000/ramens")
    .then (res => res.json)
    .then (data => data.forEach(ramen => renderARamen(ramen)))
}

function renderARamen(ramen) {
    const container = document.querySelector("#ramen-menu")

    let card = document.createElement('div')
    card.className = "ramen-detail"
    
    let image = document.querySelector('.detail-image')
    card.append(image)
    image.src = ramen["image"]

    container.append(card)
}

//renderARamen(ramen)
fetchResource()

function ramenForm() {
    const form = document.querySelector("#new-ramen")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = e.target["name"].value
        const restaurant = e.target["restaurant"].value
        const image = e.target["image"].value
        const rating = e.target["rating"].value
        const comment = e.target["new-comment"].value

        const newRamen = {
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: []
        }

        renderARamen(newRamen)
    })
}

ramenForm()


