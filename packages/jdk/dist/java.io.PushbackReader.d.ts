declare namespace java {
    namespace io {
        /**
         * A character-stream reader that allows characters to be pushed back into the
         * stream.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class PushbackReader extends java.io.FilterReader {
            /**
             * Creates a new pushback reader with a pushback buffer of the given size.
             * @param in   The reader from which characters will be read
             * @param size The size of the pushback buffer
             * @exception IllegalArgumentException if {#code size <= 0}
             */
            // @ts-ignore
            constructor(input: java.io.Reader, size: number /*int*/)
            /**
             * Creates a new pushback reader with a one-character pushback buffer.
             * @param in  The reader from which characters will be read
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
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
             * Pushes back a single character by copying it to the front of the
             * pushback buffer. After this method returns, the next character to be read
             * will have the value <code>(char)c</code>.
             * @param c  The int value representing a character to be pushed back
             * @exception IOException  If the pushback buffer is full,
             *                           or if some other I/O error occurs
             */
            // @ts-ignore
            unread(c: number /*int*/): void
            /**
             * Pushes back a portion of an array of characters by copying it to the
             * front of the pushback buffer.  After this method returns, the next
             * character to be read will have the value <code>cbuf[off]</code>, the
             * character after that will have the value <code>cbuf[off+1]</code>, and
             * so forth.
             * @param cbuf  Character array
             * @param off   Offset of first character to push back
             * @param len   Number of characters to push back
             * @exception IOException  If there is insufficient room in the pushback
             *                           buffer, or if some other I/O error occurs
             */
            // @ts-ignore
            unread(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Pushes back an array of characters by copying it to the front of the
             * pushback buffer.  After this method returns, the next character to be
             * read will have the value <code>cbuf[0]</code>, the character after that
             * will have the value <code>cbuf[1]</code>, and so forth.
             * @param cbuf  Character array to push back
             * @exception IOException  If there is insufficient room in the pushback
             *                           buffer, or if some other I/O error occurs
             */
            // @ts-ignore
            unread(cbuf: string[]): void
            /**
             * Tells whether this stream is ready to be read.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            ready(): boolean
            /**
             * Marks the present position in the stream. The <code>mark</code>
             * for class <code>PushbackReader</code> always throws an exception.
             * @exception IOException  Always, since mark is not supported
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream. The <code>reset</code> method of
             * <code>PushbackReader</code> always throws an exception.
             * @exception IOException  Always, since reset is not supported
             */
            // @ts-ignore
            reset(): void
            /**
             * Tells whether this stream supports the mark() operation, which it does
             * not.
             */
            // @ts-ignore
            markSupported(): boolean
            /**
             * Closes the stream and releases any system resources associated with
             * it. Once the stream has been closed, further read(),
             * unread(), ready(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            close(): void
            /**
             * Skips characters.  This method will block until some characters are
             * available, an I/O error occurs, or the end of the stream is reached.
             * @param n  The number of characters to skip
             * @return The number of characters actually skipped
             * @exception IllegalArgumentException  If <code>n</code> is negative.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            skip(n: number /*long*/): long
        }
    }
}
