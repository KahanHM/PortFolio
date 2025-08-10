// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Kahan - DevOps Portfolio" />
        <meta
          name="keywords"
          content="DevOps Engineer, Backend Developer, CI/CD, Cloud Infrastructure, Docker, Kubernetes, AWS, Terraform"
        />
        <meta name="author" content="Kahan Ahamed" />

        {/* Open Graph */}
        <meta property="og:title" content="Kahan Ahamed - DevOps & Backend Portfolio" />
        <meta property="og:description" content="Explore my projects in DevOps automation, cloud engineering, and backend development." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kahan - DevOps Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kahan Ahamed - DevOps Engineer" />
        <meta name="twitter:description" content="DevOps portfolio including CI/CD pipelines, cloud automation, and backend services." />
        <meta name="twitter:creator" content="@kahan_devops" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
