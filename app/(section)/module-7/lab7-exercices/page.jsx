import Spoiler from "@/components/Spoiler";
import CodeSubmission from "@/components/CodeSubmission";
import Image from 'next/image';

import ex1 from '@/public/img/labo7/ex1.png';
import ex2 from '@/public/img/labo7/ex2.png';
import ex3 from '@/public/img/labo7/ex3.png';
import ex4 from '@/public/img/labo7/ex4.png';
import ex5 from '@/public/img/labo7/ex5.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 7 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["liste", "listes", "exercices"],
    group: "labs"
}


export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui permet de calculer l’occurrence (nombre de répétitions) d’un élément dans un tableau de chaine de caractères entré par l'usager.
            </p>
            <Image src={ex1} alt="" width="900" height="250"></Image>

            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui permet d’afficher toutes les positions du tableau qui contiennent des éléments égaux à l'entier recherché dans le cas où il apparait plusieurs fois. Attention à bien prendre en compte le cas où la valeur cherchée n'est pas dans le tableau.
            </p>
            <Image src={ex2} alt="" width="700" height="500"></Image>

            <h2>Exercice 3</h2>
            <p>
                Écrire un programme qui permet de dire si un tableau d’entier saisit à partir du clavier est trié dans l’ordre croissant ou pas.
            </p>
            <Image src={ex3} alt="" width="700" height="500"></Image>

            <h2>Exercice 4</h2>
            <p>
                Écrire un programme qui saisit deux indices et échange les valeurs contenues dans le tableau à ces deux indices. Le programme affichera le contenu du tableau avant et après cette transformation.
            </p>
            <Image src={ex4} alt="" width="900" height="500"></Image>

            <h2>Exercice 5</h2>
            <p>
            Écrire un programme qui saisit une chaine de caractère et affiche le nombre de consonnes, voyelles et d’espaces.
            </p>
            <Image src={ex5} alt="" width="600" height="100"></Image>
        </section>


    </>;
}