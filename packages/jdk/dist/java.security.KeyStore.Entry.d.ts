declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A marker interface for {@code KeyStore} entry types.
             * @since 1.5
             */
            // @ts-ignore
            interface Entry {
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 * The default implementation returns an empty {@code Set}.
                 * @return an unmodifiable {#code Set} of attributes, possibly empty
                 * @since 1.8
                 */
                // @ts-ignore
                getAttributes(): Array<java.security.KeyStore.Entry.Attribute>
            }
        }
    }
}
