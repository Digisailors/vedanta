import Header from "@/components/Header/Header";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { IoSearch } from "react-icons/io5";
import Footer from "@/components/footer/Footer";
const BlogViewPage = () => {
  const recentPost = [
    {
      image: "https://via.placeholder.com/150",
      title: "Title 1",
      subtitle: "Subtitle 1",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/150",
      title:
        "Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 v v ",
      subtitle: "Subtitle 2",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 3",
      subtitle: "Subtitle 3",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 4",
      subtitle: "Subtitle 4",
      paragraph:
        "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 5",
      subtitle: "Subtitle 5",
      paragraph:
        "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 6",
      subtitle: "Subtitle 6",
      paragraph:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 7",
      subtitle: "Subtitle 7",
      paragraph: "Deserunt mollit anim id est laborum.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 8",
      subtitle: "Subtitle 8",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      {/* header  */}
      <Header />
      {/* Navbar  */}
      <div className="w-full h-auto bg-white border border-black text-white flex justify-around items-center relative">
        <Image
          src={"https://www.vedantalimited.com/img/digi_inovation/banner.jpg"}
          alt={""}
          width={500}
          height={500}
          className="w-full h-[25rem] bg-cover"
        ></Image>
        <div className="absolute top-20">
          <div className="text-5xl mb-4">
            <h1 className="font-bold drop">Blog Listing</h1>
          </div>
          <hr />
          <div className="text-2xl flex flex-row gap-2 justify-center items-center">
            <h1 className="text-sky-600 font-semibold">Home </h1>

            <FaChevronRight size={15} />
            <h1 className="font-semibold">Blog Listing</h1>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-row justify-around p-20 gap-10 max-[750px]:p-1 *:pt-2">
        <div className="w-[70%]  flex  flex-col max-[750px]:w-[100%]">
          <div>
            <Image
              src={
                "https://www.vedantalimited.com/img/media_blog_listing/dekstop-banner.jpg"
              }
              alt={""}
              width={500}
              height={500}
              className="w-full h-[25rem] bg-cover"
            ></Image>

            <div className="bg-[#F8F8F8] py-4 ">
              <h1 className="font-bold text-3xl  m-4 hover:text-green-500  cursor-pointer mb-1">
                Sample Data Title - Title
              </h1>

              <div className="flex flex-wrap gap-2  m-4 ">
                <div className=" flex flex-row items-center gap-1">
                  <IoMdPerson /> <p className="font-bold">Admin</p>
                </div>
                <div className=" flex flex-row items-center gap-1 ">
                  <FaCalendarAlt />
                  <p className="font-bold">December 25, 2018</p>
                </div>
                <div className=" flex flex-row items-center gap-1 ">
                  <FaComments /> <p className="font-bold">0 Comments </p>
                </div>
                <div className=" flex flex-row items-center gap-1 ">
                  <FaTags />
                  <p className="font-bold"> Sample Tags , Sample Tag 2 </p>
                </div>
              </div>

              <p className="mx-4  mb-1">
                Our Story From Humble Beginnings to a Thriving Success In the
                heart of a small town, nestled between rolling hills and winding
                rivers, our journey began. It was 2010, and our founders, Jane
                Doe and John Smith, had a simple yet ambitious vision: to create
                a company that not only provided exceptional products but also
                made a meaningful impact on the community. With a shared passion
                for innovation and quality, Jane and John started their venture
                in a modest garage. The early days were filled with challenges
                and long nights, but their unwavering dedication and belief in
                their vision kept them going. They poured their hearts into
                crafting unique, high-quality products that soon caught the
                attention of local customers. Word of mouth spread quickly, and
                what started as a small-town endeavor began to grow beyond their
                wildest dreams. By 2015, we had moved into our first official
                office, a cozy space that allowed us to expand our team and
                production capabilities. With each passing year, our reputation
                for excellence continued to build, attracting customers from all
                corners of the country. Innovation and Community at Our Core At
                the heart of our success lies a commitment to innovation. We
                believe in constantly pushing the boundaries, exploring new
                ideas, and staying ahead of industry trends. Our dedicated team
                of experts works tirelessly to ensure that every product we
                offer meets the highest standards of quality and functionality.
                But it's not just about the products. From the very beginning,
                we have been deeply rooted in our community. We believe that a
                successful business should give back and make a positive
                difference. Through various initiatives, we have supported local
                schools, sponsored community events, and partnered with
                charities to help those in need. Looking Ahead Today, we stand
                proud of how far we’ve come. From a garage startup to a thriving
                company with a passionate team, our journey has been nothing
                short of remarkable. Yet, we know this is just the beginning.
              </p>
            </div>

            <div className="flex flex-row items-center justify-between">
              {/* Tags */}
              <div className="flex flex-row mt-5 gap-2  items-center">
                Tags :
                <div>
                  <button
                    type="button"
                    className=" outline outline-1 rounded-full mr-2 p-2"
                  >
                    Sample Tag 1
                  </button>
                  <button
                    type="button"
                    className=" outline outline-1 rounded-full p-2"
                  >
                    Sample Tag 2
                  </button>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex flex-row gap-1 mt-2">
                <SocialIcon url="https://twitter.com" />
                <SocialIcon url="https://www.facebook.com/" />
                <SocialIcon url="https://in.pinterest.com/" />
                <SocialIcon url="https://dribbble.com/" />
              </div>
            </div>
            <div className=" py-10  w-full">
              <p className="font-bold mb-4 text-xl">Post A Comment :-</p>
              <form>
                <div className="flex flex-row gap-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className=" w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className=" w-full  px-4 py-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Website"
                    className=" w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                  />
                </div>
                <textarea
                  placeholder="Comments"
                  className=" px-4 py-2 mb-4 border border-gray-300 rounded w-full"
                />

                <div className="mt-2 w-44 h-14 bg-green-500 font-bold text-white flex justify-center items-center hover:bg-black cursor-pointer">
                  Post comment
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* sideContent */}
        <div className=" w-[30%] flex flex-col  max-[750px]:hidden ">
          <div className="flex flex-row gap-1">
            <input
              type="text"
              placeholder="Search"
              className=" w-full px-4 py-2 mb-4 border border-gray-300  "
            />
            <IoSearch
              size={30}
              className=" text-slate-500 h-auto w-20 px-4 py-2 mb-4 border border-gray-300  cursor-pointer"
            />
          </div>
          <div className="outline outline-1  outline-gray-300 p-5">
            <p className="font-bold text-2xl">Recent Post </p>
            {recentPost.slice(0, 4).map((e, index) => (
              <div className="mt-4">
                <p className="font-bold mb-1">{e.title}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="outline outline-1  outline-gray-300 p-5 mt-6">
            <p className="font-bold text-2xl">Categories</p>
            {recentPost.slice(0, 4).map((e, index) => (
              <div className="mt-4">
                <p className="mb-1">{e.title}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="outline outline-1  outline-gray-300 p-5 mt-6">
            <p className="font-bold text-2xl">Archives</p>
            {recentPost.slice(0, 4).map((e, index) => (
              <div className="mt-4">
                <p className=" mb-1">{e.title}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="outline outline-1  outline-gray-300 p-5 mt-6">
            <p className="font-bold text-2xl">Tags</p>
            <div className="flex flex-wrap">
              {recentPost.slice(0, 7).map((e, index) => (
                <div key={index} className="mt-4 m-2 bg-[#ebebeb] p-2">
                  <p className=" mb-1">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogViewPage;
