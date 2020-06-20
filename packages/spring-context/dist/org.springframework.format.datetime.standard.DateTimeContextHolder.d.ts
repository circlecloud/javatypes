declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * A holder for a thread-local user {@link DateTimeContext}.
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see org.springframework.context.i18n.LocaleContextHolder
                     */
                    // @ts-ignore
                    class DateTimeContextHolder extends java.lang.Object {
                        /**
                         * Reset the DateTimeContext for the current thread.
                         */
                        // @ts-ignore
                        resetDateTimeContext(): void
                        /**
                         * Associate the given DateTimeContext with the current thread.
                         * @param dateTimeContext the current DateTimeContext,
                         *  or {#code null} to reset the thread-bound context
                         */
                        // @ts-ignore
                        setDateTimeContext(dateTimeContext: org.springframework.format.datetime.standard.DateTimeContext): void
                        /**
                         * Return the DateTimeContext associated with the current thread, if any.
                         * @return the current DateTimeContext, or {#code null} if none
                         */
                        // @ts-ignore
                        getDateTimeContext(): org.springframework.format.datetime.standard.DateTimeContext
                        /**
                         * Obtain a DateTimeFormatter with user-specific settings applied to the given base Formatter.
                         * @param formatter the base formatter that establishes default formatting rules
                         *  (generally user independent)
                         * @param locale the current user locale (may be {#code null} if not known)
                         * @return the user-specific DateTimeFormatter
                         */
                        // @ts-ignore
                        getFormatter(formatter: java.time.format.DateTimeFormatter, locale: java.util.Locale): java.time.format.DateTimeFormatter
                    }
                }
            }
        }
    }
}
