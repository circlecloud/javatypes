declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Basic abstraction over byte buffers.
                     * <p>{@code DataBuffer}s has a separate {@linkplain #readPosition() read} and
                     * {@linkplain #writePosition() write} position, as opposed to {@code ByteBuffer}'s
                     * single {@linkplain ByteBuffer#position() position}. As such, the {@code DataBuffer}
                     * does not require a {@linkplain ByteBuffer#flip() flip} to read after writing. In general,
                     * the following invariant holds for the read and write positions, and the capacity:
                     * <blockquote>
                     * <tt>0</tt> <tt>&lt;=</tt>
                     * <i>readPosition</i> <tt>&lt;=</tt>
                     * <i>writePosition</i> <tt>&lt;=</tt>
                     * <i>capacity</i>
                     * </blockquote>
                     * <p>The {@linkplain #capacity() capacity} of a {@code DataBuffer} is expanded on demand,
                     * similar to {@code StringBuilder}.
                     * <p>The main purpose of the {@code DataBuffer} abstraction is to provide a convenient wrapper
                     * around {@link ByteBuffer} which is similar to Netty's {@link io.netty.buffer.ByteBuf} but
                     * can also be used on non-Netty platforms (i.e. Servlet containers).
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     * @see DataBufferFactory
                     */
                    // @ts-ignore
                    interface DataBuffer {
                        /**
                         * Return the {@link DataBufferFactory} that created this buffer.
                         * @return the creating buffer factory
                         */
                        // @ts-ignore
                        factory(): org.springframework.core.io.buffer.DataBufferFactory
                        /**
                         * Return the index of the first byte in this buffer that matches
                         * the given predicate.
                         * @param predicate the predicate to match
                         * @param fromIndex the index to start the search from
                         * @return the index of the first byte that matches {#code predicate};
                         *  or {@code -1} if none match
                         */
                        // @ts-ignore
                        indexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        /**
                         * Return the index of the last byte in this buffer that matches
                         * the given predicate.
                         * @param predicate the predicate to match
                         * @param fromIndex the index to start the search from
                         * @return the index of the last byte that matches {#code predicate};
                         *  or {@code -1} if none match
                         */
                        // @ts-ignore
                        lastIndexOf(predicate: java.util.function.IntPredicate | java.util.function$.IntPredicate, fromIndex: number /*int*/): int
                        /**
                         * Return the number of bytes that can be read from this data buffer.
                         * @return the readable byte count
                         */
                        // @ts-ignore
                        readableByteCount(): int
                        /**
                         * Return the number of bytes that can be written to this data buffer.
                         * @return the writable byte count
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        writableByteCount(): int
                        /**
                         * Return the number of bytes that this buffer can contain.
                         * @return the capacity
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        capacity(): int
                        /**
                         * Set the number of bytes that this buffer can contain.
                         * <p>If the new capacity is lower than the current capacity, the contents
                         * of this buffer will be truncated. If the new capacity is higher than
                         * the current capacity, it will be expanded.
                         * @param capacity the new capacity
                         * @return this buffer
                         */
                        // @ts-ignore
                        capacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Ensure that the current buffer has enough {@link #writableByteCount()}
                         * to write the amount of data given as an argument. If not, the missing
                         * capacity will be added to the buffer.
                         * @param capacity the writable capacity to check for
                         * @return this buffer
                         * @since 5.1.4
                         */
                        // @ts-ignore
                        ensureCapacity(capacity: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Return the position from which this buffer will read.
                         * @return the read position
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        readPosition(): int
                        /**
                         * Set the position from which this buffer will read.
                         * @param readPosition the new read position
                         * @return this buffer
                         * @throws IndexOutOfBoundsException if {#code readPosition} is smaller than 0
                         *  or greater than {@link #writePosition()}
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        readPosition(readPosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Return the position to which this buffer will write.
                         * @return the write position
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        writePosition(): int
                        /**
                         * Set the position to which this buffer will write.
                         * @param writePosition the new write position
                         * @return this buffer
                         * @throws IndexOutOfBoundsException if {#code writePosition} is smaller than
                         *  {@link #readPosition()} or greater than {@link #capacity()}
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        writePosition(writePosition: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Read a single byte at the given index from this data buffer.
                         * @param index the index at which the byte will be read
                         * @return the byte at the given index
                         * @throws IndexOutOfBoundsException when {#code index} is out of bounds
                         * @since 5.0.4
                         */
                        // @ts-ignore
                        getByte(index: number /*int*/): byte
                        /**
                         * Read a single byte from the current reading position from this data buffer.
                         * @return the byte at this buffer's current reading position
                         */
                        // @ts-ignore
                        read(): byte
                        /**
                         * Read this buffer's data into the specified destination, starting at the current
                         * reading position of this buffer.
                         * @param destination the array into which the bytes are to be written
                         * @return this buffer
                         */
                        // @ts-ignore
                        read(destination: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Read at most {@code length} bytes of this buffer into the specified destination,
                         * starting at the current reading position of this buffer.
                         * @param destination the array into which the bytes are to be written
                         * @param offset the index within {#code destination} of the first byte to be written
                         * @param length the maximum number of bytes to be written in {#code destination}
                         * @return this buffer
                         */
                        // @ts-ignore
                        read(destination: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write a single byte into this buffer at the current writing position.
                         * @param b the byte to be written
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(b: number /*byte*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write the given source into this buffer, starting at the current writing position
                         * of this buffer.
                         * @param source the bytes to be written into this buffer
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(source: number /*byte*/[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write at most {@code length} bytes of the given source into this buffer, starting
                         * at the current writing position of this buffer.
                         * @param source the bytes to be written into this buffer
                         * @param offset the index within {#code source} to start writing from
                         * @param length the maximum number of bytes to be written from {#code source}
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(source: number /*byte*/[], offset: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write one or more {@code DataBuffer}s to this buffer, starting at the current
                         * writing position. It is the responsibility of the caller to
                         * {@linkplain DataBufferUtils#release(DataBuffer) release} the given data buffers.
                         * @param buffers the byte buffers to write into this buffer
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(...buffers: org.springframework.core.io.buffer.DataBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write one or more {@link ByteBuffer} to this buffer, starting at the current
                         * writing position.
                         * @param buffers the byte buffers to write into this buffer
                         * @return this buffer
                         */
                        // @ts-ignore
                        write(...buffers: java.nio.ByteBuffer[]): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Write the given {@code CharSequence} using the given {@code Charset},
                         * starting at the current writing position.
                         * @param charSequence the char sequence to write into this buffer
                         * @param charset the charset to encode the char sequence with
                         * @return this buffer
                         * @since 5.1.4
                         */
                        // @ts-ignore
                        write(charSequence: java.lang.CharSequence, charset: java.nio.charset.Charset): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Create a new {@code DataBuffer} whose contents is a shared subsequence of this
                         * data buffer's content.  Data between this data buffer and the returned buffer is
                         * shared; though changes in the returned buffer's position will not be reflected
                         * in the reading nor writing position of this data buffer.
                         * <p><strong>Note</strong> that this method will <strong>not</strong> call
                         * {@link DataBufferUtils#retain(DataBuffer)} on the resulting slice: the reference
                         * count will not be increased.
                         * @param index the index at which to start the slice
                         * @param length the length of the slice
                         * @return the specified slice of this data buffer
                         */
                        // @ts-ignore
                        slice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Create a new {@code DataBuffer} whose contents is a shared, retained subsequence of this
                         * data buffer's content.  Data between this data buffer and the returned buffer is
                         * shared; though changes in the returned buffer's position will not be reflected
                         * in the reading nor writing position of this data buffer.
                         * <p><strong>Note</strong> that unlike {@link #slice(int, int)}, this method
                         * <strong>will</strong> call {@link DataBufferUtils#retain(DataBuffer)} (or equivalent) on the
                         * resulting slice.
                         * @param index the index at which to start the slice
                         * @param length the length of the slice
                         * @return the specified, retained slice of this data buffer
                         * @since 5.2
                         */
                        // @ts-ignore
                        retainedSlice(index: number /*int*/, length: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        /**
                         * Expose this buffer's bytes as a {@link ByteBuffer}. Data between this
                         * {@code DataBuffer} and the returned {@code ByteBuffer} is shared; though
                         * changes in the returned buffer's {@linkplain ByteBuffer#position() position}
                         * will not be reflected in the reading nor writing position of this data buffer.
                         * @return this data buffer as a byte buffer
                         */
                        // @ts-ignore
                        asByteBuffer(): java.nio.ByteBuffer
                        /**
                         * Expose a subsequence of this buffer's bytes as a {@link ByteBuffer}. Data between
                         * this {@code DataBuffer} and the returned {@code ByteBuffer} is shared; though
                         * changes in the returned buffer's {@linkplain ByteBuffer#position() position}
                         * will not be reflected in the reading nor writing position of this data buffer.
                         * @param index the index at which to start the byte buffer
                         * @param length the length of the returned byte buffer
                         * @return this data buffer as a byte buffer
                         * @since 5.0.1
                         */
                        // @ts-ignore
                        asByteBuffer(index: number /*int*/, length: number /*int*/): java.nio.ByteBuffer
                        /**
                         * Expose this buffer's data as an {@link InputStream}. Both data and read position are
                         * shared between the returned stream and this data buffer. The underlying buffer will
                         * <strong>not</strong> be {@linkplain DataBufferUtils#release(DataBuffer) released}
                         * when the input stream is {@linkplain InputStream#close() closed}.
                         * @return this data buffer as an input stream
                         * @see #asInputStream(boolean)
                         */
                        // @ts-ignore
                        asInputStream(): java.io.InputStream
                        /**
                         * Expose this buffer's data as an {@link InputStream}. Both data and read position are
                         * shared between the returned stream and this data buffer.
                         * @param releaseOnClose whether the underlying buffer will be
                         *  {#linkplain DataBufferUtils#release(DataBuffer) released} when the input stream is
                         *  {@linkplain InputStream#close() closed}.
                         * @return this data buffer as an input stream
                         * @since 5.0.4
                         */
                        // @ts-ignore
                        asInputStream(releaseOnClose: boolean): java.io.InputStream
                        /**
                         * Expose this buffer's data as an {@link OutputStream}. Both data and write position are
                         * shared between the returned stream and this data buffer.
                         * @return this data buffer as an output stream
                         */
                        // @ts-ignore
                        asOutputStream(): java.io.OutputStream
                        /**
                         * Return this buffer's data a String using the specified charset. Default implementation
                         * delegates to {@code toString(readPosition(), readableByteCount(), charset)}.
                         * @param charset the character set to use
                         * @return a string representation of all this buffers data
                         * @since 5.2
                         */
                        // @ts-ignore
                        toString(charset: java.nio.charset.Charset): java.lang.String
                        /**
                         * Return a part of this buffer's data as a String using the specified charset.
                         * @param index the index at which to start the string
                         * @param length the number of bytes to use for the string
                         * @param charset the charset to use
                         * @return a string representation of a part of this buffers data
                         * @since 5.2
                         */
                        // @ts-ignore
                        toString(index: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset): java.lang.String
                    }
                }
            }
        }
    }
}
