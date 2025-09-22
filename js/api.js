import  Book from "./js/book.js";

export const fetchBooks=async ()=>{
const res=await fetch("https://openlibrary.org/search.json?q=javascript");
const data= await res.json();

console.log(data.docs)
const books=data.docs.map(d=>new Book(d.author_name,d.))
}