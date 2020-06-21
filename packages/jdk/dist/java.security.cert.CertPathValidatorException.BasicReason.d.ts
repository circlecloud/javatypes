declare namespace java {
    namespace security {
        namespace cert {
            namespace CertPathValidatorException {
                /**
                 * The BasicReason enumerates the potential reasons that a certification
                 * path of any type may be invalid.
                 * @since 1.7
                 */
                // @ts-ignore
                class BasicReason extends java.lang.Enum<java.security.cert.CertPathValidatorException.BasicReason> implements java.security.cert.CertPathValidatorException.Reason {
                    /**
                     * Unspecified reason.
                     */
                    // @ts-ignore
                    readonly UNSPECIFIED: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The certificate is expired.
                     */
                    // @ts-ignore
                    readonly EXPIRED: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The certificate is not yet valid.
                     */
                    // @ts-ignore
                    readonly NOT_YET_VALID: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The certificate is revoked.
                     */
                    // @ts-ignore
                    readonly REVOKED: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The revocation status of the certificate could not be determined.
                     */
                    // @ts-ignore
                    readonly UNDETERMINED_REVOCATION_STATUS: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The signature is invalid.
                     */
                    // @ts-ignore
                    readonly INVALID_SIGNATURE: java.security.cert.CertPathValidatorException.BasicReason
                    /**
                     * The public key or the signature algorithm has been constrained.
                     */
                    // @ts-ignore
                    readonly ALGORITHM_CONSTRAINED: java.security.cert.CertPathValidatorException.BasicReason
                    // @ts-ignore
                    values(): java.security.cert.CertPathValidatorException.BasicReason[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.security.cert.CertPathValidatorException.BasicReason
                }
            }
        }
    }
}
