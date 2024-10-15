/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Introduction aux structures répétitives",
    description: "Introduction aux structures répétitives (itératives) en programmation",
    keywords: ["boucle", "itération", "itérative", "répétition", "répétitive", "for", "while", "do while"],
    group: "notes",
}

export default function Page(){
    return <>
        <h2>Description</h2>
        <p>
            Les structures de contrôles vues jusqu'à présent permettent de définir des conditions pour exécuter un bloc de code, elle ne sont pas suffisantes pour exprimer toutes les contraintes d'un programme. En effet, si on voulait calculer la moyenne de vingt étudiants d’un groupe programmeur en se basant sur la note de trois évaluations on devrait :
        </p>
        <ol>
            <li>Demander le nom de l’étudiant</li>
            <li>Demander le prénom de l’étudiant</li>
            <li>Demander la note de la première évaluation</li>
            <li>Demander la note de la deuxième évaluation</li>
            <li>Demander la note de la troisième évaluation</li>
            <li>Saisir la note des trois évaluations</li>
            <li>Calculer la moyenne</li>
            <li>Afficher la moyenne</li>
        </ol>
        <p>
            On aura à réécrire ces instructions 20 fois (pour chaque étudiant). Cela pose plusieurs problèmes, entre autre car la réécriture de code pose un problème de maintenance, de lisibilité et de complexité. Pour résoudre ce problème, nous avons besoin d'une structure de contrôle qui permet de répéter un bloc de code plusieurs fois. Ce sont les structures répétitives, aussi appelées structures itératives ou boucles.
        </p>

        <h2>Les structures répétitives</h2>
        <p>
            Les structures répétitives nous permettent de répéter une action ou un groupe d'actions (bloc de code) plusieurs fois. Cette répétion doit être <strong>finie</strong>, c'est-à-dire qu'il doit y avoir une condition qui permet de sortir de la boucle sinon elle sera infinie. Cette condition est contrôlée par une expression booléenne, similaire à celles des structures conditionnelles. En Python, il existe deux types de structures répétitives :
        </p>
        <ul>
            <li>La boucle <strong>for</strong></li>
            <li>La boucle <strong>while</strong></li>
        </ul>
        <p>
            Il existe aussi une troisième structure répétitive définie dans la plupart des languages de programmation, la boucle <strong>do while</strong>, mais elle n'existe pas en Python. Elle peut cepandant être simulée en utilisant une boucle <strong>while</strong> comme nous allons le voir dans ce module.
        </p>
    </>
}