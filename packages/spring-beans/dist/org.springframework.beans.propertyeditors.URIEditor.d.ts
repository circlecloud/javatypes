declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.net.URI}, to directly populate a URI property
                 * instead of using a String property as bridge.
                 * <p>Supports Spring-style URI notation: any fully qualified standard URI
                 * ("file:", "http:", etc) and Spring's special "classpath:" pseudo-URL,
                 * which will be resolved to a corresponding URI.
                 * <p>By default, this editor will encode Strings into URIs. For instance,
                 * a space will be encoded into {@code %20}. This behavior can be changed
                 * by calling the {@link #URIEditor(boolean)} constructor.
                 * <p>Note: A URI is more relaxed than a URL in that it does not require
                 * a valid protocol to be specified. Any scheme within a valid URI syntax
                 * is allowed, even without a matching protocol handler being registered.
                 * @author Juergen Hoeller
                 * @since 2.0.2
                 * @see java.net.URI
                 * @see URLEditor
                 */
                // @ts-ignore
                class URIEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new, encoding URIEditor, converting "classpath:" locations into
                     * standard URIs (not trying to resolve them into physical resources).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new URIEditor, converting "classpath:" locations into
                     * standard URIs (not trying to resolve them into physical resources).
                     * @param encode indicates whether Strings will be encoded or not
                     * @since 3.0
                     */
                    // @ts-ignore
                    constructor(encode: boolean)
                    /**
                     * Create a new URIEditor, using the given ClassLoader to resolve
                     * "classpath:" locations into physical resource URLs.
                     * @param classLoader the ClassLoader to use for resolving "classpath:" locations
                     *  (may be {#code null} to indicate the default ClassLoader)
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Create a new URIEditor, using the given ClassLoader to resolve
                     * "classpath:" locations into physical resource URLs.
                     * @param classLoader the ClassLoader to use for resolving "classpath:" locations
                     *  (may be {#code null} to indicate the default ClassLoader)
                     * @param encode indicates whether Strings will be encoded or not
                     * @since 3.0
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader, encode: boolean)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * Create a URI instance for the given user-specified String value.
                     * <p>The default implementation encodes the value into a RFC-2396 compliant URI.
                     * @param value the value to convert into a URI instance
                     * @return the URI instance
                     * @throws java.net.URISyntaxException if URI conversion failed
                     */
                    // @ts-ignore
                    createURI(value: java.lang.String | string): java.net.URI
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
