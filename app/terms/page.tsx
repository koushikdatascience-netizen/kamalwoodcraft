import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms and Conditions", "Starter terms and conditions template for Kamal Technologies.", "/terms");
export default function Page() { return <LegalPage title="Terms and Conditions" />; }
