declare namespace java {
    namespace security {
        /**
         * A transparent stream that updates the associated message digest using
         * the bits going through the stream.
         * <p>To complete the message digest computation, call one of the
         * {@code digest} methods on the associated message
         * digest after your calls to one of this digest input stream's
         * {@link #read() read} methods.
         * <p>It is possible to turn this stream on or off (see
         * {@link #on(boolean) on}). When it is on, a call to one of the
         * {@code read} methods
         * results in an update on the message digest.  But when it is off,
         * the message digest is not updated. The default is for the stream
         * to be on.
         * <p>Note that digest objects can compute only one digest (see
         * {@link MessageDigest}),
         * so that in order to compute intermediate digests, a caller should
         * retain a handle onto the digest object, and clone it for each
         * digest to be computed, leaving the orginal digest untouched.
         * @see MessageDigest
         * @see DigestOutputStream
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class DigestInputStream extends java.io.FilterInputStream {
            /**
             * Creates a digest input stream, using the specified input stream
             * and message digest.
             * @param stream the input stream.
             * @param digest the message digest to associate with this stream.
             */
            // @ts-ignore
            constructor(stream: java.io.InputStream, digest: java.security.MessageDigest)
            /**
             * The message digest associated with this stream.
             */
            // @ts-ignore
            digest: java.security.MessageDigest
            /**
             * Returns the message digest associated with this stream.
             * @return the message digest associated with this stream.
             * @see #setMessageDigest(java.security.MessageDigest)
             */
            // @ts-ignore
            getMessageDigest(): java.security.MessageDigest
            /**
             * Associates the specified message digest with this stream.
             * @param digest the message digest to be associated with this stream.
             * @see #getMessageDigest()
             */
            // @ts-ignore
            setMessageDigest(digest: java.security.MessageDigest): void
            /**
             * Reads a byte, and updates the message digest (if the digest
             * function is on).  That is, this method reads a byte from the
             * input stream, blocking until the byte is actually read. If the
             * digest function is on (see {@link #on(boolean) on}), this method
             * will then call {@code update} on the message digest associated
             * with this stream, passing it the byte read.
             * @return the byte read.
             * @exception IOException if an I/O error occurs.
             * @see MessageDigest#update(byte)
             */
            // @ts-ignore
            read(): int
            /**
             * Reads into a byte array, and updates the message digest (if the
             * digest function is on).  That is, this method reads up to
             * {@code len} bytes from the input stream into the array
             * {@code b}, starting at offset {@code off}. This method
             * blocks until the data is actually
             * read. If the digest function is on (see
             * {@link #on(boolean) on}), this method will then call {@code update}
             * on the message digest associated with this stream, passing it
             * the data.
             * @param b the array into which the data is read.
             * @param off the starting offset into {#code b} of where the
             *  data should be placed.
             * @param len the maximum number of bytes to be read from the input
             *  stream into b, starting at offset {#code off}.
             * @return the actual number of bytes read. This is less than
             *  {#code len} if the end of the stream is reached prior to
             *  reading {@code len} bytes. -1 is returned if no bytes were
             *  read because the end of the stream had already been reached when
             *  the call was made.
             * @exception IOException if an I/O error occurs.
             * @see MessageDigest#update(byte[], int, int)
             */
            // @ts-ignore
            read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
            /**
             * Turns the digest function on or off. The default is on.  When
             * it is on, a call to one of the {@code read} methods results in an
             * update on the message digest.  But when it is off, the message
             * digest is not updated.
             * @param on true to turn the digest function on, false to turn
             *  it off.
             */
            // @ts-ignore
            on(on: boolean): void
            /**
             * Prints a string representation of this digest input stream and
             * its associated message digest object.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
