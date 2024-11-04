// src/hooks/useSyncedSlug.js

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

const useSyncedSlug = () => {
  const router = useRouter();
  const params = useParams();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    const urlSlug = params?.slug;
    const storedSlug = localStorage.getItem('slug');

    if (urlSlug) {
      // Update localStorage if slug in URL is different from stored value
      if (urlSlug !== storedSlug) {
        localStorage.setItem('slug', urlSlug);
      }
      setSlug(urlSlug);
    } else if (storedSlug) {
      // If no slug in URL, update URL with stored slug
      router.replace(`/home/${storedSlug}`);
      setSlug(storedSlug);
    }
  }, [params?.slug, router]);

  return slug;
};

export default useSyncedSlug;
