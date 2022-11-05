import { arrow, profile__img, share } from '../assets';

const Profile = () => {
  return (
    <div className="pt-8">
      <div className="flex flex-col items-center p-0 isolate">
        <img
          id="profile__img"
          src={profile__img}
          alt="Zuri"
          className="w-[88px] h-[88px] flex flex-col justify-center items-center p-0"
        />
        <h3 className="pt-6 text-lg font-bold text-center text-gray-900 font-inter">
          <a id="twitter" href="https://twitter.com/drizzy0x_"> Idris Yusuf</a>
        </h3>
        {/*
        <h3 id="slack" className="pt-6 text-lg font-bold text-center text-gray-900 font-inter">@drizzy0x</h3
        /*}
        {/*Desktop share*/}
        <img
          className="sm:block hidden absolute w-[20px] h-[20px] right-[208px] top-[52px] cursor-pointer"
          src={arrow}
          alt=""
        />
        {/*Mobile share*/}
        <img
          className="sm:hidden block absolute w-[35px] h-[35px] right-[28px] top-[70px] cursor-pointer"
          src={share}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
