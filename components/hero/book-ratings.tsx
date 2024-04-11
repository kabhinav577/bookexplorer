import Image from 'next/image';

export const BookRatings = () => {
  return (
    <div
      className="lg:px-20 w-full my-12 h-[600px] bg-center bg-cover bg-no-repeat lg:h-[500px] py-8"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url(/back-img.jpg)',
        zIndex: -1,
      }}
    >
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
        <div className="flex w-full lg:w-[50%] items-center justify-center lg:justify-end">
          <Image
            src="/3d-book.png"
            width={300}
            height={300}
            alt="Hero"
            className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-4 w-full lg:w-[50%] px-8 lg:px-0">
          <h1 className="text-3xl font-semibold text-slate-300">
            Best Ratings
          </h1>
          <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            suscipit dicta aliquam sequi. Quisquam facilis, officia, eaque
            explicabo, perferendis minima voluptas culpa tenetur sint temporibus
            expedita obcaecati? Illo excepturi placeat iste eligendi voluptate
            recusandae nulla?
          </p>
          <div className="w-[50%] h-[60px] flex justify-center items-center">
            <div className="bg-orange-400 w-[40%] rounded-tl-sm rounded-bl-sm h-full flex flex-col items-center justify-center">
              <span className="text-xl">4.0</span>
              <span>⭐️⭐️⭐️⭐️</span>
            </div>
            <div className="bg-white h-full w-[60%] rounded-tr-sm rounded-br-sm flex justify-center items-center text-slate-500 text-xl">
              Look Closer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
