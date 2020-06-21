declare namespace java {
    namespace io {
        /**
         * This class allows an application to create an input stream in
         * which the bytes read are supplied by the contents of a string.
         * Applications can also read bytes from a byte array by using a
         * <code>ByteArrayInputStream</code>.
         * <p>
         * Only the low eight bits of each character in the string are used by
         * this class.
         * @author Arthur van Hoff
         * @see java.io.ByteArrayInputStream
         * @see java.io.StringReader
         * @since JDK1.0
         * @deprecated This class does not properly convert characters into bytes.  As
         *              of JDK&nbsp;1.1, the preferred way to create a stream from a
         *              string is via the <code>StringReader</code> class.
         */
        // @ts-ignore
        class StringBufferInputStream extends java.io.InputStream {
            /**
             * Creates a string input stream to read data from the specified string.
             * @param s   the underlying input buffer.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * The string from which bytes are read.
             */
            // @ts-ignore
            buffer: java.lang.String | string
            /**
             * The index of the next character to read from the input stream buffer.
             * @see java.io.StringBufferInputStream#buffer
             */
            // @ts-ignore
            pos: number /*int*/
            /**
             * The number of valid characters in the input stream buffer.
             * @see java.io.StringBufferInputStream#buffer
             */
            // @ts-ignore
            count: number /*int*/
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>. If no byte is available
             * because the end of the stream has been reached, the value
             * <code>-1</code> is returned.
             * <p>
             * The <code>read</code> method of
             * <code>StringBufferInputStream</code> cannot block. It returns the
             * low eight bits of the next character in this input stream's buffer.
             * @return the next byte of data, or <code>-1</code> if the end of the
             *              stream is reached.
             */
            // @ts-ignore
            public read(): number /*int*/
            /**
             * Reads up to <code>len</code> bytes of data from this input stream
             * into an array of bytes.
             * <p>
             * The <code>read</code> method of
             * <code>StringBufferInputStream</code> cannot block. It copies the
             * low eight bits from the characters in this input stream's buffer into
             * the byte array argument.
             * @param b     the buffer into which the data is read.
             * @param off   the start offset of the data.
             * @param len   the maximum number of bytes read.
             * @return the total number of bytes read into the buffer, or
             *              <code>-1</code> if there is no more data because the end of
             *              the stream has been reached.
             */
            // @ts-ignore
            public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
            /**
             * Skips <code>n</code> bytes of input from this input stream. Fewer
             * bytes might be skipped if the end of the input stream is reached.
             * @param n   the number of bytes to be skipped.
             * @return the actual number of bytes skipped.
             */
            // @ts-ignore
            public skip(n: number /*long*/): number /*long*/
            /**
             * Returns the number of bytes that can be read from the input
             * stream without blocking.
             * @return the value of <code>count&nbsp;-&nbsp;pos</code>, which is the
             *              number of bytes remaining to be read from the input buffer.
             */
            // @ts-ignore
            public available(): number /*int*/
            /**
             * Resets the input stream to begin reading from the first character
             * of this input stream's underlying buffer.
             */
            // @ts-ignore
            public reset(): void
        }
    }
}
