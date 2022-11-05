import { Zuri_Internship_Logo, I4G } from "../assets";
import styles from '../style.module.css';

const Footer = () => {
  return (
    <div className={`flex flex-col items-center gap-16 px-0 py-12 ${styles.footerStyle}`}>
      <div className='flex flex-col items-start gap-8 px-8 py-0 test-2'>
        <div className={`flex flex-row justify-between px-0 pt-8 pb-0 gap-[270px] test-3 border-t border-gray-200 ${styles.footerStyle2}`}>
          <img className="w-[187.59px] h-[32px]" src={Zuri_Internship_Logo} alt="Zuri_Internship_Logo" />
          <h6 className="not-italic font-normal font-inter text-[1rem] leading-[1.5rem] text-center grid content-center">HNG Intenship 9 Frontend Task</h6>
          <img className="w-[132.13px] h-[32px]" src={I4G} alt="Ingressive for Good logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
