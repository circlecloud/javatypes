declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Extension of {@link HttpEntity} that adds a {@linkplain HttpMethod method} and
             * {@linkplain URI uri}. Used in {@code RestTemplate} and {@code @Controller} methods.
             * <p>In {@code RestTemplate}, this class is used as parameter in
             * {@link org.springframework.web.client.RestTemplate#exchange(RequestEntity, Class) exchange()}:
             * <pre class="code">
             * MyRequest body = ...
             * RequestEntity&lt;MyRequest&gt; request = RequestEntity
             * .post(new URI(&quot;https://example.com/bar&quot;))
             * .accept(MediaType.APPLICATION_JSON)
             * .body(body);
             * ResponseEntity&lt;MyResponse&gt; response = template.exchange(request, MyResponse.class);
             * </pre>
             * <p>If you would like to provide a URI template with variables, consider using
             * {@link org.springframework.web.util.DefaultUriBuilderFactory DefaultUriBuilderFactory}:
             * <pre class="code">
             * // Create shared factory
             * UriBuilderFactory factory = new DefaultUriBuilderFactory();
             * // Use factory to create URL from template
             * URI uri = factory.uriString(&quot;https://example.com/{foo}&quot;).build(&quot;bar&quot;);
             * RequestEntity&lt;MyRequest&gt; request = RequestEntity.post(uri).accept(MediaType.APPLICATION_JSON).body(body);
             * </pre>
             * <p>Can also be used in Spring MVC, as a parameter in a @Controller method:
             * <pre class="code">
             * &#64;RequestMapping("/handle")
             * public void handle(RequestEntity&lt;String&gt; request) {
             * HttpMethod method = request.getMethod();
             * URI url = request.getUrl();
             * String body = request.getBody();
             * }
             * </pre>
             * @author Arjen Poutsma
             * @author Sebastien Deleuze
             * @since 4.1
             * @param <T> the body type
             * @see #getMethod()
             * @see #getUrl()
             */
            // @ts-ignore
            class RequestEntity<T> extends org.springframework.http.HttpEntity<T> {
                /**
                 * Constructor with method and URL but without body nor headers.
                 * @param method the method
                 * @param url the URL
                 */
                // @ts-ignore
                constructor(method: org.springframework.http.HttpMethod, url: java.net.URI)
                /**
                 * Constructor with method, URL and body but without headers.
                 * @param body the body
                 * @param method the method
                 * @param url the URL
                 */
                // @ts-ignore
                constructor(body: T, method: org.springframework.http.HttpMethod, url: java.net.URI)
                /**
                 * Constructor with method, URL, body and type but without headers.
                 * @param body the body
                 * @param method the method
                 * @param url the URL
                 * @param type the type used for generic type resolution
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(body: T, method: org.springframework.http.HttpMethod, url: java.net.URI, type: java.lang.reflect.Type)
                /**
                 * Constructor with method, URL and headers but without body.
                 * @param headers the headers
                 * @param method the method
                 * @param url the URL
                 */
                // @ts-ignore
                constructor(headers: object, method: org.springframework.http.HttpMethod, url: java.net.URI)
                /**
                 * Constructor with method, URL, headers and body.
                 * @param body the body
                 * @param headers the headers
                 * @param method the method
                 * @param url the URL
                 */
                // @ts-ignore
                constructor(body: T, headers: object, method: org.springframework.http.HttpMethod, url: java.net.URI)
                /**
                 * Constructor with method, URL, headers, body and type.
                 * @param body the body
                 * @param headers the headers
                 * @param method the method
                 * @param url the URL
                 * @param type the type used for generic type resolution
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(body: T, headers: object, method: org.springframework.http.HttpMethod, url: java.net.URI, type: java.lang.reflect.Type)
                /**
                 * Return the HTTP method of the request.
                 * @return the HTTP method as an {#code HttpMethod} enum value
                 */
                // @ts-ignore
                public getMethod(): org.springframework.http.HttpMethod
                /**
                 * Return the URL of the request.
                 * @return the URL as a {#code URI}
                 */
                // @ts-ignore
                public getUrl(): java.net.URI
                /**
                 * Return the type of the request's body.
                 * @return the request's body type, or {#code null} if not known
                 * @since 4.3
                 */
                // @ts-ignore
                public getType(): java.lang.reflect.Type
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Create a builder with the given method and url.
                 * @param method the HTTP method (GET, POST, etc)
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static method(method: org.springframework.http.HttpMethod, url: java.net.URI): org.springframework.http.RequestEntity.BodyBuilder
                /**
                 * Create an HTTP GET builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static get(url: java.net.URI): org.springframework.http.RequestEntity.HeadersBuilder<any>
                /**
                 * Create an HTTP HEAD builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static head(url: java.net.URI): org.springframework.http.RequestEntity.HeadersBuilder<any>
                /**
                 * Create an HTTP POST builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static post(url: java.net.URI): org.springframework.http.RequestEntity.BodyBuilder
                /**
                 * Create an HTTP PUT builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static put(url: java.net.URI): org.springframework.http.RequestEntity.BodyBuilder
                /**
                 * Create an HTTP PATCH builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static patch(url: java.net.URI): org.springframework.http.RequestEntity.BodyBuilder
                /**
                 * Create an HTTP DELETE builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static delete(url: java.net.URI): org.springframework.http.RequestEntity.HeadersBuilder<any>
                /**
                 * Creates an HTTP OPTIONS builder with the given url.
                 * @param url the URL
                 * @return the created builder
                 */
                // @ts-ignore
                public static options(url: java.net.URI): org.springframework.http.RequestEntity.HeadersBuilder<any>
            }
        }
    }
}
