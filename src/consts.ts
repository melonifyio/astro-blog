// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Timestamp } from 'firebase-admin/firestore';

export const SITE_TITLE = 'Melonify Blogs';
export const SITE_DESCRIPTION = 'Welcome to Melonify Blogs!';

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  publishedAt: Timestamp;
  category?: {
    id: string;
    title: string;
  };
}
