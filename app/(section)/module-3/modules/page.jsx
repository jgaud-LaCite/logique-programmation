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

const import_module =
`import math
print(math.log(16)) # calcule le logarithme de 16
`

const import_module_as =
`import math as ma
print(ma.log(16)) # calcule le logarithme de 16
`

const import_module_from =
`from math import log
print(log(16)) # calcule le logarithme de 16
`

export default function Page() {
    return <>
    <p>
        Jusqu'à présent, nous avons utiliser plusieurs fonctions et méthodes de Python telles que les fonctions <IC>print</IC>, <IC>input</IC> et les méthodes des types de données intégrés comme <IC>upper</IC> ou <IC>replace</IC> pour les chaînes de caractères. Toutes ces fonctions et méthodes sont définies dans les librairies de base de Python, nous n'avons donc pas à les importer puisqu'elles sont disponibles par défaut. L'un des avantages de Python est qu'il y a plusieurs bibliothèques et modules disponibles pour étendre les fonctionnalités de base de Python. Dans cette section, nous allons voir comment utiliser des modules en Python. Plus tard, nous verrons même comment créer nos propres modules.
    </p>
    
    <p>
        Un module est un fichier contenant des définitions et des instructions Python. Le nom du fichier est le nom du module avec l&apos;extension <IC>.py</IC>. Un module peut définir des fonctions, des classes et des variables. Un module peut également inclure du code exécutable.
        C&apos;est une façon de structurer votre code en le divisant en plusieurs fichiers. Cela rend le code plus lisible et plus facile à maintenir. Par exemple, un fichier pourrait contenir des fonctions liées aux mathématiques, un autre fichier pourrait contenir des fonctions liées à la manipulation de fichiers, etc.
    </p>


    <section>
        <h2>Importer un module</h2>
        <p>
            Pour utiliser les fonctions définies dans un module, vous devez d&apos;abord importer le module. Pour importer un module, utilisez l&apos;instruction <IC>import</IC> suivie du nom du module. Ceci importe tout le module et vous pouvez accéder à tous les éléments du module en utilisant la notation pointée.
            Comme exemple, importons le module <IC>math</IC> qui comporte plusieurs fonctions mathématiques pouvant être utilisées dans nos programmes.
        </p>
        <CodeBlock language="python">
            {import_module}
        </CodeBlock>

        <p>
            Vous remarquerez que nous avons utilisé la fonction <IC>log</IC> du module <IC>math</IC> pour calculer le logarithme de 16. Nous avons utilisé la notation pointée pour accéder à la fonction en utilisant le nom du module suivi d&apos;un point et du nom de la fonction. Bien évidemment, il est impossible de se rappeler de tous les modules et fonctions disponibles en Python. C&apos;est pourquoi la documentation de ceux-ci est un outil essentiel pour trouver des informations sur les fonctions disponibles. Voici par exemple la documentation du module <a href="https://docs.python.org/fr/3/library/math.html" target="_blank" rel="noopener noreferrer">math</a>.
        </p>

        <h3>Renommer un module</h3>
        <p>
            Parfois, vous pouvez vouloir renommer un module pour faciliter son utilisation. Vous pouvez le faire en utilisant l&apos;instruction <IC>import</IC> suivie du nom du module et du mot-clé <IC>as</IC> suivi du nouveau nom.
            Par exemple, pour renommer le module <IC>math</IC> en <IC>ma</IC>, vous pouvez faire:
        </p>
        <CodeBlock language="python">
            {import_module_as}
        </CodeBlock>

        <h3>Importer un élément spécifique</h3>
        <p>
            Vous pouvez également importer un élément spécifique d&apos;un module en utilisant l&apos;instruction <IC>from</IC> au lieu du module au complet. Par la suite, vous pouvez accéder à cet élément directement sans utiliser la notation pointée.
            Par exemple, pour importer uniquement la fonction <IC>log</IC> du module <IC>math</IC>, vous pouvez faire:
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
