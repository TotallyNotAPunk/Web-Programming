import { heroData } from "../mockData/heroData";
import IllustrationSvg from "../assets/img/Illustration.png";

export const HeaderTemplate = ({ header }) => {
  return <h1 className="left__header">{header}</h1>;
};

export const DescriptionTemplate = ({ description }) => {
  return <p className="left__description">{description}</p>;
};

export const ButtonTemplate = ({ ctaButton }) => {
  const { type, title } = ctaButton;

  switch (type) {
    case "input":
      return <input type="text" placeholder={title} />;

    case "button":
      return (
        <button className="cta_buttons__signin btn primary-btn">{title}</button>
      );

    default:
      return ``;
  }
};

export const ButtonsTemplate = ({ ctaButtons }) => {
  return (
    <div className="left__cta_buttons">
      {ctaButtons.map((ctaButton, index) => (
        <ButtonTemplate key={index} ctaButton={ctaButton} />
      ))}
    </div>
  );
};

export const IllustrationTemplate = ({ illustration }) => {
  const { alt } = illustration;

  return <img src={IllustrationSvg} alt={alt} />;
};

const Hero = () => {
  const { header, description, illustration, heroCtaButtons } = heroData;

  // console.log(heroCtaButtons);

  return (
    <>
      <div className="hero_section__left">
        <HeaderTemplate header={header} />
        <DescriptionTemplate description={description} />
        <ButtonsTemplate ctaButtons={heroCtaButtons} />
      </div>
      <div className="hero_section__right">
        <IllustrationTemplate illustration={illustration} />
      </div>
    </>
  );
};

export default Hero;
