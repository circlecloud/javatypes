declare namespace java {
    namespace security {
        namespace cert {
            /**
             * This class represents the successful result of the PKIX certification
             * path builder algorithm. All certification paths that are built and
             * returned using this algorithm are also validated according to the PKIX
             * certification path validation algorithm.
             * <p>Instances of {@code PKIXCertPathBuilderResult} are returned by
             * the {@code build} method of {@code CertPathBuilder}
             * objects implementing the PKIX algorithm.
             * <p>All {@code PKIXCertPathBuilderResult} objects contain the
             * certification path constructed by the build algorithm, the
             * valid policy tree and subject public key resulting from the build
             * algorithm, and a {@code TrustAnchor} describing the certification
             * authority (CA) that served as a trust anchor for the certification path.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see CertPathBuilderResult
             * @since 1.4
             * @author Anne Anderson
             */
            // @ts-ignore
            class PKIXCertPathBuilderResult extends java.security.cert.PKIXCertPathValidatorResult implements java.security.cert.CertPathBuilderResult {
                /**
                 * Creates an instance of {@code PKIXCertPathBuilderResult}
                 * containing the specified parameters.
                 * @param certPath the validated {#code CertPath}
                 * @param trustAnchor a {#code TrustAnchor} describing the CA that
                 *  served as a trust anchor for the certification path
                 * @param policyTree the immutable valid policy tree, or {#code null}
                 *  if there are no valid policies
                 * @param subjectPublicKey the public key of the subject
                 * @throws NullPointerException if the {#code certPath},
                 *  {@code trustAnchor} or {@code subjectPublicKey} parameters
                 *  are {@code null}
                 */
                // @ts-ignore
                constructor(certPath: java.security.cert.CertPath, trustAnchor: java.security.cert.TrustAnchor, policyTree: java.security.cert.PolicyNode, subjectPublicKey: java.security.PublicKey)
                /**
                 * Returns the built and validated certification path. The
                 * {@code CertPath} object does not include the trust anchor.
                 * Instead, use the {@link #getTrustAnchor() getTrustAnchor()} method to
                 * obtain the {@code TrustAnchor} that served as the trust anchor
                 * for the certification path.
                 * @return the built and validated {#code CertPath} (never
                 *  {@code null})
                 */
                // @ts-ignore
                getCertPath(): java.security.cert.CertPath
                /**
                 * Return a printable representation of this
                 * {@code PKIXCertPathBuilderResult}.
                 * @return a {#code String} describing the contents of this
                 *          {@code PKIXCertPathBuilderResult}
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
