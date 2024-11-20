import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Conditions sur les listes",
    description: "Fonctions all et any",
    keywords: ["all", "any", "listes", "Python"],
    group: "notes",
}

const anyAllExample = `ma_liste = [True, False, True, False, False]
print(all(ma_liste)) # Imprime False car tous les éléments ne sont pas True
print(any(ma_liste)) # Imprime True car il y a au moins un élément True`;

const comprehensionExample = `ma_liste = [237, 42, 13, 85, 423]
# On veut vérifier si tous les éléments sont pairs
liste_pairs = [element % 2 == 0 for element in ma_liste]
print(all(liste_pairs)) # Imprime False car il y a des éléments impairs

# On veut vérifier si au moins un élément est pair
print(any(liste_pairs)) # Imprime True car il y a au moins un élément pair`;

const longExample = `ma_liste = [237, 42, 13, 85, 423]
tous_pairs = True
un_pair = False

for element in ma_liste:
    if element % 2 != 0:
        tous_pairs = False
    if element % 2 == 0:
        un_pair = True

    if not tous_pairs and un_pair:
        break

print(tous_pairs) # Imprime False car il y a des éléments impairs
print(un_pair) # Imprime True car il y a au moins un élément pair`;


export default function Page(){
    return <>
        <p>
            Il arrive que l'on veuille vérifier si tous les éléments d'une liste vérifient une condition ou si au moins un élément vérifie une condition. Pour cela, on peut utiliser les fonctions <IC>all</IC> (tous les éléments) et <IC>any</IC> (un seul élément).
        </p>
        <p>
            Par exemple, si nous avons la liste suivante <IC>ma_liste = [True, False, True, False, False]</IC>, nous pouvons vérifier si tous les éléments sont <IC>True</IC> avec la fonction <IC>all</IC> et l'on peut vérifier si au moins un élément est <IC>True</IC> avec la fonction <IC>any</IC>.
        </p>
        <CodeBlock language="python" >
            {anyAllExample}
        </CodeBlock>

        <p>
            Bien évidemment, nous n'aurons pas toujours des listes de <IC>True</IC> et de <IC>False</IC>. Nous pouvons donc utilise la compréhension de liste que nous venons juste de voir afin de générer une liste de <IC>True</IC> et de <IC>False</IC> et par la suite vérifier si tous les éléments sont <IC>True</IC> ou si au moins un élément est <IC>True</IC>.
        </p>
        <CodeBlock language="python" >
            {comprehensionExample}
        </CodeBlock>
        <p>
            Si l'on faisait le même exemple sans utiliser les méthodes <IC>all</IC>, <IC>any</IC> ou la compréhension de liste, on aurait un code plus long et moins lisible, par exemple:
        </p>
        <CodeBlock language="python" >
            {longExample}
        </CodeBlock>
    </>
}