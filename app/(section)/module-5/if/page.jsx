import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Structure conditionnelle if",
    description: "Explication de la structure conditionnelle à un seul bloc",
    keywords: ["if", "condition", "structure", "conditionnelle"],
    group: "notes",
}

const ifSyntax =
`if condition:
    # Bloc de code à exécuter si la condition est vraie
    instruction1
    instruction2
    ...
    instructionN

instructionHorsBloc
`;

const ifSimple =
`nb = input("Entrez un nombre: ")
if nb > 0:
    print("Le nombre entré est positif")

print("Fin du programme")
`;

const ifComplex =
`nb = input("Entrez un nombre: ")
if nb > 0 and nb % 2 == 0:
    print("Le nombre entré est positif et pair")
`

export default function Page() {
    return <>
    <h2>Introduction</h2>
    <p>
        Jusqu&apos;à date, nos programmes ont été exécutés de manière linéaire, c&apos;est-à-dire que chaque instruction est exécutée dans l&apos;ordre dans lequel elle est écrite. Cela est suffisant pour des programmes très simples, mais pour des programmes plus complexes, nous avons besoin de structures de contrôle qui nous permettent de prendre des décisions en fonction de certaines conditions. Les structures de contrôles que nous verrons dans les prochaines sections nous permettrons de contrôler comment notre programme agit en fonction de la situation. La première structure de contrôle que nous verrons est la structure conditionnelle qui nous permettra d&apos;exécuter un bloc de code si une condition est vraie.
    </p>

    <h2>Syntaxe de la structure conditionnelle <IC>if</IC></h2>
    <p>
        La structure conditionnelle <IC>if</IC> est la structure de contrôle la plus simple en Python. Elle permet d&apos;exécuter un bloc de code si une condition est vraie. C&apos;est une pièce fondamentale de la programmation et elle est utilisée dans presque tous les programmes. Cela permet à notre programme peut prendre des décisions en fonction de l&apos;état de certaines variables ou de l&apos;entrée de l&apos;utilisateur. La syntaxe générale de la structure conditionnelle <IC>if</IC> est la suivante:
    </p>
    <CodeBlock language="python">
        {ifSyntax}
    </CodeBlock>
    <p>
        Vous remarquerez que l&apos;indentation est très importante en Python. Les instructions qui sont indentées après le <IC>if</IC> sont exécutées si la condition est vraie. Si la condition n&apos;est pas vraie, le bloc de code est simplement ignoré et le programme passe à l&apos;instruction suivante. Il est également possible d&apos;avoir plusieurs instructions indentées après le <IC>if</IC> pour exécuter plusieurs instructions si la condition est vraie. En python, il faut également faire attention d&apos;avoir au moins une instruction indentée après le <IC>if</IC> sinon vous aurez une erreur de syntaxe (on peut éviter cela en utilisant le mot-clé <IC>pass</IC> qui ne fait rien).
    </p>

    <h2>Utilisation de <IC>if</IC></h2>
    <p>
        Maintenant que vous savez la syntaxe de <IC>if</IC>, voyons comment l&apos;utiliser dans un programme. Nous devrons d&apos;abord définir une condition qui peut être évaluée comme vraie ou fausse. C&apos;est maintenant que les expressions booléennes que nous avons vues dans la section précédente entrent en jeu! Une fois que nous avons une condition, nous pouvons l&apos;utiliser dans une structure conditionnelle <IC>if</IC> pour exécuter un bloc de code si la condition est vraie. Voici un exemple simple:
    </p>
    <CodeBlock language="python">
        {ifSimple}
    </CodeBlock>
    <p>
        Dans cet exemple, nous demandons à l&apos;utilisateur d&apos;entrer un nombre. Ensuite, nous vérifions si le nombre est positif. Si c&apos;est le cas, nous affichons un message à l&apos;utilisateur. Si ce n&apos;est pas le cas, le bloc de code indenté après le <IC>if</IC> est simplement ignoré et le programme passe à l&apos;instruction suivante qui est <IC>print(&quot;Fin du programme&quot;)</IC>. Veuillez noter que cette dernière instruction est toujours exécutée, peu importe si la condition est vraie ou fausse.
    </p>
    <p>
        Comme nous avons vu avec les expressions booléennes, la condition dans un <IC>if</IC> peut être n&apos;importe quelle expression qui peut être évaluée comme vraie ou fausse. Cela peut être une comparaison, une opération logique, ou même une variable booléenne. Tant que l&apos;expression est vraie, le bloc de code indenté après le <IC>if</IC> sera exécuté. Cela veut dire que vous pouvez combiner plusieurs conditions comme nous avons vu dans la section précédente pour créer des conditions plus complexes. Par exemple:
    </p>
    <CodeBlock language="python">
        {ifComplex}
    </CodeBlock>
    <p>
        Dans cet exemple, nous vérifions si le nombre entré par l&apos;utilisateur est à la fois positif et pair. Si c&apos;est le cas, nous affichons un message à l&apos;utilisateur. Sinon, le bloc de code indenté après le <IC>if</IC> est simplement ignoré et le programme passe à l&apos;instruction suivante.
    </p>
    </>;
}
