declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * Responsible for starting up a new DocumentParser
                     * each time its parse method is invoked. Stores a
                     * reference to the dtd.
                     * @author Sunita Mani
                     */
                    // @ts-ignore
                    class ParserDelegator extends javax.swing.text.html.HTMLEditorKit.Parser implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static setDefaultDTD(): void
                        // @ts-ignore
                        static createDTD(dtd: javax.swing.text.html.parser.DTD, name: java.lang.String | string): javax.swing.text.html.parser.DTD
                        // @ts-ignore
                        public parse(r: java.io.Reader, cb: javax.swing.text.html.HTMLEditorKit.ParserCallback, ignoreCharSet: boolean): void
                    }
                }
            }
        }
    }
}
