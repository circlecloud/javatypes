declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Rule that uses the introspection utils to set properties of a context
                 * (everything except "path").
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class SetContextPropertiesRule extends org.apache.tomcat.util.digester.Rule {
                    // @ts-ignore
                    constructor()
                    /**
                     * Handle the beginning of an XML element.
                     * @param attributes The attributes of this element
                     * @exception Exception if a processing error occurs
                     */
                    // @ts-ignore
                    public begin(namespace: java.lang.String | string, nameX: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                }
            }
        }
    }
}
