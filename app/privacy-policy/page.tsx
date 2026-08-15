import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy", "Starter privacy policy template for Kamal Technologies.", "/privacy-policy");
export default function Page() { return <LegalPage title="Privacy Policy" />; }
