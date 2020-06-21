declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * An element as described in a DTD using the ELEMENT construct.
                     * This is essential the description of a tag. It describes the
                     * type, content model, attributes, attribute types etc. It is used
                     * to correctly parse a document by the Parser.
                     * @see DTD
                     * @see AttributeList
                     * @author Arthur van Hoff
                     */
                    // @ts-ignore
                    class Element extends java.lang.Object implements javax.swing.text.html.parser.DTDConstants, java.io.Serializable {
                        // @ts-ignore
                        public index: number /*int*/
                        // @ts-ignore
                        public name: java.lang.String | string
                        // @ts-ignore
                        public oStart: boolean
                        // @ts-ignore
                        public oEnd: boolean
                        // @ts-ignore
                        public inclusions: java.util.BitSet
                        // @ts-ignore
                        public exclusions: java.util.BitSet
                        // @ts-ignore
                        public type: number /*int*/
                        // @ts-ignore
                        public content: javax.swing.text.html.parser.ContentModel
                        // @ts-ignore
                        public atts: javax.swing.text.html.parser.AttributeList
                        /**
                         * A field to store user data. Mostly used to store
                         * style sheets.
                         */
                        // @ts-ignore
                        public data: java.lang.Object | any
                        /**
                         * Get the name of the element.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Return true if the start tag can be omitted.
                         */
                        // @ts-ignore
                        public omitStart(): boolean
                        /**
                         * Return true if the end tag can be omitted.
                         */
                        // @ts-ignore
                        public omitEnd(): boolean
                        /**
                         * Get type.
                         */
                        // @ts-ignore
                        public getType(): number /*int*/
                        /**
                         * Get content model
                         */
                        // @ts-ignore
                        public getContent(): javax.swing.text.html.parser.ContentModel
                        /**
                         * Get the attributes.
                         */
                        // @ts-ignore
                        public getAttributes(): javax.swing.text.html.parser.AttributeList
                        /**
                         * Get index.
                         */
                        // @ts-ignore
                        public getIndex(): number /*int*/
                        /**
                         * Check if empty
                         */
                        // @ts-ignore
                        public isEmpty(): boolean
                        /**
                         * Convert to a string.
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Get an attribute by name.
                         */
                        // @ts-ignore
                        public getAttribute(name: java.lang.String | string): javax.swing.text.html.parser.AttributeList
                        /**
                         * Get an attribute by value.
                         */
                        // @ts-ignore
                        public getAttributeByValue(name: java.lang.String | string): javax.swing.text.html.parser.AttributeList
                        // @ts-ignore
                        public static name2type(nm: java.lang.String | string): number /*int*/
                    }
                }
            }
        }
    }
}
