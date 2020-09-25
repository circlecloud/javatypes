declare namespace java {
    namespace security {
        namespace cert {
            /**
             * The CRLReason enumeration specifies the reason that a certificate
             * is revoked, as defined in <a href="http://www.ietf.org/rfc/rfc3280.txt">
             * RFC 3280: Internet X.509 Public Key Infrastructure Certificate and CRL
             * Profile</a>.
             * @author Sean Mullan
             * @since 1.7
             * @see X509CRLEntry#getRevocationReason
             * @see CertificateRevokedException#getRevocationReason
             */
            // @ts-ignore
            class CRLReason extends java.lang.Enum<java.security.cert.CRLReason> {
                /**
                 * This reason indicates that it is unspecified as to why the
                 * certificate has been revoked.
                 */
                // @ts-ignore
                public static readonly UNSPECIFIED: java.security.cert.CRLReason
                /**
                 * This reason indicates that it is known or suspected that the
                 * certificate subject's private key has been compromised. It applies
                 * to end-entity certificates only.
                 */
                // @ts-ignore
                public static readonly KEY_COMPROMISE: java.security.cert.CRLReason
                /**
                 * This reason indicates that it is known or suspected that the
                 * certificate subject's private key has been compromised. It applies
                 * to certificate authority (CA) certificates only.
                 */
                // @ts-ignore
                public static readonly CA_COMPROMISE: java.security.cert.CRLReason
                /**
                 * This reason indicates that the subject's name or other information
                 * has changed.
                 */
                // @ts-ignore
                public static readonly AFFILIATION_CHANGED: java.security.cert.CRLReason
                /**
                 * This reason indicates that the certificate has been superseded.
                 */
                // @ts-ignore
                public static readonly SUPERSEDED: java.security.cert.CRLReason
                /**
                 * This reason indicates that the certificate is no longer needed.
                 */
                // @ts-ignore
                public static readonly CESSATION_OF_OPERATION: java.security.cert.CRLReason
                /**
                 * This reason indicates that the certificate has been put on hold.
                 */
                // @ts-ignore
                public static readonly CERTIFICATE_HOLD: java.security.cert.CRLReason
                /**
                 * Unused reason.
                 */
                // @ts-ignore
                public static readonly UNUSED: java.security.cert.CRLReason
                /**
                 * This reason indicates that the certificate was previously on hold
                 * and should be removed from the CRL. It is for use with delta CRLs.
                 */
                // @ts-ignore
                public static readonly REMOVE_FROM_CRL: java.security.cert.CRLReason
                /**
                 * This reason indicates that the privileges granted to the subject of
                 * the certificate have been withdrawn.
                 */
                // @ts-ignore
                public static readonly PRIVILEGE_WITHDRAWN: java.security.cert.CRLReason
                /**
                 * This reason indicates that it is known or suspected that the
                 * certificate subject's private key has been compromised. It applies
                 * to authority attribute (AA) certificates only.
                 */
                // @ts-ignore
                public static readonly AA_COMPROMISE: java.security.cert.CRLReason
                // @ts-ignore
                public static values(): java.security.cert.CRLReason[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.security.cert.CRLReason
            }
        }
    }
}
