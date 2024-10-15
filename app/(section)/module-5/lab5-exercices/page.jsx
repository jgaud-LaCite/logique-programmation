import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';


import ex1 from '@/public/img/labo5/ex1.png';
import ex2 from '@/public/img/labo5/ex2.png';
import ex3 from '@/public/img/labo5/ex3.png';
import ex4 from '@/public/img/labo5/ex4.png';
import ex5 from '@/public/img/labo5/ex5.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 5 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["conditions", "exercices"],
    group: "labs"
}


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui permet de lire 3 entiers, nommés respectivement x, y et z et
                qui affiche le nombre minimum et maximum en utilisant des conditions et non une fonction déjà existante.
            </p>
            <Image src={ex1} alt="" width="800" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo5/ex1">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui permet de saisir un entier n, on suppose qu’il est formé de deux chiffres différents de 0, et indique s’il est : valide partiel, non valide partiel ou valide total.
            </p>
            <ul>
                <li>Un nombre n est dit valide partiel s’il est multiple de l’un des chiffres qui le composent.</li>
                <li>Un nombre n est dit valide total s’il est multiple des deux chiffres qui le composent.</li>
            </ul>
            <p>
                Exemple :
            </p>
            <ul>
                <li>52 est un nombre valide partiel car 52 est divisible par 2 et n’est pas divisible par 5.</li>
                <li>48 est un nombre valide total car 48 est divisible par 4 et par 8.</li>
                <li>27 est un nombre non valide Total et non valide partiel car 27 n’est pas divisible par 2 et n’est pas divisible par 7.</li>
            </ul>
            <Image src={ex2} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo5/ex2">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 3</h2>
            <p>
                Écrire un programme qui simule le fonctionnement d’une calculatrice qui réalise les opérations de base (Addition, Soustraction, Multiplication, Division) de deux variables entières a et b.
            </p>
            <Image src={ex3} alt="" width="800" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo5/ex3">
                </CodeSubmission>
            </Spoiler>


            <h2>Exercice 4</h2>
            <p>
                Écrire un programme qui permet de saisir une date sous la forme de jj (jour), mm (mois) et aa (année), de calculer et d'afficher le jour suivant. On suppose que le mois de février contient 28 jours.
            </p>
            <Image src={ex4} alt="" width="800" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo5/ex4">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 5</h2>
            <p>
                Écrivez un programme qui demande à l'utilisateur une heure et affiche s'il est temps de prendre le petit-déjeuner, le déjeuner ou le dîner, sinon on affiche que ce n'est pas l'heure d'un repas. Utilisez un format de temps en 24 heures.
            </p>
            <ul>
                <li>Le déjeuner est servi de 7h à 9h (En incluant 7h, mais pas 9h)</li>
                <li>Le diner est servi de 12h à 14h (En incluant 12h, mais pas 14h)</li>
                <li>Le souper est servi de 18h à 20h (En incluant 18h, mais pas 20h)</li>
            </ul>
            <Image src={ex5} alt="" width="800" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo5/ex5">
                </CodeSubmission>
            </Spoiler>
        </section>


    </>;
}