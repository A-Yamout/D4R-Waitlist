import { Navbar } from "../components/Navbar";
import { WaitlistForm } from "../components/WaitlistForm";
import { Meta } from "../partials/Meta";
import Typical from 'react-typical'
import Vector from '../public/vector.png'

export default function Home() {
  return (
    <>
      <Meta
        title="D4R | Dignity 4 Refugees"
        description="The 7110 Carroll Robotics Website"
        keywords="Carroll High School, 7110, Carroll Robotics, Southlake Robotics, Carroll"
      />
      <div className="py-10 px-7 sm:px-10 md:px-20 xl:container mx-auto h-screen w-screen relative overflow-hidden">
        <Navbar />
        <Main />
        <img
          src="/vector.png"
          className="hidden lg:block lg:h-[23rem] lg:w-[23rem] xl:h-[30rem] xl:w-[30rem] 2xl:h-[35rem] 2xl:w-[35rem] absolute -bottom-3 right-0 select-none"
          draggable={false}
        />
      </div>
    </>
  );
}

const Main = () => {
  return (
    <div className="mt-[5rem] w-full lg:w-[40rem]">

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold sm:leading-[3.2rem]">
                                         
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold sm:leading-[3.2rem]">
        We are <span className="text-[#008c3d] hover:opacity-80"><Typical steps={['a nonprofit', 1500, 'Relief', 1500, 'D4R', 1500, 'Dignity 4 Refugees', 1500]}
        loop={Infinity}
        wrapper="span"
      />
          </span>         
      </h2>
      <p className="opacity-[0.76] mt-5 text-lg sm:text-xl lg:text-2xl">
        We are a section <span className="text-[#fd4c4c] font-bold opacity-100 hover:opacity-80"> 501(c)(3)</span> nonprofit dedicated to supporting people in stressed regions by providing food, water and absic supplies. We create sustainable solutions and amplify refugee voices through storytelling and advocacy, fostering resilience and hope.
        If you would like to recive email updates about our teams please submit your email below.
        
      </p>
      <WaitlistForm />
      <a className=" text-gray text-md select-none hidden sm:block" href="mailto:contact@dignity4refugees.com">
          Need to contact us?
      </a>
    </div>
  );
};
