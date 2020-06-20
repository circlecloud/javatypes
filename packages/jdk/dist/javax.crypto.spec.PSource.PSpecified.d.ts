declare namespace javax {
    namespace crypto {
        namespace spec {
            namespace PSource {
                /**
                 * This class is used to explicitly specify the value for
                 * encoding input P in OAEP Padding.
                 * @since 1.5
                 */
                // @ts-ignore
                class PSpecified extends javax.crypto.spec.PSource {
                    /**
                     * Constructs the source explicitly with the specified
                     * value <code>p</code> as the encoding input P.
                     * Note:
                     * @param p the value of the encoding input. The contents
                     *  of the array are copied to protect against subsequent
                     *  modification.
                     * @exception NullPointerException if <code>p</code> is null.
                     */
                    // @ts-ignore
                    constructor(p: number /*byte*/[])
                    /**
                     * The encoding input P whose value equals byte[0].
                     */
                    // @ts-ignore
                    readonly DEFAULT: javax.crypto.spec.PSource.PSpecified
                    /**
                     * Returns the value of encoding input P.
                     * @return the value of encoding input P. A new array is
                     *  returned each time this method is called.
                     */
                    // @ts-ignore
                    getValue(): byte[]
                }
            }
        }
    }
}
