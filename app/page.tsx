import { Hero } from '@/components/hero/hero';
import { fetchBooks } from './action';
import { BookRatings } from '@/components/hero/book-ratings';
import { Features } from '@/components/hero/features';

export default async function Home() {
  const data = await fetchBooks();
  return (
    <main className="w-full h-full">
      <div className=" bg-gradient-to-br from-green-300 to-yellow-200">
        <Hero books={data} />
      </div>
      <BookRatings />
      <Features />
    </main>
  );
}
