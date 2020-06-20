declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * {@code HttpMessageReader} for reading {@code "multipart/form-data"} requests
                     * into a {@code MultiValueMap<String, Part>}.
                     * <p>Note that this reader depends on access to an
                     * {@code HttpMessageReader<Part>} for the actual parsing of multipart content.
                     * The purpose of this reader is to collect the parts into a map.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class MultipartHttpMessageReader extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageReader<<any>> {
                        // @ts-ignore
                        constructor(partReader: org.springframework.http.codec.HttpMessageReader<org.springframework.http.codec.multipart.Part>)
                        /**
                         * Return the configured parts reader.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getPartReader(): org.springframework.http.codec.HttpMessageReader<org.springframework.http.codec.multipart.Part>
                        // @ts-ignore
                        getReadableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                        // @ts-ignore
                        canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        readMono(elementType: ResolvableType, inputMessage: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    }
                }
            }
        }
    }
}
