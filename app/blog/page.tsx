import { blogPosts } from "@/content/blog";
import { BlogCard } from "@/components/cards/blog-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Blog", "Starter educational articles on AI, software, automation, websites, CRM, and digital growth.", "/blog");
export default function BlogPage() {
  return <><PageHero label="Insights" title="Ideas on AI, Software, Automation, and Growth" text="Starter educational content for business owners and teams planning practical technology improvements." crumbs={[{ label: "Blog" }]} /><section className="section"><div className="container grid gap-5 md:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></section></>;
}
