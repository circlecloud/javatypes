declare namespace java {
    namespace io {
        /**
         * An InputStreamReader is a bridge from byte streams to character streams: It
         * reads bytes and decodes them into characters using a specified {@link
         * java.nio.charset.Charset charset}.  The charset that it uses
         * may be specified by name or may be given explicitly, or the platform's
         * default charset may be accepted.
         * <p> Each invocation of one of an InputStreamReader's read() methods may
         * cause one or more bytes to be read from the underlying byte-input stream.
         * To enable the efficient conversion of bytes to characters, more bytes may
         * be read ahead from the underlying stream than are necessary to satisfy the
         * current read operation.
         * <p> For top efficiency, consider wrapping an InputStreamReader within a
         * BufferedReader.  For example:
         * <pre>
         * BufferedReader in
         * = new BufferedReader(new InputStreamReader(System.in));
         * </pre>
         * @see BufferedReader
         * @see InputStream
         * @see java.nio.charset.Charset
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class InputStreamReader extends java.io.Reader {
            /**
             * Creates an InputStreamReader that uses the default charset.
             * @param in   An InputStream
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates an InputStreamReader that uses the named charset.
             * @param in
             *          An InputStream
             * @param charsetName
             *          The name of a supported
             *          {#link java.nio.charset.Charset charset}
             * @exception UnsupportedEncodingException
             *              If the named charset is not supported
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, charsetName: java.lang.String | string)
            /**
             * Creates an InputStreamReader that uses the given charset.
             * @param in       An InputStream
             * @param cs       A charset
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, cs: java.nio.charset.Charset)
            /**
             * Creates an InputStreamReader that uses the given charset decoder.
             * @param in       An InputStream
             * @param dec      A charset decoder
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, dec: java.nio.charset.CharsetDecoder)
            /**
             * Returns the name of the character encoding being used by this stream.
             * <p> If the encoding has an historical name then that name is returned;
             * otherwise the encoding's canonical name is returned.
             * <p> If this instance was created with the {@link
             * #InputStreamReader(InputStream, String)} constructor then the returned
             * name, being unique for the encoding, may differ from the name passed to
             * the constructor. This method will return <code>null</code> if the
             * stream has been closed.
             * </p>
             * @return The historical name of this encoding, or
             *          <code>null</code> if the stream has been closed
             * @see java.nio.charset.Charset
             * @revised 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            public getEncoding(): string
            /**
             * Reads a single character.
             * @return The character read, or -1 if the end of the stream has been
             *          reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public read(): number /*int*/
            /**
             * Reads characters into a portion of an array.
             * @param cbuf     Destination buffer
             * @param offset   Offset at which to start storing characters
             * @param length   Maximum number of characters to read
             * @return The number of characters read, or -1 if the end of the
             *              stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public read(cbuf: string[], offset: number /*int*/, length: number /*int*/): number /*int*/
            /**
             * Tells whether this stream is ready to be read.  An InputStreamReader is
             * ready if its input buffer is not empty, or if bytes are available to be
             * read from the underlying byte stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public ready(): boolean
            // @ts-ignore
            public close(): void
        }
    }
}
