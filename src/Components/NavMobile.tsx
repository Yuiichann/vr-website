import { IoClose } from "react-icons/io5";

interface Props {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = (props: Props) => {
  const { setNavMobile } = props;
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        className="text-3xl absolute left-4 top-6 cursor-pointer"
        onClick={() => setNavMobile(false)}
      />

      <ul className="flex flex-col pt-24 items-center space-y-8 h-full font-secondary">
        <li className="text-lg">
          <a href="#">Home</a>
        </li>
        <li className="text-lg">
          <a href="#">Company</a>
        </li>
        <li className="text-lg">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
