import { profileLinks } from "../constants";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    /*<div>
       {profileLinks.map((profilelink) => (
        <div key={profilelink.title}>
            <p>
                {profilelink.title}
            </p>
        </div>
       ) )}
    </div>*/
    <div className={`px-24 ${styles.linkPadding}`}>
      <ul className="flex flex-col items-center py-8 mx-6">
        {profileLinks.map((lnk, links) => (
          <li className=" w-[100%] text-center " key={lnk.id}>
            <a
              href={`${lnk.links}`}
              id={lnk.id}
              className={`font-medium text-gray-900 font-inter py-6 px-8 bg-gray-200 my-4 rounded w-[100%] block ${styles.linkHover}`}
            >
              {lnk.title}
            </a>
          </li>
        ))}
        <Link
          to="/contact"
          id="contact"
          className={`flex flex-col items-center font-medium text-gray-900 font-inter py-6 px-8 bg-gray-200 my-4 rounded w-[100%] ${styles.linkHover}`}
        >
          Contact Me
        </Link>
      </ul>
    </div>
  );
};
export default Links;
