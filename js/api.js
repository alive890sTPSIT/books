import Book from './book.js'

export  const fetchBooks=async (title)=>{
    if(!title) return null;
    console.log(title)
const res=await fetch("https://openlibrary.org/search.json?title="+encodeURIComponent(title));
const data= await res.json();

// console.log(data.docs)
const books=data.docs.map(d=>new Book(d.author_name,d.first_publish_year,d.language,d.title))
// console.log(books)
return books;
}