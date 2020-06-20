declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous methods for calculating digests.
             * <p>Mainly for internal use within the framework; consider
             * <a href="https://commons.apache.org/codec/">Apache Commons Codec</a>
             * for a more comprehensive suite of digest utilities.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @author Craig Andrews
             * @since 3.0
             */
            // @ts-ignore
            class DigestUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Calculate the MD5 digest of the given bytes.
                 * @param bytes the bytes to calculate the digest over
                 * @return the digest
                 */
                // @ts-ignore
                md5Digest(bytes: number /*byte*/[]): byte[]
                /**
                 * Calculate the MD5 digest of the given stream.
                 * <p>This method does <strong>not</strong> close the input stream.
                 * @param inputStream the InputStream to calculate the digest over
                 * @return the digest
                 * @since 4.2
                 */
                // @ts-ignore
                md5Digest(inputStream: java.io.InputStream): byte[]
                /**
                 * Return a hexadecimal string representation of the MD5 digest of the given bytes.
                 * @param bytes the bytes to calculate the digest over
                 * @return a hexadecimal digest string
                 */
                // @ts-ignore
                md5DigestAsHex(bytes: number /*byte*/[]): java.lang.String
                /**
                 * Return a hexadecimal string representation of the MD5 digest of the given stream.
                 * <p>This method does <strong>not</strong> close the input stream.
                 * @param inputStream the InputStream to calculate the digest over
                 * @return a hexadecimal digest string
                 * @since 4.2
                 */
                // @ts-ignore
                md5DigestAsHex(inputStream: java.io.InputStream): java.lang.String
                /**
                 * Append a hexadecimal string representation of the MD5 digest of the given
                 * bytes to the given {@link StringBuilder}.
                 * @param bytes the bytes to calculate the digest over
                 * @param builder the string builder to append the digest to
                 * @return the given string builder
                 */
                // @ts-ignore
                appendMd5DigestAsHex(bytes: number /*byte*/[], builder: java.lang.StringBuilder): java.lang.StringBuilder
                /**
                 * Append a hexadecimal string representation of the MD5 digest of the given
                 * inputStream to the given {@link StringBuilder}.
                 * <p>This method does <strong>not</strong> close the input stream.
                 * @param inputStream the inputStream to calculate the digest over
                 * @param builder the string builder to append the digest to
                 * @return the given string builder
                 * @since 4.2
                 */
                // @ts-ignore
                appendMd5DigestAsHex(inputStream: java.io.InputStream, builder: java.lang.StringBuilder): java.lang.StringBuilder
            }
        }
    }
}
