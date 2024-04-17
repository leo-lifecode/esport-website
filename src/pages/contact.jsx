import Button from "../components/Button"
import ContactCard from "../components/contactcard"
import FormInput from "../components/forminput"
import Label from "../components/label"
import Textarea from "../components/textarea"
import { useState } from "react";
import  locat  from "../../public/location.png"
import  sms  from "../../public/sms.png"
import  lozenge  from "../../public/Lozenge.png"

const Contact = () => {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        about: ""
    })

    // const handleChange = (e) => {
    //     const { value } = e.target
    //     console.log(value)
    //     setFormData({ ...formData, [firstName]: value })
    // }

    const handleFirstName = (e) => {
        console.log(e)
        setFormData({
            ...formData,
            firstName: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message, about } = formData
        console.log(formData);
    }

    return (
        <div className="w-full flex justify-center bg-[#071626]">
            <div className="xl:w-[1170px] lg:w-[780px] md:w-[688px] w-[334px] xl:mt-[160px] md:mt-[96px] mt-[80px]">
                <div className="flex xl:justify-center md:mb-[64px] mb-[40px]">
                    <h1 className="text-white text-[24px] font-bold relative after:absolute after:w-[50%] after:h-[5px] after:bg-[#00EEBD] after:-bottom-[20px] after:-skew-x-12 after:left-[28%] block">Contact Us</h1>
                </div>
                <div className="flex xl:flex-row flex-col justify-center gap-x-[56px]">
                    <div className="bg-[#0A1F35] h-max information xl:w-[442px] xl:py-[40px] xl:px-[40px] md:px-[60px] py-[32px] px-[32px] xl:flex md:grid md:grid-cols-4 md:grid-rows-2 xl:flex-col xl:gap-0 md:gap-y-[50px] flex flex-col md:-skew-x-6 -skew-x-3  border border-gray-700 text-white">
                        <div className="md:grid xl:grid-cols-5 xl:grid-rows-2 xl:col-span-auto md:col-span-2 items-center text-white mb-[20px] xl:mb-[40px]">
                            <ContactCard children1="Location:" children2="3rd Floor, Green Park, Bengaluru" src={locat} />
                        </div>
                        <div className="grid xl:grid-cols-5 xl:grid-rows-2 md:col-span-2 md:col-start-1 md:row-start-2 items-center xl:text-white mb-[20px] xl:mb-[40px]">
                            <ContactCard children1="+919876543210" children2="Contact No" src={sms} />
                        </div>
                        <div className="grid xl:grid-cols-5 xl:grid-rows-2 md:col-span-2 md:col-start-3 md:row-start-1 items-center xl:text-white mb-[20px]">
                            <ContactCard children1="Email" children2="contact@gamingcompany.com" src={lozenge} />
                        </div>
                    </div>
                    <div className="form mt-[40px] xl:mt-[0]">

                        <form action="" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-y-[32px]">
                                <FormInput type="text" placeholder="First Name" htmlFor="firstname" children="First Name*" value={formData.firstName} handle={handleFirstName} />
                                <FormInput type="text" placeholder="Last Name" htmlFor="Lastname" children="Last Name*" value={formData.lastName} handle={(e) => { e.preventDefault(); setFormData({ ...formData, lastName: e.target.value }) }} />
                                <FormInput type="email" placeholder="your email" htmlFor="email" children="Email*" value={formData.email} handle={(e) => { e.preventDefault(); setFormData({ ...formData, email: e.target.value }) }} />
                                <FormInput type="text" placeholder="select option" htmlFor="select" children="How did you hear about us?" value={formData.about} handle={(e) => { e.preventDefault(); setFormData({ ...formData, about: e.target.value }) }} />
                            </div>
                            <div className="my-4 xl:mt-[32px]">
                                <Label htmlFor="message">Message</Label>
                                <Textarea placeholder="Your Message" htmlFor="message" value={formData.message} handle={(e) => { e.preventDefault(); setFormData({ ...formData, message: e.target.value }) }} />
                            </div>
                            <div className="my-[24px] md:my-[40px] lg:my-[32px] flex md:justify-center">
                                <Button py="py-[16px] xl:px-[45px] px-[60px]" mt="">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact