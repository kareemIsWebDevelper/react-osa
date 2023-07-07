import service2 from "../assets/icons/service2.svg"; 
import "../assets/app.scss";
import { propType } from "../constants/interface";

export const CardShow = ({ toggle }: propType) => {
    return (
        <div className="card">
            <img src={service2} alt="image" className="card-image" />
            <div 
                className={`${toggle?
                    'right-[120px]':
                    'left-[120px]' }
                    z-20 text-white absolute top-[100px]`}
            >
                <p className="text-[#fcd87f] tex-sm">
                    { toggle? 'المميزة' : 'Standard'}
                </p>
                <p>150.000</p>
            </div>
            <div 
                className={`${toggle?
                    'right-[130px] text-right ':
                    'left-[110px] text-left' }
                    text-xs z-20 text-white absolute top-[197px]`}
            >
                <p className="mt-1 mr-1">
                    { toggle? 'تتسم الخدمة المميزة بالمرونة' : 'exible'}
                </p>
                <p className="mt-1 mr-1">
                    { toggle? 'بلا عقود ةمزعجة' : 'The premium service is flexible'}
                </p>
                <p className="mt-1 mr-1">
                    { toggle? 'وبلا التزامات' : 'No annoying contracts'}
                </p>
            </div>
        </div>
    )
}