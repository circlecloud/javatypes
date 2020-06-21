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
                    class MultipartHttpMessageReader extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageReader<object> {
                        // @ts-ignore
                        constructor(partReader: org.springframework.http.codec.HttpMessageReader<org.springframework.http.codec.multipart.Part>)
                        /**
                         * Return the configured parts reader.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        public getPartReader(): org.springframework.http.codec.HttpMessageReader<org.springframework.http.codec.multipart.Part>
                        // @ts-ignore
                        public getReadableMediaTypes(): Array<org.springframework.http.MediaType>
                        // @ts-ignore
                        public canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        public read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                        // @ts-ignore
                        public readMono(elementType: ResolvableType, inputMessage: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    }
                }
            }
        }
    }
}
