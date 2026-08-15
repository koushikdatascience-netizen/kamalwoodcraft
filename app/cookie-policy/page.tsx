import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Cookie Policy", "Starter cookie policy template for Kamal Technologies.", "/cookie-policy");
export default function Page() { return <LegalPage title="Cookie Policy" />; }
