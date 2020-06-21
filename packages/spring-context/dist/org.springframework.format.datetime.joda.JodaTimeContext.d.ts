declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * A context that holds user-specific Joda-Time settings such as the user's
                     * Chronology (calendar system) and time zone.
                     * <p>A {@code null} property value indicate the user has not specified a setting.
                     * @author Keith Donald
                     * @since 3.0
                     * @see JodaTimeContextHolder
                     */
                    // @ts-ignore
                    class JodaTimeContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the user's chronology (calendar system).
                         */
                        // @ts-ignore
                        public setChronology(chronology: Chronology): void
                        /**
                         * Return the user's chronology (calendar system), if any.
                         */
                        // @ts-ignore
                        public getChronology(): Chronology
                        /**
                         * Set the user's time zone.
                         * <p>Alternatively, set a {@link TimeZoneAwareLocaleContext} on
                         * {@link LocaleContextHolder}. This context class will fall back to
                         * checking the locale context if no setting has been provided here.
                         * @see org.springframework.context.i18n.LocaleContextHolder#getTimeZone()
                         * @see org.springframework.context.i18n.LocaleContextHolder#setLocaleContext
                         */
                        // @ts-ignore
                        public setTimeZone(timeZone: DateTimeZone): void
                        /**
                         * Return the user's time zone, if any.
                         */
                        // @ts-ignore
                        public getTimeZone(): DateTimeZone
                        /**
                         * Get the DateTimeFormatter with the this context's settings
                         * applied to the base {@code formatter}.
                         * @param formatter the base formatter that establishes default
                         *  formatting rules, generally context-independent
                         * @return the contextual DateTimeFormatter
                         */
                        // @ts-ignore
                        public getFormatter(formatter: DateTimeFormatter): DateTimeFormatter
                    }
                }
            }
        }
    }
}
