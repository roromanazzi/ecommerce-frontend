import React from "react";
import Header from "../components/Header";
import { PageTitle } from "../components/UI/PageTitle";
import styles from "./About.module.scss";

export const AboutPage = () => {
  const openParragraph = `Welcome to Jenny Haniver, a brand new line of urban street wear
that combines bold designs with unique collaborations.`;
  const firstParragraph = `We're also committed to sustainability and ethical practices. All
of our shirts are made from high-quality materials that are
sourced responsibly, and we work with suppliers who share our
values. We believe that fashion can be both cutting-edge and
conscious, and we're excited to be a part of that movement.`;
  const secondParragraph = ` Our name may sound a little strange, but it comes from a
fascinating piece of nautical folklore. "Jenny Haniver" was the
name given to dried, preserved creatures that sailors used to
create from rays and other fish. These "specimens" were often
shaped and decorated to look like strange monsters or mythical
creatures, and they became a source of fascination and curiosity
for people around the world.`;
  const thirdParragraph = `We've taken this idea of transformation and creativity and applied
it to our own line of t-shirts. Each season, we'll be partnering
with a different designer to bring you fresh, exciting designs
that push the boundaries of street wear. From bold graphics to
subtle textures, our shirts are made to stand out and make a
statement. But we're not just about style.`;
  const closeParragraph = `So whether you're a trendsetter, a fashion lover, or just someone
who wants to make a statement, we invite you to explore the world of
Jenny Haniver. We're proud to offer something truly unique, and we
can't wait to see how you make it your own.`;

  return (
    <div className={styles.container}>
      <header>
        <Header />
        <PageTitle title={"About us"} />
      </header>
      <body className={styles.body}>
        <div className={styles.topPage}>
          <div className={styles.leftPage}>
            <p className={styles.openParragraph}>{openParragraph}</p>
            <p className={styles.thirdParragraph}>{firstParragraph}</p>
            <div className={`${styles.imgContainer} ${styles.firstImg}`}></div>
            <div className={`${styles.imgContainer} ${styles.secondImg}`}></div>
          </div>
          <div className={styles.rightPage}>
            <p className={styles.firstParragraph}>{secondParragraph}</p>
            <p className={styles.secondParragraph}>{thirdParragraph}</p>
            <div className={`${styles.imgContainer} ${styles.thirdImg}`}></div>
            <div className={`${styles.imgContainer} ${styles.fourthImg}`}></div>
          </div>
        </div>
        <div className={styles.bottomPage}>
          <p className={styles.closeParragraph}>{closeParragraph}</p>
        </div>
      </body>
    </div>
  );
};
