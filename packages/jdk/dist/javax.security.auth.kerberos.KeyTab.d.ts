declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                /**
                 * This class encapsulates a keytab file.
                 * <p>
                 * A Kerberos JAAS login module that obtains long term secret keys from a
                 * keytab file should use this class. The login module will store
                 * an instance of this class in the private credential set of a
                 * {@link javax.security.auth.Subject Subject} during the commit phase of the
                 * authentication process.
                 * <p>
                 * If a {@code KeyTab} object is obtained from {@link #getUnboundInstance()}
                 * or {@link #getUnboundInstance(java.io.File)}, it is unbound and thus can be
                 * used by any service principal. Otherwise, if it's obtained from
                 * {@link #getInstance(KerberosPrincipal)} or
                 * {@link #getInstance(KerberosPrincipal, java.io.File)}, it is bound to the
                 * specific service principal and can only be used by it.
                 * <p>
                 * Please note the constructors {@link #getInstance()} and
                 * {@link #getInstance(java.io.File)} were created when there was no support
                 * for unbound keytabs. These methods should not be used anymore. An object
                 * created with either of these methods are considered to be bound to an
                 * unknown principal, which means, its {@link #isBound()} returns true and
                 * {@link #getPrincipal()} returns null.
                 * <p>
                 * It might be necessary for the application to be granted a
                 * {@link javax.security.auth.PrivateCredentialPermission
                 * PrivateCredentialPermission} if it needs to access the KeyTab
                 * instance from a Subject. This permission is not needed when the
                 * application depends on the default JGSS Kerberos mechanism to access the
                 * KeyTab. In that case, however, the application will need an appropriate
                 * {@link javax.security.auth.kerberos.ServicePermission ServicePermission}.
                 * <p>
                 * The keytab file format is described at
                 * <a href="http://www.ioplex.com/utilities/keytab.txt">
                 * http://www.ioplex.com/utilities/keytab.txt</a>.
                 * <p>
                 * @since 1.7
                 */
                // @ts-ignore
                class KeyTab extends java.lang.Object {
                    /**
                     * Returns a {@code KeyTab} instance from a {@code File} object
                     * that is bound to an unknown service principal.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the file and does not read it.
                     * <p>
                     * Developers should call {@link #getInstance(KerberosPrincipal,File)}
                     * when the bound service principal is known.
                     * @param file the keytab {#code File} object, must not be null
                     * @return the keytab instance
                     * @throws NullPointerException if the {#code file} argument is null
                     */
                    // @ts-ignore
                    getInstance(file: java.io.File): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns an unbound {@code KeyTab} instance from a {@code File}
                     * object.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the file and does not read it.
                     * @param file the keytab {#code File} object, must not be null
                     * @return the keytab instance
                     * @throws NullPointerException if the file argument is null
                     * @since 1.8
                     */
                    // @ts-ignore
                    getUnboundInstance(file: java.io.File): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns a {@code KeyTab} instance from a {@code File} object
                     * that is bound to the specified service principal.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the file and does not read it.
                     * @param princ the bound service principal, must not be null
                     * @param file the keytab {#code File} object, must not be null
                     * @return the keytab instance
                     * @throws NullPointerException if either of the arguments is null
                     * @since 1.8
                     */
                    // @ts-ignore
                    getInstance(princ: javax.security.auth.kerberos.KerberosPrincipal, file: java.io.File): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns the default {@code KeyTab} instance that is bound
                     * to an unknown service principal.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the default keytab file and
                     * does not read it.
                     * <p>
                     * Developers should call {@link #getInstance(KerberosPrincipal)}
                     * when the bound service principal is known.
                     * @return the default keytab instance.
                     */
                    // @ts-ignore
                    getInstance(): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns the default unbound {@code KeyTab} instance.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the default keytab file and
                     * does not read it.
                     * @return the default keytab instance
                     * @since 1.8
                     */
                    // @ts-ignore
                    getUnboundInstance(): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns the default {@code KeyTab} instance that is bound
                     * to the specified service principal.
                     * <p>
                     * The result of this method is never null. This method only associates
                     * the returned {@code KeyTab} object with the default keytab file and
                     * does not read it.
                     * @param princ the bound service principal, must not be null
                     * @return the default keytab instance
                     * @throws NullPointerException if {#code princ} is null
                     * @since 1.8
                     */
                    // @ts-ignore
                    getInstance(princ: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KeyTab
                    /**
                     * Returns fresh keys for the given Kerberos principal.
                     * <p>
                     * Implementation of this method should make sure the returned keys match
                     * the latest content of the keytab file. The result is a newly created
                     * copy that can be modified by the caller without modifying the keytab
                     * object. The caller should {@link KerberosKey#destroy() destroy} the
                     * result keys after they are used.
                     * <p>
                     * Please note that the keytab file can be created after the
                     * {@code KeyTab} object is instantiated and its content may change over
                     * time. Therefore, an application should call this method only when it
                     * needs to use the keys. Any previous result from an earlier invocation
                     * could potentially be expired.
                     * <p>
                     * If there is any error (say, I/O error or format error)
                     * during the reading process of the KeyTab file, a saved result should be
                     * returned. If there is no saved result (say, this is the first time this
                     * method is called, or, all previous read attempts failed), an empty array
                     * should be returned. This can make sure the result is not drastically
                     * changed during the (probably slow) update of the keytab file.
                     * <p>
                     * Each time this method is called and the reading of the file succeeds
                     * with no exception (say, I/O error or file format error),
                     * the result should be saved for {@code principal}. The implementation can
                     * also save keys for other principals having keys in the same keytab object
                     * if convenient.
                     * <p>
                     * Any unsupported key read from the keytab is ignored and not included
                     * in the result.
                     * <p>
                     * If this keytab is bound to a specific principal, calling this method on
                     * another principal will return an empty array.
                     * @param principal the Kerberos principal, must not be null.
                     * @return the keys (never null, may be empty)
                     * @throws NullPointerException if the {#code principal}
                     *  argument is null
                     * @throws SecurityException if a security manager exists and the read
                     *  access to the keytab file is not permitted
                     */
                    // @ts-ignore
                    getKeys(principal: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
                    /**
                     * Checks if the keytab file exists. Implementation of this method
                     * should make sure that the result matches the latest status of the
                     * keytab file.
                     * <p>
                     * The caller can use the result to determine if it should fallback to
                     * another mechanism to read the keys.
                     * @return true if the keytab file exists; false otherwise.
                     * @throws SecurityException if a security manager exists and the read
                     *  access to the keytab file is not permitted
                     */
                    // @ts-ignore
                    exists(): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Returns a hashcode for this KeyTab.
                     * @return a hashCode() for the {#code KeyTab}
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Compares the specified Object with this KeyTab for equality.
                     * Returns true if the given object is also a
                     * {@code KeyTab} and the two
                     * {@code KeyTab} instances are equivalent.
                     * @param other the Object to compare to
                     * @return true if the specified object is equal to this KeyTab
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * Returns the service principal this {@code KeyTab} object
                     * is bound to. Returns {@code null} if it's not bound.
                     * <p>
                     * Please note the deprecated constructors create a KeyTab object bound for
                     * some unknown principal. In this case, this method also returns null.
                     * User can call {@link #isBound()} to verify this case.
                     * @return the service principal
                     * @since 1.8
                     */
                    // @ts-ignore
                    getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    /**
                     * Returns if the keytab is bound to a principal
                     * @return if the keytab is bound to a principal
                     * @since 1.8
                     */
                    // @ts-ignore
                    isBound(): boolean
                }
            }
        }
    }
}
