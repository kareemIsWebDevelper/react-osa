import {arabic} from "../constants/ar.ts";
import {eye, target, triangle} from "../app.modules.ts";
import {propType} from "../constants/interface.ts";

export const Objective = ({toggle}: propType) => {
    return (
        <section className={`${toggle? 'place-items-end' : 'place-items-start'} grid md:mr-12 p-4 gap-8 md:p-16 text-lg md:text-3xl`}>
            <div className={`${toggle? 'items-end' : 'items-start'} flex flex-col justify-center`}>
                <div className={`${toggle? '' : 'flex-row-reverse'} flex justify-center items-center gap-1 text-lg md:text-3xl font-bold`}>
                    <p>{ toggle? `${arabic.secThree[12]}` : 'Target' }</p>
                    <img className="w-16 h-16 md:w-20 md:h-20" src={target} alt="image" />
                </div>
                <p>{ toggle? `${arabic.secThree[13]}` :'Facilitate delivery services and link customers to stores' }</p>
            </div>
            <div className={`${toggle? 'items-end' : 'items-start'} flex flex-col justify-center`}>
                <div className={`${toggle? '' : 'flex-row-reverse'} flex justify-center items-center gap-1 text-lg md:text-3xl font-bold`}>
                    <p>{ toggle? `${arabic.secThree[14]}` : 'Vision' }</p>
                    <img className="w-16 h-16 md:w-20 md:h-20" src={eye} alt="image" />
                </div>
                <p>{ toggle? `${arabic.secThree[15]}` : 'Facilitate delivery services and link customers to stores' }</p>
            </div>
            <div className={`${toggle? 'place-items-end' : 'place-items-start'} flex flex-col`}>
                <div className={`${toggle? '' : 'flex-row-reverse'} flex justify-center items-center gap-1 text-lg md:text-3xl font-bold`}>
                    <p>{ toggle? `${arabic.secThree[16]}` : 'Partnerships' }</p>
                    <img className={`${toggle? '' : 'rotate-180'} w-16 h-16 md:w-20 md:h-20`} src={triangle} alt="image" />
                </div>
            </div>
        </section>
    )
}