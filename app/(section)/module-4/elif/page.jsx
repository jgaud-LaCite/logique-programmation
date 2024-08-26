import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Structure conditionnelle elif",
    description: "Explication de la structure conditionnelle à plusieurs blocs",
    keywords: ["elif", "condition", "structure", "conditionnelle"],
    group: "notes",
}

const elif =
`if condition1:
    bloc de code 1
elif condition2:
    bloc de code 2
elif condition3:
    bloc de code 3
else:
    bloc de code 4
`

export default function Page() {
    return <>
    <p>
        Jusqu&apos;à présent, nous avons vu comment utiliser la structure conditionnelle <IC>if</IC> pour exécuter un bloc de code lorsque l&apos;on a une condition et la structure conditionnelle <IC>else</IC> lorsque l&apos;on a deux conditions. Mais que faire si nous avons plus de deux conditions? Par exemple:
    </p>
    <ul>
        <li>On veut classifier des personnes en fonction de leur âge dans 4 catégories: enfant, adolescent, adulte, aîné</li>
        <li>On veut savoir si un nombre est positif, négatif ou nul</li>
        <li>On veut donner une note à un élève en fonction de ses notes (A, B, C, D, E, F)</li>
    </ul>
    <p>
        Pour résoudre ces problèmes, nous pouvons utiliser la structure conditionnelle <IC>elif</IC>.
    </p>

    <h2>Structure conditionnelle <IC>elif</IC></h2>
    <p>
        La structure conditionnelle <IC>elif</IC> est une extension de la structure conditionnelle <IC>if</IC>. Elle permet d&apos;exécuter un bloc de code lorsque l&apos;on a plus de deux conditions.  
    </p>
    <p>
        La syntaxe de la structure conditionnelle <IC>elif</IC> est la suivante:
    </p>
    <CodeBlock language="python">
        {elif}
    </CodeBlock>
    <p>
        Python évalue les conditions de haut en bas. Si une condition est vraie, le bloc de code correspondant est exécuté et le reste des conditions sont ignorées. Dans ce cas-ci, la condition1 est évaluée en premier. Si elle est vraie, le bloc de code 1 est exécuté et le reste des conditions sont ignorées. Si la condition1 est fausse, la condition2 est évaluée. Si elle est vraie, le bloc de code 2 est exécuté et le reste des conditions sont ignorées et ainsi de suite. Si aucune condition n&apos;est vraie, le bloc de code 4 est exécuté.
    </p>
    <ColoredBox title="Note">
        Le <IC>else</IC> est optionnel. Vous pouvez donc utiliser la structure conditionnelle <IC>elif</IC> sans le <IC>else</IC>.
    </ColoredBox>
    </>;
}
