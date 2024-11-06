import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Les ensembles",
    description: "Introduction aux ensembles en Python",
    keywords: ["ensembles", "ensemble", "python", "data", "structure", "sets"],
    group: "notes",
}

const createSet = `# Créer un ensemble vide
s = {} # ou bien: s = set()
print(s) # set()

# Créer un ensemble avec des éléments
s = {1, 2, 3} # ou bien s = set([1, 2, 3])
print(s) # {1, 2, 3}

# On ne peut pas avoir deux éléments identiques dans un ensemble
s = {1, 2, 2, 3, 3, 3}
print(s) # {1, 2, 3}
`;

const addRemove = `s = {1, 2, 3}
s.add(4)
print(s) # {1, 2, 3, 4}

s.remove(2)
print(s) # {1, 3, 4}
`;

const membership = `s = {1, 2, 3}
print(1 in s) # True
print(4 in s) # False
`;

const iteration = `s = {1, 2, 3}
for element in s:
    print(element)
`;

export default function Page(){
    return <>
        <p>
            Les ensembles, avec les listes, les tuples et les dictionnaires, sont le dernier type de structure de données intégré en Python que nous verrons dans ce chapitre. Les ensembles sont des collections non ordonnées d'éléments <strong>uniques</strong>. C'est-à-dire qu'un ensemble ne peut pas contenir deux éléments identiques. Les ensembles sont utilisés pour stocker des éléments sans ordre particulier. On ne peut pas accéder à un élément d'un ensemble par son index, car les ensembles ne sont pas ordonnés.
        </p>

        <h2>Création d'ensembles</h2>
        <p>
            Pour créer un ensemble, vous pouvez utiliser la fonction <IC>set()</IC> ou les accolades <IC>{'{}'}</IC>. Par exemple:
        </p>
        <CodeBlock language="python">
            {createSet}
        </CodeBlock>

        <h2>Ajout et suppression d'éléments à un ensemble</h2>
        <p>
            Pour ajouter un élément à un ensemble, on utilise la méthode <IC>add()</IC>, tandis que pour supprimer un élément, on utilise la méthode <IC>remove()</IC>. Par exemple:
        </p>
        <CodeBlock language="python">
            {addRemove}
        </CodeBlock>

        <h2>Vérifier si un élément est présent dans un ensemble</h2>
        <p>
            On peut vérifier si un élément est présent dans un ensemble en utilisant l'opérateur <IC>in</IC>:
        </p>
        <CodeBlock language="python">
            {membership}
        </CodeBlock>

        <h2>Itérer sur un ensemble</h2>
        <p>
            Pour itérer sur un ensemble, vous pouvez utiliser une boucle <IC>for</IC> similairement à une liste. Cependant, comme les ensembles ne sont pas ordonnés, l'ordre dans lequel les éléments sont parcourus n'est pas garanti. Voici un exemple:
        </p>
        <CodeBlock language="python">
            {iteration}
        </CodeBlock>
    </>
}