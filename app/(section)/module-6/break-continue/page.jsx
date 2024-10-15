import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Interruption de boucle et saut de boucle",
    description: "Introduction aux instructions break et continue en Python",
    keywords: ["boucle", "itération", "itérative", "répétition", "répétitive", "break", "continue"],
    group: "notes",
}

const break_example = `for i in range(10):
    if i == 5:
        break
    print(i)`;

const continue_example = `for i in range(10):
    if i == 5:
        continue
    print(i)`;

export default function Page(){
    return <>
        <p>
            Il existe deux instructions qui permettent de contrôler le comportement d'une boucle : <IC>break</IC> et <IC>continue</IC>. Ces instructions sont très utiles pour interrompre une boucle avant qu'elle ne soit terminée ou pour sauter une itération.
        </p>
        <h2>break</h2>
        <p>
            L'instruction <IC>break</IC> permet d'interrompre une boucle avant qu'elle ne soit terminée. Elle est souvent utilisée pour sortir d'une boucle lorsque certaines conditions sont rencontrées. Par exemple, si vous cherchez un élément dans une liste et que vous voulez sortir de la boucle dès que vous le trouvez, vous pouvez utiliser l'instruction <IC>break</IC>. Les instructions qui suivent l'instruction <IC>break</IC> ne seront pas exécutées.
        </p>
        <CodeBlock language="python">
            {break_example}
        </CodeBlock>
        <p>
            Dans cet exemple, la boucle <IC>for</IC> itère sur les nombres de 0 à 9. Lorsque la variable <IC>i</IC> est égale à 5, l'instruction <IC>break</IC> est exécutée et la boucle est interrompue. Les nombres de 0 à 4 seront affichés, mais pas le nombre 5.
        </p>

        <h2>continue</h2>
        <p>
            L'instruction <IC>continue</IC> permet de sauter une itération dans une boucle. Elle est souvent utilisée pour passer à l'itération suivante si certaines conditions sont rencontrées. Par exemple, si vous voulez afficher tous les nombres de 0 à 9 sauf le nombre 5, vous pouvez utiliser l'instruction <IC>continue</IC>.
        </p>
        <CodeBlock language="python">
            {continue_example}
        </CodeBlock>
        <p>
            Dans cet exemple, la boucle <IC>for</IC> itère sur les nombres de 0 à 9. Lorsque la variable <IC>i</IC> est égale à 5, l'instruction <IC>continue</IC> est exécutée et l'itération est sautée. Le nombre 5 ne sera pas affiché et la boucle continuera avec les nombres 6 à 9.
        </p>
        
        <h2>return</h2>
        <p>
            L'instruction <IC>return</IC> que nous avons vu dans les fonctions peut également être utilisée pour sortir d'une boucle. Lorsque l'instruction <IC>return</IC> est exécutée dans une boucle, la fonction qui contient la boucle est terminée et la boucle est interrompue, similairement à l'instruction <IC>break</IC>.
        </p>
    </>
}