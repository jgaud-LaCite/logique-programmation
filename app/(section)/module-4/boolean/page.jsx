import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Expressions booléennes",
    description: "Explication des booléens et des expressions booléennes en Python.",
    keywords: ["booléen", "booléens", "expression", "expressions", "booléenne", "booléennes", "<", ">", "<=", ">=", "==", "!=", "and", "or", "not"],
    group: "notes",
}

export default function Page() {
    return <>
    <p>
        Nous avons déjà discuté des booléens qui peuvent stocker deux valeurs: <IC>True</IC> et <IC>False</IC>. Ces valeurs sont très utiles pour les conditions, car elles permettent de déterminer si une condition est vraie ou fausse. Elles peuvent même être combinées pour former ce qu&apos;on appelle des <strong>expressions booléennes</strong>. Une expression booléenne est une expression qui peut être évaluée comme vraie ou fausse, contrairement aux expressions arithmétiques qui sont évaluées comme des nombres.
    </p>

    <h2>Opérateurs de comparaison</h2>
    <p>
        Les opérateurs de comparaison sont utilisés pour comparer deux valeurs. Voici les opérateurs de comparaison en Python:
    </p>
    <ul>
        <li><IC>&lt;</IC>: inférieur à</li>
        <li><IC>&gt;</IC>: supérieur à</li>
        <li><IC>&lt;=</IC>: inférieur ou égal à</li>
        <li><IC>&gt;=</IC>: supérieur ou égal à</li>
        <li><IC>==</IC>: égal à</li>
        <li><IC>!=</IC>: différent de</li>
    </ul>
    <ColoredBox title="Attention">
        L&apos;égalité est représentée par <IC>==</IC> et non par <IC>=</IC>. <IC>=</IC> est utilisé pour l&apos;affectation de variables. C&apos;est une erreur courante pour les débutants de confondre les deux et cela peut entraîner des erreurs difficiles à déboguer.
    </ColoredBox>

    <p>
        Voici quelques exemples d&apos;expressions booléennes utilisant ces opérateurs:
    </p>

    <ul>
        <li><IC>12 &lt; 24</IC> retourne <IC>True</IC>.</li>
        <li><IC>12 &gt; 24</IC> retourne <IC>False</IC>.</li>
        <li><IC>12 == 24</IC> retourne <IC>False</IC>.</li>
        <li><IC>12 != 24</IC> retourne <IC>True</IC>.</li>
        <li><IC>12 == &apos;12&apos;</IC> retourne <IC>False</IC>.</li>
    </ul>

    <h2>Opérateurs logiques</h2>
    <p>
        Les opérateurs logiques sont utilisés pour combiner plusieurs expressions booléennes ensemble. Les opérateurs logiques en Python sont:
    </p>
    <ul>
        <li><IC>and</IC>: retourne <IC>True</IC> si les deux expressions sont vraies (et).</li>
        <li><IC>or</IC>: retourne <IC>True</IC> si au moins une des expressions est vraie (ou).</li>
        <li><IC>not</IC>: retourne l&apos;inverse de l&apos;expression (non).</li>
    </ul>
    <p>
        Vous pouvez combiner ces opérateurs autant de fois que vous le souhaitez pour former des expressions booléennes plus complexes. Ils peuvent sembler compliqués au début, mais avec un peu de pratique, vous serez en mesure de les utiliser facilement. Une bonne pratique est de simplement lire l&apos;expression comme vous le feriez avec une phrase en français. Par exemple, <IC>(a &gt; b) and (b &gt; c)</IC> peut être lu comme &quot;a est supérieur à b <strong>et</strong> b est supérieur à c&quot;. Ici les parenthèses ne sont pas nécessaires, mais elles peuvent rendre l&apos;expression plus facile à lire.
    </p>

    </>;
}
