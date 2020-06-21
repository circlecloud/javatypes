declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                // @ts-ignore
                class HPackHuffman extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Decodes a huffman encoded string into the target StringBuilder. There
                     * must be enough space left in the buffer for this method to succeed.
                     * @param data   The byte buffer
                     * @param length The length of data from the buffer to decode
                     * @param target The target for the decompressed data
                     * @throws HpackException If the Huffman encoded value in HPACK headers did
                     *                         not end with EOS padding
                     */
                    // @ts-ignore
                    public static decode(data: java.nio.ByteBuffer, length: number /*int*/, target: java.lang.StringBuilder): void
                    /**
                     * Encodes the given string into the buffer. If there is not enough space in
                     * the buffer, or the encoded version is bigger than the original it will
                     * return false and not modify the buffers position.
                     * @param buffer   The buffer to encode into
                     * @param toEncode The string to encode
                     * @param forceLowercase If the string should be encoded in lower case
                     * @return true if encoding succeeded
                     */
                    // @ts-ignore
                    public static encode(buffer: java.nio.ByteBuffer, toEncode: java.lang.String | string, forceLowercase: boolean): boolean
                }
            }
        }
    }
}
