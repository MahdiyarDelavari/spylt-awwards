import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create(".hero-title", {
			type: "chars",
		});

		const tl = gsap.timeline({
			delay: 1,
		});
        tl
            .to(".hero-content", {
			opacity: 1,
			y: 0,
			ease: "power1.inOut",
		})
			.to(
				".hero-text-scroll",
				{
					duration: 1.2,
					clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
					ease: "circ.out",
				},
				"-=0.5"
			)
			.from(
				titleSplit.chars,
				{
					yPercent: 200,
					stagger: 0.02,
					ease: "power2.out",
				},
				"-=0.5"
			);
	});

	return (
		<section className="bg-main-bg">
			<div className="hero-container">
				<img
					src="/images/static-img.png"
					alt="hero-img"
					className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-[1.5]"
				/>
				<div className="hero-content opacity-0">
					<div className="overflow-hidden">
						<h1 className="hero-title">Fucking Delicious</h1>
					</div>
					<div
						className="hero-text-scroll"
						style={{
							clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
						}}
					>
						<div className="hero-subtitle">
							<h1>Protein + Caffine</h1>
						</div>
					</div>

					<h2>
						Live Life To The Fullest With SPYLT: Shatter Boredom And Embrace
						Your Inner Kid With Every Delicously Smooth Chug
					</h2>

					<div className="hero-button">
						<p>Chug a spylt</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
