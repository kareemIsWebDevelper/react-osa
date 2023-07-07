import { arabic } from '../constants/ar';
import triangle from "../assets/icons/trainagle.svg";
import { propType } from '../constants/interface';

export const Footer = ({toggle}: propType) => {
  return (
    <footer className='gap-3 p-10 grid place-items-center md:text-4xl'>
      <div className="grid gap-2 xs:w-80 ">
        <div className="flex justify-around items-center">
          <div className='flex place-items-center'>
            <p>{ toggle? `${arabic.footer[0]}` : 'Main' }</p>
            <img src={triangle} className='w-10 h-10' alt="image" />
          </div>
          <div className='flex place-items-center'>
            <p>{ toggle? `${arabic.footer[1]}` : 'About OSA' }</p>
            <img src={triangle} className='w-10 h-10' alt="image" />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className='flex place-items-center'>
            <p>{ toggle? `${arabic.footer[2]}` : 'Support' }</p>
            <img src={triangle} className='w-10 h-10' alt="image" />
          </div>
          <div className='flex place-items-center'>
            <p>{toggle? `${arabic.footer[3]}` : 'Services'}</p>
            <img src={triangle} className='w-10 h-10' alt="image" />
          </div>
        </div>
      </div>
      <div className='flex justify-around gap-6 items-center md:text-2xl md:mt-12 text-xs'>
        <div className='grid'>
          <p>{arabic.footer[4]}</p>
          <p>{arabic.footer[5]}</p>
        </div>
        <div className='grid text-center'>
          <p>{toggle? `${arabic.footer[6]}` : 'All rights are save'}</p>
          <p>{arabic.footer[7]}</p>
        </div>
        <div className='grid'>
          <p>{toggle? `${arabic.footer[8]}` : 'Terms of service'}</p>
          <p>{toggle? `${arabic.footer[9]}` : 'Usage Policy'}</p>
        </div>
      </div>
    </footer>
  )
}
