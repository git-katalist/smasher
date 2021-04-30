import image from "../../public/pic1.png";
import Image from "next/image";

// NOTES //
const Title = () => {
    return <>The Showcase</>;
};
const Excerpt = () => {
    return <h1>Howdy my partner</h1>;
};

// NOTES //
const Img = () => {
    return <Image src={image} width="373" height="245" alt="" />;
};

// NOTES //
const Showcase = () => {
    return (
        <>
            <p>Say Hello</p>
        </>
    );
};

export { Title, Excerpt, Showcase, Img };
