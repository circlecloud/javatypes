declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * Base class for post processors that compress the message body. The content encoding is
                     * set to {@link #getEncoding()} or {@link #getEncoding()} + ":" + existing encoding, if
                     * present.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    abstract class AbstractCompressingPostProcessor extends java.lang.Object implements org.springframework.amqp.core.MessagePostProcessor {
                        /**
                         * Construct a post processor that will include the
                         * {@link MessageProperties#SPRING_AUTO_DECOMPRESS} header set to 'true'.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a post processor that will include (or not include) the
                         * {@link MessageProperties#SPRING_AUTO_DECOMPRESS} header. Used by the (Spring AMQP) inbound
                         * message converter to determine whether the message should be decompressed
                         * automatically, or remain compressed.
                         * @param autoDecompress true to indicate the receiver should automatically
                         *  decompress.
                         */
                        // @ts-ignore
                        constructor(autoDecompress: boolean)
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Flag to indicate if {@link MessageProperties} should be used as is or cloned for new message
                         * after compression.
                         * By default this flag is turned off for better performance since in most cases the original message
                         * is not used any more.
                         * @param copyProperties clone or reuse original message properties.
                         * @since 2.1.5
                         */
                        // @ts-ignore
                        public setCopyProperties(copyProperties: boolean): void
                        // @ts-ignore
                        public postProcessMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                        // @ts-ignore
                        public getOrder(): number /*int*/
                        /**
                         * Set the order.
                         * @param order the order, default 0.
                         * @see Ordered
                         */
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        /**
                         * Get the stream.
                         * @param stream The output stream to write the compressed data to.
                         * @return the compressor output stream.
                         * @throws IOException IOException
                         */
                        // @ts-ignore
                        abstract getCompressorStream(stream: java.io.OutputStream): java.io.OutputStream
                        /**
                         * Get the encoding.
                         * @return the content-encoding header.
                         */
                        // @ts-ignore
                        abstract getEncoding(): string
                    }
                }
            }
        }
    }
}
