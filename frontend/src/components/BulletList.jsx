function BulletList() {
	return (
		<>
			<ul className="space-y-3">
				{[
					{ emoji: "🎓", text: "Third-year (Junior) student @ New Jersey Institute of Technology"},
					{ emoji: "📚", text: "B.S. in Computer Science & Minor in Applied Statistics"},
					{ emoji: "🧑🏼‍🎓", text: "Expected Graduation: December 2026"},
					{ emoji: "🛠️", text: "Software Engineering (Full-Stack), AI Engineering, Data Science"}
				].map((item, index) => (
					<li
					key={item.text}
					className="flex opacity-0 animate-fadeIn"
					style={{ animationDelay: `${index * 0.1}s` }}
					>
						<span className="flex-shrink-0 mr-8 text-lg">
							{item.emoji}
						</span>
						<span className="">
							{item.text}
						</span>
					</li>
				))}
			</ul>
		</>
	)
}


export default BulletList;
