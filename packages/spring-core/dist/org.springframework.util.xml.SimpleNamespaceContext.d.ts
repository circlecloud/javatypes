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
                    public getNamespaceURI(prefix: java.lang.String | string): string
                    // @ts-ignore
                    public getPrefix(namespaceUri: java.lang.String | string): string
                    // @ts-ignore
                    public getPrefixes(namespaceUri: java.lang.String | string): java.util.Iterator<java.lang.String | string>
                    /**
                     * Set the bindings for this namespace context.
                     * The supplied map must consist of string key value pairs.
                     */
                    // @ts-ignore
                    public setBindings(bindings: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    /**
                     * Bind the given namespace as default namespace.
                     * @param namespaceUri the namespace uri
                     */
                    // @ts-ignore
                    public bindDefaultNamespaceUri(namespaceUri: java.lang.String | string): void
                    /**
                     * Bind the given prefix to the given namespace.
                     * @param prefix the namespace prefix
                     * @param namespaceUri the namespace uri
                     */
                    // @ts-ignore
                    public bindNamespaceUri(prefix: java.lang.String | string, namespaceUri: java.lang.String | string): void
                    /**
                     * Remove the given prefix from this context.
                     * @param prefix the prefix to be removed
                     */
                    // @ts-ignore
                    public removeBinding(prefix: java.lang.String | string): void
                    /**
                     * Remove all declared prefixes.
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Return all declared prefixes.
                     */
                    // @ts-ignore
                    public getBoundPrefixes(): java.util.Iterator<java.lang.String | string>
                }
            }
        }
    }
}
