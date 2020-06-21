declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageOutputStream</code> that writes its
             * output to a regular <code>OutputStream</code>.  A file is used to
             * cache data until it is flushed to the output stream.
             */
            // @ts-ignore
            class FileCacheImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
                /**
                 * Constructs a <code>FileCacheImageOutputStream</code> that will write
                 * to a given <code>outputStream</code>.
                 * <p> A temporary file is used as a cache.  If
                 * <code>cacheDir</code>is non-<code>null</code> and is a
                 * directory, the file will be created there.  If it is
                 * <code>null</code>, the system-dependent default temporary-file
                 * directory will be used (see the documentation for
                 * <code>File.createTempFile</code> for details).
                 * @param stream an <code>OutputStream</code> to write to.
                 * @param cacheDir a <code>File</code> indicating where the
                 *  cache file should be created, or <code>null</code> to use the
                 *  system directory.
                 * @exception IllegalArgumentException if <code>stream</code>
                 *  is <code>null</code>.
                 * @exception IllegalArgumentException if <code>cacheDir</code> is
                 *  non-<code>null</code> but is not a directory.
                 * @exception IOException if a cache file cannot be created.
                 */
                // @ts-ignore
                constructor(stream: java.io.OutputStream, cacheDir: java.io.File)
                // @ts-ignore
                public read(): number /*int*/
                // @ts-ignore
                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                // @ts-ignore
                public write(b: number /*int*/): void
                // @ts-ignore
                public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public length(): number /*long*/
                /**
                 * Sets the current stream position and resets the bit offset to
                 * 0.  It is legal to seek past the end of the file; an
                 * <code>EOFException</code> will be thrown only if a read is
                 * performed.  The file length will not be increased until a write
                 * is performed.
                 * @exception IndexOutOfBoundsException if <code>pos</code> is smaller
                 *  than the flushed position.
                 * @exception IOException if any other I/O error occurs.
                 */
                // @ts-ignore
                public seek(pos: number /*long*/): void
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageOutputStream</code> caches data in order to allow
                 * seeking backwards.
                 * @return <code>true</code>.
                 * @see #isCachedMemory
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCached(): boolean
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageOutputStream</code> maintains a file cache.
                 * @return <code>true</code>.
                 * @see #isCached
                 * @see #isCachedMemory
                 */
                // @ts-ignore
                public isCachedFile(): boolean
                /**
                 * Returns <code>false</code> since this
                 * <code>ImageOutputStream</code> does not maintain a main memory
                 * cache.
                 * @return <code>false</code>.
                 * @see #isCached
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCachedMemory(): boolean
                /**
                 * Closes this <code>FileCacheImageOutputStream</code>.  All
                 * pending data is flushed to the output, and the cache file
                 * is closed and removed.  The destination <code>OutputStream</code>
                 * is not closed.
                 * @exception IOException if an error occurs.
                 */
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public flushBefore(pos: number /*long*/): void
            }
        }
    }
}
