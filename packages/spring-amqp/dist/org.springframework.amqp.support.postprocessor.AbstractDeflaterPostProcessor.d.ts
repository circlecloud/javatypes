declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * Base class for post processors based on {@link Deflater}.
                     * @author Gary Russell
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class AbstractDeflaterPostProcessor extends org.springframework.amqp.support.postprocessor.AbstractCompressingPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(autoDecompress: boolean)
                        // @ts-ignore
                        level: number /*int*/
                        /**
                         * Set the deflater compression level.
                         * @param level the level (default {#link Deflater#BEST_SPEED}
                         * @see Deflater
                         */
                        // @ts-ignore
                        setLevel(level: number /*int*/): void
                    }
                }
            }
        }
    }
}
