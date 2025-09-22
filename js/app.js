export const fetchBooks=async ()=>{
    const res=await fetch("https://openlibrary.org/search.json?q=javascript");
    const data= await res.json();
    
    console.log(data.docs)
    }

    fetchBooks();