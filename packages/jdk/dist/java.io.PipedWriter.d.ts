declare namespace java {
    namespace io {
        /**
         * Piped character-output streams.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class PipedWriter extends java.io.Writer {
            /**
             * Creates a piped writer connected to the specified piped
             * reader. Data characters written to this stream will then be
             * available as input from <code>snk</code>.
             * @param snk   The piped reader to connect to.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            constructor(snk: java.io.PipedReader)
            /**
             * Creates a piped writer that is not yet connected to a
             * piped reader. It must be connected to a piped reader,
             * either by the receiver or the sender, before being used.
             * @see java.io.PipedReader#connect(java.io.PipedWriter)
             * @see java.io.PipedWriter#connect(java.io.PipedReader)
             */
            // @ts-ignore
            constructor()
            /**
             * Connects this piped writer to a receiver. If this object
             * is already connected to some other piped reader, an
             * <code>IOException</code> is thrown.
             * <p>
             * If <code>snk</code> is an unconnected piped reader and
             * <code>src</code> is an unconnected piped writer, they may
             * be connected by either the call:
             * <blockquote><pre>
             * src.connect(snk)</pre></blockquote>
             * or the call:
             * <blockquote><pre>
             * snk.connect(src)</pre></blockquote>
             * The two calls have the same effect.
             * @param snk   the piped reader to connect to.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            public connect(snk: java.io.PipedReader): void
            /**
             * Writes the specified <code>char</code> to the piped output stream.
             * If a thread was reading data characters from the connected piped input
             * stream, but the thread is no longer alive, then an
             * <code>IOException</code> is thrown.
             * <p>
             * Implements the <code>write</code> method of <code>Writer</code>.
             * @param c   the <code>char</code> to be written.
             * @exception IOException  if the pipe is
             *           <a href=PipedOutputStream.html#BROKEN> <code>broken</code></a>,
             *           {#link #connect(java.io.PipedReader) unconnected}, closed
             *           or an I/O error occurs.
             */
            // @ts-ignore
            public write(c: number /*int*/): void
            /**
             * Writes <code>len</code> characters from the specified character array
             * starting at offset <code>off</code> to this piped output stream.
             * This method blocks until all the characters are written to the output
             * stream.
             * If a thread was reading data characters from the connected piped input
             * stream, but the thread is no longer alive, then an
             * <code>IOException</code> is thrown.
             * @param cbuf  the data.
             * @param off   the start offset in the data.
             * @param len   the number of characters to write.
             * @exception IOException  if the pipe is
             *           <a href=PipedOutputStream.html#BROKEN> <code>broken</code></a>,
             *           {#link #connect(java.io.PipedReader) unconnected}, closed
             *           or an I/O error occurs.
             */
            // @ts-ignore
            public write(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Flushes this output stream and forces any buffered output characters
             * to be written out.
             * This will notify any readers that characters are waiting in the pipe.
             * @exception IOException  if the pipe is closed, or an I/O error occurs.
             */
            // @ts-ignore
            public flush(): void
            /**
             * Closes this piped output stream and releases any system resources
             * associated with this stream. This stream may no longer be used for
             * writing characters.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            public close(): void
        }
    }
}
