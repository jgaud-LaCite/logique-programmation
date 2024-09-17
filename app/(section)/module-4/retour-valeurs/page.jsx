import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Valeurs de retour",
    description: "Retour de valeurs dans une fonction en Python.",
    keywords: ["fonctions", "python", "def", "fonction"],
    group: "notes",
}

const function_with_return =
`def add(a, b):
    resultat = a + b
    return resultat

somme = add(3, 5)
print(somme) # Imprime: 8
`

export default function Page() {
    return <>
        <p>
            Les fonctions peuvent également retourner des valeurs. Pour retourner une valeur à partir d&apos;une fonction, vous pouvez utiliser le mot-clé <IC>return</IC>. Lorsque vous n'utilisez pas le mot-clé <IC>return</IC>, la fonction retourne <IC>None</IC> par défaut. Par exemple, la fonction suivante nous permet de calculer la somme de deux nombres et de retourner le résultat:
        </p>
        <CodeBlock language="python">
            {function_with_return}
        </CodeBlock>
        <p>
            Dans cet exemple, la fonction <IC>add()</IC> prend deux arguments <IC>a</IC> et <IC>b</IC>, les ajoute ensemble et retourne le résultat. Lorsque vous appelez la fonction <IC>add(3, 5)</IC>, elle retourne la valeur <IC>8</IC>.
            Vous pouvez stocker la valeur retournée dans une variable et l&apos;utiliser plus tard dans votre code. Rappelez vous qu'à cause de la portée des variables, la variable <IC>resultat</IC> n&apos;est pas accessible en dehors de la fonction, il faut donc la retourner pour pouvoir l&apos;utiliser.
        </p>

        <h2>Retourner plusieurs valeurs</h2>
        <p>
            En Python, une fonction ne peut retourner qu&apos;une seule valeur. Cependant, vous pouvez retourner plusieurs valeurs en les regroupant dans un tuple, une autre structure de données ou bien un générateur. Nous verrons comment faire cela dans une section ultérieure.
        </p>

        
    </>;
}
