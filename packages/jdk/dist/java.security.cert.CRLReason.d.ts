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
                // @ts-ignore
                values(): java.security.cert.CRLReason[]
                // @ts-ignore
                valueOf(name: string): java.security.cert.CRLReason
            }
        }
    }
}
