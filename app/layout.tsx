import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kahan - DevOps Engineer',
	description:
		'Welcome to my portfolio! I am Kahan, a passionate DevOps engineer and backend developer, specializing in scalable server setups, CI/CD automation, and cloud infrastructure.',
	keywords: [
		'DevOps Engineer',
		'Backend Developer',
		'Cloud Infrastructure',
		'CI/CD',
		'Docker',
		'Kubernetes',
		'AWS',
		'Terraform',
		'System Design',
		'Linux',
		'Node.js',
		'Python',
		'Java',
	],
	authors: [{ name: 'Kahan Ahamed' }],
	creator: 'Kahan Ahamed',
	openGraph: {
		title: 'Kahan Ahamed - DevOps & Backend Portfolio',
		description: 'Explore my projects in DevOps automation, cloud engineering, and backend development. I create secure and scalable solutions for production systems.',
		url: 'https://kahan.me',
		siteName: 'Kahan - DevOps Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kahan Portfolio Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kahan Ahamed - DevOps Engineer',
		description: 'DevOps portfolio including CI/CD pipelines, cloud automation, and backend services.',
		creator: '@kahan_devops', // Change to your actual Twitter username if any
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
