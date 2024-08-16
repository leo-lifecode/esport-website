const Button = (props) => {
    const { outline, children2, children, py = 'md:py-[16px] py-[17px] lg:py-[14px] lg:px-[45px] md:px-[40px] px-[40px]', bg = 'bg-[#0A1F35]', mt = 'mt-[32px]' } = props;
    return (
        <>
            <button className={`${mt} ${outline} -skew-x-[6deg] ${py} ${bg} text-white flex flex-col items-center hover:bg-slate-900 duration-200 hover:ring-1 hover:ring-slate-800 hover:border-slate-800`}>
                <span className="text-[18px]">{children}</span>
                <span className="text-[24px] mt-[8px] ">{children2}</span>
            </button>
        </>
    );
};
export default Button