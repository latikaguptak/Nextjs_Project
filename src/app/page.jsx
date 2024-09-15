import Image from "next/image";
import styles from "./page.module.css"; // Fix: use 'styles' instead of 'style'
import Girls from "../assets/images/Girls.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Show-off Your Choice</h1>
        <p className={styles.desc} >Innovative, Scalable web projects that combine strategic thinking, cutting-edge code, and striking designs</p>
        <Button url='/portfolio' text='See my work'/>
      </div>
      <div className={styles.item}>

      <Image
        src={Girls}
        alt="Hero Image"
        className={styles.img} // Fix: Access the styles object correctly

        />
      </div>
    </div>
  );
}
