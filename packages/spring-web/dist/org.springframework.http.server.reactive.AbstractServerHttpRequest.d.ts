declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Common base class for {@link ServerHttpRequest} implementations.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    abstract class AbstractServerHttpRequest extends java.lang.Object implements org.springframework.http.server.reactive.ServerHttpRequest {
                        /**
                         * Constructor with the URI and headers for the request.
                         * @param uri the URI for the request
                         * @param contextPath the context path for the request
                         * @param headers the headers for the request
                         */
                        // @ts-ignore
                        constructor(uri: java.net.URI, contextPath: java.lang.String | string, headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public getId(): string
                        /**
                         * Obtain the request id to use, or {@code null} in which case the Object
                         * identity of this request instance is used.
                         * @since 5.1
                         */
                        // @ts-ignore
                        initId(): string
                        // @ts-ignore
                        public getURI(): java.net.URI
                        // @ts-ignore
                        public getPath(): org.springframework.http.server.RequestPath
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getQueryParams(): object
                        /**
                         * A method for parsing of the query into name-value pairs. The return
                         * value is turned into an immutable map and cached.
                         * <p>Note that this method is invoked lazily on first access to
                         * {@link #getQueryParams()}. The invocation is not synchronized but the
                         * parsing is thread-safe nevertheless.
                         */
                        // @ts-ignore
                        initQueryParams(): object
                        // @ts-ignore
                        public getCookies(): object
                        /**
                         * Obtain the cookies from the underlying "native" request and adapt those to
                         * an {@link HttpCookie} map. The return value is turned into an immutable
                         * map and cached.
                         * <p>Note that this method is invoked lazily on access to
                         * {@link #getCookies()}. Sub-classes should synchronize cookie
                         * initialization if the underlying "native" request does not provide
                         * thread-safe access to cookie data.
                         */
                        // @ts-ignore
                        abstract initCookies(): object
                        // @ts-ignore
                        public getSslInfo(): org.springframework.http.server.reactive.SslInfo
                        /**
                         * Obtain SSL session information from the underlying "native" request.
                         * @return the session information, or {#code null} if none available
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        abstract initSslInfo(): org.springframework.http.server.reactive.SslInfo
                        /**
                         * Return the underlying server response.
                         * <p><strong>Note:</strong> This is exposed mainly for internal framework
                         * use such as WebSocket upgrades in the spring-webflux module.
                         */
                        // @ts-ignore
                        public abstract getNativeRequest<T>(): T
                    }
                }
            }
        }
    }
}
