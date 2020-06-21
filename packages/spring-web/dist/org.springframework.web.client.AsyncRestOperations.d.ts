declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Interface specifying a basic set of asynchronous RESTful operations.
                 * Implemented by {@link AsyncRestTemplate}. Not often used directly, but a useful
                 * option to enhance testability, as it can easily be mocked or stubbed.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @see AsyncRestTemplate
                 * @see RestOperations
                 * @deprecated as of Spring 5.0, in favor of {#link org.springframework.web.reactive.function.client.WebClient}
                 */
                // @ts-ignore
                interface AsyncRestOperations {
                    /**
                     * Expose the synchronous Spring RestTemplate to allow synchronous invocation.
                     */
                    // @ts-ignore
                    getRestOperations(): org.springframework.web.client.RestOperations
                    /**
                     * Asynchronously retrieve an entity by doing a GET on the specified URL.
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously retrieve a representation by doing a GET on the URI template.
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the map containing variables for the URI template
                     * @return the entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously retrieve a representation by doing a GET on the URL.
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @return the entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.net.URI, responseType: java.lang.Class<T>): object
                    /**
                     * Asynchronously retrieve all headers of the resource specified by the URI template.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param uriVariables the variables to expand the template
                     * @return all HTTP headers of that resource wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    headForHeaders(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously retrieve all headers of the resource specified by the URI template.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param uriVariables the map containing variables for the URI template
                     * @return all HTTP headers of that resource wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    headForHeaders(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously retrieve all headers of the resource specified by the URL.
                     * @param url the URL
                     * @return all HTTP headers of that resource wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    headForHeaders(url: java.net.URI): object
                    /**
                     * Create a new resource by POSTing the given object to the URI template, and
                     * asynchronously returns the value of the {@code Location} header. This header
                     * typically indicates where the new resource is stored.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the value for the {#code Location} header wrapped in a {@link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Create a new resource by POSTing the given object to the URI template, and
                     * asynchronously returns the value of the {@code Location} header. This header
                     * typically indicates where the new resource is stored.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the value for the {#code Location} header wrapped in a {@link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Create a new resource by POSTing the given object to the URL, and asynchronously
                     * returns the value of the {@code Location} header. This header typically indicates
                     * where the new resource is stored.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @return the value for the {#code Location} header wrapped in a {@link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.net.URI, request: org.springframework.http.HttpEntity<any>): object
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and asynchronously returns the response as {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the entity wrapped in a {#link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and asynchronously returns the response as {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the entity wrapped in a {#link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Create a new resource by POSTing the given object to the URL,
                     * and asynchronously returns the response as {@link ResponseEntity}.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @return the entity wrapped in a {#link Future}
                     * @see org.springframework.http.HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.net.URI, request: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): object
                    /**
                     * Create or update a resource by PUTting the given object to the URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Creates a new resource by PUTting the given object to URI template.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.lang.String | string, request: org.springframework.http.HttpEntity<any>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Creates a new resource by PUTting the given object to URL.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.net.URI, request: org.springframework.http.HttpEntity<any>): object
                    /**
                     * Asynchronously delete the resources at the specified URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     */
                    // @ts-ignore
                    delete(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously delete the resources at the specified URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     */
                    // @ts-ignore
                    delete(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously delete the resources at the specified URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The Future will return a {@code null} result upon completion.
                     * @param url the URL
                     */
                    // @ts-ignore
                    delete(url: java.net.URI): object
                    /**
                     * Asynchronously return the value of the Allow header for the given URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     * @return the value of the allow header wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously return the value of the Allow header for the given URI.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     * @return the value of the allow header wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously return the value of the Allow header for the given URL.
                     * @param url the URL
                     * @return the value of the allow header wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.net.URI): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the
                     * given request entity to the request, and returns the response as
                     * {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the
                     * given request entity to the request, and returns the response as
                     * {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the
                     * given request entity to the request, and returns the response as
                     * {@link ResponseEntity}.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type
                     * information:
                     * <pre class="code">
                     * ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt; myBean =
                     * new ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt;() {};
                     * ResponseEntity&lt;List&lt;MyBean&gt;&gt; response =
                     * template.exchange(&quot;https://example.com&quot;,HttpMethod.GET, null, myBean);
                     * </pre>
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the
                     *  request (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type
                     * information:
                     * <pre class="code">
                     * ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt; myBean =
                     * new ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt;() {};
                     * ResponseEntity&lt;List&lt;MyBean&gt;&gt; response =
                     * template.exchange(&quot;https://example.com&quot;,HttpMethod.GET, null, myBean);
                     * </pre>
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type
                     * information:
                     * <pre class="code">
                     * ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt; myBean =
                     * new ParameterizedTypeReference&lt;List&lt;MyBean&gt;&gt;() {};
                     * ResponseEntity&lt;List&lt;MyBean&gt;&gt; response =
                     * template.exchange(&quot;https://example.com&quot;,HttpMethod.GET, null, myBean);
                     * </pre>
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @return the response as entity wrapped in a {#link Future}
                     */
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, preparing the
                     * request with the {@link AsyncRequestCallback}, and reading the response with a
                     * {@link ResponseExtractor}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @param uriVariables the variables to expand in the template
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, ...uriVariables: java.lang.Object[] | any[]): object
                    /**
                     * Asynchronously execute the HTTP method to the given URI template, preparing the
                     * request with the {@link AsyncRequestCallback}, and reading the response with a
                     * {@link ResponseExtractor}.
                     * <p>URI Template variables are expanded using the given URI variables map.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @param uriVariables the variables to expand in the template
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, uriVariables: java.util.Map<java.lang.String | string, any>): object
                    /**
                     * Asynchronously execute the HTTP method to the given URL, preparing the request
                     * with the {@link AsyncRequestCallback}, and reading the response with a
                     * {@link ResponseExtractor}.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.AsyncRequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): object
                }
            }
        }
    }
}
