declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * A representation of a <code>Data</code> type containing an octet stream.
             * @since 1.6
             */
            // @ts-ignore
            class OctetStreamData extends java.lang.Object implements javax.xml.crypto.Data {
                /**
                 * Creates a new <code>OctetStreamData</code>.
                 * @param octetStream the input stream containing the octets
                 * @throws NullPointerException if <code>octetStream</code> is
                 *     <code>null</code>
                 */
                // @ts-ignore
                constructor(octetStream: java.io.InputStream)
                /**
                 * Creates a new <code>OctetStreamData</code>.
                 * @param octetStream the input stream containing the octets
                 * @param uri the URI String identifying the data object (may be
                 *     <code>null</code>)
                 * @param mimeType the MIME type associated with the data object (may be
                 *     <code>null</code>)
                 * @throws NullPointerException if <code>octetStream</code> is
                 *     <code>null</code>
                 */
                // @ts-ignore
                constructor(octetStream: java.io.InputStream, uri: string, mimeType: string)
                /**
                 * Returns the input stream of this <code>OctetStreamData</code>.
                 * @return the input stream of this <code>OctetStreamData</code>.
                 */
                // @ts-ignore
                getOctetStream(): java.io.InputStream
                /**
                 * Returns the URI String identifying the data object represented by this
                 * <code>OctetStreamData</code>.
                 * @return the URI String or <code>null</code> if not applicable
                 */
                // @ts-ignore
                getURI(): java.lang.String
                /**
                 * Returns the MIME type associated with the data object represented by this
                 * <code>OctetStreamData</code>.
                 * @return the MIME type or <code>null</code> if not applicable
                 */
                // @ts-ignore
                getMimeType(): java.lang.String
            }
        }
    }
}
