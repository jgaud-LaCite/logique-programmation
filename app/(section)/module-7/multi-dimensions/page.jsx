import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import Image from 'next/image';

/**
 * @type {import("next").Metadata}
 */

import liste2d from '@/public/img/module7-liste2d.png';

export const metadata = {
    title: "Liste à plusieurs dimensions",
    description: "Créer et manipuler des listes à plusieurs dimensions en Python",
    keywords: ["liste", "tableau", "array", "list", "multi-dimensions",	"matrice", "matrix"],
    group: "notes",
}

const matrice = `matrice = [
    [1, 2, 3],
    [4, 5, 6]
]
# Bien que déclarer la liste ainsi est plus lisible, il est possible de la déclarer sur 
# une seule ligne : matrice = [[1, 2, 3], [4, 5, 6]]

print(matrice[0][1]) # Affiche 2
`;

const iter_liste2d = `matrice = [
    [1, 2, 3],
    [4, 5, 6]
]

for ligne in matrice:
    for colonne in ligne:
        print(element)

# Ou bien avec les indices
for i in range(len(matrice)):
    for j in range(len(matrice[i])):
        print(matrice[i][j])
`;

export default function Page(){
    return <>
        <p>
            Les listes à plusieurs dimensions sont des listes qui contiennent d'autres listes comme éléments. En Python, vous pouvez créer des listes à plusieurs dimensions en imbriquant des listes les unes dans les autres. Ces listes sont souvent utilisées pour représenter des structures de données plus complexes, comme des matrices ou des tableaux. Vous pouvez mettre autant de niveaux d'imbrication que nécessaire pour représenter la structure de données souhaitée, mais la liste à deux dimensions est la plus courante. Dans une liste à deux dimensions, le premier index fait référence à la ligne et le deuxième index fait référence à la colonne.
        </p>
        <Image src={liste2d} alt="Une liste en programmation" width="500"></Image>

        <h2>Création d'une liste à deux dimensions</h2>
        <p>
            Pour créer une liste à deux dimensions en Python, vous pouvez simplement imbriquer des listes les unes dans les autres. Voici un exemple de création d'une liste à deux dimensions représentant une matrice 2x3:
        </p>
        <CodeBlock language="python">
            {matrice}
        </CodeBlock>

        <h2>Itération sur les listes à deux dimensions</h2>
        <p>
            Pour itérer sur les éléments d'une liste à deux dimensions, vous pouvez utiliser une boucle <IC>for</IC> imbriquée. Voici un exemple d'itération sur les éléments de la matrice précédente:
        </p>
        <CodeBlock language="python">
            {iter_liste2d}
        </CodeBlock>
    </>
}