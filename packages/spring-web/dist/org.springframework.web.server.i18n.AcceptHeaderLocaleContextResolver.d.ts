declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace i18n {
                    /**
                     * {@link LocaleContextResolver} implementation that simply uses the primary locale
                     * specified in the "Accept-Language" header of the HTTP request (that is,
                     * the locale sent by the client browser, normally that of the client's OS).
                     * <p>Note: Does not support {@link #setLocaleContext}, since the accept header
                     * can only be changed through changing the client's locale settings.
                     * @author Sebastien Deleuze
                     * @author Juergen Hoeller
                     * @since 5.0
                     * @see HttpHeaders#getAcceptLanguageAsLocales()
                     */
                    // @ts-ignore
                    class AcceptHeaderLocaleContextResolver extends java.lang.Object implements org.springframework.web.server.i18n.LocaleContextResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Configure supported locales to check against the requested locales
                         * determined via {@link HttpHeaders#getAcceptLanguageAsLocales()}.
                         * @param locales the supported locales
                         */
                        // @ts-ignore
                        public setSupportedLocales(locales: java.util.List<java.util.Locale> | Array<java.util.Locale>): void
                        /**
                         * Return the configured list of supported locales.
                         */
                        // @ts-ignore
                        public getSupportedLocales(): Array<java.util.Locale>
                        /**
                         * Configure a fixed default locale to fall back on if the request does not
                         * have an "Accept-Language" header (not set by default).
                         * @param defaultLocale the default locale to use
                         */
                        // @ts-ignore
                        public setDefaultLocale(defaultLocale: java.util.Locale): void
                        /**
                         * The configured default locale, if any.
                         * <p>This method may be overridden in subclasses.
                         */
                        // @ts-ignore
                        public getDefaultLocale(): java.util.Locale
                        // @ts-ignore
                        public resolveLocaleContext(exchange: org.springframework.web.server.ServerWebExchange): LocaleContext
                        // @ts-ignore
                        public setLocaleContext(exchange: org.springframework.web.server.ServerWebExchange, locale: LocaleContext): void
                    }
                }
            }
        }
    }
}
