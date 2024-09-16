import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import Image from 'next/image';


import ex1 from '@/public/img/labo3/ex1.png';
import ex2 from '@/public/img/labo3/ex2.png';
import ex3 from '@/public/img/labo3/ex3.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 3 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["programmes simples", "programme simple", "fonctions", "opérateurs", "chaines", "caractères", "str", "string", "module", "import"],
    group: "labs"
}

const ex3Code = 
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
                Écrire un programme qui prend une entrée de l&apos;usager, puis imprime cette chaîne de caractères en minuscules.
            </p>
            <Image src={ex1} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo3/ex1">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui prend une entrée de l&apos;usager, puis remplace tout les espaces dans la chaîne de caractères par trois points (...).
            </p>
            <Image src={ex2} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo3/ex2">
                </CodeSubmission>
            </Spoiler>
        </section>
        
        <section>
            <h2>Exercice 3</h2>
            <p>
                Écrire un programme qui calcule et affiche la distance DIST entre deux points A et B du plan dont les coordonnées (XA, YA) et (XB, YB) sont entrées au clavier comme entiers.
                La distance entre deux points est donnée par la formule suivante: <IC>D = RACINE CARRE ((XA-XB) * (XA-XB) + (YA-YB) * (YA-YB))</IC>
            </p>
            <p>
                <strong>Note</strong>: Il est possible que vous devez fouiller un peu pour trouver la fonction qui permet de calculer la racine carrée. N&apos;oubliez pas de consulter la documentation de Python.
            </p>
            <Image src={ex3} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo3/ex3">
                </CodeSubmission>
            </Spoiler>
        </section>
    </>;
}