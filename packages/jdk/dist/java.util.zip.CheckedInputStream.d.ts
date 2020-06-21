declare namespace java {
    namespace util {
        namespace zip {
            /**
             * An input stream that also maintains a checksum of the data being read.
             * The checksum can then be used to verify the integrity of the input data.
             * @see Checksum
             * @author David Connelly
             */
            // @ts-ignore
            class CheckedInputStream extends java.io.FilterInputStream {
                /**
                 * Creates an input stream using the specified Checksum.
                 * @param in the input stream
                 * @param cksum the Checksum
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, cksum: java.util.zip.Checksum)
                /**
                 * Reads a byte. Will block if no input is available.
                 * @return the byte read, or -1 if the end of the stream is reached.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public read(): number /*int*/
                /**
                 * Reads into an array of bytes. If <code>len</code> is not zero, the method
                 * blocks until some input is available; otherwise, no
                 * bytes are read and <code>0</code> is returned.
                 * @param buf the buffer into which the data is read
                 * @param off the start offset in the destination array <code>b</code>
                 * @param len the maximum number of bytes read
                 * @return the actual number of bytes read, or -1 if the end
                 *             of the stream is reached.
                 * @exception NullPointerException If <code>buf</code> is <code>null</code>.
                 * @exception IndexOutOfBoundsException If <code>off</code> is negative,
                 *  <code>len</code> is negative, or <code>len</code> is greater than
                 *  <code>buf.length - off</code>
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public read(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Skips specified number of bytes of input.
                 * @param n the number of bytes to skip
                 * @return the actual number of bytes skipped
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public skip(n: number /*long*/): number /*long*/
                /**
                 * Returns the Checksum for this input stream.
                 * @return the Checksum value
                 */
                // @ts-ignore
                public getChecksum(): java.util.zip.Checksum
            }
        }
    }
}
