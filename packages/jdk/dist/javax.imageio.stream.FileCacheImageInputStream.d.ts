declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageInputStream</code> that gets its
             * input from a regular <code>InputStream</code>.  A file is used to
             * cache previously read data.
             */
            // @ts-ignore
            class FileCacheImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
                /**
                 * Constructs a <code>FileCacheImageInputStream</code> that will read
                 * from a given <code>InputStream</code>.
                 * <p> A temporary file is used as a cache.  If
                 * <code>cacheDir</code>is non-<code>null</code> and is a
                 * directory, the file will be created there.  If it is
                 * <code>null</code>, the system-dependent default temporary-file
                 * directory will be used (see the documentation for
                 * <code>File.createTempFile</code> for details).
                 * @param stream an <code>InputStream</code> to read from.
                 * @param cacheDir a <code>File</code> indicating where the
                 *  cache file should be created, or <code>null</code> to use the
                 *  system directory.
                 * @exception IllegalArgumentException if <code>stream</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>cacheDir</code> is
                 *  non-<code>null</code> but is not a directory.
                 * @exception IOException if a cache file cannot be created.
                 */
                // @ts-ignore
                constructor(stream: java.io.InputStream, cacheDir: java.io.File)
                // @ts-ignore
                public read(): number /*int*/
                // @ts-ignore
                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageInputStream</code> caches data in order to allow
                 * seeking backwards.
                 * @return <code>true</code>.
                 * @see #isCachedMemory
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCached(): boolean
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageInputStream</code> maintains a file cache.
                 * @return <code>true</code>.
                 * @see #isCached
                 * @see #isCachedMemory
                 */
                // @ts-ignore
                public isCachedFile(): boolean
                /**
                 * Returns <code>false</code> since this
                 * <code>ImageInputStream</code> does not maintain a main memory
                 * cache.
                 * @return <code>false</code>.
                 * @see #isCached
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCachedMemory(): boolean
                /**
                 * Closes this <code>FileCacheImageInputStream</code>, closing
                 * and removing the cache file.  The source <code>InputStream</code>
                 * is not closed.
                 * @exception IOException if an error occurs.
                 */
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
