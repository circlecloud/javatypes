declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Rule implementation that calls a method on an object on the stack
                     * (normally the top/parent object), passing arguments collected from
                     * subsequent <code>CallParamRule</code> rules or from the body of this
                     * element. </p>
                     * <p>By using {@link #CallMethodRule(String methodName)}
                     * a method call can be made to a method which accepts no
                     * arguments.</p>
                     * <p>Incompatible method parameter types are converted
                     * using <code>org.apache.commons.beanutils.ConvertUtils</code>.
                     * </p>
                     * <p>This rule now uses
                     * <a href="https://commons.apache.org/beanutils/apidocs/org/apache/commons/beanutils/MethodUtils.html">
                     * org.apache.commons.beanutils.MethodUtils#invokeMethod
                     * </a> by default.
                     * This increases the kinds of methods successfully and allows primitives
                     * to be matched by passing in wrapper classes.
                     * There are rare cases when org.apache.commons.beanutils.MethodUtils#invokeExactMethod
                     * (the old default) is required.
                     * This method is much stricter in its reflection.
                     * Setting the <code>UseExactMatch</code> to true reverts to the use of this
                     * method.</p>
                     * <p>Note that the target method is invoked when the  <i>end</i> of
                     * the tag the CallMethodRule fired on is encountered, <i>not</i> when the
                     * last parameter becomes available. This implies that rules which fire on
                     * tags nested within the one associated with the CallMethodRule will
                     * fire before the CallMethodRule invokes the target method. This behaviour is
                     * not configurable. </p>
                     * <p>Note also that if a CallMethodRule is expecting exactly one parameter
                     * and that parameter is not available (eg CallParamRule is used with an
                     * attribute name but the attribute does not exist) then the method will
                     * not be invoked. If a CallMethodRule is expecting more than one parameter,
                     * then it is always invoked, regardless of whether the parameters were
                     * available or not (missing parameters are passed as null values).</p>
                     */
                    // @ts-ignore
                    class CallMethodRule extends org.apache.tomcat.util.digester.Rule {
                        /**
                         * Construct a "call method" rule with the specified method name.  The
                         * parameter types (if any) default to java.lang.String.
                         * @param methodName Method name of the parent method to call
                         * @param paramCount The number of parameters to collect, or
                         *   zero for a single argument from the body of this element.
                         */
                        // @ts-ignore
                        constructor(methodName: java.lang.String | string, paramCount: number /*int*/)
                        /**
                         * Construct a "call method" rule with the specified method name.  The
                         * parameter types (if any) default to java.lang.String.
                         * @param targetOffset location of the target object. Positive numbers are
                         *  relative to the top of the digester object stack. Negative numbers
                         *  are relative to the bottom of the stack. Zero implies the top
                         *  object on the stack.
                         * @param methodName Method name of the parent method to call
                         * @param paramCount The number of parameters to collect, or
                         *   zero for a single argument from the body of this element.
                         */
                        // @ts-ignore
                        constructor(targetOffset: number /*int*/, methodName: java.lang.String | string, paramCount: number /*int*/)
                        /**
                         * Construct a "call method" rule with the specified method name.
                         * The method should accept no parameters.
                         * @param methodName Method name of the parent method to call
                         */
                        // @ts-ignore
                        constructor(methodName: java.lang.String | string)
                        /**
                         * Construct a "call method" rule with the specified method name and
                         * parameter types. If <code>paramCount</code> is set to zero the rule
                         * will use the body of this element as the single argument of the
                         * method, unless <code>paramTypes</code> is null or empty, in this
                         * case the rule will call the specified method with no arguments.
                         * @param targetOffset location of the target object. Positive numbers are
                         *  relative to the top of the digester object stack. Negative numbers
                         *  are relative to the bottom of the stack. Zero implies the top
                         *  object on the stack.
                         * @param methodName Method name of the parent method to call
                         * @param paramCount The number of parameters to collect, or
                         *   zero for a single argument from the body of this element
                         * @param paramTypes The Java classes that represent the
                         *   parameter types of the method arguments
                         *   (if you wish to use a primitive type, specify the corresponding
                         *   Java wrapper class instead, such as <code>java.lang.Boolean.TYPE</code>
                         *   for a <code>boolean</code> parameter)
                         */
                        // @ts-ignore
                        constructor(targetOffset: number /*int*/, methodName: java.lang.String | string, paramCount: number /*int*/, paramTypes: java.lang.Class<any>[])
                        /**
                         * The body text collected from this element.
                         */
                        // @ts-ignore
                        bodyText: java.lang.String | string
                        /**
                         * location of the target object for the call, relative to the
                         * top of the digester object stack. The default value of zero
                         * means the target object is the one on top of the stack.
                         */
                        // @ts-ignore
                        readonly targetOffset: number /*int*/
                        /**
                         * The method name to call on the parent object.
                         */
                        // @ts-ignore
                        readonly methodName: java.lang.String | string
                        /**
                         * The number of parameters to collect from <code>MethodParam</code> rules.
                         * If this value is zero, a single parameter will be collected from the
                         * body of this element.
                         */
                        // @ts-ignore
                        readonly paramCount: number /*int*/
                        /**
                         * The parameter types of the parameters to be collected.
                         */
                        // @ts-ignore
                        paramTypes: java.lang.Class<any>[]
                        /**
                         * Should <code>MethodUtils.invokeExactMethod</code> be used for reflection.
                         */
                        // @ts-ignore
                        useExactMatch: boolean
                        /**
                         * Should <code>MethodUtils.invokeExactMethod</code>
                         * be used for the reflection.
                         * @return <code>true</code> if invokeExactMethod is used
                         */
                        // @ts-ignore
                        public getUseExactMatch(): boolean
                        /**
                         * Set whether <code>MethodUtils.invokeExactMethod</code>
                         * should be used for the reflection.
                         * @param useExactMatch The flag value
                         */
                        // @ts-ignore
                        public setUseExactMatch(useExactMatch: boolean): void
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
                         * Clean up after parsing is complete.
                         */
                        // @ts-ignore
                        public finish(): void
                        /**
                         * Subclasses may override this method to perform additional processing of the
                         * invoked method's result.
                         * @param result the Object returned by the method invoked, possibly null
                         */
                        // @ts-ignore
                        processMethodCallResult(result: java.lang.Object | any): void
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
