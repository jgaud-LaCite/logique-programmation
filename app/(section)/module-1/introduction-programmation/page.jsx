/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à la programmation",
    description: "Qu'est-ce que la programmation?",
    keywords: ["programmation", "algorithme"],
    group: "notes",
}

export default function Page() {
    return <>
        <section>
            <p>
                La programmation est notre moyen principal de communication avec l'ordinateur. Elle est similaire 
                à donner des instructions à une autre personne pas à pas, comme lorsque vous suivez les instructions d'une recette
                de cuisine. Par exemple, si vous deviez expliquer à une personne comment faire la lessive alors
                qu'elle ne l'a jamais fait de sa vie, vous l'expliqueriez probablement d'un façon similaire à celle-ci:
            </p>

            <ol>
                <li>Vérifier qu'il y a du linge à laver</li>
                <li>S'assurer que la machine à laver est vide</li>
                <li>Vérifier qu'il y a encore du détergent</li>
                <li>Ouvrir la porte de la machine à laver</li>
                <li>Placer le linge dans la machine</li>
                <li>Ajouter le détergent</li>
                <li>...</li>
            </ol>

            <p>
                Ces instructions sont essentiellement un "programme" qui permet de faire une tâche précise, ici
                de faire la lessive. Vous remarquerez que cest instructions sont très précises, allant jusqu'à spécifier de vérifier
                si du linge est déjà présent dans la machine avant de débuter. Bien qu'en tant qu'humain cette instruction
                peut nous sembler inutile, pour un ordinateur elle est essentielle. Effectivement, contrairement aux humains,
                les ordinateurs sont:
            </p>

            <ul>
                <li>Extrêmement bons à suivre une liste d'instructions avec un <strong>exactitude</strong> hors du commun.
                Produisant exactement le même résultat après chaque exécution.</li>
                <li>Extrêmement mauvais à être créatif et utiliser l'intuition afin déterminer comment faire une action.</li>
            </ul>

            <p>
                Ces particularités font que nous devrons être <strong>extrêmement</strong> précis lorsque nous allons
                programmer. Dans l'exemple ci-haut, quand nous avons dit:
            </p>

            <p>
                "Placer le linge dans la machine"
            </p>

            <p>
                Cette instruction est sûrement suffisante pour un être humain, mais un ordinateur ne sait
                pas qu'est-ce qu'est du linge, ni ce qu'est une machine à laver. Nous devrons donc être plus précis.
                En conclusion, lorsque nous programmerons nous devrons 
            </p>
            <ol>
                <li>Expliquer notre tâche dans une liste d'instructions qui permettront à l'ordinateur de comprendre ce que nous voulons faire.</li>
                <li>Être extrêmement précis.</li>
            </ol>

        </section>
    </>;
}
