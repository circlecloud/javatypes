declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Rule that creates a new {@link LifecycleListener} and associates it with the
                 * top object on the stack which must implement {@link Container}. The
                 * implementation class to be used is determined by:
                 * <ol>
                 * <li>Does the top element on the stack specify an implementation class using
                 * the attribute specified when this rule was created?</li>
                 * <li>Does the parent {@link Container} of the {@link Container} on the top of
                 * the stack specify an implementation class using the attribute specified
                 * when this rule was created?</li>
                 * <li>Use the default implementation class specified when this rule was
                 * created.</li>
                 * </ol>
                 */
                // @ts-ignore
                class LifecycleListenerRule extends org.apache.tomcat.util.digester.Rule {
                    /**
                     * Construct a new instance of this Rule.
                     * @param listenerClass Default name of the LifecycleListener
                     *   implementation class to be created
                     * @param attributeName Name of the attribute that optionally
                     *   includes an override name of the LifecycleListener class
                     */
                    // @ts-ignore
                    constructor(listenerClass: java.lang.String | string, attributeName: java.lang.String | string)
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
