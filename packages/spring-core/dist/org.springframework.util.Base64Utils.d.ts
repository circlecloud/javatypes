declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * A simple utility class for Base64 encoding and decoding.
             * <p>Adapts to Java 8's {@link java.util.Base64} in a convenience fashion.
             * @author Juergen Hoeller
             * @author Gary Russell
             * @since 4.1
             * @see java.util.Base64
             */
            // @ts-ignore
            class Base64Utils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Base64-encode the given byte array.
                 * @param src the original byte array
                 * @return the encoded byte array
                 */
                // @ts-ignore
                encode(src: number /*byte*/[]): byte[]
                /**
                 * Base64-decode the given byte array.
                 * @param src the encoded byte array
                 * @return the original byte array
                 */
                // @ts-ignore
                decode(src: number /*byte*/[]): byte[]
                /**
                 * Base64-encode the given byte array using the RFC 4648
                 * "URL and Filename Safe Alphabet".
                 * @param src the original byte array
                 * @return the encoded byte array
                 * @since 4.2.4
                 */
                // @ts-ignore
                encodeUrlSafe(src: number /*byte*/[]): byte[]
                /**
                 * Base64-decode the given byte array using the RFC 4648
                 * "URL and Filename Safe Alphabet".
                 * @param src the encoded byte array
                 * @return the original byte array
                 * @since 4.2.4
                 */
                // @ts-ignore
                decodeUrlSafe(src: number /*byte*/[]): byte[]
                /**
                 * Base64-encode the given byte array to a String.
                 * @param src the original byte array
                 * @return the encoded byte array as a UTF-8 String
                 */
                // @ts-ignore
                encodeToString(src: number /*byte*/[]): java.lang.String
                /**
                 * Base64-decode the given byte array from an UTF-8 String.
                 * @param src the encoded UTF-8 String
                 * @return the original byte array
                 */
                // @ts-ignore
                decodeFromString(src: string): byte[]
                /**
                 * Base64-encode the given byte array to a String using the RFC 4648
                 * "URL and Filename Safe Alphabet".
                 * @param src the original byte array
                 * @return the encoded byte array as a UTF-8 String
                 */
                // @ts-ignore
                encodeToUrlSafeString(src: number /*byte*/[]): java.lang.String
                /**
                 * Base64-decode the given byte array from an UTF-8 String using the RFC 4648
                 * "URL and Filename Safe Alphabet".
                 * @param src the encoded UTF-8 String
                 * @return the original byte array
                 */
                // @ts-ignore
                decodeFromUrlSafeString(src: string): byte[]
            }
        }
    }
}
