declare namespace javax {
    namespace xml {
        namespace ws {
            namespace wsaddressing {
                /**
                 * This class represents a W3C Addressing EndpointReferece which is
                 * a remote reference to a web service endpoint that supports the
                 * W3C WS-Addressing 1.0 - Core Recommendation.
                 * <p>
                 * Developers should use this class in their SEIs if they want to
                 * pass/return endpoint references that represent the W3C WS-Addressing
                 * recommendation.
                 * <p>
                 * JAXB will use the JAXB annotations and bind this class to XML infoset
                 * that is consistent with that defined by WS-Addressing.  See
                 * <a href="http://www.w3.org/TR/2006/REC-ws-addr-core-20060509/">
                 * WS-Addressing</a>
                 * for more information on WS-Addressing EndpointReferences.
                 * @since JAX-WS 2.1
                 */
                // @ts-ignore
                class W3CEndpointReference extends javax.xml.ws.EndpointReference {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates an EPR from infoset representation
                     * @param source A source object containing valid XmlInfoset
                     *  instance consistent with the W3C WS-Addressing Core
                     *  recommendation.
                     * @throws WebServiceException
                     *    If the source does NOT contain a valid W3C WS-Addressing
                     *    EndpointReference.
                     * @throws NullPointerException
                     *    If the <code>null</code> <code>source</code> value is given
                     */
                    // @ts-ignore
                    constructor(source: javax.xml.transform.Source)
                    // @ts-ignore
                    static readonly NS: java.lang.String | string
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public writeTo(result: javax.xml.transform.Result): void
                }
            }
        }
    }
}
