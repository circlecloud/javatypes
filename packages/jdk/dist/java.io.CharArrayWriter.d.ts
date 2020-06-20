declare namespace java {
    namespace io {
        /**
         * This class implements a character buffer that can be used as an Writer.
         * The buffer automatically grows when data is written to the stream.  The data
         * can be retrieved using toCharArray() and toString().
         * <P>
         * Note: Invoking close() on this class has no effect, and methods
         * of this class can be called after the stream has closed
         * without generating an IOException.
         * @author Herb Jellinek
         * @since JDK1.1
         */
        // @ts-ignore
        class CharArrayWriter extends java.io.Writer {
            /**
             * Creates a new CharArrayWriter.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new CharArrayWriter with the specified initial size.
             * @param initialSize  an int specifying the initial buffer size.
             * @exception IllegalArgumentException if initialSize is negative
             */
            // @ts-ignore
            constructor(initialSize: number /*int*/)
            /**
             * The buffer where data is stored.
             */
            // @ts-ignore
            buf: string[]
            /**
             * The number of chars in the buffer.
             */
            // @ts-ignore
            count: number /*int*/
            /**
             * Writes a character to the buffer.
             */
            // @ts-ignore
            write(c: number /*int*/): void
            /**
             * Writes characters to the buffer.
             * @param c the data to be written
             * @param off       the start offset in the data
             * @param len       the number of chars that are written
             */
            // @ts-ignore
            write(c: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Write a portion of a string to the buffer.
             * @param str  String to be written from
             * @param off  Offset from which to start reading characters
             * @param len  Number of characters to be written
             */
            // @ts-ignore
            write(str: string, off: number /*int*/, len: number /*int*/): void
            /**
             * Writes the contents of the buffer to another character stream.
             * @param out       the output stream to write to
             * @throws IOException If an I/O error occurs.
             */
            // @ts-ignore
            writeTo(out: java.io.Writer): void
            /**
             * Appends the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(csq.toString()) </pre>
             * <p> Depending on the specification of <tt>toString</tt> for the
             * character sequence <tt>csq</tt>, the entire sequence may not be
             * appended. For instance, invoking the <tt>toString</tt> method of a
             * character buffer will return a subsequence whose content depends upon
             * the buffer's position and limit.
             * @param csq
             *          The character sequence to append.  If <tt>csq</tt> is
             *          <tt>null</tt>, then the four characters <tt>"null"</tt> are
             *          appended to this writer.
             * @return This writer
             * @since 1.5
             */
            // @ts-ignore
            append(csq: java.lang.CharSequence): java.io.CharArrayWriter
            /**
             * Appends a subsequence of the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.write(csq.subSequence(start, end).toString()) </pre>
             * @param csq
             *          The character sequence from which a subsequence will be
             *          appended.  If <tt>csq</tt> is <tt>null</tt>, then characters
             *          will be appended as if <tt>csq</tt> contained the four
             *          characters <tt>"null"</tt>.
             * @param start
             *          The index of the first character in the subsequence
             * @param end
             *          The index of the character following the last character in the
             *          subsequence
             * @return This writer
             * @throws IndexOutOfBoundsException
             *           If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>
             *           is greater than <tt>end</tt>, or <tt>end</tt> is greater than
             *           <tt>csq.length()</tt>
             * @since 1.5
             */
            // @ts-ignore
            append(csq: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.io.CharArrayWriter
            /**
             * Appends the specified character to this writer.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(c) </pre>
             * @param c
             *          The 16-bit character to append
             * @return This writer
             * @since 1.5
             */
            // @ts-ignore
            append(c: string): java.io.CharArrayWriter
            /**
             * Resets the buffer so that you can use it again without
             * throwing away the already allocated buffer.
             */
            // @ts-ignore
            reset(): void
            /**
             * Returns a copy of the input data.
             * @return an array of chars copied from the input data.
             */
            // @ts-ignore
            toCharArray(): char[]
            /**
             * Returns the current size of the buffer.
             * @return an int representing the current size of the buffer.
             */
            // @ts-ignore
            size(): int
            /**
             * Converts input data to a string.
             * @return the string.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Flush the stream.
             */
            // @ts-ignore
            flush(): void
            /**
             * Close the stream.  This method does not release the buffer, since its
             * contents might still be required. Note: Invoking this method in this class
             * will have no effect.
             */
            // @ts-ignore
            close(): void
        }
    }
}
