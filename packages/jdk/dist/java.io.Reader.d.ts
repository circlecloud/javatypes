declare namespace java {
    namespace io {
        /**
         * Abstract class for reading character streams.  The only methods that a
         * subclass must implement are read(char[], int, int) and close().  Most
         * subclasses, however, will override some of the methods defined here in order
         * to provide higher efficiency, additional functionality, or both.
         * @see BufferedReader
         * @see LineNumberReader
         * @see CharArrayReader
         * @see InputStreamReader
         * @see FileReader
         * @see FilterReader
         * @see PushbackReader
         * @see PipedReader
         * @see StringReader
         * @see Writer
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class Reader extends java.lang.Object implements java.lang.Readable, java.io.Closeable {
            /**
             * Creates a new character-stream reader whose critical sections will
             * synchronize on the reader itself.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new character-stream reader whose critical sections will
             * synchronize on the given object.
             * @param lock  The Object to synchronize on.
             */
            // @ts-ignore
            constructor(lock: any)
            /**
             * The object used to synchronize operations on this stream.  For
             * efficiency, a character-stream object may use an object other than
             * itself to protect critical sections.  A subclass should therefore use
             * the object in this field rather than <tt>this</tt> or a synchronized
             * method.
             */
            // @ts-ignore
            lock: any
            /**
             * Attempts to read characters into the specified character buffer.
             * The buffer is used as a repository of characters as-is: the only
             * changes made are the results of a put operation. No flipping or
             * rewinding of the buffer is performed.
             * @param target the buffer to read characters into
             * @return The number of characters added to the buffer, or
             *          -1 if this source of characters is at its end
             * @throws IOException if an I/O error occurs
             * @throws NullPointerException if target is null
             * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
             * @since 1.5
             */
            // @ts-ignore
            read(target: java.nio.CharBuffer): int
            /**
             * Reads a single character.  This method will block until a character is
             * available, an I/O error occurs, or the end of the stream is reached.
             * <p> Subclasses that intend to support efficient single-character input
             * should override this method.
             * @return The character read, as an integer in the range 0 to 65535
             *              (<tt>0x00-0xffff</tt>), or -1 if the end of the stream has
             *              been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(): int
            /**
             * Reads characters into an array.  This method will block until some input
             * is available, an I/O error occurs, or the end of the stream is reached.
             * @param cbuf  Destination buffer
             * @return The number of characters read, or -1
             *               if the end of the stream
             *               has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            read(cbuf: string[]): int
            /**
             * Reads characters into a portion of an array.  This method will block
             * until some input is available, an I/O error occurs, or the end of the
             * stream is reached.
             * @param cbuf  Destination buffer
             * @param off   Offset at which to start storing characters
             * @param len   Maximum number of characters to read
             * @return The number of characters read, or -1 if the end of the
             *              stream has been reached
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            abstract read(cbuf: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Skips characters.  This method will block until some characters are
             * available, an I/O error occurs, or the end of the stream is reached.
             * @param n  The number of characters to skip
             * @return The number of characters actually skipped
             * @exception IllegalArgumentException  If <code>n</code> is negative.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            skip(n: number /*long*/): long
            /**
             * Tells whether this stream is ready to be read.
             * @return True if the next read() is guaranteed not to block for input,
             *  false otherwise.  Note that returning false does not guarantee that the
             *  next read will block.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            ready(): boolean
            /**
             * Tells whether this stream supports the mark() operation. The default
             * implementation always returns false. Subclasses should override this
             * method.
             * @return true if and only if this stream supports the mark operation.
             */
            // @ts-ignore
            markSupported(): boolean
            /**
             * Marks the present position in the stream.  Subsequent calls to reset()
             * will attempt to reposition the stream to this point.  Not all
             * character-input streams support the mark() operation.
             * @param readAheadLimit  Limit on the number of characters that may be
             *                          read while still preserving the mark.  After
             *                          reading this many characters, attempting to
             *                          reset the stream may fail.
             * @exception IOException  If the stream does not support mark(),
             *                           or if some other I/O error occurs
             */
            // @ts-ignore
            mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream.  If the stream has been marked, then attempt to
             * reposition it at the mark.  If the stream has not been marked, then
             * attempt to reset it in some way appropriate to the particular stream,
             * for example by repositioning it to its starting point.  Not all
             * character-input streams support the reset() operation, and some support
             * reset() without supporting mark().
             * @exception IOException  If the stream has not been marked,
             *                           or if the mark has been invalidated,
             *                           or if the stream does not support reset(),
             *                           or if some other I/O error occurs
             */
            // @ts-ignore
            reset(): void
            /**
             * Closes the stream and releases any system resources associated with
             * it.  Once the stream has been closed, further read(), ready(),
             * mark(), reset(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            abstract close(): void
        }
    }
}
