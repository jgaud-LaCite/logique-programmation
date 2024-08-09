import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';


import ex1 from '@/public/img/labo2/ex1.png';
import ex2 from '@/public/img/labo2/ex2.png';
import ex3 from '@/public/img/labo2/ex3.png';
import ex4 from '@/public/img/labo2/ex4.png';
import ex5 from '@/public/img/labo2/ex5.png';

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
                Écrire un programme qui calcule le prix TTC (Toutes Taxes comprises) d&apos;un prix HT (Hors Taxes) entré au clavier. En
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
                Écrire un programme qui demande à l’utilisateur de donner le rayon d’un cercle et lui retourne sa
                surface et son périmètre. En sachant que la surface d’un cercle est donnée par la formule π * r² et que le
                périmètre est donné par la formule 2 * π * r. 
            </p>
            <p>
                π est une constante égale à 3.1416.
            </p>
            <Image src={ex3} alt="" width="900" height="200"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex3">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 4</h2>
            <p>
                Écrire un programme qui fournit une valeur en dollar US à partir d&apos;un prix entré en dollar CAD. En sachant que 1 dollar US
                équivaut à environ 1.35 dollar CAD.
            </p>
            <Image src={ex4} alt="" width="900" height="200"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex4">
                </CodeSubmission>
            </Spoiler>
        </section>

        <section>
            <h2>Exercice 5</h2>
            <p>
                Écrire un programme qui calcul le montant du pourboire à donner à un serveur. Le programme doit demander le montant de la facture
                et le pourcentage du pourboire à donner. Le programme doit ensuite afficher le montant du pourboire à donner.
            </p>
            <Image src={ex5} alt="" width="900" height="200"></Image>
            <Spoiler buttonLabel="Valider votre réponse">
                <CodeSubmission slug="jgaud-LaCite/logique-programmation/main/checks/labo2/ex5">
                </CodeSubmission>
            </Spoiler>
        </section>
    </>;
}