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
	{
		number: "8",
		label:
			"enterprise clients including Vodafone, Novartis, and Johnson & Johnson",
	},
	{
		number: "7",
		label:
			"real-world AI use cases delivered including EHR, automation, and real estate workflows",
	},
];

const aboutSections = [
	{ id: "expertise", label: "Expertise" },
	{ id: "tools", label: "Tool Stack" },
	{ id: "clients", label: "Enterprise Clients" },
	{ id: "achievements", label: "Achievements" },
];

const enterpriseClients = [
	{ name: "Vodafone", logo: "https://img.icons8.com/color/48/vodafone.png" },
	{ name: "Novartis", logo: "https://img.icons8.com/color/48/novartis.png" },
	{ name: "MUFG", logo: "https://img.icons8.com/color/48/bank.png" },
	{
		name: "Capita Asset Services",
		logo: "https://img.icons8.com/color/48/business.png",
	},
	{
		name: "Real Chemistry",
		logo: "https://img.icons8.com/color/48/chemistry.png",
	},
	{
		name: "Johnson & Johnson",
		logo: "https://img.icons8.com/color/48/johnson-and-johnson.png",
	},
	{
		name: "Quanta Dialysis Technologies",
		logo: "https://img.icons8.com/color/48/medical-heart.png",
	},
	{ name: "KOWA", logo: "https://img.icons8.com/color/48/company.png" },
];

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
					{/* Intro Text */}
					<motion.h1
						variants={fadeUp}
						id="about"
						className="text-2xl md:text-3xl font-semibold mb-4">
						I'm Murtaza, Product Manager, Business Analyst, UX Strategist, MVP
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

					{/* Contact Buttons */}
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
							href="https://www.upwork.com/freelancers/~011bb3aa35b3bd5e52"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200 flex items-center gap-2">
							Invite me on Upwork <span className="text-base">↗</span>
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

					{/* What I Deliver Section */}
					<motion.div variants={fadeUp} className="my-8">
						<h3 className="text-xl font-semibold text-white mb-4">
							What I Deliver
						</h3>
						<p className="text-white text-lg mb-6 max-w-3xl leading-relaxed">
							Whether launching a new platform or optimizing internal workflows,
							I combine product thinking with design execution and technical
							planning. I work closely with analysts, designers, engineers, and
							leadership to create investor-ready prototypes, detailed
							specifications, and systems that scale.
						</p>
					</motion.div>

					{/* Why Clients Work With Me */}
					<motion.div variants={fadeUp} className="my-8">
						<h3 className="text-xl font-semibold text-white mb-4">
							Why Clients Work With Me
						</h3>
						<div className="grid grid-cols-1 gap-3">
							{[
								"Product discovery and roadmap planning with stakeholder alignment",
								"Business analysis and BRD documentation for complex systems",
								"UX/UI strategy and prototyping using Figma, Whimsical, and Miro",
								"Salesforce CRM setup, data migration, and platform automation",
								"AI integration across real-world use cases such as document parsing, form filling, and task automation",
								"No-code MVP delivery using Airtable, Softr, Supabase, and automation platforms",
								"Martech and internal tooling for operations, compliance, and engagement",
							].map((item, idx) => (
								<div key={idx} className="flex items-start gap-3">
									<span className="text-green-400 mt-1">•</span>
									<span className="text-gray-300 text-base leading-relaxed">
										{item}
									</span>
								</div>
							))}
						</div>
					</motion.div>

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
										{/* <div className="flex flex-wrap gap-3 mb-8">
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
										</div> */}

										{/* Updated Employment History */}
										<div className="flex flex-col gap-0">
											{[
												{
													logo: "https://img.icons8.com/ios-filled/50/999999/company.png",
													title:
														"Product Manager, Business Analyst, UX/UI, MVP Builder",
													company: "Rovamo",
													location: "Remote",
													date: "Feb 2015 – Present",
													duration: "9+ years",
													description:
														"Led strategy and execution across AI-powered solutions, workflow automation, and MVPs for fintech, healthcare, and enterprise clients.",
												},
												{
													logo: "https://img.icons8.com/color/48/chemistry.png",
													title: "Senior Salesforce Business Analyst",
													company: "Real Chemistry",
													location: "Remote",
													date: "Jul 2021 – Nov 2022",
													duration: "1 year 5 months",
													description:
														"Led Salesforce Marketing Cloud setup and data integration. Conducted discovery sessions, created BRDs and FRDs.",
												},
												{
													logo: "https://img.icons8.com/color/48/engineering.png",
													title: "Product Manager",
													company: "ENGEO (US)",
													location: "Remote",
													date: "Oct 2017 – Mar 2018",
													duration: "6 months",
													description:
														"Scoped and delivered an internal AI-powered document search platform.",
												},
												{
													logo: "https://img.icons8.com/color/48/vodafone.png",
													title: "Technical Business Analyst",
													company: "Vodafone (UK)",
													location: "London",
													date: "Apr 2016 – Nov 2016",
													duration: "8 months",
													description:
														"Delivered user stories, process maps, and sprint specs for Vodafone's mobile self-care app.",
												},
												{
													logo: "https://img.icons8.com/color/48/business.png",
													title: "Business Analyst",
													company: "Mufg Pensions and Market Services (UK)",
													location: "London",
													date: "Sep 2011 – Jan 2015",
													duration: "3 years 5 months",
													description:
														"Led analysis and documentation for PRISM, a shareholder and corporate actions platform.",
												},
											].map((job, idx) => (
												<div
													key={idx}
													className="flex items-start justify-between bg-transparent rounded-2xl px-4 py-4 md:px-6 md:py-5">
													<div className="flex items-center gap-4 md:gap-6 w-full">
														{/* <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl overflow-hidden bg-transparent">
															<img
																src={job.logo}
																alt={job.company}
																className="w-10 h-10 object-contain"
															/>
														</div> */}
														<div className="flex-1">
															<div className="text-white font-semibold text-base md:text-lg leading-tight">
																{job.title}
															</div>
															<div className="text-gray-300 text-sm md:text-sm font-medium">
																{job.company}
															</div>
															<div className="text-gray-500 text-xs md:text-xs mb-2">
																{job.location}
															</div>
															{job.description && (
																<div className="text-gray-400 text-xs md:text-sm leading-relaxed">
																	{job.description}
																</div>
															)}
														</div>
													</div>
													<div className="flex flex-col items-end min-w-[150px] ml-2 md:ml-0">
														<div className="text-white text-xs md:text-sm font-medium">
															{job.date}
														</div>
														{/* <div className="text-gray-400 text-xs">
															({job.duration})
														</div> */}
													</div>
												</div>
											))}
										</div>
									</div>
								) : sec.id === "tools" ? (
									<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
										{[
											// Design & Planning Tools
											{
												name: "Figma",
												subtitle: "Design & prototyping platform",
												logo: "https://img.icons8.com/color/48/figma--v1.png",
											},
											{
												name: "Miro",
												subtitle: "Visual collaboration platform",
												logo: "/miro.svg",
											},
											{
												name: "Whimsical",
												subtitle: "Flowcharts & wireframing",
												logo: "/w.svg",
											},
											{
												name: "Notion",
												subtitle: "Docs, notes & knowledge base",
												logo: "/skills/notion.png",
											},
											{
												name: "Jira",
												subtitle: "Agile project & issue tracking",
												logo: "https://img.icons8.com/color/48/jira.png",
											},
											{
												name: "Confluence",
												subtitle: "Team documentation & wiki",
												logo: "https://img.icons8.com/color/48/confluence--v2.png",
											},
											// CRM & Automation
											{
												name: "Salesforce",
												subtitle: "CRM & customer platform",
												logo: "https://img.icons8.com/color/48/salesforce.png",
											},
											{
												name: "Make.com",
												subtitle: "Visual automation platform",
												logo: "https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg",
											},
											{
												name: "Zapier",
												subtitle: "Connect apps & automate workflows",
												logo: "https://img.icons8.com/fluency/48/zapier.png",
											},
											{
												name: "Softr",
												subtitle: "No-code apps on Airtable",
												logo: "https://cdn.prod.website-files.com/6772e8855f7859bc8df95c78/67a8cb58af31ced4a0dcda4c_Logo.svg",
											},
											{
												name: "Airtable",
												subtitle: "Database meets spreadsheet",
												logo: "https://img.icons8.com/stickers/100/airtable.png",
											},
											{
												name: "Supabase",
												subtitle: "Open-source Firebase alternative",
												logo: "https://img.icons8.com/fluency/48/supabase.png",
											},
											{
												name: "Framer",
												subtitle: "Design to website builder",
												logo: "https://img.icons8.com/plumpy/50/framer-logo.png",
											},
											// Development Tools
											{
												name: "React",
												subtitle: "UI library for building apps",
												logo: "https://img.icons8.com/plasticine/100/react.png",
											},
											{
												name: "Next.js",
												subtitle: "Full-stack React framework",
												logo: "/skills/nextjs.png",
											},
											{
												name: "Vercel",
												subtitle: "Frontend deployment platform",
												logo: "/vercel.svg",
											},
											{
												name: "Netlify",
												subtitle: "Web development platform",
												logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
											},
											// AI Tools
											{
												name: "LangChain",
												subtitle: "Framework for AI applications",
												logo: "/skills/langchain.svg",
											},
											{
												name: "Flowise",
												subtitle: "Visual tool for AI workflows",
												logo: "/skills/Logo.png",
											},
											{
												name: "OpenAI APIs",
												subtitle: "GPT, embeddings & AI tools",
												logo: "/skills/chatgpt.png",
											},
											{
												name: "LlamaIndex",
												subtitle: "Data framework for LLMs",
												logo: "https://img.icons8.com/color/48/llama.png",
											},
											{
												name: "Loveable",
												subtitle: "AI-powered app builder",
												logo: "/skills/lovable.png",
											},
											{
												name: "Bolt",
												subtitle: "AI coding assistant",
												logo: "https://img.icons8.com/color/48/lightning-bolt.png",
											},
											{
												name: "Claude",
												subtitle: "AI assistant by Anthropic",
												logo: "https://img.icons8.com/color/48/artificial-intelligence.png",
											},
											{
												name: "Tempo AI",
												subtitle: "AI workflow automation",
												logo: "https://img.icons8.com/color/48/time.png",
											},
											{
												name: "Cursor",
												subtitle: "AI-powered code editor",
												logo: "/skills/cursor.png",
											},
											{
												name: "v0 by Vercel",
												subtitle: "AI UI generator",
												logo: "https://img.icons8.com/color/48/v.png",
											},
											{
												name: "Replit",
												subtitle: "AI-powered coding platform",
												logo: "https://img.icons8.com/color/48/code.png",
											},
											{
												name: "GitHub Copilot",
												subtitle: "AI pair programmer",
												logo: "https://img.icons8.com/color/48/github.png",
											},
											{
												name: "Bubble",
												subtitle: "No-code app builder",
												logo: "https://img.icons8.com/color/48/bubble.png",
											},
											{
												name: "Webflow",
												subtitle: "Visual web development",
												logo: "https://img.icons8.com/color/48/webflow.png",
											},

											{
												name: "Airtable",
												subtitle: "No-code database platform",
												logo: "https://img.icons8.com/color/48/airtable.png",
											},

											{
												name: "Make (Integromat)",
												subtitle: "Visual automation platform",
												logo: "https://img.icons8.com/color/48/automation.png",
											},
											{
												name: "Retool",
												subtitle: "Low-code app builder",
												logo: "https://img.icons8.com/color/48/wrench.png",
											},

											{
												name: "Midjourney",
												subtitle: "AI image generation",
												logo: "/skills/midjourney.png",
											},
											{
												name: "Stable Diffusion",
												subtitle: "Open source AI art",
												logo: "https://img.icons8.com/color/48/artificial-intelligence.png",
											},
											{
												name: "RunwayML",
												subtitle: "AI creative tools",
												logo: "https://img.icons8.com/color/48/runway.png",
											},
											{
												name: "Hugging Face",
												subtitle: "AI model hub",
												logo: "https://img.icons8.com/color/48/hugging-face.png",
											},

											{
												name: "Pinecone",
												subtitle: "Vector database for AI",
												logo: "https://img.icons8.com/color/48/pine-tree.png",
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
								) : sec.id === "clients" ? (
									<div>
										<p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
											I've had the privilege of working with leading enterprise
											clients across various industries:
										</p>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											{enterpriseClients.map((client, idx) => (
												<motion.div
													key={client.name}
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.5, delay: idx * 0.1 }}
													viewport={{ once: true }}
													className="bg-[#343434] rounded-xl p-4 py-6 flex flex-col justify-center items-center text-center hover:bg-[#444] transition group cursor-pointer">
													{/* <img
														src={client.logo}
														alt={client.name}
														className="w-12 h-12 object-contain mb-3"
													/> */}
													<span className="text-white text-md font-medium leading-tight">
														{client.name}
													</span>
												</motion.div>
											))}
										</div>
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
												{[...achievements, ...achievements].map((item, idx) => (
													<motion.div
														key={idx}
														initial={{ opacity: 0, y: 40 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.6, delay: idx * 0.18 }}
														viewport={{ once: true, amount: 0.2 }}
														className="relative bg-[#343434] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[10px] rounded-br-[10px] 
																	 py-5 px-7 flex flex-col justify-between items-start 
																	 min-h-[250px] w-[220px] max-w-xs overflow-hidden shadow-lg">
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
												))}
											</div>
										</div>
									</div>
								) : null}
							</motion.section>
						))}
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default ProfileSection;
