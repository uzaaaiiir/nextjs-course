import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/uzair.jpg"
                    alt="An image showing Uzair"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Uzair</h1>
            <p>
                I blog about web development - especially full-stack frameworks
                like Spring Boot and MERN Stack
            </p>
        </section>
    );
};

export default Hero;
