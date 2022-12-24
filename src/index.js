function fetchResource() {
    fetch ("http://localhost:3000/ramens")
    .then (res => res.json())
    .then (data => data.forEach(ramen => renderARamen(ramen)))
}

function renderARamen(ramen) {
    const container = document.querySelector("#ramen-menu")
    
    let imgTag = document.createElement("img")
    imgTag.src = ramen.image

    imgTag.addEventListener("click", () => {
        let detailImage = document.querySelector(".detail-image")
        detailImage.src = ramen.image

        let name = document.querySelector(".name")
        name.innerText = ramen.name

        let restaurant = document.querySelector(".restaurant")
        restaurant.innerText = ramen.restaurant

        let rating = document.querySelector("#rating-display")
        rating.innerText = ramen.rating

        let comment = document.querySelector("#comment-display")
        comment.innerText = ramen.comment
    })

    container.append(imgTag)
}

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
            comment: comment
        }

        renderARamen(newRamen)
    })
}

ramenForm()

