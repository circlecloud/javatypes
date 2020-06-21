declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Indicates an issue with encoding the input Object stream with a focus on
                 * not being able to encode Objects. As opposed to a more general I/O errors
                 * or a {@link CodecException} such as a configuration issue that an
                 * {@link Encoder} may also choose to raise.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see Encoder
                 */
                // @ts-ignore
                class EncodingException extends org.springframework.core.codec.CodecException {
                    /**
                     * Create a new EncodingException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Create a new EncodingException.
                     * @param msg the detail message
                     * @param cause root cause for the exception, if any
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
