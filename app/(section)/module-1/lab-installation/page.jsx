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
        <section>
            <h2>Visual Studio Code</h2>
            <p>
                Ce cours ne demande pas que vous écriviez du code complexe ou des gros projet. Ceci étant dit, nous aurons 
                besoin de modifier du code source. Pour ce faire, je vous recommande d&apos;installer Visual Studio Code. Visual 
                Studio Code, aussi appelé VSCode ou Code et un petit éditeur de code très puissant qui peut être étendu à l&apos;aide 
                d&apos;extension. Selon les plus récentes statistiques, Visual Studio Code est présentement l&apos;éditeur de code le plus 
                utilisé sur le marché du travail.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
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
            </ol>
        </section>
    </>;
}