declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * An entity is described in a DTD using the ENTITY construct.
                     * It defines the type and value of the the entity.
                     * @see DTD
                     * @author Arthur van Hoff
                     */
                    // @ts-ignore
                    class Entity extends java.lang.Object implements javax.swing.text.html.parser.DTDConstants {
                        /**
                         * Creates an entity.
                         * @param name the name of the entity
                         * @param type the type of the entity
                         * @param data the char array of data
                         */
                        // @ts-ignore
                        constructor(name: string, type: number /*int*/, data: string[])
                        // @ts-ignore
                        name: string
                        // @ts-ignore
                        type: number /*int*/
                        // @ts-ignore
                        data: string[]
                        /**
                         * Gets the name of the entity.
                         * @return the name of the entity, as a <code>String</code>
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Gets the type of the entity.
                         * @return the type of the entity
                         */
                        // @ts-ignore
                        getType(): int
                        /**
                         * Returns <code>true</code> if it is a parameter entity.
                         * @return <code>true</code> if it is a parameter entity
                         */
                        // @ts-ignore
                        isParameter(): boolean
                        /**
                         * Returns <code>true</code> if it is a general entity.
                         * @return <code>true</code> if it is a general entity
                         */
                        // @ts-ignore
                        isGeneral(): boolean
                        /**
                         * Returns the <code>data</code>.
                         * @return the <code>data</code>
                         */
                        // @ts-ignore
                        getData(): char[]
                        /**
                         * Returns the data as a <code>String</code>.
                         * @return the data as a <code>String</code>
                         */
                        // @ts-ignore
                        getString(): java.lang.String
                        /**
                         * Converts <code>nm</code> string to the corresponding
                         * entity type.  If the string does not have a corresponding
                         * entity type, returns the type corresponding to "CDATA".
                         * Valid entity types are: "PUBLIC", "CDATA", "SDATA", "PI",
                         * "STARTTAG", "ENDTAG", "MS", "MD", "SYSTEM".
                         * @param nm the string to be converted
                         * @return the corresponding entity type, or the type corresponding
                         *    to "CDATA", if none exists
                         */
                        // @ts-ignore
                        name2type(nm: string): int
                    }
                }
            }
        }
    }
}
