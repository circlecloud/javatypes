declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies the set of parameters used with password-based
             * encryption (PBE), as defined in the
             * <a href="http://www.ietf.org/rfc/rfc2898.txt">PKCS #5</a>
             * standard.
             * @author Jan Luehe
             * @since 1.4
             */
            // @ts-ignore
            class PBEParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a parameter set for password-based encryption as defined in
                 * the PKCS #5 standard.
                 * @param salt the salt. The contents of <code>salt</code> are copied
                 *  to protect against subsequent modification.
                 * @param iterationCount the iteration count.
                 * @exception NullPointerException if <code>salt</code> is null.
                 */
                // @ts-ignore
                constructor(salt: number /*byte*/[], iterationCount: number /*int*/)
                /**
                 * Constructs a parameter set for password-based encryption as defined in
                 * the PKCS #5 standard.
                 * @param salt the salt. The contents of <code>salt</code> are copied
                 *  to protect against subsequent modification.
                 * @param iterationCount the iteration count.
                 * @param paramSpec the cipher algorithm parameter specification, which
                 *  may be null.
                 * @exception NullPointerException if <code>salt</code> is null.
                 * @since 1.8
                 */
                // @ts-ignore
                constructor(salt: number /*byte*/[], iterationCount: number /*int*/, paramSpec: java.security.spec.AlgorithmParameterSpec)
                /**
                 * Returns the salt.
                 * @return the salt. Returns a new array
                 *  each time this method is called.
                 */
                // @ts-ignore
                getSalt(): byte[]
                /**
                 * Returns the iteration count.
                 * @return the iteration count
                 */
                // @ts-ignore
                getIterationCount(): int
                /**
                 * Returns the cipher algorithm parameter specification.
                 * @return the parameter specification, or null if none was set.
                 * @since 1.8
                 */
                // @ts-ignore
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec
            }
        }
    }
}
