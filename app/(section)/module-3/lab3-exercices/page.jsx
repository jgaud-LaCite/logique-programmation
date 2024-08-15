import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';


import ex1 from '@/public/img/labo3/ex1.png';
import ex2 from '@/public/img/labo3/ex2.png';
import ex3 from '@/public/img/labo2/ex3.png';
import ex4 from '@/public/img/labo2/ex4.png';
import ex5 from '@/public/img/labo2/ex5.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 3 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["programmes simples", "programme simple", "fonctions", "opérateurs", "chaines", "caractères", "str", "string", "module", "import"],
    group: "labs"
}


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui prend une entrée de l'usager, puis imprime cette chaîne de caractères en minuscules.
            </p>
            <Image src={ex1} alt="" width="900" height="250"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo3/ex1">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui prend une entrée de l'usager, puis remplace tout les espaces dans la chaîne de caractères par trois points (...).
            </p>
            <Image src={ex2} alt="" width="900" height="250"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo3/ex2">
                </CodeSubmission>
            </Spoiler>
        </section>
    </>;
}