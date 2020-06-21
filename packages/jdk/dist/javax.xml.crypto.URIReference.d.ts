declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * Identifies a data object via a URI-Reference, as specified by
             * <a href="http://www.ietf.org/rfc/rfc2396.txt">RFC 2396</a>.
             * <p>Note that some subclasses may not have a <code>type</code> attribute
             * and for objects of those types, the {@link #getType} method always returns
             * <code>null</code>.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             * @see URIDereferencer
             */
            // @ts-ignore
            interface URIReference {
                /**
                 * Returns the URI of the referenced data object.
                 * @return the URI of the data object in RFC 2396 format (may be
                 *     <code>null</code> if not specified)
                 */
                // @ts-ignore
                getURI(): string
                /**
                 * Returns the type of data referenced by this URI.
                 * @return the type (a URI) of the data object (may be <code>null</code>
                 *     if not specified)
                 */
                // @ts-ignore
                getType(): string
            }
        }
    }
}
