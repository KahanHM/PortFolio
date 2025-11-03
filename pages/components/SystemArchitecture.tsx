'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function SystemArchitecture() {
	return (
		<section id="SystemArchitecture" className="py-20 px-4 bg-gradient-to-b from-[#0a192f] to-[#112240] text-white font-mono">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center text-blue-400 mb-12"
				>
					$ system-architecture
				</motion.h2>

				<div className="grid grid-cols-1 gap-10">
					{[
						{
  title: 'Secure Linux Servers with SSH Hardening and Fail2Ban',
  description:
    'Implemented multi-layered security on Linux servers using SSH key-based authentication, Fail2Ban, UFW, and non-default SSH ports to protect against brute-force and automated attacks.',
  details: [
    'Configured SSH key-based authentication (RSA 4096-bit) and disabled password logins',
    'Changed default SSH port and blocked unused ports with UFW firewall',
    'Installed and configured Fail2Ban for dynamic IP banning on repeated failed logins',
    'Created custom jail configuration in /etc/fail2ban/jail.d for modular management',
    'Reduced failed login attempts by over 95% through layered security approach',
  ],
  tech: ['Linux', 'SSH', 'Fail2Ban', 'UFW', 'Cybersecurity'],
  link: 'https://www.linkedin.com/pulse/how-secure-linux-servers-ssh-hardening-fail2ban-kahan-hm-kdzpc/?trackingId=dmv9rHWrxBtzpCD63t60UA%3D%3D
}
						,{
							title: 'Spring PetClinic – Helm-Powered Deployment on GKE',
							description:
								'Deployed the Spring PetClinic app on Google Kubernetes Engine using Helm charts to enable scalable and repeatable deployments.',
							details: [
								'Created auto-scaling GKE cluster using gcloud CLI',
								'Packaged app with Helm for easy upgrades and rollbacks',
								'Used Persistent Volume Claims (PVC) for MySQL data storage',
								'Secured credentials with Kubernetes Secrets',
								'Automated cluster management for consistency',
							],
							tech: ['GKE', 'Helm', 'Kubernetes Secrets', 'PVC', 'kubectl'],
							github: 'https://github.com/KahanHM/spring-rest-helm-GKE',
						},
						{
							title: 'Spring PetClinic – Full CI/CD with Jenkins, Terraform, Docker & GCP',
							description:
								'Built an automated deployment pipeline for Spring PetClinic with Jenkins, Terraform, Ansible, and Docker Swarm.',
							details: [
								'Configured Jenkins pipelines for deployment automation',
								'Provisioned infrastructure on GCP with Terraform',
								'Used Ansible to set up environments and Docker Swarm for orchestration',
								'Integrated security scanning with Trivy',
								'Managed secrets securely using Docker Swarm',
							],
							tech: ['Jenkins', 'Terraform', 'Docker', 'Ansible', 'Trivy', 'GCP'],
							github: 'https://github.com/KahanHM/spring-petclinic-rest',
						},
						{
							title: 'Jenkins GitHub Org Folder – Dynamic CI/CD Automation',
							description:
								'Simplified CI/CD pipeline setup across multiple GitHub repositories using Jenkins Organization Folder and a custom Docker agent.',
							details: [
								'Enabled Jenkins to auto-discover and build new GitHub repos',
								'Created lightweight Docker image with Node.js and AWS CLI',
								'Automated static file hosting on AWS S3 with bucket policies',
								'Optimized build time by skipping unnecessary checkouts',
							],
							tech: ['Jenkins', 'GitHub Webhooks', 'Docker', 'AWS S3', 'Org Folder Plugin'],
							github: 'https://github.com/HM-Techies/portfolio',
						},
						{
							title: 'Node.js API CI/CD with Jenkins, Docker & Terraform (AWS EC2)',
							description:
								'Developed CI/CD pipeline to deploy Node.js backend API on AWS EC2 with MongoDB, ensuring automated builds and testing.',
							details: [
								'Triggered Jenkins pipeline via GitHub webhook on code push',
								'Provisioned EC2 instances dynamically with Terraform',
								'Built and pushed Docker images to Docker Hub',
								'Automated .env file creation and MongoDB integration',
								'Validated API functionality with Postman tests',
							],
							tech: ['Jenkins', 'Terraform', 'Docker', 'MongoDB', 'AWS EC2', 'Postman'],
							github: 'https://github.com/KahanHM/NodeJSApp',
						},
						{
							title: 'MongoDB Replication, Backup & Cross-Cloud Migration',
							description:
								'Automated MongoDB replication and migrated data between Azure DB and AWS RDS using Airflow and Celery, with dashboards for monitoring.',
							details: [
								'Set up MongoDB replica sets for high availability',
								'Scheduled backups and failovers using Airflow workflows',
								'Used Python scripts for data migration between clouds',
								'Built real-time monitoring dashboards with Steampipe',
								'Implemented alerting with AWS SNS and EventBridge',
							],
							tech: ['MongoDB', 'Azure DB', 'RDS', 'Airflow', 'Celery', 'Steampipe', 'Python'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-[#0a192f]/80 border border-blue-800 rounded-xl p-6 shadow-md backdrop-blur-lg hover:shadow-blue-500/30 transition-shadow"
						>
							<h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
							<p className="text-blue-300 mb-5">{project.description}</p>

							<div className="mb-6">
								<h4 className="text-lg text-blue-400 mb-2">$ highlights</h4>
								<ul className="list-disc list-inside text-gray-300 space-y-2">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 border border-blue-500/30 text-blue-100 bg-blue-600/10 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>

							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600"
								>
									<FaGithub size={18} />
									<span className="text-sm font-medium">View Code on GitHub</span>
								</a>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
