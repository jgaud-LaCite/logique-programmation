import Spoiler from "@/components/Spoiler";
import IC from "@/components/InlineCode";
import BorderedBox from "@/components/BorderedBox";
import CodeBlock from "@/components/CodeBlock";
import CodeSubmission from "@/components/CodeSubmission";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 1 - Exercices de base",
    description: "Présentation du laboratoire sur des programmes simples.",
    keywords: ["programmes simples", "programme simple", "impression", "print"],
    group: "labs"
}

export const exercice2 =
`grp = "Groupe 1" # ...............................
print("Votre groupe est : " + grp) # ...............................`

export const exercice3 =
`print("Bonjour tout le monde')
print("#Bonjour\\ntout\\nle\\monde")
print('L'utilite de la fonction print est de pouvoir ecrire des choses a l'ecran')
C#ommentaire`

export const exercice3Solution =
`print("Bonjour tout le monde")
print("#Bonjour\\ntout\\nle\\monde")
print("L'utilite de la fonction print est de pouvoir ecrire des choses a l'ecran")
# Commentaire`

export default function Page() {
    return <>
    <section>
        <h2>Exercice 1</h2>
        <p>
            Écrire un programme qui imprime votre nom et prénom à l&apos;écran.
        </p>
        <Spoiler buttonLabel="Afficher indice">
            <BorderedBox>
                <p>
                    Utiliser la fonction <IC>print</IC> pour imprimer votre nom et prénom.
                </p>
            </BorderedBox>
        </Spoiler>
    </section>

    <section>
        <h2>Exercice 2</h2>
        <p>
            Copiez le code suivant et exécutez le, remplacez les commentaires par vos propres commentaires expliquant
            ce que fait chaque ligne de code.
        </p>
        <CodeBlock language='python'>
            {exercice2}
        </CodeBlock>
    </section>

    <section>
        <h2>Exercice 3</h2>
        <p>
            Le programme suivant contient 3 erreurs, identifiez les
            et corrigez les pour que le programme fonctionne correctement.
        </p>
        <CodeBlock language='python'>
            {exercice3}
        </CodeBlock>
        <Spoiler buttonLabel="Valider votre réponse">
            <CodeSubmission filename="test.py" slug="jgaud-LaCite/logique-programmation/main/checks/labo1/exercice3">
            </CodeSubmission>
        </Spoiler>
    </section>
    </>;
}