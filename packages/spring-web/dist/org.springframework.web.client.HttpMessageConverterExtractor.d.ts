declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Response extractor that uses the given {@linkplain HttpMessageConverter entity converters}
                 * to convert the response into a type {@code T}.
                 * @author Arjen Poutsma
                 * @author Sam Brannen
                 * @since 3.0
                 * @param <T> the data type
                 * @see RestTemplate
                 */
                // @ts-ignore
                class HttpMessageConverterExtractor<T> extends java.lang.Object implements org.springframework.web.client.ResponseExtractor<T> {
                    /**
                     * Create a new instance of the {@code HttpMessageConverterExtractor} with the given response
                     * type and message converters. The given converters must support the response type.
                     */
                    // @ts-ignore
                    constructor(responseType: java.lang.Class<T>, messageConverters: Array<org.springframework.http.converter.HttpMessageConverter<any>>)
                    /**
                     * Creates a new instance of the {@code HttpMessageConverterExtractor} with the given response
                     * type and message converters. The given converters must support the response type.
                     */
                    // @ts-ignore
                    constructor(responseType: java.lang.reflect.Type, messageConverters: Array<org.springframework.http.converter.HttpMessageConverter<any>>)
                    // @ts-ignore
                    extractData(response: org.springframework.http.client.ClientHttpResponse): T
                    /**
                     * Determine the Content-Type of the response based on the "Content-Type"
                     * header or otherwise default to {@link MediaType#APPLICATION_OCTET_STREAM}.
                     * @param response the response
                     * @return the MediaType, possibly {#code null}.
                     */
                    // @ts-ignore
                    getContentType(response: org.springframework.http.client.ClientHttpResponse): org.springframework.http.MediaType
                }
            }
        }
    }
}
