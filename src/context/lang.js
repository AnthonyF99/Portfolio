import { useState, useEffect, useContext } from 'react';

const useLangManager = () => {
  const [language, setLanguage] = useContext(Context)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  }, []);

  return { language, loading, error };
};

export default useLangManager;
