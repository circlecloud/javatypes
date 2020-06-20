declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * A {@link MessagePostProcessor} that delegates to one of its {@link MessagePostProcessor}s
                     * depending on the content encoding. Supports {@code gzip, zip} by default.
                     * @author Gary Russell
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class DelegatingDecompressingPostProcessor extends java.lang.Object implements org.springframework.amqp.core.MessagePostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getOrder(): int
                        /**
                         * Set the order.
                         * @param order the order.
                         * @see Ordered
                         */
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        /**
                         * Add a message post processor to the map of decompressing MessageProcessors.
                         * @param contentEncoding the content encoding; messages will be decompressed with this post processor
                         *  if its {#code content-encoding} property matches, or begins with this key followed by ":".
                         * @param decompressor the decompressing {#link MessagePostProcessor}.
                         */
                        // @ts-ignore
                        addDecompressor(contentEncoding: string, decompressor: org.springframework.amqp.core.MessagePostProcessor): void
                        /**
                         * Remove the decompressor for this encoding; content will not be decompressed even if the
                         * {@link org.springframework.amqp.core.MessageProperties#SPRING_AUTO_DECOMPRESS} header is true.
                         * @param contentEncoding the content encoding.
                         * @return the decompressor if it was present.
                         */
                        // @ts-ignore
                        removeDecompressor(contentEncoding: string): org.springframework.amqp.core.MessagePostProcessor
                        /**
                         * Replace all the decompressors.
                         * @param decompressors the decompressors.
                         */
                        // @ts-ignore
                        setDecompressors(decompressors: java.util.Map<java.lang.String, org.springframework.amqp.core.MessagePostProcessor>): void
                        // @ts-ignore
                        postProcessMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                    }
                }
            }
        }
    }
}
