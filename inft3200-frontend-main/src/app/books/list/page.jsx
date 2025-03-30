
import BookList from './BookList';


export default async function BookListPage() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booksq`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
