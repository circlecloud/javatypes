declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface that contains information about a namespace.
                 * Namespaces are accessed from a StartElement.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @see StartElement
                 * @since 1.6
                 */
                // @ts-ignore
                interface Namespace extends javax.xml.stream.events.Attribute {
                    /**
                     * Gets the prefix, returns "" if this is a default
                     * namespace declaration.
                     */
                    // @ts-ignore
                    getPrefix(): java.lang.String
                    /**
                     * Gets the uri bound to the prefix of this namespace
                     */
                    // @ts-ignore
                    getNamespaceURI(): java.lang.String
                    /**
                     * returns true if this attribute declares the default namespace
                     */
                    // @ts-ignore
                    isDefaultNamespaceDeclaration(): boolean
                }
            }
        }
    }
}
