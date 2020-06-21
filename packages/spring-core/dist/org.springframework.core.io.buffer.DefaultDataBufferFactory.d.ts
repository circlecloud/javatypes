declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Default implementation of the {@code DataBufferFactory} interface. Allows for
                     * specification of the default initial capacity at construction time, as well
                     * as whether heap-based or direct buffers are to be preferred.
                     * @author Arjen Poutsma
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultDataBufferFactory extends java.lang.Object implements org.springframework.core.io.buffer.DataBufferFactory {
                        /**
                         * Creates a new {@code DefaultDataBufferFactory} with default settings.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@code DefaultDataBufferFactory}, indicating whether direct
                         * buffers should be created by {@link #allocateBuffer()} and
                         * {@link #allocateBuffer(int)}.
                         * @param preferDirect {#code true} if direct buffers are to be preferred;
                         *  {@code false} otherwise
                         */
                        // @ts-ignore
                        constructor(preferDirect: boolean)
                        /**
                         * Creates a new {@code DefaultDataBufferFactory}, indicating whether direct
                         * buffers should be created by {@link #allocateBuffer()} and
                         * {@link #allocateBuffer(int)}, and what the capacity is to be used for
                         * {@link #allocateBuffer()}.
                         * @param preferDirect {#code true} if direct buffers are to be preferred;
                         *  {@code false} otherwise
                         */
                        // @ts-ignore
                        constructor(preferDirect: boolean, defaultInitialCapacity: number /*int*/)
                        /**
                         * The default capacity when none is specified.
                         * @see #DefaultDataBufferFactory()
                         * @see #DefaultDataBufferFactory(boolean)
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_INITIAL_CAPACITY: number /*int*/
                        // @ts-ignore
                        public allocateBuffer(): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public allocateBuffer(initialCapacity: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public wrap(byteBuffer: java.nio.ByteBuffer): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public wrap(bytes: number /*byte*/[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        /**
                         * {@inheritDoc}
                         * <p>This implementation creates a single {@link DefaultDataBuffer}
                         * to contain the data in {@code dataBuffers}.
                         */
                        // @ts-ignore
                        public join(dataBuffers: java.util.List<any> | Array<any>): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
