import img1 from "../assets/item1.jpg";
import img2 from "../assets/item2.jpg";
import img3 from "../assets/item3.jpg";
import img4 from "../assets/item4.jpg";
import { Link } from "react-router-dom";
const items = [img1, img2, img3, img4];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-24">
      <div className="hidden h-[24rem] lg:carousel carousel-center bg-neutral w-full rounded-box relative">
        {items.map((img, idx) => {
          const prev = idx === 0 ? 4 : idx === 1 ? 1 : idx === 2 ? 2 : 3;

          const next = idx === 0 ? 2 : idx === 1 ? 3 : idx === 2 ? 4 : 1;
          return (
            <div
              id={`slide${idx + 1}`}
              className="carousel-item relative w-full"
              key={img}
            >
              <img src={img} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${prev}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${next}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          assumenda magnam commodi laboriosam. Voluptas temporibus natus, harum
          aspernatur eius hic doloremque dolor magnam quas laboriosam,
          cupiditate dolorem et similique deserunt.
        </p>
        <Link
          className="btn mt-4 btn-primary uppercase text-sm "
          to="/products"
        >
          our products
        </Link>
      </div>
    </div>
  );
};

export default Hero;
