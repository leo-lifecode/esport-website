import Navbar from "../components/navbar";
import Button from "../components/Button";
import gamesshow from "../../public/Games showcase slider 1 (1).png";

const Home = () => {
  return (
    <section>
      <div
        className={`bg-[url('./assets/imgs/Bgmask.png')] w-full lg:h-[130vh] flex justify-center bg-cover sm:items-center relative overflow-hidden`}
      >
        <Navbar />
        <div className="xl:w-[1140px] flex md:w-[689px] xl:p-0 flex-col md:flex-row mt-[110px]">
          <div className="xl:w-1/2 md:w-1/2 font-semibold text-white h-full md:m-auto xl:mt-[330px] md:mt-[196px] flex flex-col sm:block items-start mb-[51px]">
            <h1 className="xl:text-[48px] sm:text-[28px] lg:font-bold font-semibold text-[24px]">
              Welcome to the{" "}
              <span className="text-[#00EEBD] md:font-semibold sm:text-[28px] xl:text-[48px]">
                Esports
              </span>
            </h1>
            <h1 className="xl:text-[64px] sm:text-[48px] lg:font-bold font-semibold text-[32px]">
              Multiverse
            </h1>
            <Button>Join Tournaments</Button>
          </div>
          <div className="xl:w-1/2 md:1/2 xl:mt-[220px] md:mt-[115px] flex items-center mb-[49px]">
            <img
              src={gamesshow}
              alt=""
              className="xl:w-[570px] xl:h-[672px] w-[335px] h-[388px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
