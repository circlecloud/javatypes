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
                        public getNativeBuffer(): ByteBuf
                        // @ts-ignore
                        public factory(): org.springframework.core.io.buffer.NettyDataBufferFactory
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
                        public readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public writePosition(): number /*int*/
                        // @ts-ignore
                        public writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public getByte(index: number /*int*/): number /*byte*/
                        // @ts-ignore
                        public capacity(): number /*int*/
                        // @ts-ignore
                        public capacity(capacity: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public ensureCapacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public read(): number /*byte*/
                        // @ts-ignore
                        public read(destination: number /*byte*/[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(b: number /*byte*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.NettyDataBuffer
                        /**
                         * Writes one or more Netty {@link ByteBuf ByteBufs} to this buffer,
                         * starting at the current writing position.
                         * @param byteBufs the buffers to write into this buffer
                         * @return this buffer
                         */
                        // @ts-ignore
                        public write(...byteBufs: ByteBuf[]): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public write(charSequence: java.lang.CharSequence, charset: java.nio.charset.Charset): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
                        // @ts-ignore
                        public retainedSlice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.NettyDataBuffer
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
                        // @ts-ignore
                        public isAllocated(): boolean
                        // @ts-ignore
                        public retain(): org.springframework.core.io.buffer.PooledDataBuffer
                        // @ts-ignore
                        public release(): boolean
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
