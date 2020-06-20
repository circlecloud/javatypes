declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A {@code KeyStore} entry that holds a {@code SecretKey}.
             * @since 1.5
             */
            // @ts-ignore
            class SecretKeyEntry extends java.lang.Object implements java.security.KeyStore.Entry {
                /**
                 * Constructs a {@code SecretKeyEntry} with a
                 * {@code SecretKey}.
                 * @param secretKey the {#code SecretKey}
                 * @exception NullPointerException if {#code secretKey}
                 *       is {@code null}
                 */
                // @ts-ignore
                constructor(secretKey: javax.crypto.SecretKey)
                /**
                 * Constructs a {@code SecretKeyEntry} with a {@code SecretKey} and
                 * associated entry attributes.
                 * <p> The specified {@code attributes} is cloned before it is stored
                 * in the new {@code SecretKeyEntry} object.
                 * @param secretKey the {#code SecretKey}
                 * @param attributes the attributes
                 * @exception NullPointerException if {#code secretKey} or
                 *      {@code attributes} is {@code null}
                 * @since 1.8
                 */
                // @ts-ignore
                constructor(secretKey: javax.crypto.SecretKey, attributes: Array<java.security.KeyStore.Entry.Attribute>)
                /**
                 * Gets the {@code SecretKey} from this entry.
                 * @return the {#code SecretKey} from this entry
                 */
                // @ts-ignore
                getSecretKey(): javax.crypto.SecretKey
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 * @return an unmodifiable {#code Set} of attributes, possibly empty
                 * @since 1.8
                 */
                // @ts-ignore
                getAttributes(): java.util.Set<java.security.KeyStore.Entry.Attribute>
                /**
                 * Returns a string representation of this SecretKeyEntry.
                 * @return a string representation of this SecretKeyEntry.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
