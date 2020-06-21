declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace MultipartBodyBuilder {
                    /**
                     * Builder that allows for further customization of part headers.
                     */
                    // @ts-ignore
                    interface PartBuilder {
                        /**
                         * Set the {@linkplain MediaType media type} of the part.
                         * @param contentType the content type
                         * @since 5.2
                         * @see HttpHeaders#setContentType(MediaType)
                         */
                        // @ts-ignore
                        contentType(contentType: org.springframework.http.MediaType): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                        /**
                         * Set the filename parameter for a file part. This should not be
                         * necessary with {@link org.springframework.core.io.Resource Resource}
                         * based parts that expose a filename but may be useful for
                         * {@link Publisher} parts.
                         * @param filename the filename to set on the Content-Disposition
                         * @since 5.2
                         */
                        // @ts-ignore
                        filename(filename: java.lang.String | string): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                        /**
                         * Add part header values.
                         * @param headerName the part header name
                         * @param headerValues the part header value(s)
                         * @return this builder
                         * @see HttpHeaders#addAll(String, List)
                         */
                        // @ts-ignore
                        header(headerName: java.lang.String | string, ...headerValues: java.lang.String[] | string[]): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                        /**
                         * Manipulate the part headers through the given consumer.
                         * @param headersConsumer consumer to manipulate the part headers with
                         * @return this builder
                         */
                        // @ts-ignore
                        headers(headersConsumer: java.util.function$.Consumer<org.springframework.http.HttpHeaders>): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                    }
                }
            }
        }
    }
}
