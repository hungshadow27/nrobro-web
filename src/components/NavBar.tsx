import Link from "next/link";
import UserWidget from "@/components/UserWidget";

const NavBar = () => {
  return (
    <>
      <div className="pt-10 flex justify-center items-center gap-5 flex-wrap">
        <Link href="/">
          <img className="hover-zoom" src="/trangchu.png" alt="" width={130} />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61558144204912"
        >
          <img className="hover-zoom" src="/fanpage.png" alt="" width={130} />
        </Link>
        <Link href="/forum">
          <img className="hover-zoom" src="/diendan.png" alt="" width={130} />
        </Link>
        <Link href="/community">
          <img className="hover-zoom" src="/community.png" alt="" width={130} />
        </Link>
      </div>
      {/* User info or Login/Register buttons */}
      <UserWidget />
    </>
  );
};

export default NavBar;
