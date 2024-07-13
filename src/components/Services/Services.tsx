import React from "react";

const Services = () => {
  const handleMouseEnter = (index: number) => {
    console.log("Mouse entered on item:", index);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
  };
  return (
    <aside className="w-80 pr-4 md:pr-6">
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Services</h2>
          <ul
            className="space-y-2 text-md mt-4"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a href="/services/nickel" className="block font-bold ml-2">
                Nickel Metal (Cathode)
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/nickelsulphatehexahydrate"
                className="block font-bold ml-2"
              >
                Nickel Sulphate Hexahydrate
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/nickelsulphatesolution"
                className="block font-bold ml-2"
              >
                Nickel Sulphate Solution
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/cobaltsulphatecrystals"
                className="block font-bold ml-2"
              >
                Cobalt Sulphate Crystals
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/cobaltsulphatesolution"
                className="block font-bold ml-2"
              >
                Cobalt Sulphate Solutions
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/manganesesulphatesolutions"
                className="block font-bold ml-2"
              >
                Manganese Sulphate Solutions
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/manganesesulphatecrystals"
                className="block font-bold ml-2"
              >
                Manganese Sulphate Crystals
              </a>
            </li>
            <li className=" bg-gray-100 hover:bg-[#005298] py-3 text-gray-700 hover:text-white hover:border-l-[6px] hover:border-[#71b32f] border-l-[6px] border-l-gray-100">
              <a
                href="/services/sodiumsulphateanhydrous"
                className="block font-bold ml-2"
              >
                Sodium Sulphate Anhydrous
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Brochures</h2>
          <p className="mt-2 text-gray-700">
            View our 2019 financial prospectus brochure for an easy to read
            guide on all of the services offer.
          </p>
          <button className="mt-4 w-full bg-gray-200 text-gray-700 font-bold px-4 py-2 hover:text-[#71b32f] hover:bg-[#005298]">
            Download Brochure
          </button>
          <button className="mt-4 w-full bg-gray-200 text-gray-700 font-bold px-4 py-2 hover:text-[#71b32f] hover:bg-[#005298]">
            Characteristics
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Services;
