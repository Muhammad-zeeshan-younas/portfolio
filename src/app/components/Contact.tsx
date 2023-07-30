import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:muhammadzeeshanyounas777@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl text-[#6e77a0] text-center ml-8">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="decoration-[#08d463]/50  underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BsFillTelephoneFill className="h-7 w-7 animate-pulse text-[#08d463]/50" />
            <p className="text-2xl">+923345228629</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <AiFillMail className="h-7 w-7 animate-pulse text-[#08d463]/50" />
            <p className="text-2xl">muhammadzeeshanyounas777@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="customInput"
              placeholder="Name"
              type="text"
            ></input>
            <input
              {...register("email")}
              className="customInput"
              placeholder="Email"
              type="email"
            ></input>
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="customInput"
            type="text"
          ></input>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="customInput"
          />
          <button
            type="submit"
            className="py-5 px-10 rounded-md font-bold text-lg bg-[#2ca965]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
