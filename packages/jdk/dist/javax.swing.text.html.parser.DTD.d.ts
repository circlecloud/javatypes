declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * The representation of an SGML DTD.  DTD describes a document
                     * syntax and is used in parsing of HTML documents.  It contains
                     * a list of elements and their attributes as well as a list of
                     * entities defined in the DTD.
                     * @see Element
                     * @see AttributeList
                     * @see ContentModel
                     * @see Parser
                     * @author Arthur van Hoff
                     */
                    // @ts-ignore
                    class DTD extends java.lang.Object implements javax.swing.text.html.parser.DTDConstants {
                        /**
                         * Creates a new DTD with the specified name.
                         * @param name the name, as a <code>String</code> of the new DTD
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        // @ts-ignore
                        public name: java.lang.String | string
                        // @ts-ignore
                        public elements: java.util.Vector<javax.swing.text.html.parser.Element>
                        // @ts-ignore
                        public elementHash: java.util.Hashtable<java.lang.String | string, javax.swing.text.html.parser.Element>
                        // @ts-ignore
                        public entityHash: java.util.Hashtable<java.lang.Object | any, javax.swing.text.html.parser.Entity>
                        // @ts-ignore
                        public readonly pcdata: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly html: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly meta: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly base: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly isindex: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly head: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly body: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly applet: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly param: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly p: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public readonly title: javax.swing.text.html.parser.Element
                        // @ts-ignore
                        public static readonly FILE_VERSION: number /*int*/
                        /**
                         * Gets the name of the DTD.
                         * @return the name of the DTD
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Gets an entity by name.
                         * @return the <code>Entity</code> corresponding to the
                         *    <code>name</code> <code>String</code>
                         */
                        // @ts-ignore
                        public getEntity(name: java.lang.String | string): javax.swing.text.html.parser.Entity
                        /**
                         * Gets a character entity.
                         * @return the <code>Entity</code> corresponding to the
                         *     <code>ch</code> character
                         */
                        // @ts-ignore
                        public getEntity(ch: number /*int*/): javax.swing.text.html.parser.Entity
                        /**
                         * Gets an element by name. A new element is
                         * created if the element doesn't exist.
                         * @param name the requested <code>String</code>
                         * @return the <code>Element</code> corresponding to
                         *    <code>name</code>, which may be newly created
                         */
                        // @ts-ignore
                        public getElement(name: java.lang.String | string): javax.swing.text.html.parser.Element
                        /**
                         * Gets an element by index.
                         * @param index the requested index
                         * @return the <code>Element</code> corresponding to
                         *    <code>index</code>
                         */
                        // @ts-ignore
                        public getElement(index: number /*int*/): javax.swing.text.html.parser.Element
                        /**
                         * Defines an entity.  If the <code>Entity</code> specified
                         * by <code>name</code>, <code>type</code>, and <code>data</code>
                         * exists, it is returned; otherwise a new <code>Entity</code>
                         * is created and is returned.
                         * @param name the name of the <code>Entity</code> as a <code>String</code>
                         * @param type the type of the <code>Entity</code>
                         * @param data the <code>Entity</code>'s data
                         * @return the <code>Entity</code> requested or a new <code>Entity</code>
                         *    if not found
                         */
                        // @ts-ignore
                        public defineEntity(name: java.lang.String | string, type: number /*int*/, data: string[]): javax.swing.text.html.parser.Entity
                        /**
                         * Returns the <code>Element</code> which matches the
                         * specified parameters.  If one doesn't exist, a new
                         * one is created and returned.
                         * @param name the name of the <code>Element</code>
                         * @param type the type of the <code>Element</code>
                         * @param omitStart <code>true</code> if start should be omitted
                         * @param omitEnd  <code>true</code> if end should be omitted
                         * @param content  the <code>ContentModel</code>
                         * @param atts the <code>AttributeList</code> specifying the
                         *     <code>Element</code>
                         * @return the <code>Element</code> specified
                         */
                        // @ts-ignore
                        public defineElement(name: java.lang.String | string, type: number /*int*/, omitStart: boolean, omitEnd: boolean, content: javax.swing.text.html.parser.ContentModel, exclusions: java.util.BitSet, inclusions: java.util.BitSet, atts: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.Element
                        /**
                         * Defines attributes for an {@code Element}.
                         * @param name the name of the <code>Element</code>
                         * @param atts the <code>AttributeList</code> specifying the
                         *     <code>Element</code>
                         */
                        // @ts-ignore
                        public defineAttributes(name: java.lang.String | string, atts: javax.swing.text.html.parser.AttributeList): void
                        /**
                         * Creates and returns a character <code>Entity</code>.
                         * @param name the entity's name
                         * @return the new character <code>Entity</code>
                         */
                        // @ts-ignore
                        public defEntity(name: java.lang.String | string, type: number /*int*/, ch: number /*int*/): javax.swing.text.html.parser.Entity
                        /**
                         * Creates and returns an <code>Entity</code>.
                         * @param name the entity's name
                         * @return the new <code>Entity</code>
                         */
                        // @ts-ignore
                        defEntity(name: java.lang.String | string, type: number /*int*/, str: java.lang.String | string): javax.swing.text.html.parser.Entity
                        /**
                         * Creates and returns an <code>Element</code>.
                         * @param name the element's name
                         * @return the new <code>Element</code>
                         */
                        // @ts-ignore
                        defElement(name: java.lang.String | string, type: number /*int*/, omitStart: boolean, omitEnd: boolean, content: javax.swing.text.html.parser.ContentModel, exclusions: java.lang.String[] | string[], inclusions: java.lang.String[] | string[], atts: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.Element
                        /**
                         * Creates and returns an <code>AttributeList</code>.
                         * @param name the attribute list's name
                         * @return the new <code>AttributeList</code>
                         */
                        // @ts-ignore
                        defAttributeList(name: java.lang.String | string, type: number /*int*/, modifier: number /*int*/, value: java.lang.String | string, values: java.lang.String | string, atts: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.AttributeList
                        /**
                         * Creates and returns a new content model.
                         * @param type the type of the new content model
                         * @return the new <code>ContentModel</code>
                         */
                        // @ts-ignore
                        defContentModel(type: number /*int*/, obj: java.lang.Object | any, next: javax.swing.text.html.parser.ContentModel): javax.swing.text.html.parser.ContentModel
                        /**
                         * Returns a string representation of this DTD.
                         * @return the string representation of this DTD
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public static putDTDHash(name: java.lang.String | string, dtd: javax.swing.text.html.parser.DTD): void
                        /**
                         * Returns a DTD with the specified <code>name</code>.  If
                         * a DTD with that name doesn't exist, one is created
                         * and returned.  Any uppercase characters in the name
                         * are converted to lowercase.
                         * @param name the name of the DTD
                         * @return the DTD which corresponds to <code>name</code>
                         */
                        // @ts-ignore
                        public static getDTD(name: java.lang.String | string): javax.swing.text.html.parser.DTD
                        /**
                         * Recreates a DTD from an archived format.
                         * @param in  the <code>DataInputStream</code> to read from
                         */
                        // @ts-ignore
                        public read(input: java.io.DataInputStream): void
                    }
                }
            }
        }
    }
}
