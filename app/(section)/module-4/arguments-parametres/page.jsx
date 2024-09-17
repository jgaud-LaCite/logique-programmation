import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Arguments et paramètres",
    description: "Arguments et paramètres dans une fonction en Python.",
    keywords: ["arguments", "paramètres", "fonctions", "python", "def", "défaut"],
    group: "notes",
}

const function_with_argument =
`def print_name(name):
    print("Bonjour " + name)

print_name("Alice") # Imprime: "Bonjour Alice"
`

const function_with_multiple_parameters =
`def print_full_name(first_name, last_name):
    print("Bonjour " + first_name + " " + last_name)

print_full_name("Alice", "Smith") # Imprime: "Bonjour Alice Smith"
`

const function_with_named_arguments =
`
print_full_name(last_name="Smith", first_name="Alice") # Imprime: "Bonjour Alice Smith"
`

const function_with_default_value =
`def print_name(name="Alice"):
    print("Bonjour " + name)

print_name() # Imprime: "Bonjour Alice"
print_name("Bob") # Imprime: "Bonjour Bob"
`

export default function Page() {
    return <>
        <section>
            <p>
                Bien que les deux termes soient souvent utilisés de manière interchangeable, il existe une différence subtile entre les arguments et les paramètres dans une fonction. Les paramètres sont les noms que vous spécifiez dans la définition d&apos;une fonction, tandis que les arguments sont les valeurs que vous passez à une fonction lors de son appel.
            </p>

            <p>
                Comme la fonction <IC>print()</IC>, les fonctions peuvent prendre des arguments afin de personnaliser leur comportement. Les arguments sont des valeurs que vous pouvez passer à une fonction pour qu&apos;elle les utilise. Les arguments sont placés entre les parenthèses lors de la définition de la fonction. Voici un exemple de fonction qui prend un argument:
            </p>
            <CodeBlock language="python">
                {function_with_argument}
            </CodeBlock>
            <p>
                Dans cet exemple, la fonction <IC>print_name()</IC> prend un argument appelé <IC>name</IC>. Lorsque vous appelez la fonction
                <IC>print_name(&quot;Alice&quot;)</IC>, la valeur <IC>&quot;Alice&quot;</IC> est passée à la fonction et stockée dans la variable <IC>name</IC>. La fonction imprime ensuite <IC>Bonjour Alice</IC>.
            </p>

            <h2>Plusieurs arguments</h2>
            <p>
                En Python, vous pouvez définir des fonctions avec plusieurs paramètres en les séparant par des virgules. Voici un exemple de fonction qui prend deux paramètres:
            </p>
            <CodeBlock language="python">
                {function_with_multiple_parameters}
            </CodeBlock>

            <h3>
                Positionnement des arguments
            </h3>
            <p>
                Lorsque vous appelez une fonction avec plusieurs arguments, l&apos;ordre des arguments est important. Les arguments doivent être passés dans le même ordre que les paramètres de la fonction sont déclarés. Dans l'exemple ci-dessus, la fonction doit être appelée avec le prénom en premier et le nom de famille en second.
            </p>
            <p>
                Il existe une façon de passer des arguments à une fonction en utilisant le nom des paramètres. Cela vous permet de passer les arguments dans n&apos;importe quel ordre. Par exemple, avec la fonction <IC>print_full_name()</IC>, vous pouvez appeler la fonction de la manière suivante:
            </p>
            <CodeBlock language="python">
                {function_with_named_arguments}
            </CodeBlock>

            <h2>Valeurs par défaut</h2>
            <p>
                En Python, vous pouvez définir des valeurs par défaut pour les paramètres d&apos;une fonction. Cela signifie que si vous appelez la fonction sans passer d&apos;argument pour un paramètre donné, la valeur par défaut sera utilisée à la place. Voici un exemple de fonction avec une valeur par défaut:
            </p>

            <CodeBlock language="python">
                {function_with_default_value}
            </CodeBlock>
        </section>
    </>;
}
