declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies the set of parameters used with OAEP Padding,
             * as defined in the
             * <a href="http://www.ietf.org/rfc/rfc3447.txt">PKCS #1</a>
             * standard.
             * Its ASN.1 definition in PKCS#1 standard is described below:
             * <pre>
             * RSAES-OAEP-params ::= SEQUENCE {
             * hashAlgorithm      [0] OAEP-PSSDigestAlgorithms     DEFAULT sha1,
             * maskGenAlgorithm   [1] PKCS1MGFAlgorithms  DEFAULT mgf1SHA1,
             * pSourceAlgorithm   [2] PKCS1PSourceAlgorithms  DEFAULT pSpecifiedEmpty
             * }
             * </pre>
             * where
             * <pre>
             * OAEP-PSSDigestAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-sha1 PARAMETERS NULL   }|
             * { OID id-sha256 PARAMETERS NULL }|
             * { OID id-sha384 PARAMETERS NULL }|
             * { OID id-sha512 PARAMETERS NULL },
             * ...  -- Allows for future expansion --
             * }
             * PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-mgf1 PARAMETERS OAEP-PSSDigestAlgorithms },
             * ...  -- Allows for future expansion --
             * }
             * PKCS1PSourceAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-pSpecified PARAMETERS OCTET STRING },
             * ...  -- Allows for future expansion --
             * }
             * </pre>
             * <p>Note: the OAEPParameterSpec.DEFAULT uses the following:
             * message digest  -- "SHA-1"
             * mask generation function (mgf) -- "MGF1"
             * parameters for mgf -- MGF1ParameterSpec.SHA1
             * source of encoding input -- PSource.PSpecified.DEFAULT
             * @see java.security.spec.MGF1ParameterSpec
             * @see PSource
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class OAEPParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a parameter set for OAEP padding as defined in
                 * the PKCS #1 standard using the specified message digest
                 * algorithm <code>mdName</code>, mask generation function
                 * algorithm <code>mgfName</code>, parameters for the mask
                 * generation function <code>mgfSpec</code>, and source of
                 * the encoding input P <code>pSrc</code>.
                 * @param mdName the algorithm name for the message digest.
                 * @param mgfName the algorithm name for the mask generation
                 *  function.
                 * @param mgfSpec the parameters for the mask generation function.
                 *  If null is specified, null will be returned by getMGFParameters().
                 * @param pSrc the source of the encoding input P.
                 * @exception NullPointerException if <code>mdName</code>,
                 *  <code>mgfName</code>, or <code>pSrc</code> is null.
                 */
                // @ts-ignore
                constructor(mdName: java.lang.String | string, mgfName: java.lang.String | string, mgfSpec: java.security.spec.AlgorithmParameterSpec, pSrc: javax.crypto.spec.PSource)
                /**
                 * The OAEP parameter set with all default values.
                 */
                // @ts-ignore
                public static readonly DEFAULT: javax.crypto.spec.OAEPParameterSpec
                /**
                 * Returns the message digest algorithm name.
                 * @return the message digest algorithm name.
                 */
                // @ts-ignore
                public getDigestAlgorithm(): string
                /**
                 * Returns the mask generation function algorithm name.
                 * @return the mask generation function algorithm name.
                 */
                // @ts-ignore
                public getMGFAlgorithm(): string
                /**
                 * Returns the parameters for the mask generation function.
                 * @return the parameters for the mask generation function.
                 */
                // @ts-ignore
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                /**
                 * Returns the source of encoding input P.
                 * @return the source of encoding input P.
                 */
                // @ts-ignore
                public getPSource(): javax.crypto.spec.PSource
            }
        }
    }
}
