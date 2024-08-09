import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Types de variables",
    description: "Introduction aux types des variables.",
    keywords: ["types", "variable", "int", "float", "string", "boolean"],
    group: "notes",
}

export const int_to_str_error = `nb = 42
print("Le nombre est: " + nb);
`;

export const int_to_str = `nb = 42
print("Le nombre est: " + str(nb));
`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Le type de données est une façon de classifier les variables en fonction du type de données qu&apos;elles contiennent. 
                En Python, les types de données primitifs (les plus simples) sont:
            </p>
            <ol>
                <li>les entiers (Integers)</li>
                <li>les nombres à virgule flottante (Floats)</li>
                <li>les chaînes de caractères (Strings)</li>
                <li>les booléens (Booleans)</li> 
            </ol>
            <p>
                En python, vous n&apos;avez pas besoin de déclarer explicitement le type de données d&apos;une variable. Les types de données sont déterminés dynamiquement lors de l&apos;exécution du programme.
                lorsque vous affectez une valeur à une variable. Pour connaître le type d&apos;une variable, vous pouvez utiliser la fonction <IC>type()</IC>. De plus,
                le type d&apos;une variable peut changer au cours de l&apos;exécution du programme dépendamment de la valeur que vous lui affectez. Ceci contraste
                d&apos;autres langages de programmation comme Java ou C++ où vous devez déclarer le type de données d&apos;une variable avant de l&apos;utiliser et elle
                ne peut pas changer.
            </p>
        </section>

        <section>
            <h2>Nombres</h2>
            <h3>Entiers (Integers)</h3>
            <p>
                Les entiers sont des nombres entiers positifs ou négatifs sans partie décimale. Par exemple: <IC>nb = 42</IC>, <IC>nb = -10</IC>.
            </p>
            <h3>Nombres à virgule flottante (Floats)</h3>
            <p>
                Les nombres à virgule flottante sont des nombres avec une partie décimale. Par exemple: <IC>nb = 3.14</IC>, <IC>nb = -0.5</IC>, 
                <IC>nb = 3.0</IC>.
            </p>
        </section>

        <section>
            <h2>Chaînes de caractères</h2>
            <p>
                Les chaînes de caractères sont des séquences de caractères. Comme nous avons vu précedemment, 
                elles sont délimitées par des guillemets simples <IC>&apos;</IC> ou doubles <IC>&quot;</IC>. Par exemple: <IC>name = &apos;Alice&apos;</IC>, <IC>name = &quot;Bob&quot;</IC>.
            </p>
            <ColoredBox title="Attention">
                Si vous indiquer une variable contenant un nombre entre guillements, Python la traitera comme une chaîne de caractères et non un nombre. <IC>nb = &quot;42&quot;</IC> est
                une chaîne de caractères et non un entier.
            </ColoredBox>
        </section>

        <section>
            <h2>Booléens</h2>
            <p>
                Les booléens sont des valeurs qui peuvent être <IC>True</IC> (vrai) ou <IC>False</IC> (faux). Ils sont souvent utilisés pour des conditions
                dans les structures de contrôle. Par exemple: <IC>is_raining = True</IC>, <IC>is_sunny = False</IC>.
                Lorsque nous verrons les structures conditionnelles, ce type de variable nous sera très utile.
            </p>
        </section>

        <section>
            <h2>Conversion de type</h2>
            <p>
                Parfois, vous voudrez convertir un type de données en un autre. Par exemple, convertir un entier en un nombre à virgule flottante ou vice-versa.
                Pour cela, vous pouvez utiliser les fonctions <IC>int()</IC>, <IC>float()</IC>, <IC>str()</IC> pour convertir un type en un autre. Par exemple:
            </p>

            <CodeBlock language="python">
                {int_to_str_error}
            </CodeBlock>

            <p>
                Le code ci-dessus générera une erreur car nous essayons de concaténer un entier avec une chaîne de caractères. Pour résoudre ce problème, nous devons
                convertir l&apos;entier en une chaîne de caractères en utilisant la fonction <IC>str()</IC>. Par exemple:
            </p>

            <CodeBlock language="python">
                {int_to_str}
            </CodeBlock>
        </section>
    </>;
}
