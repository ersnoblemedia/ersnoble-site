import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Initialize Mandate | Engineering Inquiry",
    description: "Secure a technical mandate with Ersnoble. We engineer high-performance digital engines for startups and global institutions.",
    openGraph: {
        title: "Ersnoble | Contact & Mandate Initialization",
        description: "Start your technical deployment. High-velocity engineering for institutional growth.",
        images: [{ url: "/og-image.jpg" }] // If you have a brand image
    }
};

export default function ContactPage() {
    return <ContactClient />;
}