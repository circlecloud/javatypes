declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * Interface to a DSA-specific set of key parameters, which defines a
             * DSA <em>key family</em>. DSA (Digital Signature Algorithm) is defined
             * in NIST's FIPS-186.
             * @see DSAKey
             * @see java.security.Key
             * @see java.security.Signature
             * @author Benjamin Renaud
             * @author Josh Bloch
             */
            // @ts-ignore
            interface DSAParams {
                /**
                 * Returns the prime, {@code p}.
                 * @return the prime, {#code p}.
                 */
                // @ts-ignore
                getP(): java.math.BigInteger
                /**
                 * Returns the subprime, {@code q}.
                 * @return the subprime, {#code q}.
                 */
                // @ts-ignore
                getQ(): java.math.BigInteger
                /**
                 * Returns the base, {@code g}.
                 * @return the base, {#code g}.
                 */
                // @ts-ignore
                getG(): java.math.BigInteger
            }
        }
    }
}
