export interface Publication {
    title: string;
    type: "conference" | "journal" | "workshop" | "poster";
    venue: string;
    authors: string[];
    links: Record<string, string>;
}