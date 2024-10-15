import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox'
/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "La boucle for (pour)",
    description: "Introduction à la boucle for en Python",
    keywords: ["boucle", "itération", "itérative", "répétition", "répétitive", "for"],
    group: "notes",
}

const compte = `index = 0 # Déclaration d'un index
while index < 10: # Comparaison de l'index avec une condition
    print(index) # Code à répéter
    index += 1 # Incrémentation ou décrémentation de l'index`;

const for_syntax = `# Code avant la boucle
for index in range(debut, fin, pas):
    # Code à répéter
    print(index)
# Code après la boucle`;

const for_string = `mot = "Bonjour"
for lettre in mot:
    print(lettre)`;

const nested_for = `for i in range(3):
    for j in range(3):
        print(f"i = {i}, j = {j}")`;


export default function Page(){
    return <>
        <h2>Le modèle index-variable</h2>
        <p>
            Lors de l'usage de la boucle while, vous aurez possiblement remarqué qu'il existe un modèle très commun qui consiste à utiliser une variable pour compter le nombre d'itérations. Par exemple, pour afficher les nombres de 1 à 10, vous pourriez écrire le code suivant :
        </p>
        <CodeBlock language="python">
            {compte}
        </CodeBlock>
        <p>
            Cet exemple qui inclus trois parties (déclaration de l'index, comparaison de l'index avec une condition et incrémentation/décrémentation de l'index) est très commun et est utilisé dans plusieurs situations. Tellement qu'une autre structure existe pour simplifier ce modèle. Il s'agit de la boucle <code>for</code>. Elle utilise généralement la syntaxe suivante :
        </p>
        <CodeBlock language="python">
            {for_syntax}
        </CodeBlock>
        <p>
            Avec la boucle <code>for</code>, vous n'avez pas besoin de déclarer une variable avant votre boucle, dans notre exemple, la variable <IC>index</IC> contiendra la valeur de l'index à chaque itération.
        </p>
        <p>
            La fonction <IC>range</IC> est une fonction qui génère une séquence de nombres. Elle prend trois arguments : le début de la séquence, la fin de la séquence et le pas. Par défaut, le pas est de 1 et le début est 0. C'est-à-dire que <IC>range(10)</IC> génère une séquence de nombres de 0 à 9. Si vous voulez une séquence de 1 à 10, vous devez spécifier le début de la séquence en passant 1 comme premier argument de cette manière : <IC>range(1, 11)</IC>. On pourrait également faire un compteur qui décompte de 10 à 1 en spécifiant un pas de -1 : <IC>range(10, 0, -1)</IC>.
        </p>
        <ColoredBox title="Note">
            Veuillez noter que la fonction range n'inclus pas le dernier nombre de la séquence. C'est-à-dire que <IC>range(10)</IC> génère une séquence de nombres de 0 à 9.
        </ColoredBox>
        <p>
            La boucle <code>for</code> est très utile pour répéter un bloc de code un nombre déterminé de fois. Elle peut également être utilisée pour parcourir les éléments d'une liste, d'une chaîne de caractères ou d'un dictionnaire. Par exemple, nous pouvons utiliser une boucle <IC>for</IC> pour afficher les caractères d'une chaîne de caractères un par un :
        </p>
        <CodeBlock language="python">
            {for_string}
        </CodeBlock>
        <p>
            Dans cet exemple, la variable <IC>lettre</IC> contiendra un caractère de la chaîne de caractères <IC>mot</IC> à chaque itération. La boucle <IC>for</IC> est donc très utile pour parcourir les éléments d'une séquence. Nous verrons plus en détail comment parcourir les éléments d'une liste et d'un dictionnaire dans les sections suivantes lorsque nous aborderons ces structures de données.
        </p>
        <p>
            Comme vous pouvez le voir, il est possible de faire la même chose avec une boucle <IC>while</IC> mais la boucle <IC>for</IC> est plus adaptée pour ce genre de situation. Elle est plus concise et plus lisible. C'est pourquoi il est recommandé d'utiliser une boucle <IC>for</IC> lorsque vous savez à l'avance combien de fois vous devez répéter un bloc de code.
        </p>
        <h2>Boucles imbriquées</h2>
        <p>
            Que ce soit les boucles <IC>for</IC> ou <IC>while</IC>, rien ne nous empêche d'imbriquer plusieurs boucles. C'est-à-dire de mettre une boucle à l'intérieur d'une autre boucle. Cela peut être utile pour parcourir des éléments d'une liste de plusieurs dimensions ou pour générer des tableaux (matrices). Voici un exemple de boucles imbriquées :
        </p>
        <CodeBlock language="python">
            {nested_for}
        </CodeBlock>
    </>
}