import React from "react";
import SplitReveal from "@/Animations/TextAnimations/SplitReveal";
import Up from "./Up";
import { motion } from "framer-motion";

const fadeVariants = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};



const Dream = () => {
	return (
		<div className="w-full min-h-screen flex flex-col justify-center mt-8 mb-0 md:my-8 pt-0 md:mt-0">
			<div className="max-w-7xl mx-auto w-full px-4">
				<div className="grid grid-rows-2 gap-0 items-center mb-0 md:grid-cols-1 md:mb-16">
					<div className="max-w-xl order-2 md:order-1">
						<SplitReveal
							width="100%"
							fontsize="1.1rem"
							color="#f5f5f5"
							text="Cyper Studio, an emerging agency, embodies dynamism and creativity, driven by a dedicated team eager to bring your vision to life. We are your partners in progress, committed to exceeding expectations and pushing boundaries in the digital landscape."
							dangerouslySetInnerHTML={true}
						/>
					</div>
					<motion.div
						variants={fadeVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className="flex justify-center order-1 md:order-2"
					>
						<video
							loop
							autoPlay
							muted
							playsInline
							className="w-80 h-80 object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 md:w-64 md:h-64 sm:w-56 sm:h-56"
						>
							<source
								src="https://res.cloudinary.com/divbobkmd/video/upload/v1695425223/Cyper%20studio/yes-oh_mnadqn.mp4"
								type="video/mp4"
							/>
						</video>
					</motion.div>
				</div>
				{/* <hr className="w-4/5 mx-auto mb-16 border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:mb-12" /> */}
				<div className="dashboard">
					<div className="flex flex-col items-center gap-12 text-center">
						<motion.div
							variants={fadeVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							className="max-w-3xl px-4"
						>
							<p className="text-xs text-white opacity-70 tracking-widest uppercase mb-3">
								For Visionaries Like You
							</p>
							<h1 className="text-lg leading-tight text-neutral-200 font-medium md:text-xl sm:text-xl">
								At Cyber Studio, we don’t just write code—we craft futures. Every line, every pixel, and every interaction is a step toward turning your boldest ideas into tangible digital realities.
							</h1>
						</motion.div>
						<motion.div
							variants={fadeVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							className="max-w-2xl px-4"
						>
							<p className="text-base font-medium text-light mb-4">
								Ready to see your vision come alive?
							</p>
							<p className="text-sm text-para font-light">
								Once you partner with us, your aspirations become our mission. We work relentlessly behind the scenes, blending cutting-edge technology with creative brilliance to build solutions that don’t just meet expectations—they redefine them. Through every sprint, iteration, and milestone, we prioritize transparency, ensuring you’re empowered to track progress and collaborate seamlessly.
							</p>
						</motion.div>
					</div>
					{/* Up component for navigation or additional interaction */}
					<Up />
				</div>
			</div>
		</div>
	);
};

export default Dream;

