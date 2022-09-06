import { ButtonFill } from "./ButtonFill";
import img1 from "../assets/img1_1.jpg";

const Blog = ({content, alternative}) => {

    return (
        <section className={`flex ${alternative ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col gap-6 py-12 md:px-28 px-4 items-center`}>
            <div className="flex-1">
                <img src={content.img} alt="img" className="md:h-[550px] lg:h-full object-cover" />
            </div>
            <div className="flex-1">
                <h1 className="md:text-5xl lg:text-6xl font-semibold md:leading-snug lg:leading-normal">{content.title}</h1>
                <p className="text-sm text-gray-600 md:w-2/3 lg:w-1/3 leading-relaxed py-5">{content.des}</p>
                <ButtonFill>Contact Us</ButtonFill>
            </div>
        </section>
    )
}

export { Blog }