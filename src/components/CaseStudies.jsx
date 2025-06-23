import SectionHeading from './ui/SectionHeading';
import { MdOutlineArrowOutward } from 'react-icons/md';

const CaseStudies = () => {
  return (
    <section className="mx-auto container px-6 py-12">
      <SectionHeading
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        heading="Case Studies"
      />

      <div className="my-12 flex flex-col lg:flex-row items-start bg-[#191A23] rounded-3xl p-12 lg:divide-x lg:divide-white gap-5">
        {/* Card 1 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">Learn More</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">Learn More</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 px-6">
          <p className="text-white">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex items-center mt-5 gap-2">
            <p className="text-[#B9FF66]">Learn More</p>
            <MdOutlineArrowOutward className="text-[#B9FF66]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
