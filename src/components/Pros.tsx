import {arabic} from "../constants/ar.ts";
import cards from "../assets/icons/pros/cards.svg";
import bag from "../assets/icons/pros/bag.svg";
import statistics from "../assets/icons/pros/statistics.svg";
import van from "../assets/icons/pros/van.svg";
import {propType} from "../constants/interface.ts";
export const Pros = ({toggle}: propType) => {
    return (
        <>
            <section id="about" className="grid gap-7 p-4 my-10 text-sm md:text-3xl text-center">
                <div className="flex justify-between md:justify-around md:gap-22 items-center px-4">
                    <div className="grid place-items-center">
                        <h2 className="font-bold text-xl md:text-3xl bg-[#fcd87f] w-fit px-1">
                            { toggle? `${arabic.secThree[0]}` : 'Pay Easy'}
                        </h2>
                            {toggle?
                            `${arabic.secThree[1] } \n ${ arabic.secThree[2]}` :
                            <p>We provide you with multiple <br />
                                payment methods It varies <br />
                                between direct or bank payment
                            </p>
                        }
                    </div>
                    <div className="bg-[#fcd87f] rounded-full">
                        <img className="md:w-52 md:h-52" src={cards} alt='image' />
                    </div>
                </div>
                <div className="flex justify-between md:justify-around md:gap-22 items-center px-4">
                    <div className="bg-[#fcd87f] rounded-full">
                        <img className="md:w-52 md:h-52" src={bag} alt='image' />
                    </div>
                    <div className="grid place-items-center">
                        <h2 className="font-bold text-xl md:text-3xl bg-[#fcd87f] w-fit px-1">
                            { toggle? `${arabic.secThree[3]}` : 'High Guarantee'}
                        </h2>
                        {toggle?
                            `${arabic.secThree[4] } \n ${ arabic.secThree[5]}` :
                            <p>We believe that we are  <br />
                                the fastest delivery <br />
                                company in Sudan
                            </p>
                        }
                    </div>
                </div>
                <div className="flex justify-between md:justify-around md:gap-22 items-center px-4">
                    <div className="grid place-items-center">
                        <h2 className="font-bold text-xl md:text-3xl bg-[#fcd87f] w-fit px-1">
                            { toggle? `${arabic.secThree[6]}` : 'Fast Delivery'}
                        </h2>
                        {toggle?
                            `${arabic.secThree[7] } \n ${ arabic.secThree[8]}` :
                            <p>Keep track of your stats and  <br />
                                manage them in a simple way
                            </p>
                        }
                    </div>
                    <div className="bg-[#fcd87f] rounded-full">
                        <img className="md:w-52 md:h-52" src={van} alt='image' />
                    </div>
                </div>
                <div className="flex justify-between md:justify-around md:gap-22 items- px-4">
                    <div className="bg-[#fcd87f] rounded-full">
                        <img className="md:w-52 md:h-52" src={statistics} alt='image' />
                    </div>
                    <div className="grid place-items-center">
                        <h2 className="font-bold text-xl md:text-3xl bg-[#fcd87f] w-fit px-1">
                            { toggle? `${arabic.secThree[9]}` : 'Know Your States'}
                        </h2>
                        <div className="flex flex-col">
                            {toggle?
                                `${arabic.secThree[10] } \n ${ arabic.secThree[11]}` :
                                <p>We provide you with multiple <br />
                                    payment methods It varies <br />
                                    between direct or bank payment
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}