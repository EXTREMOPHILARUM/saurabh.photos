import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllPosts, getPostsByTag } from '@/lib/posts';

export function useTagFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tagParam = searchParams.get('tag');
  const [selectedTag, setSelectedTag] = useState<string | null>(tagParam);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return getAllPosts();
    return getPostsByTag(selectedTag);
  }, [selectedTag]);

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  return {
    selectedTag,
    filteredPosts,
    handleTagChange,
  };
}
