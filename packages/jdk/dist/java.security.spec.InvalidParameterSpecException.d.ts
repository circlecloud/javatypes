declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This is the exception for invalid parameter specifications.
             * @author Jan Luehe
             * @see java.security.AlgorithmParameters
             * @see AlgorithmParameterSpec
             * @see DSAParameterSpec
             * @since 1.2
             */
            // @ts-ignore
            class InvalidParameterSpecException extends java.security.GeneralSecurityException {
                /**
                 * Constructs an InvalidParameterSpecException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an InvalidParameterSpecException with the specified detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
