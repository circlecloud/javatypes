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
                        breaksFlow(): boolean
                        // @ts-ignore
                        isPreformatted(): boolean
                        // @ts-ignore
                        getElement(): javax.swing.text.html.parser.Element
                        // @ts-ignore
                        getHTMLTag(): javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        fictional(): boolean
                    }
                }
            }
        }
    }
}
