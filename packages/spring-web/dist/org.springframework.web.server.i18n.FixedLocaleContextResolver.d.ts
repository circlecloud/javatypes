declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace i18n {
                    /**
                     * {@link LocaleContextResolver} implementation that always returns a fixed locale
                     * and optionally time zone. Default is the current JVM's default locale.
                     * <p>Note: Does not support {@link #setLocaleContext}, as the fixed locale and
                     * time zone cannot be changed.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    class FixedLocaleContextResolver extends java.lang.Object implements org.springframework.web.server.i18n.LocaleContextResolver {
                        /**
                         * Create a default FixedLocaleResolver, exposing a configured default
                         * locale (or the JVM's default locale as fallback).
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a FixedLocaleResolver that exposes the given locale.
                         * @param locale the locale to expose
                         */
                        // @ts-ignore
                        constructor(locale: java.util.Locale)
                        /**
                         * Create a FixedLocaleResolver that exposes the given locale and time zone.
                         * @param locale the locale to expose
                         * @param timeZone the time zone to expose
                         */
                        // @ts-ignore
                        constructor(locale: java.util.Locale, timeZone: java.util.TimeZone)
                        // @ts-ignore
                        public resolveLocaleContext(exchange: org.springframework.web.server.ServerWebExchange): LocaleContext
                        // @ts-ignore
                        public setLocaleContext(exchange: org.springframework.web.server.ServerWebExchange, localeContext: LocaleContext): void
                    }
                }
            }
        }
    }
}
