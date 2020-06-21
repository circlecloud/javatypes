declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace KeySelector {
                /**
                 * The purpose of the key that is to be selected.
                 */
                // @ts-ignore
                class Purpose extends java.lang.Object {
                    /**
                     * A key for signing.
                     */
                    // @ts-ignore
                    public static readonly SIGN: javax.xml.crypto.KeySelector.Purpose
                    /**
                     * A key for verifying.
                     */
                    // @ts-ignore
                    public static readonly VERIFY: javax.xml.crypto.KeySelector.Purpose
                    /**
                     * A key for encrypting.
                     */
                    // @ts-ignore
                    public static readonly ENCRYPT: javax.xml.crypto.KeySelector.Purpose
                    /**
                     * A key for decrypting.
                     */
                    // @ts-ignore
                    public static readonly DECRYPT: javax.xml.crypto.KeySelector.Purpose
                    /**
                     * Returns a string representation of this purpose ("sign",
                     * "verify", "encrypt", or "decrypt").
                     * @return a string representation of this purpose
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
