import React from 'react';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-black border border-b-4 border-green-600 text-white py-14">
        <div className="container mx-auto px-8 flex justify-between items-center ">
          <div>
            <h3 className="text-2xl font-bold">Get in <span className="text-blue-500">Touch</span></h3>
            <p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <IoCall className='text-green-500' />
              <div>
                <p className="font-bold">Call us on</p>
                <p>222-121-4562</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MdMarkEmailUnread className='text-green-500' />
              <div>
                <p className="font-bold">Email us</p>
                <p>support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/vedanta-logo.svg" alt="Company Logo" className="mb-4" width={200} height={200} />
            <h6 className="font-bold text-lg">About us</h6>
            <p>Many of our SELC registered employees are requested as main preferred temporary staff when a service.</p>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-4">Links</h6>
            <ul>
              <li><a className="text-gray-600 hover:text-black" href="#">Home</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">About Us</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Services</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Project</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Pages</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Blog</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-4">Services</h6>
            <ul>
              <li><a className="text-gray-600 hover:text-black" href="#">Engineering</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Petroleum & Gas</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Power & Energy</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Mechanical Engineering</a></li>
              <li><a className="text-gray-600 hover:text-black" href="#">Agricultural Processing</a></li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <h6 className="font-bold text-lg mb-4">Subscribe Today</h6>
            <p className="mb-4">Many of our SELC registered employees are requested as main</p>
            <form>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
              <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-8 text-center mt-8">
          <p className="text-gray-600">&copy; Copyright Industria 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
