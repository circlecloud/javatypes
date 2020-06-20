declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * {@link HttpMessageWriter} for writing a {@code MultiValueMap<String, ?>}
                     * as multipart form data, i.e. {@code "multipart/form-data"}, to the body
                     * of a request.
                     * <p>The serialization of individual parts is delegated to other writers.
                     * By default only {@link String} and {@link Resource} parts are supported but
                     * you can configure others through a constructor argument.
                     * <p>This writer can be configured with a {@link FormHttpMessageWriter} to
                     * delegate to. It is the preferred way of supporting both form data and
                     * multipart data (as opposed to registering each writer separately) so that
                     * when the {@link MediaType} is not specified and generics are not present on
                     * the target element type, we can inspect the values in the actual map and
                     * decide whether to write plain form data (String values only) or otherwise.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see FormHttpMessageWriter
                     */
                    // @ts-ignore
                    class MultipartHttpMessageWriter extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageWriter<<any>> {
                        /**
                         * Constructor with a default list of part writers (String and Resource).
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with explicit list of writers for serializing parts.
                         */
                        // @ts-ignore
                        constructor(partWriters: Array<org.springframework.http.codec.HttpMessageWriter<any>>)
                        /**
                         * Constructor with explicit list of writers for serializing parts and a
                         * writer for plain form data to fall back when no media type is specified
                         * and the actual map consists of String values only.
                         * @param partWriters the writers for serializing parts
                         * @param formWriter the fallback writer for form data, {#code null} by default
                         */
                        // @ts-ignore
                        constructor(partWriters: Array<org.springframework.http.codec.HttpMessageWriter<any>>, formWriter: org.springframework.http.codec.HttpMessageWriter<<any>>)
                        /**
                         * THe default charset used by the writer.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        /**
                         * Return the configured part writers.
                         * @since 5.0.7
                         */
                        // @ts-ignore
                        getPartWriters(): java.util.List<org.springframework.http.codec.HttpMessageWriter<?>>
                        /**
                         * Return the configured form writer.
                         * @since 5.1.13
                         */
                        // @ts-ignore
                        getFormWriter(): org.springframework.http.codec.HttpMessageWriter<<any>>
                        /**
                         * Set the character set to use for part headers such as
                         * "Content-Disposition" (and its filename parameter).
                         * <p>By default this is set to "UTF-8".
                         */
                        // @ts-ignore
                        setCharset(charset: java.nio.charset.Charset): void
                        /**
                         * Return the configured charset for part headers.
                         */
                        // @ts-ignore
                        getCharset(): java.nio.charset.Charset
                        // @ts-ignore
                        getWritableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                        // @ts-ignore
                        canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, outputMessage: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        /**
                         * Generate a multipart boundary.
                         * <p>By default delegates to {@link MimeTypeUtils#generateMultipartBoundary()}.
                         */
                        // @ts-ignore
                        generateMultipartBoundary(): byte[]
                    }
                }
            }
        }
    }
}
