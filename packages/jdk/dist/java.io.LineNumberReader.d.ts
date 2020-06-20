declare namespace java {
    namespace io {
        /**
         * A buffered character-input stream that keeps track of line numbers.  This
         * class defines methods {@link #setLineNumber(int)} and {@link
         * #getLineNumber()} for setting and getting the current line number
         * respectively.
         * <p> By default, line numbering begins at 0. This number increments at every
         * <a href="#lt">line terminator</a> as the data is read, and can be changed
         * with a call to <tt>setLineNumber(int)</tt>.  Note however, that
         * <tt>setLineNumber(int)</tt> does not actually change the current position in
         * the stream; it only changes the value that will be returned by
         * <tt>getLineNumber()</tt>.
         * <p> A line is considered to be <a name="lt">terminated</a> by any one of a
         * line feed ('\n'), a carriage return ('\r'), or a carriage return followed
         * immediately by a linefeed.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class LineNumberReader extends java.io.BufferedReader {
            /**
             * Create a new line-numbering reader, using the default input-buffer
             * size.
             * @param in
             *          A Reader object to provide the underlying stream
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * Create a new line-numbering reader, reading characters into a buffer of
             * the given size.
             * @param in
             *          A Reader object to provide the underlying stream
             * @param sz
             *          An int specifying the size of the buffer
             */
            // @ts-ignore
            constructor(input: java.io.Reader, sz: number /*int*/)
            /**
             * Set the current line number.
             * @param lineNumber
             *          An int specifying the line number
             * @see #getLineNumber
             */
            // @ts-ignore
            setLineNumber(lineNumber: number /*int*/): void
            /**
             * Get the current line number.
             * @return The current line number
             * @see #setLineNumber
             */
            // @ts-ignore
            getLineNumber(): int
            /**
             * Read a single character.  <a href="#lt">Line terminators</a> are
             * compressed into single newline ('\n') characters.  Whenever a line
             * terminator is read the current line number is incremented.
             * @return The character read, or -1 if the end of the stream has been
             *           reached
             * @throws IOException
             *           If an I/O error occurs
             */
            // @ts-ignore
            read(): int
            /**
             * Read characters into a portion of an array.  Whenever a <a
             * href="#lt">line terminator</a> is read the current line number is
             * incremented.
             * @param cbuf
             *          Destination buffer
             * @param off
             *          Offset at which to start storing characters
             * @param len
             *          Maximum number of characters to read
             * @return The number of bytes read, or -1 if the end of the stream has
             *           already been reached
             * @throws IOException
             *           If an I/O error occurs
             */
            // @ts-ignore
            read(cbuf: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Read a line of text.  Whenever a <a href="#lt">line terminator</a> is
             * read the current line number is incremented.
             * @return A String containing the contents of the line, not including
             *           any <a href="#lt">line termination characters</a>, or
             *           <tt>null</tt> if the end of the stream has been reached
             * @throws IOException
             *           If an I/O error occurs
             */
            // @ts-ignore
            readLine(): java.lang.String
            /**
             * Skip characters.
             * @param n
             *          The number of characters to skip
             * @return The number of characters actually skipped
             * @throws IOException
             *           If an I/O error occurs
             * @throws IllegalArgumentException
             *           If <tt>n</tt> is negative
             */
            // @ts-ignore
            skip(n: number /*long*/): long
            /**
             * Mark the present position in the stream.  Subsequent calls to reset()
             * will attempt to reposition the stream to this point, and will also reset
             * the line number appropriately.
             * @param readAheadLimit
             *          Limit on the number of characters that may be read while still
             *          preserving the mark.  After reading this many characters,
             *          attempting to reset the stream may fail.
             * @throws IOException
             *           If an I/O error occurs
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Reset the stream to the most recent mark.
             * @throws IOException
             *           If the stream has not been marked, or if the mark has been
             *           invalidated
             */
            // @ts-ignore
            reset(): void
        }
    }
}
