declare namespace org {
    namespace springframework {
        namespace http {
            namespace RequestEntity {
                /**
                 * Defines a builder that adds headers to the request entity.
                 * @param <B> the builder subclass
                 */
                // @ts-ignore
                interface HeadersBuilder<B extends org.springframework.http.RequestEntity.HeadersBuilder<B>> {
                    /**
                     * Add the given, single header value under the given name.
                     * @param headerName  the header name
                     * @param headerValues the header value(s)
                     * @return this builder
                     * @see HttpHeaders#add(String, String)
                     */
                    // @ts-ignore
                    header(headerName: string, ...headerValues: string[]): B
                    /**
                     * Copy the given headers into the entity's headers map.
                     * @param headers the existing HttpHeaders to copy from
                     * @return this builder
                     * @since 5.2
                     * @see HttpHeaders#add(String, String)
                     */
                    // @ts-ignore
                    headers(headers: org.springframework.http.HttpHeaders): B
                    /**
                     * Manipulate this entity's headers with the given consumer. The
                     * headers provided to the consumer are "live", so that the consumer can be used to
                     * {@linkplain HttpHeaders#set(String, String) overwrite} existing header values,
                     * {@linkplain HttpHeaders#remove(Object) remove} values, or use any of the other
                     * {@link HttpHeaders} methods.
                     * @param headersConsumer a function that consumes the {#code HttpHeaders}
                     * @return this builder
                     * @since 5.2
                     */
                    // @ts-ignore
                    headers(headersConsumer: java.util.function.Consumer<org.springframework.http.HttpHeaders> | java.util.function$.Consumer<org.springframework.http.HttpHeaders>): B
                    /**
                     * Set the list of acceptable {@linkplain MediaType media types}, as
                     * specified by the {@code Accept} header.
                     * @param acceptableMediaTypes the acceptable media types
                     */
                    // @ts-ignore
                    accept(...acceptableMediaTypes: org.springframework.http.MediaType[]): B
                    /**
                     * Set the list of acceptable {@linkplain Charset charsets}, as specified
                     * by the {@code Accept-Charset} header.
                     * @param acceptableCharsets the acceptable charsets
                     */
                    // @ts-ignore
                    acceptCharset(...acceptableCharsets: java.nio.charset.Charset[]): B
                    /**
                     * Set the value of the {@code If-Modified-Since} header.
                     * @param ifModifiedSince the new value of the header
                     * @since 5.1.4
                     */
                    // @ts-ignore
                    ifModifiedSince(ifModifiedSince: java.time.ZonedDateTime): B
                    /**
                     * Set the value of the {@code If-Modified-Since} header.
                     * @param ifModifiedSince the new value of the header
                     * @since 5.1.4
                     */
                    // @ts-ignore
                    ifModifiedSince(ifModifiedSince: java.time.Instant): B
                    /**
                     * Set the value of the {@code If-Modified-Since} header.
                     * <p>The date should be specified as the number of milliseconds since
                     * January 1, 1970 GMT.
                     * @param ifModifiedSince the new value of the header
                     */
                    // @ts-ignore
                    ifModifiedSince(ifModifiedSince: number /*long*/): B
                    /**
                     * Set the values of the {@code If-None-Match} header.
                     * @param ifNoneMatches the new value of the header
                     */
                    // @ts-ignore
                    ifNoneMatch(...ifNoneMatches: string[]): B
                    /**
                     * Builds the request entity with no body.
                     * @return the request entity
                     * @see BodyBuilder#body(Object)
                     */
                    // @ts-ignore
                    build(): org.springframework.http.RequestEntity<java.lang.Void>
                }
            }
        }
    }
}
