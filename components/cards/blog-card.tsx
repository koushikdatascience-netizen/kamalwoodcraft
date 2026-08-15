import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card p-6">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Starter educational content</span>
      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-blue-600">{post.category}</p>
      <h3 className="mt-2 font-heading text-xl font-extrabold text-navy-950">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <p className="mt-4 text-xs font-semibold text-slate-500">{post.readingTime} • {post.published}</p>
      <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600" href={`/blog/${post.slug}`}>
        Read article <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
