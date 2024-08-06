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
                feront qu&apos;une fois que vous avez appris un langage de programmation, il sera plus facile d&apos;apprendre
                un autre. Présentement, parmis les langages de programmation les plus populaires ont peut compter: 
                Python, JavaScript, Java, C et C++.
            </p>
        </section>

        <section>
            <h2>Python</h2>
            <p>
                Dans ce cours, nous utiliserons le langage de programmation Python. Python est non seulement
                l&apos;un des langages de programmation les plus populaires, mais il est également facile à apprendre
                et l&apos;un des plus utilisés dans les domaines de l&apos;intelligence artificielle et de l&apos;analyse de données.
                De plus, Python est un langage de programmation interprété, ce qui signifie que vous n&apos;avez pas besoin
                de compiler votre code avant de l&apos;exécuter. Cela rend Python très pratique puisque vous pouvez exécuter
                votre code ligne par ligne pour voir les résultats intermédiaires.
            </p>
        </section>

        <section>
            <h2>Penser de façon "programmatique"</h2>
            <p>
                Lorsque vous apprenez à programmer, vous devrez également apprendre à penser de façon "programmatique". 
                Cela signifie que vous apprenez à résoudre des problèmes de façon structurée, en décomposant
                un problème complexe en plusieurs problèmes plus petits et plus faciles à résoudre. Vous apprenez
                également à décomposer ces problèmes en étapes plus petites et plus simples, jusqu&apos;à ce que vous
                avez un liste d&apos;instructions claires et précises que vous pouvez donner à un ordinateur pour résoudre.
            </p>

            <p>
                À titre d&apos;exemple, regarder le court programme Python ci-dessous. 
                Ce programme demande à l&apos;utilisateur son année de naissance, 
                puis calcule son âge et affiche à l&apos;écran s&apos;il est majeur ou non. Vous pouvez 
                exécuter ce programme directement dans cette page en cliquant sur le bouton 
                "Exécuter" qui ressemble à un symbole "Play" ci-dessous.
            </p>

            <iframe src="https://trinket.io/embed/python/5d92c520ff" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

            <p>
                Ne paniquez pas, il est normal que ce programme vous semble complexe pour l&apos;instant et que vous
                ne compreniez pas qu&apos;est-ce qui se passe! Au fur et à mesure de ce cours, nous apprendrons toutes
                les notions nécessaires pour comprendre ce programme et écrire des programmes plus complexes. Si nous
                décomposons ce programme ligne par ligne, voici ce qu&apos;il fait:
            </p>

            <ul>
                <li><IC>Ligne 1</IC> importe un module qui nous permettra d&apos;avoir des informations à propos du temps.</li>
                <li><IC>Ligne 3</IC> stocke l&apos;année courante avec le nom <IC>annee_courante</IC></li>
                <li><IC>Ligne 4</IC> demande à l&apos;usager son année de naissance et la stocke avec le nom <IC>annee_naissance</IC></li>
                <li><IC>Ligne 6</IC> calcul l&apos;âge de l&apos;usager</li>
                <li><IC>Ligne 8 à 11</IC> vérifient si l&apos;âge de l&apos;usager est supérieur ou égal à 18 et affiche à l&apos;écran</li>
            </ul>
            
            <p>
            Si vous n&apos;êtes pas habitué à écrire du code informatique, il peut vous falloir un certain temps pour adapter votre esprit
            à penser de façon "programmatique". C&apos;est tout à fait normal! La programmation est une compétence qui s&apos;apprend avec la pratique.
            </p>
        </section>
    </>;
}
