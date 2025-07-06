import { useState } from "react";
import '../App.css'

function Navbar() {
	return (
		<>
			<div className="flex space-x-4 py-7 px-5 font-mono text-white">
				<p className="text-lg ml-3"><a href="./index.html">Rami Walid</a></p>
				<div className="ml-auto flex text-sm">
					<button className="px-5"><a href="https://drive.google.com/file/d/1iryMl-rfi1R2AZR-UTdq0yofWY4JaPSn/view?usp=drive_link" target="_blank">Resume</a></button>
					<button className="px-5"><a href="mailto:ramiwalid5@gmail.com?subject=Let's%20Connect!&" target="_blank">Contact</a></button>
					<button className="px-5"><a href="https://www.linkedin.com/in/ramiwalid" target="_blank">LinkedIn</a></button>
					<button className="px-5"><a href="https://github.com/ramiwalid" target="_blank">GitHub</a></button>
				</div>
			</div>
		</>
	)
}

export default Navbar;
