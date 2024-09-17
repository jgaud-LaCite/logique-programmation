import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Structure conditionnelle else",
    description: "Explication de la structure conditionnelle à deux blocs",
    keywords: ["else", "condition", "structure", "conditionnelle"],
    group: "notes",
}

const multipleIf =
`nb = input("Entrez un nombre: ")
if nb >= 0:
    print("Le nombre entré est positif ou zéro")
if nb < 0:
    print("Le nombre entré est négatif")
`;

const ifElse =
`nb = input("Entrez un nombre: ")
if nb >= 0:
    print("Le nombre entré est positif ou zéro")
else:
    print("Le nombre entré est négatif")
`;

export default function Page() {
    return <>
    <p>
        Il est possible d&apos;utiliser la structure conditionnelle <IC>if</IC> pour exécuter un bloc de code si une condition est vraie et d&apos;ajouter un autre bloc de code si la condition est fausse, par exemple:
    </p>
    <CodeBlock language="python">
        {multipleIf}
    </CodeBlock>
    <p>
        Dans cet exemple, si le nombre entré est positif, le programme affichera &quot;Le nombre entré est positif&quot; et si le nombre entré est négatif, le programme affichera &quot;Le nombre entré est négatif&quot;. Puisque nous avons utiliser deux structures conditionnelles <IC>if</IC>, les deux blocs de code seront testés, l&apos;un après l&apos;autre. Cependant, vous remarquerez que les conditions sont mutuellement exclusives, c&apos;est-à-dire que si le nombre entré est positif, il est impossible qu&apos;il soit négatif. Dans ce cas, il est préférable d&apos;utiliser la structure conditionnelle <IC>else</IC> qui permet d&apos;exécuter un bloc de code si la condition de l&apos;<IC>if</IC> est fausse.
    </p>
    <h2>Structure conditionnelle <IC>else</IC></h2>
    <p>
        La structure conditionnelle <IC>else</IC> est utilisée pour exécuter un bloc de code si la condition de l&apos;<IC>if</IC> est fausse. Le bloc de code de l&apos;<IC>else</IC> sera <strong>toujours</strong> exécuté si la condition de l&apos;<IC>if</IC> est fausse. Voici notre exemple précédent réécrit avec une structure conditionnelle <IC>else</IC>:
    </p>
    <CodeBlock language="python">
        {ifElse}
    </CodeBlock>
    <p>
        Dans cet exemple, le programme est identique au précédent, mais nous avons remplacé la deuxième structure conditionnelle <IC>if</IC> par une structure conditionnelle <IC>else</IC>. Cela a quelques avantages, entre autre cela rend le code plus lisible, cela peut évité des erreurs lors de l&apos;écriture de nos conditions et cela évite de tester inutilement des conditions mutuellement exclusives (performance).
    </p>
    </>;
}
