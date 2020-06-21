declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Implementation of {@link ResponseErrorHandler} that uses {@link HttpMessageConverter
                 * HttpMessageConverters} to convert HTTP error responses to {@link RestClientException
                 * RestClientExceptions}.
                 * <p>To use this error handler, you must specify a
                 * {@linkplain #setStatusMapping(Map) status mapping} and/or a
                 * {@linkplain #setSeriesMapping(Map) series mapping}. If either of these mappings has a match
                 * for the {@linkplain ClientHttpResponse#getStatusCode() status code} of a given
                 * {@code ClientHttpResponse}, {@link #hasError(ClientHttpResponse)} will return
                 * {@code true}, and {@link #handleError(ClientHttpResponse)} will attempt to use the
                 * {@linkplain #setMessageConverters(List) configured message converters} to convert the response
                 * into the mapped subclass of {@link RestClientException}. Note that the
                 * {@linkplain #setStatusMapping(Map) status mapping} takes precedence over
                 * {@linkplain #setSeriesMapping(Map) series mapping}.
                 * <p>If there is no match, this error handler will default to the behavior of
                 * {@link DefaultResponseErrorHandler}. Note that you can override this default behavior
                 * by specifying a {@linkplain #setSeriesMapping(Map) series mapping} from
                 * {@code HttpStatus.Series#CLIENT_ERROR} and/or {@code HttpStatus.Series#SERVER_ERROR}
                 * to {@code null}.
                 * @author Simon Galperin
                 * @author Arjen Poutsma
                 * @since 5.0
                 * @see RestTemplate#setErrorHandler(ResponseErrorHandler)
                 */
                // @ts-ignore
                class ExtractingResponseErrorHandler extends org.springframework.web.client.DefaultResponseErrorHandler {
                    /**
                     * Create a new, empty {@code ExtractingResponseErrorHandler}.
                     * <p>Note that {@link #setMessageConverters(List)} must be called when using this constructor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code ExtractingResponseErrorHandler} with the given
                     * {@link HttpMessageConverter} instances.
                     * @param messageConverters the message converters to use
                     */
                    // @ts-ignore
                    constructor(messageConverters: java.util.List<org.springframework.http.converter.HttpMessageConverter<any>> | Array<org.springframework.http.converter.HttpMessageConverter<any>>)
                    /**
                     * Set the message converters to use by this extractor.
                     */
                    // @ts-ignore
                    public setMessageConverters(messageConverters: java.util.List<org.springframework.http.converter.HttpMessageConverter<any>> | Array<org.springframework.http.converter.HttpMessageConverter<any>>): void
                    /**
                     * Set the mapping from HTTP status code to {@code RestClientException} subclass.
                     * If this mapping has a match
                     * for the {@linkplain ClientHttpResponse#getStatusCode() status code} of a given
                     * {@code ClientHttpResponse}, {@link #hasError(ClientHttpResponse)} will return
                     * {@code true} and {@link #handleError(ClientHttpResponse)} will attempt to use the
                     * {@linkplain #setMessageConverters(List) configured message converters} to convert the
                     * response into the mapped subclass of {@link RestClientException}.
                     */
                    // @ts-ignore
                    public setStatusMapping(statusMapping: java.util.Map<org.springframework.http.HttpStatus, java.lang.Class<any>>): void
                    /**
                     * Set the mapping from HTTP status series to {@code RestClientException} subclass.
                     * If this mapping has a match
                     * for the {@linkplain ClientHttpResponse#getStatusCode() status code} of a given
                     * {@code ClientHttpResponse}, {@link #hasError(ClientHttpResponse)} will return
                     * {@code true} and {@link #handleError(ClientHttpResponse)} will attempt to use the
                     * {@linkplain #setMessageConverters(List) configured message converters} to convert the
                     * response into the mapped subclass of {@link RestClientException}.
                     */
                    // @ts-ignore
                    public setSeriesMapping(seriesMapping: java.util.Map<org.springframework.http.HttpStatus.Series, java.lang.Class<any>>): void
                    // @ts-ignore
                    hasError(statusCode: org.springframework.http.HttpStatus): boolean
                    // @ts-ignore
                    public handleError(response: org.springframework.http.client.ClientHttpResponse, statusCode: org.springframework.http.HttpStatus): void
                }
            }
        }
    }
}
