import IC from "@/components/InlineCode";
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à Python",
    description: "Introduction au langage de programmation Python.",
    keywords: ["Python", "introduction"],
    group: "notes",
}

export default function Page() {
    return <>
        <section>
            <h2>Langages de programmation</h2>
            <p>
                Tout comme il existe plusieurs langues parlées à travers le monde, il existe également 
                plusieurs langages de programmation. Similairement, chaque langage de programmation a sa
                propre syntaxe, ses propres règles et ses propres particularités et avantages/désavantages.
                Malgré tout, la plupart des langages de programmation ont des concepts de base similaires, qui
                feront qu'une fois que vous avez appris un langage de programmation, il sera plus facile d'apprendre
                un autre. Présentement, parmis les langages de programmation les plus populaires ont peut compter: 
                Python, JavaScript, Java, C et C++.
            </p>
        </section>

        <section>
            <h2>Python</h2>
            <p>
                Dans ce cours, nous utiliserons le langage de programmation Python. Python est non seulement
                l'un des langages de programmation les plus populaires, mais il est également facile à apprendre
                et l'un des plus utilisés dans les domaines de l'intelligence artificielle et de l'analyse de données.
                De plus, Python est un langage de programmation interprété, ce qui signifie que vous n'avez pas besoin
                de compiler votre code avant de l'exécuter. Cela rend Python très pratique puisque vous pouvez exécuter
                votre code ligne par ligne pour voir les résultats intermédiaires.
            </p>
        </section>

        <section>
            <h2>Penser de façon "programmatique"</h2>
            <p>
                Lorsque vous apprenez à programmer, vous devrez également apprendre à penser de façon "programmatique". 
                Cela signifie que vous apprenez à résoudre des problèmes de façon structurée, en décomposant
                un problème complexe en plusieurs problèmes plus petits et plus faciles à résoudre. Vous apprenez
                également à décomposer ces problèmes en étapes plus petites et plus simples, jusqu'à ce que vous
                avez un liste d'instructions claires et précises que vous pouvez donner à un ordinateur pour résoudre.
            </p>

            <p>
                À titre d'exemple, regarder le court programme Python ci-dessous. 
                Ce programme demande à l'utilisateur son année de naissance, 
                puis calcule son âge et affiche à l'écran s'il est majeur ou non. Vous pouvez 
                exécuter ce programme directement dans cette page en cliquant sur le bouton 
                "Exécuter" qui ressemble à un symbole "Play" ci-dessous.
            </p>

            <iframe src="https://trinket.io/embed/python/5d92c520ff" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

            <p>
                Ne paniquez pas, il est normal que ce programme vous semble complexe pour l'instant et que vous
                ne compreniez pas qu'est-ce qui se passe! Au fur et à mesure de ce cours, nous apprendrons toutes
                les notions nécessaires pour comprendre ce programme et écrire des programmes plus complexes. Si nous
                décomposons ce programme ligne par ligne, voici ce qu'il fait:
            </p>

            <ul>
                <li><IC>Ligne 1</IC> importe un module qui nous permettra d'avoir des informations à propos du temps.</li>
                <li><IC>Ligne 3</IC> stocke l'année courante avec le nom <IC>annee_courante</IC></li>
                <li><IC>Ligne 4</IC> demande à l'usager son année de naissance et la stocke avec le nom <IC>annee_naissance</IC></li>
                <li><IC>Ligne 6</IC> calcul l'âge de l'usager</li>
                <li><IC>Ligne 8 à 11</IC> vérifient si l'âge de l'usager est supérieur ou égal à 18 et affiche à l'écran</li>
            </ul>
            
            <p>
            Si vous n'êtes pas habitué à écrire du code informatique, il peut vous falloir un certain temps pour adapter votre esprit
            à penser de façon "programmatique". C'est tout à fait normal! La programmation est une compétence qui s'apprend avec la pratique.
            </p>
        </section>
    </>;
}
