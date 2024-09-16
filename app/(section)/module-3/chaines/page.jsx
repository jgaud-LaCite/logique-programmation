import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Chaînes de caractères",
    description: "Opérations sur les chaînes de caractères",
    keywords: ["chaînes", "caractères", "opérations", "string", "str"],
    group: "notes",
}

const concat =
`a = "Hello"
b = "World"
c = a + b
print(c) # Imprime: "HelloWorld"
`;

const indexing =
`a = "Hello"
print(a[0]) # Imprime: "H"
print(a[1]) # Imprime: "e"
print(a[2]) # Imprime: "l"
print(a[3]) # Imprime: "l"
print(a[4]) # Imprime: "o"
`;

const slicing =
`a = "Hello"
print(a[1:4]) # Imprime: "ell"
print(a[2:]) # Imprime: "llo"
print(a[:3]) # Imprime: "Hel"
`;

const methods =
`a = " hello"
print(a.strip()) # Imprime: "hello"
print(a.title()) # Imprime: " Hello"
print(a.lower()) # Imprime: " hello"
print(a.upper()) # Imprime: " HELLO"

# On peut combiner les méthodes
print(a.strip().title()) # Imprime: "Hello"

b = "elle"
print(b.replace("e", "o")) # Imprime: "ollo"
`;

