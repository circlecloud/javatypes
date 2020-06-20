declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * A holder for a thread-local {@link JodaTimeContext}
                     * with user-specific Joda-Time settings.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see org.springframework.context.i18n.LocaleContextHolder
                     */
                    // @ts-ignore
                    class JodaTimeContextHolder extends java.lang.Object {
                        /**
                         * Reset the JodaTimeContext for the current thread.
                         */
                        // @ts-ignore
                        resetJodaTimeContext(): void
                        /**
                         * Associate the given JodaTimeContext with the current thread.
                         * @param jodaTimeContext the current JodaTimeContext,
                         *  or {#code null} to reset the thread-bound context
                         */
                        // @ts-ignore
                        setJodaTimeContext(jodaTimeContext: org.springframework.format.datetime.joda.JodaTimeContext): void
                        /**
                         * Return the JodaTimeContext associated with the current thread, if any.
                         * @return the current JodaTimeContext, or {#code null} if none
                         */
                        // @ts-ignore
                        getJodaTimeContext(): org.springframework.format.datetime.joda.JodaTimeContext
                        /**
                         * Obtain a DateTimeFormatter with user-specific settings applied to the given base Formatter.
                         * @param formatter the base formatter that establishes default formatting rules
                         *  (generally user independent)
                         * @param locale the current user locale (may be {#code null} if not known)
                         * @return the user-specific DateTimeFormatter
                         */
                        // @ts-ignore
                        getFormatter(formatter: DateTimeFormatter, locale: java.util.Locale): DateTimeFormatter
                    }
                }
            }
        }
    }
}
