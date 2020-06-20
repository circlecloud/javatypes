declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * Default implementation of {@link ServerWebExchange}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultServerWebExchange extends java.lang.Object implements org.springframework.web.server.ServerWebExchange {
                        // @ts-ignore
                        constructor(request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, sessionManager: org.springframework.web.server.session.WebSessionManager, codecConfigurer: org.springframework.http.codec.ServerCodecConfigurer, localeContextResolver: org.springframework.web.server.i18n.LocaleContextResolver)
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
                        getFormData(): <any>
                        // @ts-ignore
                        getMultipartData(): <any>
                        // @ts-ignore
                        getLocaleContext(): LocaleContext
                        // @ts-ignore
                        getApplicationContext(): ApplicationContext
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
                    }
                }
            }
        }
    }
}
