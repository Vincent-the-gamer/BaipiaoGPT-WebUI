 // @ts-ignore
 import MarkdownIt from "markdown-it"
 import hljs from "highlight.js"

export default function useMarkdownIt(){
    const style = `white-space: pre-wrap; position: relative;`

    const md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
        xhtmlOut: true,
        typographer: true,
        highlight: function (str: string, lang: string) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs" style='+ style +'><code>' +
                hljs.highlight(lang, str, true).value +
                "</code></pre>"
              )
            } catch (__) { }
          }
      
          return (
            '<pre class="hljs" style="'+ style +'"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
          )
        },
      })
    return md
}