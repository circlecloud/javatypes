declare namespace java {
    namespace util {
        namespace Calendar {
            /**
             * {@code Calendar.Builder} is used for creating a {@code Calendar} from
             * various date-time parameters.
             * <p>There are two ways to set a {@code Calendar} to a date-time value. One
             * is to set the instant parameter to a millisecond offset from the <a
             * href="Calendar.html#Epoch">Epoch</a>. The other is to set individual
             * field parameters, such as {@link Calendar#YEAR YEAR}, to their desired
             * values. These two ways can't be mixed. Trying to set both the instant and
             * individual fields will cause an {@link IllegalStateException} to be
             * thrown. However, it is permitted to override previous values of the
             * instant or field parameters.
             * <p>If no enough field parameters are given for determining date and/or
             * time, calendar specific default values are used when building a
             * {@code Calendar}. For example, if the {@link Calendar#YEAR YEAR} value
             * isn't given for the Gregorian calendar, 1970 will be used. If there are
             * any conflicts among field parameters, the <a
             * href="Calendar.html#resolution"> resolution rules</a> are applied.
             * Therefore, the order of field setting matters.
             * <p>In addition to the date-time parameters,
             * the {@linkplain #setLocale(Locale) locale},
             * {@linkplain #setTimeZone(TimeZone) time zone},
             * {@linkplain #setWeekDefinition(int, int) week definition}, and
             * {@linkplain #setLenient(boolean) leniency mode} parameters can be set.
             * <p><b>Examples</b>
             * <p>The following are sample usages. Sample code assumes that the
             * {@code Calendar} constants are statically imported.
             * <p>The following code produces a {@code Calendar} with date 2012-12-31
             * (Gregorian) because Monday is the first day of a week with the <a
             * href="GregorianCalendar.html#iso8601_compatible_setting"> ISO 8601
             * compatible week parameters</a>.
             * <pre>
             * Calendar cal = new Calendar.Builder().setCalendarType("iso8601")
             * .setWeekDate(2013, 1, MONDAY).build();</pre>
             * <p>The following code produces a Japanese {@code Calendar} with date
             * 1989-01-08 (Gregorian), assuming that the default {@link Calendar#ERA ERA}
             * is <em>Heisei</em> that started on that day.
             * <pre>
             * Calendar cal = new Calendar.Builder().setCalendarType("japanese")
             * .setFields(YEAR, 1, DAY_OF_YEAR, 1).build();</pre>
             * @since 1.8
             * @see Calendar#getInstance(TimeZone, Locale)
             * @see Calendar#fields
             */
            // @ts-ignore
            class Builder extends java.lang.Object {
                /**
                 * Constructs a {@code Calendar.Builder}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the instant parameter to the given {@code instant} value that is
                 * a millisecond offset from <a href="Calendar.html#Epoch">the
                 * Epoch</a>.
                 * @param instant a millisecond offset from the Epoch
                 * @return this {#code Calendar.Builder}
                 * @throws IllegalStateException if any of the field parameters have
                 *                                already been set
                 * @see Calendar#setTime(Date)
                 * @see Calendar#setTimeInMillis(long)
                 * @see Calendar#time
                 */
                // @ts-ignore
                public setInstant(instant: number /*long*/): java.util.Calendar.Builder
                /**
                 * Sets the instant parameter to the {@code instant} value given by a
                 * {@link Date}. This method is equivalent to a call to
                 * {@link #setInstant(long) setInstant(instant.getTime())}.
                 * @param instant a {#code Date} representing a millisecond offset from
                 *                 the Epoch
                 * @return this {#code Calendar.Builder}
                 * @throws NullPointerException  if {#code instant} is {@code null}
                 * @throws IllegalStateException if any of the field parameters have
                 *                                already been set
                 * @see Calendar#setTime(Date)
                 * @see Calendar#setTimeInMillis(long)
                 * @see Calendar#time
                 */
                // @ts-ignore
                public setInstant(instant: java.util.Date): java.util.Calendar.Builder
                /**
                 * Sets the {@code field} parameter to the given {@code value}.
                 * {@code field} is an index to the {@link Calendar#fields}, such as
                 * {@link Calendar#DAY_OF_MONTH DAY_OF_MONTH}. Field value validation is
                 * not performed in this method. Any out of range values are either
                 * normalized in lenient mode or detected as an invalid value in
                 * non-lenient mode when building a {@code Calendar}.
                 * @param field an index to the {#code Calendar} fields
                 * @param value the field value
                 * @return this {#code Calendar.Builder}
                 * @throws IllegalArgumentException if {#code field} is invalid
                 * @throws IllegalStateException if the instant value has already been set,
                 *                       or if fields have been set too many
                 *                       (approximately {#link Integer#MAX_VALUE}) times.
                 * @see Calendar#set(int, int)
                 */
                // @ts-ignore
                public set(field: number /*int*/, value: number /*int*/): java.util.Calendar.Builder
                /**
                 * Sets field parameters to their values given by
                 * {@code fieldValuePairs} that are pairs of a field and its value.
                 * For example,
                 * <pre>
                 * setFeilds(Calendar.YEAR, 2013,
                 * Calendar.MONTH, Calendar.DECEMBER,
                 * Calendar.DAY_OF_MONTH, 23);</pre>
                 * is equivalent to the sequence of the following
                 * {@link #set(int, int) set} calls:
                 * <pre>
                 * set(Calendar.YEAR, 2013)
                 * .set(Calendar.MONTH, Calendar.DECEMBER)
                 * .set(Calendar.DAY_OF_MONTH, 23);</pre>
                 * @param fieldValuePairs field-value pairs
                 * @return this {#code Calendar.Builder}
                 * @throws NullPointerException if {#code fieldValuePairs} is {@code null}
                 * @throws IllegalArgumentException if any of fields are invalid,
                 *              or if {#code fieldValuePairs.length} is an odd number.
                 * @throws IllegalStateException    if the instant value has been set,
                 *              or if fields have been set too many (approximately
                 *              {#link Integer#MAX_VALUE}) times.
                 */
                // @ts-ignore
                public setFields(...fieldValuePairs: number /*int*/[]): java.util.Calendar.Builder
                /**
                 * Sets the date field parameters to the values given by {@code year},
                 * {@code month}, and {@code dayOfMonth}. This method is equivalent to
                 * a call to:
                 * <pre>
                 * setFields(Calendar.YEAR, year,
                 * Calendar.MONTH, month,
                 * Calendar.DAY_OF_MONTH, dayOfMonth);</pre>
                 * @param year       the {#link Calendar#YEAR YEAR} value
                 * @param month      the {#link Calendar#MONTH MONTH} value
                 *                    (the month numbering is <em>0-based</em>).
                 * @param dayOfMonth the {#link Calendar#DAY_OF_MONTH DAY_OF_MONTH} value
                 * @return this {#code Calendar.Builder}
                 */
                // @ts-ignore
                public setDate(year: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.util.Calendar.Builder
                /**
                 * Sets the time of day field parameters to the values given by
                 * {@code hourOfDay}, {@code minute}, and {@code second}. This method is
                 * equivalent to a call to:
                 * <pre>
                 * setTimeOfDay(hourOfDay, minute, second, 0);</pre>
                 * @param hourOfDay the {#link Calendar#HOUR_OF_DAY HOUR_OF_DAY} value
                 *                   (24-hour clock)
                 * @param minute    the {#link Calendar#MINUTE MINUTE} value
                 * @param second    the {#link Calendar#SECOND SECOND} value
                 * @return this {#code Calendar.Builder}
                 */
                // @ts-ignore
                public setTimeOfDay(hourOfDay: number /*int*/, minute: number /*int*/, second: number /*int*/): java.util.Calendar.Builder
                /**
                 * Sets the time of day field parameters to the values given by
                 * {@code hourOfDay}, {@code minute}, {@code second}, and
                 * {@code millis}. This method is equivalent to a call to:
                 * <pre>
                 * setFields(Calendar.HOUR_OF_DAY, hourOfDay,
                 * Calendar.MINUTE, minute,
                 * Calendar.SECOND, second,
                 * Calendar.MILLISECOND, millis);</pre>
                 * @param hourOfDay the {#link Calendar#HOUR_OF_DAY HOUR_OF_DAY} value
                 *                   (24-hour clock)
                 * @param minute    the {#link Calendar#MINUTE MINUTE} value
                 * @param second    the {#link Calendar#SECOND SECOND} value
                 * @param millis    the {#link Calendar#MILLISECOND MILLISECOND} value
                 * @return this {#code Calendar.Builder}
                 */
                // @ts-ignore
                public setTimeOfDay(hourOfDay: number /*int*/, minute: number /*int*/, second: number /*int*/, millis: number /*int*/): java.util.Calendar.Builder
                /**
                 * Sets the week-based date parameters to the values with the given
                 * date specifiers - week year, week of year, and day of week.
                 * <p>If the specified calendar doesn't support week dates, the
                 * {@link #build() build} method will throw an {@link IllegalArgumentException}.
                 * @param weekYear   the week year
                 * @param weekOfYear the week number based on {#code weekYear}
                 * @param dayOfWeek  the day of week value: one of the constants
                 *      for the {#link Calendar#DAY_OF_WEEK DAY_OF_WEEK} field:
                 *      {@link Calendar#SUNDAY SUNDAY}, ..., {@link Calendar#SATURDAY SATURDAY}.
                 * @return this {#code Calendar.Builder}
                 * @see Calendar#setWeekDate(int, int, int)
                 * @see Calendar#isWeekDateSupported()
                 */
                // @ts-ignore
                public setWeekDate(weekYear: number /*int*/, weekOfYear: number /*int*/, dayOfWeek: number /*int*/): java.util.Calendar.Builder
                /**
                 * Sets the time zone parameter to the given {@code zone}. If no time
                 * zone parameter is given to this {@code Caledar.Builder}, the
                 * {@linkplain TimeZone#getDefault() default
                 * <code>TimeZone</code>} will be used in the {@link #build() build}
                 * method.
                 * @param zone the {#link TimeZone}
                 * @return this {#code Calendar.Builder}
                 * @throws NullPointerException if {#code zone} is {@code null}
                 * @see Calendar#setTimeZone(TimeZone)
                 */
                // @ts-ignore
                public setTimeZone(zone: java.util.TimeZone): java.util.Calendar.Builder
                /**
                 * Sets the lenient mode parameter to the value given by {@code lenient}.
                 * If no lenient parameter is given to this {@code Calendar.Builder},
                 * lenient mode will be used in the {@link #build() build} method.
                 * @param lenient {#code true} for lenient mode;
                 *                 {@code false} for non-lenient mode
                 * @return this {#code Calendar.Builder}
                 * @see Calendar#setLenient(boolean)
                 */
                // @ts-ignore
                public setLenient(lenient: boolean): java.util.Calendar.Builder
                /**
                 * Sets the calendar type parameter to the given {@code type}. The
                 * calendar type given by this method has precedence over any explicit
                 * or implicit calendar type given by the
                 * {@linkplain #setLocale(Locale) locale}.
                 * <p>In addition to the available calendar types returned by the
                 * {@link Calendar#getAvailableCalendarTypes() Calendar.getAvailableCalendarTypes}
                 * method, {@code "gregorian"} and {@code "iso8601"} as aliases of
                 * {@code "gregory"} can be used with this method.
                 * @param type the calendar type
                 * @return this {#code Calendar.Builder}
                 * @throws NullPointerException if {#code type} is {@code null}
                 * @throws IllegalArgumentException if {#code type} is unknown
                 * @throws IllegalStateException if another calendar type has already been set
                 * @see Calendar#getCalendarType()
                 * @see Calendar#getAvailableCalendarTypes()
                 */
                // @ts-ignore
                public setCalendarType(type: java.lang.String | string): java.util.Calendar.Builder
                /**
                 * Sets the locale parameter to the given {@code locale}. If no locale
                 * is given to this {@code Calendar.Builder}, the {@linkplain
                 * Locale#getDefault(Locale.Category) default <code>Locale</code>}
                 * for {@link Locale.Category#FORMAT} will be used.
                 * <p>If no calendar type is explicitly given by a call to the
                 * {@link #setCalendarType(String) setCalendarType} method,
                 * the {@code Locale} value is used to determine what type of
                 * {@code Calendar} to be built.
                 * <p>If no week definition parameters are explicitly given by a call to
                 * the {@link #setWeekDefinition(int,int) setWeekDefinition} method, the
                 * {@code Locale}'s default values are used.
                 * @param locale the {#link Locale}
                 * @throws NullPointerException if {#code locale} is {@code null}
                 * @return this {#code Calendar.Builder}
                 * @see Calendar#getInstance(Locale)
                 */
                // @ts-ignore
                public setLocale(locale: java.util.Locale): java.util.Calendar.Builder
                /**
                 * Sets the week definition parameters to the values given by
                 * {@code firstDayOfWeek} and {@code minimalDaysInFirstWeek} that are
                 * used to determine the <a href="Calendar.html#First_Week">first
                 * week</a> of a year. The parameters given by this method have
                 * precedence over the default values given by the
                 * {@linkplain #setLocale(Locale) locale}.
                 * @param firstDayOfWeek the first day of a week; one of
                 *                        {#link Calendar#SUNDAY} to {@link Calendar#SATURDAY}
                 * @param minimalDaysInFirstWeek the minimal number of days in the first
                 *                                week (1..7)
                 * @return this {#code Calendar.Builder}
                 * @throws IllegalArgumentException if {#code firstDayOfWeek} or
                 *                                   {@code minimalDaysInFirstWeek} is invalid
                 * @see Calendar#getFirstDayOfWeek()
                 * @see Calendar#getMinimalDaysInFirstWeek()
                 */
                // @ts-ignore
                public setWeekDefinition(firstDayOfWeek: number /*int*/, minimalDaysInFirstWeek: number /*int*/): java.util.Calendar.Builder
                /**
                 * Returns a {@code Calendar} built from the parameters set by the
                 * setter methods. The calendar type given by the {@link #setCalendarType(String)
                 * setCalendarType} method or the {@linkplain #setLocale(Locale) locale} is
                 * used to determine what {@code Calendar} to be created. If no explicit
                 * calendar type is given, the locale's default calendar is created.
                 * <p>If the calendar type is {@code "iso8601"}, the
                 * {@linkplain GregorianCalendar#setGregorianChange(Date) Gregorian change date}
                 * of a {@link GregorianCalendar} is set to {@code Date(Long.MIN_VALUE)}
                 * to be the <em>proleptic</em> Gregorian calendar. Its week definition
                 * parameters are also set to be <a
                 * href="GregorianCalendar.html#iso8601_compatible_setting">compatible
                 * with the ISO 8601 standard</a>. Note that the
                 * {@link GregorianCalendar#getCalendarType() getCalendarType} method of
                 * a {@code GregorianCalendar} created with {@code "iso8601"} returns
                 * {@code "gregory"}.
                 * <p>The default values are used for locale and time zone if these
                 * parameters haven't been given explicitly.
                 * <p>Any out of range field values are either normalized in lenient
                 * mode or detected as an invalid value in non-lenient mode.
                 * @return a {#code Calendar} built with parameters of this {@code
                 *          Calendar.Builder}
                 * @throws IllegalArgumentException if the calendar type is unknown, or
                 *              if any invalid field values are given in non-lenient mode, or
                 *              if a week date is given for the calendar type that doesn't
                 *              support week dates.
                 * @see Calendar#getInstance(TimeZone, Locale)
                 * @see Locale#getDefault(Locale.Category)
                 * @see TimeZone#getDefault()
                 */
                // @ts-ignore
                public build(): java.util.Calendar
            }
        }
    }
}
