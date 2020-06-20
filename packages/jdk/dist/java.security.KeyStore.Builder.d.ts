declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A description of a to-be-instantiated KeyStore object.
             * <p>An instance of this class encapsulates the information needed to
             * instantiate and initialize a KeyStore object. That process is
             * triggered when the {@linkplain #getKeyStore} method is called.
             * <p>This makes it possible to decouple configuration from KeyStore
             * object creation and e.g. delay a password prompt until it is
             * needed.
             * @see KeyStore
             * @see javax.net.ssl.KeyStoreBuilderParameters
             * @since 1.5
             */
            // @ts-ignore
            class Builder extends java.lang.Object {
                /**
                 * Construct a new Builder.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the KeyStore described by this object.
                 * @return the {#code KeyStore} described by this object
                 * @exception KeyStoreException if an error occurred during the
                 *    operation, for example if the KeyStore could not be
                 *    instantiated or loaded
                 */
                // @ts-ignore
                abstract getKeyStore(): java.security.KeyStore
                /**
                 * Returns the ProtectionParameters that should be used to obtain
                 * the {@link KeyStore.Entry Entry} with the given alias.
                 * The {@code getKeyStore} method must be invoked before this
                 * method may be called.
                 * @return the ProtectionParameters that should be used to obtain
                 *    the {#link KeyStore.Entry Entry} with the given alias.
                 * @param alias the alias of the KeyStore entry
                 * @throws NullPointerException if alias is null
                 * @throws KeyStoreException if an error occurred during the
                 *    operation
                 * @throws IllegalStateException if the getKeyStore method has
                 *    not been invoked prior to calling this method
                 */
                // @ts-ignore
                abstract getProtectionParameter(alias: string): java.security.KeyStore.ProtectionParameter
                /**
                 * Returns a new Builder that encapsulates the given KeyStore.
                 * The {@linkplain #getKeyStore} method of the returned object
                 * will return {@code keyStore}, the {@linkplain
                 * #getProtectionParameter getProtectionParameter()} method will
                 * return {@code protectionParameters}.
                 * <p> This is useful if an existing KeyStore object needs to be
                 * used with Builder-based APIs.
                 * @return a new Builder object
                 * @param keyStore the KeyStore to be encapsulated
                 * @param protectionParameter the ProtectionParameter used to
                 *    protect the KeyStore entries
                 * @throws NullPointerException if keyStore or
                 *    protectionParameters is null
                 * @throws IllegalArgumentException if the keyStore has not been
                 *    initialized
                 */
                // @ts-ignore
                newInstance(keyStore: java.security.KeyStore, protectionParameter: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder
                /**
                 * Returns a new Builder object.
                 * <p>The first call to the {@link #getKeyStore} method on the returned
                 * builder will create a KeyStore of type {@code type} and call
                 * its {@link KeyStore#load load()} method.
                 * The {@code inputStream} argument is constructed from
                 * {@code file}.
                 * If {@code protection} is a
                 * {@code PasswordProtection}, the password is obtained by
                 * calling the {@code getPassword} method.
                 * Otherwise, if {@code protection} is a
                 * {@code CallbackHandlerProtection}, the password is obtained
                 * by invoking the CallbackHandler.
                 * <p>Subsequent calls to {@link #getKeyStore} return the same object
                 * as the initial call. If the initial call to failed with a
                 * KeyStoreException, subsequent calls also throw a
                 * KeyStoreException.
                 * <p>The KeyStore is instantiated from {@code provider} if
                 * non-null. Otherwise, all installed providers are searched.
                 * <p>Calls to {@link #getProtectionParameter getProtectionParameter()}
                 * will return a {@link KeyStore.PasswordProtection PasswordProtection}
                 * object encapsulating the password that was used to invoke the
                 * {@code load} method.
                 * <p><em>Note</em> that the {@link #getKeyStore} method is executed
                 * within the {@link AccessControlContext} of the code invoking this
                 * method.
                 * @return a new Builder object
                 * @param type the type of KeyStore to be constructed
                 * @param provider the provider from which the KeyStore is to
                 *    be instantiated (or null)
                 * @param file the File that contains the KeyStore data
                 * @param protection the ProtectionParameter securing the KeyStore data
                 * @throws NullPointerException if type, file or protection is null
                 * @throws IllegalArgumentException if protection is not an instance
                 *    of either PasswordProtection or CallbackHandlerProtection; or
                 *    if file does not exist or does not refer to a normal file
                 */
                // @ts-ignore
                newInstance(type: string, provider: java.security.Provider, file: java.io.File, protection: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder
                /**
                 * Returns a new Builder object.
                 * <p>Each call to the {@link #getKeyStore} method on the returned
                 * builder will return a new KeyStore object of type {@code type}.
                 * Its {@link KeyStore#load(KeyStore.LoadStoreParameter) load()}
                 * method is invoked using a
                 * {@code LoadStoreParameter} that encapsulates
                 * {@code protection}.
                 * <p>The KeyStore is instantiated from {@code provider} if
                 * non-null. Otherwise, all installed providers are searched.
                 * <p>Calls to {@link #getProtectionParameter getProtectionParameter()}
                 * will return {@code protection}.
                 * <p><em>Note</em> that the {@link #getKeyStore} method is executed
                 * within the {@link AccessControlContext} of the code invoking this
                 * method.
                 * @return a new Builder object
                 * @param type the type of KeyStore to be constructed
                 * @param provider the provider from which the KeyStore is to
                 *    be instantiated (or null)
                 * @param protection the ProtectionParameter securing the Keystore
                 * @throws NullPointerException if type or protection is null
                 */
                // @ts-ignore
                newInstance(type: string, provider: java.security.Provider, protection: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder
            }
        }
    }
}
