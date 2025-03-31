
import BookList from './BookList';


export default async function BookListPage() {

  const response = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/books`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
