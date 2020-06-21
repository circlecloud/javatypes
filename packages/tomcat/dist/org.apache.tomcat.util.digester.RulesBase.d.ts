declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>Default implementation of the <code>Rules</code> interface that supports
                     * the standard rule matching behavior.  This class can also be used as a
                     * base class for specialized <code>Rules</code> implementations.</p>
                     * <p>The matching policies implemented by this class support two different
                     * types of pattern matching rules:</p>
                     * <ul>
                     * <li><em>Exact Match</em> - A pattern "a/b/c" exactly matches a
                     * <code>&lt;c&gt;</code> element, nested inside a <code>&lt;b&gt;</code>
                     * element, which is nested inside an <code>&lt;a&gt;</code> element.</li>
                     * <li><em>Tail Match</em> - A pattern "&#42;/a/b" matches a
                     * <code>&lt;b&gt;</code> element, nested inside an <code>&lt;a&gt;</code>
                     * element, no matter how deeply the pair is nested.</li>
                     * </ul>
                     */
                    // @ts-ignore
                    class RulesBase extends java.lang.Object implements org.apache.tomcat.util.digester.Rules {
                        // @ts-ignore
                        constructor()
                        /**
                         * The set of registered Rule instances, keyed by the matching pattern.
                         * Each value is a List containing the Rules for that pattern, in the
                         * order that they were originally registered.
                         */
                        // @ts-ignore
                        cache: java.util.HashMap<java.lang.String | string, java.util.List<org.apache.tomcat.util.digester.Rule> | Array<org.apache.tomcat.util.digester.Rule>>
                        /**
                         * The Digester instance with which this Rules instance is associated.
                         */
                        // @ts-ignore
                        digester: org.apache.tomcat.util.digester.Digester
                        /**
                         * Return the Digester instance with which this Rules instance is
                         * associated.
                         */
                        // @ts-ignore
                        public getDigester(): org.apache.tomcat.util.digester.Digester
                        /**
                         * Set the Digester instance with which this Rules instance is associated.
                         * @param digester The newly associated Digester instance
                         */
                        // @ts-ignore
                        public setDigester(digester: org.apache.tomcat.util.digester.Digester): void
                        /**
                         * Register a new Rule instance matching the specified pattern.
                         * @param pattern Nesting pattern to be matched for this Rule
                         * @param rule Rule instance to be registered
                         */
                        // @ts-ignore
                        public add(pattern: java.lang.String | string, rule: org.apache.tomcat.util.digester.Rule): void
                        /**
                         * Clear all existing Rule instance registrations.
                         */
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Return a List of all registered Rule instances that match the specified
                         * nesting pattern, or a zero-length List if there are no matches.  If more
                         * than one Rule instance matches, they <strong>must</strong> be returned
                         * in the order originally registered through the <code>add()</code>
                         * method.
                         * @param namespaceURI Namespace URI for which to select matching rules,
                         *   or <code>null</code> to match regardless of namespace URI
                         * @param pattern Nesting pattern to be matched
                         */
                        // @ts-ignore
                        public match(namespaceURI: java.lang.String | string, pattern: java.lang.String | string): Array<org.apache.tomcat.util.digester.Rule>
                        /**
                         * Return a List of all registered Rule instances, or a zero-length List
                         * if there are no registered Rule instances.  If more than one Rule
                         * instance has been registered, they <strong>must</strong> be returned
                         * in the order originally registered through the <code>add()</code>
                         * method.
                         */
                        // @ts-ignore
                        public rules(): Array<org.apache.tomcat.util.digester.Rule>
                        /**
                         * Return a List of Rule instances for the specified pattern that also
                         * match the specified namespace URI (if any).  If there are no such
                         * rules, return <code>null</code>.
                         * @param namespaceURI Namespace URI to match, or <code>null</code> to
                         *   select matching rules regardless of namespace URI
                         * @param pattern Pattern to be matched
                         * @return a rules list
                         */
                        // @ts-ignore
                        lookup(namespaceURI: java.lang.String | string, pattern: java.lang.String | string): Array<org.apache.tomcat.util.digester.Rule>
                    }
                }
            }
        }
    }
}
