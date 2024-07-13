import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import ManganesesulphatecrystalsContent from "@/components/Maincontent/ManganesesulphatecrystalsContent";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <div
        className="py-16"
        style={{
          backgroundImage: "url('/images/img0.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Service Details</h3>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="text-[#0063A8]">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">&gt;</span>
            </li>
            <li>
              <span>Service Details</span>
            </li>
          </ul>
        </div>
      </div>
      <ManganesesulphatecrystalsContent />
      <Footer />
    </>
  );
};

export default index;
