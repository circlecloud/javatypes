declare namespace java {
    namespace io {
        /**
         * An OutputStreamWriter is a bridge from character streams to byte streams:
         * Characters written to it are encoded into bytes using a specified {@link
         * java.nio.charset.Charset charset}.  The charset that it uses
         * may be specified by name or may be given explicitly, or the platform's
         * default charset may be accepted.
         * <p> Each invocation of a write() method causes the encoding converter to be
         * invoked on the given character(s).  The resulting bytes are accumulated in a
         * buffer before being written to the underlying output stream.  The size of
         * this buffer may be specified, but by default it is large enough for most
         * purposes.  Note that the characters passed to the write() methods are not
         * buffered.
         * <p> For top efficiency, consider wrapping an OutputStreamWriter within a
         * BufferedWriter so as to avoid frequent converter invocations.  For example:
         * <pre>
         * Writer out
         * = new BufferedWriter(new OutputStreamWriter(System.out));
         * </pre>
         * <p> A <i>surrogate pair</i> is a character represented by a sequence of two
         * <tt>char</tt> values: A <i>high</i> surrogate in the range '&#92;uD800' to
         * '&#92;uDBFF' followed by a <i>low</i> surrogate in the range '&#92;uDC00' to
         * '&#92;uDFFF'.
         * <p> A <i>malformed surrogate element</i> is a high surrogate that is not
         * followed by a low surrogate or a low surrogate that is not preceded by a
         * high surrogate.
         * <p> This class always replaces malformed surrogate elements and unmappable
         * character sequences with the charset's default <i>substitution sequence</i>.
         * The {@linkplain java.nio.charset.CharsetEncoder} class should be used when more
         * control over the encoding process is required.
         * @see BufferedWriter
         * @see OutputStream
         * @see java.nio.charset.Charset
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class OutputStreamWriter extends java.io.Writer {
            /**
             * Creates an OutputStreamWriter that uses the named charset.
             * @param out
             *          An OutputStream
             * @param charsetName
             *          The name of a supported
             *          {#link java.nio.charset.Charset charset}
             * @exception UnsupportedEncodingException
             *              If the named encoding is not supported
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, charsetName: string)
            /**
             * Creates an OutputStreamWriter that uses the default character encoding.
             * @param out  An OutputStream
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates an OutputStreamWriter that uses the given charset.
             * @param out
             *          An OutputStream
             * @param cs
             *          A charset
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, cs: java.nio.charset.Charset)
            /**
             * Creates an OutputStreamWriter that uses the given charset encoder.
             * @param out
             *          An OutputStream
             * @param enc
             *          A charset encoder
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, enc: java.nio.charset.CharsetEncoder)
            /**
             * Returns the name of the character encoding being used by this stream.
             * <p> If the encoding has an historical name then that name is returned;
             * otherwise the encoding's canonical name is returned.
             * <p> If this instance was created with the {@link
             * #OutputStreamWriter(OutputStream, String)} constructor then the returned
             * name, being unique for the encoding, may differ from the name passed to
             * the constructor.  This method may return <tt>null</tt> if the stream has
             * been closed. </p>
             * @return The historical name of this encoding, or possibly
             *          <code>null</code> if the stream has been closed
             * @see java.nio.charset.Charset
             * @revised 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            getEncoding(): java.lang.String
            /**
             * Writes a single character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(c: number /*int*/): void
            /**
             * Writes a portion of an array of characters.
             * @param cbuf  Buffer of characters
             * @param off   Offset from which to start writing characters
             * @param len   Number of characters to write
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Writes a portion of a string.
             * @param str  A String
             * @param off  Offset from which to start writing characters
             * @param len  Number of characters to write
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(str: string, off: number /*int*/, len: number /*int*/): void
            /**
             * Flushes the stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            flush(): void
            // @ts-ignore
            close(): void
        }
    }
}
