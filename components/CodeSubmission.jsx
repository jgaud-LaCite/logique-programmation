'use client';

import styles from './CodeSubmission.module.css';

import { useState } from 'react';

const CodeSubmission = ({slug = ''}) => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!code) {
            alert('Veuillez entre votre code!');
            return;
        }

        try {
            const response = await fetch('https://jgaudLaCite.pythonanywhere.com/submit_check50', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code, slug })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data.result);

            // Open result in a new tab
            const newWindow = window.open('', '_blank');
            if (newWindow) {
                newWindow.document.open();
                newWindow.document.write(data.result);
                newWindow.document.close();
            }

        } catch (error) {
            console.error('Error:', error);
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
                <button type="submit" className={styles.submitCodeButton}>Soumettre</button>
            </form>
        </div>
    );
};

export default CodeSubmission;
