import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const features = [
    {
      title: "Who We Are",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Security",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Process",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Destiny",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Vision",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae."
    },
    {
      title: "Our Mission",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Values",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    },
    {
      title: "Our Goals",
      description: "Aenean lacinia feugiat massa, sit amet con sequat lacus suscipit vitae. "
    }
  ];

  return (
    <div>
      <section className="bg-white py-16 text-black">
        <div className="container mx-auto px-4">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-2">
                <div className="relative w-full h-64 overflow-hidden border transition duration-300 hover:shadow-xl group flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#75bef2] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      {/* Add an icon or other element here if needed */}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#66CC33] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Card;
