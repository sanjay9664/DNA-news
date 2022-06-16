function navbar() {
    return ` <div id="mange">
    <img id="size" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="">
    <button id="btn"> <a href="hindi.html">हिंदी में पढ़ें</a></button>

</div>
<div id="sec_div">
    <button id="search" onclick="searchnews()">  <i class="fa-solid fa-magnifying-glass" ></i>
    <input type="text" id="inputdata">
    </button>
</div>`
}

export { navbar };