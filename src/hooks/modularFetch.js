import { useState, useEffect } from 'react';

const useModularFetch = (apiEndpoint) => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Entities récupére les data du endpoint mentionné.
  useEffect(() => {
    const fetchEntities = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setEntities(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntities();
  }, [apiEndpoint]);

  return { entities, loading, error };
};

export default useModularFetch;
