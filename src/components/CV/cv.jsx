import styles from '../../styles/cv.module.scss';
import useModularFetch from '../../hooks/modularFetch.js';

export default function Cv() {
    const { entities: cvData, loading, error } = useModularFetch('/api/cvs');

    const handleDownload = async () => {
        try {
            const response = await fetch('/api/download');

            // Vérification si la réponse est OK
            if (!response.ok) {
                console.error('Erreur HTTP: ', response.status, response.statusText);
                throw new Error('Le téléchargement a échoué. Statut : ' + response.status);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Mycv.pdf';
            link.click();
            window.URL.revokeObjectURL(url); // Libère la mémoire

        } catch (error) {
            console.error('Erreur lors du téléchargement :', error);
            alert('Le téléchargement a échoué. Veuillez réessayer plus tard.');
        }
    };

    if (loading) {
        return <p>Chargement en cours...</p>;
    }

    if (error) {
        return <p>Erreur lors de la récupération des données: {error.message}</p>;
    }

    return (
        <div className={styles.cvcontainer}>
            <div className={styles.cvbutton}>
                <button onClick={handleDownload} id="cvbtn">Télécharger mon cv</button>
            </div>
            <div className={styles.cvblock}>
                <div className={styles.cvtitle}>
                    <p>Formation / exp pro</p>
                </div>
                {cvData.map((item) => (
                    <div key={item._id} className={styles.cvinfo}>
                        <ul>
                            <li>{item.title}</li>
                            <li>{item.date}</li>
                            <li>{item.description}</li>
                            <li>{item.category}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
