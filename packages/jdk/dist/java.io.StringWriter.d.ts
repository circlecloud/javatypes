declare namespace java {
    namespace io {
        /**
         * A character stream that collects its output in a string buffer, which can
         * then be used to construct a string.
         * <p>
         * Closing a <tt>StringWriter</tt> has no effect. The methods in this class
         * can be called after the stream has been closed without generating an
         * <tt>IOException</tt>.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class StringWriter extends java.io.Writer {
            /**
             * Create a new string writer using the default initial string-buffer
             * size.
             */
            // @ts-ignore
            constructor()
            /**
             * Create a new string writer using the specified initial string-buffer
             * size.
             * @param initialSize
             *         The number of <tt>char</tt> values that will fit into this buffer
             *         before it is automatically expanded
             * @throws IllegalArgumentException
             *          If <tt>initialSize</tt> is negative
             */
            // @ts-ignore
            constructor(initialSize: number /*int*/)
            /**
             * Write a single character.
             */
            // @ts-ignore
            public write(c: number /*int*/): void
            /**
             * Write a portion of an array of characters.
             * @param cbuf  Array of characters
             * @param off   Offset from which to start writing characters
             * @param len   Number of characters to write
             */
            // @ts-ignore
            public write(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Write a string.
             */
            // @ts-ignore
            public write(str: java.lang.String | string): void
            /**
             * Write a portion of a string.
             * @param str  String to be written
             * @param off  Offset from which to start writing characters
             * @param len  Number of characters to write
             */
            // @ts-ignore
            public write(str: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
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
            public append(csq: java.lang.CharSequence): java.io.StringWriter
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
            public append(csq: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.io.StringWriter
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
            public append(c: string): java.io.StringWriter
            /**
             * Return the buffer's current value as a string.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Return the string buffer itself.
             * @return StringBuffer holding the current buffer value.
             */
            // @ts-ignore
            public getBuffer(): java.lang.StringBuffer
            /**
             * Flush the stream.
             */
            // @ts-ignore
            public flush(): void
            /**
             * Closing a <tt>StringWriter</tt> has no effect. The methods in this
             * class can be called after the stream has been closed without generating
             * an <tt>IOException</tt>.
             */
            // @ts-ignore
            public close(): void
        }
    }
}
