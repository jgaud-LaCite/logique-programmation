import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';
import IC from '@/components/InlineCode';

import ex5_exemple from '@/public/img/labo6/ex5_exemple.png';

import ex1 from '@/public/img/labo6/ex1.png';
import ex2 from '@/public/img/labo6/ex2.png';
import ex3 from '@/public/img/labo6/ex3.png';
import ex4 from '@/public/img/labo6/ex4.png';
import ex5 from '@/public/img/labo6/ex5.png';
import ex6 from '@/public/img/labo6/ex6.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 6 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["boucles", "exercices"],
    group: "labs"
}


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui demande à l'usager d'entrer un nonbre valide entre 1 et 20. Si l'usager entre un nombre invalide, le programme doit demander à l'usager de réessayer.
            </p>
            <Image src={ex1} alt="" width="900" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex1">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui affiche la table de multiplication d'un nombre entré par l'usager.
            </p>
            <Image src={ex2} alt="" width="700" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex2">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 3</h2>
            <p>
                Écrire un programme qui affiche les tables de multiplication de 1 à 9. Chaque table doit être séparée par une ligne vide.
            </p>
            <Image src={ex3} alt="" width="800" height="700"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex3">
                </CodeSubmission>
            </Spoiler> 

            <h2>Exercice 4</h2>
            <p>
                Écrire un programme qui permet d'afficher les tables de multiplication de <IC>a</IC> jusqu'à <IC>b</IC>. Les valeurs de <IC>a</IC> et <IC>b</IC> sont entrées par l'usager.
            </p>
            <Image src={ex4} alt="" width="800" height="800"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex4">
                </CodeSubmission>
            </Spoiler> 

            <h2>Exercice 5</h2>
            <p>
                Écrire un programme qui saisit un entier positif <IC>nb</IC> composé de quatre chiffres puis calcule le chiffre de chance correspondant à ce nombre de la façon suivante :
            </p>
            <ul>
                <li>
                    Calculer la somme des chiffres de <IC>nb</IC>. Si le nombre calculé est composé de plus d'un chiffre, faire la somme des chiffres qui le compose.
                </li>
                <li>
                    Répéter l'étape précédente jusqu'à ce que le nombre calculé soit composé d'un seul chiffre.
                </li>
            </ul>
            <p>
                Exemple, pour <IC>nb = 9569</IC> nous aurons les sommes suivantes :
            </p>
            <Image src={ex5_exemple} alt="" width="1100" height="250"></Image>
            <Image src={ex5} alt="" width="800" height="90"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex5">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 6</h2>
            <p>
                Écrire un programme qui affiche le triangle perpendiculaire formé d'étoiles de <IC>N</IC> lignes (<IC>N</IC> est fourni au clavier).
            </p>
            <Image src={ex6} alt="" width="700" height="250"></Image>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex6">
                </CodeSubmission>
            </Spoiler>

            <h2>Exercice 7</h2>
            <p>
                Écrire un programme qui calculer la somme des nombres compris entre 1 et 999, mais ignore le nombre s’il est un multiple de 10.
            </p>
            <Spoiler label="Valider votre réponse" border={false}>
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo6/ex7">
                </CodeSubmission>
            </Spoiler> 
        </section>


    </>;
}