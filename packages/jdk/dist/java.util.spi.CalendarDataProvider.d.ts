declare namespace java {
    namespace util {
        namespace spi {
            /**
             * An abstract class for service providers that provide locale-dependent {@link
             * Calendar} parameters.
             * @author Masayoshi Okutsu
             * @since 1.8
             * @see CalendarNameProvider
             */
            // @ts-ignore
            class CalendarDataProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor. (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the first day of a week in the given {@code locale}. This
                 * information is required by {@link Calendar} to support operations on the
                 * week-related calendar fields.
                 * @param locale
                 *         the desired locale
                 * @return the first day of a week; one of {#link Calendar#SUNDAY} ..
                 *          {@link Calendar#SATURDAY},
                 *          or 0 if the value isn't available for the {@code locale}
                 * @throws NullPointerException
                 *          if {#code locale} is {@code null}.
                 * @see java.util.Calendar#getFirstDayOfWeek()
                 * @see <a href="../Calendar.html#first_week">First Week</a>
                 */
                // @ts-ignore
                abstract getFirstDayOfWeek(locale: java.util.Locale): int
                /**
                 * Returns the minimal number of days required in the first week of a
                 * year. This information is required by {@link Calendar} to determine the
                 * first week of a year. Refer to the description of <a
                 * href="../Calendar.html#first_week"> how {@code Calendar} determines
                 * the first week</a>.
                 * @param locale
                 *         the desired locale
                 * @return the minimal number of days of the first week,
                 *          or 0 if the value isn't available for the {#code locale}
                 * @throws NullPointerException
                 *          if {#code locale} is {@code null}.
                 * @see java.util.Calendar#getMinimalDaysInFirstWeek()
                 */
                // @ts-ignore
                abstract getMinimalDaysInFirstWeek(locale: java.util.Locale): int
            }
        }
    }
}
