declare namespace java {
    namespace util {
        namespace zip {
            /**
             * An output stream that also maintains a checksum of the data being
             * written. The checksum can then be used to verify the integrity of
             * the output data.
             * @see Checksum
             * @author David Connelly
             */
            // @ts-ignore
            class CheckedOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates an output stream with the specified Checksum.
                 * @param out the output stream
                 * @param cksum the checksum
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, cksum: java.util.zip.Checksum)
                /**
                 * Writes a byte. Will block until the byte is actually written.
                 * @param b the byte to be written
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                write(b: number /*int*/): void
                /**
                 * Writes an array of bytes. Will block until the bytes are
                 * actually written.
                 * @param b the data to be written
                 * @param off the start offset of the data
                 * @param len the number of bytes to be written
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Returns the Checksum for this output stream.
                 * @return the Checksum
                 */
                // @ts-ignore
                getChecksum(): java.util.zip.Checksum
            }
        }
    }
}
