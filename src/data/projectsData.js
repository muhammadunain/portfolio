const projectsData = [
	{
		id: "neural-markets",
		src: "/projects/neural markets.jpg",
		title: "Neural Markets - AI Investment Platform",
		description:
			"Leveraging machine learning to analyze market data, optimize portfolios, and deliver superior returns while minimizing risk.",
		images: ["/projects/neural markets.jpg"],
		link: "https://neural-markets.vercel.app/",
		prototype:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/Portfolio?page-id=0%3A1&node-id=1-500&p=f&viewport=139%2C166%2C0.06&t=Yr1HTnN3fm4hQUt7-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A500",
		mobile:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/project-files?page-id=201%3A4116&node-id=201-4123&viewport=83%2C142%2C0.23&t=oRiML6deABafwgaQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=201%3A4123&fuid=1209823455357538916",
	},
	{
		id: "brain-ai",
		src: "/projects/brain AI.jpg",
		title: "AI Agents - The Future of Automation",
		description:
			"Building intelligent AI agents that adapt, learn, and execute tasks with precision to drive real-world impact.",
		images: ["/projects/brain AI.jpg"],
		prototype:
			"https://www.figma.com/proto/TdTqm9K3BJ2RX0e5AAs2io/Portfolio-Murtaza-Akbar?page-id=166%3A1639&node-id=166-1671&viewport=244%2C227%2C0.14&t=Gq3a354rVLABTQes-1&scaling=contain&content-scaling=responsive",
	},
	{
		id: "forge",
		src: "/forgeflow.png",
		title: "Forge Flow - AI Powered Diagrams",
		description:
			"Our AI transforms plain language into interactive diagrams that explain workflows, systems, and ideas effortlessly.",
		images: ["/forgeflow.png"],
		link: "https://forgeflow.vercel.app/",
	},
	{
		id: "formora",
		src: "/main.jpg",
		title: "Build Intelligent Forms in Minutes",
		description:
			"Create beautiful, responsive forms with AI assistance. No coding required. Advanced logic, real-time validation, and seamless integrations included.",
		images: ["/main.jpg"],
		link: "https://formorai.vercel.app/",
	},
	{
		id: "Byt8",
		src: "/projects/byte8.jpg",
		title: "Byt8 - Future of Digital Trading",
		description:
			"Byt8 enables continuous crypto transactions—buy, sell, and manage digital assets anytime, anywhere.",
		images: ["/projects/byte8.jpg"],
		prototype:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/Portfolio?page-id=4%3A50103&node-id=4-53288&p=f&viewport=78%2C220%2C0.03&t=xgv5lKzL1eUHoF1B-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=4%3A53288",
		mobile:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/project-files?page-id=22%3A17976&node-id=22-18751&p=f&viewport=234%2C45%2C0.04&t=rrRatoClAjXdM9oq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A18751&fuid=1209823455357538916",
	},
	{
		id: "pooleo",
		src: "/projects/pooleo.jpg",
		title: "Pooleo - Simplify employee engagement",
		description:
			"With Pooleo, companies can streamline employee engagement, track skills, and showcase progress.",
		images: ["/projects/pooleo.jpg"],
		prototype:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/Portfolio?page-id=4%3A14992&node-id=4-20674&p=f&viewport=78%2C189%2C0.09&t=U2wGFqLzZWmGrUsO-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=4%3A20674",
		mobile:
			"https://www.figma.com/proto/E63Bea1pA7y17I0YGkV0vq/Portfolio?page-id=22%3A25423&node-id=22-31292&p=f&viewport=-1505%2C89%2C0.58&t=DvDBSC8P2ukcKSHA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A31339",
	},
	{
		id: "duck-soup",
		src: "/projects/duck soup.jpg",
		title: "Duck Soup - Marketplace Streamlined",
		description:
			"Duck Soup enables smooth transactions between suppliers and retailers, making product selling easy and reliable.",
		images: ["/projects/duck soup.jpg"],
		prototype:
			"figma.com/proto/E63Bea1pA7y17I0YGkV0vq/project-files?page-id=1%3A9607&node-id=1-10666&p=f&viewport=101%2C237%2C0.03&t=S5uNRLI5qHK1QKte-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A10666&fuid=1540594009056188833",
	},
	{
		id: "revalio",
		src: "/projects/revalio.jpg",
		title: "Revalio - Streamline property tax",
		description:
			"Delivering accurate property valuations and tax insights to ensure compliance and smarter decisions.",
		images: ["/projects/revalio.jpg"],
		link: "https://revalio.hellorovamo.com/",
		text: true,
	},
	{
		id: "locentrix",
		src: "/projects/locentrix.jpg",
		title: "Locentrix - Commercial Real Estate",
		description:
			"Locentrix revolutionizes how retailers find locations and shopping centers fill vacancies through intelligent matching technology.",
		images: ["/projects/locentrix.jpg"],
		link: "https://locentrix.hellorovamo.com/",
		text: true,
	},
	{
		id: "enerlytics",
		src: "/projects/enerlytics.jpg",
		title: "Enerlytics - Energy Management",
		description:
			"An intelligent platform to monitor, analyze, and optimize energy usage for smarter efficiency and lower costs.",
		images: ["/projects/enerlytics.jpg"],
		link: "https://enerlytics.hellorovamo.com/",
		text: true,
	},
	{
		id: "equity-vantage",
		src: "/projects/equity vantage.jpg",
		title: "Equity Vantage - Investment Potential",
		description:
			"Strategic investment management and comprehensive financial advisory services tailored for institutional investors.",
		images: ["/projects/equity vantage.jpg"],
		link: "https://fundmgmnt.netlify.app/",
		text: true,
	},
	{
		id: "aqua",
		src: "/projects/Aqua.jpg",
		title: "Aqua – DeFi Analytics Dashboard",
		description:
			"A sleek, dark-themed dashboard designed for decentralized finance apps. Includes key analytics, token performance tracking, and user wallet insights.",
		images: ["/projects/Aqua.jpg"],
	},
];

export default projectsData;
