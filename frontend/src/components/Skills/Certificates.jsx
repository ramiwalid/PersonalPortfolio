export default function Certificates({ name, icon, description, link }) {
	return (
		<div className="inline-block text-white border-2 p-5 border-white max-w-100 font-mono">
			<div className="flex justify-center mb-5">{icon}</div>	
			<h1 className="text-2xl">{name}</h1>
			<p className="text-s p-4">{description}</p>
			<div className="flex w-fit mx-auto border-2 px-3 py-1 border-double">
				<a href={link} target="_blank">Click to view credential</a>
			</div>
		</div>
	);
}
