import Image from "next/image";
import styles from "../styles/Services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <Image
          src="/icon _truck delivery_.svg"
          alt="free delivery"
          width={50}
          height={50}
        />
        <div>
          <b>Free Delivery</b>
          <span>fastest delivery for all orders</span>
        </div>
      </div>

      <div className={styles.service}>
        <Image src="/icon _return_.svg" alt="return" width={50} height={50} />
        <div>
          <b>Return</b>
          <span>Returnable within 1 month</span>
        </div>
      </div>

      <div className={styles.service}>
        <Image
          src="/icon _secure payment line_.svg"
          alt="secure payment"
          width={50}
          height={50}
        />
        <div>
          <b>Secure Payment</b>
          <span>100% Secure Payment</span>
        </div>
      </div>

      <div className={styles.service}>
        <Image
          src="/icon _truck delivery_.svg"
          alt="secure payment"
          width={50}
          height={50}
        />
        <div>
          <b>24/7 Support</b>
          <span>Customer care Support</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
