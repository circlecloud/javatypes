declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * An extension of {@link java.io.ByteArrayOutputStream} that:
             * <ul>
             * <li>has public {@link org.springframework.util.ResizableByteArrayOutputStream#grow(int)}
             * and {@link org.springframework.util.ResizableByteArrayOutputStream#resize(int)} methods
             * to get more control over the size of the internal buffer</li>
             * <li>has a higher initial capacity (256) by default</li>
             * </ul>
             * <p>As of 4.2, this class has been superseded by {@link FastByteArrayOutputStream}
             * for Spring's internal use where no assignability to {@link ByteArrayOutputStream}
             * is needed (since {@link FastByteArrayOutputStream} is more efficient with buffer
             * resize management but doesn't extend the standard {@link ByteArrayOutputStream}).
             * @author Brian Clozel
             * @author Juergen Hoeller
             * @since 4.0.3
             * @see #resize
             * @see FastByteArrayOutputStream
             */
            // @ts-ignore
            class ResizableByteArrayOutputStream extends java.io.ByteArrayOutputStream {
                /**
                 * Create a new <code>ResizableByteArrayOutputStream</code>
                 * with the default initial capacity of 256 bytes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>ResizableByteArrayOutputStream</code>
                 * with the specified initial capacity.
                 * @param initialCapacity the initial buffer size in bytes
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Resize the internal buffer size to a specified capacity.
                 * @param targetCapacity the desired size of the buffer
                 * @throws IllegalArgumentException if the given capacity is smaller than
                 *  the actual size of the content stored in the buffer already
                 * @see ResizableByteArrayOutputStream#size()
                 */
                // @ts-ignore
                resize(targetCapacity: number /*int*/): void
                /**
                 * Grow the internal buffer size.
                 * @param additionalCapacity the number of bytes to add to the current buffer size
                 * @see ResizableByteArrayOutputStream#size()
                 */
                // @ts-ignore
                grow(additionalCapacity: number /*int*/): void
                /**
                 * Return the current size of this stream's internal buffer.
                 */
                // @ts-ignore
                capacity(): int
            }
        }
    }
}
