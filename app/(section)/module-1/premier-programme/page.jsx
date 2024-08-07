import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
import Image from 'next/image';

import console from '@/public/img/module1-console.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Premier programme",
    description: "Écriture d'un premier programme.",
    keywords: ["Python", "premier programme", "console", "IDE"],
    group: "notes",
}

export default function Page() {
    return <>
        <ColoredBox title="Attention">
                Cette section assume que vous avez déjà effectué le <a href="../lab-installation">Laboratoire 0 - Installation des logiciels</a>. 
                Si ce n&apos;est pas le cas, veuillez le faire avant de continuer.
        </ColoredBox>

        <section>
            <p>
                Une fois Python installé, il existe plusieurs façons d&apos;exécuter votre code. Spécifiquement, 
                vous pouvez exécuter le programme en le tapant directement dans la console de votre système d&apos;exploitation
                ligne par ligne. Cependant, lorsque nous aurons des programmes plus complexes, nous allons plutôt les écrire dans un fichier
                puisque cela est plus pratique. Un programme peut également être exécuté à partir de plusieurs fichiers.
                Nous verrons plus tard qu&apos;il est également possible d&apos;exécuter du code Python de d&apos;autre manières, par exemple
                à l&apos;intérieur d&apos;un <a target="_blank" rel="noopener noreferrer" href="https://jupyter.org/">Jupyter Notebook</a>.
            </p>

            <h2>Exécution sur la console</h2>
            <p>
                Pour exécuter du code Python, il suffit d&apos;ouvrir un terminal et d&apos;exécuter la commande <IC>python</IC>. 
                Cette commande ouvre un interpréteur Python qui permet d&apos;exécuter du code Python directement dans la console.
            </p>
            <Image src={console} alt="" width="800" height="200"></Image>
            <p>
                Puisque Python est un langage interprété, il est possible d&apos;exécuter du code ligne par ligne et le contexte
                est conservé entre chaque ligne. Cela signifie que si vous stocké quelque chose à une ligne, vous pouvez l&apos;utiliser
                par après. Bien que très intéressant pour prototyper rapidement, cette méthode n&apos;est pas très pratique pour des programmes plus
                complexes ou pour exécuter du code à plusieurs reprises. Pour quitter l&apos;interpréteur Python, vous pouvez taper la commande <IC>exit()</IC>.
            </p>


            <h2>Exécution à partir d&apos;un fichier</h2>
            <p>
                C&apos;est la méthode que nous allons utiliser pour la suite du cours. Le code Python est stocké dans un fichier avec l&apos;extension <IC>.py</IC>.
                En utilisant Visual Studio Code, vous pouvez créer un nouveau fichier en cliquant sur <IC>Fichier</IC> puis <IC>Nouveau fichier</IC>.
                Ensuite, entrer un nom pour le fichier suivi de l&apos;extension <IC>.py</IC>, par exemple, <IC>labo0.py</IC> et enregistrer le fichier
                dans un dossier de votre choix.
            </p>

            <p>
                Vous pouvez ensuite écrire votre code Python à l&apos;intérieur de ce fichier. Si vous avez correctement installer l'extension Python pour Visual Studio Code,
                vous devriez voir votre code coloré. Pour exécuter le code, vous pouvez cliquer sur le bouton triangle qui ressemble à <IC>Play</IC> en haut à droite de l&apos;éditeur
                ou en appuyant sur <kbd>CTRL+F5</kbd> sur votre clavier.
            </p>
        </section>
    </>;
}
