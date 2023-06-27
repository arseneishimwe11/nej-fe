import { forwardRef } from "react";
// import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
// import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  // const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-lg">
      <div className="flex justify-center mt-6 mb-14">
        <picture className="text-center">
          <img
            className="w-18 h-12 rounded-r-full"
            // src="/ferox-transparent.png"
            src="logo.jfif"
            alt="company logo"
          />
          <p className="text-xs font-mono">U<span className="text-orange-500"> laptop</span> </p>
        </picture>
      </div>

      <div className="flex flex-col">
        <a href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors bg-orange-100 text-orange-500
   
            `}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </a>
        {/* <a href="/owner">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Owner</p>
            </div>
          </div>
        </a> */}
        <a href="/login" onClick={()=>{localStorage.removeItem("token")}}>
          <div
            className={`pl-6 py-3 mx-5 mt-[280%] rounded text-center cursor-pointer flex items-center transition-colors `}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
