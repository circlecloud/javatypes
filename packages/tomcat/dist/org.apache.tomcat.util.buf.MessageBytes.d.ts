declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * This class is used to represent a subarray of bytes in an HTTP message.
                     * It represents all request/response elements. The byte/char conversions are
                     * delayed and cached. Everything is recyclable.
                     * The object can represent a byte[], a char[], or a (sub) String. All
                     * operations can be made in case sensitive mode or not.
                     * @author dac#eng.sun.com
                     * @author James Todd [gonzo#eng.sun.com]
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class MessageBytes extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
                        // @ts-ignore
                        public static readonly T_NULL: number /*int*/
                        /**
                         * getType() is T_STR if the the object used to create the MessageBytes
                         * was a String
                         */
                        // @ts-ignore
                        public static readonly T_STR: number /*int*/
                        /**
                         * getType() is T_BYTES if the the object used to create the MessageBytes
                         * was a byte[]
                         */
                        // @ts-ignore
                        public static readonly T_BYTES: number /*int*/
                        /**
                         * getType() is T_CHARS if the the object used to create the MessageBytes
                         * was a char[]
                         */
                        // @ts-ignore
                        public static readonly T_CHARS: number /*int*/
                        /**
                         * Construct a new MessageBytes instance.
                         * @return the instance
                         */
                        // @ts-ignore
                        public static newInstance(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public clone(): any
                        // @ts-ignore
                        public isNull(): boolean
                        /**
                         * Resets the message bytes to an uninitialized (NULL) state.
                         */
                        // @ts-ignore
                        public recycle(): void
                        /**
                         * Sets the content to the specified subarray of bytes.
                         * @param b the bytes
                         * @param off the start offset of the bytes
                         * @param len the length of the bytes
                         */
                        // @ts-ignore
                        public setBytes(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Sets the content to be a char[]
                         * @param c the chars
                         * @param off the start offset of the chars
                         * @param len the length of the chars
                         */
                        // @ts-ignore
                        public setChars(c: string[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Set the content to be a string
                         * @param s The string
                         */
                        // @ts-ignore
                        public setString(s: java.lang.String | string): void
                        /**
                         * Compute the string value.
                         * @return the string
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Return the type of the original content. Can be
                         * T_STR, T_BYTES, T_CHARS or T_NULL
                         * @return the type
                         */
                        // @ts-ignore
                        public getType(): number /*int*/
                        /**
                         * Returns the byte chunk, representing the byte[] and offset/length.
                         * Valid only if T_BYTES or after a conversion was made.
                         * @return the byte chunk
                         */
                        // @ts-ignore
                        public getByteChunk(): org.apache.tomcat.util.buf.ByteChunk
                        /**
                         * Returns the char chunk, representing the char[] and offset/length.
                         * Valid only if T_CHARS or after a conversion was made.
                         * @return the char chunk
                         */
                        // @ts-ignore
                        public getCharChunk(): org.apache.tomcat.util.buf.CharChunk
                        /**
                         * Returns the string value.
                         * Valid only if T_STR or after a conversion was made.
                         * @return the string
                         */
                        // @ts-ignore
                        public getString(): string
                        /**
                         * @return the Charset used for string&lt;-&gt;byte conversions.
                         */
                        // @ts-ignore
                        public getCharset(): java.nio.charset.Charset
                        /**
                         * Set the Charset used for string&lt;-&gt;byte conversions.
                         * @param charset The charset
                         */
                        // @ts-ignore
                        public setCharset(charset: java.nio.charset.Charset): void
                        /**
                         * Do a char-&gt;byte conversion.
                         */
                        // @ts-ignore
                        public toBytes(): void
                        /**
                         * Convert to char[] and fill the CharChunk.
                         * XXX Not optimized - it converts to String first.
                         */
                        // @ts-ignore
                        public toChars(): void
                        /**
                         * Returns the length of the original buffer.
                         * Note that the length in bytes may be different from the length
                         * in chars.
                         * @return the length
                         */
                        // @ts-ignore
                        public getLength(): number /*int*/
                        /**
                         * Compares the message bytes to the specified String object.
                         * @param s the String to compare
                         * @return <code>true</code> if the comparison succeeded, <code>false</code> otherwise
                         */
                        // @ts-ignore
                        public equals(s: java.lang.String | string): boolean
                        /**
                         * Compares the message bytes to the specified String object.
                         * @param s the String to compare
                         * @return <code>true</code> if the comparison succeeded, <code>false</code> otherwise
                         */
                        // @ts-ignore
                        public equalsIgnoreCase(s: java.lang.String | string): boolean
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public equals(mb: org.apache.tomcat.util.buf.MessageBytes): boolean
                        /**
                         * @return <code>true</code> if the message bytes starts with the specified string.
                         * @param s the string
                         * @param pos The start position
                         */
                        // @ts-ignore
                        public startsWithIgnoreCase(s: java.lang.String | string, pos: number /*int*/): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public indexOf(s: java.lang.String | string, starting: number /*int*/): number /*int*/
                        // @ts-ignore
                        public indexOf(s: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public indexOfIgnoreCase(s: java.lang.String | string, starting: number /*int*/): number /*int*/
                        /**
                         * Copy the src into this MessageBytes, allocating more space if needed.
                         * @param src The source
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public duplicate(src: org.apache.tomcat.util.buf.MessageBytes): void
                        /**
                         * Set the buffer to the representation of an long.
                         * @param l The long
                         */
                        // @ts-ignore
                        public setLong(l: number /*long*/): void
                        /**
                         * Convert the buffer to an long, cache the value.
                         * @return the long value
                         */
                        // @ts-ignore
                        public getLong(): number /*long*/
                    }
                }
            }
        }
    }
}
