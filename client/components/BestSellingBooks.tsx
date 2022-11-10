import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const BestSellingBooks = () => {
  return (
    <div>
      <h1 className="section-title">Best Selling Books</h1>
      <div className={styles.books}>
        <div className={styles.productCard}>
          <Image
            src="/harry_potter.jpg"
            alt="harry_potter"
            width="200"
            height="120"
          />
          <h3>Harry Potter Series 1-8</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/lord_of_the_ring.jpg"
            alt="lord of the ring"
            width="200"
            height="120"
          />
          <h3>Lord Of The Ring 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/the_hobbit.jpg"
            alt="the hobbit"
            width="200"
            height="120"
          />
          <h3>The Hobbit 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/fantastic_beasts.jpg"
            alt="fantastix beasts"
            width="200"
            height="120"
          />
          <h3>Fantastic Beasts 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/omar_series.jpg"
            alt="Omar Series"
            width="200"
            height="120"
          />
          <h3>Omar Series 1-40</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/harry_potter.jpg"
            alt="harry_potter"
            width="200"
            height="120"
          />
          <h3>Harry Potter Series 1-8</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/lord_of_the_ring.jpg"
            alt="lord of the ring"
            width="200"
            height="120"
          />
          <h3>Lord Of The Ring 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/the_hobbit.jpg"
            alt="the hobbit"
            width="200"
            height="120"
          />
          <h3>The Hobbit 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/fantastic_beasts.jpg"
            alt="fantastix beasts"
            width="200"
            height="120"
          />
          <h3>Fantastic Beasts 1-3</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>

        <div className={styles.productCard}>
          <Image
            src="/omar_series.jpg"
            alt="Omar Series"
            width="200"
            height="120"
          />
          <h3>Omar Series 1-40</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <button>Add To Cart</button>
        </div>
      </div>
      <a href="#" className={styles.seeMore}>
        See More
      </a>
    </div>
  );
};

export default BestSellingBooks;
