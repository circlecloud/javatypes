declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Default implementation of the {@link DataBuffer} interface that uses a
                     * {@link ByteBuffer} internally. with separate read and write positions.
                     * Constructed using the {@link DefaultDataBufferFactory}.
                     * <p>Inspired by Netty's {@code ByteBuf}. Introduced so that non-Netty runtimes
                     * (i.e. Servlet) do not require Netty on the classpath.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @author Brian Clozel
                     * @since 5.0
                     * @see DefaultDataBufferFactory
                     */
                    // @ts-ignore
                    class DefaultDataBuffer extends java.lang.Object implements org.springframework.core.io.buffer.DataBuffer {
                        /**
                         * Directly exposes the native {@code ByteBuffer} that this buffer is based
                         * on also updating the {@code ByteBuffer's} position and limit to match
                         * the current {@link #readPosition()} and {@link #readableByteCount()}.
                         * @return the wrapped byte buffer
                         */
                        // @ts-ignore
                        getNativeBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        factory(): org.springframework.core.io.buffer.DefaultDataBufferFactory
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
                        readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        writePosition(): int
                        // @ts-ignore
                        writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        capacity(): int
                        // @ts-ignore
                        capacity(newCapacity: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        ensureCapacity(length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        getByte(index: number /*int*/): byte
                        // @ts-ignore
                        read(): byte
                        // @ts-ignore
                        read(destination: number /*byte*/[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        write(b: number /*byte*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
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
                        toString(index: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset): java.lang.String
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
