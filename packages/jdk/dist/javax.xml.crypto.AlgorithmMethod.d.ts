declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * An abstract representation of an algorithm defined in the XML Security
             * specifications. Subclasses represent specific types of XML security
             * algorithms, such as a {@link javax.xml.crypto.dsig.Transform}.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             */
            // @ts-ignore
            interface AlgorithmMethod {
                /**
                 * Returns the algorithm URI of this <code>AlgorithmMethod</code>.
                 * @return the algorithm URI of this <code>AlgorithmMethod</code>
                 */
                // @ts-ignore
                getAlgorithm(): java.lang.String
                /**
                 * Returns the algorithm parameters of this <code>AlgorithmMethod</code>.
                 * @return the algorithm parameters of this <code>AlgorithmMethod</code>.
                 *     Returns <code>null</code> if this <code>AlgorithmMethod</code> does
                 *     not require parameters and they are not specified.
                 */
                // @ts-ignore
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec
            }
        }
    }
}
