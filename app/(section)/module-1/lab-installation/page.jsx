/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 0 - Installation des logiciels",
    description: "Présentation du laboratoire sur l'installation des logiciels.",
    keywords: ["éditeur", "logiciel", "installation"],
    group: "labs"
}

export default function Page() {
    return <>
        <p>
            Ce laboratoire a pour but de vous aider à installer les logiciels nécessaires pour suivre le cours.
            Il sera nécessaire d&apos;installer deux logiciels: <strong>Python</strong> qui vous permettra d&apos;exécuter du code Python 
            et <strong>Visual Studio Code</strong>, un éditeur de code qui, bien que non-nécessaire, est fortement recommandé car il nous permettra de modifier
            du code source avec des fonctionnalités plus avancées.
        </p>

        <section>
            <h2>Python 3</h2>
            <p>
                Nous utiliserons la dernière version de Python 3 pour ce cours. Python 3 a été publié en 2008 et est la version
                actuelle de Python. Python 2, la version précédente, a été abandonnée en 2020, il est donc important d&apos;utiliser Python 3.
            </p>
            <h3>Marche à suivre</h3>
            <ol>
                <li>
                    Aller sur le site de <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python</a>.
                </li>
                <li>
                    En appuyant sur le bouton jaune en haut de la page &quot;Download Python 3.x.x&quot;, vous serez redirigé vers une page où vous pourrez télécharger Python.
                </li>
                <li>
                    Lancez l&apos;installateur et cochez la case &quot;Add python.exe to PATH&quot;.
                </li>
                <li>
                    Cliquez sur &quot;Install Now&quot; et suivez les instructions.
                </li>
            </ol>
        </section>

        <section>
            <h2>Visual Studio Code</h2>
            <p>
                Visual Studio Code, aussi appelé VSCode ou Code et un petit éditeur de code très puissant qui peut être étendu à l&apos;aide d&apos;extension. 
                Selon les plus récentes statistiques, Visual Studio Code est présentement l&apos;éditeur de code le plus 
                utilisé sur le marché du travail.
            </p>

            <h3>Marche à suivre</h3>
            <ol>
                <li>
                    Aller sur le site de <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>.
                </li>
                <li>
                    Télécharger la bonne version de Visual Studio Code pour votre ordinateur.
                </li>
                <li>
                    Installer Visual Studio Code.
                </li>
                <li>
                    Lors de l&apos;installation, cochez les cases à cocher pour ajouter Visual Studio Code au menu contextuel.
                </li>
                <li>
                    À la fin de l&apos;installation, démarrez Visual Studio Code.
                </li>
                <li>
                    Sur le côté gauche, cliquez sur la dernière icône qui se nomme &quot;Extensions&quot; et installez l&apos;extension &quot;Python&quot;.
                </li>
            </ol>
        </section>
    </>;
}