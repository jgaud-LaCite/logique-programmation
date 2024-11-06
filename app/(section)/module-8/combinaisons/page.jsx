import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Combinaisons de structures de données",
    description: "Combinaisons de structures de données en Python",
    keywords: ["combinaisons", "combinaison", "python", "data", "structure", "combinations"],
    group: "notes",
}

const listeEmployes = `employes = [
    "Alice",
    "Bob",
    "Charlie",
    "David"
]
`;

const listeEmployesDico = `employes = [
    {'nom': 'Alice', 'age': 20},
    {'nom': 'Bob', 'age': 25},
    {'nom': 'Charlie', 'age': 30},
    {'nom': 'David', 'age': 35}
]
`;

const dicoEmployes = `employes = {
    00001: {'nom': 'Alice', 'age': 20},
    00002: {'nom': 'Bob', 'age': 25},
    00003: {'nom': 'Charlie', 'age': 30},
    00004: {'nom': 'David', 'age': 35}
}
`;

export default function Page(){
    return <>
        <p>
            Tout comme nous avons vu avec les listes imbriqués (qui sont une liste de listes), il est possible de combiner différentes structures de données en Python même si ces structures sont de types différents. Par exemple:
        </p>
        <ul>
            <li>
                Une liste de dictionnaires <IC>{`[{'nom': 'Alice', 'age': 20}, {'nom': 'Bob', 'age': 25}]`}</IC>
            </li>
            <li>
                Un dictionnaire de listes <IC>{`{'noms': ['Alice', 'Bob'], 'ages': [20, 25]}`}</IC>
            </li>
            <li>
                Une liste de tuples <IC>{`[('Alice', 20), ('Bob', 25)]`}</IC>
            </li>
            <li>
                Un tuple de listes <IC>{`(['Alice', 'Bob'], [20, 25])`}</IC>
            </li>
        </ul>

        <p>
            Les combinaisons de structures de données peuvent être utiles pour stocker des données de manière plus structurée. Bien que cela puisse rendre le code plus complexe, cela peut également rendre le code plus lisible et plus facile à comprendre.
        </p>

        <h2>Exemple: Liste d'employées</h2>
        <p>
            Imaginons que nous voulons stocker des informations sur les employées d'une entreprise. Nous pourrions utiliser une liste pour stocker leur nom, par exemple:
        </p>
        <CodeBlock language="python">
            {listeEmployes}
        </CodeBlock>

        <p>
            Cependant, si nous voulons stocker plus d'informations sur chaque employée, comme leur âge, leur département, etc., il serait plus logique d'utiliser une liste de dictionnaires, par exemple:
        </p>
        <CodeBlock language="python">
            {listeEmployesDico}
        </CodeBlock>

        <p>
            Une autre alternative, si nous voulons accéder à chaque employé par un identifiant unique, par exemple leur numéro d'employé, serait d'utiliser un dictionnaire de dictionnaires:
        </p>
        <CodeBlock language="python">
            {dicoEmployes}
        </CodeBlock>
        <p>
            Dans cet exemple, chaque employé est identifié par un numéro unique (par exemple, 00001, 00002, etc.) et les informations sur chaque employé sont stockées dans un dictionnaire. Nous pouvons donc accéder à chaque employé en utilisant son numéro d'employé comme clé: <IC>{`employes[00001]`}</IC>.
        </p>
    </>
}