import { FaLinkedin, FaDribbble, FaTimes } from "react-icons/fa";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import AboutNavLinks from "./AboutNavLinks";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

import React, { useRef, useEffect, useState } from "react";

const achievements = [
	{
		number: "16+",
		label: "Years in product management, UX design, and business analysis",
	},
	{
		number: "50+",
		label:
			"projects delivered across fintech, healthcare, SaaS, logistics, and martech",
	},
	// {
	// 	number: "$200K+",
	// 	label: "earned via Upwork with long-term contracts and repeat clients",
	// },
	{
		number: "8",
		label:
			"enterprise clients including Vodafone, Novartis, and Johnson & Johnson",
	},
	{
		number: "7",
		label:
			" real-world AI use cases delivered including EHR, automation, and real estate workflows",
	},
];

const aboutSections = [
	{ id: "expertise", label: "Expertise" },
	{ id: "tools", label: "Tool Stack" },
	{ id: "achievements", label: "Achievements" },
];

const dummyContent = {
	expertise:
		"Expertise: UX/UI Design, Web Development, Product Strategy, and more. Lorem ipsum dolor sit amet.",
	tools: "Tool Stack: Figma, React, Tailwind, Framer, Webflow, and more.",
	achievements:
		"Achievements: Award-winning designer, featured in top publications, led teams to success.",
	hobbies: "Hobbies: Photography, Traveling, Fitness, Reading.",
	quotes:
		"“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs",
};

