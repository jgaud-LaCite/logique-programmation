import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Installation de bibliothèques avec pip",
    description: "Installer des bibliothèques Python avec pip",
    keywords: ["pip", "installation", "bibliothèques", "Python"],
    group: "notes",
}

const pipInstall = `python3 -m pip install <nom_de_la_bibliotheque>`

export default function Page(){
    return <>
        <p>
            En Python, il existe plusieurs bibliothèques nous permettant d'ajouter des fonctionnalités au language et de faciliter la réalisation de certaines tâches. En sciences de données et en intelligence artificielle, plusieurs de ces bibliothèques sont utilisées pour le traitement de données, la visualisation, l'apprentissage automatique, etc.
        </p>
        <h2>Installation de bibliothèques avec pip</h2>
        <p>
            pip est un gestionnaire de paquets pour Python. Il permet d'installer et de gérer des bibliothèques Python externes. Pour installer une bibliothèque avec pip globalement sur votre ordinateur, il suffit d'exécuter la commande suivante dans un terminal de commande:
        </p>
        <CodeBlock language="shell">
            {pipInstall}
        </CodeBlock>
    </>
}