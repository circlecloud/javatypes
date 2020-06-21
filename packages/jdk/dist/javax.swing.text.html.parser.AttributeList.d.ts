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
                        constructor(name: java.lang.String | string)
                        /**
                         * Create an attribute list element.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, type: number /*int*/, modifier: number /*int*/, value: java.lang.String | string, values: java.util.Vector<any>, next: javax.swing.text.html.parser.AttributeList)
                        // @ts-ignore
                        public name: java.lang.String | string
                        // @ts-ignore
                        public type: number /*int*/
                        // @ts-ignore
                        public values: java.util.Vector<any>
                        // @ts-ignore
                        public modifier: number /*int*/
                        // @ts-ignore
                        public value: java.lang.String | string
                        // @ts-ignore
                        public next: javax.swing.text.html.parser.AttributeList
                        /**
                         * @return attribute name
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * @return attribute type
                         * @see DTDConstants
                         */
                        // @ts-ignore
                        public getType(): number /*int*/
                        /**
                         * @return attribute modifier
                         * @see DTDConstants
                         */
                        // @ts-ignore
                        public getModifier(): number /*int*/
                        /**
                         * @return possible attribute values
                         */
                        // @ts-ignore
                        public getValues(): java.util.Enumeration<any>
                        /**
                         * @return default attribute value
                         */
                        // @ts-ignore
                        public getValue(): string
                        /**
                         * @return the next attribute in the list
                         */
                        // @ts-ignore
                        public getNext(): javax.swing.text.html.parser.AttributeList
                        /**
                         * @return string representation
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public static name2type(nm: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public static type2name(tp: number /*int*/): string
                    }
                }
            }
        }
    }
}
