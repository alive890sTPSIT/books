import { fetchBooks } from './api.js'
import {renderBook} from './ui.js'
window.onload = async () => {
    const form=document.getElementById("search-form");
    form.onsubmit=async (e)=>{
        e.preventDefault();
        const books=await fetchBooks(form['search-input'].value)
        renderBook(books)
    }

    const input = document.getElementById("search-input");
    input.oninput = async (e) => {
        document.querySelectorAll('#book-list>div>div').forEach(duc => {
            if(!duc.querySelector('h5').innerText.toLowerCase().includes(input.value.toLowerCase())) duc.classList.add('d-none');
            else duc.classList.remove('d-none');
        });
    }
}