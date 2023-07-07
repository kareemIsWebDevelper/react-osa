import { arabic } from "../constants/ar"
import social from "../assets/icons/social.svg";
import {propType} from "../constants/interface.ts";

export const Contact = ({toggle}: propType) => {
    return (
      <div id="contact" className="grid place-items-center text-center">
        <div className="">
            <img className="w-96 h-96 -my-32" src={social} alt="image" />
            <h2 className="text-2xl">@OSA</h2>
        </div>
        <form className="w-[350px] border-2 border-[#6c0022] rounded-2xl grid gird-place-items-center p-5">
            <div className={`${toggle? 'place-items-end' : 'place-items-start'} grid`}>
                <label>
                    {toggle ? `${arabic.form[1]}` : 'Name'}
                </label>
                <input type="text" className="w-full h-8 bg-slate-100 rounded-lg mb-5" />
                  <label>
                    {toggle ? `${arabic.form[2]}` : 'Email'}
                </label>
                <input type="text" className="w-full h-8 bg-slate-100 rounded-lg mb-5" />
                  <label>
                    {toggle ? `${arabic.form[3]}` : 'Send Message'}
                </label>
                <input type="text" className="w-full h-8 bg-slate-100 rounded-lg mb-5" />
            </div>
            <button
                className="bg-[#6c0022] w-44 mx-auto text-white rounded-xl"
            >
                {toggle ? `${arabic.form[4]}` : 'Send'}
            </button>
        </form>
      </div>
    )
}