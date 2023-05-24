import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDPZPJ_NbwszlThAN71uYwwtgdRq9kAeOQ',
  authDomain: 'melonify-blogs.firebaseapp.com',
  projectId: 'melonify-blogs',
  storageBucket: 'melonify-blogs.appspot.com',
  messagingSenderId: '87737093888',
  appId: '1:87737093888:web:eaa1194121d1bcbdb52de5',
  measurementId: 'G-SQQHMJ2TJG',
};

export const app = initializeApp(firebaseConfig);
