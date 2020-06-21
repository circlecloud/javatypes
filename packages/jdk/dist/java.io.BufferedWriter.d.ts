declare namespace java {
    namespace io {
        /**
         * Writes text to a character-output stream, buffering characters so as to
         * provide for the efficient writing of single characters, arrays, and strings.
         * <p> The buffer size may be specified, or the default size may be accepted.
         * The default is large enough for most purposes.
         * <p> A newLine() method is provided, which uses the platform's own notion of
         * line separator as defined by the system property <tt>line.separator</tt>.
         * Not all platforms use the newline character ('\n') to terminate lines.
         * Calling this method to terminate each output line is therefore preferred to
         * writing a newline character directly.
         * <p> In general, a Writer sends its output immediately to the underlying
         * character or byte stream.  Unless prompt output is required, it is advisable
         * to wrap a BufferedWriter around any Writer whose write() operations may be
         * costly, such as FileWriters and OutputStreamWriters.  For example,
         * <pre>
         * PrintWriter out
         * = new PrintWriter(new BufferedWriter(new FileWriter("foo.out")));
         * </pre>
         * will buffer the PrintWriter's output to the file.  Without buffering, each
         * invocation of a print() method would cause characters to be converted into
         * bytes that would then be written immediately to the file, which can be very
         * inefficient.
         * @see PrintWriter
         * @see FileWriter
         * @see OutputStreamWriter
         * @see java.nio.file.Files#newBufferedWriter
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class BufferedWriter extends java.io.Writer {
            /**
             * Creates a buffered character-output stream that uses a default-sized
             * output buffer.
             * @param out  A Writer
             */
            // @ts-ignore
            constructor(out: java.io.Writer)
            /**
             * Creates a new buffered character-output stream that uses an output
             * buffer of the given size.
             * @param out  A Writer
             * @param sz   Output-buffer size, a positive integer
             * @exception IllegalArgumentException  If {#code sz <= 0}
             */
            // @ts-ignore
            constructor(out: java.io.Writer, sz: number /*int*/)
            /**
             * Writes a single character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public write(c: number /*int*/): void
            /**
             * Writes a portion of an array of characters.
             * <p> Ordinarily this method stores characters from the given array into
             * this stream's buffer, flushing the buffer to the underlying stream as
             * needed.  If the requested length is at least as large as the buffer,
             * however, then this method will flush the buffer and write the characters
             * directly to the underlying stream.  Thus redundant
             * <code>BufferedWriter</code>s will not copy data unnecessarily.
             * @param cbuf  A character array
             * @param off   Offset from which to start reading characters
             * @param len   Number of characters to write
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public write(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Writes a portion of a String.
             * <p> If the value of the <tt>len</tt> parameter is negative then no
             * characters are written.  This is contrary to the specification of this
             * method in the {@linkplain java.io.Writer#write(java.lang.String,int,int)
             * superclass}, which requires that an {@link IndexOutOfBoundsException} be
             * thrown.
             * @param s     String to be written
             * @param off   Offset from which to start reading characters
             * @param len   Number of characters to be written
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public write(s: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
            /**
             * Writes a line separator.  The line separator string is defined by the
             * system property <tt>line.separator</tt>, and is not necessarily a single
             * newline ('\n') character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public newLine(): void
            /**
             * Flushes the stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public flush(): void
            // @ts-ignore
            public close(): void
        }
    }
}
