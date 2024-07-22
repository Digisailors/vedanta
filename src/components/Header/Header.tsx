import {
  FaIndustry,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaBars,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import TextReader from "../Textreader/Textreader";
import { useRouter } from "next/navigation";
import useMediaQuery from '../screensiz'; // Adjust the path accordingly

const Header: React.FC = () => {
  const isMediumScreen = useMediaQuery(768);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index: number) => {
    setDropdownOpen(index);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(null);
    }, 300);
  };

  const renderNavItems = (isModal: boolean) => (
    <ul
      className={`md:flex gap-8 items-center font-semibold w-full ${
        isModal ? "flex-col text-center" : ""
      }`}
    >
      <li className="relative nav-item">
        <Link href={"/"}>
          <button
            className="focus:outline-none flex items-center"
            onMouseEnter={() => !isModal && handleMouseEnter(1)}
            onMouseLeave={() => !isModal && handleMouseLeave()}
          >
            Home
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link onClick={() => router.push("/about")} href="/about" className="">
          About Us
        </Link>
      </li>
      <li className="relative nav-item">
        <button
          className="focus:outline-none flex items-center"
          onMouseEnter={() => !isModal && handleMouseEnter(2)}
          onMouseLeave={() => !isModal && handleMouseLeave()}
        >
          Services{" "}
          {isModal ? null : (
            <FaChevronDown className="ml-1 text-xs text-blue-500" />
          )}
        </button>
        {dropdownOpen === 2 && !isModal && (
          <ul
            className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/nickel">Nickel Metal (Cathode)</Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/nickelsulphatehexahydrate">
                Nickel Sulphate Hexahydrate
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/nickelsulphatesolution">
                Nickel Sulphate Solution
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/cobaltsulphatecrystals">
                Cobalt Sulphate Crystals
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/cobaltsulphatesolution">
                Cobalt Sulphate Solutions
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/evaporitesandcommodities">
                Evaporites and Commodities
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/services/rawmaterial">Raw Materials</Link>
            </li>
          </ul>
        )}
      </li>
      <li className="nav-item">
        <Link onClick={() => router.push("/projects")} href="/projects">
          Projects
        </Link>
      </li>
      <li className="relative nav-item">
        <button
          className="focus:outline-none flex items-center"
          onMouseEnter={() => !isModal && handleMouseEnter(3)}
          onMouseLeave={() => !isModal && handleMouseLeave()}
        >
          Pages{" "}
          {isModal ? null : (
            <FaChevronDown className="ml-1 text-xs text-blue-500" />
          )}
        </button>
        {dropdownOpen === 3 && !isModal && (
          <ul
            className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-20"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/pages/faq">Faq</Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/pages/ourteam">Our Team</Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/pages/termsandconditions">
                Terms and Conditions
              </Link>
            </li>
            <li className="p-2 hover:bg-green-500 hover:text-white">
              <Link href="/pages/privacy">Privacy</Link>
            </li>
          </ul>
        )}
      </li>
      <li className="nav-item">
        <Link onClick={() => router.push("/blog")} href="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link onClick={() => router.push("/contact")} href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <header className={`${isSticky ? "sticky top-0 z-50 bg-white shadow-lg" : ""}`}>
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-8">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>Call us: (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>Opening Hours: Mon - Fri: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Email: info@example.com</span>
            </div>
          </div>
          <div>
            <TextReader />
          </div>
        </div>
      </div>
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-8">
          <Link href="/">
            <Image src="/vedanta-logo.svg" alt="Logo" width={150} height={50} />
          </Link>
          <div className="hidden md:block">{renderNavItems(false)}</div>
          <button className="md:hidden" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>
      <Modal isOpen={isOpen} onClose={toggleMenu}>
        <div className="p-4">{renderNavItems(true)}</div>
      </Modal>
    </header>
  );
};

export default Header;
