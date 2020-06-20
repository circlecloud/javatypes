declare namespace java {
    namespace security {
        namespace cert {
            namespace Certificate {
                /**
                 * Alternate Certificate class for serialization.
                 * @since 1.3
                 */
                // @ts-ignore
                class CertificateRep extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Construct the alternate Certificate class with the Certificate
                     * type and Certificate encoding bytes.
                     * <p>
                     * @param type the standard name of the Certificate type. <p>
                     * @param data the Certificate data.
                     */
                    // @ts-ignore
                    constructor(type: string, data: number /*byte*/[])
                    /**
                     * Resolve the Certificate Object.
                     * <p>
                     * @return the resolved Certificate Object
                     * @throws java.io.ObjectStreamException if the Certificate
                     *       could not be resolved
                     */
                    // @ts-ignore
                    readResolve(): java.lang.Object
                }
            }
        }
    }
}
