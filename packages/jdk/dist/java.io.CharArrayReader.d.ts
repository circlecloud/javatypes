declare namespace java {
    namespace io {
        /**
         * This class implements a character buffer that can be used as a
         * character-input stream.
         * @author Herb Jellinek
         * @since JDK1.1
         */
        // @ts-ignore
        class CharArrayReader extends java.io.Reader {
            /**
             * Creates a CharArrayReader from the specified array of chars.
             * @param buf       Input buffer (not copied)
             */
            // @ts-ignore
            constructor(buf: string[])
            /**
             * Creates a CharArrayReader from the specified array of chars.
             * <p> The resulting reader will start reading at the given
             * <tt>offset</tt>.  The total number of <tt>char</tt> values that can be
             * read from this reader will be either <tt>length</tt> or
             * <tt>buf.length-offset</tt>, whichever is smaller.
             * @throws IllegalArgumentException
             *          If <tt>offset</tt> is negative or greater than
             *          <tt>buf.length</tt>, or if <tt>length</tt> is negative, or if
             *          the sum of these two values is negative.
             * @param buf       Input buffer (not copied)
             * @param offset    Offset of the first char to read
             * @param length    Number of chars to read
             */
            // @ts-ignore
            constructor(buf: string[], offset: number /*int*/, length: number /*int*/)
            /**
             * The character buffer.
             */
            // @ts-ignore
            buf: string[]
            /**
             * The current buffer position.
             */
            // @ts-ignore
            pos: number /*int*/
            /**
             * The position of mark in buffer.
             */
            // @ts-ignore
            markedPos: number /*int*/
            /**
             * The index of the end of this buffer.  There is not valid
             * data at or beyond this index.
             */
            // @ts-ignore
            count: number /*int*/
            /**
             * Reads a single character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(): int
            /**
             * Reads characters into a portion of an array.
             * @param b  Destination buffer
             * @param off  Offset at which to start storing characters
             * @param len   Maximum number of characters to read
             * @return The actual number of characters read, or -1 if
             *           the end of the stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(b: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Skips characters.  Returns the number of characters that were skipped.
             * <p>The <code>n</code> parameter may be negative, even though the
             * <code>skip</code> method of the {@link Reader} superclass throws
             * an exception in this case. If <code>n</code> is negative, then
             * this method does nothing and returns <code>0</code>.
             * @param n The number of characters to skip
             * @return The number of characters actually skipped
             * @exception IOException If the stream is closed, or an I/O error occurs
             */
            // @ts-ignore
            skip(n: number /*long*/): long
            /**
             * Tells whether this stream is ready to be read.  Character-array readers
             * are always ready to be read.
             * @exception IOException  If an I/O error occurs
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
             *                          the stream's input comes from a character array,
             *                          there is no actual limit; hence this argument is
             *                          ignored.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream to the most recent mark, or to the beginning if it has
             * never been marked.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            reset(): void
            /**
             * Closes the stream and releases any system resources associated with
             * it.  Once the stream has been closed, further read(), ready(),
             * mark(), reset(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            close(): void
        }
    }
}
