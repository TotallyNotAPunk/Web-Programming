import brandsData from "../mockData/brandsData";
import googlePNG from "../assets/img/brands/google.png";
import slackPNG from "../assets/img/brands/slack.png";
import atlassianPNG from "../assets/img/brands/atlassian.png";
import dropboxPNG from "../assets/img/brands/dropbox.png";
import shopifyPNG from "../assets/img/brands/shopify.png";

export const BrandsImage = ({ brand: { alt } }) => {
  // const { brand } = props;
  // const { alt } = brand;

  // console.log(alt);
  if (alt === "google")
    return <img className="brands_section__img" src={googlePNG} alt={alt} />;

  if (alt === "slack")
    return <img className="brands_section__img" src={slackPNG} alt={alt} />;

  if (alt === "atlassian")
    return <img className="brands_section__img" src={atlassianPNG} alt={alt} />;

  if (alt === "dropbox")
    return <img className="brands_section__img" src={dropboxPNG} alt={alt} />;

  if (alt === "shopify")
    return <img className="brands_section__img" src={shopifyPNG} alt={alt} />;
};

export const BrandsTemplate = ({ brandsData }) => {
  // console.log(brandsData);
  return brandsData.map((brand, index) => (
    <BrandsImage key={index} brand={brand} />
  ));
};

const Brands = () => {
  return <BrandsTemplate brandsData={brandsData} />;
};

export default Brands;
