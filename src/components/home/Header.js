import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

export default function Header() {
  return (
    <div>
      <Hero img={homeImg}>
        <Banner
          title="beachwalk resort"
          greeting="Welcome to"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio et vitae ipsa ad. Non corporis nesciunt"
        />
      </Hero>
    </div>
  );
}
