declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <p><strong>RuleSet</strong> for processing the contents of a
                 * Engine definition element.  This <code>RuleSet</code> does NOT include
                 * any rules for nested Host elements, which should be added via instances of
                 * <code>HostRuleSet</code>.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class EngineRuleSet extends java.lang.Object implements org.apache.tomcat.util.digester.RuleSet {
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
