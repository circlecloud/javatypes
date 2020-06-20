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
                // @ts-ignore
                values(): java.security.cert.PKIXReason[]
                // @ts-ignore
                valueOf(name: string): java.security.cert.PKIXReason
            }
        }
    }
}