const ProfileSection = () => {
	const [activeSection, setActiveSection] = useState("about");
	const sectionRefs = useRef({});

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			let current = "about";
			for (const sec of aboutSections) {
				const el = document.getElementById(sec.id);
				if (el) {
					const offsetTop = el.offsetTop - 140; // adjust for header
					if (scrollY >= offsetTop) {
						current = sec.id;
					}
				}
			}
			setActiveSection(current);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Layout>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.1 } },
				}}
				className="min-h-screen max-w-4xl mx-auto bg-transparent text-white px-6 md:px-12 lg:flex lg:gap-4">
				{/* Sidebar Navigation */}
				<motion.div variants={fadeUp} className="mb-8 lg:w-1/4">
					<AboutNavLinks
						activeSection={activeSection}
						onNavClick={(id) => {
							if (id === "about") {
								window.scrollTo({ top: 0, behavior: "smooth" });
							} else {
								document
									.getElementById(id)
									?.scrollIntoView({ behavior: "smooth", block: "start" });
							}
						}}
					/>
				</motion.div>

				{/* Main Content */}
				<div id="about" className="lg:w-full">
					{/* Images Grid */}
					{/* <motion.div

            variants={fadeUp}
            className="flex flex-col md:flex-row md:p-0 p-2 w-full md:h-[350px] gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/2 aspect-square md:aspect-auto h-auto md:h-full"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d60809b00245b908cb6bd13f738448884ce8ab8a/da314/img/byt8.jpg"
                alt="Portrait"
                className="rounded-xl object-cover w-full h-full"
                style={{ objectPosition: 'center' }}
              />
            </motion.div>

            <div className="w-full md:w-1/4 flex flex-col gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-square md:aspect-auto h-auto md:h-1/2">
                <img
                  src="https://framerusercontent.com/images/PrXt5YnhivwZnFBmO4CXpCjhE.jpg"
                  alt="Fitness"
                  className="rounded-xl object-cover w-full h-full"
                  style={{ minHeight: '0' }}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="aspect-square md:aspect-auto h-auto md:h-1/2">
                <img
                  src="https://framerusercontent.com/images/LRTfW33dDQ4cq3ud2AIafMsp8.jpg"
                  alt="Workspace"
                  className="rounded-xl object-cover w-full h-full"
                  style={{ minHeight: '0' }}
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-1/4 aspect-square md:aspect-auto h-auto md:h-full">
              <img
                src="https://framerusercontent.com/images/6Kw3mxswD13ZkXKHzWvEr6T6tRk.jpg"
                alt="Beach"
                className="rounded-xl object-cover w-full h-full"
              />
            </motion.div>
          </motion.div> */}

					{/* Intro Text */}
					<motion.h1
						variants={fadeUp}
						id="about"
						className="text-2xl md:text-3xl font-semibold mb-4">
						I’m Murtaza, Product Manager, Business Analyst, UX Strategist, MVP
						Builder, and AI Integration Lead
					</motion.h1>
					<motion.p
						variants={fadeUp}
						className="text-white text-lg mb-6 max-w-3xl leading-relaxed">
						I help enterprise teams and funded startups define product goals,
						map business processes, and deliver scalable digital solutions. My
						work spans product strategy, UX design, Salesforce implementation,
						business analysis, and AI-powered MVP development. I bring structure
						to innovation by aligning stakeholders, clarifying requirements, and
						delivering outcomes across agile teams.
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={fadeUp}
						className="flex flex-wrap items-center gap-4">
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="mailto:ma@hellorovamo.com"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200">
							ma@hellorovamo.com
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200 flex items-center gap-2">
							Resume <span className="text-base">↗</span>
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.1 }}
							href="https://www.linkedin.com/in/murt4z4/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-6 h-6 flex items-center justify-center rounded-xl bg-[#343434] hover:bg-[#444] transition-colors duration-200"
							style={{ minWidth: 40, minHeight: 40 }}>
							<span className="sr-only">LinkedIn</span>
							<img
								src="/icon.png"
								alt="LinkedIn"
								className="w-5 h-5 object-contain"
							/>
						</motion.a>
					</motion.div>

					<motion.p
						variants={fadeUp}
						className="text-white text-lg my-6 max-w-3xl leading-relaxed">
						Great design is more than aesthetics. It is about creating seamless
						user experiences that engage, convert, and scale. My approach
						combines strategy, usability, and execution to create solutions that
						make a real impact.
					</motion.p>

					{/* About Sections */}
					<div className="space-y-20 pt-8">
						{aboutSections.map((sec, idx) => (
							<motion.section
								key={sec.id}
								id={sec.id}
								ref={(el) => (sectionRefs.current[sec.id] = el)}
								className="scroll-mt-32"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: idx * 0.15 }}
								viewport={{ once: true, amount: 0.2 }}>
								<h2 className="text-2xl font-bold text-white mb-4">
									{sec.label}
								</h2>
								{sec.id === "expertise" ? (
									<div>
										{/* Skill Tags */}
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												{ label: "Product Design", icon: "/productdesign.png" },
												{ label: "No-Code", icon: "/nocode.png" },
												{ label: "AI Design", icon: "/ai.png" },
												{ label: "Web Design", icon: "/webdesign.png" },
												{ label: "Prototyping", icon: "/prototyping.png" },
												{ label: "UX/UI Design", icon: "/ui.png" },
												{ label: "Web3", icon: "/web3.png" },
												{ label: "Strategic Thinking", icon: "/strategic.png" },
											].map((tag) => (
												<span
													key={tag.label}
													className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium flex items-center gap-2">
													<img
														src={tag.icon}
														alt={tag.label}
														className="w-5 h-5 object-contain"
													/>
													{tag.label}
												</span>
											))}
										</div>

										{/* Experience List */}
										<div className="flex flex-col gap-0">
											{[
												{
													logo: "https://img.icons8.com/ios-filled/50/999999/company.png",
													title: "Freelance Product & Web Designer",
													company: "RobertLicau.com",
													location: "Worldwide",
													date: "Feb 2017 – Present",
													duration: "8 years",
												},
												{
													logo: "https://img.icons8.com/color/48/000000/ethereum.png",
													title: "Head of Design",
													company: "dcSpark Inc.",
													location: "Austin, Texas, United States",
													date: "Nov 2021 – Jul 2023",
													duration: "1 year 9 months",
												},
												{
													logo: "https://img.icons8.com/color/48/000000/ethereum.png",
													title: "Rovqm",
													company: "dcSpark Inc.",
													location: "Austin, Texas, United States",
													date: "Nov 2021 – Jul 2023",
													duration: "1 year 9 months",
												},
												{
													logo: "https://img.icons8.com/color/48/000000/ui-design.png",
													title: "Founder & Lead Product Designer",
													company: "uibundle.com",
													location: "Worldwide",
													date: "Oct 2018 – Present",
													duration: "6 years 5 months",
												},
											].map((job, idx) => (
												<div
													key={idx}
													className="flex items-start justify-between bg-transparent rounded-2xl px-4 py-4 md:px-6 md:py-5">
													<div className="flex items-center gap-4 md:gap-6 w-full">
														<div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl overflow-hidden bg-transparent">
															<img
																src={job.logo}
																alt={job.company}
																className="w-10 h-10 object-contain"
															/>
														</div>
														<div className="flex-1">
															<div className="text-white font-semibold text-base md:text-lg leading-tight">
																{job.title}
															</div>
															<div className="text-gray-300 text-sm md:text-sm font-medium">
																{job.company}
															</div>
															<div className="text-gray-500 text-xs md:text-xs">
																{job.location}
															</div>
														</div>
													</div>
													<div className="flex flex-col items-end min-w-[150px] ml-2 md:ml-0">
														<div className="text-white text-xs md:text-sm font-medium">
															{job.date}
														</div>
														<div className="text-gray-400 text-xs">
															({job.duration})
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								) : (
									<p className="text-gray-300 text-base md:text-lg leading-relaxed">
										{sec.id === "tools" ? (
											<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
												{[
													{
														name: "Figma",
														subtitle: "Interface Design Tool",
														logo: "/skills/figma.png",
													},
													{
														name: "Photoshop",
														subtitle: "Image Editing",
														logo: "/skills/photoshop.png",
													},
													{
														name: "Illustrator",
														subtitle: "Vector Graphics",
														logo: "/skills/illustrator.png",
													},
													{
														name: "Webflow",
														subtitle: "No-Code Development",
														logo: "/skills/webflow.png",
													},
													{
														name: "Framer",
														subtitle: "No-Code & Prototyping",
														logo: "/skills/framermotion.png",
													},
													{
														name: "ChatGPT",
														subtitle: "AI Assistance",
														logo: "/skills/chatgpt.png",
													},
													{
														name: "Midjourney",
														subtitle: "AI Image Generation",
														logo: "/skills/midjourney.png",
													},
													{
														name: "DeepSeek",
														subtitle: "AI Assistance",
														logo: "/skills/deepseek.png",
													},
													{
														name: "Lovable",
														subtitle: "AI Code Completion",
														logo: "/skills/lovable.png",
													},
													{
														name: "Cursor",
														subtitle: "AI-Powered Code Editor",
														logo: "/skills/cursor.png",
													},
												].map((tool, idx) => (
													<div
														key={tool.name}
														className="flex items-center justify-between bg-[#343434] rounded-2xl px-4 py-4 md:px-2 md:py-2 hover:bg-[#444] transition group cursor-pointer">
														<div className="flex items-center gap-4 w-full">
															<img
																src={tool.logo}
																alt={tool.name}
																className="w-12 h-12 object-contain rounded-lg"
															/>
															<div>
																<div className="text-white font-semibold text-base md:text-lg leading-tight">
																	{tool.name}
																	{tool.external && (
																		<span className="ml-1 align-middle text-xs">
																			↗
																		</span>
																	)}
																</div>
																<div className="text-gray-400 text-xs md:text-sm font-normal">
																	{tool.subtitle}
																</div>
															</div>
														</div>
														<div className="flex-shrink-0 ml-4">
															<svg
																width="22"
																height="22"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="text-gray-400 group-hover:text-white transition"
																viewBox="0 0 24 24">
																<path
																	d="M9 5l7 7-7 7"
																	stroke="currentColor"
																	strokeWidth="2"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
														</div>
													</div>
												))}
											</div>
										) : sec.id === "achievements" ? (
											<div className="w-full relative overflow-hidden py-2">
												{/* Left Fade Overlay */}
												<div
													className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
													style={{
														background:
															"linear-gradient(90deg, #101010 60%, rgba(16,16,16,0.7) 80%, transparent 100%)",
													}}></div>

												{/* Right Fade Overlay */}
												<div
													className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
													style={{
														background:
															"linear-gradient(270deg, #101010 60%, rgba(16,16,16,0.7) 80%, transparent 100%)",
													}}></div>

												{/* Slider */}
												<div className="relative w-full overflow-hidden">
													<div
														className="flex gap-3 animate-achievement-slider"
														style={{ minWidth: "1200px" }}>
														{[...achievements, ...achievements].map(
															(item, idx) => (
															<motion.div
  key={idx}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: idx * 0.18 }}
  viewport={{ once: true, amount: 0.2 }}
  className="relative bg-[#343434] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[10px] rounded-br-[10px] 
             py-5 px-7 flex flex-col justify-between items-start 
             min-h-[250px] w-[220px] max-w-xs overflow-hidden shadow-lg"
>
  {/* Number */}
  <span className="text-xl md:text-3xl font-bold text-white z-10">
    {item.number}
  </span>

  {/* Spacer */}
  <div className="flex-1 w-full"></div>

  {/* Text */}
  <span className="text-gray-300 text-sm font-medium z-10 whitespace-pre-line mt-auto mb-0 leading-snug break-words">
    {item.label}
  </span>
</motion.div>

															)
														)}
													</div>
												</div>
												{/* Keyframes in index.css: @keyframes achievement-slider { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} } */}
											</div>
										) : null}
									</p>
								)}
							</motion.section>
						))}
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default ProfileSection;
