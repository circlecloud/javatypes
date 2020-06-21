declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Rule implementation that calls a method on the (top-1) (parent)
                     * object, passing the top object (child) as an argument.  It is
                     * commonly used to establish parent-child relationships.</p>
                     * <p>This rule now supports more flexible method matching by default.
                     * It is possible that this may break (some) code
                     * written against release 1.1.1 or earlier.
                     * See {@link #isExactMatch()} for more details.</p>
                     */
                    // @ts-ignore
                    class SetNextRule extends org.apache.tomcat.util.digester.Rule {
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
                        methodName: java.lang.String | string
                        /**
                         * The Java class name of the parameter type expected by the method.
                         */
                        // @ts-ignore
                        paramType: java.lang.String | string
                        /**
                         * Should we use exact matching. Default is no.
                         */
                        // @ts-ignore
                        useExactMatch: boolean
                        /**
                         * <p>Is exact matching being used.</p>
                         * <p>This rule uses <code>org.apache.commons.beanutils.MethodUtils</code>
                         * to introspect the relevant objects so that the right method can be called.
                         * Originally, <code>MethodUtils.invokeExactMethod</code> was used.
                         * This matches methods very strictly
                         * and so may not find a matching method when one exists.
                         * This is still the behaviour when exact matching is enabled.</p>
                         * <p>When exact matching is disabled, <code>MethodUtils.invokeMethod</code> is used.
                         * This method finds more methods but is less precise when there are several methods
                         * with correct signatures.
                         * So, if you want to choose an exact signature you might need to enable this property.</p>
                         * <p>The default setting is to disable exact matches.</p>
                         * @return true iff exact matching is enabled
                         * @since Digester Release 1.1.1
                         */
                        // @ts-ignore
                        public isExactMatch(): boolean
                        /**
                         * <p>Set whether exact matching is enabled.</p>
                         * <p>See {@link #isExactMatch()}.</p>
                         * @param useExactMatch should this rule use exact method matching
                         * @since Digester Release 1.1.1
                         */
                        // @ts-ignore
                        public setExactMatch(useExactMatch: boolean): void
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
}
