declare namespace java {
    namespace security {
        namespace cert {
            /**
             * A selector that defines a set of criteria for selecting
             * {@code Certificate}s. Classes that implement this interface
             * are often used to specify which {@code Certificate}s should
             * be retrieved from a {@code CertStore}.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this interface are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see Certificate
             * @see CertStore
             * @see CertStore#getCertificates
             * @author Steve Hanna
             * @since 1.4
             */
            // @ts-ignore
            interface CertSelector extends java.lang.Cloneable {
                /**
                 * Decides whether a {@code Certificate} should be selected.
                 * @param cert    the {#code Certificate} to be checked
                 * @return {#code true} if the {@code Certificate}
                 *  should be selected, {@code false} otherwise
                 */
                // @ts-ignore
                match(cert: java.security.cert.Certificate): boolean
                /**
                 * Makes a copy of this {@code CertSelector}. Changes to the
                 * copy will not affect the original and vice versa.
                 * @return a copy of this {#code CertSelector}
                 */
                // @ts-ignore
                clone(): any
            }
        }
    }
}
