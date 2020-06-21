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
                        public getNativeBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        public factory(): org.springframework.core.io.buffer.DefaultDataBufferFactory
                        // @ts-ignore
                        public indexOf(predicate: java.util.function$.IntPredicate, fromIndex: number /*int*/): number /*int*/
                        // @ts-ignore
                        public lastIndexOf(predicate: java.util.function$.IntPredicate, fromIndex: number /*int*/): number /*int*/
                        // @ts-ignore
                        public readableByteCount(): number /*int*/
                        // @ts-ignore
                        public writableByteCount(): number /*int*/
                        // @ts-ignore
                        public readPosition(): number /*int*/
                        // @ts-ignore
                        public readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public writePosition(): number /*int*/
                        // @ts-ignore
                        public writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public capacity(): number /*int*/
                        // @ts-ignore
                        public capacity(newCapacity: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public ensureCapacity(length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public getByte(index: number /*int*/): number /*byte*/
                        // @ts-ignore
                        public read(): number /*byte*/
                        // @ts-ignore
                        public read(destination: number /*byte*/[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public write(b: number /*byte*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.DefaultDataBuffer
                        // @ts-ignore
                        public slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DefaultDataBuffer
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
                        public toString(index: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset): string
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
