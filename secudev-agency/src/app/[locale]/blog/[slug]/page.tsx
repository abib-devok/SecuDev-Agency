import { createServerClient } from '@/lib/supabase/client';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const supabase = createServerClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, meta_tags')
    .eq('slug', params.slug)
    .single();

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | SecuDev Blog`,
    description: post.excerpt,
    keywords: post.meta_tags?.keywords || [],
  };
}

// Statically generate routes for all blog posts at build time
export async function generateStaticParams() {
  const supabase = createServerClient();
  const { data: posts } = await supabase.from('blog_posts').select('slug');
  return posts?.map(({ slug }) => ({ slug })) || [];
}

export default async function BlogPostPage({ params }: Props) {
  const supabase = createServerClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-brand-green">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold font-headings tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-6 text-xl leading-8">{post.excerpt}</p>
        <div className="mt-10 max-w-2xl">
          <div className="prose prose-lg prose-indigo">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
