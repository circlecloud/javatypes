declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface for handling Notation Declarations
                 * Receive notification of a notation declaration event.
                 * It is up to the application to record the notation for later reference,
                 * At least one of publicId and systemId must be non-null.
                 * There is no guarantee that the notation declaration
                 * will be reported before any unparsed entities that use it.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface NotationDeclaration extends javax.xml.stream.events.XMLEvent {
                    /**
                     * The notation name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * The notation's public identifier, or null if none was given.
                     */
                    // @ts-ignore
                    getPublicId(): java.lang.String
                    /**
                     * The notation's system identifier, or null if none was given.
                     */
                    // @ts-ignore
                    getSystemId(): java.lang.String
                }
            }
        }
    }
}
