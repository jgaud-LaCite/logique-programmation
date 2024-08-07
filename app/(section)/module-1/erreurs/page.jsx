import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Erreurs",
    description: "Erreur d'exécution et d'interprétation.",
    keywords: ["erreur", "exécution"],
    group: "notes",
}

export const multiLineError =
`print("Bonjour
tout
le
monde!")`

export const error =
`File ".../labo0.py", line 1
print('Bonjour 
      ^
SyntaxError: unterminated string literal (detected at line 1)
`

export default function Page() {
    return <>
        <section>
            <p>
                En programmation, il est très fréquent de rencontrer des erreurs, il est donc important de vous familiariser avec celles-ci
                dès le début. Par exemple, essayez d&apos;exécuter le code suivant:
            </p>
            <CodeBlock language="python">
                {multiLineError}
            </CodeBlock>
            <p>
                Vous devriez obtenir une erreur semblable à celle-ci:
            </p>
            <CodeBlock language="Stack Trace">
                {error}
            </CodeBlock>
            <p>
                Bienvenue à votre première erreur, ne vous inquiétez pas, vous allez en voir beaucoup d&apos;autres! 
                Cette erreur contient beaucoup d&apos;informations utiles qui nous aide à comprendre ce qui s&apos;est passé.
                Entre autre, la première ligne nous indique le fichier ainsi que la ligne spécifique où l&apos;erreur s&apos;est produite.
                Ensuite, la deuxième et troisième ligne nous indique où dans la ligne l&apos;erreur s&apos;est produite. Dernièrement, 
                la quatrième ligne nous indique le type d&apos;erreur qui s&apos;est produite. Ici, nous avons une erreur de syntaxe, c&apos;est-à-dire que le code
                n&apos;est pas écrit correctement.
            </p>
            <p>
                Effectivement, bien que dans d&apos;autre language vous pouvez écrire votre code sur plusieurs lignes sans 
                changer votre code, en Python, vous devez généralement terminer votre chaîne de caractères sur la même ligne ou bien 
                alternativement utiliser des triples guillemets.
            </p>
        </section>
        
    </>;
}
