declare namespace java {
    namespace io {
        /**
         * This class implements an output stream in which the data is
         * written into a byte array. The buffer automatically grows as data
         * is written to it.
         * The data can be retrieved using <code>toByteArray()</code> and
         * <code>toString()</code>.
         * <p>
         * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
         * this class can be called after the stream has been closed without
         * generating an <tt>IOException</tt>.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        class ByteArrayOutputStream extends java.io.OutputStream {
            /**
             * Creates a new byte array output stream. The buffer capacity is
             * initially 32 bytes, though its size increases if necessary.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new byte array output stream, with a buffer capacity of
             * the specified size, in bytes.
             * @param size   the initial size.
             * @exception IllegalArgumentException if size is negative.
             */
            // @ts-ignore
            constructor(size: number /*int*/)
            /**
             * The buffer where data is stored.
             */
            // @ts-ignore
            buf: number /*byte*/[]
            /**
             * The number of valid bytes in the buffer.
             */
            // @ts-ignore
            count: number /*int*/
            /**
             * Writes the specified byte to this byte array output stream.
             * @param b   the byte to be written.
             */
            // @ts-ignore
            public write(b: number /*int*/): void
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this byte array output stream.
             * @param b     the data.
             * @param off   the start offset in the data.
             * @param len   the number of bytes to write.
             */
            // @ts-ignore
            public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Writes the complete contents of this byte array output stream to
             * the specified output stream argument, as if by calling the output
             * stream's write method using <code>out.write(buf, 0, count)</code>.
             * @param out   the output stream to which to write the data.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            public writeTo(out: java.io.OutputStream): void
            /**
             * Resets the <code>count</code> field of this byte array output
             * stream to zero, so that all currently accumulated output in the
             * output stream is discarded. The output stream can be used again,
             * reusing the already allocated buffer space.
             * @see java.io.ByteArrayInputStream#count
             */
            // @ts-ignore
            public reset(): void
            /**
             * Creates a newly allocated byte array. Its size is the current
             * size of this output stream and the valid contents of the buffer
             * have been copied into it.
             * @return the current contents of this output stream, as a byte array.
             * @see java.io.ByteArrayOutputStream#size()
             */
            // @ts-ignore
            public toByteArray(): number /*byte*/[]
            /**
             * Returns the current size of the buffer.
             * @return the value of the <code>count</code> field, which is the number
             *           of valid bytes in this output stream.
             * @see java.io.ByteArrayOutputStream#count
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Converts the buffer's contents into a string decoding bytes using the
             * platform's default character set. The length of the new <tt>String</tt>
             * is a function of the character set, and hence may not be equal to the
             * size of the buffer.
             * <p> This method always replaces malformed-input and unmappable-character
             * sequences with the default replacement string for the platform's
             * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
             * class should be used when more control over the decoding process is
             * required.
             * @return String decoded from the buffer's contents.
             * @since JDK1.1
             */
            // @ts-ignore
            public toString(): string
            /**
             * Converts the buffer's contents into a string by decoding the bytes using
             * the named {@link java.nio.charset.Charset charset}. The length of the new
             * <tt>String</tt> is a function of the charset, and hence may not be equal
             * to the length of the byte array.
             * <p> This method always replaces malformed-input and unmappable-character
             * sequences with this charset's default replacement string. The {@link
             * java.nio.charset.CharsetDecoder} class should be used when more control
             * over the decoding process is required.
             * @param charsetName  the name of a supported
             *              {#link java.nio.charset.Charset charset}
             * @return String decoded from the buffer's contents.
             * @exception UnsupportedEncodingException
             *              If the named charset is not supported
             * @since JDK1.1
             */
            // @ts-ignore
            public toString(charsetName: java.lang.String | string): string
            /**
             * Creates a newly allocated string. Its size is the current size of
             * the output stream and the valid contents of the buffer have been
             * copied into it. Each character <i>c</i> in the resulting string is
             * constructed from the corresponding element <i>b</i> in the byte
             * array such that:
             * <blockquote><pre>
             * c == (char)(((hibyte &amp; 0xff) &lt;&lt; 8) | (b &amp; 0xff))
             * </pre></blockquote>
             * @deprecated This method does not properly convert bytes into characters.
             *  As of JDK&nbsp;1.1, the preferred way to do this is via the
             *  <code>toString(String enc)</code> method, which takes an encoding-name
             *  argument, or the <code>toString()</code> method, which uses the
             *  platform's default character encoding.
             * @param hibyte    the high byte of each resulting Unicode character.
             * @return the current contents of the output stream, as a string.
             * @see java.io.ByteArrayOutputStream#size()
             * @see java.io.ByteArrayOutputStream#toString(String)
             * @see java.io.ByteArrayOutputStream#toString()
             */
            // @ts-ignore
            public toString(hibyte: number /*int*/): string
            /**
             * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
             * this class can be called after the stream has been closed without
             * generating an <tt>IOException</tt>.
             */
            // @ts-ignore
            public close(): void
        }
    }
}
