declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * A speedy alternative to {@link java.io.ByteArrayOutputStream}. Note that
             * this variant does <i>not</i> extend {@code ByteArrayOutputStream}, unlike
             * its sibling {@link ResizableByteArrayOutputStream}.
             * <p>Unlike {@link java.io.ByteArrayOutputStream}, this implementation is backed
             * by a {@link java.util.LinkedList} of {@code byte[]} instead of 1 constantly
             * resizing {@code byte[]}. It does not copy buffers when it gets expanded.
             * <p>The initial buffer is only created when the stream is first written.
             * There is also no copying of the internal buffer if its contents is extracted
             * with the {@link #writeTo(OutputStream)} method.
             * @author Craig Andrews
             * @author Juergen Hoeller
             * @since 4.2
             * @see #resize
             * @see ResizableByteArrayOutputStream
             */
            // @ts-ignore
            class FastByteArrayOutputStream extends java.io.OutputStream {
                /**
                 * Create a new <code>FastByteArrayOutputStream</code>
                 * with the default initial capacity of 256 bytes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>FastByteArrayOutputStream</code>
                 * with the specified initial capacity.
                 * @param initialBlockSize the initial buffer size in bytes
                 */
                // @ts-ignore
                constructor(initialBlockSize: number /*int*/)
                // @ts-ignore
                write(datum: number /*int*/): void
                // @ts-ignore
                write(data: number /*byte*/[], offset: number /*int*/, length: number /*int*/): void
                // @ts-ignore
                close(): void
                /**
                 * Convert the buffer's contents into a string decoding bytes using the
                 * platform's default character set. The length of the new <tt>String</tt>
                 * is a function of the character set, and hence may not be equal to the
                 * size of the buffer.
                 * <p>This method always replaces malformed-input and unmappable-character
                 * sequences with the default replacement string for the platform's
                 * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
                 * class should be used when more control over the decoding process is
                 * required.
                 * @return a String decoded from the buffer's contents
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return the number of bytes stored in this <code>FastByteArrayOutputStream</code>.
                 */
                // @ts-ignore
                size(): int
                /**
                 * Convert the stream's data to a byte array and return the byte array.
                 * <p>Also replaces the internal structures with the byte array to conserve memory:
                 * if the byte array is being made anyways, mind as well as use it. This approach
                 * also means that if this method is called twice without any writes in between,
                 * the second call is a no-op.
                 * <p>This method is "unsafe" as it returns the internal buffer.
                 * Callers should not modify the returned buffer.
                 * @return the current contents of this output stream, as a byte array.
                 * @see #size()
                 * @see #toByteArray()
                 */
                // @ts-ignore
                toByteArrayUnsafe(): byte[]
                /**
                 * Creates a newly allocated byte array.
                 * <p>Its size is the current
                 * size of this output stream and the valid contents of the buffer
                 * have been copied into it.</p>
                 * @return the current contents of this output stream, as a byte array.
                 * @see #size()
                 * @see #toByteArrayUnsafe()
                 */
                // @ts-ignore
                toByteArray(): byte[]
                /**
                 * Reset the contents of this <code>FastByteArrayOutputStream</code>.
                 * <p>All currently accumulated output in the output stream is discarded.
                 * The output stream can be used again.
                 */
                // @ts-ignore
                reset(): void
                /**
                 * Get an {@link InputStream} to retrieve the data in this OutputStream.
                 * <p>Note that if any methods are called on the OutputStream
                 * (including, but not limited to, any of the write methods, {@link #reset()},
                 * {@link #toByteArray()}, and {@link #toByteArrayUnsafe()}) then the
                 * {@link java.io.InputStream}'s behavior is undefined.
                 * @return {#link InputStream} of the contents of this OutputStream
                 */
                // @ts-ignore
                getInputStream(): java.io.InputStream
                /**
                 * Write the buffers content to the given OutputStream.
                 * @param out the OutputStream to write to
                 */
                // @ts-ignore
                writeTo(out: java.io.OutputStream): void
                /**
                 * Resize the internal buffer size to a specified capacity.
                 * @param targetCapacity the desired size of the buffer
                 * @throws IllegalArgumentException if the given capacity is smaller than
                 *  the actual size of the content stored in the buffer already
                 * @see FastByteArrayOutputStream#size()
                 */
                // @ts-ignore
                resize(targetCapacity: number /*int*/): void
            }
        }
    }
}
