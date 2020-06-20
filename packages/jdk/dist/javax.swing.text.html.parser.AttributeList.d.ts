declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * This class defines the attributes of an SGML element
                     * as described in a DTD using the ATTLIST construct.
                     * An AttributeList can be obtained from the Element
                     * class using the getAttributes() method.
                     * <p>
                     * It is actually an element in a linked list. Use the
                     * getNext() method repeatedly to enumerate all the attributes
                     * of an element.
                     * @see Element
                     * @author Arthur Van Hoff
                     */
                    // @ts-ignore
                    class AttributeList extends java.lang.Object implements javax.swing.text.html.parser.DTDConstants, java.io.Serializable {
                        /**
                         * Create an attribute list element.
                         */
                        // @ts-ignore
                        constructor(name: string)
                        /**
                         * Create an attribute list element.
                         */
                        // @ts-ignore
                        constructor(name: string, type: number /*int*/, modifier: number /*int*/, value: string, values: java.util.Vector<any>, next: javax.swing.text.html.parser.AttributeList)
                        // @ts-ignore
                        name: string
                        // @ts-ignore
                        type: number /*int*/
                        // @ts-ignore
                        values: java.util.Vector<any>
                        // @ts-ignore
                        modifier: number /*int*/
                        // @ts-ignore
                        value: string
                        // @ts-ignore
                        next: javax.swing.text.html.parser.AttributeList
                        /**
                         * @return attribute name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * @return attribute type
                         * @see DTDConstants
                         */
                        // @ts-ignore
                        getType(): int
                        /**
                         * @return attribute modifier
                         * @see DTDConstants
                         */
                        // @ts-ignore
                        getModifier(): int
                        /**
                         * @return possible attribute values
                         */
                        // @ts-ignore
                        getValues(): java.util.Enumeration<?>
                        /**
                         * @return default attribute value
                         */
                        // @ts-ignore
                        getValue(): java.lang.String
                        /**
                         * @return the next attribute in the list
                         */
                        // @ts-ignore
                        getNext(): javax.swing.text.html.parser.AttributeList
                        /**
                         * @return string representation
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        name2type(nm: string): int
                        // @ts-ignore
                        type2name(tp: number /*int*/): java.lang.String
                    }
                }
            }
        }
    }
}
