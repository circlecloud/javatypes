declare namespace java {
    namespace security {
        namespace cert {
            /**
             * This class represents the successful result of the PKIX certification
             * path validation algorithm.
             * <p>Instances of {@code PKIXCertPathValidatorResult} are returned by the
             * {@link CertPathValidator#validate validate} method of
             * {@code CertPathValidator} objects implementing the PKIX algorithm.
             * <p> All {@code PKIXCertPathValidatorResult} objects contain the
             * valid policy tree and subject public key resulting from the
             * validation algorithm, as well as a {@code TrustAnchor} describing
             * the certification authority (CA) that served as a trust anchor for the
             * certification path.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see CertPathValidatorResult
             * @since 1.4
             * @author Yassir Elley
             * @author Sean Mullan
             */
            // @ts-ignore
            class PKIXCertPathValidatorResult extends java.lang.Object implements java.security.cert.CertPathValidatorResult {
                /**
                 * Creates an instance of {@code PKIXCertPathValidatorResult}
                 * containing the specified parameters.
                 * @param trustAnchor a {#code TrustAnchor} describing the CA that
                 *  served as a trust anchor for the certification path
                 * @param policyTree the immutable valid policy tree, or {#code null}
                 *  if there are no valid policies
                 * @param subjectPublicKey the public key of the subject
                 * @throws NullPointerException if the {#code subjectPublicKey} or
                 *  {@code trustAnchor} parameters are {@code null}
                 */
                // @ts-ignore
                constructor(trustAnchor: java.security.cert.TrustAnchor, policyTree: java.security.cert.PolicyNode, subjectPublicKey: java.security.PublicKey)
                /**
                 * Returns the {@code TrustAnchor} describing the CA that served
                 * as a trust anchor for the certification path.
                 * @return the {#code TrustAnchor} (never {@code null})
                 */
                // @ts-ignore
                getTrustAnchor(): java.security.cert.TrustAnchor
                /**
                 * Returns the root node of the valid policy tree resulting from the
                 * PKIX certification path validation algorithm. The
                 * {@code PolicyNode} object that is returned and any objects that
                 * it returns through public methods are immutable.
                 * <p>Most applications will not need to examine the valid policy tree.
                 * They can achieve their policy processing goals by setting the
                 * policy-related parameters in {@code PKIXParameters}. However, more
                 * sophisticated applications, especially those that process policy
                 * qualifiers, may need to traverse the valid policy tree using the
                 * {@link PolicyNode#getParent PolicyNode.getParent} and
                 * {@link PolicyNode#getChildren PolicyNode.getChildren} methods.
                 * @return the root node of the valid policy tree, or {#code null}
                 *  if there are no valid policies
                 */
                // @ts-ignore
                getPolicyTree(): java.security.cert.PolicyNode
                /**
                 * Returns the public key of the subject (target) of the certification
                 * path, including any inherited public key parameters if applicable.
                 * @return the public key of the subject (never {#code null})
                 */
                // @ts-ignore
                getPublicKey(): java.security.PublicKey
                /**
                 * Returns a copy of this object.
                 * @return the copy
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Return a printable representation of this
                 * {@code PKIXCertPathValidatorResult}.
                 * @return a {#code String} describing the contents of this
                 *          {@code PKIXCertPathValidatorResult}
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
