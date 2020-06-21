declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This immutable class specifies the set of parameters used for
             * generating elliptic curve (EC) domain parameters.
             * @see AlgorithmParameterSpec
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            class ECGenParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Creates a parameter specification for EC parameter
                 * generation using a standard (or predefined) name
                 * {@code stdName} in order to generate the corresponding
                 * (precomputed) elliptic curve domain parameters. For the
                 * list of supported names, please consult the documentation
                 * of provider whose implementation will be used.
                 * @param stdName the standard name of the to-be-generated EC
                 *  domain parameters.
                 * @exception NullPointerException if {#code stdName}
                 *  is null.
                 */
                // @ts-ignore
                constructor(stdName: java.lang.String | string)
                /**
                 * Returns the standard or predefined name of the
                 * to-be-generated EC domain parameters.
                 * @return the standard or predefined name.
                 */
                // @ts-ignore
                public getName(): string
            }
        }
    }
}
