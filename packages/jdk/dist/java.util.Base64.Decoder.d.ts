declare namespace java {
    namespace util {
        namespace Base64 {
            /**
             * This class implements a decoder for decoding byte data using the
             * Base64 encoding scheme as specified in RFC 4648 and RFC 2045.
             * <p> The Base64 padding character {@code '='} is accepted and
             * interpreted as the end of the encoded byte data, but is not
             * required. So if the final unit of the encoded byte data only has
             * two or three Base64 characters (without the corresponding padding
             * character(s) padded), they are decoded as if followed by padding
             * character(s). If there is a padding character present in the
             * final unit, the correct number of padding character(s) must be
             * present, otherwise {@code IllegalArgumentException} (
             * {@code IOException} when reading from a Base64 stream) is thrown
             * during decoding.
             * <p> Instances of {@link Decoder} class are safe for use by
             * multiple concurrent threads.
             * <p> Unless otherwise noted, passing a {@code null} argument to
             * a method of this class will cause a
             * {@link java.lang.NullPointerException NullPointerException} to
             * be thrown.
             * @see Encoder
             * @since 1.8
             */
            // @ts-ignore
            class Decoder extends java.lang.Object {
                /**
                 * Decodes all bytes from the input byte array using the {@link Base64}
                 * encoding scheme, writing the results into a newly-allocated output
                 * byte array. The returned byte array is of the length of the resulting
                 * bytes.
                 * @param src
                 *           the byte array to decode
                 * @return A newly-allocated byte array containing the decoded bytes.
                 * @throws IllegalArgumentException
                 *           if {#code src} is not in valid Base64 scheme
                 */
                // @ts-ignore
                decode(src: number /*byte*/[]): byte[]
                /**
                 * Decodes a Base64 encoded String into a newly-allocated byte array
                 * using the {@link Base64} encoding scheme.
                 * <p> An invocation of this method has exactly the same effect as invoking
                 * {@code decode(src.getBytes(StandardCharsets.ISO_8859_1))}
                 * @param src
                 *           the string to decode
                 * @return A newly-allocated byte array containing the decoded bytes.
                 * @throws IllegalArgumentException
                 *           if {#code src} is not in valid Base64 scheme
                 */
                // @ts-ignore
                decode(src: string): byte[]
                /**
                 * Decodes all bytes from the input byte array using the {@link Base64}
                 * encoding scheme, writing the results into the given output byte array,
                 * starting at offset 0.
                 * <p> It is the responsibility of the invoker of this method to make
                 * sure the output byte array {@code dst} has enough space for decoding
                 * all bytes from the input byte array. No bytes will be be written to
                 * the output byte array if the output byte array is not big enough.
                 * <p> If the input byte array is not in valid Base64 encoding scheme
                 * then some bytes may have been written to the output byte array before
                 * IllegalargumentException is thrown.
                 * @param src
                 *           the byte array to decode
                 * @param dst
                 *           the output byte array
                 * @return The number of bytes written to the output byte array
                 * @throws IllegalArgumentException
                 *           if {#code src} is not in valid Base64 scheme, or {@code dst}
                 *           does not have enough space for decoding all input bytes.
                 */
                // @ts-ignore
                decode(src: number /*byte*/[], dst: number /*byte*/[]): int
                /**
                 * Decodes all bytes from the input byte buffer using the {@link Base64}
                 * encoding scheme, writing the results into a newly-allocated ByteBuffer.
                 * <p> Upon return, the source buffer's position will be updated to
                 * its limit; its limit will not have been changed. The returned
                 * output buffer's position will be zero and its limit will be the
                 * number of resulting decoded bytes
                 * <p> {@code IllegalArgumentException} is thrown if the input buffer
                 * is not in valid Base64 encoding scheme. The position of the input
                 * buffer will not be advanced in this case.
                 * @param buffer
                 *           the ByteBuffer to decode
                 * @return A newly-allocated byte buffer containing the decoded bytes
                 * @throws IllegalArgumentException
                 *           if {#code src} is not in valid Base64 scheme.
                 */
                // @ts-ignore
                decode(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer
                /**
                 * Returns an input stream for decoding {@link Base64} encoded byte stream.
                 * <p> The {@code read}  methods of the returned {@code InputStream} will
                 * throw {@code IOException} when reading bytes that cannot be decoded.
                 * <p> Closing the returned input stream will close the underlying
                 * input stream.
                 * @param is
                 *           the input stream
                 * @return the input stream for decoding the specified Base64 encoded
                 *           byte stream
                 */
                // @ts-ignore
                wrap(jis: java.io.InputStream): java.io.InputStream
            }
        }
    }
}
