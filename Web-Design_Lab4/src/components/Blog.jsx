import blogData from "../mockData/blogData";
import imagine1 from "../assets/img/news/main_news.png";
import imagine2 from "../assets/img/news/other_news1.png";
import imagine3 from "../assets/img/news/other_news2.png";
import imagine4 from "../assets/img/news/other_news3.png";
import imagine5 from "../assets/img/news/other_news4.png";

export const Header = ({header}) => {
    return <h1>{header}</h1>;
};
  
export const ContainerRight = ({item}) => {
  const { date, header, text, alt } = item;
  return (
    <div className="blog_container_first">
        <img src={imagine1} alt={alt}/>
        <div className="blog_container_first_text">
            <p>{date}</p>
            <h3>{header}</h3>
            <a>{text}</a>
        </div>
    </div>
  );
};

export const ContainerImage = ({alt}) => {
  if (alt === "2")
    return <img src={imagine2} alt={alt}/>;

  if (alt === "3")
    return <img src={imagine3} alt={alt}/>;

  if (alt === "4")
    return <img src={imagine4} alt={alt}/>;

  if (alt === "5")
    return <img src={imagine5} alt={alt}/>;
};

export const ContainersRight = ({blogContainersRight}) => {
  return blogContainersRight.map((item, index) => (
    <ContainerRight key={index} item={item} />
  ));
};

export const ContainerLeft = ({item}) => {
  const { date, header, text, alt } = item;
  return (
  <div className="blog_container_second">
      <ContainerImage alt={alt}/>
      <div className="blog_container_second_text">
        <p>{date}</p>
        <h3>{header}</h3>
        <a>{text}</a>
      </div>
    </div>
  );
};

export const ContainersLeft = ({blogContainersLeft}) => {
  return (
    <div className="blog_containers_second">
        {blogContainersLeft.map((item, index) => (
          <ContainerLeft key={index} item={item} />
        ))}
    </div>
  );
};

export const Blog = () => {
  const {header, blogContainersLeft, blogContainersRight} = blogData;

  return (
    <>
      <div>
          <Header header={header}/>
      </div>
      <div className="blog_containers">
          <ContainersRight blogContainersRight={blogContainersRight}/>
          <ContainersLeft blogContainersLeft={blogContainersLeft}/>
      </div>
    </>
  );
};
  
export default Blog;
