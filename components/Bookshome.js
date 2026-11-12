import Link from "next/link";
import { books } from "../data/books";

export default function Bookshome() {
  return (
    <main>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
           <img src={book.image} alt={book.title}  width={150}
  height={220}/>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <Link href={`/books/${book.id}`}>View book {book.id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
