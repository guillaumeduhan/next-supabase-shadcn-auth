import { AuthButton } from "./auth-button";
import Logo from "./Logo";

const Header = () => {
  return <header className="cursor-pointer transition duration-300 w-full relative flex items-center justify-between p-2 md:p-3">
    <Logo />
    <AuthButton />
  </header>;
}
export default Header