import { expectationsData } from "../mockData/expectationsData";
import IllustrationFeature from "../assets/img/Feature Image.png";

export const Title = ({ title }) => {
    return <h2>{title}</h2>;
};

export const EarlyAccessTop = ({ early_access }) => {
  return <a href="#" className="left_cta_blue">{early_access}</a>;
};

export const EarlyAccessBot = ({ early_access }) => {
  return <a href="#" className="left_cta_orange">{early_access}</a>;
};

export const Description = ({ description }) => {
  return <p>{description}</p>;
};

export const Illustration = ({ illustration }) => {
  const { alt } = illustration;
  return <img src={IllustrationFeature} alt={alt} />;
};

const Expectations = () => {
  const {early_acces, illustration, title, description,} = expectationsData;

  return (
    <>
    <div className="expectations_section_img">
      <Illustration illustration={illustration}/>
    </div>
    <div className="expectations_section_text">
        <EarlyAccessTop early_acces={early_acces}/>
        <Title title={title}/>
        <Description description={description}/>
        <EarlyAccessBot early_acces={early_acces}/>
    </div>
    </>
  );
};

export default Expectations;
