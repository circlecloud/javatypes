declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * A generic HTML TagElement class. The methods define how white
                     * space is interpreted around the tag.
                     * @author Sunita Mani
                     */
                    // @ts-ignore
                    class TagElement extends java.lang.Object {
                        // @ts-ignore
                        constructor(elem: javax.swing.text.html.parser.Element)
                        // @ts-ignore
                        constructor(elem: javax.swing.text.html.parser.Element, fictional: boolean)
                        // @ts-ignore
                        public breaksFlow(): boolean
                        // @ts-ignore
                        public isPreformatted(): boolean
                        // @ts-ignore
                        public getElement(): javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public getHTMLTag(): javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public fictional(): boolean
                    }
                }
            }
        }
    }
}
