declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Utilities to manipulate char chunks. While String is the easiest way to
                     * manipulate chars ( search, substrings, etc), it is known to not be the most
                     * efficient solution - Strings are designed as immutable and secure objects.
                     * @author dac#sun.com
                     * @author James Todd [gonzo#sun.com]
                     * @author Costin Manolache
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class CharChunk extends org.apache.tomcat.util.buf.AbstractChunk implements java.lang.CharSequence {
                        /**
                         * Creates a new, uninitialized CharChunk object.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(initial: number /*int*/)
                        // @ts-ignore
                        public clone(): any
                        // @ts-ignore
                        public allocate(initial: number /*int*/, limit: number /*int*/): void
                        /**
                         * Sets the buffer to the specified subarray of characters.
                         * @param c the characters
                         * @param off the start offset of the characters
                         * @param len the length of the characters
                         */
                        // @ts-ignore
                        public setChars(c: string[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * @return the buffer.
                         */
                        // @ts-ignore
                        public getChars(): string[]
                        /**
                         * @return the buffer.
                         */
                        // @ts-ignore
                        public getBuffer(): string[]
                        /**
                         * When the buffer is empty, read the data from the input channel.
                         * @param in The input channel
                         */
                        // @ts-ignore
                        public setCharInputChannel(input: org.apache.tomcat.util.buf.CharChunk.CharInputChannel): void
                        /**
                         * When the buffer is full, write the data to the output channel. Also used
                         * when large amount of data is appended. If not set, the buffer will grow
                         * to the limit.
                         * @param out The output channel
                         */
                        // @ts-ignore
                        public setCharOutputChannel(out: org.apache.tomcat.util.buf.CharChunk.CharOutputChannel): void
                        // @ts-ignore
                        public append(b: string): void
                        // @ts-ignore
                        public append(src: org.apache.tomcat.util.buf.CharChunk): void
                        /**
                         * Add data to the buffer.
                         * @param src Char array
                         * @param off Offset
                         * @param len Length
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public append(src: string[], off: number /*int*/, len: number /*int*/): void
                        /**
                         * Append a string to the buffer.
                         * @param s The string
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public append(s: java.lang.String | string): void
                        /**
                         * Append a string to the buffer.
                         * @param s The string
                         * @param off Offset
                         * @param len Length
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public append(s: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
                        // @ts-ignore
                        public substract(): number /*int*/
                        // @ts-ignore
                        public subtract(): number /*int*/
                        // @ts-ignore
                        public substract(dest: string[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public subtract(dest: string[], off: number /*int*/, len: number /*int*/): number /*int*/
                        /**
                         * Send the buffer to the sink. Called by append() when the limit is
                         * reached. You can also call it explicitly to force the data to be written.
                         * @throws IOException Writing overflow data to the output channel failed
                         */
                        // @ts-ignore
                        public flushBuffer(): void
                        /**
                         * Make space for len chars. If len is small, allocate a reserve space too.
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
                        public equals(cc: org.apache.tomcat.util.buf.CharChunk): boolean
                        // @ts-ignore
                        public equals(b2: string[], off2: number /*int*/, len2: number /*int*/): boolean
                        /**
                         * @return <code>true</code> if the message bytes starts with the specified
                         *          string.
                         * @param s The string
                         */
                        // @ts-ignore
                        public startsWith(s: java.lang.String | string): boolean
                        /**
                         * Returns true if the buffer starts with the specified string.
                         * @param s the string
                         * @param pos The position
                         * @return <code>true</code> if the start matches
                         */
                        // @ts-ignore
                        public startsWithIgnoreCase(s: java.lang.String | string, pos: number /*int*/): boolean
                        /**
                         * @return <code>true</code> if the message bytes end with the specified
                         *          string.
                         * @param s The string
                         */
                        // @ts-ignore
                        public endsWith(s: java.lang.String | string): boolean
                        // @ts-ignore
                        getBufferElement(index: number /*int*/): number /*int*/
                        // @ts-ignore
                        public indexOf(c: string): number /*int*/
                        /**
                         * Returns the first instance of the given character in this CharChunk
                         * starting at the specified char. If the character is not found, -1 is
                         * returned. <br>
                         * @param c The character
                         * @param starting The start position
                         * @return The position of the first instance of the character or -1 if the
                         *          character is not found.
                         */
                        // @ts-ignore
                        public indexOf(c: string, starting: number /*int*/): number /*int*/
                        /**
                         * Returns the first instance of the given character in the given char array
                         * between the specified start and end. <br>
                         * @param chars The array to search
                         * @param start The point to start searching from in the array
                         * @param end The point to stop searching in the array
                         * @param s The character to search for
                         * @return The position of the first instance of the character or -1 if the
                         *          character is not found.
                         */
                        // @ts-ignore
                        public static indexOf(chars: string[], start: number /*int*/, end: number /*int*/, s: string): number /*int*/
                        // @ts-ignore
                        public charAt(index: number /*int*/): string
                        // @ts-ignore
                        public subSequence(start: number /*int*/, end: number /*int*/): java.lang.CharSequence
                        // @ts-ignore
                        public length(): number /*int*/
                        /**
                         * NO-OP.
                         * @param optimizedWrite Ignored
                         * @deprecated Unused code. This is now a NO-OP and will be removed without
                         *              replacement in Tomcat 10.
                         */
                        // @ts-ignore
                        public setOptimizedWrite(optimizedWrite: boolean): void
                    }
                }
            }
        }
    }
}
