declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Generic callback interface used by {@link RestTemplate}'s retrieval methods
                 * Implementations of this interface perform the actual work of extracting data
                 * from a {@link ClientHttpResponse}, but don't need to worry about exception
                 * handling or closing resources.
                 * <p>Used internally by the {@link RestTemplate}, but also useful for
                 * application code. There is one available factory method, see
                 * {@link RestTemplate#responseEntityExtractor(Type)}.
                 * @author Arjen Poutsma
                 * @since 3.0
                 * @param <T> the data type
                 * @see RestTemplate#execute
                 */
                // @ts-ignore
                interface ResponseExtractor<T> {
                    /**
                     * Extract data from the given {@code ClientHttpResponse} and return it.
                     * @param response the HTTP response
                     * @return the extracted data
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    extractData(response: org.springframework.http.client.ClientHttpResponse): T
                }
            }
        }
    }
}
