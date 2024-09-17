import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Concepts avancés",
    description: "Explication des conditions imbriquées, de l'opérateur ternaire et du switch.",
    keywords: ["condition", "conditions", "conditionnelles", "imbriquées", "ternaires", "switch", "imbriqué", "elif", "else", "if", "match"],
    group: "notes",
}

const ifImbrique =
`if condition1:
    if condition2:
        bloc de code 1
    else:
        bloc de code 2
else:
    bloc de code 3
`;

const ifImbriqueExemple =
`discount = 0
if is_member:
    discount = 10
else:
    if promo_code:
        discount = 5
    else:
        if purchase_value > 100:
            discount = 3

print(f"Le client a un tarif réduit de {discount}%")
`;

const ternaire =
`variable = valeur1 if condition else valeur2
`;

const ternaireIf =
`if condition:
    variable = valeur1
else:
    variable = valeur2
`;

const match =
`match valeur:
    case valeur1:
        bloc de code 1
    case valeur2:
        bloc de code 2
    case valeur3:
        bloc de code 3
    case _:
        bloc de code 4
`;

export default function Page() {
    return <>
    <h2>Conditions imbriquées</h2>
    <p>
        Les conditions peuvent être imbriquées les unes dans les autres. Par exemple:
    </p>
    <CodeBlock language="python">
        {ifImbrique}
    </CodeBlock>
    <p>
        Ces conditions peuvent être très utiles pour résoudre des problèmes complexes. Voici un exemple avec la vie réelle
    </p>
    <ul>
        <li>Si le client est membre, il a un tarif réduit de 10%</li>
        <li>Si le client n&apos;est pas membre, mais a un code promo, il a un tarif réduit de 5%</li>
        <li>Si le client n&apos;est pas membre et n&apos;a pas de code promo, mais il a une valeur d&apos;achat supérieure à 100$, il a un tarif réduit de 3%</li>
        <li>Si aucune de ces conditions n&apos;est remplie, le client paye le prix normal</li>
    </ul>
    <p>
        Ce problème peut être résolu avec une structure conditionnelle imbriquée, comme ceci:
    </p>
    <CodeBlock language="python">
        {ifImbriqueExemple}
    </CodeBlock>
    <p>
        Il est possible d&apos;imbriquer des conditions indéfiniment, mais il est conseillé de ne pas en faire un usage abusif, car cela rend le code plus difficile à lire et à maintenir. Typiquement, on essaie d&apos;utiliser jusqu&apos;à 2 ou 3 niveaux d&apos;imbrication maximum.
    </p>

    <h2>Opérateur ternaire</h2>
    <p>
       L&apos;opérateur ternaire est une forme condensée de la structure conditionnelle <IC>if</IC>. Il est souvent utilisé pour affecter une valeur à une variable en fonction d&apos;une condition. Par exemple: 
    </p>
    <CodeBlock language="python">
        {ternaire}
    </CodeBlock>
    <p>
        Dans cet exemple, si la condition est vraie, la variable prend la valeur <IC>valeur1</IC>, sinon elle prend la valeur <IC>valeur2</IC>. Bien que cet opérateur est pratique, il est a noter que l&apos;on peut faire la même chose avec une structure conditionnelle <IC>if</IC> et <IC>else</IC> de cette manière:
    </p>
    <CodeBlock language="python">
        {ternaireIf}
    </CodeBlock>

    <h2>Switch</h2>
    <p>
        Depuis Python 3.10, il est possible d&apos;utiliser une structure conditionnelle <IC>match</IC> qui est similaire à la structure <IC>switch</IC> que l&apos;on retrouve dans d&apos;autres langages de programmation. Cette structure permet de comparer une valeur à une liste de valeurs et d&apos;exécuter un bloc de code en fonction de la valeur. Voici un exemple:
    </p>
    <CodeBlock language="python">
        {match}
    </CodeBlock>
    <p>
        Dans cet exemple, la valeur est comparée à <IC>valeur1</IC>, <IC>valeur2</IC>, <IC>valeur3</IC> et <IC>_</IC>. Si la valeur est égale à <IC>valeur1</IC>, le bloc de code 1 est exécuté. Si la valeur est égale à <IC>valeur2</IC>, le bloc de code 2 est exécuté et ainsi de suite. Si aucune des valeurs n&apos;est égale à la valeur, le bloc de code 4 est exécuté. Encore une fois, cette fonctionalité pourrait être faite avec une structure conditionnelle <IC>if</IC> et <IC>elif</IC>, mais le <IC>match</IC> rend le code plus lisible lorsque l&apos;on a un nombre important de conditions à vérifier.
    </p>
    </>;
}
