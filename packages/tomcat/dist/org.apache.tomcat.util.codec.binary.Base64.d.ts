declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace codec {
                    namespace binary {
                        /**
                         * Provides Base64 encoding and decoding as defined by <a href="http://www.ietf.org/rfc/rfc2045.txt">RFC 2045</a>.
                         * <p>
                         * This class implements section <cite>6.8. Base64 Content-Transfer-Encoding</cite> from RFC 2045 <cite>Multipurpose
                         * Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies</cite> by Freed and Borenstein.
                         * </p>
                         * <p>
                         * The class can be parameterized in the following manner with various constructors:
                         * </p>
                         * <ul>
                         * <li>URL-safe mode: Default off.</li>
                         * <li>Line length: Default 76. Line length that aren't multiples of 4 will still essentially end up being multiples of
                         * 4 in the encoded data.
                         * <li>Line separator: Default is CRLF ("\r\n")</li>
                         * </ul>
                         * <p>
                         * The URL-safe parameter is only applied to encode operations. Decoding seamlessly handles both modes.
                         * </p>
                         * <p>
                         * Since this class operates directly on byte streams, and not character streams, it is hard-coded to only
                         * encode/decode character encodings which are compatible with the lower 127 ASCII chart (ISO-8859-1, Windows-1252,
                         * UTF-8, etc).
                         * </p>
                         * <p>
                         * This class is thread-safe.
                         * </p>
                         * @see <a href="http://www.ietf.org/rfc/rfc2045.txt">RFC 2045</a>
                         * @since 1.0
                         */
                        // @ts-ignore
                        class Base64 extends org.apache.tomcat.util.codec.binary.BaseNCodec {
                            /**
                             * Creates a Base64 codec used for decoding (all modes) and encoding in URL-unsafe mode.
                             * <p>
                             * When encoding the line length is 0 (no chunking), and the encoding table is STANDARD_ENCODE_TABLE.
                             * </p>
                             * <p>
                             * When decoding all variants are supported.
                             * </p>
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a Base64 codec used for decoding (all modes) and encoding in the given URL-safe mode.
                             * <p>
                             * When encoding the line length is 76, the line separator is CRLF, and the encoding table is STANDARD_ENCODE_TABLE.
                             * </p>
                             * <p>
                             * When decoding all variants are supported.
                             * </p>
                             * @param urlSafe
                             *             if <code>true</code>, URL-safe encoding is used. In most cases this should be set to
                             *             <code>false</code>.
                             * @since 1.4
                             */
                            // @ts-ignore
                            constructor(urlSafe: boolean)
                            /**
                             * Creates a Base64 codec used for decoding (all modes) and encoding in URL-unsafe mode.
                             * <p>
                             * When encoding the line length is given in the constructor, the line separator is CRLF, and the encoding table is
                             * STANDARD_ENCODE_TABLE.
                             * </p>
                             * <p>
                             * Line lengths that aren't multiples of 4 will still essentially end up being multiples of 4 in the encoded data.
                             * </p>
                             * <p>
                             * When decoding all variants are supported.
                             * </p>
                             * @param lineLength
                             *             Each line of encoded data will be at most of the given length (rounded down to nearest multiple of
                             *             4). If lineLength &lt;= 0, then the output will not be divided into lines (chunks). Ignored when
                             *             decoding.
                             * @since 1.4
                             */
                            // @ts-ignore
                            constructor(lineLength: number /*int*/)
                            /**
                             * Creates a Base64 codec used for decoding (all modes) and encoding in URL-unsafe mode.
                             * <p>
                             * When encoding the line length and line separator are given in the constructor, and the encoding table is
                             * STANDARD_ENCODE_TABLE.
                             * </p>
                             * <p>
                             * Line lengths that aren't multiples of 4 will still essentially end up being multiples of 4 in the encoded data.
                             * </p>
                             * <p>
                             * When decoding all variants are supported.
                             * </p>
                             * @param lineLength
                             *             Each line of encoded data will be at most of the given length (rounded down to nearest multiple of
                             *             4). If lineLength &lt;= 0, then the output will not be divided into lines (chunks). Ignored when
                             *             decoding.
                             * @param lineSeparator
                             *             Each line of encoded data will end with this sequence of bytes.
                             * @throws IllegalArgumentException
                             *              Thrown when the provided lineSeparator included some base64 characters.
                             * @since 1.4
                             */
                            // @ts-ignore
                            constructor(lineLength: number /*int*/, lineSeparator: number /*byte*/[])
                            /**
                             * Creates a Base64 codec used for decoding (all modes) and encoding in URL-unsafe mode.
                             * <p>
                             * When encoding the line length and line separator are given in the constructor, and the encoding table is
                             * STANDARD_ENCODE_TABLE.
                             * </p>
                             * <p>
                             * Line lengths that aren't multiples of 4 will still essentially end up being multiples of 4 in the encoded data.
                             * </p>
                             * <p>
                             * When decoding all variants are supported.
                             * </p>
                             * @param lineLength
                             *             Each line of encoded data will be at most of the given length (rounded down to nearest multiple of
                             *             4). If lineLength &lt;= 0, then the output will not be divided into lines (chunks). Ignored when
                             *             decoding.
                             * @param lineSeparator
                             *             Each line of encoded data will end with this sequence of bytes.
                             * @param urlSafe
                             *             Instead of emitting '+' and '/' we emit '-' and '_' respectively. urlSafe is only applied to encode
                             *             operations. Decoding seamlessly handles both modes.
                             *             <b>Note: no padding is added when using the URL-safe alphabet.</b>
                             * @throws IllegalArgumentException
                             *              The provided lineSeparator included some base64 characters. That's not going to work!
                             * @since 1.4
                             */
                            // @ts-ignore
                            constructor(lineLength: number /*int*/, lineSeparator: number /*byte*/[], urlSafe: boolean)
                            /**
                             * Returns our current encode mode. True if we're URL-SAFE, false otherwise.
                             * @return true if we're in URL-SAFE mode, false otherwise.
                             * @since 1.4
                             */
                            // @ts-ignore
                            public isUrlSafe(): boolean
                            /**
                             * Returns whether or not the <code>octet</code> is in the base 64 alphabet.
                             * @param octet
                             *             The value to test
                             * @return <code>true</code> if the value is defined in the the base 64 alphabet, <code>false</code> otherwise.
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static isBase64(octet: number /*byte*/): boolean
                            /**
                             * Tests a given String to see if it contains only valid characters within the Base64 alphabet. Currently the
                             * method treats whitespace as valid.
                             * @param base64
                             *             String to test
                             * @return <code>true</code> if all characters in the String are valid characters in the Base64 alphabet or if
                             *          the String is empty; <code>false</code>, otherwise
                             * @since 1.5
                             */
                            // @ts-ignore
                            public static isBase64(base64: java.lang.String | string): boolean
                            /**
                             * Tests a given byte array to see if it contains only valid characters within the Base64 alphabet. Currently the
                             * method treats whitespace as valid.
                             * @param arrayOctet
                             *             byte array to test
                             * @return <code>true</code> if all bytes are valid characters in the Base64 alphabet or if the byte array is empty;
                             *          <code>false</code>, otherwise
                             * @since 1.5
                             */
                            // @ts-ignore
                            public static isBase64(arrayOctet: number /*byte*/[]): boolean
                            /**
                             * Encodes binary data using the base64 algorithm but does not chunk the output.
                             * @param binaryData
                             *             binary data to encode
                             * @return byte[] containing Base64 characters in their UTF-8 representation.
                             */
                            // @ts-ignore
                            public static encodeBase64(binaryData: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Encodes binary data using the base64 algorithm but does not chunk the output.
                             * NOTE:  We changed the behaviour of this method from multi-line chunking (commons-codec-1.4) to
                             * single-line non-chunking (commons-codec-1.5).
                             * @param binaryData
                             *             binary data to encode
                             * @return String containing Base64 characters.
                             * @since 1.4 (NOTE:  1.4 chunked the output, whereas 1.5 does not).
                             */
                            // @ts-ignore
                            public static encodeBase64String(binaryData: number /*byte*/[]): string
                            /**
                             * Encodes binary data using a URL-safe variation of the base64 algorithm but does not chunk the output. The
                             * url-safe variation emits - and _ instead of + and / characters.
                             * <b>Note: no padding is added.</b>
                             * @param binaryData
                             *             binary data to encode
                             * @return byte[] containing Base64 characters in their UTF-8 representation.
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static encodeBase64URLSafe(binaryData: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Encodes binary data using a URL-safe variation of the base64 algorithm but does not chunk the output. The
                             * url-safe variation emits - and _ instead of + and / characters.
                             * <b>Note: no padding is added.</b>
                             * @param binaryData
                             *             binary data to encode
                             * @return String containing Base64 characters
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static encodeBase64URLSafeString(binaryData: number /*byte*/[]): string
                            /**
                             * Encodes binary data using the base64 algorithm and chunks the encoded output into 76 character blocks
                             * @param binaryData
                             *             binary data to encode
                             * @return Base64 characters chunked in 76 character blocks
                             */
                            // @ts-ignore
                            public static encodeBase64Chunked(binaryData: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
                             * @param binaryData
                             *             Array containing binary data to encode.
                             * @param isChunked
                             *             if <code>true</code> this encoder will chunk the base64 output into 76 character blocks
                             * @return Base64-encoded data.
                             * @throws IllegalArgumentException
                             *              Thrown when the input array needs an output array bigger than {#link Integer#MAX_VALUE}
                             */
                            // @ts-ignore
                            public static encodeBase64(binaryData: number /*byte*/[], isChunked: boolean): number /*byte*/[]
                            /**
                             * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
                             * @param binaryData
                             *             Array containing binary data to encode.
                             * @param isChunked
                             *             if <code>true</code> this encoder will chunk the base64 output into 76 character blocks
                             * @param urlSafe
                             *             if <code>true</code> this encoder will emit - and _ instead of the usual + and / characters.
                             *             <b>Note: no padding is added when encoding using the URL-safe alphabet.</b>
                             * @return Base64-encoded data.
                             * @throws IllegalArgumentException
                             *              Thrown when the input array needs an output array bigger than {#link Integer#MAX_VALUE}
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static encodeBase64(binaryData: number /*byte*/[], isChunked: boolean, urlSafe: boolean): number /*byte*/[]
                            /**
                             * Encodes binary data using the base64 algorithm, optionally chunking the output into 76 character blocks.
                             * @param binaryData
                             *             Array containing binary data to encode.
                             * @param isChunked
                             *             if <code>true</code> this encoder will chunk the base64 output into 76 character blocks
                             * @param urlSafe
                             *             if <code>true</code> this encoder will emit - and _ instead of the usual + and / characters.
                             *             <b>Note: no padding is added when encoding using the URL-safe alphabet.</b>
                             * @param maxResultSize
                             *             The maximum result size to accept.
                             * @return Base64-encoded data.
                             * @throws IllegalArgumentException
                             *              Thrown when the input array needs an output array bigger than maxResultSize
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static encodeBase64(binaryData: number /*byte*/[], isChunked: boolean, urlSafe: boolean, maxResultSize: number /*int*/): number /*byte*/[]
                            /**
                             * Decodes a Base64 String into octets.
                             * <p>
                             * <b>Note:</b> this method seamlessly handles data encoded in URL-safe or normal mode.
                             * </p>
                             * @param base64String
                             *             String containing Base64 data
                             * @return Array containing decoded data.
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static decodeBase64(base64String: java.lang.String | string): number /*byte*/[]
                            /**
                             * Decodes Base64 data into octets.
                             * <p>
                             * <b>Note:</b> this method seamlessly handles data encoded in URL-safe or normal mode.
                             * </p>
                             * @param base64Data
                             *             Byte array containing Base64 data
                             * @return Array containing decoded data.
                             */
                            // @ts-ignore
                            public static decodeBase64(base64Data: number /*byte*/[]): number /*byte*/[]
                            // @ts-ignore
                            public static decodeBase64(base64Data: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*byte*/[]
                            /**
                             * Decodes a byte64-encoded integer according to crypto standards such as W3C's XML-Signature.
                             * @param pArray
                             *             a byte array containing base64 character data
                             * @return A BigInteger
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static decodeInteger(pArray: number /*byte*/[]): java.math.BigInteger
                            /**
                             * Encodes to a byte64-encoded integer according to crypto standards such as W3C's XML-Signature.
                             * @param bigInt
                             *             a BigInteger
                             * @return A byte array containing base64 character data
                             * @throws NullPointerException
                             *              if null is passed in
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static encodeInteger(bigInt: java.math.BigInteger): number /*byte*/[]
                            /**
                             * Returns whether or not the <code>octet</code> is in the Base64 alphabet.
                             * @param octet
                             *             The value to test
                             * @return <code>true</code> if the value is defined in the the Base64 alphabet <code>false</code> otherwise.
                             */
                            // @ts-ignore
                            isInAlphabet(octet: number /*byte*/): boolean
                        }
                    }
                }
            }
        }
    }
}
