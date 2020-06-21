declare namespace org {
    namespace springframework {
        namespace http {
            namespace ResponseEntity {
                /**
                 * Defines a builder that adds headers to the response entity.
                 * @since 4.1
                 * @param <B> the builder subclass
                 */
                // @ts-ignore
                interface HeadersBuilder<B extends org.springframework.http.ResponseEntity.HeadersBuilder<B>> {
                    /**
                     * Add the given, single header value under the given name.
                     * @param headerName the header name
                     * @param headerValues the header value(s)
                     * @return this builder
                     * @see HttpHeaders#add(String, String)
                     */
                    // @ts-ignore
                    header(headerName: java.lang.String | string, ...headerValues: java.lang.String[] | string[]): B
                    /**
                     * Copy the given headers into the entity's headers map.
                     * @param headers the existing HttpHeaders to copy from
                     * @return this builder
                     * @since 4.1.2
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
                    headers(headersConsumer: java.util.function$.Consumer<org.springframework.http.HttpHeaders>): B
                    /**
                     * Set the set of allowed {@link HttpMethod HTTP methods}, as specified
                     * by the {@code Allow} header.
                     * @param allowedMethods the allowed methods
                     * @return this builder
                     * @see HttpHeaders#setAllow(Set)
                     */
                    // @ts-ignore
                    allow(...allowedMethods: org.springframework.http.HttpMethod[]): B
                    /**
                     * Set the entity tag of the body, as specified by the {@code ETag} header.
                     * @param etag the new entity tag
                     * @return this builder
                     * @see HttpHeaders#setETag(String)
                     */
                    // @ts-ignore
                    eTag(etag: java.lang.String | string): B
                    /**
                     * Set the time the resource was last changed, as specified by the
                     * {@code Last-Modified} header.
                     * @param lastModified the last modified date
                     * @return this builder
                     * @since 5.1.4
                     * @see HttpHeaders#setLastModified(ZonedDateTime)
                     */
                    // @ts-ignore
                    lastModified(lastModified: java.time.ZonedDateTime): B
                    /**
                     * Set the time the resource was last changed, as specified by the
                     * {@code Last-Modified} header.
                     * @param lastModified the last modified date
                     * @return this builder
                     * @since 5.1.4
                     * @see HttpHeaders#setLastModified(Instant)
                     */
                    // @ts-ignore
                    lastModified(lastModified: java.time.Instant): B
                    /**
                     * Set the time the resource was last changed, as specified by the
                     * {@code Last-Modified} header.
                     * <p>The date should be specified as the number of milliseconds since
                     * January 1, 1970 GMT.
                     * @param lastModified the last modified date
                     * @return this builder
                     * @see HttpHeaders#setLastModified(long)
                     */
                    // @ts-ignore
                    lastModified(lastModified: number /*long*/): B
                    /**
                     * Set the location of a resource, as specified by the {@code Location} header.
                     * @param location the location
                     * @return this builder
                     * @see HttpHeaders#setLocation(URI)
                     */
                    // @ts-ignore
                    location(location: java.net.URI): B
                    /**
                     * Set the caching directives for the resource, as specified by the HTTP 1.1
                     * {@code Cache-Control} header.
                     * <p>A {@code CacheControl} instance can be built like
                     * {@code CacheControl.maxAge(3600).cachePublic().noTransform()}.
                     * @param cacheControl a builder for cache-related HTTP response headers
                     * @return this builder
                     * @since 4.2
                     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">RFC-7234 Section 5.2</a>
                     */
                    // @ts-ignore
                    cacheControl(cacheControl: org.springframework.http.CacheControl): B
                    /**
                     * Configure one or more request header names (e.g. "Accept-Language") to
                     * add to the "Vary" response header to inform clients that the response is
                     * subject to content negotiation and variances based on the value of the
                     * given request headers. The configured request header names are added only
                     * if not already present in the response "Vary" header.
                     * @param requestHeaders request header names
                     * @since 4.3
                     */
                    // @ts-ignore
                    varyBy(...requestHeaders: java.lang.String[] | string[]): B
                    /**
                     * Build the response entity with no body.
                     * @return the response entity
                     * @see BodyBuilder#body(Object)
                     */
                    // @ts-ignore
                    build<T>(): org.springframework.http.ResponseEntity<T>
                }
            }
        }
    }
}
