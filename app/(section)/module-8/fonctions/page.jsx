import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fonctions",
    description: "Notions de base sur les fonctions en Python.",
    keywords: ["fonctions", "python", "def", "fonction"],
    group: "notes",
}

const definition =
`def print_welcome():
    print("Bonjour d'une fonction")
`;

const definition_call =
`def print_welcome():
    print("Bonjour d'une fonction")
    print("Ce code est toujours à l'intérieur de la fonction")

print_welcome() # Imprime: "Bonjour d'une fonction"
`

const function_with_argument =
`def print_name(name):
    print("Bonjour " + name)

print_name("Alice") # Imprime: "Bonjour Alice"
`

const function_with_return =
`def add(a, b):
    return a + b

result = add(3, 5)
print(result) # Imprime: 8
`

export default function Page() {
    return <>
        <p>
            Les fonctions sont l&apos;une des fonctionnalités les plus importantes de la programmation. Une fonction est un bloc de code qui est exécuté lorsqu&apos;elle est appelée. Les fonctions sont utilisées pour diviser
            le code en blocs plus petits et plus gérables. Cela rend le code plus lisible et plus facile à maintenir. Jusqu&apos;à présent, nous avons utilisé d&apos;autres fonctions intégrées à Python comme
            la fonction <IC>print()</IC>. Dans cette section, nous allons apprendre à créer nos propres fonctions en Python. Une façon de penser aux fonctions est de les considérer comme des variables,
            mais au lieu de stocker une valeur, elles stockent un bloc de code qui peut être réutilisé.
        </p>
        
        <section>
            <h2>Définition d&apos;une fonction</h2>
            <p>
                En Python, une fonction est définie à l&apos;aide du mot-clé <IC>def</IC> suivi du nom de la fonction et de parenthèses. Voici un exemple de définition d&apos;une fonction simple en Python:
            </p>

            <CodeBlock language="python">
                {definition}
            </CodeBlock>

            <p>
                Pour nommer vos fonctions, vous devez suivre les mêmes règles que pour nommer des variables. Le nom de la fonction doit commencer par une lettre ou un souligné et ne doit pas contenir d&apos;espaces ou de caractères spéciaux.
                Il est préférable d&apos;utiliser un nom descriptif d&apos;action pour votre fonction. Vous remarquerez également que le code après la définition de la fonction est indenté. L&apos;indentation est très importante en Python
                car elle définie quelles lignes de code font partie de la fonction. Dans d&apos;autres languages, les accolades <IC>&#123;&#125;</IC> sont utilisé pour définir les blocs de code.
            </p>

            <p>
                Pour appeler notre fonction, il suffit de faire comme nous avons déjà vu, en utilisant le nom de la fonction suivi de parenthèses:
            </p>

            <CodeBlock language="python">
                {definition_call}
            </CodeBlock>

            <p>
                Lorsque vous appelez une fonction, le code à l&apos;intérieur de la fonction est exécuté. Dans cet exemple, la fonction <IC>print_welcome()</IC> imprime le message <IC>Bonjour d&apos;une fonction</IC> à l&apos;écran.
                Vous pouvez appeler une fonction autant de fois que vous le souhaitez dans votre code. La fonction est exécutée à l&apos;endroit où elle est appelée. Il est important de noter que si vous n&apos;appelez pas la fonction,
                le code à l&apos;intérieur de la fonction ne sera jamais exécuté.
            </p>
        </section>

        <section>
            <h2>Arguments et retour</h2>
            <h3>Arguments</h3>
            <p>
                Comme la fonction <IC>print()</IC>, les fonctions peuvent également prendre des arguments. Les arguments sont des valeurs que vous pouvez passer à une fonction pour qu&apos;elle les utilise. Les arguments sont placés entre les parenthèses lors de la définition de la fonction. 
                Les arguments sont placés entre les parenthèses lors de la définition de la fonction. Voici un exemple de fonction qui prend un argument:
            </p>
            <CodeBlock language="python">
                {function_with_argument}
            </CodeBlock>
            <p>
                Dans cet exemple, la fonction <IC>print_name()</IC> prend un argument appelé <IC>name</IC>. Lorsque vous appelez la fonction
                <IC>print_name(&quot;Alice&quot;)</IC>, la valeur <IC>&quot;Alice&quot;</IC> est passée à la fonction et stockée dans la variable <IC>name</IC>. La fonction imprime ensuite <IC>Bonjour Alice</IC>.
            </p>

            <h3>Retour</h3>
            <p>
                Les fonctions peuvent également retourner des valeurs. Pour retourner une valeur à partir d&apos;une fonction, vous pouvez utiliser le mot-clé <IC>return</IC>.
                Par exemple, la fonction suivante nous permet de calculer la somme de deux nombres et de retourner le résultat:
            </p>
            <CodeBlock language="python">
                {function_with_return}
            </CodeBlock>
            <p>
                Dans cet exemple, la fonction <IC>add()</IC> prend deux arguments <IC>a</IC> et <IC>b</IC>, les ajoute ensemble et retourne le résultat. Lorsque vous appelez la fonction <IC>add(3, 5)</IC>, elle retourne la valeur <IC>8</IC>.
                Vous pouvez stocker la valeur retournée dans une variable et l&apos;utiliser plus tard dans votre code.
            </p>

        </section>
    </>;
}
