import Spoiler from "@/components/Spoiler";
import IC from "@/components/InlineCode";
import BorderedBox from "@/components/BorderedBox";
import CodeBlock from "@/components/CodeBlock";
import CodeSubmission from "@/components/CodeSubmission";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 1 - Solutions",
    description: "Solutions du laboratoire sur des programmes simples.",
    keywords: ["programmes simples", "programme simple", "impression", "print", "solutions"],
    group: "labs"
}

export const exercice1_sol =
`print("Bruce Wayne")`

export const exercice2_sol =
`grp = "Groupe 1" # Stockage de la chaine de caractères "Groupe 1" dans la variable grp
print("Votre groupe est : " + grp) # Affichage de la chaine de caractères "Votre groupe est : " suivie de la valeur de la variable grp`

export const exercice3_sol =
`print("Bonjour tout le monde")
print("Bonjour\\ntout\\nle\\nmonde")
print("L'utilite de la fonction print est de pouvoir ecrire des choses a l'ecran")
# Commentaire`

export default function Page() {
    return <>
    <section>
        <h2>Exercice 1</h2>
        <Spoiler buttonLabel="Solution">
            <CodeBlock language='python'>
                {exercice1_sol}
            </CodeBlock>
        </Spoiler>
    </section>

    <section>
        <h2>Exercice 2</h2>
        <Spoiler buttonLabel="Solution">
            <CodeBlock language='python'>
                {exercice2_sol}
            </CodeBlock>
        </Spoiler>
    </section>

    <section>
        <h2>Exercice 3</h2>
        <Spoiler buttonLabel="Solution">
            <CodeBlock language='python'>
                {exercice3_sol}
            </CodeBlock>
        </Spoiler>
    </section>
    </>;
}