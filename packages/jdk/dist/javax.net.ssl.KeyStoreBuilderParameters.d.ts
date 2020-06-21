declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * A parameters object for X509KeyManagers that encapsulates a List
             * of KeyStore.Builders.
             * @see java.security.KeyStore.Builder
             * @see X509KeyManager
             * @author Andreas Sterbenz
             * @since 1.5
             */
            // @ts-ignore
            class KeyStoreBuilderParameters extends java.lang.Object implements javax.net.ssl.ManagerFactoryParameters {
                /**
                 * Construct new KeyStoreBuilderParameters from the specified
                 * {@linkplain java.security.KeyStore.Builder}.
                 * @param builder the Builder object
                 * @exception NullPointerException if builder is null
                 */
                // @ts-ignore
                constructor(builder: java.security.KeyStore.Builder)
                /**
                 * Construct new KeyStoreBuilderParameters from a List
                 * of {@linkplain java.security.KeyStore.Builder}s. Note that the list
                 * is cloned to protect against subsequent modification.
                 * @param parameters the List of Builder objects
                 * @exception NullPointerException if parameters is null
                 * @exception IllegalArgumentException if parameters is an empty list
                 */
                // @ts-ignore
                constructor(parameters: java.util.List<java.security.KeyStore.Builder> | Array<java.security.KeyStore.Builder>)
                /**
                 * Return the unmodifiable List of the
                 * {@linkplain java.security.KeyStore.Builder}s
                 * encapsulated by this object.
                 * @return the unmodifiable List of the
                 *  {#linkplain java.security.KeyStore.Builder}s
                 *  encapsulated by this object.
                 */
                // @ts-ignore
                public getParameters(): Array<java.security.KeyStore.Builder>
            }
        }
    }
}
