declare namespace java {
    namespace security {
        namespace cert {
            /**
             * A specification of the result of a certification path validator algorithm.
             * <p>
             * The purpose of this interface is to group (and provide type safety
             * for) all certification path validator results. All results returned
             * by the {@link CertPathValidator#validate CertPathValidator.validate}
             * method must implement this interface.
             * @see CertPathValidator
             * @since 1.4
             * @author Yassir Elley
             */
            // @ts-ignore
            interface CertPathValidatorResult extends java.lang.Cloneable {
                /**
                 * Makes a copy of this {@code CertPathValidatorResult}. Changes to the
                 * copy will not affect the original and vice versa.
                 * @return a copy of this {#code CertPathValidatorResult}
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}
