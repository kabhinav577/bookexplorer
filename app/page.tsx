import { Hero } from '@/components/hero/hero';
import { fetchBooks } from './action';

export default async function Home() {
  const data = await fetchBooks();
  return (
    <main className="w-full h-full bg-gradient-to-br from-green-300 to-yellow-200">
      <Hero books={data} />
    </main>
  );
}
