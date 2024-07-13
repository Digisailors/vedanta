import Image from "next/image";
import Services from "../Services/Services";
import { useState } from "react";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zF7jVcHWZMT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function NickelMetalContent() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: any) => {
    if (open === index) {
      return;
    } else {
      setOpen(index);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 p-4 md:p-6 max-w-7xl container">
        <Services />
        <section className="flex-1 bg-white p-4 md:p-6 rounded shadow">
          <h1 className="text-2xl font-bold">Nickel Metal (Cathode)</h1>
          <Image
            src="https://images.pexels.com/photos/8851075/pexels-photo-8851075.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Chemical Research"
            width={700}
            height={300}
            className="mt-4 w-full h-[400px]"
          />{" "}
          <p className="mt-4 text-gray-700">
            Nickel Sulphate Hexahydrate (NiSO4·6H2O) is a crucial compound in
            various industrial applications, particularly in electroplating and
            battery production. Its vibrant emerald green crystals are highly
            soluble in water, making it an ideal source of nickel ions. The
            compound's significance grew during the Industrial Revolution and
            continues to play a vital role in modern manufacturing processes,
            especially with the increasing demand for rechargeable batteries in
            electric vehicles and portable electronics.
          </p>
          <h2 className="mt-4 text-xl font-bold">
            Why choose our Nickel Sulphate Hexahydrate?
          </h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>High purity grade</li>
            <li>Consistent quality</li>
            <li>Tailored packaging options</li>
            <li>Competitive pricing</li>
            <li>Technical support</li>
          </ul>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-100 p-8">
              <h3 className="text-lg font-bold">Superior Quality</h3>
              <p className="mt-2 text-gray-700">
                Our Nickel Sulphate Hexahydrate meets the highest industry
                standards for purity and consistency.
              </p>
            </div>
            <div className="bg-[#71b32f] p-8 text-white">
              <h3 className="text-lg font-bold">Eco-Friendly Packaging</h3>
              <p className="mt-2">
                We prioritize environmentally responsible packaging solutions
                for our products.
              </p>
            </div>
            <div className="bg-[#005298] p-8 text-white">
              <h3 className="text-lg font-bold">Expert Consultation</h3>
              <p className="mt-2">
                Our team of chemical experts is available to assist with your
                specific application needs.
              </p>
            </div>
            <div className="bg-gray-100 p-8">
              <h3 className="text-lg font-bold">Reliable Delivery</h3>
              <p className="mt-2">
                We ensure timely and secure delivery of your Nickel Sulphate
                Hexahydrate orders.
              </p>
            </div>
          </div>
          {/* Dropdown Section */}
          <div className="mx-auto p-8 bg-gray-100">
            <div>
              <div className="border-b border-gray-200">
                <button
                  className="w-full text-left py-4"
                  onClick={() => toggle(0)}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-medium ${
                        open === 0 ? "text-[#71B32F]" : "text-gray-800"
                      }`}
                    >
                      What are the main applications of Nickel Sulphate
                      Hexahydrate?
                    </span>
                    <span className="text-gray-500">
                      {open === 0 ? (
                        <HiOutlineArrowUpCircle size={25} color="black" />
                      ) : (
                        <HiOutlineArrowDownCircle size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {open === 0 && (
                  <div className="px-4 pb-4 text-gray-700">
                    Nickel Sulphate Hexahydrate is primarily used in
                    electroplating, battery production, and as a chemical
                    intermediate in various industrial processes.
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button
                  className="w-full text-left py-4"
                  onClick={() => toggle(1)}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-medium ${
                        open === 1 ? "text-[#71B32F]" : "text-gray-800"
                      }`}
                    >
                      How should Nickel Sulphate Hexahydrate be stored?
                    </span>
                    <span className="text-gray-500">
                      {open === 1 ? (
                        <HiOutlineArrowUpCircle size={25} color="black" />
                      ) : (
                        <HiOutlineArrowDownCircle size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {open === 1 && (
                  <div className="px-4 pb-4 text-gray-700">
                    It should be stored in a cool, dry place in tightly sealed
                    containers. Avoid exposure to moisture and incompatible
                    materials.
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button
                  className="w-full text-left py-4"
                  onClick={() => toggle(2)}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-medium ${
                        open === 2 ? "text-[#71B32F]" : "text-gray-800"
                      }`}
                    >
                      Is Nickel Sulphate Hexahydrate harmful to the environment?
                    </span>
                    <span className="text-gray-500">
                      {open === 2 ? (
                        <HiOutlineArrowUpCircle size={25} color="black" />
                      ) : (
                        <HiOutlineArrowDownCircle size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {open === 2 && (
                  <div className="px-4 pb-4 text-gray-700">
                    While it can be harmful if released into the environment,
                    proper handling and disposal methods minimize risks. We
                    provide guidelines for safe usage and disposal.
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left py-4"
                  onClick={() => toggle(3)}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-lg font-medium ${
                        open === 3 ? "text-[#71B32F]" : "text-gray-800"
                      }`}
                    >
                      What is the solubility of Nickel Sulphate Hexahydrate?
                    </span>
                    <span className="text-gray-500">
                      {open === 3 ? (
                        <HiOutlineArrowUpCircle size={25} color="black" />
                      ) : (
                        <HiOutlineArrowDownCircle size={25} />
                      )}
                    </span>
                  </div>
                </button>
                {open === 3 && (
                  <div className="px-4 pb-4 text-gray-700">
                    Nickel Sulphate Hexahydrate is highly soluble in water. At
                    room temperature (20°C), its solubility is approximately 625
                    g/L, making it an excellent source of nickel ions for
                    various applications.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
