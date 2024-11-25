import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Bibliothèque Pandas",
    description: "Usage de la bibliothèque Pandas en Python",
    keywords: ["pandas", "bibliothèque", "Python"],
    group: "notes",
}

const pipInstall = `python -m pip install pandas`

const importPandas = `import pandas as pd`

const createDataframe = `import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 40],
    'City': ['Paris', 'London', 'New York', 'Berlin']
}

df = pd.Dataframe(data)

print(df)`

const columnSelection = `print(df['Name']) # Sélectionne la colonne 'Name'
df['Name'].values # Retourne les valeurs de la colonne 'Name' sous forme d'une liste`

const readCsv = `import pandas as pd

df = pd.read_csv('data.csv')

print(df)`


export default function Page(){
    return <>
        <p>
            La bibliothèque Pandas est une bibliothèque qui fournit des structures de données de haute performance et faciles à utiliser, ainsi que des outils de manipulation de données pour Python. Elle est particulièrement utile pour le traitement de données et l'analyse de données en Python. Puisque Pandas n'est pas une bibliothèque standard de Python, il faut l'installer avant de pouvoir l'utiliser.
        </p>
        <CodeBlock language="shell">
            {pipInstall}
        </CodeBlock>

        <h2>Importation de Pandas</h2>
        <p>
            Pour importer Pandas dans votre script Python, vous pouvez utiliser la commande suivante:
        </p>
        <CodeBlock language="python">
            {importPandas}
        </CodeBlock>
        <p>
            Ici on importe pandas avec l'alias <IC>pd</IC>, qui est un alias couramment utilisé pour Pandas, mais c'est également possible de l'importer sans alias.
        </p>

        <h2>Dataframe</h2>
        <p>
            L'objet principal de Pandas est le <IC>Dataframe</IC>, qui est une structure de données bidimensionnelle avec des colonnes de types différents. Vous pouvez voir cela comme une table de base de données ou une feuille de calcul Excel. En fait, Pandas nous permet de faire plusieurs opérations similaires à celles que l'on ferait sur une base de données sur un Dataframe. Vous explorerez davantage les Dataframes dans vos cours futurs. Un Dataframe peut être créé à partir de diverses sources de données telles que des listes, des dictionnaires, des fichiers CSV, etc.
        </p>

        <h3>Création d'un Dataframe</h3>
        <p>
            Voici un exemple simple de création d'un Dataframe à partir d'un dictionnaire:
        </p>
        <CodeBlock language="python">
            {createDataframe}
        </CodeBlock>
        <p>
            Avec un dictionnaire, les clés du dictionnaire deviennent les noms des colonnes du Dataframe, et les valeurs du dictionnaire deviennent les données dans les colonnes. Vous pouvez également spécifier l'ordre des colonnes en passant une liste de noms de colonnes à la création du Dataframe.
        </p>

        <h3>Lecture d'un Dataframe</h3>
        <p>
            Bien sûr, il est encore plus courant de lire des données à partir de fichiers CSV, Excel, SQL, etc. dans un Dataframe. La librairie Pandas fournit des fonctions pour lire des données à partir de ces sources. Par exemple, pour lire un fichier CSV, vous pouvez utiliser la fonction <IC>read_csv</IC>:
        </p>
        <CodeBlock language="python">
            {readCsv}
        </CodeBlock>

        <h3>Manipulation des Dataframes</h3>
        <p>
            Une fois que vous avez créé un Dataframe, vous pouvez effectuer diverses opérations de manipulation de données sur celui-ci, telles que la sélection de lignes et de colonnes, le filtrage, le tri, etc. Vous explorerez davantage ces opérations dans vos cours futurs. Nous verrons simplement les opérations de base, comme sélectionner une colonne ou une ligne spécifique.
        </p>
        
        <h4>Sélection d'une colonne</h4>
        <p>
            Pour sélectionner une colonne spécifique d'un Dataframe, la syntaxe est similaire à la sélection d'une clé dans un dictionnaire, on utilise le nom de la colonne entre crochets. On peut également transformer une colonne d'un Dataframe en une liste en utilisant <IC>.values</IC>:
        </p>
        <CodeBlock language="python">
            {columnSelection}
        </CodeBlock>

        <h4>Sélection d'une ligne</h4>
        <p>
            Pour sélectionner une ligne spécifique d'un Dataframe, on utilise la méthode <IC>iloc</IC> avec l'index de la ligne:
        </p>
        <CodeBlock language="python">
            {`print(df.iloc[0]) # Sélectionne la première ligne`}
        </CodeBlock>

        <h4>Filtrage</h4>
        <p>
            On peut également filtrer les lignes d'un Dataframe en fonction de certaines conditions. Par exemple, pour sélectionner les lignes où l'âge est supérieur à 30:
        </p>
        <CodeBlock language="python">
            {`filtered_df = df[df['Age'] > 30] # Sélectionne les lignes où l'âge est supérieur à 30`}
        </CodeBlock>

        <p>
            Nous pourrions certainement passer des heures à explorer toutes les fonctionnalités de Pandas, mais pour l'instant, nous nous contenterons de ces bases. Vous en apprendrez davantage sur Pandas dans vos cours futurs puisque c'est une bibliothèque très utilisée en analyse de données.
        </p>
    </>
}