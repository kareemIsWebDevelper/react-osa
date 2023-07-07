import {motion, useInView, useAnimation} from "framer-motion";
import {ReactNode, useEffect, useRef} from "react";

interface Props {
	children: ReactNode;
}
export const AnimatedScroll = ({ children }: Props) => {
	const animateRef = useRef(null);
	const isInView = useInView(animateRef, { once: false });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
	}, [isInView, mainControls])

	return (
		<motion.div
			ref={animateRef}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
            animate={mainControls}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
		>
			{ children }
		</motion.div>
	)
}