declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represent the Content-Disposition type and parameters as defined in RFC 6266.
             * @author Sebastien Deleuze
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @since 5.0
             * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
             */
            // @ts-ignore
            class ContentDisposition extends java.lang.Object {
                /**
                 * Return the disposition type, like for example {@literal inline}, {@literal attachment},
                 * {@literal form-data}, or {@code null} if not defined.
                 */
                // @ts-ignore
                getType(): java.lang.String
                /**
                 * Return the value of the {@literal name} parameter, or {@code null} if not defined.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Return the value of the {@literal filename} parameter (or the value of the
                 * {@literal filename*} one decoded as defined in the RFC 5987), or {@code null} if not defined.
                 */
                // @ts-ignore
                getFilename(): java.lang.String
                /**
                 * Return the charset defined in {@literal filename*} parameter, or {@code null} if not defined.
                 */
                // @ts-ignore
                getCharset(): java.nio.charset.Charset
                /**
                 * Return the value of the {@literal size} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                getSize(): java.lang.Long
                /**
                 * Return the value of the {@literal creation-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                getCreationDate(): java.time.ZonedDateTime
                /**
                 * Return the value of the {@literal modification-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                getModificationDate(): java.time.ZonedDateTime
                /**
                 * Return the value of the {@literal read-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                getReadDate(): java.time.ZonedDateTime
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                /**
                 * Return the header value for this content disposition as defined in RFC 6266.
                 * @see #parse(String)
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return a builder for a {@code ContentDisposition}.
                 * @param type the disposition type like for example {#literal inline},
                 *  {@literal attachment}, or {@literal form-data}
                 * @return the builder
                 */
                // @ts-ignore
                builder(type: string): org.springframework.http.ContentDisposition.Builder
                /**
                 * Return an empty content disposition.
                 */
                // @ts-ignore
                empty(): org.springframework.http.ContentDisposition
                /**
                 * Parse a {@literal Content-Disposition} header value as defined in RFC 2183.
                 * @param contentDisposition the {#literal Content-Disposition} header value
                 * @return the parsed content disposition
                 * @see #toString()
                 */
                // @ts-ignore
                parse(contentDisposition: string): org.springframework.http.ContentDisposition
            }
        }
    }
}
