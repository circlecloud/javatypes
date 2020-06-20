declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An abstract class implementing the <code>ImageOutputStream</code> interface.
             * This class is designed to reduce the number of methods that must
             * be implemented by subclasses.
             */
            // @ts-ignore
            class ImageOutputStreamImpl extends javax.imageio.stream.ImageInputStreamImpl implements javax.imageio.stream.ImageOutputStream {
                /**
                 * Constructs an <code>ImageOutputStreamImpl</code>.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                abstract write(b: number /*int*/): void
                // @ts-ignore
                write(b: number /*byte*/[]): void
                // @ts-ignore
                abstract write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeBoolean(v: boolean): void
                // @ts-ignore
                writeByte(v: number /*int*/): void
                // @ts-ignore
                writeShort(v: number /*int*/): void
                // @ts-ignore
                writeChar(v: number /*int*/): void
                // @ts-ignore
                writeInt(v: number /*int*/): void
                // @ts-ignore
                writeLong(v: number /*long*/): void
                // @ts-ignore
                writeFloat(v: number /*float*/): void
                // @ts-ignore
                writeDouble(v: number /*double*/): void
                // @ts-ignore
                writeBytes(s: string): void
                // @ts-ignore
                writeChars(s: string): void
                // @ts-ignore
                writeUTF(s: string): void
                // @ts-ignore
                writeShorts(s: number /*short*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeChars(c: string[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeInts(i: number /*int*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeLongs(l: number /*long*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeFloats(f: number /*float*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeDoubles(d: number /*double*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                writeBit(bit: number /*int*/): void
                // @ts-ignore
                writeBits(bits: number /*long*/, numBits: number /*int*/): void
                /**
                 * If the bit offset is non-zero, forces the remaining bits
                 * in the current byte to 0 and advances the stream position
                 * by one.  This method should be called by subclasses at the
                 * beginning of the <code>write(int)</code> and
                 * <code>write(byte[], int, int)</code> methods.
                 * @exception IOException if an I/O error occurs.
                 */
                // @ts-ignore
                flushBits(): void
            }
        }
    }
}
