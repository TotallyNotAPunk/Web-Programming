import { ctaData } from "../mockData/ctaData";

export const Header = ({header}) => {
    return <h3>{header}</h3>;
};

export const Text = ({text}) => {
    return <p>{text}</p>;
};

export const Button = ({button}) => {
    return <button><h3>{button}</h3></button>;
};


const Cta = () => {
    const {button,header,text} = ctaData;

    return (
        <>
            <div className="cta_rectangle">
                <div className="cta_text">
                    <Text text={text}/>
                    <Header header={header}/>
                </div>
                <div className="cta_button">
                    <Button button={button}/>
                </div>
            </div>
        </>
    );
};

export default Cta;
