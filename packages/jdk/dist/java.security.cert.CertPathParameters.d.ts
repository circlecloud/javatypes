declare namespace java {
    namespace security {
        namespace cert {
            /**
             * A specification of certification path algorithm parameters.
             * The purpose of this interface is to group (and provide type safety for)
             * all {@code CertPath} parameter specifications. All
             * {@code CertPath} parameter specifications must implement this
             * interface.
             * @author Yassir Elley
             * @see CertPathValidator#validate(CertPath, CertPathParameters)
             * @see CertPathBuilder#build(CertPathParameters)
             * @since 1.4
             */
            // @ts-ignore
            interface CertPathParameters extends java.lang.Cloneable {
                /**
                 * Makes a copy of this {@code CertPathParameters}. Changes to the
                 * copy will not affect the original and vice versa.
                 * @return a copy of this {#code CertPathParameters}
                 */
                // @ts-ignore
                clone(): any
            }
        }
    }
}
