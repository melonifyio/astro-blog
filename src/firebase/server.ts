import type { ServiceAccount } from 'firebase-admin';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import type { BlogPost } from '../consts';

const serviceAccount = {
  type: 'service_account',
  project_id: import.meta.env.FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.FIREBASE_PRIVATE_KEY,
  client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.FIREBASE_AUTH_URI,
  token_uri: import.meta.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_CERT_URL,
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

const db = getFirestore(app);

export const getBlogPosts = async () => {
  const blogPostsRef = db.collection('blog-posts');
  const blogPostsSnapshot = await blogPostsRef.get();
  const blogPosts = blogPostsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as BlogPost[];

  return blogPosts;
};
