declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * Base class for post processors that decompress the message body if the
                     * {@link MessageProperties#SPRING_AUTO_DECOMPRESS} header is true or to optionally always
                     * decompress if the content encoding matches {@link #getEncoding()}, or starts with
                     * {@link #getEncoding()} + ":", in which case the encoding following the colon becomes
                     * the final content encoding of the decompressed message.
                     * @author Gary Russell
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class AbstractDecompressingPostProcessor extends java.lang.Object implements org.springframework.amqp.core.MessagePostProcessor {
                        /**
                         * Construct a post processor that will decompress the supported content
                         * encoding only if {@link MessageProperties#SPRING_AUTO_DECOMPRESS} header is present
                         * and true.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a post processor that will decompress the supported content
                         * encoding if {@link MessageProperties#SPRING_AUTO_DECOMPRESS} header is present
                         * and true or if alwaysDecompress is true.
                         * @param alwaysDecompress true to always decompress.
                         */
                        // @ts-ignore
                        constructor(alwaysDecompress: boolean)
                        // @ts-ignore
                        getOrder(): int
                        /**
                         * Set the order.
                         * @param order the order, default 0.
                         * @see Ordered
                         */
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        postProcessMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                        /**
                         * Get the stream.
                         * @param stream The output stream to write the compressed data to.
                         * @return the decompressor input stream.
                         * @throws IOException IOException
                         */
                        // @ts-ignore
                        abstract getDecompressorStream(stream: java.io.InputStream): java.io.InputStream
                        /**
                         * Get the encoding.
                         * @return the content-encoding header.
                         */
                        // @ts-ignore
                        abstract getEncoding(): java.lang.String
                    }
                }
            }
        }
    }
}
