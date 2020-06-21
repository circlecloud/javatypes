declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * Base class for {@link org.springframework.web.client.RestTemplate}
                     * and other HTTP accessing gateway helpers, adding interceptor-related
                     * properties to {@link HttpAccessor}'s common properties.
                     * <p>Not intended to be used directly.
                     * See {@link org.springframework.web.client.RestTemplate} for an entry point.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see ClientHttpRequestInterceptor
                     * @see InterceptingClientHttpRequestFactory
                     * @see org.springframework.web.client.RestTemplate
                     */
                    // @ts-ignore
                    abstract class InterceptingHttpAccessor extends org.springframework.http.client.support.HttpAccessor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the request interceptors that this accessor should use.
                         * <p>The interceptors will get immediately sorted according to their
                         * {@linkplain AnnotationAwareOrderComparator#sort(List) order}.
                         * @see #getRequestFactory()
                         * @see AnnotationAwareOrderComparator
                         */
                        // @ts-ignore
                        public setInterceptors(interceptors: java.util.List<org.springframework.http.client.ClientHttpRequestInterceptor> | Array<org.springframework.http.client.ClientHttpRequestInterceptor>): void
                        /**
                         * Get the request interceptors that this accessor uses.
                         * <p>The returned {@link List} is active and may be modified. Note,
                         * however, that the interceptors will not be resorted according to their
                         * {@linkplain AnnotationAwareOrderComparator#sort(List) order} before the
                         * {@link ClientHttpRequestFactory} is built.
                         */
                        // @ts-ignore
                        public getInterceptors(): Array<org.springframework.http.client.ClientHttpRequestInterceptor>
                        /**
                         * {@inheritDoc}
                         */
                        // @ts-ignore
                        public setRequestFactory(requestFactory: org.springframework.http.client.ClientHttpRequestFactory): void
                        /**
                         * Overridden to expose an {@link InterceptingClientHttpRequestFactory}
                         * if necessary.
                         * @see #getInterceptors()
                         */
                        // @ts-ignore
                        public getRequestFactory(): org.springframework.http.client.ClientHttpRequestFactory
                    }
                }
            }
        }
    }
}
