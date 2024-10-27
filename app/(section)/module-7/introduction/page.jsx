import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
import Image from 'next/image';

/**
 * @type {import("next").Metadata}
 */

import liste from '@/public/img/module7-liste.png';

export const metadata = {
    title: "Les listes",
    description: "Introduction aux listes en Python",
    keywords: ["liste", "tableau", "array", "list"],
    group: "notes",
}

const liste_prog = `liste_vide = [] # Déclaration d'une liste vide
nombres = [1, 2, 3, 4, 5] # Liste de nombres
noms = ["Alice", "Bob", "Charlie"] # Liste de chaînes de caractères
mixte = [1, "Alice", True] # Liste de types différents
`;

const modif_liste = `nombres = [1, 2, 3, 4, 5]
nombres[1] = 10 # Modifie le deuxième élément de la liste
nb = nombres[1] # On prend la valeur du deuxième élément et on la stocke dans la variable nb
`;

const ajout_liste = `nombres = [1, 2, 3, 4, 5]
nombres.append(6) # Ajoute l'élément 6 à la fin de la liste
nombres.insert(1, 10) # Insère l'élément 10 à l'index 1 de la liste
print(nombres) # Affiche [1, 10, 2, 3, 4, 5, 6]
`;

const supression_liste = `nombres = [1, 2, 3, 4, 5]
nombres.remove(3) # Supprime l'élément 3 de la liste
nombres.pop(1) # Supprime l'élément à l'index 1 de la liste
print(nombres) # Affiche [1, 3, 4, 5]
`;



export default function Page(){
    return <>
        <p>
            Les listes sont des structures de données très utiles en Python. Elles permettent de stocker plusieurs valeurs dans une seule variable. Par exemple, vous pouvez stocker une liste de nombres, de chaînes de caractères, de booléens ou même une liste de listes. Les listes sont déclarées en utilisant des crochets <IC>[]</IC> et les éléments de la liste sont séparés par des virgules.
        </p>
        <CodeBlock language="python">
            {liste_prog}
        </CodeBlock>
        <p>
            Dans l'exemple ci-dessus, nous avons déclaré quatre listes différentes. La première est une liste vide, la deuxième est une liste de nombres, la troisième est une liste de chaînes de caractères et la quatrième est une liste de types différents.
        </p>
        <ColoredBox title="Note">
            Les listes en Python peuvent contenir des éléments de types différents. Cela signifie que vous pouvez stocker des nombres, des chaînes de caractères, des booléens, des listes, des dictionnaires, etc. dans une seule liste. Cependant, il est généralement recommandé de stocker des éléments de même type dans une liste pour des raisons de clarté et de lisibilité du code.
        </ColoredBox>

        <h2>Modification d'une liste</h2>
        <p>
            Dans la majorité des langages de programmation, les listes débutent à l'index 0. Cela signifie que le premier élément de la liste est à l'index 0, le deuxième élément est à l'index 1, le troisième élément est à l'index 2, etc. Pour accéder à un élément spécifique de la liste, vous pouvez utiliser l'index de cet élément entre crochets. Par exemple, pour accéder au premier élément de la liste <IC>nombres</IC>, vous pouvez écrire <IC>nombres[0]</IC>.
        </p>
        <Image src={liste} alt="Une liste en programmation" width="700" height="250"></Image>
        <p>
            Ainsi, pour modifier un élément spécifique de la liste, vous pouvez accéder à cet élément en utilisant son index et lui assigner une nouvelle valeur. Par exemple, pour modifier le deuxième élément de la liste <IC>nombres</IC>, vous pouvez écrire <IC>nombres[1] = 10</IC>.
        </p>
        <CodeBlock language="python">
            {modif_liste}
        </CodeBlock>

        <h3>Découpage de liste</h3>
        <p>
            Tout comme nous avons déjà vu avec les chaînes de caractères, vous pouvez découper une liste en utilisant la notation de découpage. Cette notation est similaire à celle des chaînes de caractères, mais elle fonctionne également avec les listes. Par exemple, pour obtenir les deux premiers éléments de la liste <IC>nombres</IC>, vous pouvez écrire <IC>nombres[:2]</IC>. Je vous invite à retourner consulter la section sur les chaînes de caractères dans le Module 3 si vous avez besoin d'un rappel sur la notation de découpage.
        </p>

        <h2>Ajout et supression d'éléments</h2>

        <h3>Ajout</h3>
        <p>
            En Python, vous pouvez ajouter un élément à une liste en utilisant la méthode <IC>append()</IC>. Cette méthode ajoute un élément à la fin de la liste. On peut également insérer un élément à un index spécifique en utilisant la méthode <IC>insert()</IC>. Cette méthode prend deux arguments : l'index où l'élément doit être inséré et la valeur de l'élément à insérer.
        </p>
        <CodeBlock language="python">
            {ajout_liste}
        </CodeBlock>

        <h3>Suppression</h3>
        <p>
            Pour supprimer un élément d'une liste, vous pouvez utiliser la méthode <IC>remove()</IC>. Cette méthode prend en argument la valeur de l'élément à supprimer. Si l'élément apparaît plusieurs fois dans la liste, seule la première occurrence sera supprimée. Vous pouvez également supprimer un élément à un index spécifique en utilisant la méthode <IC>pop</IC>.
        </p>
        <CodeBlock language="python">
            {supression_liste}
        </CodeBlock> 
    </>
}