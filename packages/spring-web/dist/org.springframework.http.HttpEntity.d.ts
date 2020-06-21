declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP request or response entity, consisting of headers and body.
             * <p>Typically used in combination with the {@link org.springframework.web.client.RestTemplate},
             * like so:
             * <pre class="code">
             * HttpHeaders headers = new HttpHeaders();
             * headers.setContentType(MediaType.TEXT_PLAIN);
             * HttpEntity&lt;String&gt; entity = new HttpEntity&lt;String&gt;(helloWorld, headers);
             * URI location = template.postForLocation("https://example.com", entity);
             * </pre>
             * or
             * <pre class="code">
             * HttpEntity&lt;String&gt; entity = template.getForEntity("https://example.com", String.class);
             * String body = entity.getBody();
             * MediaType contentType = entity.getHeaders().getContentType();
             * </pre>
             * Can also be used in Spring MVC, as a return value from a @Controller method:
             * <pre class="code">
             * &#64;RequestMapping("/handle")
             * public HttpEntity&lt;String&gt; handle() {
             * HttpHeaders responseHeaders = new HttpHeaders();
             * responseHeaders.set("MyResponseHeader", "MyValue");
             * return new HttpEntity&lt;String&gt;("Hello World", responseHeaders);
             * }
             * </pre>
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 3.0.2
             * @param <T> the body type
             * @see org.springframework.web.client.RestTemplate
             * @see #getBody()
             * @see #getHeaders()
             */
            // @ts-ignore
            class HttpEntity<T> extends java.lang.Object {
                /**
                 * Create a new, empty {@code HttpEntity}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new {@code HttpEntity} with the given body and no headers.
                 * @param body the entity body
                 */
                // @ts-ignore
                constructor(body: T)
                /**
                 * Create a new {@code HttpEntity} with the given headers and no body.
                 * @param headers the entity headers
                 */
                // @ts-ignore
                constructor(headers: object)
                /**
                 * Create a new {@code HttpEntity} with the given body and headers.
                 * @param body the entity body
                 * @param headers the entity headers
                 */
                // @ts-ignore
                constructor(body: T, headers: object)
                /**
                 * The empty {@code HttpEntity}, with no body or headers.
                 */
                // @ts-ignore
                public static readonly EMPTY: org.springframework.http.HttpEntity<any>
                /**
                 * Returns the headers of this entity.
                 */
                // @ts-ignore
                public getHeaders(): org.springframework.http.HttpHeaders
                /**
                 * Returns the body of this entity.
                 */
                // @ts-ignore
                public getBody(): T
                /**
                 * Indicates whether this entity has a body.
                 */
                // @ts-ignore
                public hasBody(): boolean
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
