import Image from "next/image";
import { productPage } from "@/shared/config/productPage";
import styles from "./ProductGallery.module.scss";

export const ProductGallery = () => {
  const { images, title } = productPage;

  return (
    <section className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image
          className={styles.mainIcon}
          src={images[0].src}
          alt={title}
          width={180}
          height={180}
        />
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`${styles.thumbnail} ${
              index === 0 ? styles.thumbnailActive : ""
            }`}
          >
            <Image
              className={styles.thumbnailIcon}
              src={image.src}
              alt=""
              width={40}
              height={40}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
