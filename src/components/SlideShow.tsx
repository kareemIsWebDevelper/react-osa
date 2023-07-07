import {arrow, master, paypal, visa} from "../app.modules.ts";
import {useState} from "react";

export const SlideShow = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imageStyle = {
		backgroundImage: `url(${slides[currentIndex].image})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '300px',
		height: '300px',
	}

	const handlePrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newSlide);
	}

	const handleNext = () => {
		const isLastSlide = currentIndex === slides.length - 1; // 2
		const newSlide = isLastSlide ? 0 : currentIndex + 1;   // if 2 length 0  0 + 1 + 1 (2)
		setCurrentIndex(newSlide);
	}

	return (
		<div className="relative flexCenter md:gap-4">
			<img
				onClick={handlePrev}
				src={arrow}
				className={`${arrowStyle} rotate-180`}
				alt="arrow"
			/>
			<div style={imageStyle} />
			<img
				onClick={handleNext}
				src={arrow}
				className={arrowStyle}
				alt="arrow"
			/>
		</div>
	)
}


const slides = [
	{
		id: 1,
		title: "PayPal",
		image: paypal
	},
	{
		id: 2,
		title: "Visa",
		image: visa
	},
	{
		id: 3,
		title: "Mastercard",
		image: master
	}
]

const arrowStyle = 'cursor-pointer w-5 h-5';