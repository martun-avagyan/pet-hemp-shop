import TopNavigation from "./components/TopNavigation";
import TopBanner from "./components/TopBanner";
import Reviews from "./components/Reviews";
import ShopByConcern from "./components/ShopByConcern";
import PopularProducts from "./components/PopularProducts";
import OurStory from "./components/OurStory/OurStory";
import TrustedGuarantee from "./components/TrustedGuarantee";
import MoreInfoSection from "./components/MoreInfoSection";
import SubscribeSection from "./components/SubscribeSection";
import ImageGrid from "./components/ImageGrid";
import KeyWays from "./components/KeyWays";
import useStyles from "./styles";

function App() {
  useStyles();
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Reviews />
      <PopularProducts />
      <ShopByConcern />
      <OurStory />
      <TrustedGuarantee />
      <KeyWays />
      <MoreInfoSection />
      <ImageGrid />
      <SubscribeSection />
    </div>
  );
}

export default App;
