import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

function Slider() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [isIndex, setIsIndex] = useState(null);

  const handleReadMore = (planet, index) => {
    setIsBlurred(!isBlurred);
    setSelectedPlanet(planet);
    setIsSeeMore(false);
    setIsIndex(index);
  };

  const handleSeeMore = () => {
    setIsSeeMore(!isSeeMore);
  };

  const planets = [
    {
      name: "Mercury",
      color1: "#394147",
      color2: "#767f85",
      image: "./img/mercury.png",
      descripion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Venus",
      color1: "#ac1013",
      color2: "#e37b62",
      image: "./img/venus.png",
      descripion: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Earth",
      color1: "#005192",
      color2: "#0ea7eb",
      image: "./img/earth.png",
      descripion: "ccccccccccccccccccccccccccccccccccccccccccccccccc",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Mars",
      color1: "#ab1c1f",
      color2: "#e57a35",
      image: "./img/mars.png",
      descripion: "dddddddddddddddddddddddddddddddddddddddddddddddddddd",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Jupiter",
      color1: "#ae5f4e",
      color2: "#e28482",
      image: "./img/jupiter.png",
      descripion: "dddddddddddddddddddddddddddddddddddddddddddddddddddd",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Saturn",
      color1: "#a04b36",
      color2: "#d1977c",
      image: "./img/saturn.png",
      descripion: "dddddddddddddddddddddddddddddddddddddddddddddddddddd",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Uranus",
      color1: "#02396f",
      color2: "#0f71ad",
      image: "./img/uranus.png",
      descripion: "dddddddddddddddddddddddddddddddddddddddddddddddddddd",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
    {
      name: "Neptune",
      color1: "#09225a",
      color2: "#4ab5e1",
      image: "./img/neptune.png",
      descripion: "dddddddddddddddddddddddddddddddddddddddddddddddddddd",
      age: 4.6,
      orbital_period: 398.88,
      moons: 95,
      distance_from_suns: 778.5,
      length_of_days: "0d 9h 56m",
      gravity: 24.79,
      radius: 69.911,
    },
  ];

  return (
    <>
      <div>
        {isBlurred && (
          <div className="fixed top-0 left-0 w-full h-full backdrop-blur-lg z-50">
            {selectedPlanet && (
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, ${planets[isIndex].color2}, ${planets[isIndex].color1})`,
                }}
                className="absolute flex top-1/2 left-1/2 w-4/5 h-4/5 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-3xl p-10 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsBlurred(false);
                  }}
                  className="text-black absolute -top-10 right-5"
                >
                  Close
                </button>
                <div className="px-10 w-2/6">
                  <img
                    src={selectedPlanet.image}
                    alt=""
                    className="relative bottom-20 z-50 select-none"
                  />
                  <p className="-rotate-90 text-7xl select-none font-black opacity-25 relative top-6">
                    {selectedPlanet.name}
                  </p>
                </div>
                <div className="overflow-y-scroll w-full">
                  <div className="pb-6">
                    <h2 className="text-5xl font-medium">
                      {selectedPlanet.name}
                    </h2>
                    <p className="font-medium text-gray-800">
                      Planet
                      <span className="font-bold text-md pl-2 text-white">
                        Solar System
                      </span>
                    </p>
                  </div>
                  {isSeeMore ? (
                    <p>{selectedPlanet.descripion}</p>
                  ) : (
                    <p>{selectedPlanet.descripion.substring(0, 350)}</p>
                  )}
                  <button type="button" onClick={handleSeeMore}>
                    {isSeeMore ? "See Less" : "See More"}
                  </button>
                  <div className="grid grid-cols-3 gap-x-14 gap-y-5 mt-14 w-3/4">
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Age:</p>
                      <p>{selectedPlanet.age} billion years</p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Length of Days:</p>
                      <p>{selectedPlanet.length_of_days}</p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Gravity:</p>
                      <p>
                        {selectedPlanet.gravity} m/s<sup>2</sup>
                      </p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Moons:</p>
                      <p>{selectedPlanet.moons} moons</p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Oribital Period:</p>
                      <p>{selectedPlanet.orbital_period} days</p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Radius:</p>
                      <p>{selectedPlanet.radius} km</p>
                    </div>
                    <div className="bg-opacity-25 bg-white rounded-2xl p-5 text-lg font-semibold">
                      <p>Distance from Suns:</p>
                      <p>{selectedPlanet.distance_from_suns} milion km</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <Swiper
          effect={"coverflow"}
          navigation={true}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 0,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {planets.map((planet, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center relative w-[900px] group select-none"
            >
              <img
                src={planet.image}
                className="scale-[0.3] group-hover:-translate-y-10 duration-300"
                alt={planet.name}
              />
              <div
                className="text-white flex w-[550px] h-[350px] rounded-[25px] absolute top-[24rem] -z-50"
                style={{
                  backgroundImage: `linear-gradient(to right, ${planet.color2}, ${planet.color1})`,
                }}
              >
                <div className="relative top-[55%] left-[20%] group-hover:-translate-y-10 duration-300 delay-100">
                  <span
                    style={{ color: `${planet.color2}` }}
                    className="font-semibold text-[15rem] -top-1/2 -right-52 absolute "
                  >
                    {index + 1}
                  </span>
                  <h2 className="font-bold text-5xl pb-1">{planet.name}</h2>
                  <p className="font-medium">
                    Planet
                    <span className="font-bold text-md pl-2">Solar System</span>
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 duration-300 group-hover:-translate-y-10 delay-150">
                  <button
                    className="flex w-[8rem] absolute bottom-7 -left-20"
                    onClick={() => handleReadMore(planet, index)}
                  >
                    Read More
                    <MdKeyboardDoubleArrowRight size={30} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
