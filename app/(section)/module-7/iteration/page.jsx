import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Itération sur les listes",
    description: "Itérer sur les éléments d'une liste en Python",
    keywords: ["itération", "boucle", "for", "liste", "tableau", "array", "list"],
    group: "notes",
}

const liste_iteration_index = `# Avec une boucle for et l'index
nombres = [1, 2, 3, 4, 5]
for i in range(len(nombres)):
    print(nombres[i])

# Avec une boucle while
while i < len(nombres):
    print(nombres[i])
    i += 1
`;


const liste_iteration = `nombres = [1, 2, 3, 4, 5]
for nb in nombres:
    print(nb)
`;

export default function Page(){
    return <>
        <p>
            L'itération sur les listes est une opération très courante en programmation. Elle consiste à parcourir tous les éléments d'une liste et à effectuer une opération sur chacun d'eux. Puisque l'on connait la longueur de la liste, on peut facilement itérer sur tous les éléments en utilisant une boucle. En Python, vous pouvez obtenir la longueur d'une liste en utilisant la fonction <IC>len()</IC>.
        </p>
        <CodeBlock language="python">
            {liste_iteration_index}
        </CodeBlock>
        <p>
            Dans l'exemple ci-dessus, nous avons une liste de nombres <IC>nombres</IC> et nous utilisons une boucle pour parcourir tous les éléments de la liste. Nous utilisons la fonction <IC>len()</IC> pour obtenir la longueur de la liste et la fonction <IC>range()</IC> pour générer une séquence d'indices allant de 0 à la longueur de la liste. Vous remarquerez que le fait que la fonction range n'inclus pas la borne supérieure de l'intervalle est pratique dans ce cas-ci puisque notre liste débute à l'index 0 et se termine donc à l'index <IC>len(nombres) - 1</IC>. Cette itération peut se faire avec une boucle <IC>for</IC> ou une boucle <IC>while</IC>, mais comme nous avons vu avec les boucles, la boucle <IC>for</IC> est généralement plus adaptée pour ce genre de situation puisque l'on connait à l'avance le nombre d'itérations à effectuer.
        </p>
        <p>
            Il est également possible d'itérer directement sur les éléments de la liste sans se soucier des indices en utilisant une boucle <IC>for</IC> comme suit:
        </p>
        <CodeBlock language="python">
            {liste_iteration}
        </CodeBlock>
        <p>
            Dans cet exemple, nous avons une liste de nombres <IC>nombres</IC> et nous utilisons une boucle <IC>for</IC> pour parcourir tous les éléments de la liste. À chaque itération, la variable <IC>nb</IC> prend la valeur de l'élément courant de la liste. Cette méthode est plus simple et plus lisible que l'itération avec les indices, surtout si vous n'avez pas besoin de connaître l'indice de l'élément courant.
        </p>
        <ColoredBox title="Attention">
            Lorsque vous itérez sur une liste, assurez-vous de ne pas modifier la liste en cours d'itération, car cela peut entraîner des résultats inattendus. Si vous devez modifier la liste pendant l'itération, il est recommandé de créer une copie de la liste avant de la modifier.
        </ColoredBox>
    </>
}