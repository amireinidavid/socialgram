import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { calSans } from "@/app/fonts";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        className:
          "hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0",
        variant: "ghost",
        size: "lg",
      })}
    >
      {/* <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" /> */}
      <Image src={logo} alt="logo" className="h-6 w-6 shrink-0 lg:hidden" />
      <p
        className={`font-semibold text-xl hidden lg:block ${calSans.className}`}
      >
        Socialgram
      </p>
    </Link>
  );
}

export default Logo;
