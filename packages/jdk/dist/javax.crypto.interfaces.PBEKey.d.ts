declare namespace javax {
    namespace crypto {
        namespace interfaces {
            /**
             * The interface to a PBE key.
             * @author Valerie Peng
             * @see javax.crypto.spec.PBEKeySpec
             * @see javax.crypto.SecretKey
             * @since 1.4
             */
            // @ts-ignore
            interface PBEKey extends javax.crypto.SecretKey {
                /**
                 * The class fingerprint that is set to indicate serialization
                 * compatibility since J2SE 1.4.
                 */
                // @ts-ignore
                
                /**
                 * Returns the password.
                 * <p> Note: this method should return a copy of the password. It is
                 * the caller's responsibility to zero out the password information after
                 * it is no longer needed.
                 * @return the password.
                 */
                // @ts-ignore
                getPassword(): char[]
                /**
                 * Returns the salt or null if not specified.
                 * <p> Note: this method should return a copy of the salt. It is
                 * the caller's responsibility to zero out the salt information after
                 * it is no longer needed.
                 * @return the salt.
                 */
                // @ts-ignore
                getSalt(): byte[]
                /**
                 * Returns the iteration count or 0 if not specified.
                 * @return the iteration count.
                 */
                // @ts-ignore
                getIterationCount(): int
            }
        }
    }
}
