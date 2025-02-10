"use client";

import { RetroGrid } from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <RetroGrid />
      <div className="relative flex flex-col p-8">
        <h1 className="text-6xl font-bold">Networks - Project 1</h1>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Project Overview</h2>
          <p className="mt-4 text-lg">
            This project involves setting up a website as part of a Computer
            Networking project. The website is created using Next.js, Tailwind
            CSS, and TypeScript, and is deployed on Vercel.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Domain & Hosting</h2>
          <p className="mt-4 text-lg">
            The website is hosted on Vercel and is accessible via the subdomain{" "}
            <a
              href="https://networks-project-1.vercel.app"
              className="text-blue-500"
            >
              networks-project-1.vercel.app
            </a>
            . Vercel provides a seamless deployment process with CI/CD
            integration.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Website Setup</h2>
          <p className="mt-4 text-lg">
            The website is built using Next.js for the framework, Tailwind CSS
            for styling, and TypeScript for type safety. The repository is
            hosted on GitHub, and any push or merge to the main branch triggers
            a deployment on Vercel.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Networking Aspects</h2>
          <p className="mt-4 text-lg">
            The site is accessible online, demonstrating knowledge of DNS, IP
            addresses, and protocols. The domain name system (DNS) translates
            the domain name to an IP address, allowing users to access the site
            via the subdomain.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Challenges Faced</h2>
          <p className="mt-4 text-lg">
            Some challenges faced during the project included configuring the
            DNS settings and ensuring the CI/CD pipeline was correctly set up.
            These were resolved by referring to Vercel and GitHub documentation.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold">Conclusion</h2>
          <p className="mt-4 text-lg">
            This project provided hands-on experience with web development and
            networking concepts. The website is live and demonstrates the
            application of DNS, IP addresses, and deployment protocols.
          </p>
        </section>
      </div>
    </main>
  );
}
