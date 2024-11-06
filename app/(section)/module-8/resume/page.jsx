import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Résumé des structures de données",
    description: "Résumé des listes, tuples, dictionnaires et ensembles en Python",
    keywords: ["python", "data", "structures", "listes", "tuples", "dictionnaires", "ensembles"],
    group: "notes",
}


export default function Page(){
    return <>
        <p>
            Nous avons vu quatre structures de données intégrées en Python: les listes, les tuples, les dictionnaires et les ensembles. Chacune de ces structures a ses avantages et inconvénients, et est utilisée dans des situations différentes. Voici un résumé de chacune de ces structures de données pour vous aider à choisir la bonne structure pour votre application:
        </p>
        <table>
            <thead>
                <tr>
                    <th>Structure de données</th>
                    <th>Caractéristiques</th>
                    <th>Création</th>
                    <th>Accès</th>
                    <th>Ajout</th>
                    <th>Suppression</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Liste</td>
                    <td>Ordonné, éléments dupliqués</td>
                    <td><IC>[1, 2, 3]</IC></td>
                    <td>Par index: <IC>liste[0]</IC></td>
                    <td><IC>liste.append(4)</IC></td>
                    <td><IC>liste.remove(2)</IC></td>
                </tr>

                <tr>
                    <td>Tuple</td>
                    <td>Immuable, Ordonné</td>
                    <td><IC>(1, 2, 3)</IC></td>
                    <td>Par index: <IC>tuple[0]</IC></td>
                    <td>Non modifiable</td>
                    <td>Non modifiable</td>
                </tr>

                <tr>
                    <td>Dictionnaire</td>
                    <td>Associatif, non ordonné</td>
                    <td><IC>{"{ 'nom': 'John', 'age': 30 }"}</IC></td>
                    <td>Par clé: <IC>dictionnaire['nom']</IC></td>
                    <td><IC>dictionnaire['email'] = 'email@email.com'</IC></td>
                    <td><IC>del dictionnaire['age']</IC></td>
                </tr>

                <tr>
                    <td>Ensemble</td>
                    <td>Non ordonné, éléments uniques</td>
                    <td><IC>{'{1, 2, 3}'}</IC></td>
                    <td>Non indexé</td>
                    <td><IC>ensemble.add(4)</IC></td>
                    <td><IC>ensemble.remove(2)</IC></td>
                </tr>
            </tbody>
        </table>

        <p>
            Comme vous pouvez le voir, chaque structure de données a ses propres caractéristiques et avantages/inconvénients. En fonction de vos besoins, vous pouvez choisir la structure de données qui convient le mieux à votre application. Voici quelques exemples de cas d'utilisation pour chaque structure de données:
        </p>

        <ul>
            <li><strong>Liste:</strong> Une liste de tâches, un panier d'achats en ligne</li>
            <li><strong>Tuple:</strong> Coordonnées géographiques, jours de la semaine</li>
            <li><strong>Dictionnaire:</strong> Informations sur un utilisateur, données de configuration, un inventaire d'objets, un répertoire téléphonique</li>
            <li><strong>Ensemble:</strong> Liste de participants à un événement, mots uniques dans un texte, ingrédients d'une recette</li>
        </ul>
    </>
}