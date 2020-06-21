declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * <strong>Spring's central class for asynchronous client-side HTTP access.</strong>
                 * Exposes similar methods as {@link RestTemplate}, but returns {@link ListenableFuture}
                 * wrappers as opposed to concrete results.
                 * <p>The {@code AsyncRestTemplate} exposes a synchronous {@link RestTemplate} via the
                 * {@link #getRestOperations()} method and shares its {@linkplain #setErrorHandler error handler}
                 * and {@linkplain #setMessageConverters message converters} with that {@code RestTemplate}.
                 * <p><strong>Note:</strong> by default {@code AsyncRestTemplate} relies on
                 * standard JDK facilities to establish HTTP connections. You can switch to use
                 * a different HTTP library such as Apache HttpComponents, Netty, and OkHttp by
                 * using a constructor accepting an {@link org.springframework.http.client.AsyncClientHttpRequestFactory}.
                 * <p>For more information, please refer to the {@link RestTemplate} API documentation.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @see RestTemplate
                 * @deprecated as of Spring 5.0, in favor of {#link org.springframework.web.reactive.function.client.WebClient}
                 */
                // @ts-ignore
                class AsyncRestTemplate extends org.springframework.http.client.support.InterceptingAsyncHttpAccessor implements org.springframework.web.client.AsyncRestOperations {
                    /**
                     * Create a new instance of the {@code AsyncRestTemplate} using default settings.
                     * <p>This constructor uses a {@link SimpleClientHttpRequestFactory} in combination
                     * with a {@link SimpleAsyncTaskExecutor} for asynchronous execution.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@code AsyncRestTemplate} using the given
                     * {@link AsyncTaskExecutor}.
                     * <p>This constructor uses a {@link SimpleClientHttpRequestFactory} in combination
                     * with the given {@code AsyncTaskExecutor} for asynchronous execution.
                     */
                    // @ts-ignore
                    constructor(taskExecutor: AsyncListenableTaskExecutor)
                    /**
                     * Creates a new instance of the {@code AsyncRestTemplate} using the given
                     * asynchronous and synchronous request factories.
                     * @param asyncRequestFactory the asynchronous request factory
                     * @param syncRequestFactory the synchronous request factory
                     */
                    // @ts-ignore
                    constructor(asyncRequestFactory: org.springframework.http.client.AsyncClientHttpRequestFactory, syncRequestFactory: org.springframework.http.client.ClientHttpRequestFactory)
                    /**
                     * Create a new instance of the {@code AsyncRestTemplate} using the given
                     * {@link org.springframework.http.client.AsyncClientHttpRequestFactory} and synchronous {@link RestTemplate}.
                     * @param requestFactory the asynchronous request factory to use
                     * @param restTemplate the synchronous template to use
                     */
                    // @ts-ignore
                    constructor(requestFactory: org.springframework.http.client.AsyncClientHttpRequestFactory, restTemplate: org.springframework.web.client.RestTemplate)
                    /**
                     * Set the error handler.
                     * <p>By default, AsyncRestTemplate uses a
                     * {@link org.springframework.web.client.DefaultResponseErrorHandler}.
                     */
                    // @ts-ignore
                    public setErrorHandler(errorHandler: org.springframework.web.client.ResponseErrorHandler): void
                    /**
                     * Return the error handler.
                     */
                    // @ts-ignore
                    public getErrorHandler(): org.springframework.web.client.ResponseErrorHandler
                    /**
                     * Configure default URI variable values. This is a shortcut for:
                     * <pre class="code">
                     * DefaultUriTemplateHandler handler = new DefaultUriTemplateHandler();
                     * handler.setDefaultUriVariables(...);
                     * AsyncRestTemplate restTemplate = new AsyncRestTemplate();
                     * restTemplate.setUriTemplateHandler(handler);
                     * </pre>
                     * @param defaultUriVariables the default URI variable values
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setDefaultUriVariables(defaultUriVariables: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * This property has the same purpose as the corresponding property on the
                     * {@code RestTemplate}. For more details see
                     * {@link RestTemplate#setUriTemplateHandler}.
                     * @param handler the URI template handler to use
                     */
                    // @ts-ignore
                    public setUriTemplateHandler(handler: org.springframework.web.util.UriTemplateHandler): void
                    /**
                     * Return the configured URI template handler.
                     */
                    // @ts-ignore
                    public getUriTemplateHandler(): org.springframework.web.util.UriTemplateHandler
                    // @ts-ignore
                    public getRestOperations(): org.springframework.web.client.RestOperations
                    /**
                     * Set the message body converters to use.
                     * <p>These converters are used to convert from and to HTTP requests and responses.
                     */
                    // @ts-ignore
                    public setMessageConverters(messageConverters: java.util.List<org.springframework.http.converter.HttpMessageConverter<any>> | Array<org.springframework.http.converter.HttpMessageConverter<any>>): void
                    /**
                     * Return the message body converters.
                     */
                    // @ts-ignore
                    public getMessageConverters(): Array<org.springframework.http.converter.HttpMessageConverter<any>>
                    // @ts-ignore
                    public getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public getForEntity<T>(url: java.net.URI, responseType: java.lang.Class<T>): object
                    // @ts-ignore
                    public headForHeaders(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public headForHeaders(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public headForHeaders(url: java.net.URI): object
                    // @ts-ignore
                    public postForLocation(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, ...uriVars: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public postForLocation(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, uriVars: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public postForLocation(url: java.net.URI, request: org.springframework.http.HttpEntity<any>): object
                    // @ts-ignore
                    public postForEntity<T>(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public postForEntity<T>(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public postForEntity<T>(url: java.net.URI, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): object
                    // @ts-ignore
                    public put(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, ...uriVars: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public put(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, uriVars: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public put(url: java.net.URI, request: org.springframework.http.HttpEntity<any>): object
                    // @ts-ignore
                    public delete(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public delete(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public delete(url: java.net.URI): object
                    // @ts-ignore
                    public optionsForAllow(url: java.lang.String | string, ...uriVars: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public optionsForAllow(url: java.lang.String | string, uriVars: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public optionsForAllow(url: java.net.URI): object
                    // @ts-ignore
                    public exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): object
                    // @ts-ignore
                    public exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object): object
                    // @ts-ignore
                    public execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    // @ts-ignore
                    public execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    // @ts-ignore
                    public execute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): object
                    /**
                     * Execute the given method on the provided URI. The
                     * {@link org.springframework.http.client.ClientHttpRequest}
                     * is processed using the {@link RequestCallback}; the response with
                     * the {@link ResponseExtractor}.
                     * @param url the fully-expanded URL to connect to
                     * @param method the HTTP method to execute (GET, POST, etc.)
                     * @param requestCallback object that prepares the request (can be {#code null})
                     * @param responseExtractor object that extracts the return value from the response (can
                     *  be {#code null})
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    doExecute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): object
                    /**
                     * Returns a request callback implementation that prepares the request {@code Accept}
                     * headers based on the given response type and configured {@linkplain
                     * #getMessageConverters() message converters}.
                     */
                    // @ts-ignore
                    acceptHeaderRequestCallback<T>(responseType: java.lang.Class<T>): org.springframework.web.client.AsyncRequestCallback
                    /**
                     * Returns a request callback implementation that writes the given object to the
                     * request stream.
                     */
                    // @ts-ignore
                    httpEntityCallback<T>(requestBody: org.springframework.http.HttpEntity<T>): org.springframework.web.client.AsyncRequestCallback
                    /**
                     * Returns a request callback implementation that writes the given object to the
                     * request stream.
                     */
                    // @ts-ignore
                    httpEntityCallback<T>(request: org.springframework.http.HttpEntity<T>, responseType: java.lang.reflect.Type): org.springframework.web.client.AsyncRequestCallback
                    /**
                     * Returns a response extractor for {@link ResponseEntity}.
                     */
                    // @ts-ignore
                    responseEntityExtractor<T>(responseType: java.lang.reflect.Type): org.springframework.web.client.ResponseExtractor<org.springframework.http.ResponseEntity<T>>
                    /**
                     * Returns a response extractor for {@link HttpHeaders}.
                     */
                    // @ts-ignore
                    headersExtractor(): org.springframework.web.client.ResponseExtractor<org.springframework.http.HttpHeaders>
                }
            }
        }
    }
}
