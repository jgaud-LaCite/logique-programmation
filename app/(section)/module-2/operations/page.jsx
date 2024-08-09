import IC from "@/components/InlineCode";
import ColoredBox from "@/components/ColoredBox";
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Opérations",
    description: "Introduction aux différentes opérations sur les variables en Python.",
    keywords: ["opérateur", "opération", "variable"],
    group: "notes",
}

export const inc_dec = `a = 5
a += 2  # Même chose que: a = a + 2
print(a)  # 7

a -= 3  # Même chose que: a = a - 3
print(a)  # 4
`;

export default function Page() {
    return <>
        <section>
            <h2>Opérations sur les nombres</h2>
            <p>
                Il existe 7 opérateurs mathématiques principaux en Python que nous pouvons utiliser Pour effectuer des opérations sur les nombres. Ces opérateurs sont les suivants:
            </p>
            <ul>
                <li><IC>+</IC> pour l&apos;addition</li>
                <li><IC>-</IC> pour la soustraction</li>
                <li><IC>*</IC> pour la multiplication</li>
                <li><IC>**</IC> pour l&apos;exposant</li>
                <li><IC>/</IC> pour la division</li>
                <li><IC>//</IC> pour la division entière</li>
                <li><IC>%</IC> pour le modulo (reste de la division entière)</li>
            </ul>
            <p>
                Ces opérateurs suivent les règles mathématiques de base ainsi que l&apos;ordre des opérations (PEMDAS).
                Parenthèses, Exposants, Multiplication et Division, Addition et Soustraction. Vous pouvez donc utiliser des parenthèses pour changer l&apos;ordre des opérations.
            </p>

            <ColoredBox title="Attention">
                Ces opérateurs sont des opérateurs mathématiques pour les entiers ou nombres à virgule flottante. Ils ne fonctionnent pas de la même manière 
                sur les chaînes de caractères ou les booléens. Nous avons déjà vu l&apos;opérateur <IC>+</IC> pour la concaténation des chaînes de caractères et nous 
                discuterons des opérateurs pour les booléens plus tard.
            </ColoredBox>
        </section>

        <section>
            <h2>Incrémentation et décrémentaiton</h2>
            <p>
                L&apos;incrémentation et la décrémentation sont des opérations courantes en programmation. L&apos;incrémentation consiste à augmenter la valeur d&apos;une variable
                d&apos;un certain nombre tandis que la décrémentation consiste à la diminuer. Bien qu&apos;il est possible de le faire en utilisant les opérateurs mathématiques
                de base, il existe des opérateurs spécifiques pour cela qui nous facilite la vie. 
                En Python, vous pouvez utiliser les opérateurs <IC>+=</IC> et <IC>-=</IC> pour effectuer ces opérations. Par exemple:
            </p>

            <CodeBlock language="python">
                {inc_dec}
            </CodeBlock>


        </section>
    </>;
}
