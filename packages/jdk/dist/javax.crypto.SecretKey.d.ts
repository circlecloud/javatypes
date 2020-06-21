declare namespace javax {
    namespace crypto {
        /**
         * A secret (symmetric) key.
         * The purpose of this interface is to group (and provide type safety
         * for) all secret key interfaces.
         * <p>
         * Provider implementations of this interface must overwrite the
         * {@code equals} and {@code hashCode} methods inherited from
         * {@link java.lang.Object}, so that secret keys are compared based on
         * their underlying key material and not based on reference.
         * Implementations should override the default {@code destroy} and
         * {@code isDestroyed} methods from the
         * {@link javax.security.auth.Destroyable} interface to enable
         * sensitive key information to be destroyed, cleared, or in the case
         * where such information is immutable, unreferenced.
         * Finally, since {@code SecretKey} is {@code Serializable}, implementations
         * should also override
         * {@link java.io.ObjectOutputStream#writeObject(java.lang.Object)}
         * to prevent keys that have been destroyed from being serialized.
         * <p>Keys that implement this interface return the string {@code RAW}
         * as their encoding format (see {@code getFormat}), and return the
         * raw key bytes as the result of a {@code getEncoded} method call. (The
         * {@code getFormat} and {@code getEncoded} methods are inherited
         * from the {@link java.security.Key} parent interface.)
         * @author Jan Luehe
         * @see SecretKeyFactory
         * @see Cipher
         * @since 1.4
         */
        // @ts-ignore
        interface SecretKey extends java.security.Key, javax.security.auth.Destroyable {
            /**
             * The class fingerprint that is set to indicate serialization
             * compatibility since J2SE 1.4.
             */
            // @ts-ignore
            readonly serialVersionUID: number /*long*/
        }
    }
}
