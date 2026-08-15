import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Refund Policy", "Starter refund policy template for Kamal Technologies.", "/refund-policy");
export default function Page() { return <LegalPage title="Refund Policy" />; }
