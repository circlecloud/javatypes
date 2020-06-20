declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A password-based implementation of {@code ProtectionParameter}.
             * @since 1.5
             */
            // @ts-ignore
            class PasswordProtection extends java.lang.Object implements java.security.KeyStore.ProtectionParameter, javax.security.auth.Destroyable {
                /**
                 * Creates a password parameter.
                 * <p> The specified {@code password} is cloned before it is stored
                 * in the new {@code PasswordProtection} object.
                 * @param password the password, which may be {#code null}
                 */
                // @ts-ignore
                constructor(password: string[])
                /**
                 * Creates a password parameter and specifies the protection algorithm
                 * and associated parameters to use when encrypting a keystore entry.
                 * <p>
                 * The specified {@code password} is cloned before it is stored in the
                 * new {@code PasswordProtection} object.
                 * @param password the password, which may be {#code null}
                 * @param protectionAlgorithm the encryption algorithm name, for
                 *      example, {#code PBEWithHmacSHA256AndAES_256}.
                 *      See the Cipher section in the <a href=
                 *  "{@docRoot}/../technotes/guides/security/StandardNames.html#Cipher">
                 *  Java Cryptography Architecture Standard Algorithm Name
                 *  Documentation</a>
                 *      for information about standard encryption algorithm names.
                 * @param protectionParameters the encryption algorithm parameter
                 *      specification, which may be {#code null}
                 * @exception NullPointerException if {#code protectionAlgorithm} is
                 *      {@code null}
                 * @since 1.8
                 */
                // @ts-ignore
                constructor(password: string[], protectionAlgorithm: string, protectionParameters: java.security.spec.AlgorithmParameterSpec)
                /**
                 * Gets the name of the protection algorithm.
                 * If none was set then the keystore provider will use its default
                 * protection algorithm. The name of the default protection algorithm
                 * for a given keystore type is set using the
                 * {@code 'keystore.<type>.keyProtectionAlgorithm'} security property.
                 * For example, the
                 * {@code keystore.PKCS12.keyProtectionAlgorithm} property stores the
                 * name of the default key protection algorithm used for PKCS12
                 * keystores. If the security property is not set, an
                 * implementation-specific algorithm will be used.
                 * @return the algorithm name, or {#code null} if none was set
                 * @since 1.8
                 */
                // @ts-ignore
                getProtectionAlgorithm(): java.lang.String
                /**
                 * Gets the parameters supplied for the protection algorithm.
                 * @return the algorithm parameter specification, or {#code  null},
                 *      if none was set
                 * @since 1.8
                 */
                // @ts-ignore
                getProtectionParameters(): java.security.spec.AlgorithmParameterSpec
                /**
                 * Gets the password.
                 * <p>Note that this method returns a reference to the password.
                 * If a clone of the array is created it is the caller's
                 * responsibility to zero out the password information
                 * after it is no longer needed.
                 * @see #destroy()
                 * @return the password, which may be {#code null}
                 * @exception IllegalStateException if the password has
                 *               been cleared (destroyed)
                 */
                // @ts-ignore
                getPassword(): char[]
                /**
                 * Clears the password.
                 * @exception DestroyFailedException if this method was unable
                 *       to clear the password
                 */
                // @ts-ignore
                destroy(): void
                /**
                 * Determines if password has been cleared.
                 * @return true if the password has been cleared, false otherwise
                 */
                // @ts-ignore
                isDestroyed(): boolean
            }
        }
    }
}
