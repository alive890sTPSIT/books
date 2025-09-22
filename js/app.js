import { fetchBooks } from './api.js'
window.onload = async () => {
    const form=document.getElementById("search-form");
    console.log(form["search-input"].value)
}