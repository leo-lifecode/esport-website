import Button from "../components/Button"
import Rectangle from "../../public/Rectangle 38.png"
import '../../src/style.css'
const About = () => {
    return (
        <div className="w-full bg-[#071626] flex justify-center items-center flex-col overflow-hidden ">
            <div className="mt-[80px]">
                <h1 className="text-white text-[24px] font-bold relative after:absolute after:w-[50%] after:h-[5px] after:bg-[#00EEBD] after:-bottom-[20px] after:-skew-x-12 after:left-[28%] block">About <span className="text-[#00EEBD]">Us</span></h1>
            </div>
            <div className=" w-[335px] text-center md:w-[688px] xl:w-[1100px] md:grid md:grid-cols-2 md:grid-rows-5 md:mt-[78px] xl:grid-cols-5 xl:grid-rows-3 items-center xl:gap-x-[22px]" >
                <div className="md:row-span-3 md:me-[20px] xl:col-span-2 xl:row-span-5 ">
                    <img src={Rectangle} alt="" className="h-[371px] xl:w-[386px] xl:h-[396px] -skew-x-3 mt-[40px] md:mt-0" />
                </div>
                <div className="md:col-span-1 xl:col-span-1 xl:row-span-1">
                    <Button children2='30' outline='border outline-1 border-[#153659] items-center' py='w-full py-[19px]' mt='md:mt-0 mt-[32px] xl:-mb-[45px]'>Tournaments Played</Button>
                </div>
                <div className="md:col-span-1 xl:col-span-1 xl:row-span-1">
                    <Button children2='10' outline='border outline-1 border-[#153659] items-center' py='w-full py-[19px]' mt='md:mt-[8px] mt-[32px] xl:-mb-[37px]' >Tournaments Won</Button>
                </div>
                <div className="md:col-span-1 xl:col-span-1 xl:row-span-1">
                    <Button children2='5' outline='border outline-1 border-[#153659] items-center' py='w-full py-[19px]' mt='md:mt-[8px] mt-[32px] xl:-mb-[33px]' >Awards Won</Button>
                </div>
                <div className="md:col-span-2 xl:col-span-3 xl:row-span-1">
                    <p className="mt-[32px] text-white md:text-left text-[16px]">He is a professional esports gamer who competes in the game Dota 2. He is the carry and star player of the team Evil Geniuses, one of the most successful and popular teams in the world. He is known for his incredible mechanical skills, game sense, and versatility. He can play any hero and any role, and often surprises his opponents with his unconventional picks and builds. </p>
                </div>
                <div className="md:col-span-2 m-auto flex justify-center xl:col-span-1 xl:row-span-1 xl:-mt-[8px]">
                    <Button outline='border outline-1 border-[#153659]' py='py-[17px] px-[45px]'>Learn More</Button>
                </div>
            </div>
        </div>
    )
}
export default About