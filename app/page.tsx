import { Hero } from '@/components/home/hero';
import { fetchBooks } from './action';
import { BookRatings } from '@/components/home/book-ratings';
import { Features } from '@/components/home/features';
import { PurchaseOptions } from '@/components/home/purchase-options';
import { Footer } from '@/components/footer/footer';

export default async function Home() {
  const data = await fetchBooks();
  return (
    <main className="w-full h-full">
      <div className=" bg-gradient-to-br from-green-300 to-yellow-200">
        <Hero books={data} />
      </div>
      <BookRatings />
      <Features />
      <PurchaseOptions />
      <Footer />
    </main>
  );
}
