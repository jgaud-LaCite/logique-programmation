'use client';

import styles from './CodeSubmission.module.css';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeSubmission = ({slug = ''}) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const { theme } = useTheme();

    const aceTheme = theme === 'dark' ? 'monokai' : 'textmate';

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!code) {
            alert('Veuillez entrer votre code!');
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
                <div className={styles.editorContainer}>
                    <AceEditor
                        placeholder="Copiez votre code ici..."
                        mode="python"
                        theme={aceTheme}
                        name="code-editor"
                        onChange={handleCodeChange}
                        fontSize={14}
                        lineHeight={19}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={code}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: true
                        }}
                        width='100%'
                        height='100%'
                    />
                </div>
                <br />
                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.submitCodeButton} disabled={loading}>Soumettre</button>
                    {loading && <div className={styles.spinner}></div>}
                </div>
            </form>
        </div>
    );
};

export default CodeSubmission;
