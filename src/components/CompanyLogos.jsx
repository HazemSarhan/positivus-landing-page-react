import copmanyImage from '../assets/Vector6.png';
import copmanyImage2 from '../assets/Vector5.png';
import copmanyImage3 from '../assets/Company logo.png';
import copmanyImage4 from '../assets/Vector3.png';
import copmanyImage5 from '../assets/Vector2.png';
import copmanyImage6 from '../assets/Vector.png';

const CompanyLogos = () => {
  const logos = [
    copmanyImage,
    copmanyImage2,
    copmanyImage3,
    copmanyImage4,
    copmanyImage5,
    copmanyImage6,
  ];
  return (
    <section className="container mx-auto px-6 py-12 w-full overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {logos.map((logo, index) => {
          return (
            <img
              src={logo}
              key={index}
              className="h-8 w-28 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          );
        })}
      </div>
    </section>
  );
};

export default CompanyLogos;
