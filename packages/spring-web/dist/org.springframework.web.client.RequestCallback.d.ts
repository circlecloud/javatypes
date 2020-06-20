declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Callback interface for code that operates on a {@link ClientHttpRequest}.
                 * Allows manipulating the request headers, and write to the request body.
                 * <p>Used internally by the {@link RestTemplate}, but also useful for
                 * application code. There several available factory methods:
                 * <ul>
                 * <li>{@link RestTemplate#acceptHeaderRequestCallback(Class)}
                 * <li>{@link RestTemplate#httpEntityCallback(Object)}
                 * <li>{@link RestTemplate#httpEntityCallback(Object, Type)}
                 * </ul>
                 * @author Arjen Poutsma
                 * @see RestTemplate#execute
                 * @since 3.0
                 */
                // @ts-ignore
                interface RequestCallback {
                    /**
                     * Gets called by {@link RestTemplate#execute} with an opened {@code ClientHttpRequest}.
                     * Does not need to care about closing the request or about handling errors:
                     * this will all be handled by the {@code RestTemplate}.
                     * @param request the active HTTP request
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    doWithRequest(request: org.springframework.http.client.ClientHttpRequest): void
                }
            }
        }
    }
}
