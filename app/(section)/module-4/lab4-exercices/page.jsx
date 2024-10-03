import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import Image from 'next/image';


import ex1 from '@/public/img/labo4/ex1.png';
import ex2 from '@/public/img/labo4/ex2.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 4 - Exercices",
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
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo4/ex1">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 2</h2>
            <p>
                Écrire une fonction qui retourne la taille de l'hypoténuse d'un triangle rectangle. La fonction doit accepter la longueur des deux côtés de l’angle droit du triangle nommé respectivement cote1 et cote2. La fonction doit se nommer 'hypotenuse'. Si un seul côté est donné, la fonction doit prendre la valeur 10 par défaut pour l'autre côté. La formule pour calculer l’hypoténuse est : <IC>RACINE CARRE(cote1 + cote2)</IC>
            </p>
            <Image src={ex2} alt="" width="1000" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo4/ex2">
                </CodeSubmission>
            </Spoiler>
        </section>

    </>;
}