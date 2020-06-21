declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Rule implementation that saves a parameter for use by a surrounding
                     * <code>CallMethodRule</code>.</p>
                     * <p>This parameter may be:</p>
                     * <ul>
                     * <li>from an attribute of the current element
                     * See {@link #CallParamRule(int paramIndex, String attributeName)}
                     * <li>from current the element body
                     * See {@link #CallParamRule(int paramIndex)}
                     * </ul>
                     */
                    // @ts-ignore
                    class CallParamRule extends org.apache.tomcat.util.digester.Rule {
                        /**
                         * Construct a "call parameter" rule that will save the body text of this
                         * element as the parameter value.
                         * @param paramIndex The zero-relative parameter number
                         */
                        // @ts-ignore
                        constructor(paramIndex: number /*int*/)
                        /**
                         * Construct a "call parameter" rule that will save the value of the
                         * specified attribute as the parameter value.
                         * @param paramIndex The zero-relative parameter number
                         * @param attributeName The name of the attribute to save
                         */
                        // @ts-ignore
                        constructor(paramIndex: number /*int*/, attributeName: java.lang.String | string)
                        /**
                         * The attribute from which to save the parameter value
                         */
                        // @ts-ignore
                        readonly attributeName: java.lang.String | string
                        /**
                         * The zero-relative index of the parameter we are saving.
                         */
                        // @ts-ignore
                        readonly paramIndex: number /*int*/
                        /**
                         * Is the parameter to be set from the stack?
                         */
                        // @ts-ignore
                        readonly fromStack: boolean
                        /**
                         * The position of the object from the top of the stack
                         */
                        // @ts-ignore
                        readonly stackIndex: number /*int*/
                        /**
                         * Stack is used to allow nested body text to be processed.
                         * Lazy creation.
                         */
                        // @ts-ignore
                        bodyTextStack: org.apache.tomcat.util.digester.ArrayStack<java.lang.String | string>
                        /**
                         * Process the start of this element.
                         * @param namespace the namespace URI of the matching element, or an
                         *    empty string if the parser is not namespace aware or the element has
                         *    no namespace
                         * @param name the local name if the parser is namespace aware, or just
                         *    the element name otherwise
                         * @param attributes The attribute list for this element
                         */
                        // @ts-ignore
                        public begin(namespace: java.lang.String | string, name: java.lang.String | string, attributes: org.xml.sax.Attributes): void
                        /**
                         * Process the body text of this element.
                         * @param namespace the namespace URI of the matching element, or an
                         *    empty string if the parser is not namespace aware or the element has
                         *    no namespace
                         * @param name the local name if the parser is namespace aware, or just
                         *    the element name otherwise
                         * @param bodyText The body text of this element
                         */
                        // @ts-ignore
                        public body(namespace: java.lang.String | string, name: java.lang.String | string, bodyText: java.lang.String | string): void
                        /**
                         * Process any body texts now.
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
}
