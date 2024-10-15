import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox'
/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "La boucle while (tant que)",
    description: "Introduction à la boucle while en Python",
    keywords: ["boucle", "itération", "itérative", "répétition", "répétitive", "while", "do while"],
    group: "notes",
}

const syntaxe_while = `# Code avant la boucle
while condition:
    # Ligne de code 1
    # Ligne de code 2
    # ...
    # Ligne de code n
    
# Code après la boucle`;

const compte_rebours = `compteur = 10
while compteur > 0:
    print(compteur)
    compteur -= 1
print("Décollage !")`;

const do_while = `# Vérifier que l'usager est saisi un entier positif
nombre = 0 # On s'assure que la condition est vraie dès le départ

while nombre <= 0:
    nombre = int(input("Saisissez un nombre entier positif : "))`;


export default function Page(){
    return <>
        <p>
            La boucle <code>while</code> est une structure répétitive qui permet de répéter un bloc de code tant qu'une condition est vraie. Elle est composée d'une expression booléenne qui est évaluée avant chaque itération. Si l'expression est vraie, le bloc de code est exécuté, sinon la boucle est terminée.
        </p>
        <p>
            La syntaxe de la boucle <code>while</code> est la suivante :
        </p>
        <CodeBlock language="python">
            {syntaxe_while}
        </CodeBlock>
        <p>
            Le bloc de code à répéter est indenté, c'est-à-dire qu'il est décalé vers la droite comme nous l'avons vu avec les structures conditionnelles et les fonctions. La condition est évaluée avant chaque itération, si elle est vraie, le bloc de code est exécuté, sinon la boucle est terminée. Si la condition est fausse dès le départ, le bloc de code ne sera jamais exécuté.
        </p>
        <h2>Exemple</h2>
        <p>
            Prenons pour exemple un programme qui fait un compte à rebours de 10 à 1. Nous allons utiliser une boucle <code>while</code> pour cela.
        </p>
        <CodeBlock language="python">
            {compte_rebours}
        </CodeBlock>
        <p>
            Si nous faisions cette exemple sans boucle, nous aurions dû écrire 10 lignes de code pour afficher chaque nombre. Grâce à la boucle <code>while</code>, nous avons pu réduire ce nombre à 4 lignes. De plus, si l'on voulait faire un compte à rebours de 1000 à 1, nous n'aurions qu'à changer la valeur de <IC>compteur</IC> à 1000. C'est l'un des avantages des boucles, elles permettent de répéter un bloc de code sans
        </p>
        <ColoredBox title="Note">
            Veuillez noter que la boucle contient une instruction qui nous permet de faire évoluer la condition <IC>compteur -= 1</IC>. Si nous oublions cette instruction, la condition <IC>compteur &gt; 0</IC> sera toujours vraie et la boucle ne s'arrêtera jamais.
        </ColoredBox>

        <h2>La boucle do-while</h2>
        <p>
            Il existe certains problèmes dans lesquels il est nécessaire de faire au moins une itération avant de vérifier la condition. Par exemple lorsqu'on demande à l'utilisateur de saisir un nombre entier positif, on doit vérifier si le nombre est positif après que l'utilisateur ait saisi une valeur. Pour ce genre de problèmes, on utilise une boucle qui exécute le bloc de code au moins une fois avant de vérifier la condition nommée <code>do-while</code> que l'on retrouve dans d'autres langages de programmation. En Python, il n'y a pas de boucle <code>do-while</code>, mais on peut facilement simuler son comportement en utilisant une boucle <code>while</code> en s'assurant que la condition est vraie dès le départ.
        </p>
        <CodeBlock language="python">
            {do_while}
        </CodeBlock>
        <p>
            Dans cet exemple, on demande à l'utilisateur de saisir un nombre entier positif. On initialise la variable <IC>nombre = 0</IC> pour s'assurer que la condition <IC>nombre &lt;= 0</IC> est vraie dès le départ. La boucle <code>while</code> s'exécutera au moins une fois avant de vérifier la condition.
        </p>
    </>
}