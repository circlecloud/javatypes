declare namespace org {
    namespace springframework {
        namespace http {
            namespace ContentDisposition {
                /**
                 * A mutable builder for {@code ContentDisposition}.
                 */
                // @ts-ignore
                interface Builder {
                    /**
                     * Set the value of the {@literal name} parameter.
                     */
                    // @ts-ignore
                    name(name: java.lang.String | string): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal filename} parameter. The given
                     * filename will be formatted as quoted-string, as defined in RFC 2616,
                     * section 2.2, and any quote characters within the filename value will
                     * be escaped with a backslash, e.g. {@code "foo\"bar.txt"} becomes
                     * {@code "foo\\\"bar.txt"}.
                     */
                    // @ts-ignore
                    filename(filename: java.lang.String | string): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal filename*} that will be encoded as
                     * defined in the RFC 5987. Only the US-ASCII, UTF-8 and ISO-8859-1
                     * charsets are supported.
                     * <p><strong>Note:</strong> Do not use this for a
                     * {@code "multipart/form-data"} requests as per
                     * <a link="https://tools.ietf.org/html/rfc7578#section-4.2">RFC 7578, Section 4.2</a>
                     * and also RFC 5987 itself mentions it does not apply to multipart
                     * requests.
                     */
                    // @ts-ignore
                    filename(filename: java.lang.String | string, charset: java.nio.charset.Charset): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal size} parameter.
                     * @deprecated since 5.2.3 as per
                     *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                     *  to be removed in a future release.
                     */
                    // @ts-ignore
                    size(size: java.lang.Long | number): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal creation-date} parameter.
                     * @deprecated since 5.2.3 as per
                     *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                     *  to be removed in a future release.
                     */
                    // @ts-ignore
                    creationDate(creationDate: java.time.ZonedDateTime): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal modification-date} parameter.
                     * @deprecated since 5.2.3 as per
                     *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                     *  to be removed in a future release.
                     */
                    // @ts-ignore
                    modificationDate(modificationDate: java.time.ZonedDateTime): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Set the value of the {@literal read-date} parameter.
                     * @deprecated since 5.2.3 as per
                     *  <a href="https://tools.ietf.org/html/rfc6266#appendix-B">RFC 6266, Apendix B</a>,
                     *  to be removed in a future release.
                     */
                    // @ts-ignore
                    readDate(readDate: java.time.ZonedDateTime): org.springframework.http.ContentDisposition.Builder
                    /**
                     * Build the content disposition.
                     */
                    // @ts-ignore
                    build(): org.springframework.http.ContentDisposition
                }
            }
        }
    }
}
