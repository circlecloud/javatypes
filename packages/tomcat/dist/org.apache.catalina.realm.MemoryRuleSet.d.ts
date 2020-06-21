declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * <p><strong>RuleSet</strong> for recognizing the users defined in the
                 * XML file processed by <code>MemoryRealm</code>.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class MemoryRuleSet extends java.lang.Object implements org.apache.tomcat.util.digester.RuleSet {
                    /**
                     * Construct an instance of this <code>RuleSet</code> with the default
                     * matching pattern prefix.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct an instance of this <code>RuleSet</code> with the specified
                     * matching pattern prefix.
                     * @param prefix Prefix for matching pattern rules (including the
                     *   trailing slash character)
                     */
                    // @ts-ignore
                    constructor(prefix: java.lang.String | string)
                    /**
                     * The matching pattern prefix to use for recognizing our elements.
                     */
                    // @ts-ignore
                    readonly prefix: java.lang.String | string
                    /**
                     * <p>Add the set of Rule instances defined in this RuleSet to the
                     * specified <code>Digester</code> instance, associating them with
                     * our namespace URI (if any).  This method should only be called
                     * by a Digester instance.</p>
                     * @param digester Digester instance to which the new Rule instances
                     *   should be added.
                     */
                    // @ts-ignore
                    public addRuleInstances(digester: org.apache.tomcat.util.digester.Digester): void
                }
            }
        }
    }
}
