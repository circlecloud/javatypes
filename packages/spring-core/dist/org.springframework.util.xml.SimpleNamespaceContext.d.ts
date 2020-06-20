declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Simple {@code javax.xml.namespace.NamespaceContext} implementation.
                 * Follows the standard {@code NamespaceContext} contract, and is loadable
                 * via a {@code java.util.Map} or {@code java.util.Properties} object
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class SimpleNamespaceContext extends java.lang.Object implements javax.xml.namespace.NamespaceContext {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getNamespaceURI(prefix: string): java.lang.String
                    // @ts-ignore
                    getPrefix(namespaceUri: string): java.lang.String
                    // @ts-ignore
                    getPrefixes(namespaceUri: string): java.util.Iterator<java.lang.String>
                    /**
                     * Set the bindings for this namespace context.
                     * The supplied map must consist of string key value pairs.
                     */
                    // @ts-ignore
                    setBindings(bindings: java.util.Map<java.lang.String, java.lang.String>): void
                    /**
                     * Bind the given namespace as default namespace.
                     * @param namespaceUri the namespace uri
                     */
                    // @ts-ignore
                    bindDefaultNamespaceUri(namespaceUri: string): void
                    /**
                     * Bind the given prefix to the given namespace.
                     * @param prefix the namespace prefix
                     * @param namespaceUri the namespace uri
                     */
                    // @ts-ignore
                    bindNamespaceUri(prefix: string, namespaceUri: string): void
                    /**
                     * Remove the given prefix from this context.
                     * @param prefix the prefix to be removed
                     */
                    // @ts-ignore
                    removeBinding(prefix: string): void
                    /**
                     * Remove all declared prefixes.
                     */
                    // @ts-ignore
                    clear(): void
                    /**
                     * Return all declared prefixes.
                     */
                    // @ts-ignore
                    getBoundPrefixes(): java.util.Iterator<java.lang.String>
                }
            }
        }
    }
}
