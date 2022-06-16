// https://newsapi.org/v2/everything?q=tesla&from=2022-05-14&sortBy=publishedAt&apiKey=5e58ab878b634f8b94e21a08410ca723

import { navbar } from "../component/navbar.js";


let nav = document.getElementById('first_div')

nav.innerHTML = navbar()

// function searchnews() {
//     let value = document.getElementById("inputdata").value




//     console.log(value)



// }

// var datasearch = searchnews()


// function search(e) {

//     if (e.key === "Enter") {

//         let value = document.getElementById("inputdata").value

//         console.log(value)

//         searchdata();
//     }
// }
// let ourdata = document.getElementById("inputdata").addEventListener("keydown", search)
// console.log(ourdata)


let searchdata = async() => {


    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=india&from=2022-05-15&sortBy=publishedAt&apiKey=4b78f0a156584fca8abfb5141d95a058`)

        let data = await res.json()

        console.log(data)

        let getdata = data.articles;

        getdata.forEach(function(el) {

            let div = document.createElement("div")

            let img = document.createElement("img")

            img.src = el.urlToImage;

            img.setAttribute("id", "image")

            let author = document.createElement("p")

            author.innerText = el.author

            let title = document.createElement("p")

            title.setAttribute("id", "title")

            title.innerText = el.title

            let url = document.createElement("h5")

            url.setAttribute("id", "url")

            url.innerText = el.url;

            let description = document.createElement("p")

            description.innerText = el.description

            let publishedAt = document.createElement("p")
            publishedAt.innerText = el.publishedAt

            let content = document.createElement("p")

            content.innerText = el.content

            let name = document.createElement("p")

            name.innerText = el.source.name
            div.append(img, author, title, description, name, content, publishedAt, url)

            document.getElementById("box2").append(div)


        })

    } catch (err) {
        console.log(err)
    }
}

searchdata()