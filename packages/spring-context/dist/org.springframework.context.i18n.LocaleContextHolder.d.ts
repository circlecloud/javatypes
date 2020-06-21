declare namespace org {
    namespace springframework {
        namespace context {
            namespace i18n {
                /**
                 * Simple holder class that associates a LocaleContext instance
                 * with the current thread. The LocaleContext will be inherited
                 * by any child threads spawned by the current thread if the
                 * {@code inheritable} flag is set to {@code true}.
                 * <p>Used as a central holder for the current Locale in Spring,
                 * wherever necessary: for example, in MessageSourceAccessor.
                 * DispatcherServlet automatically exposes its current Locale here.
                 * Other applications can expose theirs too, to make classes like
                 * MessageSourceAccessor automatically use that Locale.
                 * @author Juergen Hoeller
                 * @author Nicholas Williams
                 * @since 1.2
                 * @see LocaleContext
                 * @see org.springframework.context.support.MessageSourceAccessor
                 * @see org.springframework.web.servlet.DispatcherServlet
                 */
                // @ts-ignore
                class LocaleContextHolder extends java.lang.Object {
                    /**
                     * Reset the LocaleContext for the current thread.
                     */
                    // @ts-ignore
                    public static resetLocaleContext(): void
                    /**
                     * Associate the given LocaleContext with the current thread,
                     * <i>not</i> exposing it as inheritable for child threads.
                     * <p>The given LocaleContext may be a {@link TimeZoneAwareLocaleContext},
                     * containing a locale with associated time zone information.
                     * @param localeContext the current LocaleContext,
                     *  or {#code null} to reset the thread-bound context
                     * @see SimpleLocaleContext
                     * @see SimpleTimeZoneAwareLocaleContext
                     */
                    // @ts-ignore
                    public static setLocaleContext(localeContext: org.springframework.context.i18n.LocaleContext): void
                    /**
                     * Associate the given LocaleContext with the current thread.
                     * <p>The given LocaleContext may be a {@link TimeZoneAwareLocaleContext},
                     * containing a locale with associated time zone information.
                     * @param localeContext the current LocaleContext,
                     *  or {#code null} to reset the thread-bound context
                     * @param inheritable whether to expose the LocaleContext as inheritable
                     *  for child threads (using an {#link InheritableThreadLocal})
                     * @see SimpleLocaleContext
                     * @see SimpleTimeZoneAwareLocaleContext
                     */
                    // @ts-ignore
                    public static setLocaleContext(localeContext: org.springframework.context.i18n.LocaleContext, inheritable: boolean): void
                    /**
                     * Return the LocaleContext associated with the current thread, if any.
                     * @return the current LocaleContext, or {#code null} if none
                     */
                    // @ts-ignore
                    public static getLocaleContext(): org.springframework.context.i18n.LocaleContext
                    /**
                     * Associate the given Locale with the current thread,
                     * preserving any TimeZone that may have been set already.
                     * <p>Will implicitly create a LocaleContext for the given Locale,
                     * <i>not</i> exposing it as inheritable for child threads.
                     * @param locale the current Locale, or {#code null} to reset
                     *  the locale part of thread-bound context
                     * @see #setTimeZone(TimeZone)
                     * @see SimpleLocaleContext#SimpleLocaleContext(Locale)
                     */
                    // @ts-ignore
                    public static setLocale(locale: java.util.Locale): void
                    /**
                     * Associate the given Locale with the current thread,
                     * preserving any TimeZone that may have been set already.
                     * <p>Will implicitly create a LocaleContext for the given Locale.
                     * @param locale the current Locale, or {#code null} to reset
                     *  the locale part of thread-bound context
                     * @param inheritable whether to expose the LocaleContext as inheritable
                     *  for child threads (using an {#link InheritableThreadLocal})
                     * @see #setTimeZone(TimeZone, boolean)
                     * @see SimpleLocaleContext#SimpleLocaleContext(Locale)
                     */
                    // @ts-ignore
                    public static setLocale(locale: java.util.Locale, inheritable: boolean): void
                    /**
                     * Set a shared default locale at the framework level,
                     * as an alternative to the JVM-wide default locale.
                     * <p><b>NOTE:</b> This can be useful to set an application-level
                     * default locale which differs from the JVM-wide default locale.
                     * However, this requires each such application to operate against
                     * locally deployed Spring Framework jars. Do not deploy Spring
                     * as a shared library at the server level in such a scenario!
                     * @param locale the default locale (or {#code null} for none,
                     *  letting lookups fall back to {@link Locale#getDefault()})
                     * @since 4.3.5
                     * @see #getLocale()
                     * @see Locale#getDefault()
                     */
                    // @ts-ignore
                    public static setDefaultLocale(locale: java.util.Locale): void
                    /**
                     * Return the Locale associated with the current thread, if any,
                     * or the system default Locale otherwise. This is effectively a
                     * replacement for {@link java.util.Locale#getDefault()},
                     * able to optionally respect a user-level Locale setting.
                     * <p>Note: This method has a fallback to the shared default Locale,
                     * either at the framework level or at the JVM-wide system level.
                     * If you'd like to check for the raw LocaleContext content
                     * (which may indicate no specific locale through {@code null}, use
                     * {@link #getLocaleContext()} and call {@link LocaleContext#getLocale()}
                     * @return the current Locale, or the system default Locale if no
                     *  specific Locale has been associated with the current thread
                     * @see #getLocaleContext()
                     * @see LocaleContext#getLocale()
                     * @see #setDefaultLocale(Locale)
                     * @see java.util.Locale#getDefault()
                     */
                    // @ts-ignore
                    public static getLocale(): java.util.Locale
                    /**
                     * Return the Locale associated with the given user context, if any,
                     * or the system default Locale otherwise. This is effectively a
                     * replacement for {@link java.util.Locale#getDefault()},
                     * able to optionally respect a user-level Locale setting.
                     * @param localeContext the user-level locale context to check
                     * @return the current Locale, or the system default Locale if no
                     *  specific Locale has been associated with the current thread
                     * @since 5.0
                     * @see #getLocale()
                     * @see LocaleContext#getLocale()
                     * @see #setDefaultLocale(Locale)
                     * @see java.util.Locale#getDefault()
                     */
                    // @ts-ignore
                    public static getLocale(localeContext: org.springframework.context.i18n.LocaleContext): java.util.Locale
                    /**
                     * Associate the given TimeZone with the current thread,
                     * preserving any Locale that may have been set already.
                     * <p>Will implicitly create a LocaleContext for the given Locale,
                     * <i>not</i> exposing it as inheritable for child threads.
                     * @param timeZone the current TimeZone, or {#code null} to reset
                     *  the time zone part of the thread-bound context
                     * @see #setLocale(Locale)
                     * @see SimpleTimeZoneAwareLocaleContext#SimpleTimeZoneAwareLocaleContext(Locale, TimeZone)
                     */
                    // @ts-ignore
                    public static setTimeZone(timeZone: java.util.TimeZone): void
                    /**
                     * Associate the given TimeZone with the current thread,
                     * preserving any Locale that may have been set already.
                     * <p>Will implicitly create a LocaleContext for the given Locale.
                     * @param timeZone the current TimeZone, or {#code null} to reset
                     *  the time zone part of the thread-bound context
                     * @param inheritable whether to expose the LocaleContext as inheritable
                     *  for child threads (using an {#link InheritableThreadLocal})
                     * @see #setLocale(Locale, boolean)
                     * @see SimpleTimeZoneAwareLocaleContext#SimpleTimeZoneAwareLocaleContext(Locale, TimeZone)
                     */
                    // @ts-ignore
                    public static setTimeZone(timeZone: java.util.TimeZone, inheritable: boolean): void
                    /**
                     * Set a shared default time zone at the framework level,
                     * as an alternative to the JVM-wide default time zone.
                     * <p><b>NOTE:</b> This can be useful to set an application-level
                     * default time zone which differs from the JVM-wide default time zone.
                     * However, this requires each such application to operate against
                     * locally deployed Spring Framework jars. Do not deploy Spring
                     * as a shared library at the server level in such a scenario!
                     * @param timeZone the default time zone (or {#code null} for none,
                     *  letting lookups fall back to {@link TimeZone#getDefault()})
                     * @since 4.3.5
                     * @see #getTimeZone()
                     * @see TimeZone#getDefault()
                     */
                    // @ts-ignore
                    public static setDefaultTimeZone(timeZone: java.util.TimeZone): void
                    /**
                     * Return the TimeZone associated with the current thread, if any,
                     * or the system default TimeZone otherwise. This is effectively a
                     * replacement for {@link java.util.TimeZone#getDefault()},
                     * able to optionally respect a user-level TimeZone setting.
                     * <p>Note: This method has a fallback to the shared default TimeZone,
                     * either at the framework level or at the JVM-wide system level.
                     * If you'd like to check for the raw LocaleContext content
                     * (which may indicate no specific time zone through {@code null}, use
                     * {@link #getLocaleContext()} and call {@link TimeZoneAwareLocaleContext#getTimeZone()}
                     * after downcasting to {@link TimeZoneAwareLocaleContext}.
                     * @return the current TimeZone, or the system default TimeZone if no
                     *  specific TimeZone has been associated with the current thread
                     * @see #getLocaleContext()
                     * @see TimeZoneAwareLocaleContext#getTimeZone()
                     * @see #setDefaultTimeZone(TimeZone)
                     * @see java.util.TimeZone#getDefault()
                     */
                    // @ts-ignore
                    public static getTimeZone(): java.util.TimeZone
                    /**
                     * Return the TimeZone associated with the given user context, if any,
                     * or the system default TimeZone otherwise. This is effectively a
                     * replacement for {@link java.util.TimeZone#getDefault()},
                     * able to optionally respect a user-level TimeZone setting.
                     * @param localeContext the user-level locale context to check
                     * @return the current TimeZone, or the system default TimeZone if no
                     *  specific TimeZone has been associated with the current thread
                     * @since 5.0
                     * @see #getTimeZone()
                     * @see TimeZoneAwareLocaleContext#getTimeZone()
                     * @see #setDefaultTimeZone(TimeZone)
                     * @see java.util.TimeZone#getDefault()
                     */
                    // @ts-ignore
                    public static getTimeZone(localeContext: org.springframework.context.i18n.LocaleContext): java.util.TimeZone
                }
            }
        }
    }
}
