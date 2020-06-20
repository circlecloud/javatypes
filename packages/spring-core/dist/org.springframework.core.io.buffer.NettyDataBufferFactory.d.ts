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
                        getByteBufAllocator(): ByteBufAllocator
                        // @ts-ignore
                        allocateBuffer(): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        allocateBuffer(initialCapacity: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        wrap(byteBuffer: java.nio.ByteBuffer): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        wrap(bytes: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Wrap the given Netty {@link ByteBuf} in a {@code NettyDataBuffer}.
                         * @param byteBuf the Netty byte buffer to wrap
                         * @return the wrapped buffer
                         */
                        // @ts-ignore
                        wrap(byteBuf: ByteBuf): org.springframework.core.io.buffer.NettyDataBuffer
                        /**
                         * {@inheritDoc}
                         * <p>This implementation uses Netty's {@link CompositeByteBuf}.
                         */
                        // @ts-ignore
                        join(dataBuffers: Array<org.springframework.core.io.buffer.DataBuffer>): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Return the given Netty {@link DataBuffer} as a {@link ByteBuf}.
                         * <p>Returns the {@linkplain NettyDataBuffer#getNativeBuffer() native buffer}
                         * if {@code buffer} is a {@link NettyDataBuffer}; returns
                         * {@link Unpooled#wrappedBuffer(ByteBuffer)} otherwise.
                         * @param buffer the {#code DataBuffer} to return a {@code ByteBuf} for
                         * @return the netty {#code ByteBuf}
                         */
                        // @ts-ignore
                        toByteBuf(buffer: org.springframework.core.io.buffer.DataBuffer): ByteBuf
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
