import BookDetails from "../../../components/BookDetails";
import { books } from "../../../data/books";
import { notFound } from "next/navigation";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const book = books.find((item) => item.id === id);

  if (!book) {
    notFound();
  }

  return <BookDetails book={book} />;
}
