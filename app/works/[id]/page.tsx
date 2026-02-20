import { Metadata } from "next";
import ProjectClient from "./ProjectClient";

type Props = {
    params: Promise<{ id: string }>;
};

// 1. Dynamic SEO Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;

    // Format the ID for the title (e.g., 'infoware-limited' -> 'Infoware Limited')
    const title = id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        title: `${title} | Case Archive`,
        description: `Technical deployment and system architecture breakdown for ${title} by Ersnoble Media.`,
        openGraph: {
            title: `${title} | Institutional Infrastructure`,
            description: `Exploring the technical sovereignty and engineering protocol behind the ${title} build.`,
        },
    };
}

// 2. Load the Client Component
export default async function Page({ params }: Props) {
    return <ProjectClient params={params} />;
}