import SkillGrid from "./SkillGrid";
import Certificates from "./Certificates";
import { FaReact, FaHtml5, FaPython, FaCss3Alt, FaSwift, FaBootstrap, FaGithub, FaFigma } from "react-icons/fa";
import { SiJavascript, SiFastapi, SiFlask, SiTailwindcss, SiNumpy, SiPandas, SiSympy, SiCplusplus, SiNeovim, SiXcode, SiGooglecolab, SiJupyter} from "react-icons/si";
import { RiFileExcelFill, RiJavaLine } from "react-icons/ri";
import { TbSql} from "react-icons/tb";
import { IoGitMergeSharp, IoLogoVue } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { DiTerminal } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

function Skills() {
	const languages = [
		{ name: 'Java', icon: <RiJavaLine title="Java" size={32} /> },
		{ name: 'Python', icon: <FaPython title='Python' size={32} /> },
		{ name: 'JavaScript', icon: <SiJavascript title='JavaScript' size={32} /> },
		{ name: 'HTML5', icon: <FaHtml5 title='HTML' size={32} /> },
		{ name: 'CSS', icon: <FaCss3Alt title='CSS' size={32} /> },
		{ name: 'SQL', icon: <TbSql title='SQL' size={32} /> },
		{ name: 'Swift', icon: <FaSwift title='Swift' size={32} /> },
		{ name: 'C++', icon: <SiCplusplus title='C++' size={32} /> }
	];
	const frameworks = [
		{ name: 'FastAPI', icon: <SiFastapi title='FastAPI' size={32} /> },
		{ name: 'ReactJS', icon: <FaReact title='ReactJS' size={32} /> },
		{ name: 'Flask', icon: <SiFlask title='Flask' size={32} /> },
		{ name: 'Vue', icon: <IoLogoVue title='Vue.js' size={32} /> },
		{ name: 'Bootstrap', icon: <FaBootstrap title='Bootstrap' size={32} /> },
		{ name: 'Tailwind CSS', icon: <SiTailwindcss title='Tailwind CSS' size={32} /> },
		{ name: 'Numpy', icon: <SiNumpy title='Numpy' size={32} /> },
		{ name: 'Pandas', icon: <SiPandas title='Pandas' size={32} /> },
		{ name: 'Sympy', icon: <SiSympy title='Sympy' size={32} /> }
	]
	const tools = [
		{ name: 'Git', icon: <IoGitMergeSharp title='Git' size={32} /> },
		{ name: 'Github', icon: <FaGithub title='GitHub' size={32} /> },
		{ name: 'VSCode', icon: <VscVscode title='VSCode' size={32} /> },
		{ name: 'Neovim', icon: <SiNeovim title='Neovim' size={32} /> },
		{ name: 'Excel', icon: <RiFileExcelFill title='Excel' size={32} /> },
		{ name: 'XCode', icon: <SiXcode title='XCode' size={32} /> },
		{ name: 'Google Colab', icon: <SiGooglecolab title='Google Colab' size={32} /> },
		{ name: 'Jupyter', icon: <SiJupyter title='Jupyter' size={32} /> },
		{ name: 'Figma', icon: <FaFigma title='Figma' size={32} /> },
		{ name: 'iTerm2', icon: <DiTerminal title='iTerm2' size={32} /> }
	]
	const certificates = [
		{ 
			name: 'Crash Course on Python', 
			icon: <FcGoogle size={40} />, 
			description: "Gained hands on experience in scripting, automation and debugging with Python. Developed proficiency in loops, data structures (lists, dictionaries, etc.), and functions. Built a final project implementing automation techniques.",
			link: "https://www.coursera.org/account/accomplishments/verify/J84YAWEXTR4R"
		}
	]

	return (
		<>
			<div id='skills-section'>
				<h1 className='text-white mt-38 pt-19 font-mono text-4xl'>
				Skills & Certificates
				</h1>	
				<section id="skills" className="flex justify-center p-6 mt-5">
					<div className="flex gap-35">
						<SkillGrid title="Languages" items={languages} />
						<SkillGrid title="Frameworks" items={frameworks} />
						<SkillGrid title="Tools" items={tools} />
					</div>
				</section>
				<div className="mt-10 pb-10">
					<Certificates name={certificates[0].name} icon={certificates[0].icon} description={certificates[0].description} link={certificates[0].link} />
				</div>
			</div>
		</>
	)
}

export default Skills;
