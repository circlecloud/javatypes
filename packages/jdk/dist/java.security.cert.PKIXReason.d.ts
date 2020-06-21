declare namespace java {
    namespace security {
        namespace cert {
            /**
             * The {@code PKIXReason} enumerates the potential PKIX-specific reasons
             * that an X.509 certification path may be invalid according to the PKIX
             * (RFC 3280) standard. These reasons are in addition to those of the
             * {@code CertPathValidatorException.BasicReason} enumeration.
             * @since 1.7
             */
            // @ts-ignore
            class PKIXReason extends java.lang.Enum<java.security.cert.PKIXReason> implements java.security.cert.CertPathValidatorException.Reason {
                /**
                 * The certificate does not chain correctly.
                 */
                // @ts-ignore
                readonly NAME_CHAINING: java.security.cert.PKIXReason
                /**
                 * The certificate's key usage is invalid.
                 */
                // @ts-ignore
                readonly INVALID_KEY_USAGE: java.security.cert.PKIXReason
                /**
                 * The policy constraints have been violated.
                 */
                // @ts-ignore
                readonly INVALID_POLICY: java.security.cert.PKIXReason
                /**
                 * No acceptable trust anchor found.
                 */
                // @ts-ignore
                readonly NO_TRUST_ANCHOR: java.security.cert.PKIXReason
                /**
                 * The certificate contains one or more unrecognized critical
                 * extensions.
                 */
                // @ts-ignore
                readonly UNRECOGNIZED_CRIT_EXT: java.security.cert.PKIXReason
                /**
                 * The certificate is not a CA certificate.
                 */
                // @ts-ignore
                readonly NOT_CA_CERT: java.security.cert.PKIXReason
                /**
                 * The path length constraint has been violated.
                 */
                // @ts-ignore
                readonly PATH_TOO_LONG: java.security.cert.PKIXReason
                /**
                 * The name constraints have been violated.
                 */
                // @ts-ignore
                readonly INVALID_NAME: java.security.cert.PKIXReason
                // @ts-ignore
                values(): java.security.cert.PKIXReason[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.security.cert.PKIXReason
            }
        }
    }
}
