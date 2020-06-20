declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dom {
                /**
                 * This class provides a DOM-specific implementation of the
                 * {@link XMLCryptoContext} interface. It also includes additional
                 * methods that are specific to a DOM-based implementation for registering
                 * and retrieving elements that contain attributes of type ID.
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 */
                // @ts-ignore
                class DOMCryptoContext extends java.lang.Object implements javax.xml.crypto.XMLCryptoContext {
                    /**
                     * Default constructor. (For invocation by subclass constructors).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * This implementation uses an internal {@link HashMap} to get the prefix
                     * that the specified URI maps to. It returns the <code>defaultPrefix</code>
                     * if it maps to <code>null</code>.
                     * @throws NullPointerException {#inheritDoc}
                     */
                    // @ts-ignore
                    getNamespacePrefix(namespaceURI: string, defaultPrefix: string): java.lang.String
                    /**
                     * This implementation uses an internal {@link HashMap} to map the URI
                     * to the specified prefix.
                     * @throws NullPointerException {#inheritDoc}
                     */
                    // @ts-ignore
                    putNamespacePrefix(namespaceURI: string, prefix: string): java.lang.String
                    // @ts-ignore
                    getDefaultNamespacePrefix(): java.lang.String
                    // @ts-ignore
                    setDefaultNamespacePrefix(defaultPrefix: string): void
                    // @ts-ignore
                    getBaseURI(): java.lang.String
                    /**
                     * @throws IllegalArgumentException {#inheritDoc}
                     */
                    // @ts-ignore
                    setBaseURI(baseURI: string): void
                    // @ts-ignore
                    getURIDereferencer(): javax.xml.crypto.URIDereferencer
                    // @ts-ignore
                    setURIDereferencer(dereferencer: javax.xml.crypto.URIDereferencer): void
                    /**
                     * This implementation uses an internal {@link HashMap} to get the object
                     * that the specified name maps to.
                     * @throws NullPointerException {#inheritDoc}
                     */
                    // @ts-ignore
                    getProperty(name: string): java.lang.Object
                    /**
                     * This implementation uses an internal {@link HashMap} to map the name
                     * to the specified object.
                     * @throws NullPointerException {#inheritDoc}
                     */
                    // @ts-ignore
                    setProperty(name: string, value: any): java.lang.Object
                    // @ts-ignore
                    getKeySelector(): javax.xml.crypto.KeySelector
                    // @ts-ignore
                    setKeySelector(ks: javax.xml.crypto.KeySelector): void
                    /**
                     * Returns the <code>Element</code> with the specified ID attribute value.
                     * <p>This implementation uses an internal {@link HashMap} to get the
                     * element that the specified attribute value maps to.
                     * @param idValue the value of the ID
                     * @return the <code>Element</code> with the specified ID attribute value,
                     *     or <code>null</code> if none.
                     * @throws NullPointerException if <code>idValue</code> is <code>null</code>
                     * @see #setIdAttributeNS
                     */
                    // @ts-ignore
                    getElementById(idValue: string): org.w3c.dom.Element
                    /**
                     * Registers the element's attribute specified by the namespace URI and
                     * local name to be of type ID. The attribute must have a non-empty value.
                     * <p>This implementation uses an internal {@link HashMap} to map the
                     * attribute's value to the specified element.
                     * @param element the element
                     * @param namespaceURI the namespace URI of the attribute (specify
                     *     <code>null</code> if not applicable)
                     * @param localName the local name of the attribute
                     * @throws IllegalArgumentException if <code>localName</code> is not an
                     *     attribute of the specified element or it does not contain a specific
                     *     value
                     * @throws NullPointerException if <code>element</code> or
                     *     <code>localName</code> is <code>null</code>
                     * @see #getElementById
                     */
                    // @ts-ignore
                    setIdAttributeNS(element: org.w3c.dom.Element, namespaceURI: string, localName: string): void
                    /**
                     * Returns a read-only iterator over the set of Id/Element mappings of
                     * this <code>DOMCryptoContext</code>. Attempts to modify the set via the
                     * {@link Iterator#remove} method throw an
                     * <code>UnsupportedOperationException</code>. The mappings are returned
                     * in no particular order. Each element in the iteration is represented as a
                     * {@link java.util.Map.Entry}. If the <code>DOMCryptoContext</code> is
                     * modified while an iteration is in progress, the results of the
                     * iteration are undefined.
                     * @return a read-only iterator over the set of mappings
                     */
                    // @ts-ignore
                    iterator(): java.util.Iterator
                    /**
                     * This implementation uses an internal {@link HashMap} to get the object
                     * that the specified key maps to.
                     */
                    // @ts-ignore
                    get(key: any): java.lang.Object
                    /**
                     * This implementation uses an internal {@link HashMap} to map the key
                     * to the specified object.
                     * @throws IllegalArgumentException {#inheritDoc}
                     */
                    // @ts-ignore
                    put(key: any, value: any): java.lang.Object
                }
            }
        }
    }
}
