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
                        index: number /*int*/
                        // @ts-ignore
                        name: string
                        // @ts-ignore
                        oStart: boolean
                        // @ts-ignore
                        oEnd: boolean
                        // @ts-ignore
                        inclusions: java.util.BitSet
                        // @ts-ignore
                        exclusions: java.util.BitSet
                        // @ts-ignore
                        type: number /*int*/
                        // @ts-ignore
                        content: javax.swing.text.html.parser.ContentModel
                        // @ts-ignore
                        atts: javax.swing.text.html.parser.AttributeList
                        /**
                         * A field to store user data. Mostly used to store
                         * style sheets.
                         */
                        // @ts-ignore
                        data: any
                        /**
                         * Get the name of the element.
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Return true if the start tag can be omitted.
                         */
                        // @ts-ignore
                        omitStart(): boolean
                        /**
                         * Return true if the end tag can be omitted.
                         */
                        // @ts-ignore
                        omitEnd(): boolean
                        /**
                         * Get type.
                         */
                        // @ts-ignore
                        getType(): int
                        /**
                         * Get content model
                         */
                        // @ts-ignore
                        getContent(): javax.swing.text.html.parser.ContentModel
                        /**
                         * Get the attributes.
                         */
                        // @ts-ignore
                        getAttributes(): javax.swing.text.html.parser.AttributeList
                        /**
                         * Get index.
                         */
                        // @ts-ignore
                        getIndex(): int
                        /**
                         * Check if empty
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Convert to a string.
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                        /**
                         * Get an attribute by name.
                         */
                        // @ts-ignore
                        getAttribute(name: string): javax.swing.text.html.parser.AttributeList
                        /**
                         * Get an attribute by value.
                         */
                        // @ts-ignore
                        getAttributeByValue(name: string): javax.swing.text.html.parser.AttributeList
                        // @ts-ignore
                        name2type(nm: string): int
                    }
                }
            }
        }
    }
}
