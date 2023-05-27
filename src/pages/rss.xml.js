import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getBlogPosts } from '../firebase/server';

export async function get(context) {
  const posts = await getBlogPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishedAt.toDate().toLocaleDateString(),
      link: `/blog/${post.slug}/`,
    })),
  });
}
