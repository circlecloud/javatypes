declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Extension of {@link HttpEntity} that adds a {@link HttpStatus} status code.
             * Used in {@code RestTemplate} as well {@code @Controller} methods.
             * <p>In {@code RestTemplate}, this class is returned by
             * {@link org.springframework.web.client.RestTemplate#getForEntity getForEntity()} and
             * {@link org.springframework.web.client.RestTemplate#exchange exchange()}:
             * <pre class="code">
             * ResponseEntity&lt;String&gt; entity = template.getForEntity("https://example.com", String.class);
             * String body = entity.getBody();
             * MediaType contentType = entity.getHeaders().getContentType();
             * HttpStatus statusCode = entity.getStatusCode();
             * </pre>
             * <p>Can also be used in Spring MVC, as the return value from a @Controller method:
             * <pre class="code">
             * &#64;RequestMapping("/handle")
             * public ResponseEntity&lt;String&gt; handle() {
             * URI location = ...;
             * HttpHeaders responseHeaders = new HttpHeaders();
             * responseHeaders.setLocation(location);
             * responseHeaders.set("MyResponseHeader", "MyValue");
             * return new ResponseEntity&lt;String&gt;("Hello World", responseHeaders, HttpStatus.CREATED);
             * }
             * </pre>
             * Or, by using a builder accessible via static methods:
             * <pre class="code">
             * &#64;RequestMapping("/handle")
             * public ResponseEntity&lt;String&gt; handle() {
             * URI location = ...;
             * return ResponseEntity.created(location).header("MyResponseHeader", "MyValue").body("Hello World");
             * }
             * </pre>
             * @author Arjen Poutsma
             * @author Brian Clozel
             * @since 3.0.2
             * @param <T> the body type
             * @see #getStatusCode()
             */
            // @ts-ignore
            class ResponseEntity<T> extends org.springframework.http.HttpEntity<T> {
                /**
                 * Create a new {@code ResponseEntity} with the given status code, and no body nor headers.
                 * @param status the status code
                 */
                // @ts-ignore
                constructor(status: org.springframework.http.HttpStatus)
                /**
                 * Create a new {@code ResponseEntity} with the given body and status code, and no headers.
                 * @param body the entity body
                 * @param status the status code
                 */
                // @ts-ignore
                constructor(body: T, status: org.springframework.http.HttpStatus)
                /**
                 * Create a new {@code HttpEntity} with the given headers and status code, and no body.
                 * @param headers the entity headers
                 * @param status the status code
                 */
                // @ts-ignore
                constructor(headers: object, status: org.springframework.http.HttpStatus)
                /**
                 * Create a new {@code HttpEntity} with the given body, headers, and status code.
                 * @param body the entity body
                 * @param headers the entity headers
                 * @param status the status code
                 */
                // @ts-ignore
                constructor(body: T, headers: object, status: org.springframework.http.HttpStatus)
                /**
                 * Return the HTTP status code of the response.
                 * @return the HTTP status as an HttpStatus enum entry
                 */
                // @ts-ignore
                getStatusCode(): org.springframework.http.HttpStatus
                /**
                 * Return the HTTP status code of the response.
                 * @return the HTTP status as an int value
                 * @since 4.3
                 */
                // @ts-ignore
                getStatusCodeValue(): int
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Create a builder with the given status.
                 * @param status the response status
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                status(status: org.springframework.http.HttpStatus): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * Create a builder with the given status.
                 * @param status the response status
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                status(status: number /*int*/): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * A shortcut for creating a {@code ResponseEntity} with the given body
                 * and the {@linkplain HttpStatus#OK OK} status, or an empty body and a
                 * {@linkplain HttpStatus#NOT_FOUND NOT FOUND} status in case of an
                 * {@linkplain Optional#empty()} parameter.
                 * @return the created {#code ResponseEntity}
                 * @since 5.1
                 */
                // @ts-ignore
                of<T>(body: java.util.Optional<T>): org.springframework.http.ResponseEntity<T>
                /**
                 * Create a builder with the status set to {@linkplain HttpStatus#OK OK}.
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                ok(): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * A shortcut for creating a {@code ResponseEntity} with the given body and
                 * the status set to {@linkplain HttpStatus#OK OK}.
                 * @return the created {#code ResponseEntity}
                 * @since 4.1
                 */
                // @ts-ignore
                ok<T>(body: T): org.springframework.http.ResponseEntity<T>
                /**
                 * Create a new builder with a {@linkplain HttpStatus#CREATED CREATED} status
                 * and a location header set to the given URI.
                 * @param location the location URI
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                created(location: java.net.URI): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * Create a builder with an {@linkplain HttpStatus#ACCEPTED ACCEPTED} status.
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                accepted(): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * Create a builder with a {@linkplain HttpStatus#NO_CONTENT NO_CONTENT} status.
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                noContent(): org.springframework.http.ResponseEntity.HeadersBuilder<?>
                /**
                 * Create a builder with a {@linkplain HttpStatus#BAD_REQUEST BAD_REQUEST} status.
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                badRequest(): org.springframework.http.ResponseEntity.BodyBuilder
                /**
                 * Create a builder with a {@linkplain HttpStatus#NOT_FOUND NOT_FOUND} status.
                 * @return the created builder
                 * @since 4.1
                 */
                // @ts-ignore
                notFound(): org.springframework.http.ResponseEntity.HeadersBuilder<?>
                /**
                 * Create a builder with an
                 * {@linkplain HttpStatus#UNPROCESSABLE_ENTITY UNPROCESSABLE_ENTITY} status.
                 * @return the created builder
                 * @since 4.1.3
                 */
                // @ts-ignore
                unprocessableEntity(): org.springframework.http.ResponseEntity.BodyBuilder
            }
        }
    }
}
