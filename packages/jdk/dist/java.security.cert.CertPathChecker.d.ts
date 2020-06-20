declare namespace java {
    namespace security {
        namespace cert {
            /**
             * <p>Performs one or more checks on each {@code Certificate} of a
             * {@code CertPath}.
             * <p>A {@code CertPathChecker} implementation is typically created to extend
             * a certification path validation algorithm. For example, an implementation
             * may check for and process a critical private extension of each certificate
             * in a certification path.
             * @since 1.8
             */
            // @ts-ignore
            interface CertPathChecker {
                /**
                 * Initializes the internal state of this {@code CertPathChecker}.
                 * <p>The {@code forward} flag specifies the order that certificates will
                 * be passed to the {@link #check check} method (forward or reverse).
                 * @param forward the order that certificates are presented to the
                 *         {#code check} method. If {@code true}, certificates are
                 *         presented from target to trust anchor (forward); if
                 *         {@code false}, from trust anchor to target (reverse).
                 * @throws CertPathValidatorException if this {#code CertPathChecker} is
                 *          unable to check certificates in the specified order
                 */
                // @ts-ignore
                init(forward: boolean): void
                /**
                 * Indicates if forward checking is supported. Forward checking refers
                 * to the ability of the {@code CertPathChecker} to perform its checks
                 * when certificates are presented to the {@code check} method in the
                 * forward direction (from target to trust anchor).
                 * @return {#code true} if forward checking is supported, {@code false}
                 *          otherwise
                 */
                // @ts-ignore
                isForwardCheckingSupported(): boolean
                /**
                 * Performs the check(s) on the specified certificate using its internal
                 * state. The certificates are presented in the order specified by the
                 * {@code init} method.
                 * @param cert the {#code Certificate} to be checked
                 * @throws CertPathValidatorException if the specified certificate does
                 *          not pass the check
                 */
                // @ts-ignore
                check(cert: java.security.cert.Certificate): void
            }
        }
    }
}
