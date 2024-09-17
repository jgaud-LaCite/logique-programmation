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

const function_return_multiple_values =
`def get_info():
    nom = "Alice"
    age = 25
    return nom, age

nom, age = get_info()
print(nom) # Imprime: Alice
print(age) # Imprime: 25
`

const function_return_multiple_values_underscore =
`def get_info():
    nom = "Alice"
    age = 25
    return nom, age

nom, _ = get_info() # Ignorer l'âge
print(nom) # Imprime: Alice
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
            En Python, une fonction peut retourner plusieurs valeurs en les séparant par des virgules. Par exemple:
        </p>
        <CodeBlock language="python">
            {function_return_multiple_values}
        </CodeBlock>

        <p>
            Dans cet exemple, la fonction <IC>get_info()</IC> retourne deux valeurs: le nom et l&apos;âge. Lorsque vous appelez la fonction <IC>get_info()</IC>, vous pouvez stocker les valeurs retournées dans deux variables <IC>nom</IC> et <IC>age</IC>. Il est également possible de "jeter" une des valeurs retournées si vous n&apos;en avez pas besoin en utilisant un underscore <IC>_</IC> comme nom de variable. Par exemple:
        </p>
        
        <CodeBlock language="python">
            {function_return_multiple_values_underscore}
        </CodeBlock>
    </>;
}
