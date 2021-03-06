declare namespace java {
    namespace util {
        namespace Base64 {
            /**
             * This class implements an encoder for encoding byte data using
             * the Base64 encoding scheme as specified in RFC 4648 and RFC 2045.
             * <p> Instances of {@link Encoder} class are safe for use by
             * multiple concurrent threads.
             * <p> Unless otherwise noted, passing a {@code null} argument to
             * a method of this class will cause a
             * {@link java.lang.NullPointerException NullPointerException} to
             * be thrown.
             * @see Decoder
             * @since 1.8
             */
            // @ts-ignore
            class Encoder extends java.lang.Object {
                /**
                 * Encodes all bytes from the specified byte array into a newly-allocated
                 * byte array using the {@link Base64} encoding scheme. The returned byte
                 * array is of the length of the resulting bytes.
                 * @param src
                 *           the byte array to encode
                 * @return A newly-allocated byte array containing the resulting
                 *           encoded bytes.
                 */
                // @ts-ignore
                public encode(src: number /*byte*/[]): number /*byte*/[]
                /**
                 * Encodes all bytes from the specified byte array using the
                 * {@link Base64} encoding scheme, writing the resulting bytes to the
                 * given output byte array, starting at offset 0.
                 * <p> It is the responsibility of the invoker of this method to make
                 * sure the output byte array {@code dst} has enough space for encoding
                 * all bytes from the input byte array. No bytes will be written to the
                 * output byte array if the output byte array is not big enough.
                 * @param src
                 *           the byte array to encode
                 * @param dst
                 *           the output byte array
                 * @return The number of bytes written to the output byte array
                 * @throws IllegalArgumentException if {#code dst} does not have enough
                 *           space for encoding all input bytes.
                 */
                // @ts-ignore
                public encode(src: number /*byte*/[], dst: number /*byte*/[]): number /*int*/
                /**
                 * Encodes the specified byte array into a String using the {@link Base64}
                 * encoding scheme.
                 * <p> This method first encodes all input bytes into a base64 encoded
                 * byte array and then constructs a new String by using the encoded byte
                 * array and the {@link java.nio.charset.StandardCharsets#ISO_8859_1
                 * ISO-8859-1} charset.
                 * <p> In other words, an invocation of this method has exactly the same
                 * effect as invoking
                 * {@code new String(encode(src), StandardCharsets.ISO_8859_1)}.
                 * @param src
                 *           the byte array to encode
                 * @return A String containing the resulting Base64 encoded characters
                 */
                // @ts-ignore
                public encodeToString(src: number /*byte*/[]): string
                /**
                 * Encodes all remaining bytes from the specified byte buffer into
                 * a newly-allocated ByteBuffer using the {@link Base64} encoding
                 * scheme.
                 * Upon return, the source buffer's position will be updated to
                 * its limit; its limit will not have been changed. The returned
                 * output buffer's position will be zero and its limit will be the
                 * number of resulting encoded bytes.
                 * @param buffer
                 *           the source ByteBuffer to encode
                 * @return A newly-allocated byte buffer containing the encoded bytes.
                 */
                // @ts-ignore
                public encode(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer
                /**
                 * Wraps an output stream for encoding byte data using the {@link Base64}
                 * encoding scheme.
                 * <p> It is recommended to promptly close the returned output stream after
                 * use, during which it will flush all possible leftover bytes to the underlying
                 * output stream. Closing the returned output stream will close the underlying
                 * output stream.
                 * @param os
                 *           the output stream.
                 * @return the output stream for encoding the byte data into the
                 *           specified Base64 encoded format
                 */
                // @ts-ignore
                public wrap(os: java.io.OutputStream): java.io.OutputStream
                /**
                 * Returns an encoder instance that encodes equivalently to this one,
                 * but without adding any padding character at the end of the encoded
                 * byte data.
                 * <p> The encoding scheme of this encoder instance is unaffected by
                 * this invocation. The returned encoder instance should be used for
                 * non-padding encoding operation.
                 * @return an equivalent encoder that encodes without adding any
                 *          padding character at the end
                 */
                // @ts-ignore
                public withoutPadding(): java.util.Base64.Encoder
            }
        }
    }
}
