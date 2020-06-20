declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Provides a convenient implementation of the {@link DataBuffer} interface
                     * that can be overridden to adapt the delegate.
                     * <p>These methods default to calling through to the wrapped delegate object.
                     * @author Arjen Poutsma
                     * @since 5.2
                     */
                    // @ts-ignore
                    class DataBufferWrapper extends java.lang.Object implements org.springframework.core.io.buffer.DataBuffer {
                        /**
                         * Create a new {@code DataBufferWrapper} that wraps the given buffer.
                         * @param delegate the buffer to wrap
                         */
                        // @ts-ignore
                        constructor(delegate: org.springframework.core.io.buffer.DataBuffer)
                        /**
                         * Return the wrapped delegate.
                         */
                        // @ts-ignore
                        dataBuffer(): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        factory(): org.springframework.core.io.buffer.DataBufferFactory
                        // @ts-ignore
                        indexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        // @ts-ignore
                        lastIndexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        // @ts-ignore
                        readableByteCount(): int
                        // @ts-ignore
                        writableByteCount(): int
                        // @ts-ignore
                        capacity(): int
                        // @ts-ignore
                        capacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        ensureCapacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        readPosition(): int
                        // @ts-ignore
                        readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        writePosition(): int
                        // @ts-ignore
                        writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        getByte(index: number /*int*/): byte
                        // @ts-ignore
                        read(): byte
                        // @ts-ignore
                        read(destination: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(b: number /*byte*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        write(charSequence: java.lang.CharSequence, charset: java.nio.charset.Charset): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        retainedSlice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
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
                    }
                }
            }
        }
    }
}