export default function Page() {
    return <>
        <p>
            Nous avons déjà parler des chaînes de caractères dans les sections précédentes. Les chaînes de caractères sont des séquences de caractères qui sont utilisées pour représenter du texte et en Python,
            elles sont contenues dans des guillemets simples ou doubles. Par exemple, <IC>&quot;Bonjour&quot;</IC> et <IC>&apos;Bonjour&apos;</IC> sont des chaînes de caractères valides en Python. Il y a cependant
            beaucoup plus de choses que vous pouvez faire avec les chaînes de caractères en Python. Dans cette section, nous allons voir quelques opérations que vous pouvez effectuer sur les chaînes de caractères.
        </p>
        
        <section>
            <h2>Opérateurs</h2>
            <p>
                En Python, vous pouvez utiliser les opérateurs <IC>+</IC> et <IC>*</IC> pour effectuer des opérations sur les chaînes de caractères.
            </p>
            <h3>Concaténation</h3>
            <p>
                La concaténation est l&apos;action de joindre deux chaînes de caractères ensemble. Vous pouvez utiliser l&apos;opérateur <IC>+</IC> pour joindre deux chaînes de caractères ensemble.
                Vous pouvez ensuite assigner le résultat à une nouvelle variable ou l&apos;afficher directement. Par exemple:
            </p>
            <CodeBlock language="python">
                {concat}
            </CodeBlock>
            <h3>Multiplication de chaînes des caractères</h3>
            <p>
                L&apos;opérateur <IC>*</IC> est le second opérateur mathématique que vous pouvez utiliser sur les chaînes de caractères. Vous pouvez l&apos;utiliser pour répéter une chaîne de caractères un certain nombre de fois.
                Par exemple, <IC>&quot;Hello &quot; * 3</IC> donnera <IC>&quot;Hello Hello Hello &quot;</IC>. Vous pouvez également assigner le résultat à une variable ou l&apos;afficher directement.
            </p>
        </section>

        <section>
            <h2>Indexation des chaînes de caractères</h2>
            <p>
                Les chaînes de caractères en Python sont indexées. Cela signifie que chaque caractère dans une chaîne de caractères a un index qui lui est associé. <strong>L&apos;indexation commence à 0.</strong> Par exemple, dans la chaîne de caractères <IC>&quot;Hello&quot;</IC>, 
                le caractère <IC>&quot;H&quot;</IC> a l&apos;index 0, le caractère <IC>&quot;e&quot;</IC> a l&apos;index 1, et ainsi de suite. Vous pouvez accéder à un caractère spécifique dans une chaîne de caractères
                en utilisant son index. Par exemple:
            </p>
            <CodeBlock language="python">
                {indexing}
            </CodeBlock>
            <p>
                En Python, il est également possible de commencer avec la fin plutôt que le début. Pour cela, vous pouvez utiliser des indices négatifs. Par exemple, l&apos;index -1 fait référence au dernier caractère de la chaîne de caractères, l&apos;index -2 fait référence
                à l&apos;avant-dernier caractère, et ainsi de suite. Par exemple, <IC>a[-1]</IC> donnera <IC>&quot;o&quot;</IC> pour la chaîne de caractères <IC>&quot;Hello&quot;</IC>.
            </p>
            <h3>Découpage de chaîne</h3>
            <p>
                En utilisant les index que l&apos;on vient de voir, il est possible de découper une chaîne de caractères en une sous-chaîne. Cela se fait en utilisant la notation <IC>[début:fin]</IC>.
                Si l&apos;on veut débuter à un index spécifique et aller jusqu&apos;à la fin, on peut omettre le deuxième index de cette manière <IC>[début:]</IC>.
                Similairement, si l&apos;on veut commencer au début et aller jusqu&apos;à un index spécifique, on peut omettre le premier index de cette manière <IC>[:fin]</IC>.
            </p>
            <CodeBlock language="python">
                {slicing}
            </CodeBlock>

            <ColoredBox title="Note">
                Lorsque nous discuterons des listes, nous verrons qu&apos;elles partagent beaucoup de similitudes avec les chaînes de caractères. Les listes sont également indexées et peuvent être découpées de la même manière.
            </ColoredBox>

        </section>

        <section>
            <h2>Méthodes des chaînes de caractères</h2>
            <p>
                Python fournit de nombreuses méthodes pour manipuler les chaînes de caractères. Voici quelques-unes des méthodes les plus couramment utilisées:
            </p>
            <ul>
                <li><IC>strip</IC>: Cette méthode est utilisée pour supprimer les espaces blancs au début et à la fin d&apos;une chaîne de caractères.</li>
                <li><IC>title</IC>: Cette méthode est utilisée pour mettre en majuscule la première lettre de chaque mot dans une chaîne de caractères.</li>
                <li><IC>lower</IC>: Cette méthode est utilisée pour mettre toute la chaîne de caractères en minuscules.</li>
                <li><IC>upper</IC>: Cette méthode est utilisée pour mettre toute la chaîne de caractères en majuscules.</li>
                <li><IC>replace</IC>: Cette méthode est utilisée pour remplacer une sous-chaîne par une autre sous-chaîne dans une chaîne de caractères. Elle prend deux arguments: la sous-chaîne à remplacer et la sous-chaîne de remplacement.</li>
            </ul>
            <p>
                Contrairement à la fonction <IC>print</IC> que nous avons vue précédemment, ces méthodes sont appelées sur une chaîne de caractères en utilisant la notation <IC>nom_de_variable.methode()</IC>.
                C&apos;est la principale différence entre les fonctions et les méthodes. Voici un exemple d&apos;utilisation de ces méthodes:
            </p>
            <CodeBlock language="python">
                {methods}
            </CodeBlock>
            <p>
                Il existe de nombreuses autres méthodes pour manipuler les chaînes de caractères en Python. Vous pouvez trouver la liste complète des méthodes de chaînes de caractères dans la <a href="https://docs.python.org/fr/3/library/stdtypes.html#string-methods" target="_blank" rel="noopener noreferrer">documentation officielle de Python</a>.
                Il est important de vous familiariser avec l&apos;usage de la documentation dès le début de votre apprentissage de Python, car elle contient des informations précieuses sur les fonctions et les méthodes que vous utiliserez.
                Il est impossible de vous montrez et de connaître toutes les méthodes disponibles, la documentation vous servira donc tout au long de votre carrière de programmeur.
            </p>
        </section>
    </>;
}
