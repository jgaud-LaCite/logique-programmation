import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Impression et commentaires",
    description: "Impression à l'écran.",
    keywords: ["impression", "print", "commentaires"],
    group: "notes",
}

const multilinePrint =
`print("Bonjour")
print("tout")
print("le")
print("monde!")`

const multilinePrintEnd =
`print("Bonjour", end=" ")
print("tout", end=" ")
print("le", end=" ")
print("monde!")`

const comments =
`# Ceci est un commentaire sur une ligne
print("Bonjour tout le monde!") # Ceci est un commentaire à la fin d'une ligne
"""Ce commentaire 
est multiligne"""`

export default function Page() {
    return <>
        <section>
            <h2>Impression</h2>
            <p>
                Imprimer quelque chose à l&apos;écran est une des premières choses que l&apos;on apprend à faire en programmation. C&apos;est une
                forme de sortie qui permet de voir ce que fait notre programme. En Python, il est possible d&apos;imprimer du texte à l&apos;écran
                à l&apos;aide de la fonction <IC>print</IC>. 
            </p>
            <ColoredBox title="Note">
                En programmation, une fonction est un verbe ou une action qui correspond à une portion de code qui est déjà programmé 
                pour nous et qui peut prendre certaines choses en entrées (arguments) et retourne une valeur. 
                Une fonction peut également ne pas retourner de valeur et simplement effectuer une tâche spécifique. Nous verrons dans ce
                cours plusieurs fonctions ainsi que nous pouvons également créer nos propres fonctions. En Python, on reconnait une fonction par un nom en minuscules
                suivi de parenthèses.
            </ColoredBox>
            <p>
                La fonction <IC>print</IC> prend en entrée un ou plusieurs arguments entre les parenthèses et les imprime à l&apos;écran. 
                Par exemple, pour imprimer &quot;Bonjour tout le monde!&quot;, on écrira:
            </p>
            <CodeBlock language="python">
                {`print("Bonjour tout le monde!")`}
            </CodeBlock>
            <p>
                Chaque ligne est effectuée l&apos;une après l&apos;autre, maintenant qu&apos;est ce qu&apos;il se passe si on 
                remplace notre code précédent par:
            </p>
            <CodeBlock language="python">
                {multilinePrint}
            </CodeBlock>
            <p>
                Par défaut, la fonction <IC>print</IC> ajoute un retour à la ligne à la fin de chaque appel qui est indiqué par le caractère <IC>\n</IC>. 
                Cela signifie que chaque appel à <IC>print</IC> imprime sur une nouvelle ligne. Si vous voulez imprimer plusieurs choses sur la même ligne, vous pouvez utiliser la fonction <IC>print</IC> de la manière suivante:
            </p>
            <CodeBlock language="python">
                {multilinePrintEnd}
            </CodeBlock>
            <p>
                En ajoutant l&apos;argument <IC>end=" "</IC> à la fonction <IC>print</IC>, on peut spécifier ce qui doit être ajouté à la fin de chaque appel.
                Dans cet exemple, on ajoute un espace à la fin de chaque appel.
            </p>
            <ColoredBox title="Note">
                Vous vous demandez peut-être pourquoi on utilise des guillemets pour entourer le texte. En Python, les guillemets sont utilisés pour délimiter les chaînes de caractères 
                que l&apos;on appelle <IC>string</IC>. C&apos;est un concept que nous verrons plus en détaiuls dans les prochains modules.
                Il est possible d&apos;utiliser des guillemets simples <IC>&apos;</IC> ou doubles <IC>&quot;</IC> pour délimiter une chaîne de caractères. Il est important de noter que les guillemets
                doivent être identiques au début et à la fin de la chaîne de caractères.
            </ColoredBox>

        </section>

        <section>
            <h2>Commentaires</h2>
            <p>
                En Python, il est possible d&apos;ajouter des commentaires à l&apos;intérieur de votre code. Les commentaires sont des portions de texte
                qui sont ignorées par l&apos;interpréteur Python lors de l&apos;exécution du code. Les commentaires sont très utiles pour expliquer ce que fait
                votre code, pour ajouter des notes ou pour désactiver temporairement une portion de code. Pour ajouter un commentaire, il suffit d&apos;ajouter
                le caractère <IC>#</IC> suivi du texte du commentaire ou d&apos;utiliser des triples guillemets pour un commentaire multiligne.
                Par exemple: 
            </p>
            <CodeBlock language="python">
                {comments}
            </CodeBlock>
        </section>
        
    </>;
}
