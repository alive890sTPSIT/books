import { fetchBooks } from './api.js'
import {renderBook} from './ui.js'
window.onload = async () => {
    const form=document.getElementById("search-form");
    form.onsubmit=async (e)=>{
        e.preventDefault();
        const books=await fetchBooks(form['search-input'].value)
        renderBook(books)
    }
}