declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <p>Rule that copies the <code>parentClassLoader</code> property from the
                 * next-to-top item on the stack (which must be a <code>Container</code>)
                 * to the top item on the stack (which must also be a
                 * <code>Container</code>).</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class CopyParentClassLoaderRule extends org.apache.tomcat.util.digester.Rule {
                    /**
                     * Construct a new instance of this Rule.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Handle the beginning of an XML element.
                     * @param attributes The attributes of this element
                     * @exception Exception if a processing error occurs
                     */
                    // @ts-ignore
                    public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                }
            }
        }
    }
}
