declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Extension of {@link DataBuffer} that allows for buffer that share
                     * a memory pool. Introduces methods for reference counting.
                     * @author Arjen Poutsma
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface PooledDataBuffer extends org.springframework.core.io.buffer.DataBuffer {
                        /**
                         * Return {@code true} if this buffer is allocated;
                         * {@code false} if it has been deallocated.
                         * @since 5.1
                         */
                        // @ts-ignore
                        isAllocated(): boolean
                        /**
                         * Increase the reference count for this buffer by one.
                         * @return this buffer
                         */
                        // @ts-ignore
                        retain(): org.springframework.core.io.buffer.PooledDataBuffer
                        /**
                         * Decrease the reference count for this buffer by one,
                         * and deallocate it once the count reaches zero.
                         * @return {#code true} if the buffer was deallocated;
                         *  {@code false} otherwise
                         */
                        // @ts-ignore
                        release(): boolean
                    }
                }
            }
        }
    }
}
