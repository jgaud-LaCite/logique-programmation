import ColoredBox from '@/components/ColoredBox'
import IC from "@/components/InlineCode";
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Premier programme et impression",
    description: "Écriture d'un premier programme et impression à l'écran.",
    keywords: ["Python", "premier programme", "impression", "print"],
    group: "notes",
}

export default function Page() {
    return <>
        <ColoredBox title="Attention">
                Cette section assume que vous avez déjà effectué le <a href="/module-1/lab-installation">Laboratoire 0 - Installation des logiciels</a>. 
                Si ce n&apos;est pas le cas, veuillez le faire avant de continuer.
        </ColoredBox>
        <section>
            <h2>Impression</h2>
        </section>

        <section>
            <h2>Exécution</h2>
            <p>
                Une fois Python installé, il existe plusieurs façons d'exécuter votre code. Spécifiquement, 
                vous pouvez exécuter le programme en le tapant directement dans la console de votre système d'exploitation
                ligne par ligne. Cependant, lorsque nous aurons des programmes plus complexes, nous allons plutôt les écrire dans un fichier
                puisque cela est plus pratique. Un programme peut également être exécuté à partir de plusieurs fichiers.
                Nous verrons plus tard qu'il est également possible d'exécuter du code Python de d'autre manières, par exemple
                à l'intérieur d'un <a target="_blank" rel="noopener noreferrer" href="https://jupyter.org/">Jupyter Notebook</a>.
            </p>

            <h3>Exécution sur la console</h3>
            <p>
                Pour exécuter du code Python, il suffit d'ouvrir un terminal et d'exécuter la commande <IC>python3</IC>. 
                Cette commande ouvre un interpréteur Python qui permet d'exécuter du code Python directement dans la console.
            </p>

            <h3>Exécution à partir d'un fichier</h3>
        </section>
        
    </>;
}
