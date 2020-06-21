declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * A single packet for communication between the web server and the
                 * container.  Designed to be reused many times with no creation of
                 * garbage.  Understands the format of data types for these packets.
                 * Can be used (somewhat confusingly) for both incoming and outgoing
                 * packets.
                 * @author Henri Gomez
                 * @author Dan Milstein
                 * @author Keith Wannamaker
                 * @author Kevin Seguin
                 * @author Costin Manolache
                 */
                // @ts-ignore
                class AjpMessage extends java.lang.Object {
                    // @ts-ignore
                    constructor(packetSize: number /*int*/)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Fixed size buffer.
                     */
                    // @ts-ignore
                    readonly buf: number /*byte*/[]
                    /**
                     * The current read or write position in the buffer.
                     */
                    // @ts-ignore
                    pos: number /*int*/
                    /**
                     * This actually means different things depending on whether the
                     * packet is read or write.  For read, it's the length of the
                     * payload (excluding the header).  For write, it's the length of
                     * the packet as a whole (counting the header).  Oh, well.
                     */
                    // @ts-ignore
                    len: number /*int*/
                    /**
                     * Prepare this packet for accumulating a message from the container to
                     * the web server.  Set the write position to just after the header
                     * (but leave the length unwritten, because it is as yet unknown).
                     */
                    // @ts-ignore
                    public reset(): void
                    /**
                     * For a packet to be sent to the web server, finish the process of
                     * accumulating data and write the length of the data payload into
                     * the header.
                     */
                    // @ts-ignore
                    public end(): void
                    /**
                     * Return the underlying byte buffer.
                     * @return The buffer
                     */
                    // @ts-ignore
                    public getBuffer(): number /*byte*/[]
                    /**
                     * Return the current message length.
                     * @return For read, it's the length of the payload (excluding the header).
                     *  For write, it's the length of the packet as a whole (counting the
                     *  header).
                     */
                    // @ts-ignore
                    public getLen(): number /*int*/
                    /**
                     * Add a short integer (2 bytes) to the message.
                     * @param val The integer to append
                     */
                    // @ts-ignore
                    public appendInt(val: number /*int*/): void
                    /**
                     * Append a byte (1 byte) to the message.
                     * @param val The byte value to append
                     */
                    // @ts-ignore
                    public appendByte(val: number /*int*/): void
                    /**
                     * Write a MessageBytes out at the current write position. A null
                     * MessageBytes is encoded as a string with length 0.
                     * @param mb The data to write
                     */
                    // @ts-ignore
                    public appendBytes(mb: org.apache.tomcat.util.buf.MessageBytes): void
                    /**
                     * Write a ByteChunk out at the current write position. A null ByteChunk is
                     * encoded as a string with length 0.
                     * @param bc The data to write
                     */
                    // @ts-ignore
                    public appendByteChunk(bc: org.apache.tomcat.util.buf.ByteChunk): void
                    /**
                     * Copy a chunk of bytes into the packet, starting at the current
                     * write position.  The chunk of bytes is encoded with the length
                     * in two bytes first, then the data itself, and finally a
                     * terminating \0 (which is <B>not</B> included in the encoded
                     * length).
                     * @param b The array from which to copy bytes.
                     * @param off The offset into the array at which to start copying
                     * @param numBytes The number of bytes to copy.
                     */
                    // @ts-ignore
                    public appendBytes(b: number /*byte*/[], off: number /*int*/, numBytes: number /*int*/): void
                    /**
                     * Copy a chunk of bytes into the packet, starting at the current
                     * write position.  The chunk of bytes is encoded with the length
                     * in two bytes first, then the data itself, and finally a
                     * terminating \0 (which is <B>not</B> included in the encoded
                     * length).
                     * @param b The ByteBuffer from which to copy bytes.
                     */
                    // @ts-ignore
                    public appendBytes(b: java.nio.ByteBuffer): void
                    /**
                     * Read an integer from packet, and advance the read position past
                     * it.  Integers are encoded as two unsigned bytes with the
                     * high-order byte first, and, as far as I can tell, in
                     * little-endian order within each byte.
                     * @return The integer value read from the message
                     */
                    // @ts-ignore
                    public getInt(): number /*int*/
                    // @ts-ignore
                    public peekInt(): number /*int*/
                    // @ts-ignore
                    public getByte(): number /*byte*/
                    // @ts-ignore
                    public getBytes(mb: org.apache.tomcat.util.buf.MessageBytes): void
                    // @ts-ignore
                    public getBodyBytes(mb: org.apache.tomcat.util.buf.MessageBytes): void
                    /**
                     * Read a 32 bits integer from packet, and advance the read position past
                     * it.  Integers are encoded as four unsigned bytes with the
                     * high-order byte first, and, as far as I can tell, in
                     * little-endian order within each byte.
                     * @return The long value read from the message
                     */
                    // @ts-ignore
                    public getLongInt(): number /*int*/
                    // @ts-ignore
                    public processHeader(toContainer: boolean): number /*int*/
                    // @ts-ignore
                    static hexLine(buf: number /*byte*/[], start: number /*int*/, len: number /*int*/): string
                    // @ts-ignore
                    static hex(x: number /*int*/): string
                }
            }
        }
    }
}
