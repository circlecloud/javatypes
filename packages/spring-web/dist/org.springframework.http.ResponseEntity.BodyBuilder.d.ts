declare namespace org {
    namespace springframework {
        namespace http {
            namespace ResponseEntity {
                /**
                 * Defines a builder that adds a body to the response entity.
                 * @since 4.1
                 */
                // @ts-ignore
                interface BodyBuilder extends org.springframework.http.ResponseEntity.HeadersBuilder<org.springframework.http.ResponseEntity.BodyBuilder> {
                    /**
                     * Set the length of the body in bytes, as specified by the
                     * {@code Content-Length} header.
                     * @param contentLength the content length
                     * @return this builder
                     * @see HttpHeaders#setContentLength(long)
                     */
                    // @ts-ignore
                    contentLength(contentLength: number /*long*/): org.springframework.http.ResponseEntity.BodyBuilder
                    /**
                     * Set the {@linkplain MediaType media type} of the body, as specified by the
                     * {@code Content-Type} header.
                     * @param contentType the content type
                     * @return this builder
                     * @see HttpHeaders#setContentType(MediaType)
                     */
                    // @ts-ignore
                    contentType(contentType: org.springframework.http.MediaType): org.springframework.http.ResponseEntity.BodyBuilder
                    /**
                     * Set the body of the response entity and returns it.
                     * @param <T> the type of the body
                     * @param body the body of the response entity
                     * @return the built response entity
                     */
                    // @ts-ignore
                    body<T>(body: T): org.springframework.http.ResponseEntity<T>
                }
            }
        }
    }
}
