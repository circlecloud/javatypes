declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <p>Rule implementation that calls a method on the (top-1) (parent)
                 * object, passing the top object (child) as an argument.  It is
                 * commonly used to establish parent-child relationships.</p>
                 * <p>This rule now supports more flexible method matching by default.
                 * It is possible that this may break (some) code
                 * written against release 1.1.1 or earlier.
                 * </p>
                 */
                // @ts-ignore
                class SetNextNamingRule extends org.apache.tomcat.util.digester.Rule {
                    /**
                     * Construct a "set next" rule with the specified method name.
                     * @param methodName Method name of the parent method to call
                     * @param paramType Java class of the parent method's argument
                     *   (if you wish to use a primitive type, specify the corresponding
                     *   Java wrapper class instead, such as <code>java.lang.Boolean</code>
                     *   for a <code>boolean</code> parameter)
                     */
                    // @ts-ignore
                    constructor(methodName: java.lang.String | string, paramType: java.lang.String | string)
                    /**
                     * The method name to call on the parent object.
                     */
                    // @ts-ignore
                    readonly methodName: java.lang.String | string
                    /**
                     * The Java class name of the parameter type expected by the method.
                     */
                    // @ts-ignore
                    readonly paramType: java.lang.String | string
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
                    /**
                     * Render a printable version of this Rule.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
