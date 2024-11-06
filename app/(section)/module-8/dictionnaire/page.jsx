import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Les dictionnaires",
    description: "Introduction aux dictionnaires en Python",
    keywords: ["dictionnaires", "dictionnaire", "python", "data", "structure"],
    group: "notes",
}

const dictionnaire = `dictionnaire = {
    "nom": "John",
    "age": 30,
    "ville": "New York"
}

# On peut même avoir des types de données différents
dictionnaire2 = {
    5: "cinq",
    "six": 6
}
`;

const dictionnaireAcces = `dictionnaire = {
    "nom": "John",
    "age": 30,
    "ville": "New York"
}

# Accéder aux éléments d'un dictionnaire
print(dictionnaire["nom"]) # John
print(dictionnaire["age"]) # 30

# Ajouter un élément
dictionnaire["email"] = "john@courriel.com"

# Modifier un élément
dictionnaire["age"] = 31
`;

const dictionnaireSuppression = `dictionnaire = {
    "nom": "John",
    "age": 30,
    "ville": "New York"
}

# Supprimer un élément
del dictionnaire["ville"]

print(dictionnaire) # {'nom': 'John', 'age': 30}
`;

const dictionnaireMembership = `dictionnaire = {
    "nom": "John",
    "age": 30,
    "ville": "New York"
}

# Vérifier si une clé est présente
print("nom" in dictionnaire) # True
print("email" in dictionnaire) # False
`;

const dictionnaireIteration = `dictionnaire = {
    "nom": "John",
    "age": 30,
    "ville": "New York"
}

# Itérer sur les clés
for cle in dictionnaire:
    print(cle) # Impression de la clé
    print(dictionnaire[cle]) # Impression de la valeur

# Itérer sur les valeurs
for valeur in dictionnaire.values():
    print(valeur)

# Itérer sur les clés et les valeurs
for cle, valeur in dictionnaire.items():
    print(cle, valeur)
`;

export default function Page(){
    return <>
        <p>
            Les dictionnaires sont une autre structure de données intégrée en Python qui font parties des structures de données essentielles en Python. Les dictionnaires sont des collections non ordonnées de paires clé-valeur, ils sont utilisés pour stocker des données en pairs. Les clés sont uniques et les valeurs peuvent être n'importe quel objet Python. En bref:
        </p>
        <ul>
            <li>Les dictionnaires ne sont pas non ordonnées, on ne peut pas assumer que les éléments seront dans un ordre particulier.</li>
            <li>Les clés sont uniques.</li>
            <li>Les clés peuvent seulement être des objets immuables comme des chaînes, des nombres ou des tuples.</li>
            <li>Les valeurs peuvent être n'importe quel objet Python.</li>
        </ul>
        <p>
            Voici un exemple de la structure d'un dictionnaire:
        </p>
        <CodeBlock language="python" >
            {dictionnaire}
        </CodeBlock>

        <h2>Accéder, modifier et ajouter des éléments à un dictionnaire</h2>
        <p>
            Une clé d'un dictionnaire ne peut pas être modifiée, mais on peut ajouter de nouvelles paires clé-valeur ou modifier les valeurs existantes. Pour accéder à une valeur dans un dictionnaire, on utilise la clé correspondante avec les crochets <IC>[]</IC>:
        </p>

        <CodeBlock language="python">
            {dictionnaireAcces}
        </CodeBlock>

        <h2>Supprimer des éléments d'un dictionnaire</h2>
        <p>
            Pour supprimer une paire clé-valeur d'un dictionnaire, on utilise la méthode <IC>del</IC> en utilisant encore une fois la clé correspondante:
        </p>
        <CodeBlock language="python">
            {dictionnaireSuppression}
        </CodeBlock>

        <h2>Vérifier si une clé est présente dans un dictionnaire</h2>
        <p>
            On peut vérifier si une clé est présente dans un dictionnaire en utilisant l'opérateur <IC>in</IC>:
        </p>
        <CodeBlock language="python">
            {dictionnaireMembership}
        </CodeBlock>

        <h2>Itérer sur un dictionnaire</h2>
        <p>
            On peut également itérer par-dessus un dictionnaire en utilisant une boucle <IC>for</IC> afin de parcourir les clés, les valeurs, ou les deux. Il faut bien noté cependant que l'ordre dans lequel les éléments sont parcourus n'est pas garanti comme discuté précédemment, si l'ordre est important, il faut utiliser un autre type de structure de données tel que les listes.
        </p>
        <CodeBlock language="python">
            {dictionnaireIteration}
        </CodeBlock>
    </>
}