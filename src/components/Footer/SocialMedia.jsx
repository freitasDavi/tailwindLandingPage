import fb from "../../assets/f.png";
import tt from "../../assets/t.png";
import ig from "../../assets/i.png";

const SocialMedia = () => {
    return (
        <div className="flex flex-wrap gap-2 mt-5">
            <img src={fb} className="h-8 cursor-pointer hover:scale-110 duration-300" alt="facebook" />
            <img src={tt} className="h-8 cursor-pointer hover:scale-110 duration-300" alt="twitter" />
            <img src={ig} className="h-8 cursor-pointer hover:scale-110 duration-300" alt="instagram" />
        </div>
    )
}

export {SocialMedia}