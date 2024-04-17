import Button from "../components/Button";
import Card from "../components/card";
import Datashop from "../data/ourshop";
import React, { useEffect, useState } from "react";
const Ourshop = () => {
    const [count, setCount] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            const x = window.innerWidth;
            if (x >= 1200) {
                setCount(3);
            } else if (x >= 768) {
                setCount(4);
            } else {
                setCount(3);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const card = [];

    for (let i = 0; i < count; i++) {
        card.push(Datashop[i]);
    }

    return (
        <div className="w-full flex justify-center flex-col items-center bg-[#071626] lg:pt-[160px] md:pt-[96px] pt-[80px]">
            <div className="xl:w-[1170px] md:w-[688px] lg:w-[768px]">
                <div className="flex justify-center">
                    <h1 className="text-white text-[24px] font-bold relative after:absolute after:w-[50%] after:h-[5px] after:bg-[#00EEBD] after:-bottom-[20px] after:-skew-x-12 after:left-[28%] block">OurShop</h1>
                </div>
                <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-[80px] md:gap-[30px] gap-[20px]">
                    <Card card={card} Playmode='' Platform='' Prize='' />
                </div>
                <div className="flex justify-center">
                    <Button>view more</Button>
                </div>
            </div>
        </div>
    )
}
export default Ourshop;