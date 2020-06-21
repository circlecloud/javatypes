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
                constructor(octetStream: java.io.InputStream, uri: java.lang.String | string, mimeType: java.lang.String | string)
                /**
                 * Returns the input stream of this <code>OctetStreamData</code>.
                 * @return the input stream of this <code>OctetStreamData</code>.
                 */
                // @ts-ignore
                public getOctetStream(): java.io.InputStream
                /**
                 * Returns the URI String identifying the data object represented by this
                 * <code>OctetStreamData</code>.
                 * @return the URI String or <code>null</code> if not applicable
                 */
                // @ts-ignore
                public getURI(): string
                /**
                 * Returns the MIME type associated with the data object represented by this
                 * <code>OctetStreamData</code>.
                 * @return the MIME type or <code>null</code> if not applicable
                 */
                // @ts-ignore
                public getMimeType(): string
            }
        }
    }
}
