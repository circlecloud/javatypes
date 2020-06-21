declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Rule implementation that creates a SSLHostConfigCertificate.
                 */
                // @ts-ignore
                class CertificateCreateRule extends org.apache.tomcat.util.digester.Rule {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                    /**
                     * Process the end of this element.
                     * @param namespace the namespace URI of the matching element, or an
                     *    empty string if the parser is not namespace aware or the element has
                     *    no namespace
                     * @param name the local name if the parser is namespace aware, or just
                     *    the element name otherwise
                     */
                    // @ts-ignore
                    public end(namespace: java.lang.String | string, name: java.lang.String | string): void
                }
            }
        }
    }
}
