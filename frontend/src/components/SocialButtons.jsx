import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialButtons() {
	const socialLinks = [
		{
			name: "GitHub",
			icon: <FaGithub className="text-xl" />,
			url: "https://github.com/ramiwalid",
		},
		{
			name: "LinkedIn",
			icon: <FaLinkedin className="text-xl" />,
			url: "https://linkedin.com/in/ramiwalid",
		},
		{
			name: "Email",
			icon: <FaEnvelope className="text-xl" />,
			url: "mailto:ramiwalid5@gmail.com",
		},
	];

	return (
		<>
			<div className="flex space-x-4">
				{socialLinks.map((link) => (
					<a 
					key={link.name} 
					href={link.url} 	
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white"
					aria-label={link.name}
					>
					{link.icon}
					</a>
				))}
			</div>
		</>
	);
}

export default SocialButtons;
