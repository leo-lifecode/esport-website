import Button from "../components/Button";
import Input from "../components/input";
import image38 from "../../public/image 38.png";
import discord from "../../public/Discord - Negative.png";
import lozenge from "../../public/Lozenge.png";
import fb from "../../public/Facebook - Negative.png";
import ig from "../../public/Instagram - Negative.png";

const Footer = () => {
    return (
        <div className="w-full flex justify-center bg-[#071626] overflow-hidden">
            <div className="xl:w-[1170px] md:w-[688px] w-[334px]">
                <div className="bg-[url('../../public/banner.png')] flex items-center xl:flex-row justify-between xl:mt-[115px] mt-[80px] bg-center bg-cover xl:px-[70px] xl:py-[65px] md:py-[30px] md:px-[89px] p-[24px] flex-col md:text-center md:-skew-x-3 -skew-x-0">
                    <img src={image38} alt="logo" className="xl:w-[90px] xl:h-[90px] rounded-xl md:w-[60px] md:h-[60px] mb-[20px] w-[39px] h-[30px]" />
                    <h3 className="md:text-[20px] lg:text-left font-semibold xl:me-[120px] xl:ms-[30px] text-white mb-[20px] text-[16px] text-center">Level Up Your Gaming Experience: Join Our Exclusive YouTube Channel Membership Today!</h3>
                    <Button py="xl:py-[18px] xl:px-[34px] px-[45px] py-[17px] bg-[#144558]" mt="">Join Tournament</Button>
                </div>
                <div className="flex justify-center flex-col md:-skew-x-3 mt-[81px] py-[30px] px-[22px] md:py-[30px] md:px-[43px] bg-[#0A1F35] ">
                    <div className="flex xl:justify-between xl:flex-row flex-col l items-center w-full mb-[40px]">
                        <img src={image38} alt="logo" className="lg:w-[130px] lg:h-[100px] md:w-[80px] md:h-[62px] md:mb-[40px] rounded-xl w-[80px] h-[62px]" />
                        <div className="flex md:flex-row flex-col gap-y-[30px] mt-[40px] text-center items-center md:gap-y-0 md:text-left gap-x-[30px] xl:ms-[102px] text-white xl:tracking-widest">
                            <a href="" className="text-[16px] font-semibold">about Us</a>
                            <a href="" className="text-[16px] font-semibold">Sponsorship</a>
                            <a href="" className="text-[16px] font-semibold">Join Us</a>
                            <a href="" className="text-[16px] font-semibold">Terms & Conditions</a>
                            <a href="" className="text-[16px] font-semibold">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="text-white xl:mt-[40px] grid xl:grid-cols-8 xl:gap-y-[60px] items-center md:grid-cols-10 md:grid-rows-2 grid-cols-4 grid-rows-4 md:gap-y-[32px] md:mb-[40px]" >
                        <div className="xl:col-span-3 hidden  xl:flex">
                            <h1 className="text-white text-[24px] font-bold relative after:absolute after:w-[30%] after:h-[4px] after:bg-[#00EEBD] after:-bottom-[20px] after:-skew-x-12 after:left-0 lg:flex ">Newsletter signup</h1>
                        </div>
                        <div className="xl:col-start-6 xl:col-span-1 md:col-span-4 md:col-start-7 md:row-start-1 col-span-2 col-start-2 row-start-3">
                            <h1 className="text-white md:text-[24px] text-[18px] font-bold relative after:absolute lg:after:w-[40%] md:after:w-[20%]  after:w-[30%] after:h-[4px] after:bg-[#00EEBD] after:-bottom-[20px] after:-skew-x-6 lg:after:left-0 md:after:left-[100px] after:left-[35.33%] block text-center lg:text-left ">Follow us</h1>
                        </div>
                        <div className="xl:col-span-3 xl:row-start-2 me-[2px] md:col-span-5 md:col-start-1 md:row-start-1 col-span-4 mb-[24px] md:mb-0">
                            <Input />
                        </div>
                        <div className="xl:col-start-4 col-span-2 md:col-start-1 col-start-2 row-start-2 mb-[40px] md:mb-0 xl:mb-0 items-center m-auto md:m-0 md:items-start">
                            <Button py="xl:py-[8px] xl:px-[32px] px-[45px] py-[14px] bg-[#B3CEEC] md:bg-[#0A1F35] md:border md:border-slate-700" mt="">Subscribe</Button>
                        </div>
                        <div className="xl:col-start-6 xl:row-start-2 md:col-start-7 md:row-start-2 md:w-full row-start-4 items-center m-auto md:m-0 md:items-start">
                            <a href=""><img src={discord} className="md:m-auto lg:m-0" alt="logo" /></a>
                        </div>
                        <div className="xl:col-start-7 xl:row-start-2 md:col-start-8 md:row-start-2 row-start-4 items-center m-auto md:m-0 md:items-start">
                            <a href=""><img src={lozenge} className="md:m-auto lg:m-0" alt="logo" /></a>
                        </div>
                        <div className="xl:col-start-8 xl:row-start-2 md:col-start-9 md:row-start-2 row-start-4 items-center m-auto md:m-0 md:items-start">
                            <a href=""><img src={fb} className="md:m-auto lg:m-0" alt="logo" /></a>
                        </div>
                        <div className="lg:hidden xl:col-start-8 xl:row-start-2 md:col-start-10 md:row-start-2 row-start-4 items-center m-auto md:m-0 md:items-start">
                            <a href=""><img src={ig} className="md:m-auto lg:m-0" alt="logo" /></a>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center text-white font-medium xl:text-[16px] xl:mt-9">
                        <p>© It's Me Fahrizal - 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer