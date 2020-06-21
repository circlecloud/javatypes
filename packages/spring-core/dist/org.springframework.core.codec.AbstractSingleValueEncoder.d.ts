declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Abstract base class for {@link org.springframework.core.codec.Encoder}
                 * classes that can only deal with a single value.
                 * @author Arjen Poutsma
                 * @since 5.0
                 * @param <T> the element type
                 */
                // @ts-ignore
                abstract class AbstractSingleValueEncoder<T> extends org.springframework.core.codec.AbstractEncoder<T> {
                    // @ts-ignore
                    constructor(...supportedMimeTypes: org.springframework.util.MimeType[])
                    // @ts-ignore
                    public encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    /**
                     * Encode {@code T} to an output {@link DataBuffer} stream.
                     * @param t the value to process
                     * @param dataBufferFactory a buffer factory used to create the output
                     * @param type the stream element type to process
                     * @param mimeType the mime type to process
                     * @param hints additional information about how to do decode, optional
                     * @return the output stream
                     */
                    // @ts-ignore
                    abstract encode(t: T, dataBufferFactory: org.springframework.core.io.buffer.DataBufferFactory, type: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                }
            }
        }
    }
}
