import { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavbarLinks } from "./NavbarLinks";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between">
            <img src={Logo} alt="logo" className="h-9 cursor-pointer" />
            <ul className="md:flex hidden items-center gap-10">
                <NavbarLinks />
            </ul>
            {/* Mobile navbar */}
            <ul className={`fixed top-0 z-50 bg-white 
            w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 duration-500
            text-xl p-7 pt-20 ${open ? 'right-0' : 'right-[-100%]'}`}>
                <NavbarLinks />
            </ul>

            <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
                { open ? (
                    <ion-icon name="close-outline"></ion-icon> 
                ) : <ion-icon name="menu-outline"></ion-icon>
                }
            </div>
        </nav>
    )
}

export { Navbar }