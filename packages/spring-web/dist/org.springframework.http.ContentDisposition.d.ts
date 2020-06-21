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
                public getType(): string
                /**
                 * Return the value of the {@literal name} parameter, or {@code null} if not defined.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Return the value of the {@literal filename} parameter (or the value of the
                 * {@literal filename*} one decoded as defined in the RFC 5987), or {@code null} if not defined.
                 */
                // @ts-ignore
                public getFilename(): string
                /**
                 * Return the charset defined in {@literal filename*} parameter, or {@code null} if not defined.
                 */
                // @ts-ignore
                public getCharset(): java.nio.charset.Charset
                /**
                 * Return the value of the {@literal size} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                public getSize(): number
                /**
                 * Return the value of the {@literal creation-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                public getCreationDate(): java.time.ZonedDateTime
                /**
                 * Return the value of the {@literal modification-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                public getModificationDate(): java.time.ZonedDateTime
                /**
                 * Return the value of the {@literal read-date} parameter, or {@code null} if not defined.
                 * @deprecated since 5.2.3 as per
                 *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                 *  to be removed in a future release.
                 */
                // @ts-ignore
                public getReadDate(): java.time.ZonedDateTime
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Return the header value for this content disposition as defined in RFC 6266.
                 * @see #parse(String)
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Return a builder for a {@code ContentDisposition}.
                 * @param type the disposition type like for example {#literal inline},
                 *  {@literal attachment}, or {@literal form-data}
                 * @return the builder
                 */
                // @ts-ignore
                public static builder(type: java.lang.String | string): org.springframework.http.ContentDisposition.Builder
                /**
                 * Return an empty content disposition.
                 */
                // @ts-ignore
                public static empty(): org.springframework.http.ContentDisposition
                /**
                 * Parse a {@literal Content-Disposition} header value as defined in RFC 2183.
                 * @param contentDisposition the {#literal Content-Disposition} header value
                 * @return the parsed content disposition
                 * @see #toString()
                 */
                // @ts-ignore
                public static parse(contentDisposition: java.lang.String | string): org.springframework.http.ContentDisposition
            }
        }
    }
}
