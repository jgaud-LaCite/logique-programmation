import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Modules",
    description: "Notions de base sur les modules en Python.",
    keywords: ["modules", "python", "import", "from"],
    group: "notes",
}

export const function_with_return =
`def add(a, b):
    return a + b

result = add(3, 5)
print(result) # Imprime: 8
`

export const import_module =
`import mathematique
print(add(2,4))
`

export const import_module_as =
`import mathematique as ma
print(ma.add(2,4))
`

export const import_module_from =
`from mathematique import add
print(add(2,4))
`

export default function Page() {
    return <>
    <p>
        Un module est un fichier contenant des définitions et des instructions Python. Le nom du fichier est le nom du module avec l&apos;extension <IC>.py</IC>. Un module peut définir des fonctions, des classes et des variables. Un module peut également inclure du code exécutable.
        C&apos;est une façon de structurer votre code en le divisant en plusieurs fichiers. Cela rend le code plus lisible et plus facile à maintenir. Par exemple, un fichier pourrait contenir des fonctions liées aux mathématiques, un autre fichier pourrait contenir des fonctions liées à la manipulation de fichiers, etc.
        À titre d&apos;exemple, voici un module simple qui définit la fonction <IC>add</IC> que nous avons vue dans la section sur les fonctions. Incluons cette fonction dans un fichier nommé <IC>mathematique.py</IC>:
    </p>
    <CodeBlock language="python">
                {function_with_return}
    </CodeBlock>

    <section>
        <h2>Importer un module</h2>
        <p>
            Pour utiliser les fonctions définies dans un module, vous devez d&apos;abord importer le module. Pour importer un module, utilisez l&apos;instruction <IC>import</IC> suivie du nom du module.
            Ceci importe tout le module et vous pouvez accéder à ses fonctions en utilisant la notation pointée. Créons un nouveau fichier nommé <IC>main.py</IC> et importons le module <IC>mathematique</IC>:
        </p>
        <CodeBlock language="python">
            {import_module}
        </CodeBlock>

        <h3>Renommer un module</h3>
        <p>
            Parfois, vous pouvez vouloir renommer un module pour faciliter son utilisation. Vous pouvez le faire en utilisant l&apos;instruction <IC>import</IC> suivie du nom du module et du mot-clé <IC>as</IC> suivi du nouveau nom.
            Par exemple, pour renommer le module <IC>mathematique</IC> en <IC>ma</IC>, vous pouvez faire:
        </p>
        <CodeBlock language="python">
            {import_module_as}
        </CodeBlock>

        <h3>Importer un élément spécifique</h3>
        <p>
            Vous pouvez également importer un élément spécifique d&apos;un module en utilisant l&apos;instruction <IC>from</IC> au lieu du module au complet. Par la suite, vous pouvez accéder à cet élément directement sans utiliser la notation pointée.
            Par exemple, pour importer uniquement la fonction <IC>add</IC> du module <IC>mathematique</IC>, vous pouvez faire:
        </p>
        <CodeBlock language="python">
            {import_module_from}
        </CodeBlock>

        <ColoredBox title="Note">
            Il existe de nombreux modules Python prédéfinis qui sont disponibles pour être importés et utilisés dans vos programmes. Vous pouvez consulter <a href="https://docs.python.org/fr/3/py-modindex.html" target="_blank" rel="noopener noreferrer">la documentation Python</a> pour une liste complète des modules disponibles.
            De plus, plusieurs bibliothèques tierces sont disponibles pour étendre les fonctionnalités de Python. Vous pouvez les installer en utilisant l&apos;outil <IC>pip</IC> et les importer dans vos programmes.
        </ColoredBox>
                
    </section>
    </>;
}
