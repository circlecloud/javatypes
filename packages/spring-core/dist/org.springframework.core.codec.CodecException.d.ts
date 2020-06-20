declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * General error that indicates a problem while encoding and decoding to and
                 * from an Object stream.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class CodecException extends org.springframework.core.NestedRuntimeException {
                    /**
                     * Create a new CodecException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new CodecException.
                     * @param msg the detail message
                     * @param cause root cause for the exception, if any
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
