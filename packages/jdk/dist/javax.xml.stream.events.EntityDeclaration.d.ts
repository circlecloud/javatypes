declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface for handling Entity Declarations
                 * This interface is used to record and report unparsed entity declarations.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface EntityDeclaration extends javax.xml.stream.events.XMLEvent {
                    /**
                     * The entity's public identifier, or null if none was given
                     * @return the public ID for this declaration or null
                     */
                    // @ts-ignore
                    getPublicId(): java.lang.String
                    /**
                     * The entity's system identifier.
                     * @return the system ID for this declaration or null
                     */
                    // @ts-ignore
                    getSystemId(): java.lang.String
                    /**
                     * The entity's name
                     * @return the name, may not be null
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * The name of the associated notation.
                     * @return the notation name
                     */
                    // @ts-ignore
                    getNotationName(): java.lang.String
                    /**
                     * The replacement text of the entity.
                     * This method will only return non-null
                     * if this is an internal entity.
                     * @return null or the replacment text
                     */
                    // @ts-ignore
                    getReplacementText(): java.lang.String
                    /**
                     * Get the base URI for this reference
                     * or null if this information is not available
                     * @return the base URI or null
                     */
                    // @ts-ignore
                    getBaseURI(): java.lang.String
                }
            }
        }
    }
}
