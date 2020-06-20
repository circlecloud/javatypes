declare namespace java {
    namespace security {
        namespace cert {
            namespace CertPath {
                /**
                 * Alternate {@code CertPath} class for serialization.
                 * @since 1.4
                 */
                // @ts-ignore
                class CertPathRep extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a {@code CertPathRep} with the specified
                     * type and encoded form of a certification path.
                     * @param type the standard name of a {#code CertPath} type
                     * @param data the encoded form of the certification path
                     */
                    // @ts-ignore
                    constructor(type: string, data: number /*byte*/[])
                    /**
                     * Returns a {@code CertPath} constructed from the type and data.
                     * @return the resolved {#code CertPath} object
                     * @throws ObjectStreamException if a {#code CertPath} could not
                     *  be constructed
                     */
                    // @ts-ignore
                    readResolve(): java.lang.Object
                }
            }
        }
    }
}
