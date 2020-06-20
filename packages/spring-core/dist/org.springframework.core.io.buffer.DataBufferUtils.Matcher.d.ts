declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    namespace DataBufferUtils {
                        /**
                         * Defines an object that matches a data buffer against a delimiter.
                         * @since 5.2
                         * @see #match(DataBuffer)
                         */
                        // @ts-ignore
                        interface Matcher {
                            /**
                             * Returns the position of the final matching delimiter byte that matches the given buffer,
                             * or {@code -1} if not found.
                             * @param dataBuffer the buffer in which to search for the delimiter
                             * @return the position of the final matching delimiter, or {#code -1} if not found.
                             */
                            // @ts-ignore
                            match(dataBuffer: org.springframework.core.io.buffer.DataBuffer): int
                            /**
                             * Return the delimiter used for this matcher.
                             * @return the delimiter
                             */
                            // @ts-ignore
                            delimiter(): byte[]
                            /**
                             * Resets the state of this matcher.
                             */
                            // @ts-ignore
                            reset(): void
                        }
                    }
                }
            }
        }
    }
}
