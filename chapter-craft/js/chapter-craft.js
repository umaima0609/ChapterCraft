const addBookBtn1Home = document.getElementById('addBookBtn1Home')
addBookBtn1Home.onclick = () => {
    addBookBtn1Home.setAttribute("data-bs-toggle", "modal")
    addBookBtn1Home.setAttribute("data-bs-target", "#exampleModal")

}