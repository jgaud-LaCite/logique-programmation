import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Messages d'erreur",
    description: "Analyse des messages d'erreur et des erreurs de syntaxe en Python.",
    keywords: ["messages d'erreur", "erreurs", "syntaxe", "Python"],
    group: "notes",
}

export const syntaxError =
`a = 5
b = 10
print(a + b
`;

export const runtimeError =
`a = 5
b = 0
print(a / b)
`;

export const logicError =
`def calculate_sum(a, b):
    return a - b

result = calculate_sum(5, 3)
print(result) # Imprime: 2
`;

export default function Page() {
    return <>
    <p>
        Nous avons déjà brièvement parler des erreurs lors du Module 1, cependant nous avons seulement parler d&apos;un type d&apos;erreur. Dans cette section, nous allons voir les trois principaux types d&apos;erreurs que vous pouvez rencontrer en Python.
    </p>

    <section>
        <h2>Erreurs de syntaxe</h2>
        <p>
            C&apos;est celles que nous avons déjà discuté, ce sont des erreurs reliées à une mauvaise écriture du code. Ce sont généralement les erreurs les plus faciler à corriger, car Python vous indique exactement où se trouve l&apos;erreur. Voici un exemple d&apos;erreur de syntaxe:
        </p>
        <CodeBlock language="python">
            {syntaxError}
        </CodeBlock>
        <p>
            Lorsque vous exécutez ce code, vous obtiendrez une erreur de syntaxe indiquant que Python attendait une parenthèse fermante à la fin de la ligne 3.
        </p>
    </section>
        
    <section>
        <h2>Erreurs d&apos;exécution</h2>
        <p>
            Les erreurs d&apos;exécution se produisent lorsqu&apos;un programme est en cours d&apos;exécution. Ces erreurs peuvent être causées par une mauvaise logique dans le code, des erreurs de typage, des erreurs de division par zéro, etc. Voici un exemple d&apos;erreur d&apos;exécution:
        </p>
        <CodeBlock language="python">
            {runtimeError}
        </CodeBlock>
        <p>
            Lorsque vous exécutez ce code, vous obtiendrez une erreur d&apos;exécution indiquant une division par zéro. Cela se produit lorsque vous essayez de diviser un nombre par zéro, ce qui est mathématiquement impossible. Il existe de nombreux types d&apos;erreurs d&apos;exécution, et elles peuvent être plus difficiles à déboguer que les erreurs de syntaxe.
        </p>
    </section>

    <section>
        <h2>Erreurs de logique</h2>
        <p>
            Les erreurs de logique sont des erreurs qui se produisent lorsque le programme ne fonctionne pas comme prévu en raison d&apos;une mauvaise logique dans le code. Ces erreurs peuvent être difficiles à détecter, car le programme s&apos;exécute sans générer d&apos;erreurs, mais les résultats ne sont pas corrects. Voici un exemple d&apos;erreur de logique:
        </p>
        <CodeBlock language="python">
            {logicError}
        </CodeBlock>
        <p>
            Lorsque vous exécutez ce code, vous obtiendrez un résultat de 2, alors que vous vous attendiez à obtenir un résultat de 8. Cela est dû à une erreur de logique dans la fonction <IC>calculate_sum</IC>, qui soustrait <IC>b</IC> de <IC>a</IC> au lieu d&apos;additionner les deux nombres. L&apos;erreur est facile à voir dans cet exemple, mais dans un programme plus complexe, les erreurs de logique peuvent être difficiles à détecter.
        </p>
    </section>
    </>;
}
