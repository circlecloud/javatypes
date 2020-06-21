declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies the set of parameters used with mask generation
             * function MGF1 in OAEP Padding and RSA-PSS signature scheme, as
             * defined in the
             * <a href="http://www.ietf.org/rfc/rfc3447.txt">PKCS #1 v2.1</a>
             * standard.
             * <p>Its ASN.1 definition in PKCS#1 standard is described below:
             * <pre>
             * MGF1Parameters ::= OAEP-PSSDigestAlgorthms
             * </pre>
             * where
             * <pre>
             * OAEP-PSSDigestAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-sha1 PARAMETERS NULL   }|
             * { OID id-sha224 PARAMETERS NULL   }|
             * { OID id-sha256 PARAMETERS NULL }|
             * { OID id-sha384 PARAMETERS NULL }|
             * { OID id-sha512 PARAMETERS NULL },
             * ...  -- Allows for future expansion --
             * }
             * </pre>
             * @see PSSParameterSpec
             * @see javax.crypto.spec.OAEPParameterSpec
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class MGF1ParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a parameter set for mask generation function MGF1
                 * as defined in the PKCS #1 standard.
                 * @param mdName the algorithm name for the message digest
                 *  used in this mask generation function MGF1.
                 * @exception NullPointerException if {#code mdName} is null.
                 */
                // @ts-ignore
                constructor(mdName: java.lang.String | string)
                /**
                 * The MGF1ParameterSpec which uses "SHA-1" message digest.
                 */
                // @ts-ignore
                public static readonly SHA1: java.security.spec.MGF1ParameterSpec
                /**
                 * The MGF1ParameterSpec which uses "SHA-224" message digest.
                 */
                // @ts-ignore
                public static readonly SHA224: java.security.spec.MGF1ParameterSpec
                /**
                 * The MGF1ParameterSpec which uses "SHA-256" message digest.
                 */
                // @ts-ignore
                public static readonly SHA256: java.security.spec.MGF1ParameterSpec
                /**
                 * The MGF1ParameterSpec which uses "SHA-384" message digest.
                 */
                // @ts-ignore
                public static readonly SHA384: java.security.spec.MGF1ParameterSpec
                /**
                 * The MGF1ParameterSpec which uses SHA-512 message digest.
                 */
                // @ts-ignore
                public static readonly SHA512: java.security.spec.MGF1ParameterSpec
                /**
                 * Returns the algorithm name of the message digest used by the mask
                 * generation function.
                 * @return the algorithm name of the message digest.
                 */
                // @ts-ignore
                public getDigestAlgorithm(): string
            }
        }
    }
}
