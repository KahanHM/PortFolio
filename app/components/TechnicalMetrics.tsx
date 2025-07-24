'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section id="TechnicalMetrics" className="py-20 px-4 bg-gradient-to-b from-[#0a192f] to-[#112240] text-white font-mono">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center text-blue-400 mb-12"
				>
					$ impact-and-achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Deployment & Automation */}
					<div>
						<h3 className="text-2xl font-semibold mb-6 text-blue-400">$ deployment-&-automation</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: 'Spring PetClinic Deployment',
									points: [
										'Automated CI/CD with Jenkins, Terraform, Ansible, Docker Swarm & GCP',
										'Helm-based Kubernetes deployment on GKE with auto-scaling & PVC',
										'Reduced deployment time from hours to minutes with zero manual intervention',
										'Secured secrets using Kubernetes Secrets and Docker Swarm secrets',
										'Achieved production-grade reliability and repeatable deployments',
									],
								},
								{
									title: 'GitHub Projects Automation',
									points: [
										'Implemented Jenkins Organization Folder for dynamic repo discovery',
										'Created custom Docker agent with Node.js and AWS CLI for builds',
										'Reduced manual pipeline setup time by 80%',
										'Optimized CI workflow by skipping default checkout and caching dependencies',
										'Enabled secure and scalable static file hosting on AWS S3',
									],
								},
							].map(({ title, points }, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="bg-[#0a192f]/80 border border-blue-800 rounded-xl p-6 shadow-md backdrop-blur-lg hover:shadow-blue-500/30 transition-shadow"
								>
									<h4 className="text-xl font-semibold text-blue-300 mb-4">{title}</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{points.map((point, j) => (
											<li key={j}>{point}</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>

					{/* Cloud Infrastructure & CI/CD */}
					<div>
						<h3 className="text-2xl font-semibold mb-6 text-blue-400">$ cloud-infrastructure-&-ci-cd</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: 'Node.js API Deployment',
									points: [
										'Automated deployment of Node.js API with Jenkins, Docker, Terraform on AWS EC2',
										'Dynamic environment setup with .env and Postman API validation',
										'Integrated MongoDB with dynamic provisioning and deployment',
										'Achieved seamless, repeatable deployments with minimal manual work',
									],
								},
								{
									title: 'Database Replication & Migration',
									points: [
										'Automated MongoDB replication and backups with Airflow and Celery',
										'Migrated data from Azure DB to AWS RDS using Python scripts',
										'Implemented monitoring dashboards with Steampipe for real-time visibility',
										'Set up automated alerts using AWS SNS, Lambda, and EventBridge',
									],
								},
							].map(({ title, points }, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="bg-[#0a192f]/80 border border-blue-800 rounded-xl p-6 shadow-md backdrop-blur-lg hover:shadow-blue-500/30 transition-shadow"
								>
									<h4 className="text-xl font-semibold text-blue-300 mb-4">{title}</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{points.map((point, j) => (
											<li key={j}>{point}</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-2xl font-semibold mb-6 text-blue-400">$ development-&-leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: 'Code Quality & Standards',
									points: [
										'Establish robust coding standards across automation projects',
										'Reduce technical debt with consistent best practices',
										'Integrate security scanning (Trivy) into CI/CD pipelines',
									],
								},
								{
									title: 'Team Collaboration',
									points: [
										'Assisted senior engineers with CI/CD pipeline setup and maintenance',
										'Contributed to writing technical documentation for ongoing projects',
										'Supported deployment and migration activities under guidance',
									],
								},
							].map(({ title, points }, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="bg-[#0a192f]/80 border border-blue-800 rounded-xl p-6 shadow-md backdrop-blur-lg hover:shadow-blue-500/30 transition-shadow"
								>
									<h4 className="text-xl font-semibold text-blue-300 mb-4">{title}</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{points.map((point, j) => (
											<li key={j}>{point}</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
