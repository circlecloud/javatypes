declare namespace org {
    namespace springframework {
        namespace http {
            namespace RequestEntity {
                /**
                 * Defines a builder that adds a body to the response entity.
                 */
                // @ts-ignore
                interface BodyBuilder extends org.springframework.http.RequestEntity.HeadersBuilder<org.springframework.http.RequestEntity.BodyBuilder> {
                    /**
                     * Set the length of the body in bytes, as specified by the
                     * {@code Content-Length} header.
                     * @param contentLength the content length
                     * @return this builder
                     * @see HttpHeaders#setContentLength(long)
                     */
                    // @ts-ignore
                    contentLength(contentLength: number /*long*/): org.springframework.http.RequestEntity.BodyBuilder
                    /**
                     * Set the {@linkplain MediaType media type} of the body, as specified
                     * by the {@code Content-Type} header.
                     * @param contentType the content type
                     * @return this builder
                     * @see HttpHeaders#setContentType(MediaType)
                     */
                    // @ts-ignore
                    contentType(contentType: org.springframework.http.MediaType): org.springframework.http.RequestEntity.BodyBuilder
                    /**
                     * Set the body of the request entity and build the RequestEntity.
                     * @param <T> the type of the body
                     * @param body the body of the request entity
                     * @return the built request entity
                     */
                    // @ts-ignore
                    body<T>(body: T): org.springframework.http.RequestEntity<T>
                    /**
                     * Set the body and type of the request entity and build the RequestEntity.
                     * @param <T> the type of the body
                     * @param body the body of the request entity
                     * @param type the type of the body, useful for generic type resolution
                     * @return the built request entity
                     * @since 4.3
                     */
                    // @ts-ignore
                    body<T>(body: T, type: java.lang.reflect.Type): org.springframework.http.RequestEntity<T>
                }
            }
        }
    }
}
