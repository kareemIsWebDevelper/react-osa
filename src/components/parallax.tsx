import parallax from "../assets/images/parallex.svg";
import {arabic} from "../constants/ar.ts";
import {propType} from "../constants/interface.ts";

export const Parallax = ({toggle}: propType) => {

    return (
        <section className="grid place-items-center md:flex md:justify-center md:items-center md:-my-32 xs:mt-8">
            <img src={parallax} alt="parallex" className="lg:w-[800px]" />
            <div className="text-4xl md:text-6xl text-center font-bold xs:-mt-16">
                <div className="font-extrabold text-4xl md:text-6xl leading-snug">
                    { toggle?
                        <p>{arabic.secOne[0]} <br /> {arabic.secOne[1]}</p>:
                        <p>Ready for a <br />
                            special experience
                        </p>
                    }
                </div>
                <button className="text-sm md:text-xl bg-[#6c0022] text-white py-2 my-10 px-8 rounded-xl">
                    { toggle? `${arabic.secOne[2]}` : 'Learn More' }
                </button>
            </div>
        </section>
    )
}
