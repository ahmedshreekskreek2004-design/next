
import Image from "next/image";

export default function BookDetails({ book }) {
  return (
    <section>
      <Image
        src={book.image}
        alt={book.title}
        width={250}
        height={350}
      />

      <h1>{book.title}</h1>
      <h2>{book.author}</h2>

      <p>{book.description}</p>

      <p>Rating: {book.rating} / 5</p>
    </section>
  );
}
