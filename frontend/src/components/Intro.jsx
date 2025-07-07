import { useState } from "react";
import '../App.css'
import profileimg from '../assets/linkedinpfp.jpeg';
import SocialButtons from "./SocialButtons";
import BulletList from "./BulletList";

function Intro() {
	return (
		<>
			<div className="grid grid-cols-5 gap-4 pt-25 text-white font-mono h-full">
				<div className="col-span-3 flex flex-col gap-2">
					<p className="text-4xl">
						Hi, I&apos;m Rami!
						<br></br>
					</p>
					<p className="text-2xl">
						I&apos;m a Full-Stack Developer with a passion for software!
					</p>
					<div className="py-5 mx-auto">
						<BulletList />
					</div>
				</div>
				<div className="col-span-2 flex flex-col gap-2 items-center">
					<img
						src={profileimg}
						alt="Rami Walid PFP"
						className="w-90 h-90 rounded-full object-cover mx-auto border-3 border-white">
					</img>
					<div className="flex justify-center mt-6">
						<SocialButtons />
					</div>
				</div>
			</div>
		</>
	)
}

export default Intro;
