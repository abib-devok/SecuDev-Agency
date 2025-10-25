import { createServerClient } from '@/lib/supabase/client';
import Link from 'next-intl/link';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const supabase = createServerClient();
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('title, slug, excerpt, category, created_at')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error fetching blog posts:', error);
    // Handle error gracefully, maybe show a message to the user
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headings tracking-tight text-gray-900 sm:text-4xl">Notre Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez nos analyses, tutoriels et réflexions sur la sécurité et le développement web.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts?.map((post) => (
            <article key={post.slug} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                {/* Placeholder for an image */}
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created_at} className="text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="relative z-10 rounded-full bg-brand-green/10 px-3 py-1.5 font-medium text-brand-green">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
