import { FeaturedProducts } from "../../components/FeauturedProducts/FeaturedProducts";
import { Slider } from "../../components/Slider/Slider";
import { Categories } from "../../components/Categories/Categories";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="feautured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};
