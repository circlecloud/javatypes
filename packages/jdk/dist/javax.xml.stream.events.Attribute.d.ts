declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface that contains information about an attribute.  Attributes are reported
                 * as a set of events accessible from a StartElement.  Other applications may report
                 * Attributes as first-order events, for example as the results of an XPath expression.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @see StartElement
                 * @since 1.6
                 */
                // @ts-ignore
                interface Attribute extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Returns the QName for this attribute
                     */
                    // @ts-ignore
                    getName(): javax.xml.namespace.QName
                    /**
                     * Gets the normalized value of this attribute
                     */
                    // @ts-ignore
                    getValue(): java.lang.String
                    /**
                     * Gets the type of this attribute, default is
                     * the String "CDATA"
                     * @return the type as a String, default is "CDATA"
                     */
                    // @ts-ignore
                    getDTDType(): java.lang.String
                    /**
                     * A flag indicating whether this attribute was actually
                     * specified in the start-tag of its element, or was defaulted from the schema.
                     * @return returns true if this was specified in the start element
                     */
                    // @ts-ignore
                    isSpecified(): boolean
                }
            }
        }
    }
}
