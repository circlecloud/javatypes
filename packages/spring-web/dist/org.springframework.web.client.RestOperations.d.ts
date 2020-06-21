declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Interface specifying a basic set of RESTful operations.
                 * Implemented by {@link RestTemplate}. Not often used directly, but a useful
                 * option to enhance testability, as it can easily be mocked or stubbed.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see RestTemplate
                 */
                // @ts-ignore
                interface RestOperations {
                    /**
                     * Retrieve a representation by doing a GET on the specified URL.
                     * The response (if any) is converted and returned.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     */
                    // @ts-ignore
                    getForObject<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): T
                    /**
                     * Retrieve a representation by doing a GET on the URI template.
                     * The response (if any) is converted and returned.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the map containing variables for the URI template
                     * @return the converted object
                     */
                    // @ts-ignore
                    getForObject<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): T
                    /**
                     * Retrieve a representation by doing a GET on the URL .
                     * The response (if any) is converted and returned.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @return the converted object
                     */
                    // @ts-ignore
                    getForObject<T>(url: java.net.URI, responseType: java.lang.Class<T>): T
                    /**
                     * Retrieve an entity by doing a GET on the specified URL.
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the entity
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): org.springframework.http.ResponseEntity<T>
                    /**
                     * Retrieve a representation by doing a GET on the URI template.
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @param uriVariables the map containing variables for the URI template
                     * @return the converted object
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.lang.String | string, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Retrieve a representation by doing a GET on the URL .
                     * The response is converted and stored in an {@link ResponseEntity}.
                     * @param url the URL
                     * @param responseType the type of the return value
                     * @return the converted object
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    getForEntity<T>(url: java.net.URI, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Retrieve all headers of the resource specified by the URI template.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param uriVariables the variables to expand the template
                     * @return all HTTP headers of that resource
                     */
                    // @ts-ignore
                    headForHeaders(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): org.springframework.http.HttpHeaders
                    /**
                     * Retrieve all headers of the resource specified by the URI template.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param uriVariables the map containing variables for the URI template
                     * @return all HTTP headers of that resource
                     */
                    // @ts-ignore
                    headForHeaders(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.http.HttpHeaders
                    /**
                     * Retrieve all headers of the resource specified by the URL.
                     * @param url the URL
                     * @return all HTTP headers of that resource
                     */
                    // @ts-ignore
                    headForHeaders(url: java.net.URI): org.springframework.http.HttpHeaders
                    /**
                     * Create a new resource by POSTing the given object to the URI template, and returns the value of
                     * the {@code Location} header. This header typically indicates where the new resource is stored.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the value for the {#code Location} header
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.lang.String | string, request: java.lang.Object | any, ...uriVariables: java.lang.Object[] | any[]): java.net.URI
                    /**
                     * Create a new resource by POSTing the given object to the URI template, and returns the value of
                     * the {@code Location} header. This header typically indicates where the new resource is stored.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the value for the {#code Location} header
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.lang.String | string, request: java.lang.Object | any, uriVariables: java.util.Map<java.lang.String | string, any>): java.net.URI
                    /**
                     * Create a new resource by POSTing the given object to the URL, and returns the value of the
                     * {@code Location} header. This header typically indicates where the new resource is stored.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @return the value for the {#code Location} header
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForLocation(url: java.net.URI, request: java.lang.Object | any): java.net.URI
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and returns the representation found in the response.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForObject<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): T
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and returns the representation found in the response.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForObject<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): T
                    /**
                     * Create a new resource by POSTing the given object to the URL,
                     * and returns the representation found in the response.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param responseType the type of the return value
                     * @return the converted object
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForObject<T>(url: java.net.URI, request: java.lang.Object | any, responseType: java.lang.Class<T>): T
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and returns the response as {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @since 3.0.2
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): org.springframework.http.ResponseEntity<T>
                    /**
                     * Create a new resource by POSTing the given object to the URI template,
                     * and returns the response as {@link HttpEntity}.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @since 3.0.2
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Create a new resource by POSTing the given object to the URL,
                     * and returns the response as {@link ResponseEntity}.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p>The body of the entity, or {@code request} itself, can be a
                     * {@link org.springframework.util.MultiValueMap MultiValueMap} to create a multipart request.
                     * The values in the {@code MultiValueMap} can be any Object representing the body of the part,
                     * or an {@link org.springframework.http.HttpEntity HttpEntity} representing a part with body
                     * and headers.
                     * @param url the URL
                     * @param request the Object to be POSTed (may be {#code null})
                     * @return the converted object
                     * @since 3.0.2
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    postForEntity<T>(url: java.net.URI, request: java.lang.Object | any, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Create or update a resource by PUTting the given object to the URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.lang.String | string, request: java.lang.Object | any, ...uriVariables: java.lang.Object[] | any[]): void
                    /**
                     * Creates a new resource by PUTting the given object to URI template.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @param uriVariables the variables to expand the template
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.lang.String | string, request: java.lang.Object | any, uriVariables: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Creates a new resource by PUTting the given object to URL.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * @param url the URL
                     * @param request the Object to be PUT (may be {#code null})
                     * @see HttpEntity
                     */
                    // @ts-ignore
                    put(url: java.net.URI, request: java.lang.Object | any): void
                    /**
                     * Update a resource by PATCHing the given object to the URI template,
                     * and return the representation found in the response.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p><b>NOTE: The standard JDK HTTP library does not support HTTP PATCH.
                     * You need to use the Apache HttpComponents or OkHttp request factory.</b>
                     * @param url the URL
                     * @param request the object to be PATCHed (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @since 4.3.5
                     * @see HttpEntity
                     * @see RestTemplate#setRequestFactory
                     * @see org.springframework.http.client.HttpComponentsAsyncClientHttpRequestFactory
                     * @see org.springframework.http.client.OkHttp3ClientHttpRequestFactory
                     */
                    // @ts-ignore
                    patchForObject<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): T
                    /**
                     * Update a resource by PATCHing the given object to the URI template,
                     * and return the representation found in the response.
                     * <p>URI Template variables are expanded using the given map.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p><b>NOTE: The standard JDK HTTP library does not support HTTP PATCH.
                     * You need to use the Apache HttpComponents or OkHttp request factory.</b>
                     * @param url the URL
                     * @param request the object to be PATCHed (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand the template
                     * @return the converted object
                     * @since 4.3.5
                     * @see HttpEntity
                     * @see RestTemplate#setRequestFactory
                     * @see org.springframework.http.client.HttpComponentsAsyncClientHttpRequestFactory
                     * @see org.springframework.http.client.OkHttp3ClientHttpRequestFactory
                     */
                    // @ts-ignore
                    patchForObject<T>(url: java.lang.String | string, request: java.lang.Object | any, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): T
                    /**
                     * Update a resource by PATCHing the given object to the URL,
                     * and return the representation found in the response.
                     * <p>The {@code request} parameter can be a {@link HttpEntity} in order to
                     * add additional HTTP headers to the request.
                     * <p><b>NOTE: The standard JDK HTTP library does not support HTTP PATCH.
                     * You need to use the Apache HttpComponents or OkHttp request factory.</b>
                     * @param url the URL
                     * @param request the object to be PATCHed (may be {#code null})
                     * @param responseType the type of the return value
                     * @return the converted object
                     * @since 4.3.5
                     * @see HttpEntity
                     * @see RestTemplate#setRequestFactory
                     * @see org.springframework.http.client.HttpComponentsAsyncClientHttpRequestFactory
                     * @see org.springframework.http.client.OkHttp3ClientHttpRequestFactory
                     */
                    // @ts-ignore
                    patchForObject<T>(url: java.net.URI, request: java.lang.Object | any, responseType: java.lang.Class<T>): T
                    /**
                     * Delete the resources at the specified URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     */
                    // @ts-ignore
                    delete(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): void
                    /**
                     * Delete the resources at the specified URI.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param uriVariables the variables to expand the template
                     */
                    // @ts-ignore
                    delete(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Delete the resources at the specified URL.
                     * @param url the URL
                     */
                    // @ts-ignore
                    delete(url: java.net.URI): void
                    /**
                     * Return the value of the Allow header for the given URI.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     * @return the value of the allow header
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): Array<org.springframework.http.HttpMethod>
                    /**
                     * Return the value of the Allow header for the given URI.
                     * <p>URI Template variables are expanded using the given map.
                     * @param url the URL
                     * @param uriVariables the variables to expand in the template
                     * @return the value of the allow header
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): Array<org.springframework.http.HttpMethod>
                    /**
                     * Return the value of the Allow header for the given URL.
                     * @param url the URL
                     * @return the value of the allow header
                     */
                    // @ts-ignore
                    optionsForAllow(url: java.net.URI): Array<org.springframework.http.HttpMethod>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given request entity to the request, and
                     * returns the response as {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, ...uriVariables: java.lang.Object[] | any[]): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given request entity to the request, and
                     * returns the response as {@link ResponseEntity}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @param uriVariables the variables to expand in the template
                     * @return the response as entity
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given request entity to the request, and
                     * returns the response as {@link ResponseEntity}.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestEntity the entity (headers and/or body) to write to the request
                     *  (may be {#code null})
                     * @param responseType the type of the return value
                     * @return the response as entity
                     * @since 3.0.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type information:
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
                     * @return the response as entity
                     * @since 3.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, ...uriVariables: java.lang.Object[] | any[]): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type information:
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
                     * @return the response as entity
                     * @since 3.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, writing the given
                     * request entity to the request, and returns the response as {@link ResponseEntity}.
                     * The given {@link ParameterizedTypeReference} is used to pass generic type information:
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
                     * @return the response as entity
                     * @since 3.2
                     */
                    // @ts-ignore
                    exchange<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestEntity: org.springframework.http.HttpEntity<any>, responseType: object): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the request specified in the given {@link RequestEntity} and return
                     * the response as {@link ResponseEntity}. Typically used in combination
                     * with the static builder methods on {@code RequestEntity}, for instance:
                     * <pre class="code">
                     * MyRequest body = ...
                     * RequestEntity request = RequestEntity
                     * .post(new URI(&quot;https://example.com/foo&quot;))
                     * .accept(MediaType.APPLICATION_JSON)
                     * .body(body);
                     * ResponseEntity&lt;MyResponse&gt; response = template.exchange(request, MyResponse.class);
                     * </pre>
                     * @param requestEntity the entity to write to the request
                     * @param responseType the type of the return value
                     * @return the response as entity
                     * @since 4.1
                     */
                    // @ts-ignore
                    exchange<T>(requestEntity: org.springframework.http.RequestEntity<any>, responseType: java.lang.Class<T>): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the request specified in the given {@link RequestEntity} and return
                     * the response as {@link ResponseEntity}. The given
                     * {@link ParameterizedTypeReference} is used to pass generic type information:
                     * <pre class="code">
                     * MyRequest body = ...
                     * RequestEntity request = RequestEntity
                     * .post(new URI(&quot;https://example.com/foo&quot;))
                     * .accept(MediaType.APPLICATION_JSON)
                     * .body(body);
                     * ParameterizedTypeReference&lt;List&lt;MyResponse&gt;&gt; myBean =
                     * new ParameterizedTypeReference&lt;List&lt;MyResponse&gt;&gt;() {};
                     * ResponseEntity&lt;List&lt;MyResponse&gt;&gt; response = template.exchange(request, myBean);
                     * </pre>
                     * @param requestEntity the entity to write to the request
                     * @param responseType the type of the return value
                     * @return the response as entity
                     * @since 4.1
                     */
                    // @ts-ignore
                    exchange<T>(requestEntity: org.springframework.http.RequestEntity<any>, responseType: object): org.springframework.http.ResponseEntity<T>
                    /**
                     * Execute the HTTP method to the given URI template, preparing the request with the
                     * {@link RequestCallback}, and reading the response with a {@link ResponseExtractor}.
                     * <p>URI Template variables are expanded using the given URI variables, if any.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @param uriVariables the variables to expand in the template
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, ...uriVariables: java.lang.Object[] | any[]): T
                    /**
                     * Execute the HTTP method to the given URI template, preparing the request with the
                     * {@link RequestCallback}, and reading the response with a {@link ResponseExtractor}.
                     * <p>URI Template variables are expanded using the given URI variables map.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @param uriVariables the variables to expand in the template
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.lang.String | string, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>, uriVariables: java.util.Map<java.lang.String | string, any>): T
                    /**
                     * Execute the HTTP method to the given URL, preparing the request with the
                     * {@link RequestCallback}, and reading the response with a {@link ResponseExtractor}.
                     * @param url the URL
                     * @param method the HTTP method (GET, POST, etc)
                     * @param requestCallback object that prepares the request
                     * @param responseExtractor object that extracts the return value from the response
                     * @return an arbitrary object, as returned by the {#link ResponseExtractor}
                     */
                    // @ts-ignore
                    execute<T>(url: java.net.URI, method: org.springframework.http.HttpMethod, requestCallback: org.springframework.web.client.RequestCallback, responseExtractor: org.springframework.web.client.ResponseExtractor<T>): T
                }
            }
        }
    }
}
