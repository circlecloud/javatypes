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
                        public dataBuffer(): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public factory(): org.springframework.core.io.buffer.DataBufferFactory
                        // @ts-ignore
                        public indexOf(predicate: java.util.function$.IntPredicate, fromIndex: number /*int*/): number /*int*/
                        // @ts-ignore
                        public lastIndexOf(predicate: java.util.function$.IntPredicate, fromIndex: number /*int*/): number /*int*/
                        // @ts-ignore
                        public readableByteCount(): number /*int*/
                        // @ts-ignore
                        public writableByteCount(): number /*int*/
                        // @ts-ignore
                        public capacity(): number /*int*/
                        // @ts-ignore
                        public capacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public ensureCapacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public readPosition(): number /*int*/
                        // @ts-ignore
                        public readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public writePosition(): number /*int*/
                        // @ts-ignore
                        public writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public getByte(index: number /*int*/): number /*byte*/
                        // @ts-ignore
                        public read(): number /*byte*/
                        // @ts-ignore
                        public read(destination: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(b: number /*byte*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public write(charSequence: java.lang.CharSequence, charset: java.nio.charset.Charset): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public retainedSlice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public asByteBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        public asByteBuffer(index: number /*int*/, length: number /*int*/): java.nio.ByteBuffer
                        // @ts-ignore
                        public asInputStream(): java.io.InputStream
                        // @ts-ignore
                        public asInputStream(releaseOnClose: boolean): java.io.InputStream
                        // @ts-ignore
                        public asOutputStream(): java.io.OutputStream
                        // @ts-ignore
                        public toString(charset: java.nio.charset.Charset): string
                        // @ts-ignore
                        public toString(index: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset): string
                    }
                }
            }
        }
    }
}
