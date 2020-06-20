declare namespace java {
    namespace io {
        /**
         * Reads text from a character-input stream, buffering characters so as to
         * provide for the efficient reading of characters, arrays, and lines.
         * <p> The buffer size may be specified, or the default size may be used.  The
         * default is large enough for most purposes.
         * <p> In general, each read request made of a Reader causes a corresponding
         * read request to be made of the underlying character or byte stream.  It is
         * therefore advisable to wrap a BufferedReader around any Reader whose read()
         * operations may be costly, such as FileReaders and InputStreamReaders.  For
         * example,
         * <pre>
         * BufferedReader in
         * = new BufferedReader(new FileReader("foo.in"));
         * </pre>
         * will buffer the input from the specified file.  Without buffering, each
         * invocation of read() or readLine() could cause bytes to be read from the
         * file, converted into characters, and then returned, which can be very
         * inefficient.
         * <p> Programs that use DataInputStreams for textual input can be localized by
         * replacing each DataInputStream with an appropriate BufferedReader.
         * @see FileReader
         * @see InputStreamReader
         * @see java.nio.file.Files#newBufferedReader
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class BufferedReader extends java.io.Reader {
            /**
             * Creates a buffering character-input stream that uses an input buffer of
             * the specified size.
             * @param in   A Reader
             * @param sz   Input-buffer size
             * @exception IllegalArgumentException  If {#code sz <= 0}
             */
            // @ts-ignore
            constructor(input: java.io.Reader, sz: number /*int*/)
            /**
             * Creates a buffering character-input stream that uses a default-sized
             * input buffer.
             * @param in   A Reader
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * Reads a single character.
             * @return The character read, as an integer in the range
             *          0 to 65535 (<tt>0x00-0xffff</tt>), or -1 if the
             *          end of the stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(): int
            /**
             * Reads characters into a portion of an array.
             * <p> This method implements the general contract of the corresponding
             * <code>{@link Reader#read(char[], int, int) read}</code> method of the
             * <code>{@link Reader}</code> class.  As an additional convenience, it
             * attempts to read as many characters as possible by repeatedly invoking
             * the <code>read</code> method of the underlying stream.  This iterated
             * <code>read</code> continues until one of the following conditions becomes
             * true: <ul>
             * <li> The specified number of characters have been read,
             * <li> The <code>read</code> method of the underlying stream returns
             * <code>-1</code>, indicating end-of-file, or
             * <li> The <code>ready</code> method of the underlying stream
             * returns <code>false</code>, indicating that further input requests
             * would block.
             * </ul> If the first <code>read</code> on the underlying stream returns
             * <code>-1</code> to indicate end-of-file then this method returns
             * <code>-1</code>.  Otherwise this method returns the number of characters
             * actually read.
             * <p> Subclasses of this class are encouraged, but not required, to
             * attempt to read as many characters as possible in the same fashion.
             * <p> Ordinarily this method takes characters from this stream's character
             * buffer, filling it from the underlying stream as necessary.  If,
             * however, the buffer is empty, the mark is not valid, and the requested
             * length is at least as large as the buffer, then this method will read
             * characters directly from the underlying stream into the given array.
             * Thus redundant <code>BufferedReader</code>s will not copy data
             * unnecessarily.
             * @param cbuf  Destination buffer
             * @param off   Offset at which to start storing characters
             * @param len   Maximum number of characters to read
             * @return The number of characters read, or -1 if the end of the
             *              stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(cbuf: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Reads a line of text.  A line is considered to be terminated by any one
             * of a line feed ('\n'), a carriage return ('\r'), or a carriage return
             * followed immediately by a linefeed.
             * @return A String containing the contents of the line, not including
             *              any line-termination characters, or null if the end of the
             *              stream has been reached
             * @exception IOException  If an I/O error occurs
             * @see java.nio.file.Files#readAllLines
             */
            // @ts-ignore
            readLine(): java.lang.String
            /**
             * Skips characters.
             * @param n  The number of characters to skip
             * @return The number of characters actually skipped
             * @exception IllegalArgumentException  If <code>n</code> is negative.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            skip(n: number /*long*/): long
            /**
             * Tells whether this stream is ready to be read.  A buffered character
             * stream is ready if the buffer is not empty, or if the underlying
             * character stream is ready.
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
             * will attempt to reposition the stream to this point.
             * @param readAheadLimit   Limit on the number of characters that may be
             *                          read while still preserving the mark. An attempt
             *                          to reset the stream after reading characters
             *                          up to this limit or beyond may fail.
             *                          A limit value larger than the size of the input
             *                          buffer will cause a new buffer to be allocated
             *                          whose size is no smaller than limit.
             *                          Therefore large values should be used with care.
             * @exception IllegalArgumentException  If {#code readAheadLimit < 0}
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream to the most recent mark.
             * @exception IOException  If the stream has never been marked,
             *                           or if the mark has been invalidated
             */
            // @ts-ignore
            reset(): void
            // @ts-ignore
            close(): void
            /**
             * Returns a {@code Stream}, the elements of which are lines read from
             * this {@code BufferedReader}.  The {@link Stream} is lazily populated,
             * i.e., read only occurs during the
             * <a href="../util/stream/package-summary.html#StreamOps">terminal
             * stream operation</a>.
             * <p> The reader must not be operated on during the execution of the
             * terminal stream operation. Otherwise, the result of the terminal stream
             * operation is undefined.
             * <p> After execution of the terminal stream operation there are no
             * guarantees that the reader will be at a specific position from which to
             * read the next character or line.
             * <p> If an {@link IOException} is thrown when accessing the underlying
             * {@code BufferedReader}, it is wrapped in an {@link
             * UncheckedIOException} which will be thrown from the {@code Stream}
             * method that caused the read to take place. This method will return a
             * Stream if invoked on a BufferedReader that is closed. Any operation on
             * that stream that requires reading from the BufferedReader after it is
             * closed, will cause an UncheckedIOException to be thrown.
             * @return a {#code Stream<String>} providing the lines of text
             *          described by this {@code BufferedReader}
             * @since 1.8
             */
            // @ts-ignore
            lines(): java.util.stream.Stream<java.lang.String>
        }
    }
}
