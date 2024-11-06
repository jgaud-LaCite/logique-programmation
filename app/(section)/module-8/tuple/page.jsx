import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */


export const metadata = {
    title: "Les tuples",
    description: "Introduction aux tuples en Python",
    keywords: ["tuples", "tuple", "python", "data", "structure"],
    group: "notes",
}

const tupleExample = `# Créer un tuple
mon_tuple = ("pomme", "banane", "cerise")

# Accéder à un élément
print(mon_tuple[1]) # banane

# Impossible de modifier un tuple
mon_tuple[1] = "fraise" # TypeError: 'tuple' object does not support item assignment
`;

const tupleLoop = `mon_tuple = ("pomme", "banane", "cerise")

# Itérer sur un tuple
for fruit in mon_tuple:
    print(fruit)

# Alternative avec un index
for i in range(len(mon_tuple)):
    print(mon_tuple[i])
`;

export default function Page(){
    return <>
        <p>
            Nous avons déjà vu les listes en Python, qui sont des collections ordonnées et modifiables d'éléments. Les tuples sont similaires, mais ils sont immuables, ce qui signifie que vous ne pouvez pas les modifier une fois qu'ils sont créés. les tuples ressemblent beaucoup aux listes, mais ils sont définis avec des parenthèses <IC>()</IC> au lieu de crochets <IC>[]</IC>.
        </p>
        <CodeBlock language="python">
                {tupleExample}
            </CodeBlock>
        <p>
            Puisque les tuples sont similaires aux listes mais immuables, on pourait se demander pourquoi on les utiliserait plutôt que simplement utiliser les listes. En fait, ils ont plusieurs avantages comme une meilleure performance et une meilleure sécurité. Si vous savez que vous n'avez pas besoin de modifier une collection, il est préférable d'utiliser un tuple plutôt qu'une liste. Ils peuvent également être utilisés comme clés dans un dictionnaire que nous verrons dans la prochaine section, ce qui n'est pas possible avec les listes.
        </p>

        <p>
            Tout comme les listes, on peut également itérer sur les tuples directement avec une boucle <IC>for</IC>:
        </p>
        <CodeBlock language="python">
            {tupleLoop}
        </CodeBlock>
    </>
}