import Profile from "./Profile";
import Links from "./Links";
import SocialSection from "./SocialSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="p-6 font-inter ">
      <Profile />
      <Links />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Main;
