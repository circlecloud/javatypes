declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Detects whether an XML stream is using DTD- or XSD-based validation.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 2.0
                 */
                // @ts-ignore
                class XmlValidationModeDetector extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Indicates that the validation should be disabled.
                     */
                    // @ts-ignore
                    readonly VALIDATION_NONE: number /*int*/
                    /**
                     * Indicates that the validation mode should be auto-guessed, since we cannot find
                     * a clear indication (probably choked on some special characters, or the like).
                     */
                    // @ts-ignore
                    readonly VALIDATION_AUTO: number /*int*/
                    /**
                     * Indicates that DTD validation should be used (we found a "DOCTYPE" declaration).
                     */
                    // @ts-ignore
                    readonly VALIDATION_DTD: number /*int*/
                    /**
                     * Indicates that XSD validation should be used (found no "DOCTYPE" declaration).
                     */
                    // @ts-ignore
                    readonly VALIDATION_XSD: number /*int*/
                    /**
                     * Detect the validation mode for the XML document in the supplied {@link InputStream}.
                     * Note that the supplied {@link InputStream} is closed by this method before returning.
                     * @param inputStream the InputStream to parse
                     * @throws IOException in case of I/O failure
                     * @see #VALIDATION_DTD
                     * @see #VALIDATION_XSD
                     */
                    // @ts-ignore
                    detectValidationMode(inputStream: java.io.InputStream): int
                }
            }
        }
    }
}
