import { MdOutlineArrowOutward } from 'react-icons/md';

const ServiceCard = ({
  titleLine1,
  titleLine2,
  image,
  bgColor,
  textColor,
  highlightColor,
  arrowBg,
  arrowColor,
  buttonTextColor,
}) => {
  return (
    <div
      className="flex justify-between items-center w-full p-10 rounded-3xl border border-black border-b-[5px] shadow-[0_1px_0_0_#000]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Left */}
      <div className="flex flex-col gap-10 max-w-[60%]">
        <h3 className="font-medium text-2xl leading-snug">
          <span style={{ backgroundColor: highlightColor }}>{titleLine1}</span>
          <br />
          <span style={{ backgroundColor: highlightColor }}>{titleLine2}</span>
        </h3>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full p-2"
            style={{ backgroundColor: arrowBg }}
          >
            <MdOutlineArrowOutward
              className="text-xl"
              style={{ color: arrowColor }}
            />
          </button>
          <p style={{ color: buttonTextColor }}>Learn more</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center">
        <img src={image} alt="service" className="w-[140px] object-contain" />
      </div>
    </div>
  );
};

export default ServiceCard;
