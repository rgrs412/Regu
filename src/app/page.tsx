import styles from "@styles/HomePage.module.css"
import profilePic from "@public/images/profile-pic.jpg"
import Image from "next/image"
import PorfolioList from "@/components/PortfolioList"
import { Portfolio } from "@/models/portfolio"

async function fetchPortfolio() {
  const portfolios: Array<Portfolio> = [];
  
  return portfolios;
}

const HomePage: React.FC = async () => {

  const portfolios = await fetchPortfolio();
  return (
    <>
      <section id={styles["about-me-section"] }>
        <div>
          <h1 id={styles["profile-name"]}>Wuheng (Reg) Yu</h1>
          <h4 id={styles["profile-career"]}>Software Developer</h4>
          <p id={styles["profile-desc"]}>Hello, I'm Reg. I like to explore new technologies and tinker with electronics. 
            I am also passionate about art and video games. Tangerines are one of my favorite fruits {'\u{1F34A}'}.
          </p>
        </div>
        <Image id={styles["profile-pic"]} src={profilePic} alt="Profile Picture"/>
      </section>

      <PorfolioList portfolios={portfolios ?? []}/>
    </>
  )
}

export default HomePage
