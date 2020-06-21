declare namespace java {
    namespace security {
        namespace cert {
            namespace PKIXRevocationChecker {
                /**
                 * Various revocation options that can be specified for the revocation
                 * checking mechanism.
                 */
                // @ts-ignore
                class Option extends java.lang.Enum<java.security.cert.PKIXRevocationChecker.Option> {
                    /**
                     * Only check the revocation status of end-entity certificates.
                     */
                    // @ts-ignore
                    readonly ONLY_END_ENTITY: java.security.cert.PKIXRevocationChecker.Option
                    /**
                     * Prefer CRLs to OSCP. The default behavior is to prefer OCSP. Each
                     * PKIX implementation should document further details of their
                     * specific preference rules and fallback policies.
                     */
                    // @ts-ignore
                    readonly PREFER_CRLS: java.security.cert.PKIXRevocationChecker.Option
                    /**
                     * Disable the fallback mechanism.
                     */
                    // @ts-ignore
                    readonly NO_FALLBACK: java.security.cert.PKIXRevocationChecker.Option
                    /**
                     * Allow revocation check to succeed if the revocation status cannot be
                     * determined for one of the following reasons:
                     * <ul>
                     * <li>The CRL or OCSP response cannot be obtained because of a
                     * network error.
                     * <li>The OCSP responder returns one of the following errors
                     * specified in section 2.3 of RFC 2560: internalError or tryLater.
                     * </ul><br>
                     * Note that these conditions apply to both OCSP and CRLs, and unless
                     * the {@code NO_FALLBACK} option is set, the revocation check is
                     * allowed to succeed only if both mechanisms fail under one of the
                     * conditions as stated above.
                     * Exceptions that cause the network errors are ignored but can be
                     * later retrieved by calling the
                     * {@link #getSoftFailExceptions getSoftFailExceptions} method.
                     */
                    // @ts-ignore
                    readonly SOFT_FAIL: java.security.cert.PKIXRevocationChecker.Option
                    // @ts-ignore
                    values(): java.security.cert.PKIXRevocationChecker.Option[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.security.cert.PKIXRevocationChecker.Option
                }
            }
        }
    }
}
