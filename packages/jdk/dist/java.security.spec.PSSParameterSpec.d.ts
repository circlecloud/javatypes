declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies a parameter spec for RSA-PSS signature scheme,
             * as defined in the
             * <a href="http://www.ietf.org/rfc/rfc3447.txt">PKCS#1 v2.1</a>
             * standard.
             * <p>Its ASN.1 definition in PKCS#1 standard is described below:
             * <pre>
             * RSASSA-PSS-params ::= SEQUENCE {
             * hashAlgorithm      [0] OAEP-PSSDigestAlgorithms  DEFAULT sha1,
             * maskGenAlgorithm   [1] PKCS1MGFAlgorithms  DEFAULT mgf1SHA1,
             * saltLength         [2] INTEGER  DEFAULT 20,
             * trailerField       [3] INTEGER  DEFAULT 1
             * }
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
             * PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-mgf1 PARAMETERS OAEP-PSSDigestAlgorithms },
             * ...  -- Allows for future expansion --
             * }
             * </pre>
             * <p>Note: the PSSParameterSpec.DEFAULT uses the following:
             * message digest  -- "SHA-1"
             * mask generation function (mgf) -- "MGF1"
             * parameters for mgf -- MGF1ParameterSpec.SHA1
             * SaltLength   -- 20
             * TrailerField -- 1
             * @see MGF1ParameterSpec
             * @see AlgorithmParameterSpec
             * @see java.security.Signature
             * @author Valerie Peng
             * @since 1.4
             */
            // @ts-ignore
            class PSSParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Creates a new {@code PSSParameterSpec} as defined in
                 * the PKCS #1 standard using the specified message digest,
                 * mask generation function, parameters for mask generation
                 * function, salt length, and trailer field values.
                 * @param mdName the algorithm name of the hash function.
                 * @param mgfName the algorithm name of the mask generation
                 *  function.
                 * @param mgfSpec the parameters for the mask generation
                 *  function. If null is specified, null will be returned by
                 *  getMGFParameters().
                 * @param saltLen the length of salt.
                 * @param trailerField the value of the trailer field.
                 * @exception NullPointerException if {#code mdName},
                 *  or {@code mgfName} is null.
                 * @exception IllegalArgumentException if {#code saltLen}
                 *  or {@code trailerField} is less than 0.
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(mdName: java.lang.String | string, mgfName: java.lang.String | string, mgfSpec: java.security.spec.AlgorithmParameterSpec, saltLen: number /*int*/, trailerField: number /*int*/)
                /**
                 * Creates a new {@code PSSParameterSpec}
                 * using the specified salt length and other default values as
                 * defined in PKCS#1.
                 * @param saltLen the length of salt in bits to be used in PKCS#1
                 *  PSS encoding.
                 * @exception IllegalArgumentException if {#code saltLen} is
                 *  less than 0.
                 */
                // @ts-ignore
                constructor(saltLen: number /*int*/)
                /**
                 * The PSS parameter set with all default values.
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly DEFAULT: java.security.spec.PSSParameterSpec
                /**
                 * Returns the message digest algorithm name.
                 * @return the message digest algorithm name.
                 * @since 1.5
                 */
                // @ts-ignore
                public getDigestAlgorithm(): string
                /**
                 * Returns the mask generation function algorithm name.
                 * @return the mask generation function algorithm name.
                 * @since 1.5
                 */
                // @ts-ignore
                public getMGFAlgorithm(): string
                /**
                 * Returns the parameters for the mask generation function.
                 * @return the parameters for the mask generation function.
                 * @since 1.5
                 */
                // @ts-ignore
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                /**
                 * Returns the salt length in bits.
                 * @return the salt length.
                 */
                // @ts-ignore
                public getSaltLength(): number /*int*/
                /**
                 * Returns the value for the trailer field, i.e. bc in PKCS#1 v2.1.
                 * @return the value for the trailer field, i.e. bc in PKCS#1 v2.1.
                 * @since 1.5
                 */
                // @ts-ignore
                public getTrailerField(): number /*int*/
            }
        }
    }
}
