import CodeBlock from "@/components/CodeBlock";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Lecture au clavier",
    description: "Introduction à la lecture au clavier à partir de la console",
    keywords: ["input", "lecture", "clavier", "console"],
    group: "notes",
}

export const keyboard_input =
`name = input("Quel est votre nom? ")
print("Bonjour " + name)
`;

export default function Page() {
    return <>
        <p>
            Nous avons vu précedemment comment afficher des données à l&apos;écran avec la fonction <IC>print</IC>, par contre, un programme
            consiste généralement d&apos;interactions avec l&apos;utilisateur. Pour cela, nous avons besoin de récupérer des données directement
            à partir de la console. C&apos;est ce que l&apos;on appelle la lecture au clavier.
        </p>
        <p>
            La lecture au clavier est une opération très courante en programmation. Elle permet de récupérer des données directement depuis 
            la console et vous permettra de faire des programmes plus interactifs. Bien que de nos jours, les entrées utilisateurs se font
            plus souvent via des interfaces graphiques, la lecture au clavier reste un outil très utile lorsque l&apos;on débute et le concept reste
            le même. En Python, elle se fait via la fonction <IC>input</IC>. Voici un exemple:
        </p>
        <CodeBlock language="python">
            {keyboard_input}
        </CodeBlock>
        <p>
            Dans cet exemple, nous demandons à l&apos;utilisateur de saisir son nom à partir de la console. La fonction <IC>input</IC> prend un argument
            qui est le message à afficher à l&apos;utilisateur. Lorsque l&apos;utilisateur saisit son nom et appuie sur la touche <kbd>Entrée</kbd>, la fonction
            <IC>input</IC> retourne la valeur saisie. Nous stockons cette valeur dans la variable <IC>name</IC> et l&apos;affichons ensuite à l&apos;écran.
            L&apos;argument entre les parenthèses de la fonction <IC>input</IC> est affiché à l&apos;utilisateur pour lui indiquer ce qu&apos;il doit saisir et 
            est optionnel, si vous ne le spécifiez pas, la fonction attendra simplement l&apos;entrée de l&apos;utilisateur.
        </p>
    </>;
}
