declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * This class is used to represent a chunk of bytes, and utilities to manipulate
                     * byte[].
                     * The buffer can be modified and used for both input and output.
                     * There are 2 modes: The chunk can be associated with a sink - ByteInputChannel
                     * or ByteOutputChannel, which will be used when the buffer is empty (on input)
                     * or filled (on output). For output, it can also grow. This operating mode is
                     * selected by calling setLimit() or allocate(initial, limit) with limit != -1.
                     * Various search and append method are defined - similar with String and
                     * StringBuffer, but operating on bytes.
                     * This is important because it allows processing the http headers directly on
                     * the received bytes, without converting to chars and Strings until the strings
                     * are needed. In addition, the charset is determined later, from headers or
                     * user code.
                     * @author dac#sun.com
                     * @author James Todd [gonzo#sun.com]
                     * @author Costin Manolache
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class ByteChunk extends org.apache.tomcat.util.buf.AbstractChunk {
                        /**
                         * Creates a new, uninitialized ByteChunk object.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(initial: number /*int*/)
                        /**
                         * Default encoding used to convert to strings. It should be UTF8, as most
                         * standards seem to converge, but the servlet API requires 8859_1, and this
                         * object is used mostly for servlets.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        // @ts-ignore
                        public clone(): any
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public allocate(initial: number /*int*/, limit: number /*int*/): void
                        /**
                         * Sets the buffer to the specified subarray of bytes.
                         * @param b the ascii bytes
                         * @param off the start offset of the bytes
                         * @param len the length of the bytes
                         */
                        // @ts-ignore
                        public setBytes(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        // @ts-ignore
                        public setCharset(charset: java.nio.charset.Charset): void
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                        /**
                         * @return the buffer.
                         */
                        // @ts-ignore
                        public getBytes(): number /*byte*/[]
                        /**
                         * @return the buffer.
                         */
                        // @ts-ignore
                        public getBuffer(): number /*byte*/[]
                        /**
                         * When the buffer is empty, read the data from the input channel.
                         * @param in The input channel
                         */
                        // @ts-ignore
                        public setByteInputChannel(input: org.apache.tomcat.util.buf.ByteChunk.ByteInputChannel): void
                        /**
                         * When the buffer is full, write the data to the output channel. Also used
                         * when large amount of data is appended. If not set, the buffer will grow
                         * to the limit.
                         * @param out The output channel
                         */
                        // @ts-ignore
                        public setByteOutputChannel(out: org.apache.tomcat.util.buf.ByteChunk.ByteOutputChannel): void
                        // @ts-ignore
                        public append(b: number /*byte*/): void
                        // @ts-ignore
                        public append(src: org.apache.tomcat.util.buf.ByteChunk): void
                        /**
                         * Add data to the buffer.
                         * @param src Bytes array
                         * @param off Offset
                         * @param len Length
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public append(src: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Add data to the buffer.
                         * @param from the ByteBuffer with the data
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public append(from: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public substract(): number /*int*/
                        // @ts-ignore
                        public subtract(): number /*int*/
                        // @ts-ignore
                        public substractB(): number /*byte*/
                        // @ts-ignore
                        public subtractB(): number /*byte*/
                        // @ts-ignore
                        public substract(dest: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public subtract(dest: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        /**
                         * Transfers bytes from the buffer to the specified ByteBuffer. After the
                         * operation the position of the ByteBuffer will be returned to the one
                         * before the operation, the limit will be the position incremented by the
                         * number of the transfered bytes.
                         * @param to the ByteBuffer into which bytes are to be written.
                         * @return an integer specifying the actual number of bytes read, or -1 if
                         *          the end of the stream is reached
                         * @throws IOException if an input or output exception has occurred
                         * @deprecated Use {#link #subtract(ByteBuffer)}.
                         *              This method will be removed in Tomcat 10
                         */
                        // @ts-ignore
                        public substract(to: java.nio.ByteBuffer): number /*int*/
                        /**
                         * Transfers bytes from the buffer to the specified ByteBuffer. After the
                         * operation the position of the ByteBuffer will be returned to the one
                         * before the operation, the limit will be the position incremented by the
                         * number of the transfered bytes.
                         * @param to the ByteBuffer into which bytes are to be written.
                         * @return an integer specifying the actual number of bytes read, or -1 if
                         *          the end of the stream is reached
                         * @throws IOException if an input or output exception has occurred
                         */
                        // @ts-ignore
                        public subtract(to: java.nio.ByteBuffer): number /*int*/
                        /**
                         * Send the buffer to the sink. Called by append() when the limit is
                         * reached. You can also call it explicitly to force the data to be written.
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public flushBuffer(): void
                        /**
                         * Make space for len bytes. If len is small, allocate a reserve space too.
                         * Never grow bigger than the limit or {@link AbstractChunk#ARRAY_MAX_SIZE}.
                         * @param count The size
                         */
                        // @ts-ignore
                        public makeSpace(count: number /*int*/): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public toStringInternal(): string
                        // @ts-ignore
                        public getLong(): number /*long*/
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        /**
                         * Compares the message bytes to the specified String object.
                         * @param s the String to compare
                         * @return <code>true</code> if the comparison succeeded, <code>false</code>
                         *          otherwise
                         */
                        // @ts-ignore
                        public equals(s: java.lang.String | string): boolean
                        /**
                         * Compares the message bytes to the specified String object.
                         * @param s the String to compare
                         * @return <code>true</code> if the comparison succeeded, <code>false</code>
                         *          otherwise
                         */
                        // @ts-ignore
                        public equalsIgnoreCase(s: java.lang.String | string): boolean
                        // @ts-ignore
                        public equals(bb: org.apache.tomcat.util.buf.ByteChunk): boolean
                        // @ts-ignore
                        public equals(b2: number /*byte*/[], off2: number /*int*/, len2: number /*int*/): boolean
                        // @ts-ignore
                        public equals(cc: org.apache.tomcat.util.buf.CharChunk): boolean
                        // @ts-ignore
                        public equals(c2: string[], off2: number /*int*/, len2: number /*int*/): boolean
                        /**
                         * Returns true if the buffer starts with the specified string when tested
                         * in a case sensitive manner.
                         * @param s the string
                         * @param pos The position
                         * @return <code>true</code> if the start matches
                         */
                        // @ts-ignore
                        public startsWith(s: java.lang.String | string, pos: number /*int*/): boolean
                        /**
                         * Returns true if the buffer starts with the specified string when tested
                         * in a case insensitive manner.
                         * @param s the string
                         * @param pos The position
                         * @return <code>true</code> if the start matches
                         */
                        // @ts-ignore
                        public startsWithIgnoreCase(s: java.lang.String | string, pos: number /*int*/): boolean
                        // @ts-ignore
                        getBufferElement(index: number /*int*/): number /*int*/
                        /**
                         * Returns the first instance of the given character in this ByteChunk
                         * starting at the specified byte. If the character is not found, -1 is
                         * returned. <br>
                         * NOTE: This only works for characters in the range 0-127.
                         * @param c The character
                         * @param starting The start position
                         * @return The position of the first instance of the character or -1 if the
                         *          character is not found.
                         */
                        // @ts-ignore
                        public indexOf(c: string, starting: number /*int*/): number /*int*/
                        /**
                         * Returns the first instance of the given character in the given byte array
                         * between the specified start and end. <br>
                         * NOTE: This only works for characters in the range 0-127.
                         * @param bytes The array to search
                         * @param start The point to start searching from in the array
                         * @param end The point to stop searching in the array
                         * @param s The character to search for
                         * @return The position of the first instance of the character or -1 if the
                         *          character is not found.
                         */
                        // @ts-ignore
                        public static indexOf(bytes: number /*byte*/[], start: number /*int*/, end: number /*int*/, s: string): number /*int*/
                        /**
                         * Returns the first instance of the given byte in the byte array between
                         * the specified start and end.
                         * @param bytes The byte array to search
                         * @param start The point to start searching from in the byte array
                         * @param end The point to stop searching in the byte array
                         * @param b The byte to search for
                         * @return The position of the first instance of the byte or -1 if the byte
                         *          is not found.
                         */
                        // @ts-ignore
                        public static findByte(bytes: number /*byte*/[], start: number /*int*/, end: number /*int*/, b: number /*byte*/): number /*int*/
                        /**
                         * Returns the first instance of any of the given bytes in the byte array
                         * between the specified start and end.
                         * @param bytes The byte array to search
                         * @param start The point to start searching from in the byte array
                         * @param end The point to stop searching in the byte array
                         * @param b The array of bytes to search for
                         * @return The position of the first instance of the byte or -1 if the byte
                         *          is not found.
                         */
                        // @ts-ignore
                        public static findBytes(bytes: number /*byte*/[], start: number /*int*/, end: number /*int*/, b: number /*byte*/[]): number /*int*/
                        /**
                         * Convert specified String to a byte array. This ONLY WORKS for ascii, UTF
                         * chars will be truncated.
                         * @param value to convert to byte array
                         * @return the byte array value
                         */
                        // @ts-ignore
                        public static convertToBytes(value: java.lang.String | string): number /*byte*/[]
                    }
                }
            }
        }
    }
}
