import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Compréhension de liste",
    description: "Comprendre et utiliser la compréhension de listes en Python",
    keywords: ["compréhension", "listes", "Python"],
    group: "notes",
}

const squares = `ma_liste = [1, 3, 4, 5, 6]
ma_liste_carres = []
for i in range(len(ma_liste)):
    ma_liste_carres.append(ma_liste[i] ** 2)
print(ma_liste_carres)`;

const squaresListComprehension = `ma_liste = [1, 3, 4, 5, 6]
ma_liste_carres = [x ** 2 for x in ma_liste]
print(ma_liste_carres)`;

const squaresListComprehensionCondition = `ma_liste = [1, 3, 4, 5, 6]
ma_liste_carres_pairs = [x ** 2 for x in ma_liste if x % 2 == 0]
print(ma_liste_carres_pairs)`;

const dictValues = `mon_dict = {"a": 1, "b": 2, "c": 3}
dict_values = [mon_dict[v] for v in mon_dict]
print(dict_values)`;

const statListe = `ma_liste = [1, 348, 23, 12, 45, 67]
print(sum(ma_liste))  # Affiche 496
print(min(ma_liste))  # Affiche 1
print(max(ma_liste))  # Affiche 348`;

export default function Page(){
    return <>
    <p>
        La compréhension de listes est une fonctionnalité de Python qui permet de créer des listes de manière concise. Elle est très utile pour éviter d'écrire des boucles for très longues. Prenez l'exemple où l'on voudrait créer une liste contenant les carrés des nombres d'une liste. Voici comment on pourrait le faire avec une boucle for comme nous l'avons vu précédemment :
    </p>
    <CodeBlock language="python">
        {squares}
    </CodeBlock>

    <h2>Syntaxe</h2>
    <p>
        Avec la compréhension de listes, on peut faire la même chose en une seule ligne. La compréhension de liste s'écrit comme suit <IC>[&lt;expression&gt; for &lt;element&gt; in &lt;itérable&gt; if &lt;condition&gt;]</IC>. Pour l'exemple précédent, cela donnerait :
    </p>
    <CodeBlock language="python">
        {squaresListComprehension}
    </CodeBlock>
    <p>
        Dans cet exemple, il n'y a pas de condition, donc on ne met pas de <IC>if</IC>. Par contre, on peut aussi mettre une condition pour filtrer les éléments de la liste. Par exemple, si on ne veut que les carrés des nombres pairs, on peut écrire :
    </p>
    <CodeBlock language="python">
        {squaresListComprehensionCondition}
    </CodeBlock>

    <p>
        Ici nous avons seulement travailler avec des listes, mais la compréhension de liste fonctionne avec n'importe quel itérable (liste, tuple, dictionnaire, etc.). Par exemple, si l'on voulait créer une liste contenant toutes les valeurs d'un dictionnaire, on pourrait écrire :
    </p>
    <CodeBlock language="python">
        {dictValues}
    </CodeBlock>

    <h2>Statistiques sur les listes</h2>
    <p>
        Python fournit des fonctions intégrées pour effectuer des opérations statistiques sur les listes. En particulier, nous pouvons calculer la somme totale des éléments d'une liste (fonction <IC>sum()</IC>), la valeur minimale (fonction <IC>min()</IC>) et la valeur maximale (fonction <IC>max()</IC>). Voici un exemple de l'utilisation de ces fonctions:
    </p>
    <CodeBlock language="python" >
        {statListe}
    </CodeBlock>
    </>
}