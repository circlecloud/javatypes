declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageInputStream</code> that gets its
             * input from a regular <code>InputStream</code>.  A memory buffer is
             * used to cache at least the data between the discard position and
             * the current read position.
             * <p> In general, it is preferable to use a
             * <code>FileCacheImageInputStream</code> when reading from a regular
             * <code>InputStream</code>.  This class is provided for cases where
             * it is not possible to create a writable temporary file.
             */
            // @ts-ignore
            class MemoryCacheImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
                /**
                 * Constructs a <code>MemoryCacheImageInputStream</code> that will read
                 * from a given <code>InputStream</code>.
                 * @param stream an <code>InputStream</code> to read from.
                 * @exception IllegalArgumentException if <code>stream</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                constructor(stream: java.io.InputStream)
                // @ts-ignore
                public read(): number /*int*/
                // @ts-ignore
                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                // @ts-ignore
                public flushBefore(pos: number /*long*/): void
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
                 * Returns <code>false</code> since this
                 * <code>ImageInputStream</code> does not maintain a file cache.
                 * @return <code>false</code>.
                 * @see #isCached
                 * @see #isCachedMemory
                 */
                // @ts-ignore
                public isCachedFile(): boolean
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageInputStream</code> maintains a main memory cache.
                 * @return <code>true</code>.
                 * @see #isCached
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCachedMemory(): boolean
                /**
                 * Closes this <code>MemoryCacheImageInputStream</code>, freeing
                 * the cache.  The source <code>InputStream</code> is not closed.
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
