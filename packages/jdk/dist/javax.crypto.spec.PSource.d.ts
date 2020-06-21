declare namespace javax {
    namespace crypto {
        namespace spec {
            /**
             * This class specifies the source for encoding input P in OAEP Padding,
             * as defined in the
             * <a href="http://www.ietf.org/rfc/rfc3447.txt">PKCS #1</a>
             * standard.
             * <pre>
             * PKCS1PSourceAlgorithms    ALGORITHM-IDENTIFIER ::= {
             * { OID id-pSpecified PARAMETERS OCTET STRING },
             * ...  -- Allows for future expansion --
             * }
             * </pre>
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class PSource extends java.lang.Object {
                /**
                 * Constructs a source of the encoding input P for OAEP
                 * padding as defined in the PKCS #1 standard using the
                 * specified PSource algorithm.
                 * @param pSrcName the algorithm for the source of the
                 *  encoding input P.
                 * @exception NullPointerException if <code>pSrcName</code>
                 *  is null.
                 */
                // @ts-ignore
                constructor(pSrcName: java.lang.String | string)
                /**
                 * Returns the PSource algorithm name.
                 * @return the PSource algorithm name.
                 */
                // @ts-ignore
                public getAlgorithm(): string
            }
        }
    }
}
