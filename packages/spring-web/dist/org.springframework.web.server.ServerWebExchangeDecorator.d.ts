declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * A convenient base class for classes that need to wrap another
                 * {@link ServerWebExchange}. Pre-implements all methods by delegating to the
                 * wrapped instance.
                 * <p><strong>Note:</strong> if the purpose for using a decorator is to override
                 * properties like {@link #getPrincipal()}, consider using
                 * {@link ServerWebExchange#mutate()} instead.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see ServerWebExchange#mutate()
                 */
                // @ts-ignore
                class ServerWebExchangeDecorator extends java.lang.Object implements org.springframework.web.server.ServerWebExchange {
                    // @ts-ignore
                    constructor(delegate: org.springframework.web.server.ServerWebExchange)
                    // @ts-ignore
                    getDelegate(): org.springframework.web.server.ServerWebExchange
                    // @ts-ignore
                    getRequest(): org.springframework.http.server.reactive.ServerHttpRequest
                    // @ts-ignore
                    getResponse(): org.springframework.http.server.reactive.ServerHttpResponse
                    // @ts-ignore
                    getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    getSession(): <any>
                    // @ts-ignore
                    getPrincipal<T extends java.security.Principal>(): <any>
                    // @ts-ignore
                    getLocaleContext(): LocaleContext
                    // @ts-ignore
                    getApplicationContext(): ApplicationContext
                    // @ts-ignore
                    getFormData(): <any>
                    // @ts-ignore
                    getMultipartData(): <any>
                    // @ts-ignore
                    isNotModified(): boolean
                    // @ts-ignore
                    checkNotModified(lastModified: java.time.Instant): boolean
                    // @ts-ignore
                    checkNotModified(etag: string): boolean
                    // @ts-ignore
                    checkNotModified(etag: string, lastModified: java.time.Instant): boolean
                    // @ts-ignore
                    transformUrl(url: string): java.lang.String
                    // @ts-ignore
                    addUrlTransformer(transformer: java.util.function.Function<java.lang.String, java.lang.String> | java.util.function$.Function<java.lang.String, java.lang.String>): void
                    // @ts-ignore
                    getLogPrefix(): java.lang.String
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
