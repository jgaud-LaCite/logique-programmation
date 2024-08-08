'use client';

import styles from './CodeSubmission.module.css';

import { useState } from 'react';

const CodeSubmission = ({slug = ''}) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!code) {
            alert('Veuillez entre votre code!');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://jgaudLaCite.pythonanywhere.com/submit_check50', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': process.env.NEXT_PUBLIC_CODE_CHECKER_API_KEY
                },
                body: JSON.stringify({ code, slug })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Open result in a new tab
            const newWindow = window.open('', '_blank');
            if (newWindow) {
                newWindow.document.open();
                newWindow.document.write(data.result);
                newWindow.document.close();
            }

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.submitBox}>
            <p>Copier/Coller votre code ci-bas, appuyer sur Soumettre et attendez quelques secondes.</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={code}
                    onChange={handleCodeChange}
                    rows="10"
                    cols="90"
                    placeholder="Copiez votre code ici..."
                    required
                />
                <br />
                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.submitCodeButton}>Soumettre</button>
                    {loading && <div className={styles.spinner}></div>}
                </div>
            </form>
        </div>
    );
};

export default CodeSubmission;
