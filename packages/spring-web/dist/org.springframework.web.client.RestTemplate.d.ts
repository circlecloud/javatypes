declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Synchronous client to perform HTTP requests, exposing a simple, template
                 * method API over underlying HTTP client libraries such as the JDK
                 * {@code HttpURLConnection}, Apache HttpComponents, and others.
                 * <p>The RestTemplate offers templates for common scenarios by HTTP method, in
                 * addition to the generalized {@code exchange} and {@code execute} methods that
                 * support of less frequent cases.
                 * <p><strong>NOTE:</strong> As of 5.0 this class is in maintenance mode, with
                 * only minor requests for changes and bugs to be accepted going forward. Please,
                 * consider using the {@code org.springframework.web.reactive.client.WebClient}
                 * which has a more modern API and supports sync, async, and streaming scenarios.
                 * @author Arjen Poutsma
                 * @author Brian Clozel
                 * @author Roy Clarkson
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.0
                 * @see HttpMessageConverter
                 * @see RequestCallback
                 * @see ResponseExtractor
                 * @see ResponseErrorHandler
                 */
                // @ts-ignore
                class RestTemplate extends org.springframework.http.client.support.InterceptingHttpAccessor implements org.springframework.web.client.RestOperations {
                    /**
                     * Create a new instance of the {@link RestTemplate} using default settings.
                     * Default {@link HttpMessageConverter HttpMessageConverters} are initialized.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@link RestTemplate} based on the given {@link ClientHttpRequestFactory}.
                     * @param requestFactory the HTTP request factory to use
                     * @see org.springframework.http.client.SimpleClientHttpRequestFactory
                     * @see org.springframework.http.client.HttpComponentsClientHttpRequestFactory
                     */
                    // @ts-ignore
                    constructor(requestFactory: org.springframework.http.client.ClientHttpRequestFactory)
                    /**
                     * Create a new instance of the {@link RestTemplate} using the given list of
                     * {@link HttpMessageConverter} to use.
                     * @param messageConverters the list of {#link HttpMessageConverter} to use
                     * @since 3.2.7
                     */
                    // @ts-ignore
                    constructor(messageConverters: Array<org.springframework.http.converter.HttpMessageConverter<any>>)
                    /**
                     * Set the message body converters to use.
                     * <p>These converters are used to convert from and to HTTP requests and responses.
                     */
                    // @ts-ignore
                    setMessageConverters(messageConverters: Array<org.springframework.http.converter.HttpMessageConverter<any>>): void
                    /**
                     * Return the list of message body converters.
                     * <p>The returned {@link List} is active and may get appended to.
                     */
                    // @ts-ignore
                    getMessageConverters(): java.util.List<org.springframework.http.converter.HttpMessageConverter<?>>
                    /**
                     * Set the error handler.
                     * <p>By default, RestTemplate uses a {@link DefaultResponseErrorHandler}.
                     */
                    // @ts-ignore
                    setErrorHandler(errorHandler: org.springframework.web.client.ResponseErrorHandler): void
                    /**
                     * Return the error handler.
                     */
                    // @ts-ignore
                    getErrorHandler(): org.springframework.web.client.ResponseErrorHandler
                    /**
                     * Configure default URI variable values. This is a shortcut for:
                     * <pre class="code">
                     * DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
                     * handler.setDefaultUriVariables(...);
                     * RestTemplate restTemplate = new RestTemplate();
                     * restTemplate.setUriTemplateHandler(handler);
                     * </pre>
                     * @param uriVars the default URI variable values
                     * @since 4.3
                     */
                    // @ts-ignore
                    setDefaultUriVariables(uriVars: java.util.Map<java.lang.String, any>): void
                    /**
                     * Configure a strategy for expanding URI templates.
                     * <p>By default, {@link DefaultUriBuilderFactory} is used and for
                     * backwards compatibility, the encoding mode is set to
                     * {@link EncodingMode#URI_COMPONENT URI_COMPONENT}. As of 5.0.8, prefer
                     * using {@link EncodingMode#TEMPLATE_AND_VALUES TEMPLATE_AND_VALUES}.
                     * <p><strong>Note:</strong> in 5.0 the switch from
                     * {@link org.springframework.web.util.DefaultUriTemplateHandler
                     * DefaultUriTemplateHandler} (deprecated in 4.3), as the default to use, to
                     * {@link DefaultUriBuilderFactory} brings in a different default for the
                     * {@code parsePath} property (switching from false to true).
                     * @param handler the URI template handler to use
                     */
                    // @ts-ignore
                    setUriTemplateHandler(handler: org.springframework.web.util.UriTemplateHandler): void
                    /**
                     * Return the configured URI template handler.
                     */
                    // @ts-ignore
                    getUriTemplateHandler(): org.springframework.web.util.UriTemplateHandler
                    // @ts-ignore
                    getForObject<T>(url: string, responseType: java.lang.Class<T>, ...uriVariables: any[]): T
                    // @ts-ignore
                    getForObject<T>(url: string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): T
                    // @ts-ignore
                    getForObject<T>(url: java.net.URI, responseType: java.lang.Class<T>): T
                    // @ts-ignore
                    getForEntity<T>(url: string, responseType: java.lang.Class<T>, ...uriVariables: any[]): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    getForEntity<T>(url: string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    getForEntity<T>(url: java.net.URI, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    headForHeaders(url: string, ...uriVariables: any[]): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    headForHeaders(url: string, uriVariables: java.util.Map<java.lang.String, any>): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    headForHeaders(url: java.net.URI): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    postForLocation(url: string, request: any, ...uriVariables: any[]): java.net.URI
                    // @ts-ignore
                    postForLocation(url: string, request: any, uriVariables: java.util.Map<java.lang.String, any>): java.net.URI
                    // @ts-ignore
                    postForLocation(url: java.net.URI, request: any): java.net.URI
                    // @ts-ignore
                    postForObject<T>(url: string, request: any, responseType: java.lang.Class<T>, ...uriVariables: any[]): T
                    // @ts-ignore
                    postForObject<T>(url: string, request: any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): T
                    // @ts-ignore
                    postForObject<T>(url: java.net.URI, request: any, responseType: java.lang.Class<T>): T
                    // @ts-ignore
                    postForEntity<T>(url: string, request: any, responseType: java.lang.Class<T>, ...uriVariables: any[]): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    postForEntity<T>(url: string, request: any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    postForEntity<T>(url: java.net.URI, request: any, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    put(url: string, request: any, ...uriVariables: any[]): void
                    // @ts-ignore
                    put(url: string, request: any, uriVariables: java.util.Map<java.lang.String, any>): void
                    // @ts-ignore
                    put(url: java.net.URI, request: any): void
                    // @ts-ignore
                    patchForObject<T>(url: string, request: any, responseType: java.lang.Class<T>, ...uriVariables: any[]): T
                    // @ts-ignore
                    patchForObject<T>(url: string, request: any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): T
                    // @ts-ignore
                    patchForObject<T>(url: java.net.URI, request: any, responseType: java.lang.Class<T>): T
                    // @ts-ignore
                    delete(url: string, ...uriVariables: any[]): void
                    // @ts-ignore
                    delete(url: string, uriVariables: java.util.Map<java.lang.String, any>): void
                    // @ts-ignore
                    delete(url: java.net.URI): void
                    // @ts-ignore
                    optionsForAllow(url: string, ...uriVariables: any[]): java.util.Set<org.springframework.http.HttpMethod>
                    // @ts-ignore
                    optionsForAllow(url: string, uriVariables: java.util.Map<java.lang.String, any>): java.util.Set<org.springframework.http.HttpMethod>
                    // @ts-ignore
                    optionsForAllow(url: java.net.URI): java.util.Set<org.springframework.http.HttpMethod>
                    // @ts-ignore
                    exchange<T>(url: string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: any[]): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(url: string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String, any>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(url: string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, ...uriVariables: any[]): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(url: string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, uriVariables: java.util.Map<java.lang.String, any>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(requestEntity: org.springframework.http.RequestEntity<any>, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    // @ts-ignore
                    exchange<T>(requestEntity: org.springframework.http.RequestEntity<any>, responseType: object): org.springframework.http.ResponseEntity<T>
                    /**
                     * {@inheritDoc}
                     * <p>To provide a {@code RequestCallback} or {@code ResponseExtractor} only,
                     * but not both, consider using:
                     * <ul>
                     * <li>{@link #acceptHeaderRequestCallback(Class)}
                     * <li>{@link #httpEntityCallback(Object)}
                     * <li>{@link #httpEntityCallback(Object, Type)}
                     * <li>{@link #responseEntityExtractor(Type)}
                     * </ul>
                     */
                    // @ts-ignore
                    execute<T>(url: string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, ...uriVariables: any[]): T
                    /**
                     * {@inheritDoc}
                     * <p>To provide a {@code RequestCallback} or {@code ResponseExtractor} only,
                     * but not both, consider using:
                     * <ul>
                     * <li>{@link #acceptHeaderRequestCallback(Class)}
                     * <li>{@link #httpEntityCallback(Object)}
                     * <li>{@link #httpEntityCallback(Object, Type)}
                     * <li>{@link #responseEntityExtractor(Type)}
                     * </ul>
                     */
                    // @ts-ignore
                    execute<T>(url: string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, uriVariables: java.util.Map<java.lang.String, any>): T
                    /**
                     * {@inheritDoc}
                     * <p>To provide a {@code RequestCallback} or {@code ResponseExtractor} only,
                     * but not both, consider using:
                     * <ul>
                     * <li>{@link #acceptHeaderRequestCallback(Class)}
                     * <li>{@link #httpEntityCallback(Object)}
                     * <li>{@link #httpEntityCallback(Object, Type)}
                     * <li>{@link #responseEntityExtractor(Type)}
                     * </ul>
                     */
                    // @ts-ignore
                    execute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): T
                    /**
                     * Execute the given method on the provided URI.
                     * <p>The {@link ClientHttpRequest} is processed using the {@link RequestCallback};
                     * the response with the {@link ResponseExtractor}.
                     * @param url the fully-expanded URL to connect to
                     * @param method the HTTP method to execute (GET, POST, etc.)
                     * @param requestCallback object that prepares the request (can be {#code null})
                     * @param responseExtractor object that extracts the return value from the response (can be {#code null})
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    doExecute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): T
                    /**
                     * Handle the given response, performing appropriate logging and
                     * invoking the {@link ResponseErrorHandler} if necessary.
                     * <p>Can be overridden in subclasses.
                     * @param url the fully-expanded URL to connect to
                     * @param method the HTTP method to execute (GET, POST, etc.)
                     * @param response the resulting {#link ClientHttpResponse}
                     * @throws IOException if propagated from {#link ResponseErrorHandler}
                     * @since 4.1.6
                     * @see #setErrorHandler
                     */
                    // @ts-ignore
                    handleResponse(url: java.net.URI, method: org.springframework.http.HttpMethod, response: org.springframework.http.client.ClientHttpResponse): void
                    /**
                     * Return a {@code RequestCallback} that sets the request {@code Accept}
                     * header based on the given response type, cross-checked against the
                     * configured message converters.
                     */
                    // @ts-ignore
                    acceptHeaderRequestCallback<T>(responseType: java.lang.Class<T>): org.springframework.web.client.RequestCallback
                    /**
                     * Return a {@code RequestCallback} implementation that writes the given
                     * object to the request stream.
                     */
                    // @ts-ignore
                    httpEntityCallback<T>(requestBody: any): org.springframework.web.client.RequestCallback
                    /**
                     * Return a {@code RequestCallback} implementation that:
                     * <ol>
                     * <li>Sets the request {@code Accept} header based on the given response
                     * type, cross-checked against the configured message converters.
                     * <li>Writes the given object to the request stream.
                     * </ol>
                     */
                    // @ts-ignore
                    httpEntityCallback<T>(requestBody: any, responseType: java.lang.reflect.Type): org.springframework.web.client.RequestCallback
                    /**
                     * Return a {@code ResponseExtractor} that prepares a {@link ResponseEntity}.
                     */
                    // @ts-ignore
                    responseEntityExtractor<T>(responseType: java.lang.reflect.Type): org.springframework.web.client.ResponseExtractor<org.springframework.http.ResponseEntity<T>>
                    /**
                     * Return a response extractor for {@link HttpHeaders}.
                     */
                    // @ts-ignore
                    headersExtractor(): org.springframework.web.client.ResponseExtractor<org.springframework.http.HttpHeaders>
                }
            }
        }
    }
}
