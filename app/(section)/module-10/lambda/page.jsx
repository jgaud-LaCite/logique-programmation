import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Fonctions lambda, map et filter",
    description: "Utilisation des fonctions lambda, map et filter en Python",
    keywords: ["lambda", "map", "filter", "Python"],
    group: "notes",
}

const lambda = `# Définition d'une fonction lambda
square = lambda x: x ** 2
print(square(5)) # Imprime: 25`;

const lambdaAdd = `# Définition d'une fonction lambda avec plusieurs arguments
add = lambda x, y: x + y
print(add(5, 3)) # Imprime: 8`;

const mapCarre = `
def carre(x):
    return x ** 2

liste = [1, 2, 3, 4, 5]
resultat = map(carre, liste)
print(list(resultat)) # Imprime: [1, 4, 9, 16, 25]`;

const mapLambda = `
liste = [1, 2, 3, 4, 5]
resultat = map(lambda x: x ** 2, liste)
print(list(resultat)) # Imprime: [1, 4, 9, 16, 25]`;

const filter = `
def est_pair(x):
    return x % 2 == 0

liste = [1, 2, 3, 4, 5]
resultat = filter(est_pair, liste)
print(list(resultat)) # Imprime: [2, 4]`;

const filterLambda = `
liste = [1, 2, 3, 4, 5]
resultat = filter(lambda x: x % 2 == 0, liste)

print(list(resultat)) # Imprime: [2, 4]`;

export default function Page(){
    return <>
        <h2>Fonction lambda</h2>
        <p>
            Une fonction lambda est une fonction anonyme qui peut avoir n'importe quel nombre d'arguments, mais ne peut avoir qu'une seule expression. Elle prend la forme <IC>lambda arguments: expression</IC>. Par exemple, si l'on veut définir une fonction qui retourne le carré d'un nombre, on peut utiliser une fonction lambda comme suit:
        </p>
        <CodeBlock language="python">
            {lambda}
        </CodeBlock>
        <p>
            Une fonction lambda peut également prendre plusieurs arguments. Par exemple, si l'on veut définir une fonction qui retourne la somme de deux nombres, on peut utiliser une fonction lambda comme suit:
        </p>
        <CodeBlock language="python">
            {lambdaAdd}
        </CodeBlock>

        <p>
            Peut-être que nous voyez pas l'intérêt de cette fonctionnalité comparé aux fonctions normales. En effet, les fonctions lambda sont souvent utilisées en conjonction avec les fonctions <IC>map</IC> et <IC>filter</IC> que nous allons voir dans un instant pour effectuer des opérations sur des listes.
        </p>

        <h2>La fonction <IC>map</IC></h2>
        <p>
            La fonction <IC>map</IC> permet d'appliquer une fonction à chaque élément d'une liste. Elle prend la forme <IC>map(fonction, liste)</IC>. Par exemple, si l'on veut appliquer notre fonction <IC>carre</IC> qui prend un élément et retourne son carré à chaque élément d'une liste, on peut utiliser la fonction <IC>map</IC> comme suit:
        </p>
        <CodeBlock language="python">
            {mapCarre}
        </CodeBlock>

        <p>
            Ici, la fonction <IC>carre</IC> est appliquée à chaque élément de la liste <IC>[1, 2, 3, 4, 5]</IC> et le résultat est stocké dans un objet <IC>map</IC>. Pour obtenir le résultat sous forme de liste, on utilise la fonction <IC>list</IC> pour convertir l'objet <IC>map</IC> en liste.
        </p>
        <p>
            Il faut noter que la fonction utilisée doit prendre un seul argument et retourner un résultat. Au lieu de définir une fonction <IC>carre</IC> séparément, on peut utiliser une fonction lambda pour définir la fonction directement dans l'appel à <IC>map</IC>. Cela rend le code plus concis et plus lisible.
        </p>
        <CodeBlock language="python">
            {mapLambda}
        </CodeBlock>

        <h2>La fonction <IC>filter</IC></h2>
        <p>
            La fonction <IC>filter</IC> permet de filtrer les éléments d'une liste en fonction d'une fonction de test. Similaire à la fonction <IC>map</IC>, elle prend la forme <IC>filter(fonction, liste)</IC>. Par exemple, si l'on veut filtrer les éléments pairs d'une liste, on peut utiliser la fonction <IC>filter</IC> comme suit:
        </p>
        <CodeBlock language="python">
            {filter}
        </CodeBlock>
        <p>
            Il faut noter que la fonction utilisée doit prendre un seul argument et retourner un résultat booléen. Ici, la fonction <IC>est_pair</IC> retourne <IC>True</IC> si l'élément est pair et <IC>False</IC> sinon. Le résultat est stocké dans un objet <IC>filter</IC> qui peut être converti en liste en utilisant la fonction <IC>list</IC>. Tout comme avec la fonction <IC>map</IC>, on peut utiliser une fonction lambda pour définir la fonction de test directement dans l'appel à <IC>filter</IC>.
        </p>
        <CodeBlock language="python">
            {filterLambda}
        </CodeBlock>

        <h2>Différence avec la compréhension de liste</h2>
        <p>
            Vous vous demandez possiblement la différence entre ces fonctions (<IC>map</IC> et <IC>filter</IC>) et la compréhension de liste que nous avons vu précédemment. En effet, la compréhension de liste est souvent plus lisible et plus rapide que l'utilisation de ces fonctions, elle est donc à privilégier dans la plupart des cas. Cependant, si une fonction existe déjà ou si vous avez besoin de réutiliser une fonction, les fonctions <IC>map</IC> et <IC>filter</IC> peuvent être utiles.
        </p>
    </>
}