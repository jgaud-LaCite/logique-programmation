import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import Image from 'next/image';


import ex1 from '@/public/img/labo8/ex1.png';
import ex2 from '@/public/img/labo8/ex2.png';
import ex3 from '@/public/img/labo8/ex3.png';
import ex4 from '@/public/img/labo8/ex4.png';
import ex5 from '@/public/img/labo8/ex5.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 8 - Exercices",
    description: "Présentation du laboratoire.",
    keywords: ["set", "structures", "exercices", "dictionnaire", "tuple"],
    group: "labs"
}

const listeCours = `cours = {
    1: "Programmation",
    2: "Mathématiques",
    3: "Français",
    4: "Anglais",
    5: "Physique",
    6: "Chimie",
    7: "Biologie",
    8: "Histoire"
}
`

export default function Page() {
    return <>
        <section>
            <h2>Exercice 1</h2>
            <p>
                Écrire un programme qui permet à l'usager de rentrer deux points (x1, y1) et (x2, y2). Stocker ces points dans des tuples. Ensuite, afficher la distance entre ces deux points. La formule pour calculer la distance entre deux points est: <IC>d = sqrt((x2 - x1)² + (y2 - y1)²)</IC>.
            </p>
            <Image src={ex1} alt="" width="900" height="150"></Image>

            <h2>Exercice 2</h2>
            <p>
                Écrire un programme qui permet qui stocke qui permet à l'usager d'entrer des noms de personne et leur numéro de téléphone jusqu'à temps qu'il entre le mot "fin". Ensuite, permettre à l'usager de faire une recherche par nom pour obtenir le numéro de téléphone de la personne.
            </p>
            <Image src={ex2} alt="" width="900" height="500"></Image>


            <h2>Exercice 3</h2>
            <p>
                Écrire un programme qui demande à l'usager de rentrer des mots jusqu'à temps qu'il entre le mot "fin". Ensuite, compter le nombre de fois que chaque mot a été entré et afficher le résultat.
            </p>
            <Image src={ex3} alt="" width="900" height="300"></Image>


            <h2>Exercice 4</h2>
            <p>
                Écrire un programme qui demande à l'usager d'entrer le nom d'étudiants jusqu'à temps qu'il entre le mot "fin". Pour chaque étudiant, demander à l'usager d'entrer 3 notes. Ensuite, calculer la moyenne de chaque étudiant et afficher le nom de l'étudiant avec sa moyenne.
            </p>
            <Image src={ex4} alt="" width="900" height="500"></Image>

            <h2>Exercice 5 (Avancé)</h2>
            <p>
                En utilisant le dictionnaire ci-dessous, écrire un programme qui permet à l'usager d'entrer des noms d'étudiants jusqu'à temps qu'il entre le mot "fin". Pour chaque étudiant, demander à l'usager d'entrer les cours auxquels l'étudiant est inscrit jusqu'à temps qu'il entre "fin", prenez en compte le cas où le cours n'existe pas et le cas où l'étudiant est déjà inscrit au cours. Dernièrement, afficher le nom de chaque cours avec la liste des étudiants inscrits à ce cours.
            </p>
            <CodeBlock language="python">
                {listeCours}
            </CodeBlock>
            <Image src={ex5} alt="" width="900" height="1000"></Image>
        </section>


    </>;
}