export default function SkillGrid({ title, items }) {
	return (
		<div className="mb-6 max-w-100">
			<h3 className="text-xl font-mono mb-3 text-white">{title}</h3>
			<div className="grid grid-cols-5 gap-2"> 
			{items.map((skill, idx) => (
				<div key={idx} className="flex justify-center max-w-15 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white items-center border-2 border-white"> 
					<div className="">{skill.icon}</div> 
				</div>
			))}
			</div>
		</div>
	);
}
