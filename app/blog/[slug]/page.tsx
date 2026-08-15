import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/content/blog";
import { PageHero } from "@/components/ui/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; const post = getPost(slug); return post ? pageMetadata(post.title, post.excerpt, `/blog/${post.slug}`) : {}; }
export default async function BlogDetail({ params }: Props) {
  const { slug } = await params; const post = getPost(slug); if (!post) notFound();
  return <><PageHero label={post.category} title={post.title} text={post.excerpt} crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]} /><article className="section"><div className="container grid gap-10 lg:grid-cols-[260px_1fr]"><aside className="card h-fit p-5"><p className="font-bold">{post.readingTime}</p><p className="mt-1 text-sm text-slate-600">{post.published} • {post.author}</p><h2 className="mt-5 font-heading text-lg font-extrabold">Table of contents</h2>{post.sections.map((s) => <a className="mt-3 block text-sm text-blue-600" href={`#${s.id}`} key={s.id}>{s.heading}</a>)}</aside><div className="prose max-w-none">{post.sections.map((section) => <section id={section.id} key={section.id} className="mb-10 scroll-mt-28"><h2 className="font-heading text-3xl font-extrabold text-navy-950">{section.heading}</h2>{section.body.map((p) => <p className="mt-4 text-lg leading-8 text-slate-600" key={p}>{p}</p>)}</section>)}<h2 className="font-heading text-3xl font-extrabold">Related posts</h2>{blogPosts.filter((x) => x.slug !== post.slug).slice(0, 2).map((x) => <Link className="mt-3 block font-bold text-blue-600" href={`/blog/${x.slug}`} key={x.slug}>{x.title}</Link>)}</div></div></article><CTABanner /></>;
}
