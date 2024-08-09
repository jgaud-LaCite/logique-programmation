import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Variables",
    description: "Introduction aux variables en Python.",
    keywords: ["variable", "stocker"],
    group: "notes",
}

export const no_variable =
`print("Mélissa: Comment tu t'appelles?")
print("Joel: Je m'appelle Joel")
print("Mélissa: Enchantée Joel!")
`;

export const with_variable =
`first_name1 = "Mélissa"
first_name2 = "Joel"
print(first_name1 + ": Comment tu t'appelles?")
print(first_name2 + ": Je m'appelle " + first_name2)
print(first_name1 + ": Enchantée " + first_name2 + "!")
`;

export const modify_content =
`first_name = "Mélissa"
print(first_name) # Mélissa
first_name = "Joel"
print(first_name) # Joel
`;

export const f_string =
`first_name1 = "Mélissa"
first_name2 = "Joel"
print(f"{first_name1}: Comment tu t'appelles?")
print(f"{first_name2}: Je m'appelle {first_name2}")
print(f"{first_name1}: Enchantée {first_name2}!")
`;

export default function Page() {
    return <>
        <section>
            <h2>Déclaration</h2>
            <p>
                Lorsque l&apos;on écrit des programmes il est souvent nécessaire de stocker des valeurs pour les réutiliser plus tard ou bien
                pour afin de les changer dynamiquement. Prenez l&apos;exemple suivant:
            </p>

            <CodeBlock language="python">
                {no_variable}
            </CodeBlock>

            <p>
                Si l&apos;on veut changer le nom de Joel par exemple, il faudra changer toutes les occurrences de <IC>Joel</IC> dans le code.
                C&apos;est là qu&apos;interviennent les variables. Une variable est un espace mémoire qui permet de stocker une valeur. On peut
                penser à des boites qui ont une <strong>étiquette</strong> et qui contiennent une valeur. En Python, on peut déclarer une variable 
                en utilisant simplement le symbole <IC>=</IC> suivi de la valeur que l&apos;on veut lui assigner, c&apos;est ce qu&apos;on appelle 
                l&apos;assignation ou l&apos;initialisation d&apos;une variable. Par exemple <IC>first_name1 = &quot;Mélissa&quot;</IC> assigne
                la valeur <IC>&quot;Mélissa&quot;</IC> à la variable <IC>first_name1</IC>. Pour reprendre le code précédent:
            </p>

            <CodeBlock language="python">
                {with_variable}
            </CodeBlock>

            <p>
                Vous remarquerez que le code est plus lisible et plus facile à maintenir. Si l&apos;on veut changer le nom de Joel, il suffit de changer
                la valeur de la variable <IC>first_name2</IC> et le tour est joué. Vous remarquerez également l&apos;usage du symbole <IC>+</IC> pour
                concaténer les chaînes de caractères. C&apos;est une autre manière d&apos;utiliser l&apos;opérateur <IC>+</IC> en Python que nous allons discuter plus
                en détail dans la section suivante.
            </p>

            <ColoredBox title="Attention">
                Vous devez déclarer la variable avant de l&apos;utiliser. Si vous essayez d&apos;utiliser une variable qui n&apos;a pas été déclarée, vous obtiendrez une erreur.
            </ColoredBox>

        </section>

        <section>
            <h2>Noms des variables</h2>
            <p>
                Bien qu&apos;il peut sembler arbitraire, le nom des variables est très important. En effet, il existe plusieurs règles à respecter
                lors du nommage de nos variables ou de tout autre identifiant en Python. Voici quelques règles à respecter:
            </p>

            <ol>
                <li>Une variable doit obligatoirement commencer par une lettre ou un tiret bas <IC>_</IC>.</li>
                <li>Le nom d&apos;une variable peut contenir seulement des charactères alphanumériques et des tirets bas.</li>
                <li>Le nom des variables est sensible à la casse, <IC>first_name</IC> et <IC>First_name</IC> sont deux variables différentes.</li>
                <li>Le nom ne peut pas utilisé un mot clé du langage.</li>
            </ol>

            <p>
                En plus de ces règles obligatoires, il existe également des conventions à respecter pour rendre votre code plus lisible. 
                Les lignes directrices <a href="https://peps.python.org/pep-0008/#function-and-variable-names" target="_blank" rel="noopener noreferrer">PEP 8 de Python</a> recommandent 
                d&apos;utiliser des noms de variables en minuscules et séparés par des tirets bas (snake_case), c&apos;est la convention que vous devrez
                utiliser durant ce cours. Par exemple, <IC>first_name</IC> est un bon nom de variable tandis que <IC>FirstName</IC> n&apos;est pas recommandé.
                Utilisez également des noms de variables <strong>descriptifs</strong> et évitez d&apos;utiliser des noms trop longs ou trop courts, excepté pour les boucles.
            </p>
        </section>

        <section>
            <h2>Modification du contenu</h2>
            <p>
                Une fois qu&apos;une variable est déclarée, il est possible de changer sa valeur à n&apos;importe quel moment sans problème.
                Toutes les utilisations suivant le changement de valeur utiliseront la nouvelle valeur. Par exemple:
            </p>
            <CodeBlock language="python">
                {modify_content}
            </CodeBlock>
            <p>
                Dans cet exemple, nous avons déclaré une variable <IC>first_name</IC> avec la valeur <IC>Mélissa</IC> puis nous avons changé
                sa valeur pour <IC>Joel</IC>. Vous pouvez changer la valeur d&apos;une variable autant de fois que vous le souhaitez. 
                C&apos;est ce qui rend les variables si puissantes en programmation.
            </p>
        </section>

        <section>
            <h2>Affichage des variables</h2>
            <p>
                Bien qu&apos;on peut afficher des variables en utilisant la concaténation de chaînes de caractères comme vu plus haut, 
                Python offre une manière plus simple d&apos;afficher des variables en utilisant la fonction <IC>print</IC>: le <strong>f-string</strong>.
                Pour utiliser le f-string, il suffit de préfixer la chaîne de caractères avec un <IC>f</IC> ou <IC>F</IC> et 
                d&apos;utiliser des accolades lorsque l&apos;on veut évaluer une expression comme une variable. Par exemple:
            </p>
            <CodeBlock language="python">
                {f_string}
            </CodeBlock>

        </section>
    </>;
}
