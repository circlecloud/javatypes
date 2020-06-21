declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * Public interface defining a collection of Rule instances (and corresponding
                     * matching patterns) plus an implementation of a matching policy that selects
                     * the rules that match a particular pattern of nested elements discovered
                     * during parsing.
                     */
                    // @ts-ignore
                    interface Rules {
                        /**
                         * @return the Digester instance with which this Rules instance is
                         *  associated.
                         */
                        // @ts-ignore
                        getDigester(): org.apache.tomcat.util.digester.Digester
                        /**
                         * Set the Digester instance with which this Rules instance is associated.
                         * @param digester The newly associated Digester instance
                         */
                        // @ts-ignore
                        setDigester(digester: org.apache.tomcat.util.digester.Digester): void
                        /**
                         * Register a new Rule instance matching the specified pattern.
                         * @param pattern Nesting pattern to be matched for this Rule
                         * @param rule Rule instance to be registered
                         */
                        // @ts-ignore
                        add(pattern: java.lang.String | string, rule: org.apache.tomcat.util.digester.Rule): void
                        /**
                         * Clear all existing Rule instance registrations.
                         */
                        // @ts-ignore
                        clear(): void
                        /**
                         * Return a List of all registered Rule instances that match the specified
                         * nesting pattern, or a zero-length List if there are no matches.  If more
                         * than one Rule instance matches, they <strong>must</strong> be returned
                         * in the order originally registered through the <code>add()</code>
                         * method.
                         * @param namespaceURI Namespace URI for which to select matching rules,
                         *   or <code>null</code> to match regardless of namespace URI
                         * @param pattern Nesting pattern to be matched
                         * @return a rules list
                         */
                        // @ts-ignore
                        match(namespaceURI: java.lang.String | string, pattern: java.lang.String | string): Array<org.apache.tomcat.util.digester.Rule>
                        /**
                         * Return a List of all registered Rule instances, or a zero-length List
                         * if there are no registered Rule instances.  If more than one Rule
                         * instance has been registered, they <strong>must</strong> be returned
                         * in the order originally registered through the <code>add()</code>
                         * method.
                         * @return a rules list
                         */
                        // @ts-ignore
                        rules(): Array<org.apache.tomcat.util.digester.Rule>
                    }
                }
            }
        }
    }
}
