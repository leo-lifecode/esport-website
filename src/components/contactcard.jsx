const ContactCard = (props) => {
    const { src, children1, children2 } = props
    return (
        <>
            <div className="flex">
                <img src={src} className="me-2 xl:me-[38px] " />
                <div className="xl:col-span-4 xl:text-[20px] xl:-mx-[28px]">{children1}</div>
            </div>
            <div className="xl:col-span-4 xl:col-start-2 xl:row-start-2 text-[16px] lg:ms-0 md:ms-[28px] xl:-ms-[28px]">{children2}</div>
        </>
    )
}
export default ContactCard