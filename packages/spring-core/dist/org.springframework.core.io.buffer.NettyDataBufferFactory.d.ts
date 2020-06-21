declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Implementation of the {@code DataBufferFactory} interface based on a
                     * Netty {@link ByteBufAllocator}.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @since 5.0
                     * @see io.netty.buffer.PooledByteBufAllocator
                     * @see io.netty.buffer.UnpooledByteBufAllocator
                     */
                    // @ts-ignore
                    class NettyDataBufferFactory extends java.lang.Object implements org.springframework.core.io.buffer.DataBufferFactory {
                        /**
                         * Create a new {@code NettyDataBufferFactory} based on the given factory.
                         * @param byteBufAllocator the factory to use
                         * @see io.netty.buffer.PooledByteBufAllocator
                         * @see io.netty.buffer.UnpooledByteBufAllocator
                         */
                        // @ts-ignore
                        constructor(byteBufAllocator: ByteBufAllocator)
                        /**
                         * Return the {@code ByteBufAllocator} used by this factory.
                         */
                        // @ts-ignore
                        public getByteBufAllocator(): ByteBufAllocator
                        // @ts-ignore
                        public allocateBuffer(): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public allocateBuffer(initialCapacity: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public wrap(byteBuffer: java.nio.ByteBuffer): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public wrap(bytes: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Wrap the given Netty {@link ByteBuf} in a {@code NettyDataBuffer}.
                         * @param byteBuf the Netty byte buffer to wrap
                         * @return the wrapped buffer
                         */
                        // @ts-ignore
                        public wrap(byteBuf: ByteBuf): org.springframework.core.io.buffer.NettyDataBuffer
                        /**
                         * {@inheritDoc}
                         * <p>This implementation uses Netty's {@link CompositeByteBuf}.
                         */
                        // @ts-ignore
                        public join(dataBuffers: java.util.List<any> | Array<any>): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Return the given Netty {@link DataBuffer} as a {@link ByteBuf}.
                         * <p>Returns the {@linkplain NettyDataBuffer#getNativeBuffer() native buffer}
                         * if {@code buffer} is a {@link NettyDataBuffer}; returns
                         * {@link Unpooled#wrappedBuffer(ByteBuffer)} otherwise.
                         * @param buffer the {#code DataBuffer} to return a {@code ByteBuf} for
                         * @return the netty {#code ByteBuf}
                         */
                        // @ts-ignore
                        public static toByteBuf(buffer: org.springframework.core.io.buffer.DataBuffer): ByteBuf
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
