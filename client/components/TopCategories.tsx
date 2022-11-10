import Image from "next/image";
import styles from "../styles/TopCategories.module.scss";

const TopCategories = () => {
  return (
    <div className={styles.container}>
      <h2 className="section-title">Top Categories</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Image src="/novels.jpg" alt="novels" width="60" height="60" />
          <b>Novels</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image src="/religious.jpg" alt="religious" width="60" height="60" />
          <b>Religous</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image src="/technology.jpg" alt="technlogy" width="60" height="60" />
          <b>Technology</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image
            src="/personal_growth.jpg"
            alt="personal_growth"
            width="60"
            height="60"
          />
          <b>Personal Growth</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image
            src="/politics_and_laws.jpg"
            alt="politics_and_laws"
            width="60"
            height="60"
          />
          <b>Politics and Laws</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image src="/education.jpg" alt="education" width="60" height="60" />
          <b>Education</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image
            src="/business_and_career.jpg"
            alt="Business_and_career"
            width="60"
            height="60"
          />
          <b>Business and Career</b>
          <a href="#">Explore More</a>
        </div>
        <div className={styles.category}>
          <Image
            src="/children_and_youth.jpg"
            alt="Children_and_youth"
            width="60"
            height="60"
          />
          <b>Children and Youth</b>
          <a href="#">Explore More</a>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
