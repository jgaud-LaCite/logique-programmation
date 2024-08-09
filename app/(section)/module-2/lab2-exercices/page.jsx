import Spoiler from "@/components/Spoiler";
import CodeBlock from "@/components/CodeBlock";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';


import ex1 from '@/public/img/labo2/ex1.gif';
import ex2 from '@/public/img/labo2/ex2.gif';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 2 - Programmes simples",
    description: "Présentation du laboratoire sur des programmes simples.",
    keywords: ["programmes simples", "programme simple", "input", "opérateurs", "variables"],
    group: "labs"
}


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui calcule le prix TTC (Toutes Taxes comprises) d'un prix HT (Hors Taxes) entré au clavier. En
                sachant que les taxes sont de 13%.
            </p>
            <Image src={ex1} alt="" width="900" height="200"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex1">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui permet de permuter deux variables entières saisis au clavier.
            </p>
            <Image src={ex2} alt="" width="900" height="200"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex2">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 3</h2>
            <p>
                Périmètre
            </p>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex3">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 4</h2>
            <p>
                Rectangle
            </p>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex4">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 5</h2>
            <p>
                US to CAD
            </p>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex5">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 6</h2>
            <p>
                Le programme suivant contient 3 erreurs, identifiez les
                et corrigez les pour que le programme fonctionne correctement.
            </p>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex6">
                </CodeSubmission>
            </Spoiler>
        </section>
    </>;
}