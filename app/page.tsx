import { Hero } from '@/components/hero/hero';
import { fetchBooks } from './action';

export default async function Home() {
  const data = await fetchBooks();
  return (
    <main className="w-full h-full">
      <Hero books={data} />
    </main>
  );
}
