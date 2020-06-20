declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * A subclass of {@link MimeType} that adds support for quality parameters
             * as defined in the HTTP specification.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @author Sebastien Deleuze
             * @author Kazuki Shimizu
             * @author Sam Brannen
             * @since 3.0
             * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.1">
             *      HTTP 1.1: Semantics and Content, section 3.1.1.1</a>
             */
            // @ts-ignore
            class MediaType extends MimeType implements java.io.Serializable {
                /**
                 * Create a new {@code MediaType} for the given primary type.
                 * <p>The {@linkplain #getSubtype() subtype} is set to "&#42;", parameters empty.
                 * @param type the primary type
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(type: string)
                /**
                 * Create a new {@code MediaType} for the given primary type and subtype.
                 * <p>The parameters are empty.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(type: string, subtype: string)
                /**
                 * Create a new {@code MediaType} for the given type, subtype, and character set.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @param charset the character set
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(type: string, subtype: string, charset: java.nio.charset.Charset)
                /**
                 * Create a new {@code MediaType} for the given type, subtype, and quality value.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @param qualityValue the quality value
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(type: string, subtype: string, qualityValue: number /*double*/)
                /**
                 * Copy-constructor that copies the type, subtype and parameters of the given
                 * {@code MediaType}, and allows to set the specified character set.
                 * @param other the other media type
                 * @param charset the character set
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(other: org.springframework.http.MediaType, charset: java.nio.charset.Charset)
                /**
                 * Copy-constructor that copies the type and subtype of the given {@code MediaType},
                 * and allows for different parameters.
                 * @param other the other media type
                 * @param parameters the parameters, may be {#code null}
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(other: org.springframework.http.MediaType, parameters: java.util.Map<java.lang.String, java.lang.String>)
                /**
                 * Create a new {@code MediaType} for the given type, subtype, and parameters.
                 * @param type the primary type
                 * @param subtype the subtype
                 * @param parameters the parameters, may be {#code null}
                 * @throws IllegalArgumentException if any of the parameters contain illegal characters
                 */
                // @ts-ignore
                constructor(type: string, subtype: string, parameters: java.util.Map<java.lang.String, java.lang.String>)
                /**
                 * Public constant media type that includes all media ranges (i.e. "&#42;/&#42;").
                 */
                // @ts-ignore
                readonly ALL: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#ALL}.
                 */
                // @ts-ignore
                readonly ALL_VALUE: string
                /**
                 * Public constant media type for {@code application/atom+xml}.
                 */
                // @ts-ignore
                readonly APPLICATION_ATOM_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_ATOM_XML}.
                 */
                // @ts-ignore
                readonly APPLICATION_ATOM_XML_VALUE: string
                /**
                 * Public constant media type for {@code application/cbor}.
                 * @since 5.2
                 */
                // @ts-ignore
                readonly APPLICATION_CBOR: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_CBOR}.
                 * @since 5.2
                 */
                // @ts-ignore
                readonly APPLICATION_CBOR_VALUE: string
                /**
                 * Public constant media type for {@code application/x-www-form-urlencoded}.
                 */
                // @ts-ignore
                readonly APPLICATION_FORM_URLENCODED: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_FORM_URLENCODED}.
                 */
                // @ts-ignore
                readonly APPLICATION_FORM_URLENCODED_VALUE: string
                /**
                 * Public constant media type for {@code application/json}.
                 */
                // @ts-ignore
                readonly APPLICATION_JSON: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_JSON}.
                 * @see #APPLICATION_JSON_UTF8_VALUE
                 */
                // @ts-ignore
                readonly APPLICATION_JSON_VALUE: string
                /**
                 * Public constant media type for {@code application/json;charset=UTF-8}.
                 * @deprecated as of 5.2 in favor of {#link #APPLICATION_JSON}
                 *  since major browsers like Chrome
                 *  <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=438464">
                 *  now comply with the specification</a> and interpret correctly UTF-8 special
                 *  characters without requiring a {@code charset=UTF-8} parameter.
                 */
                // @ts-ignore
                readonly APPLICATION_JSON_UTF8: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_JSON_UTF8}.
                 * @deprecated as of 5.2 in favor of {#link #APPLICATION_JSON_VALUE}
                 *  since major browsers like Chrome
                 *  <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=438464">
                 *  now comply with the specification</a> and interpret correctly UTF-8 special
                 *  characters without requiring a {@code charset=UTF-8} parameter.
                 */
                // @ts-ignore
                readonly APPLICATION_JSON_UTF8_VALUE: string
                /**
                 * Public constant media type for {@code application/octet-stream}.
                 */
                // @ts-ignore
                readonly APPLICATION_OCTET_STREAM: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_OCTET_STREAM}.
                 */
                // @ts-ignore
                readonly APPLICATION_OCTET_STREAM_VALUE: string
                /**
                 * Public constant media type for {@code application/pdf}.
                 * @since 4.3
                 */
                // @ts-ignore
                readonly APPLICATION_PDF: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_PDF}.
                 * @since 4.3
                 */
                // @ts-ignore
                readonly APPLICATION_PDF_VALUE: string
                /**
                 * Public constant media type for {@code application/problem+json}.
                 * @since 5.0
                 * @see <a href="https://tools.ietf.org/html/rfc7807#section-6.1">
                 *      Problem Details for HTTP APIs, 6.1. application/problem+json</a>
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_JSON: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_PROBLEM_JSON}.
                 * @since 5.0
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_JSON_VALUE: string
                /**
                 * Public constant media type for {@code application/problem+json}.
                 * @since 5.0
                 * @see <a href="https://tools.ietf.org/html/rfc7807#section-6.1">
                 *      Problem Details for HTTP APIs, 6.1. application/problem+json</a>
                 * @deprecated as of 5.2 in favor of {#link #APPLICATION_PROBLEM_JSON}
                 *  since major browsers like Chrome
                 *  <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=438464">
                 *  now comply with the specification</a> and interpret correctly UTF-8 special
                 *  characters without requiring a {@code charset=UTF-8} parameter.
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_JSON_UTF8: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_PROBLEM_JSON_UTF8}.
                 * @since 5.0
                 * @deprecated as of 5.2 in favor of {#link #APPLICATION_PROBLEM_JSON_VALUE}
                 *  since major browsers like Chrome
                 *  <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=438464">
                 *  now comply with the specification</a> and interpret correctly UTF-8 special
                 *  characters without requiring a {@code charset=UTF-8} parameter.
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_JSON_UTF8_VALUE: string
                /**
                 * Public constant media type for {@code application/problem+xml}.
                 * @since 5.0
                 * @see <a href="https://tools.ietf.org/html/rfc7807#section-6.2">
                 *      Problem Details for HTTP APIs, 6.2. application/problem+xml</a>
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_PROBLEM_XML}.
                 * @since 5.0
                 */
                // @ts-ignore
                readonly APPLICATION_PROBLEM_XML_VALUE: string
                /**
                 * Public constant media type for {@code application/rss+xml}.
                 * @since 4.3.6
                 */
                // @ts-ignore
                readonly APPLICATION_RSS_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_RSS_XML}.
                 * @since 4.3.6
                 */
                // @ts-ignore
                readonly APPLICATION_RSS_XML_VALUE: string
                /**
                 * Public constant media type for {@code application/stream+json}.
                 * @since 5.0
                 */
                // @ts-ignore
                readonly APPLICATION_STREAM_JSON: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_STREAM_JSON}.
                 * @since 5.0
                 */
                // @ts-ignore
                readonly APPLICATION_STREAM_JSON_VALUE: string
                /**
                 * Public constant media type for {@code application/xhtml+xml}.
                 */
                // @ts-ignore
                readonly APPLICATION_XHTML_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_XHTML_XML}.
                 */
                // @ts-ignore
                readonly APPLICATION_XHTML_XML_VALUE: string
                /**
                 * Public constant media type for {@code application/xml}.
                 */
                // @ts-ignore
                readonly APPLICATION_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#APPLICATION_XML}.
                 */
                // @ts-ignore
                readonly APPLICATION_XML_VALUE: string
                /**
                 * Public constant media type for {@code image/gif}.
                 */
                // @ts-ignore
                readonly IMAGE_GIF: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#IMAGE_GIF}.
                 */
                // @ts-ignore
                readonly IMAGE_GIF_VALUE: string
                /**
                 * Public constant media type for {@code image/jpeg}.
                 */
                // @ts-ignore
                readonly IMAGE_JPEG: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#IMAGE_JPEG}.
                 */
                // @ts-ignore
                readonly IMAGE_JPEG_VALUE: string
                /**
                 * Public constant media type for {@code image/png}.
                 */
                // @ts-ignore
                readonly IMAGE_PNG: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#IMAGE_PNG}.
                 */
                // @ts-ignore
                readonly IMAGE_PNG_VALUE: string
                /**
                 * Public constant media type for {@code multipart/form-data}.
                 */
                // @ts-ignore
                readonly MULTIPART_FORM_DATA: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#MULTIPART_FORM_DATA}.
                 */
                // @ts-ignore
                readonly MULTIPART_FORM_DATA_VALUE: string
                /**
                 * Public constant media type for {@code multipart/mixed}.
                 * @since 5.2
                 */
                // @ts-ignore
                readonly MULTIPART_MIXED: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#MULTIPART_MIXED}.
                 * @since 5.2
                 */
                // @ts-ignore
                readonly MULTIPART_MIXED_VALUE: string
                /**
                 * Public constant media type for {@code multipart/related}.
                 * @since 5.2.5
                 */
                // @ts-ignore
                readonly MULTIPART_RELATED: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#MULTIPART_RELATED}.
                 * @since 5.2.5
                 */
                // @ts-ignore
                readonly MULTIPART_RELATED_VALUE: string
                /**
                 * Public constant media type for {@code text/event-stream}.
                 * @since 4.3.6
                 * @see <a href="https://www.w3.org/TR/eventsource/">Server-Sent Events W3C recommendation</a>
                 */
                // @ts-ignore
                readonly TEXT_EVENT_STREAM: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#TEXT_EVENT_STREAM}.
                 * @since 4.3.6
                 */
                // @ts-ignore
                readonly TEXT_EVENT_STREAM_VALUE: string
                /**
                 * Public constant media type for {@code text/html}.
                 */
                // @ts-ignore
                readonly TEXT_HTML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#TEXT_HTML}.
                 */
                // @ts-ignore
                readonly TEXT_HTML_VALUE: string
                /**
                 * Public constant media type for {@code text/markdown}.
                 * @since 4.3
                 */
                // @ts-ignore
                readonly TEXT_MARKDOWN: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#TEXT_MARKDOWN}.
                 * @since 4.3
                 */
                // @ts-ignore
                readonly TEXT_MARKDOWN_VALUE: string
                /**
                 * Public constant media type for {@code text/plain}.
                 */
                // @ts-ignore
                readonly TEXT_PLAIN: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#TEXT_PLAIN}.
                 */
                // @ts-ignore
                readonly TEXT_PLAIN_VALUE: string
                /**
                 * Public constant media type for {@code text/xml}.
                 */
                // @ts-ignore
                readonly TEXT_XML: org.springframework.http.MediaType
                /**
                 * A String equivalent of {@link MediaType#TEXT_XML}.
                 */
                // @ts-ignore
                readonly TEXT_XML_VALUE: string
                /**
                 * Comparator used by {@link #sortByQualityValue(List)}.
                 */
                // @ts-ignore
                readonly QUALITY_VALUE_COMPARATOR: java.util.Comparator<org.springframework.http.MediaType>
                /**
                 * Comparator used by {@link #sortBySpecificity(List)}.
                 */
                // @ts-ignore
                readonly SPECIFICITY_COMPARATOR: java.util.Comparator<org.springframework.http.MediaType>
                // @ts-ignore
                checkParameters(attribute: string, value: string): void
                /**
                 * Return the quality factor, as indicated by a {@code q} parameter, if any.
                 * Defaults to {@code 1.0}.
                 * @return the quality factor as double value
                 */
                // @ts-ignore
                getQualityValue(): double
                /**
                 * Indicate whether this {@code MediaType} includes the given media type.
                 * <p>For instance, {@code text/*} includes {@code text/plain} and {@code text/html},
                 * and {@code application/*+xml} includes {@code application/soap+xml}, etc.
                 * This method is <b>not</b> symmetric.
                 * <p>Simply calls {@link MimeType#includes(MimeType)} but declared with a
                 * {@code MediaType} parameter for binary backwards compatibility.
                 * @param other the reference media type with which to compare
                 * @return {#code true} if this media type includes the given media type;
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                includes(other: org.springframework.http.MediaType): boolean
                /**
                 * Indicate whether this {@code MediaType} is compatible with the given media type.
                 * <p>For instance, {@code text/*} is compatible with {@code text/plain},
                 * {@code text/html}, and vice versa. In effect, this method is similar to
                 * {@link #includes}, except that it <b>is</b> symmetric.
                 * <p>Simply calls {@link MimeType#isCompatibleWith(MimeType)} but declared with a
                 * {@code MediaType} parameter for binary backwards compatibility.
                 * @param other the reference media type with which to compare
                 * @return {#code true} if this media type is compatible with the given media type;
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                isCompatibleWith(other: org.springframework.http.MediaType): boolean
                /**
                 * Return a replica of this instance with the quality value of the given {@code MediaType}.
                 * @return the same instance if the given MediaType doesn't have a quality value,
                 *  or a new one otherwise
                 */
                // @ts-ignore
                copyQualityValue(mediaType: org.springframework.http.MediaType): org.springframework.http.MediaType
                /**
                 * Return a replica of this instance with its quality value removed.
                 * @return the same instance if the media type doesn't contain a quality value,
                 *  or a new one otherwise
                 */
                // @ts-ignore
                removeQualityValue(): org.springframework.http.MediaType
                /**
                 * Parse the given String value into a {@code MediaType} object,
                 * with this method name following the 'valueOf' naming convention
                 * (as supported by {@link org.springframework.core.convert.ConversionService}.
                 * @param value the string to parse
                 * @throws InvalidMediaTypeException if the media type value cannot be parsed
                 * @see #parseMediaType(String)
                 */
                // @ts-ignore
                valueOf(value: string): org.springframework.http.MediaType
                /**
                 * Parse the given String into a single {@code MediaType}.
                 * @param mediaType the string to parse
                 * @return the media type
                 * @throws InvalidMediaTypeException if the media type value cannot be parsed
                 */
                // @ts-ignore
                parseMediaType(mediaType: string): org.springframework.http.MediaType
                /**
                 * Parse the comma-separated string into a list of {@code MediaType} objects.
                 * <p>This method can be used to parse an Accept or Content-Type header.
                 * @param mediaTypes the string to parse
                 * @return the list of media types
                 * @throws InvalidMediaTypeException if the media type value cannot be parsed
                 */
                // @ts-ignore
                parseMediaTypes(mediaTypes: string): java.util.List<org.springframework.http.MediaType>
                /**
                 * Parse the given list of (potentially) comma-separated strings into a
                 * list of {@code MediaType} objects.
                 * <p>This method can be used to parse an Accept or Content-Type header.
                 * @param mediaTypes the string to parse
                 * @return the list of media types
                 * @throws InvalidMediaTypeException if the media type value cannot be parsed
                 * @since 4.3.2
                 */
                // @ts-ignore
                parseMediaTypes(mediaTypes: Array<java.lang.String>): java.util.List<org.springframework.http.MediaType>
                /**
                 * Re-create the given mime types as media types.
                 * @since 5.0
                 */
                // @ts-ignore
                asMediaTypes(mimeTypes: Array<MimeType>): java.util.List<org.springframework.http.MediaType>
                /**
                 * Re-create the given mime type as a media type.
                 * @since 5.0
                 */
                // @ts-ignore
                asMediaType(mimeType: MimeType): org.springframework.http.MediaType
                /**
                 * Return a string representation of the given list of {@code MediaType} objects.
                 * <p>This method can be used to for an {@code Accept} or {@code Content-Type} header.
                 * @param mediaTypes the media types to create a string representation for
                 * @return the string representation
                 */
                // @ts-ignore
                toString(mediaTypes: Array<org.springframework.http.MediaType>): java.lang.String
                /**
                 * Sorts the given list of {@code MediaType} objects by specificity.
                 * <p>Given two media types:
                 * <ol>
                 * <li>if either media type has a {@linkplain #isWildcardType() wildcard type}, then the media type without the
                 * wildcard is ordered before the other.</li>
                 * <li>if the two media types have different {@linkplain #getType() types}, then they are considered equal and
                 * remain their current order.</li>
                 * <li>if either media type has a {@linkplain #isWildcardSubtype() wildcard subtype}, then the media type without
                 * the wildcard is sorted before the other.</li>
                 * <li>if the two media types have different {@linkplain #getSubtype() subtypes}, then they are considered equal
                 * and remain their current order.</li>
                 * <li>if the two media types have different {@linkplain #getQualityValue() quality value}, then the media type
                 * with the highest quality value is ordered before the other.</li>
                 * <li>if the two media types have a different amount of {@linkplain #getParameter(String) parameters}, then the
                 * media type with the most parameters is ordered before the other.</li>
                 * </ol>
                 * <p>For example:
                 * <blockquote>audio/basic &lt; audio/* &lt; *&#047;*</blockquote>
                 * <blockquote>audio/* &lt; audio/*;q=0.7; audio/*;q=0.3</blockquote>
                 * <blockquote>audio/basic;level=1 &lt; audio/basic</blockquote>
                 * <blockquote>audio/basic == text/html</blockquote>
                 * <blockquote>audio/basic == audio/wave</blockquote>
                 * @param mediaTypes the list of media types to be sorted
                 * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">HTTP 1.1: Semantics
                 *  and Content, section 5.3.2</a>
                 */
                // @ts-ignore
                sortBySpecificity(mediaTypes: Array<org.springframework.http.MediaType>): void
                /**
                 * Sorts the given list of {@code MediaType} objects by quality value.
                 * <p>Given two media types:
                 * <ol>
                 * <li>if the two media types have different {@linkplain #getQualityValue() quality value}, then the media type
                 * with the highest quality value is ordered before the other.</li>
                 * <li>if either media type has a {@linkplain #isWildcardType() wildcard type}, then the media type without the
                 * wildcard is ordered before the other.</li>
                 * <li>if the two media types have different {@linkplain #getType() types}, then they are considered equal and
                 * remain their current order.</li>
                 * <li>if either media type has a {@linkplain #isWildcardSubtype() wildcard subtype}, then the media type without
                 * the wildcard is sorted before the other.</li>
                 * <li>if the two media types have different {@linkplain #getSubtype() subtypes}, then they are considered equal
                 * and remain their current order.</li>
                 * <li>if the two media types have a different amount of {@linkplain #getParameter(String) parameters}, then the
                 * media type with the most parameters is ordered before the other.</li>
                 * </ol>
                 * @param mediaTypes the list of media types to be sorted
                 * @see #getQualityValue()
                 */
                // @ts-ignore
                sortByQualityValue(mediaTypes: Array<org.springframework.http.MediaType>): void
                /**
                 * Sorts the given list of {@code MediaType} objects by specificity as the
                 * primary criteria and quality value the secondary.
                 * @see MediaType#sortBySpecificity(List)
                 * @see MediaType#sortByQualityValue(List)
                 */
                // @ts-ignore
                sortBySpecificityAndQuality(mediaTypes: Array<org.springframework.http.MediaType>): void
            }
        }
    }
}
