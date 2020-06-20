declare namespace java {
    namespace io {
        /**
         * A <code>BufferedInputStream</code> adds
         * functionality to another input stream-namely,
         * the ability to buffer the input and to
         * support the <code>mark</code> and <code>reset</code>
         * methods. When  the <code>BufferedInputStream</code>
         * is created, an internal buffer array is
         * created. As bytes  from the stream are read
         * or skipped, the internal buffer is refilled
         * as necessary  from the contained input stream,
         * many bytes at a time. The <code>mark</code>
         * operation  remembers a point in the input
         * stream and the <code>reset</code> operation
         * causes all the  bytes read since the most
         * recent <code>mark</code> operation to be
         * reread before new bytes are  taken from
         * the contained input stream.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        class BufferedInputStream extends java.io.FilterInputStream {
            /**
             * Creates a <code>BufferedInputStream</code>
             * and saves its  argument, the input stream
             * <code>in</code>, for later use. An internal
             * buffer array is created and  stored in <code>buf</code>.
             * @param in   the underlying input stream.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates a <code>BufferedInputStream</code>
             * with the specified buffer size,
             * and saves its  argument, the input stream
             * <code>in</code>, for later use.  An internal
             * buffer array of length  <code>size</code>
             * is created and stored in <code>buf</code>.
             * @param in     the underlying input stream.
             * @param size   the buffer size.
             * @exception IllegalArgumentException if {#code size <= 0}.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, size: number /*int*/)
            /**
             * The internal buffer array where the data is stored. When necessary,
             * it may be replaced by another array of
             * a different size.
             */
            // @ts-ignore
            buf: number /*byte*/[]
            /**
             * The index one greater than the index of the last valid byte in
             * the buffer.
             * This value is always
             * in the range <code>0</code> through <code>buf.length</code>;
             * elements <code>buf[0]</code>  through <code>buf[count-1]
             * </code>contain buffered input data obtained
             * from the underlying  input stream.
             */
            // @ts-ignore
            count: number /*int*/
            /**
             * The current position in the buffer. This is the index of the next
             * character to be read from the <code>buf</code> array.
             * <p>
             * This value is always in the range <code>0</code>
             * through <code>count</code>. If it is less
             * than <code>count</code>, then  <code>buf[pos]</code>
             * is the next byte to be supplied as input;
             * if it is equal to <code>count</code>, then
             * the  next <code>read</code> or <code>skip</code>
             * operation will require more bytes to be
             * read from the contained  input stream.
             * @see java.io.BufferedInputStream#buf
             */
            // @ts-ignore
            pos: number /*int*/
            /**
             * The value of the <code>pos</code> field at the time the last
             * <code>mark</code> method was called.
             * <p>
             * This value is always
             * in the range <code>-1</code> through <code>pos</code>.
             * If there is no marked position in  the input
             * stream, this field is <code>-1</code>. If
             * there is a marked position in the input
             * stream,  then <code>buf[markpos]</code>
             * is the first byte to be supplied as input
             * after a <code>reset</code> operation. If
             * <code>markpos</code> is not <code>-1</code>,
             * then all bytes from positions <code>buf[markpos]</code>
             * through  <code>buf[pos-1]</code> must remain
             * in the buffer array (though they may be
             * moved to  another place in the buffer array,
             * with suitable adjustments to the values
             * of <code>count</code>,  <code>pos</code>,
             * and <code>markpos</code>); they may not
             * be discarded unless and until the difference
             * between <code>pos</code> and <code>markpos</code>
             * exceeds <code>marklimit</code>.
             * @see java.io.BufferedInputStream#mark(int)
             * @see java.io.BufferedInputStream#pos
             */
            // @ts-ignore
            markpos: number /*int*/
            /**
             * The maximum read ahead allowed after a call to the
             * <code>mark</code> method before subsequent calls to the
             * <code>reset</code> method fail.
             * Whenever the difference between <code>pos</code>
             * and <code>markpos</code> exceeds <code>marklimit</code>,
             * then the  mark may be dropped by setting
             * <code>markpos</code> to <code>-1</code>.
             * @see java.io.BufferedInputStream#mark(int)
             * @see java.io.BufferedInputStream#reset()
             */
            // @ts-ignore
            marklimit: number /*int*/
            /**
             * See
             * the general contract of the <code>read</code>
             * method of <code>InputStream</code>.
             * @return the next byte of data, or <code>-1</code> if the end of the
             *              stream is reached.
             * @exception IOException  if this input stream has been closed by
             *                           invoking its {#link #close()} method,
             *                           or an I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            read(): int
            /**
             * Reads bytes from this byte-input stream into the specified byte array,
             * starting at the given offset.
             * <p> This method implements the general contract of the corresponding
             * <code>{@link InputStream#read(byte[], int, int) read}</code> method of
             * the <code>{@link InputStream}</code> class.  As an additional
             * convenience, it attempts to read as many bytes as possible by repeatedly
             * invoking the <code>read</code> method of the underlying stream.  This
             * iterated <code>read</code> continues until one of the following
             * conditions becomes true: <ul>
             * <li> The specified number of bytes have been read,
             * <li> The <code>read</code> method of the underlying stream returns
             * <code>-1</code>, indicating end-of-file, or
             * <li> The <code>available</code> method of the underlying stream
             * returns zero, indicating that further input requests would block.
             * </ul> If the first <code>read</code> on the underlying stream returns
             * <code>-1</code> to indicate end-of-file then this method returns
             * <code>-1</code>.  Otherwise this method returns the number of bytes
             * actually read.
             * <p> Subclasses of this class are encouraged, but not required, to
             * attempt to read as many bytes as possible in the same fashion.
             * @param b     destination buffer.
             * @param off   offset at which to start storing bytes.
             * @param len   maximum number of bytes to read.
             * @return the number of bytes read, or <code>-1</code> if the end of
             *              the stream has been reached.
             * @exception IOException  if this input stream has been closed by
             *                           invoking its {#link #close()} method,
             *                           or an I/O error occurs.
             */
            // @ts-ignore
            read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
            /**
             * See the general contract of the <code>skip</code>
             * method of <code>InputStream</code>.
             * @exception IOException  if the stream does not support seek,
             *                           or if this input stream has been closed by
             *                           invoking its {#link #close()} method, or an
             *                           I/O error occurs.
             */
            // @ts-ignore
            skip(n: number /*long*/): long
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * invocation of a method for this input stream. The next invocation might be
             * the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p>
             * This method returns the sum of the number of bytes remaining to be read in
             * the buffer (<code>count&nbsp;- pos</code>) and the result of calling the
             * {@link java.io.FilterInputStream#in in}.available().
             * @return an estimate of the number of bytes that can be read (or skipped
             *              over) from this input stream without blocking.
             * @exception IOException  if this input stream has been closed by
             *                           invoking its {#link #close()} method,
             *                           or an I/O error occurs.
             */
            // @ts-ignore
            available(): int
            /**
             * See the general contract of the <code>mark</code>
             * method of <code>InputStream</code>.
             * @param readlimit   the maximum limit of bytes that can be read before
             *                       the mark position becomes invalid.
             * @see java.io.BufferedInputStream#reset()
             */
            // @ts-ignore
            mark(readlimit: number /*int*/): void
            /**
             * See the general contract of the <code>reset</code>
             * method of <code>InputStream</code>.
             * <p>
             * If <code>markpos</code> is <code>-1</code>
             * (no mark has been set or the mark has been
             * invalidated), an <code>IOException</code>
             * is thrown. Otherwise, <code>pos</code> is
             * set equal to <code>markpos</code>.
             * @exception IOException  if this stream has not been marked or,
             *                   if the mark has been invalidated, or the stream
             *                   has been closed by invoking its {#link #close()}
             *                   method, or an I/O error occurs.
             * @see java.io.BufferedInputStream#mark(int)
             */
            // @ts-ignore
            reset(): void
            /**
             * Tests if this input stream supports the <code>mark</code>
             * and <code>reset</code> methods. The <code>markSupported</code>
             * method of <code>BufferedInputStream</code> returns
             * <code>true</code>.
             * @return a <code>boolean</code> indicating if this stream type supports
             *           the <code>mark</code> and <code>reset</code> methods.
             * @see java.io.InputStream#mark(int)
             * @see java.io.InputStream#reset()
             */
            // @ts-ignore
            markSupported(): boolean
            /**
             * Closes this input stream and releases any system resources
             * associated with the stream.
             * Once the stream has been closed, further read(), available(), reset(),
             * or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            close(): void
        }
    }
}
