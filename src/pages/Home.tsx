import { arabic } from "../constants/ar";
import { TeamShow } from "../components/TeamShow";
import { propType } from "../constants/interface";
import { CardShow } from "../components/CardShow";
import {Contact} from "../components/Contact";
import {Pros} from "../components/Pros.tsx";
import {Parallax} from "../components/parallax.tsx";
import {FilteredCard} from "../components/FilteredCard.tsx";
import {SlideShow} from "../components/SlideShow.tsx";
import {AnimatedScroll} from "../utils/AnimatedScroll.tsx";
import {Objective} from "../components/Objective.tsx";
import CountUp from "react-countup";
import {
    hand, box, nature, logo, triangle,
    download, map, ceo, marketer,
    financer, opinion, aropinion,
} from "../app.modules.ts";

export const Home = ({ toggle }: propType) => {

    return (
        <div className={`${toggle? 'ar' : 'en'}`}>
            <AnimatedScroll>
                <Parallax toggle={toggle} />
            </AnimatedScroll>
            <AnimatedScroll>
                <FilteredCard hand={hand}>
                    <FilterCardText toggle={toggle} />
                </FilteredCard>
            </AnimatedScroll>
            <AnimatedScroll>
                <Pros toggle={toggle}/>
            </AnimatedScroll>
            <AnimatedScroll>
                <Objective toggle={toggle} />
            </AnimatedScroll>
            <AnimatedScroll>
                <GalleryCard />
            </AnimatedScroll>
            <AnimatedScroll>
                <FilteredCard hand={box} >
                    <FilteredCardCounter toggle={toggle} />
                </FilteredCard>
            </AnimatedScroll>
            <AnimatedScroll>
                <div id="services"  className={'relative'}>
                    <img
                        src={nature}
                        alt={'nature'}
                        className={'h-96 xs:h-72 w-full'}
                    />
                    <div className={'gridCenter'}>
                        <div className={'must myWhite text-4xl md:text-6xl flexCenter gap-8 md:gap-32 md:6xl'}>
                            <img src={logo} alt={'logo'} className={'md:w-44 md:h-44'}/>
                            <h1 className={'myBold gridCenter'}>
                                <span className={'-mb-4 mt-2'}>{toggle? 'اسرع': 'Fast'}</span> <br/>
                                <span className={'myBg h-8'}>
                            {toggle? 'توصيل': 'Delivery'}
                        </span>
                            </h1>
                            <br />
                        </div>
                        <div className={'absolute bottom-8 flexCenter gap-2'}>
                            <div className={'w-3 h-3 rounded-full border-2 border-white'} />
                            <div className={'w-3 h-3 bg-white rounded-full border-2 border-white'} />
                            <div className={'w-3 h-3 rounded-full border-2 border-white'} />
                        </div>
                    </div>
                </div>
            </AnimatedScroll>
            <AnimatedScroll>
                <div className={`${toggle? 'place-items-end md:mr-40' : 'place-items-start md:ml-40'} grid -mb-20`}>
                    <div className={`${!toggle? 'flex flex-row-reverse': ''} flex place-items-center`}>
                        <p className="-mx-4 font-bold">
                            { toggle? 'الخدمات': 'Services' }
                        </p>
                        <img
                            src={triangle} alt="image"
                            className={`${!toggle? 'rotate-180': ''} w-20 h-20`}
                        />
                    </div>
                </div>
                <div className="card-container">
                    <CardShow toggle={toggle}/>
                    <CardShow toggle={toggle}/>
                    <CardShow toggle={toggle}/>
                </div>
                <div className={`${toggle? 'place-items-end md:mr-40' : 'place-items-start md:ml-40'} grid -mt-20`}>
                    <div className={`${!toggle? 'flex flex-row-reverse': ''} flex place-items-center`}>
                        <p className="-mx-4 font-bold">
                            { toggle? 'فريق العمل': 'Teamwork' }
                        </p>
                        <img
                            src={triangle} alt="image"
                            className={`${!toggle? 'rotate-180': ''} w-20 h-20`}
                        />
                    </div>
                </div>
            </AnimatedScroll>
            <AnimatedScroll>
                <div className="Team">
                    <TeamShow
                        name={ toggle? 'وليد ياسر' : 'Walid Yasser'}
                        bio={ toggle? 'المدير التنفيذي' : 'CEO'}
                        imageUrl={ceo}
                    />
                    <TeamShow
                        name={ toggle? 'احمد حامد' : 'Ahmed Hamid'}
                        bio={ toggle? 'مدير التسويق' : 'D.Marketing'}
                        imageUrl={marketer}
                    />
                    <TeamShow
                        name={ toggle? 'احمد حامد' : 'Ahmed Hamid'}
                        bio={ toggle? 'المدير المالي' : 'D.Financial'}
                        imageUrl={financer}
                    />
                </div>
            </AnimatedScroll>
            <AnimatedScroll>
                <section className="mt-14 ml-6 grid place-items-center">
                    {toggle?
                        <img className="md:w-[500px] md:h-[250px]" src={aropinion} alt="Aropinion" /> :
                        <img className="md:w-[500px] md:h-[250px]" src={opinion} alt="opinion" />
                    }
                </section>
            </AnimatedScroll>
            <AnimatedScroll>
                <Contact toggle={toggle}/>
            </AnimatedScroll>
        </div>
    )
}

const FilteredCardCounter = ({toggle}: propType) => {
        if(toggle) {
            return (
                <div className='must gold text-3xl md:text-6xl'>
                    +<CountUp start={1} end={91} duration={10} delay={5}  />
                    <br />
                    <p className={'myWhite'}>متجر</p>
                    <br />
                    +<CountUp start={1} end={1251} duration={10} delay={5} />
                    <p className={'myWhite'}>توصيل</p>
                </div>
            )}
        else {
            return (
                <div className='must gold text-3xl md:text-6xl'>
                    +<CountUp start={1} end={91} duration={10} delay={5} />
                    <br />
                    <p className={'myWhite'}>Store</p>
                    <br />
                    +<CountUp start={1} end={1251} duration={10} delay={5} />
                    <p className={'myWhite'}>Delivery</p>
                </div>
            )}
}

const FilterCardText = ({toggle}: propType) => {
    return (
        <div className={'myWhite must w-[500px]'}>
            <h2 className="text-4xl md:text-6xl myBold mb-5">
                { toggle? arabic.secTwo[0] : 'Why Us' }
            </h2>
            {
                toggle?
                    <p className="text-sm font-light">
                        { arabic.secTwo[1] } <br />
                        { arabic.secTwo[2] } <br />
                        { arabic.secTwo[3] }
                    </p>
                :
                    <p className={toggle? '': 'md:text-xl'}>
                        We work to provide a high quality delivery      <br />
                        service snd at a high speed through which we    <br />
                        connect stores and companies with clients       <br />
                        across the regions of Khartoum state.
                    </p>
            }
        </div>
    )
}

const GalleryCard = () => {
    return (
        <div className="gridCenter">
            <SlideShow />
            <div className="-mt-12">
                <img className="w-72 h-72 md:w-72 md:h-72 cursor-pointer" src={download} alt="image" />
            </div>
            <div className="-mt-20">
                <img className="w-72 h-72 md:w-72 md:h-72" src={map} alt="image" />
            </div>
        </div>
    )
}