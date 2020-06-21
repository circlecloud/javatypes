declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace codec {
                    namespace binary {
                        /**
                         * Abstract superclass for Base-N encoders and decoders.
                         * <p>
                         * This class is thread-safe.
                         * </p>
                         */
                        // @ts-ignore
                        abstract class BaseNCodec extends java.lang.Object {
                            /**
                             * Note <code>lineLength</code> is rounded down to the nearest multiple of {@link #encodedBlockSize}
                             * If <code>chunkSeparatorLength</code> is zero, then chunking is disabled.
                             * @param unencodedBlockSize the size of an unencoded block (e.g. Base64 = 3)
                             * @param encodedBlockSize the size of an encoded block (e.g. Base64 = 4)
                             * @param lineLength if &gt; 0, use chunking with a length <code>lineLength</code>
                             * @param chunkSeparatorLength the chunk separator length, if relevant
                             */
                            // @ts-ignore
                            constructor(unencodedBlockSize: number /*int*/, encodedBlockSize: number /*int*/, lineLength: number /*int*/, chunkSeparatorLength: number /*int*/)
                            /**
                             * Note <code>lineLength</code> is rounded down to the nearest multiple of {@link #encodedBlockSize}
                             * If <code>chunkSeparatorLength</code> is zero, then chunking is disabled.
                             * @param unencodedBlockSize the size of an unencoded block (e.g. Base64 = 3)
                             * @param encodedBlockSize the size of an encoded block (e.g. Base64 = 4)
                             * @param lineLength if &gt; 0, use chunking with a length <code>lineLength</code>
                             * @param chunkSeparatorLength the chunk separator length, if relevant
                             * @param pad byte used as padding byte.
                             */
                            // @ts-ignore
                            constructor(unencodedBlockSize: number /*int*/, encodedBlockSize: number /*int*/, lineLength: number /*int*/, chunkSeparatorLength: number /*int*/, pad: number /*byte*/)
                            // @ts-ignore
                            static readonly sm: org.apache.tomcat.util.res.StringManager
                            /**
                             * MIME chunk size per RFC 2045 section 6.8.
                             * <p>
                             * The {@value} character limit does not count the trailing CRLF, but counts all other characters, including any
                             * equal signs.
                             * </p>
                             * @see <a href="http://www.ietf.org/rfc/rfc2045.txt">RFC 2045 section 6.8</a>
                             */
                            // @ts-ignore
                            public static readonly MIME_CHUNK_SIZE: number /*int*/
                            /**
                             * PEM chunk size per RFC 1421 section 4.3.2.4.
                             * <p>
                             * The {@value} character limit does not count the trailing CRLF, but counts all other characters, including any
                             * equal signs.
                             * </p>
                             * @see <a href="http://tools.ietf.org/html/rfc1421">RFC 1421 section 4.3.2.4</a>
                             */
                            // @ts-ignore
                            public static readonly PEM_CHUNK_SIZE: number /*int*/
                            /**
                             * Mask used to extract 8 bits, used in decoding bytes
                             */
                            // @ts-ignore
                            static readonly MASK_8BITS: number /*int*/
                            /**
                             * Byte used to pad output.
                             */
                            // @ts-ignore
                            static readonly PAD_DEFAULT: number /*byte*/
                            // @ts-ignore
                            readonly pad: number /*byte*/
                            /**
                             * Chunksize for encoding. Not used when decoding.
                             * A value of zero or less implies no chunking of the encoded data.
                             * Rounded down to nearest multiple of encodedBlockSize.
                             */
                            // @ts-ignore
                            readonly lineLength: number /*int*/
                            /**
                             * Get the default buffer size. Can be overridden.
                             * @return {#link #DEFAULT_BUFFER_SIZE}
                             */
                            // @ts-ignore
                            getDefaultBufferSize(): number /*int*/
                            /**
                             * Ensure that the buffer has room for <code>size</code> bytes
                             * @param size minimum spare space required
                             * @param context the context to be used
                             * @return the buffer
                             */
                            // @ts-ignore
                            ensureBufferSize(size: number /*int*/, context: org.apache.tomcat.util.codec.binary.BaseNCodec.Context): number /*byte*/[]
                            /**
                             * Checks if a byte value is whitespace or not.
                             * Whitespace is taken to mean: space, tab, CR, LF
                             * @param byteToCheck
                             *             the byte to check
                             * @return true if byte is whitespace, false otherwise
                             */
                            // @ts-ignore
                            static isWhiteSpace(byteToCheck: number /*byte*/): boolean
                            /**
                             * Encodes a byte[] containing binary data, into a String containing characters in the Base-N alphabet.
                             * Uses UTF8 encoding.
                             * @param pArray
                             *             a byte array containing binary data
                             * @return A String containing only Base-N character data
                             */
                            // @ts-ignore
                            public encodeToString(pArray: number /*byte*/[]): string
                            /**
                             * Encodes a byte[] containing binary data, into a String containing characters in the appropriate alphabet.
                             * Uses UTF8 encoding.
                             * @param pArray a byte array containing binary data
                             * @return String containing only character data in the appropriate alphabet.
                             * @since 1.5
                             *  This is a duplicate of {#link #encodeToString(byte[])}; it was merged during refactoring.
                             */
                            // @ts-ignore
                            public encodeAsString(pArray: number /*byte*/[]): string
                            /**
                             * Decodes a String containing characters in the Base-N alphabet.
                             * @param pArray
                             *             A String containing Base-N character data
                             * @return a byte array containing binary data
                             */
                            // @ts-ignore
                            public decode(pArray: java.lang.String | string): number /*byte*/[]
                            /**
                             * Decodes a byte[] containing characters in the Base-N alphabet.
                             * @param pArray
                             *             A byte array containing Base-N character data
                             * @return a byte array containing binary data
                             */
                            // @ts-ignore
                            public decode(pArray: number /*byte*/[]): number /*byte*/[]
                            // @ts-ignore
                            public decode(pArray: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*byte*/[]
                            /**
                             * Encodes a byte[] containing binary data, into a byte[] containing characters in the alphabet.
                             * @param pArray
                             *             a byte array containing binary data
                             * @return A byte array containing only the base N alphabetic character data
                             */
                            // @ts-ignore
                            public encode(pArray: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Encodes a byte[] containing binary data, into a byte[] containing
                             * characters in the alphabet.
                             * @param pArray
                             *             a byte array containing binary data
                             * @param offset
                             *             initial offset of the subarray.
                             * @param length
                             *             length of the subarray.
                             * @return A byte array containing only the base N alphabetic character data
                             * @since 1.11
                             */
                            // @ts-ignore
                            public encode(pArray: number /*byte*/[], offset: number /*int*/, length: number /*int*/): number /*byte*/[]
                            /**
                             * Returns whether or not the <code>octet</code> is in the current alphabet.
                             * Does not allow whitespace or pad.
                             * @param value The value to test
                             * @return <code>true</code> if the value is defined in the current alphabet, <code>false</code> otherwise.
                             */
                            // @ts-ignore
                            abstract isInAlphabet(value: number /*byte*/): boolean
                            /**
                             * Tests a given byte array to see if it contains only valid characters within the alphabet.
                             * The method optionally treats whitespace and pad as valid.
                             * @param arrayOctet byte array to test
                             * @param allowWSPad if <code>true</code>, then whitespace and PAD are also allowed
                             * @return <code>true</code> if all bytes are valid characters in the alphabet or if the byte array is empty;
                             *          <code>false</code>, otherwise
                             */
                            // @ts-ignore
                            public isInAlphabet(arrayOctet: number /*byte*/[], allowWSPad: boolean): boolean
                            /**
                             * Tests a given String to see if it contains only valid characters within the alphabet.
                             * The method treats whitespace and PAD as valid.
                             * @param basen String to test
                             * @return <code>true</code> if all characters in the String are valid characters in the alphabet or if
                             *          the String is empty; <code>false</code>, otherwise
                             * @see #isInAlphabet(byte[], boolean)
                             */
                            // @ts-ignore
                            public isInAlphabet(basen: java.lang.String | string): boolean
                            /**
                             * Tests a given byte array to see if it contains any characters within the alphabet or PAD.
                             * Intended for use in checking line-ending arrays
                             * @param arrayOctet
                             *             byte array to test
                             * @return <code>true</code> if any byte is a valid character in the alphabet or PAD; <code>false</code> otherwise
                             */
                            // @ts-ignore
                            containsAlphabetOrPad(arrayOctet: number /*byte*/[]): boolean
                            /**
                             * Calculates the amount of space needed to encode the supplied array.
                             * @param pArray byte[] array which will later be encoded
                             * @return amount of space needed to encoded the supplied array.
                             *  Returns a long since a max-len array will require &gt; Integer.MAX_VALUE
                             */
                            // @ts-ignore
                            public getEncodedLength(pArray: number /*byte*/[]): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
