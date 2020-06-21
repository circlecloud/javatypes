declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An implementation of <code>ImageOutputStream</code> that writes its
             * output to a regular <code>OutputStream</code>.  A memory buffer is
             * used to cache at least the data between the discard position and
             * the current write position.  The only constructor takes an
             * <code>OutputStream</code>, so this class may not be used for
             * read/modify/write operations.  Reading can occur only on parts of
             * the stream that have already been written to the cache and not
             * yet flushed.
             */
            // @ts-ignore
            class MemoryCacheImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
                /**
                 * Constructs a <code>MemoryCacheImageOutputStream</code> that will write
                 * to a given <code>OutputStream</code>.
                 * @param stream an <code>OutputStream</code> to write to.
                 * @exception IllegalArgumentException if <code>stream</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                constructor(stream: java.io.OutputStream)
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
                 * Returns <code>false</code> since this
                 * <code>ImageOutputStream</code> does not maintain a file cache.
                 * @return <code>false</code>.
                 * @see #isCached
                 * @see #isCachedMemory
                 */
                // @ts-ignore
                public isCachedFile(): boolean
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageOutputStream</code> maintains a main memory cache.
                 * @return <code>true</code>.
                 * @see #isCached
                 * @see #isCachedFile
                 */
                // @ts-ignore
                public isCachedMemory(): boolean
                /**
                 * Closes this <code>MemoryCacheImageOutputStream</code>.  All
                 * pending data is flushed to the output, and the cache
                 * is released.  The destination <code>OutputStream</code>
                 * is not closed.
                 */
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public flushBefore(pos: number /*long*/): void
            }
        }
    }
}
