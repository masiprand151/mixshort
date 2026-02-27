import { useEffect, useState } from "react";
import api from "../libs/api";

function useDrama() {
  const [drama, setDrama] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState(["Semua", "Populer"]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDrama = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get(`/drama?page=${pageNumber}&limit=10`);
      const nestedTags = res.data.map((item) => item.tags?.slice(0, 2));
      const uniqueTags = [...new Set(nestedTags.flat())];

      if (pageNumber === 1) {
        setDrama(res.data);
        setTags((prev) => [...prev, ...uniqueTags]);
      } else {
        setDrama((prev) => [...prev, ...res.data]);
        setTags((prev) => [...prev, ...uniqueTags]);
      }

      setMeta(res.meta);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (refreshing) return;
    fetchDrama(page);
  }, [page]);

  const refresh = async () => {
    setRefreshing(true);
    setPage(1);

    try {
      const res = await api.get(`/drama?page=1&limit=10`);
      setDrama(res.data);
      setMeta(res.meta);
    } catch (error) {
      setError(error);
    } finally {
      setRefreshing(false);
    }
  };

  return {
    drama,
    meta,
    loading,
    error,
    tags,
    page,
    refreshing,
    setPage,
    refresh,
  };
}

export default useDrama;
