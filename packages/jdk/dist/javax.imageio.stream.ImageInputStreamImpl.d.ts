declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An abstract class implementing the <code>ImageInputStream</code> interface.
             * This class is designed to reduce the number of methods that must
             * be implemented by subclasses.
             * <p> In particular, this class handles most or all of the details of
             * byte order interpretation, buffering, mark/reset, discarding,
             * closing, and disposing.
             */
            // @ts-ignore
            class ImageInputStreamImpl extends java.lang.Object implements javax.imageio.stream.ImageInputStream {
                /**
                 * Constructs an <code>ImageInputStreamImpl</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The byte order of the stream as an instance of the enumeration
                 * class <code>java.nio.ByteOrder</code>, where
                 * <code>ByteOrder.BIG_ENDIAN</code> indicates network byte order
                 * and <code>ByteOrder.LITTLE_ENDIAN</code> indicates the reverse
                 * order.  By default, the value is
                 * <code>ByteOrder.BIG_ENDIAN</code>.
                 */
                // @ts-ignore
                byteOrder: java.nio.ByteOrder
                /**
                 * The current read position within the stream.  Subclasses are
                 * responsible for keeping this value current from any method they
                 * override that alters the read position.
                 */
                // @ts-ignore
                streamPos: number /*long*/
                /**
                 * The current bit offset within the stream.  Subclasses are
                 * responsible for keeping this value current from any method they
                 * override that alters the bit offset.
                 */
                // @ts-ignore
                bitOffset: number /*int*/
                /**
                 * The position prior to which data may be discarded.  Seeking
                 * to a smaller position is not allowed.  <code>flushedPos</code>
                 * will always be {@literal >= 0}.
                 */
                // @ts-ignore
                flushedPos: number /*long*/
                /**
                 * Throws an <code>IOException</code> if the stream has been closed.
                 * Subclasses may call this method from any of their methods that
                 * require the stream not to be closed.
                 * @exception IOException if the stream is closed.
                 */
                // @ts-ignore
                checkClosed(): void
                // @ts-ignore
                setByteOrder(byteOrder: java.nio.ByteOrder): void
                // @ts-ignore
                getByteOrder(): java.nio.ByteOrder
                /**
                 * Reads a single byte from the stream and returns it as an
                 * <code>int</code> between 0 and 255.  If EOF is reached,
                 * <code>-1</code> is returned.
                 * <p> Subclasses must provide an implementation for this method.
                 * The subclass implementation should update the stream position
                 * before exiting.
                 * <p> The bit offset within the stream must be reset to zero before
                 * the read occurs.
                 * @return the value of the next byte in the stream, or <code>-1</code>
                 *  if EOF is reached.
                 * @exception IOException if the stream has been closed.
                 */
                // @ts-ignore
                abstract read(): int
                /**
                 * A convenience method that calls <code>read(b, 0, b.length)</code>.
                 * <p> The bit offset within the stream is reset to zero before
                 * the read occurs.
                 * @return the number of bytes actually read, or <code>-1</code>
                 *  to indicate EOF.
                 * @exception NullPointerException if <code>b</code> is
                 *  <code>null</code>.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                read(b: number /*byte*/[]): int
                /**
                 * Reads up to <code>len</code> bytes from the stream, and stores
                 * them into <code>b</code> starting at index <code>off</code>.
                 * If no bytes can be read because the end of the stream has been
                 * reached, <code>-1</code> is returned.
                 * <p> The bit offset within the stream must be reset to zero before
                 * the read occurs.
                 * <p> Subclasses must provide an implementation for this method.
                 * The subclass implementation should update the stream position
                 * before exiting.
                 * @param b an array of bytes to be written to.
                 * @param off the starting position within <code>b</code> to write to.
                 * @param len the maximum number of bytes to read.
                 * @return the number of bytes actually read, or <code>-1</code>
                 *  to indicate EOF.
                 * @exception IndexOutOfBoundsException if <code>off</code> is
                 *  negative, <code>len</code> is negative, or <code>off +
                 *  len</code> is greater than <code>b.length</code>.
                 * @exception NullPointerException if <code>b</code> is
                 *  <code>null</code>.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                abstract read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
                // @ts-ignore
                readBytes(buf: javax.imageio.stream.IIOByteBuffer, len: number /*int*/): void
                // @ts-ignore
                readBoolean(): boolean
                // @ts-ignore
                readByte(): byte
                // @ts-ignore
                readUnsignedByte(): int
                // @ts-ignore
                readShort(): short
                // @ts-ignore
                readUnsignedShort(): int
                // @ts-ignore
                readChar(): char
                // @ts-ignore
                readInt(): int
                // @ts-ignore
                readUnsignedInt(): long
                // @ts-ignore
                readLong(): long
                // @ts-ignore
                readFloat(): float
                // @ts-ignore
                readDouble(): double
                // @ts-ignore
                readLine(): java.lang.String
                // @ts-ignore
                readUTF(): java.lang.String
                // @ts-ignore
                readFully(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(b: number /*byte*/[]): void
                // @ts-ignore
                readFully(s: number /*short*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(c: string[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(i: number /*int*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(l: number /*long*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(f: number /*float*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                readFully(d: number /*double*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                getStreamPosition(): long
                // @ts-ignore
                getBitOffset(): int
                // @ts-ignore
                setBitOffset(bitOffset: number /*int*/): void
                // @ts-ignore
                readBit(): int
                // @ts-ignore
                readBits(numBits: number /*int*/): long
                /**
                 * Returns <code>-1L</code> to indicate that the stream has unknown
                 * length.  Subclasses must override this method to provide actual
                 * length information.
                 * @return -1L to indicate unknown length.
                 */
                // @ts-ignore
                length(): long
                /**
                 * Advances the current stream position by calling
                 * <code>seek(getStreamPosition() + n)</code>.
                 * <p> The bit offset is reset to zero.
                 * @param n the number of bytes to seek forward.
                 * @return an <code>int</code> representing the number of bytes
                 *  skipped.
                 * @exception IOException if <code>getStreamPosition</code>
                 *  throws an <code>IOException</code> when computing either
                 *  the starting or ending position.
                 */
                // @ts-ignore
                skipBytes(n: number /*int*/): int
                /**
                 * Advances the current stream position by calling
                 * <code>seek(getStreamPosition() + n)</code>.
                 * <p> The bit offset is reset to zero.
                 * @param n the number of bytes to seek forward.
                 * @return a <code>long</code> representing the number of bytes
                 *  skipped.
                 * @exception IOException if <code>getStreamPosition</code>
                 *  throws an <code>IOException</code> when computing either
                 *  the starting or ending position.
                 */
                // @ts-ignore
                skipBytes(n: number /*long*/): long
                // @ts-ignore
                seek(pos: number /*long*/): void
                /**
                 * Pushes the current stream position onto a stack of marked
                 * positions.
                 */
                // @ts-ignore
                mark(): void
                /**
                 * Resets the current stream byte and bit positions from the stack
                 * of marked positions.
                 * <p> An <code>IOException</code> will be thrown if the previous
                 * marked position lies in the discarded portion of the stream.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                reset(): void
                // @ts-ignore
                flushBefore(pos: number /*long*/): void
                // @ts-ignore
                flush(): void
                // @ts-ignore
                getFlushedPosition(): long
                /**
                 * Default implementation returns false.  Subclasses should
                 * override this if they cache data.
                 */
                // @ts-ignore
                isCached(): boolean
                /**
                 * Default implementation returns false.  Subclasses should
                 * override this if they cache data in main memory.
                 */
                // @ts-ignore
                isCachedMemory(): boolean
                /**
                 * Default implementation returns false.  Subclasses should
                 * override this if they cache data in a temporary file.
                 */
                // @ts-ignore
                isCachedFile(): boolean
                // @ts-ignore
                close(): void
                /**
                 * Finalizes this object prior to garbage collection.  The
                 * <code>close</code> method is called to close any open input
                 * source.  This method should not be called from application
                 * code.
                 * @exception Throwable if an error occurs during superclass
                 *  finalization.
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
