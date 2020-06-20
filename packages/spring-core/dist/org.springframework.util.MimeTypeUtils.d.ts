declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous {@link MimeType} utility methods.
             * @author Arjen Poutsma
             * @author Rossen Stoyanchev
             * @author Dimitrios Liapis
             * @author Brian Clozel
             * @author Sam Brannen
             * @since 4.0
             */
            // @ts-ignore
            class MimeTypeUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Comparator used by {@link #sortBySpecificity(List)}.
                 */
                // @ts-ignore
                readonly SPECIFICITY_COMPARATOR: java.util.Comparator<org.springframework.util.MimeType>
                /**
                 * Public constant mime type that includes all media ranges (i.e. "&#42;/&#42;").
                 */
                // @ts-ignore
                readonly ALL: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#ALL}.
                 */
                // @ts-ignore
                readonly ALL_VALUE: string
                /**
                 * Public constant mime type for {@code application/json}.
                 */
                // @ts-ignore
                readonly APPLICATION_JSON: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#APPLICATION_JSON}.
                 */
                // @ts-ignore
                readonly APPLICATION_JSON_VALUE: string
                /**
                 * Public constant mime type for {@code application/octet-stream}.
                 */
                // @ts-ignore
                readonly APPLICATION_OCTET_STREAM: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#APPLICATION_OCTET_STREAM}.
                 */
                // @ts-ignore
                readonly APPLICATION_OCTET_STREAM_VALUE: string
                /**
                 * Public constant mime type for {@code application/xml}.
                 */
                // @ts-ignore
                readonly APPLICATION_XML: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#APPLICATION_XML}.
                 */
                // @ts-ignore
                readonly APPLICATION_XML_VALUE: string
                /**
                 * Public constant mime type for {@code image/gif}.
                 */
                // @ts-ignore
                readonly IMAGE_GIF: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#IMAGE_GIF}.
                 */
                // @ts-ignore
                readonly IMAGE_GIF_VALUE: string
                /**
                 * Public constant mime type for {@code image/jpeg}.
                 */
                // @ts-ignore
                readonly IMAGE_JPEG: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#IMAGE_JPEG}.
                 */
                // @ts-ignore
                readonly IMAGE_JPEG_VALUE: string
                /**
                 * Public constant mime type for {@code image/png}.
                 */
                // @ts-ignore
                readonly IMAGE_PNG: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#IMAGE_PNG}.
                 */
                // @ts-ignore
                readonly IMAGE_PNG_VALUE: string
                /**
                 * Public constant mime type for {@code text/html}.
                 */
                // @ts-ignore
                readonly TEXT_HTML: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#TEXT_HTML}.
                 */
                // @ts-ignore
                readonly TEXT_HTML_VALUE: string
                /**
                 * Public constant mime type for {@code text/plain}.
                 */
                // @ts-ignore
                readonly TEXT_PLAIN: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#TEXT_PLAIN}.
                 */
                // @ts-ignore
                readonly TEXT_PLAIN_VALUE: string
                /**
                 * Public constant mime type for {@code text/xml}.
                 */
                // @ts-ignore
                readonly TEXT_XML: org.springframework.util.MimeType
                /**
                 * A String equivalent of {@link MimeTypeUtils#TEXT_XML}.
                 */
                // @ts-ignore
                readonly TEXT_XML_VALUE: string
                /**
                 * Parse the given String into a single {@code MimeType}.
                 * Recently parsed {@code MimeType} are cached for further retrieval.
                 * @param mimeType the string to parse
                 * @return the mime type
                 * @throws InvalidMimeTypeException if the string cannot be parsed
                 */
                // @ts-ignore
                parseMimeType(mimeType: string): org.springframework.util.MimeType
                /**
                 * Parse the comma-separated string into a list of {@code MimeType} objects.
                 * @param mimeTypes the string to parse
                 * @return the list of mime types
                 * @throws InvalidMimeTypeException if the string cannot be parsed
                 */
                // @ts-ignore
                parseMimeTypes(mimeTypes: string): java.util.List<org.springframework.util.MimeType>
                /**
                 * Tokenize the given comma-separated string of {@code MimeType} objects
                 * into a {@code List<String>}. Unlike simple tokenization by ",", this
                 * method takes into account quoted parameters.
                 * @param mimeTypes the string to tokenize
                 * @return the list of tokens
                 * @since 5.1.3
                 */
                // @ts-ignore
                tokenize(mimeTypes: string): java.util.List<java.lang.String>
                /**
                 * Return a string representation of the given list of {@code MimeType} objects.
                 * @param mimeTypes the string to parse
                 * @return the list of mime types
                 * @throws IllegalArgumentException if the String cannot be parsed
                 */
                // @ts-ignore
                toString(mimeTypes: Array<org.springframework.util.MimeType>): java.lang.String
                /**
                 * Sorts the given list of {@code MimeType} objects by specificity.
                 * <p>Given two mime types:
                 * <ol>
                 * <li>if either mime type has a {@linkplain MimeType#isWildcardType() wildcard type},
                 * then the mime type without the wildcard is ordered before the other.</li>
                 * <li>if the two mime types have different {@linkplain MimeType#getType() types},
                 * then they are considered equal and remain their current order.</li>
                 * <li>if either mime type has a {@linkplain MimeType#isWildcardSubtype() wildcard subtype}
                 * , then the mime type without the wildcard is sorted before the other.</li>
                 * <li>if the two mime types have different {@linkplain MimeType#getSubtype() subtypes},
                 * then they are considered equal and remain their current order.</li>
                 * <li>if the two mime types have a different amount of
                 * {@linkplain MimeType#getParameter(String) parameters}, then the mime type with the most
                 * parameters is ordered before the other.</li>
                 * </ol>
                 * <p>For example: <blockquote>audio/basic &lt; audio/* &lt; *&#047;*</blockquote>
                 * <blockquote>audio/basic;level=1 &lt; audio/basic</blockquote>
                 * <blockquote>audio/basic == text/html</blockquote> <blockquote>audio/basic ==
                 * audio/wave</blockquote>
                 * @param mimeTypes the list of mime types to be sorted
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">HTTP 1.1: Semantics
                 *  and Content, section 5.3.2</a>
                 */
                // @ts-ignore
                sortBySpecificity(mimeTypes: Array<org.springframework.util.MimeType>): void
                /**
                 * Generate a random MIME boundary as bytes, often used in multipart mime types.
                 */
                // @ts-ignore
                generateMultipartBoundary(): byte[]
                /**
                 * Generate a random MIME boundary as String, often used in multipart mime types.
                 */
                // @ts-ignore
                generateMultipartBoundaryString(): java.lang.String
            }
        }
    }
}
