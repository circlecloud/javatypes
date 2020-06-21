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
                abstract class AbstractEncoder<T> extends java.lang.Object implements org.springframework.core.codec.Encoder<T> {
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
                    public setLogger(logger: Log): void
                    /**
                     * Return the currently configured Logger.
                     * @since 5.1
                     */
                    // @ts-ignore
                    public getLogger(): Log
                    // @ts-ignore
                    public getEncodableMimeTypes(): Array<org.springframework.util.MimeType>
                    // @ts-ignore
                    public canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                }
            }
        }
    }
}
