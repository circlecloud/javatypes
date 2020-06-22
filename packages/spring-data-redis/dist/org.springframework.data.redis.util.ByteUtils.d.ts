declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace util {
                    /**
                     * Some handy methods for dealing with {@code byte} arrays.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ByteUtils extends java.lang.Object {
                        /**
                         * Concatenate the given {@code byte} arrays into one, with overlapping array elements included twice.
                         * <p />
                         * The order of elements in the original arrays is preserved.
                         * @param array1 the first array.
                         * @param array2 the second array.
                         * @return the new array.
                         */
                        // @ts-ignore
                        public static concat(array1: number /*byte*/[], array2: number /*byte*/[]): number /*byte*/[]
                        /**
                         * Concatenate the given {@code byte} arrays into one, with overlapping array elements included twice. Returns a new,
                         * empty array if {@code arrays} was empty and returns the first array if {@code arrays} contains only a single array.
                         * <p />
                         * The order of elements in the original arrays is preserved.
                         * @param arrays the arrays.
                         * @return the new array.
                         */
                        // @ts-ignore
                        public static concatAll(...arrays: number /*byte*/[][]): number /*byte*/[]
                        /**
                         * Split {@code source} into partitioned arrays using delimiter {@code c}.
                         * @param source the source array.
                         * @param c delimiter.
                         * @return the partitioned arrays.
                         */
                        // @ts-ignore
                        public static split(source: number /*byte*/[], c: number /*int*/): number /*byte*/[][]
                        /**
                         * Merge multiple {@code byte} arrays into one array
                         * @param firstArray must not be {#literal null}
                         * @param additionalArrays must not be {#literal null}
                         * @return 
                         */
                        // @ts-ignore
                        public static mergeArrays(firstArray: number /*byte*/[], ...additionalArrays: number /*byte*/[][]): number /*byte*/[][]
                        /**
                         * Extract a byte array from {@link ByteBuffer} without consuming it.
                         * @param byteBuffer must not be {#literal null}.
                         * @return 
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static getBytes(byteBuffer: java.nio.ByteBuffer): number /*byte*/[]
                        /**
                         * Tests if the {@code haystack} starts with the given {@code prefix}.
                         * @param haystack the source to scan.
                         * @param prefix the prefix to find.
                         * @return {#literal true} if {@code haystack} at position {@code offset} starts with {@code prefix}.
                         * @since 1.8.10
                         * @see #startsWith(byte[], byte[], int)
                         */
                        // @ts-ignore
                        public static startsWith(haystack: number /*byte*/[], prefix: number /*byte*/[]): boolean
                        /**
                         * Tests if the {@code haystack} beginning at the specified {@code offset} starts with the given {@code prefix}.
                         * @param haystack the source to scan.
                         * @param prefix the prefix to find.
                         * @param offset the offset to start at.
                         * @return {#literal true} if {@code haystack} at position {@code offset} starts with {@code prefix}.
                         * @since 1.8.10
                         */
                        // @ts-ignore
                        public static startsWith(haystack: number /*byte*/[], prefix: number /*byte*/[], offset: number /*int*/): boolean
                        /**
                         * Searches the specified array of bytes for the specified value. Returns the index of the first matching value in the
                         * {@code haystack}s natural order or {@code -1} of {@code needle} could not be found.
                         * @param haystack the source to scan.
                         * @param needle the value to scan for.
                         * @return index of first appearance, or -1 if not found.
                         * @since 1.8.10
                         */
                        // @ts-ignore
                        public static indexOf(haystack: number /*byte*/[], needle: number /*byte*/): number /*int*/
                        /**
                         * Convert a {@link String} into a {@link ByteBuffer} using {@link java.nio.charset.StandardCharsets#UTF_8}.
                         * @param theString must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static getByteBuffer(theString: java.lang.String | string): java.nio.ByteBuffer
                        /**
                         * Convert a {@link String} into a {@link ByteBuffer} using the given {@link Charset}.
                         * @param theString must not be {#literal null}.
                         * @param charset must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static getByteBuffer(theString: java.lang.String | string, charset: java.nio.charset.Charset): java.nio.ByteBuffer
                        /**
                         * Extract/Transfer bytes from the given {@link ByteBuffer} into an array by duplicating the buffer and fetching its
                         * content.
                         * @param buffer must not be {#literal null}.
                         * @return the extracted bytes.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static extractBytes(buffer: java.nio.ByteBuffer): number /*byte*/[]
                    }
                }
            }
        }
    }
}
