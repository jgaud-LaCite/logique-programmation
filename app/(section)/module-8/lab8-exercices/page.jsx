import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import Image from 'next/image';


import ex1 from '@/public/img/labo8/ex1.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 8 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["fonctions", "retour", "paramètres", "exercices"],
    group: "labs"
}

const ex1Code = 
`def main():
    dollars = dollars_to_float(input("Combien était votre repas? "))
    percent = percent_to_float(input("Quel pourcentage voulez-vous donner? "))
    tip = dollars * percent
    print(f"Laisser {tip:.2f}$")


def dollars_to_float(d):
    # TODO


def percent_to_float(p):
    # TODO


main()
`


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                À partir du programme ci-dessous, recréer le programme permettant de calculer le montant de pourboire à donner à un serveur. Vous devez compléter les fonctions <IC>dollars_to_float</IC> et <IC>percent_to_float</IC> avec votre code.
            </p>
            <CodeBlock language="python">
                {ex1Code}
            </CodeBlock>
            <Image src={ex1} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo8/ex1">
                </CodeSubmission>
            </Spoiler>
        </section>

    </>;
}