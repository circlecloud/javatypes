declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageInputStream</code> that gets its
             * input from a <code>File</code> or <code>RandomAccessFile</code>.
             * The file contents are assumed to be stable during the lifetime of
             * the object.
             */
            // @ts-ignore
            class FileImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
                /**
                 * Constructs a <code>FileImageInputStream</code> that will read
                 * from a given <code>File</code>.
                 * <p> The file contents must not change between the time this
                 * object is constructed and the time of the last call to a read
                 * method.
                 * @param f a <code>File</code> to read from.
                 * @exception IllegalArgumentException if <code>f</code> is
                 *  <code>null</code>.
                 * @exception SecurityException if a security manager exists
                 *  and does not allow read access to the file.
                 * @exception FileNotFoundException if <code>f</code> is a
                 *  directory or cannot be opened for reading for any other reason.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                constructor(f: java.io.File)
                /**
                 * Constructs a <code>FileImageInputStream</code> that will read
                 * from a given <code>RandomAccessFile</code>.
                 * <p> The file contents must not change between the time this
                 * object is constructed and the time of the last call to a read
                 * method.
                 * @param raf a <code>RandomAccessFile</code> to read from.
                 * @exception IllegalArgumentException if <code>raf</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                constructor(raf: java.io.RandomAccessFile)
                // @ts-ignore
                public read(): number /*int*/
                // @ts-ignore
                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Returns the length of the underlying file, or <code>-1</code>
                 * if it is unknown.
                 * @return the file length as a <code>long</code>, or
                 *  <code>-1</code>.
                 */
                // @ts-ignore
                public length(): number /*long*/
                // @ts-ignore
                public seek(pos: number /*long*/): void
                // @ts-ignore
                public close(): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
