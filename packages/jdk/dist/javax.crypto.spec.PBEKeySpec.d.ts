declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * A user-chosen password that can be used with password-based encryption
             * (<i>PBE</i>).
             * <p>The password can be viewed as some kind of raw key material, from which
             * the encryption mechanism that uses it derives a cryptographic key.
             * <p>Different PBE mechanisms may consume different bits of each password
             * character. For example, the PBE mechanism defined in
             * <a href="http://www.ietf.org/rfc/rfc2898.txt">
             * PKCS #5</a> looks at only the low order 8 bits of each character, whereas
             * PKCS #12 looks at all 16 bits of each character.
             * <p>You convert the password characters to a PBE key by creating an
             * instance of the appropriate secret-key factory. For example, a secret-key
             * factory for PKCS #5 will construct a PBE key from only the low order 8 bits
             * of each password character, whereas a secret-key factory for PKCS #12 will
             * take all 16 bits of each character.
             * <p>Also note that this class stores passwords as char arrays instead of
             * <code>String</code> objects (which would seem more logical), because the
             * String class is immutable and there is no way to overwrite its
             * internal value when the password stored in it is no longer needed. Hence,
             * this class requests the password as a char array, so it can be overwritten
             * when done.
             * @author Jan Luehe
             * @author Valerie Peng
             * @see javax.crypto.SecretKeyFactory
             * @see PBEParameterSpec
             * @since 1.4
             */
            // @ts-ignore
            class PBEKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Constructor that takes a password. An empty char[] is used if
                 * null is specified.
                 * <p> Note: <code>password</code> is cloned before it is stored in
                 * the new <code>PBEKeySpec</code> object.
                 * @param password the password.
                 */
                // @ts-ignore
                constructor(password: string[])
                /**
                 * Constructor that takes a password, salt, iteration count, and
                 * to-be-derived key length for generating PBEKey of variable-key-size
                 * PBE ciphers.  An empty char[] is used if null is specified for
                 * <code>password</code>.
                 * <p> Note: the <code>password</code> and <code>salt</code>
                 * are cloned before they are stored in
                 * the new <code>PBEKeySpec</code> object.
                 * @param password the password.
                 * @param salt the salt.
                 * @param iterationCount the iteration count.
                 * @param keyLength the to-be-derived key length.
                 * @exception NullPointerException if <code>salt</code> is null.
                 * @exception IllegalArgumentException if <code>salt</code> is empty,
                 *  i.e. 0-length, <code>iterationCount</code> or
                 *  <code>keyLength</code> is not positive.
                 */
                // @ts-ignore
                constructor(password: string[], salt: number /*byte*/[], iterationCount: number /*int*/, keyLength: number /*int*/)
                /**
                 * Constructor that takes a password, salt, iteration count for
                 * generating PBEKey of fixed-key-size PBE ciphers. An empty
                 * char[] is used if null is specified for <code>password</code>.
                 * <p> Note: the <code>password</code> and <code>salt</code>
                 * are cloned before they are stored in the new
                 * <code>PBEKeySpec</code> object.
                 * @param password the password.
                 * @param salt the salt.
                 * @param iterationCount the iteration count.
                 * @exception NullPointerException if <code>salt</code> is null.
                 * @exception IllegalArgumentException if <code>salt</code> is empty,
                 *  i.e. 0-length, or <code>iterationCount</code> is not positive.
                 */
                // @ts-ignore
                constructor(password: string[], salt: number /*byte*/[], iterationCount: number /*int*/)
                /**
                 * Clears the internal copy of the password.
                 */
                // @ts-ignore
                public clearPassword(): void
                /**
                 * Returns a copy of the password.
                 * <p> Note: this method returns a copy of the password. It is
                 * the caller's responsibility to zero out the password information after
                 * it is no longer needed.
                 * @exception IllegalStateException if password has been cleared by
                 *  calling <code>clearPassword</code> method.
                 * @return the password.
                 */
                // @ts-ignore
                public getPassword(): string[]
                /**
                 * Returns a copy of the salt or null if not specified.
                 * <p> Note: this method should return a copy of the salt. It is
                 * the caller's responsibility to zero out the salt information after
                 * it is no longer needed.
                 * @return the salt.
                 */
                // @ts-ignore
                public getSalt(): number /*byte*/[]
                /**
                 * Returns the iteration count or 0 if not specified.
                 * @return the iteration count.
                 */
                // @ts-ignore
                public getIterationCount(): number /*int*/
                /**
                 * Returns the to-be-derived key length or 0 if not specified.
                 * <p> Note: this is used to indicate the preference on key length
                 * for variable-key-size ciphers. The actual key size depends on
                 * each provider's implementation.
                 * @return the to-be-derived key length.
                 */
                // @ts-ignore
                public getKeyLength(): number /*int*/
            }
        }
    }
}
