declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Represents a client-side reactive HTTP response.
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface ClientHttpResponse extends org.springframework.http.ReactiveHttpInputMessage {
                        /**
                         * Return the HTTP status code as an {@link HttpStatus} enum value.
                         * @return the HTTP status as an HttpStatus enum value (never {#code null})
                         * @throws IllegalArgumentException in case of an unknown HTTP status code
                         * @since #getRawStatusCode()
                         * @see HttpStatus#valueOf(int)
                         */
                        // @ts-ignore
                        getStatusCode(): org.springframework.http.HttpStatus
                        /**
                         * Return the HTTP status code (potentially non-standard and not
                         * resolvable through the {@link HttpStatus} enum) as an integer.
                         * @return the HTTP status as an integer value
                         * @since 5.0.6
                         * @see #getStatusCode()
                         * @see HttpStatus#resolve(int)
                         */
                        // @ts-ignore
                        getRawStatusCode(): int
                        /**
                         * Return a read-only map of response cookies received from the server.
                         */
                        // @ts-ignore
                        getCookies(): <any>
                    }
                }
            }
        }
    }
}
