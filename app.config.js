import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'

const appConfig = {
    domain: 'https://jgaud-lacite.github.io/logique-programmation/',
    title: 'Logique de Programmation',
    sectionName: 'module',
    code: {
        languages: {
            'html': { tag: 'HTML', renderer: html },
            'css': { tag: 'CSS', renderer: css },
            'js': { tag: 'Javascript', renderer: js },
            'csharp': { tag: 'C#', renderer: csharp },
            'python': { tag: 'Python', renderer: python },
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
