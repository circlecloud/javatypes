declare namespace java {
    namespace io {
        /**
         * A character stream whose source is a string.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class StringReader extends java.io.Reader {
            /**
             * Creates a new string reader.
             * @param s  String providing the character stream.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Reads a single character.
             * @return The character read, or -1 if the end of the stream has been
             *              reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(): int
            /**
             * Reads characters into a portion of an array.
             * @param cbuf  Destination buffer
             * @param off   Offset at which to start writing characters
             * @param len   Maximum number of characters to read
             * @return The number of characters read, or -1 if the end of the
             *              stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(cbuf: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Skips the specified number of characters in the stream. Returns
             * the number of characters that were skipped.
             * <p>The <code>ns</code> parameter may be negative, even though the
             * <code>skip</code> method of the {@link Reader} superclass throws
             * an exception in this case. Negative values of <code>ns</code> cause the
             * stream to skip backwards. Negative return values indicate a skip
             * backwards. It is not possible to skip backwards past the beginning of
             * the string.
             * <p>If the entire string has been read or skipped, then this method has
             * no effect and always returns 0.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            skip(ns: number /*long*/): long
            /**
             * Tells whether this stream is ready to be read.
             * @return True if the next read() is guaranteed not to block for input
             * @exception IOException  If the stream is closed
             */
            // @ts-ignore
            ready(): boolean
            /**
             * Tells whether this stream supports the mark() operation, which it does.
             */
            // @ts-ignore
            markSupported(): boolean
            /**
             * Marks the present position in the stream.  Subsequent calls to reset()
             * will reposition the stream to this point.
             * @param readAheadLimit  Limit on the number of characters that may be
             *                          read while still preserving the mark.  Because
             *                          the stream's input comes from a string, there
             *                          is no actual limit, so this argument must not
             *                          be negative, but is otherwise ignored.
             * @exception IllegalArgumentException  If {#code readAheadLimit < 0}
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream to the most recent mark, or to the beginning of the
             * string if it has never been marked.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            reset(): void
            /**
             * Closes the stream and releases any system resources associated with
             * it. Once the stream has been closed, further read(),
             * ready(), mark(), or reset() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            close(): void
        }
    }
}
