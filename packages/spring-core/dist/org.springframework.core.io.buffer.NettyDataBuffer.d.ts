declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Implementation of the {@code DataBuffer} interface that wraps a Netty
                     * {@link ByteBuf}. Typically constructed with {@link NettyDataBufferFactory}.
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    class NettyDataBuffer extends java.lang.Object implements org.springframework.core.io.buffer.PooledDataBuffer {
                        /**
                         * Directly exposes the native {@code ByteBuf} that this buffer is based on.
                         * @return the wrapped byte buffer
                         */
                        // @ts-ignore
                        getNativeBuffer(): ByteBuf
                        // @ts-ignore
                        factory(): org.springframework.core.io.buffer.NettyDataBufferFactory
                        // @ts-ignore
                        indexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        // @ts-ignore
                        lastIndexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        // @ts-ignore
                        readableByteCount(): int
                        // @ts-ignore
                        writableByteCount(): int
                        // @ts-ignore
                        readPosition(): int
                        // @ts-ignore
                        readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        writePosition(): int
                        // @ts-ignore
                        writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        getByte(index: number /*int*/): byte
                        // @ts-ignore
                        capacity(): int
                        // @ts-ignore
                        capacity(capacity: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        ensureCapacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        read(): byte
                        // @ts-ignore
                        read(destination: number /*byte*/[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(b: number /*byte*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.NettyDataBuffer
                        /**
                         * Writes one or more Netty {@link ByteBuf ByteBufs} to this buffer,
                         * starting at the current writing position.
                         * @param byteBufs the buffers to write into this buffer
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(...byteBufs: ByteBuf[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        write(charSequence: java.lang.CharSequence, charset: java.nio.charset.Charset): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        retainedSlice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        asByteBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        asByteBuffer(index: number /*int*/, length: number /*int*/): java.nio.ByteBuffer
                        // @ts-ignore
                        asInputStream(): java.io.InputStream
                        // @ts-ignore
                        asInputStream(releaseOnClose: boolean): java.io.InputStream
                        // @ts-ignore
                        asOutputStream(): java.io.OutputStream
                        // @ts-ignore
                        toString(charset: java.nio.charset.Charset): java.lang.String
                        // @ts-ignore
                        toString(index: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset): java.lang.String
                        // @ts-ignore
                        isAllocated(): boolean
                        // @ts-ignore
                        retain(): org.springframework.core.io.buffer.PooledDataBuffer
                        // @ts-ignore
                        release(): boolean
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
