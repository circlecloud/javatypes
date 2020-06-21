declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * An abstract class implementing the <code>ImageOutputStream</code> interface.
             * This class is designed to reduce the number of methods that must
             * be implemented by subclasses.
             */
            // @ts-ignore
            abstract class ImageOutputStreamImpl extends javax.imageio.stream.ImageInputStreamImpl implements javax.imageio.stream.ImageOutputStream {
                /**
                 * Constructs an <code>ImageOutputStreamImpl</code>.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public abstract write(b: number /*int*/): void
                // @ts-ignore
                public write(b: number /*byte*/[]): void
                // @ts-ignore
                public abstract write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeBoolean(v: boolean): void
                // @ts-ignore
                public writeByte(v: number /*int*/): void
                // @ts-ignore
                public writeShort(v: number /*int*/): void
                // @ts-ignore
                public writeChar(v: number /*int*/): void
                // @ts-ignore
                public writeInt(v: number /*int*/): void
                // @ts-ignore
                public writeLong(v: number /*long*/): void
                // @ts-ignore
                public writeFloat(v: number /*float*/): void
                // @ts-ignore
                public writeDouble(v: number /*double*/): void
                // @ts-ignore
                public writeBytes(s: java.lang.String | string): void
                // @ts-ignore
                public writeChars(s: java.lang.String | string): void
                // @ts-ignore
                public writeUTF(s: java.lang.String | string): void
                // @ts-ignore
                public writeShorts(s: number /*short*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeChars(c: string[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeInts(i: number /*int*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeLongs(l: number /*long*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeFloats(f: number /*float*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeDoubles(d: number /*double*/[], off: number /*int*/, len: number /*int*/): void
                // @ts-ignore
                public writeBit(bit: number /*int*/): void
                // @ts-ignore
                public writeBits(bits: number /*long*/, numBits: number /*int*/): void
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
