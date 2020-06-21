declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * A context that holds user-specific <code>java.time</code> (JSR-310) settings
                     * such as the user's Chronology (calendar system) and time zone.
                     * A {@code null} property value indicate the user has not specified a setting.
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see DateTimeContextHolder
                     */
                    // @ts-ignore
                    class DateTimeContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the user's chronology (calendar system).
                         */
                        // @ts-ignore
                        public setChronology(chronology: java.time.chrono.Chronology): void
                        /**
                         * Return the user's chronology (calendar system), if any.
                         */
                        // @ts-ignore
                        public getChronology(): java.time.chrono.Chronology
                        /**
                         * Set the user's time zone.
                         * <p>Alternatively, set a {@link TimeZoneAwareLocaleContext} on
                         * {@link LocaleContextHolder}. This context class will fall back to
                         * checking the locale context if no setting has been provided here.
                         * @see org.springframework.context.i18n.LocaleContextHolder#getTimeZone()
                         * @see org.springframework.context.i18n.LocaleContextHolder#setLocaleContext
                         */
                        // @ts-ignore
                        public setTimeZone(timeZone: java.time.ZoneId): void
                        /**
                         * Return the user's time zone, if any.
                         */
                        // @ts-ignore
                        public getTimeZone(): java.time.ZoneId
                        /**
                         * Get the DateTimeFormatter with the this context's settings
                         * applied to the base {@code formatter}.
                         * @param formatter the base formatter that establishes default
                         *  formatting rules, generally context-independent
                         * @return the contextual DateTimeFormatter
                         */
                        // @ts-ignore
                        public getFormatter(formatter: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatter
                    }
                }
            }
        }
    }
}
