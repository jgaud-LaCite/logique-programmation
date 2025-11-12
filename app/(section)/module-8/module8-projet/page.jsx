import CodeBlock from '@/components/CodeBlock';
import Image from 'next/image';

import final from '@/public/img/module8-projet/final.png';
import etape1img from '@/public/img/module8-projet/etape1.png';
import etape2img from '@/public/img/module8-projet/etape2.png';
import etape3img from '@/public/img/module8-projet/etape3.png';
import etape5img from '@/public/img/module8-projet/etape5.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Module 8 - Mini-projet",
    description: "Présentation du laboratoire.",
    keywords: ["set", "structures", "exercices", "dictionnaire", "tuple", "projet"],
    group: "labs"
}

const etape1 = `# (S)alle, (M)ur, (T)resor, (P)otion
carte = [
    ['S', 'P', 'M', 'T'],
    ['S', 'S', 'M', 'S'],
    ['S', 'M', 'M', 'S'],
    ['J', 'S', 'S', 'S']
]

afficher_carte(carte)
`

const etape2 = `# (S)alle, (M)ur, (T)resor, (P)otion
carte = [
    ['S', 'P', 'M', 'T'],
    ['S', 'S', 'M', 'S'],
    ['S', 'M', 'M', 'S'],
    ['J', 'S', 'S', 'S']
]

position_joueur = (3, 0)
`

const defi = `# (S)alle, (M)ur, (chiffre) clé, (D)oor, (T)resor, (P)otion
carte = [
    ['T', '1', 'M', '2'],
    ['S', 'P', 'M', 'S'],
    ['S', 'M', 'M', 'S'],
    ['S', 'S', 'S', 'S'],
    ['J', 'S', 'S', 'D']
]
`

export default function Page() {
    return <>
        <section>
            <h2>But final</h2>
            <p>
                Créer un jeu simple dans lequel le joueur peut se déplacer sur une grille et collecter des objets. Le joueur commencera sur une grille de 4x4 cases et pourra se déplacer vers le haut, le bas, la gauche ou la droite en entrant des commandes. Des objets seront placés sur la grille, et le joueur devra les collecter en se déplaçant sur les cases correspondantes. Le jeu se terminera lorsque le joueur aura collecté tous les objets.
            </p>
            <Image src={final} alt="" width="600" height="800"></Image>

            <h2>Étape 1</h2>
            <p>
                À l'aide de la carte suivante, créer une fonction permettant d'afficher la carte actuelle.
            </p>
            <CodeBlock language="python">
                {etape1}
            </CodeBlock>
            <Image src={etape1img} alt="" width="600" height="100"></Image>

            <h2>Étape 2</h2>
            <p>
                Enregistrer la position du joueur dans un tuple (ligne, colonne) tel que montré ci-dessous et demander au joueur la position à laquelle il souhaite se déplacer (nord, sud, est, ouest). Calculer la nouvelle position du joueur en fonction de son entrée, ne mettez pas à jour la position du joueur encore. Finalement, assurez-vous qu'une fois une position entrée, on redemande au joueur une nouvelle position encore.
            </p>
            <CodeBlock language="python">
                {etape2}
            </CodeBlock>
            <Image src={etape2img} alt="" width="700" height="300"></Image>

            <h2>Étape 3</h2>
            <p>
                Assurez-vous que la nouvelle position calculée est valide (le joueur ne peut pas sortir de la carte ou traverser des murs). Si la position est valide, mettez à jour la position du joueur. Sinon, affichez un message d'erreur et redemandez au joueur une nouvelle position.
            </p>
            <Image src={etape3img} alt="" width="700" height="400"></Image>

            <h2>Étape 4</h2>
            <p>
                Créer un dictionnaire pour suivre les objets collectés par le joueur et afficher l'inventaire à chaque fois. Lorsque le joueur se déplace sur une case contenant un objet (potion ou trésor), ajoutez cet objet au dictionnaire.
            </p>
            <Image src={final} alt="" width="600" height="800"></Image>

            <h2>Étape 5 (défi)</h2>
            <p>
                Modifier la carte afin de stocker des clés (1,2,...) ainsi qu'une porte (D). Stocker les clés dans un ensemble (set) et faire en sorte que le joueur ne puisse traverser la porte que s'il possède toutes les clés. Le jeu se termine lorsque le joueur a traversé la porte.
            </p>
            <CodeBlock language="python">
                {defi}
            </CodeBlock>
            <Image src={etape5img} alt="" width="600" height="600"></Image>
        </section>


    </>;
}