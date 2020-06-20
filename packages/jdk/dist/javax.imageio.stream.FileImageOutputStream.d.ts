declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageOutputStream</code> that writes its
             * output directly to a <code>File</code> or
             * <code>RandomAccessFile</code>.
             */
            // @ts-ignore
            class FileImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
                /**
                 * Constructs a <code>FileImageOutputStream</code> that will write
                 * to a given <code>File</code>.
                 * @param f a <code>File</code> to write to.
                 * @exception IllegalArgumentException if <code>f</code> is
                 *  <code>null</code>.
                 * @exception SecurityException if a security manager exists
                 *  and does not allow write access to the file.
                 * @exception FileNotFoundException if <code>f</code> does not denote
                 *  a regular file or it cannot be opened for reading and writing for any
                 *  other reason.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                constructor(f: java.io.File)
                /**
                 * Constructs a <code>FileImageOutputStream</code> that will write
                 * to a given <code>RandomAccessFile</code>.
                 * @param raf a <code>RandomAccessFile</code> to write to.
                 * @exception IllegalArgumentException if <code>raf</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                constructor(raf: java.io.RandomAccessFile)
                // @ts-ignore
                read(): int
                // @ts-ignore
                read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
                // @ts-ignore
                write(b: number /*int*/): void
                // @ts-ignore
                write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                length(): long
                /**
                 * Sets the current stream position and resets the bit offset to
                 * 0.  It is legal to seeking past the end of the file; an
                 * <code>EOFException</code> will be thrown only if a read is
                 * performed.  The file length will not be increased until a write
                 * is performed.
                 * @exception IndexOutOfBoundsException if <code>pos</code> is smaller
                 *  than the flushed position.
                 * @exception IOException if any other I/O error occurs.
                 */
                // @ts-ignore
                seek(pos: number /*long*/): void
                // @ts-ignore
                close(): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
