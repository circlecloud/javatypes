declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Abstract base class for {@link Decoder} implementations.
                 * @author Sebastien Deleuze
                 * @author Arjen Poutsma
                 * @since 5.0
                 * @param <T> the element type
                 */
                // @ts-ignore
                class AbstractDecoder<T> extends java.lang.Object implements org.springframework.core.codec.Decoder<T> {
                    // @ts-ignore
                    constructor(...supportedMimeTypes: org.springframework.util.MimeType[])
                    // @ts-ignore
                    logger: Log
                    /**
                     * Set an alternative logger to use than the one based on the class name.
                     * @param logger the logger to use
                     * @since 5.1
                     */
                    // @ts-ignore
                    setLogger(logger: Log): void
                    /**
                     * Return the currently configured Logger.
                     * @since 5.1
                     */
                    // @ts-ignore
                    getLogger(): Log
                    // @ts-ignore
                    getDecodableMimeTypes(): java.util.List<org.springframework.util.MimeType>
                    // @ts-ignore
                    canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    // @ts-ignore
                    decodeToMono(inputStream: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
