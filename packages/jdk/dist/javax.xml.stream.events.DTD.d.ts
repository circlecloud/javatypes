declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * This is the top level interface for events dealing with DTDs
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface DTD extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Returns the entire Document Type Declaration as a string, including
                     * the internal DTD subset.
                     * This may be null if there is not an internal subset.
                     * If it is not null it must return the entire
                     * Document Type Declaration which matches the doctypedecl
                     * production in the XML 1.0 specification
                     */
                    // @ts-ignore
                    getDocumentTypeDeclaration(): java.lang.String
                    /**
                     * Returns an implementation defined representation of the DTD.
                     * This method may return null if no representation is available.
                     */
                    // @ts-ignore
                    getProcessedDTD(): java.lang.Object
                    /**
                     * Return a List containing the notations declared in the DTD.
                     * This list must contain NotationDeclaration events.
                     * @see NotationDeclaration
                     * @return an unordered list of NotationDeclaration events
                     */
                    // @ts-ignore
                    getNotations(): java.util.List
                    /**
                     * Return a List containing the general entities,
                     * both external and internal, declared in the DTD.
                     * This list must contain EntityDeclaration events.
                     * @see EntityDeclaration
                     * @return an unordered list of EntityDeclaration events
                     */
                    // @ts-ignore
                    getEntities(): java.util.List
                }
            }
        }
    }
}
