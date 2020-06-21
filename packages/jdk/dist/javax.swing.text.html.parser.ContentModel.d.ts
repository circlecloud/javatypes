declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * A representation of a content model. A content model is
                     * basically a restricted BNF expression. It is restricted in
                     * the sense that it must be deterministic. This means that you
                     * don't have to represent it as a finite state automaton.<p>
                     * See Annex H on page 556 of the SGML handbook for more information.
                     * @author Arthur van Hoff
                     */
                    // @ts-ignore
                    class ContentModel extends java.lang.Object implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a content model for an element.
                         */
                        // @ts-ignore
                        constructor(content: javax.swing.text.html.parser.Element)
                        /**
                         * Create a content model of a particular type.
                         */
                        // @ts-ignore
                        constructor(type: number /*int*/, content: javax.swing.text.html.parser.ContentModel)
                        /**
                         * Create a content model of a particular type.
                         */
                        // @ts-ignore
                        constructor(type: number /*int*/, content: java.lang.Object | any, next: javax.swing.text.html.parser.ContentModel)
                        /**
                         * Type. Either '*', '?', '+', ',', '|', '&amp;'.
                         */
                        // @ts-ignore
                        public type: number /*int*/
                        /**
                         * The content. Either an Element or a ContentModel.
                         */
                        // @ts-ignore
                        public content: java.lang.Object | any
                        /**
                         * The next content model (in a ',', '|' or '&amp;' expression).
                         */
                        // @ts-ignore
                        public next: javax.swing.text.html.parser.ContentModel
                        /**
                         * Return true if the content model could
                         * match an empty input stream.
                         */
                        // @ts-ignore
                        public empty(): boolean
                        /**
                         * Update elemVec with the list of elements that are
                         * part of the this contentModel.
                         */
                        // @ts-ignore
                        public getElements(elemVec: java.util.Vector<javax.swing.text.html.parser.Element>): void
                        /**
                         * Return true if the token could potentially be the
                         * first token in the input stream.
                         */
                        // @ts-ignore
                        public first(token: java.lang.Object | any): boolean
                        /**
                         * Return the element that must be next.
                         */
                        // @ts-ignore
                        public first(): javax.swing.text.html.parser.Element
                        /**
                         * Convert to a string.
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
