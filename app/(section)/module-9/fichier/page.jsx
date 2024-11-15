import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */

export const metadata = {
    title: "Lecture et écriture de fichiers",
    description: "Lire et écrire des fichiers en Python",
    keywords: ["fichiers", "lecture", "écriture", "Python"],
    group: "notes",
}

const openFile = `data_file = open('file_name.txt', 'r')`

const readFile = `data = data_file.read()
print(data)
data_file.close()`

const fileContent = `Apple,1.00
Banana,0.50
Orange,1.20`

const readLine = `dico_prix = {} # On crée un dictionnaire pour stocker les prix des produits
data_file = open('sales.txt', 'r') # On ouvre le fichier en mode lecture

for line in data_file: # On lit le fichier ligne par ligne
    donnees = line.strip().split(',') # On sépare les valeurs par la virgule
    
    product = donnees[0]
    price = float(donnees[1])

    dico_prix[product] = price`

const writeToFile = `data_file = open('sales.txt', 'a') # On ouvre le fichier en mode ajout
data_file.write('Pineapple,2.00\\n') # On ajoute une ligne au fichier
data_file.write('Strawberry,1.50\\n') # On ajoute une autre ligne au fichier
data_file.close() # On ferme le fichier`

const jsonExample = `import json # On doit importer le module json
dico = {'nom': 'Alice', 'age': 25, 'ville': 'Paris'}

# Écriture en JSON
data_file = open('data.json', 'w')

json.dump(dico, data_file)

data_file.close()`

const jsonRead = `import json # On doit importer le module json

# Lecture en JSON
data_file = open('data.json', 'r')

dico = json.load(data_file)

print(dico)`

export default function Page(){
    return <>
        <p>
            En Python, il est possible de lire et d'écrire des fichiers. Cela peut être utile pour stocker des données, lire des fichiers de configuration, ou encore pour manipuler des fichiers texte.
        </p>
        <h2>Lecture de fichiers</h2>
        <p>
            Pour lire un fichier en Python, il faut d'abord ouvrir le fichier. 
        </p>
        <CodeBlock language="python">
            {openFile}
        </CodeBlock>
        <p>
            La fonction <IC>open</IC> prend en paramètre le nom du fichier à ouvrir et le mode d'ouverture. Le mode <IC>'r'</IC> signifie que le fichier est ouvert en mode lecture. Il est possible de spécifier d'autres modes d'ouverture, comme <IC>'w'</IC> pour écrire dans un fichier, ou <IC>'a'</IC> pour ajouter du contenu à un fichier existant.
        </p>
        <p>
            Une fois le fichier ouvert, il est possible de lire son contenu en utilisant la méthode <IC>read</IC> et de le fermé en utilisant la méthode <IC>close</IC> une fois que l'on a fini avec le fichier.
        </p>
        <CodeBlock language="python">
            {readFile}
        </CodeBlock>
        <p>
            À partir d'ici, on peut faire ce que l'on veut avec les données lues dans le fichier (contenu dans la variable <IC>data</IC> dans l'exemple ci-dessus). Pour cet exemple, disons que l'on ait le contenu ci-dessous stocké dans un fichier <IC>sales.txt</IC>:
        </p>
        <CodeBlock language="text">
            {fileContent}
        </CodeBlock>
        <p>
            En lisant le contenu du fichier, on pourrait ensuite lire le contenu du fichier ligne par ligne au lieu de tout lire en une seule fois à l'aide de la méthode <IC>readline</IC>. Ensuite, nous pourrions stocker les données dans une structure de données plus adaptée, comme une liste ou un dictionnaire, pour les manipuler plus facilement.
        </p>
        <CodeBlock language="python">
            {readLine}
        </CodeBlock>

        <h2>Écriture de fichiers</h2>
        <p>
            Pour écrire dans un fichier en Python, il faut ouvrir le fichier en mode écriture (<IC>'w'</IC>) si l'on veut remplacer le fichier s'il existe déjà, ou en mode ajout (<IC>'a'</IC>) si l'on veut ajouter du contenu à un fichier existant. Une fois le fichier ouvert, on peut écrire dans le fichier en utilisant la méthode <IC>write</IC>. Il est important de fermer le fichier une fois que l'on a fini d'écrire à l'intérieur.
        </p>
        <p>
            Par exemple, si l'on veut rajouter une ligne à notre fichier <IC>sales.txt</IC> précédent:
        </p>
        <CodeBlock language="python">
            {writeToFile}
        </CodeBlock>

        <h2>Écriture et lecture en JSON</h2>
        <p>
            Bien que les fichiers texte soient très utiles pour stocker des données, ils ne sont pas toujours le format le plus adapté pour stocker des données structurées, puisque nous devrons souvent écrire du code pour sérialiser et désérialiser les données, c'est-à-dire les convertir en une forme qui peut être stockée dans un fichier et les reconvertir en données utilisables par notre programme. Plusieurs libraries existent pour nous aider à faire cela, comme le module <IC>json</IC> en Python.
        </p>
        <p>
            JSON est un format de données très populaire pour échanger des données entre différentes applications. 
            Par exemple, on peut stocker un dictionnaire Python très facilement en JSON et ensuite le relire sans avoir à se soucier de la sérialisation des données. En Python, il est possible de lire et d'écrire des données au format JSON en utilisant le module <IC>json</IC>.
        </p>
        <p>
            Par exemple, pour écrire un dictionnaire en JSON:
        </p>
        <CodeBlock language="python">
            {jsonExample}
        </CodeBlock>

        <p>
            On peut également lire nos données depuis notre fichier et les remettre dans un dictionnaire de la manière suivante:
        </p>
        <CodeBlock language="python">
            {jsonRead}
        </CodeBlock>
    </>
}