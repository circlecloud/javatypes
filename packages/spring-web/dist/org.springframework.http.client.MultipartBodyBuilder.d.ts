declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Prepare the body of a multipart request, resulting in a
                 * {@code MultiValueMap<String, HttpEntity>}. Parts may be concrete values or
                 * via asynchronous types such as Reactor {@code Mono}, {@code Flux}, and
                 * others registered in the
                 * {@link org.springframework.core.ReactiveAdapterRegistry ReactiveAdapterRegistry}.
                 * <p>This builder is intended for use with the reactive
                 * {@link org.springframework.web.reactive.function.client.WebClient WebClient}.
                 * For multipart requests with the {@code RestTemplate}, simply create and
                 * populate a {@code MultiValueMap<String, HttpEntity>} as shown in the Javadoc for
                 * {@link org.springframework.http.converter.FormHttpMessageConverter FormHttpMessageConverter}
                 * and in the
                 * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#rest-template-multipart">reference docs</a>.
                 * <p>Below are examples of using this builder:
                 * <pre class="code">
                 * // Add form field
                 * MultipartBodyBuilder builder = new MultipartBodyBuilder();
                 * builder.part("form field", "form value").header("foo", "bar");
                 * // Add file part
                 * Resource image = new ClassPathResource("image.jpg");
                 * builder.part("image", image).header("foo", "bar");
                 * // Add content (e.g. JSON)
                 * Account account = ...
                 * builder.part("account", account).header("foo", "bar");
                 * // Add content from Publisher
                 * Mono&lt;Account&gt; accountMono = ...
                 * builder.asyncPart("account", accountMono).header("foo", "bar");
                 * // Build and use
                 * MultiValueMap&lt;String, HttpEntity&lt;?&gt;&gt; multipartBody = builder.build();
                 * Mono&lt;Void&gt; result = webClient.post()
                 * .uri("...")
                 * .body(multipartBody)
                 * .retrieve()
                 * .bodyToMono(Void.class)
                 * </pre>
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0.2
                 * @see <a href="https://tools.ietf.org/html/rfc7578">RFC 7578</a>
                 */
                // @ts-ignore
                class MultipartBodyBuilder extends java.lang.Object {
                    /**
                     * Creates a new, empty instance of the {@code MultipartBodyBuilder}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Add a part where the Object may be:
                     * <ul>
                     * <li>String -- form field
                     * <li>{@link org.springframework.core.io.Resource Resource} -- file part
                     * <li>Object -- content to be encoded (e.g. to JSON)
                     * <li>{@link HttpEntity} -- part content and headers although generally it's
                     * easier to add headers through the returned builder
                     * <li>{@link Part} -- a part from a server request
                     * </ul>
                     * @param name the name of the part to add
                     * @param part the part data
                     * @return builder that allows for further customization of part headers
                     */
                    // @ts-ignore
                    part(name: string, part: any): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                    /**
                     * Variant of {@link #part(String, Object)} that also accepts a MediaType.
                     * @param name the name of the part to add
                     * @param part the part data
                     * @param contentType the media type to help with encoding the part
                     * @return builder that allows for further customization of part headers
                     */
                    // @ts-ignore
                    part(name: string, part: any, contentType: org.springframework.http.MediaType): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                    /**
                     * Add a part from {@link Publisher} content.
                     * @param name the name of the part to add
                     * @param publisher a Publisher of content for the part
                     * @param elementClass the type of elements contained in the publisher
                     * @return builder that allows for further customization of part headers
                     */
                    // @ts-ignore
                    asyncPart<T, P extends <any>>(name: string, publisher: P extends <any>, elementClass: java.lang.Class<T>): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                    /**
                     * Variant of {@link #asyncPart(String, Publisher, Class)} with a
                     * {@link ParameterizedTypeReference} for the element type information.
                     * @param name the name of the part to add
                     * @param publisher the part contents
                     * @param typeReference the type of elements contained in the publisher
                     * @return builder that allows for further customization of part headers
                     */
                    // @ts-ignore
                    asyncPart<T, P extends <any>>(name: string, publisher: P extends <any>, typeReference: object): org.springframework.http.client.MultipartBodyBuilder.PartBuilder
                    /**
                     * Return a {@code MultiValueMap} with the configured parts.
                     */
                    // @ts-ignore
                    build(): <any>
                }
            }
        }
    }
}
