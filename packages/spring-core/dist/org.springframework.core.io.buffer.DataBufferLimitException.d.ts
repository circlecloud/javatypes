declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Exception that indicates the cumulative number of bytes consumed from a
                     * stream of {@link DataBuffer DataBuffer}'s exceeded some pre-configured limit.
                     * This can be raised when data buffers are cached and aggregated, e.g.
                     * {@link DataBufferUtils#join}. Or it could also be raised when data buffers
                     * have been released but a parsed representation is being aggregated, e.g. async
                     * parsing with Jackson, SSE parsing and aggregating lines per event.
                     * @author Rossen Stoyanchev
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    class DataBufferLimitException extends java.lang.IllegalStateException {
                        // @ts-ignore
                        constructor(message: string)
                    }
                }
            }
        }
    }
}
