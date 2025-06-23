import SectionHeading from './ui/SectionHeading';
import cardImage1 from '../assets/card-image-1.png';
import cardImage2 from '../assets/card-image-2.png';
import cardImage3 from '../assets/card-image-3.png';
import cardImage4 from '../assets/card-image-4.png';
import cardImage5 from '../assets/card-image-5.png';
import cardImage6 from '../assets/card-image-6.png';
import serviceImage from '../assets/service-image.png';
import ServiceCard from './ui/ServiceCard';
import Button from './ui/Button';

const Services = () => {
  return (
    <section id="services" className="mx-auto container px-6 py-8">
      <SectionHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card */}
          <ServiceCard
            titleLine1="Search engine"
            titleLine2="optimization"
            image={cardImage1}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Pay-per-click"
            titleLine2="advertising"
            image={cardImage2}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Social Media"
            titleLine2="Marketing"
            image={cardImage3}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="#FFFFFF"
            arrowColor="black"
            buttonTextColor="#FFFFFF"
          />
          <ServiceCard
            titleLine1="Email"
            titleLine2="Marketing"
            image={cardImage4}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="black"
            arrowColor="#B9FF66"
            buttonTextColor="black"
          />
          <ServiceCard
            titleLine1="Content"
            titleLine2="Creation"
            image={cardImage5}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Analytics and"
            titleLine2="Tracking"
            image={cardImage6}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="#FFFFFF"
            arrowColor="black"
            buttonTextColor="#FFFFFF"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center bg-[#F3F3F3] rounded-2xl my-12 px-15 py-12 md:py-0">
          <div className="left flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Let’s make things happen</h3>
            <p className="w-full md:w-1/2">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button
              text="Get your free proposal"
              className={'bg-black text-white w-full md:w-fit'}
            />
          </div>
          <div className="right w-2/4 hidden md:block">
            <img src={serviceImage} alt="service-image" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
