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
                 * Returns <code>true</code> since this
                 * <code>ImageOutputStream</code> caches data in order to allow
                 * seeking backwards.
                 * @return <code>true</code>.
                 * @see #isCachedMemory
                 * @see #isCachedFile
                 */
                // @ts-ignore
                isCached(): boolean
                /**
                 * Returns <code>false</code> since this
                 * <code>ImageOutputStream</code> does not maintain a file cache.
                 * @return <code>false</code>.
                 * @see #isCached
                 * @see #isCachedMemory
                 */
                // @ts-ignore
                isCachedFile(): boolean
                /**
                 * Returns <code>true</code> since this
                 * <code>ImageOutputStream</code> maintains a main memory cache.
                 * @return <code>true</code>.
                 * @see #isCached
                 * @see #isCachedFile
                 */
                // @ts-ignore
                isCachedMemory(): boolean
                /**
                 * Closes this <code>MemoryCacheImageOutputStream</code>.  All
                 * pending data is flushed to the output, and the cache
                 * is released.  The destination <code>OutputStream</code>
                 * is not closed.
                 */
                // @ts-ignore
                close(): void
                // @ts-ignore
                flushBefore(pos: number /*long*/): void
            }
        }
    }
}
