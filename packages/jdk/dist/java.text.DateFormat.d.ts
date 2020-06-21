declare namespace java {
    namespace text {
        /**
         * {@code DateFormat} is an abstract class for date/time formatting subclasses which
         * formats and parses dates or time in a language-independent manner.
         * The date/time formatting subclass, such as {@link SimpleDateFormat}, allows for
         * formatting (i.e., date &rarr; text), parsing (text &rarr; date), and
         * normalization.  The date is represented as a <code>Date</code> object or
         * as the milliseconds since January 1, 1970, 00:00:00 GMT.
         * <p>{@code DateFormat} provides many class methods for obtaining default date/time
         * formatters based on the default or a given locale and a number of formatting
         * styles. The formatting styles include {@link #FULL}, {@link #LONG}, {@link #MEDIUM}, and {@link #SHORT}. More
         * detail and examples of using these styles are provided in the method
         * descriptions.
         * <p>{@code DateFormat} helps you to format and parse dates for any locale.
         * Your code can be completely independent of the locale conventions for
         * months, days of the week, or even the calendar format: lunar vs. solar.
         * <p>To format a date for the current Locale, use one of the
         * static factory methods:
         * <blockquote>
         * <pre>{@code
         * myString = DateFormat.getDateInstance().format(myDate);
         * }</pre>
         * </blockquote>
         * <p>If you are formatting multiple dates, it is
         * more efficient to get the format and use it multiple times so that
         * the system doesn't have to fetch the information about the local
         * language and country conventions multiple times.
         * <blockquote>
         * <pre>{@code
         * DateFormat df = DateFormat.getDateInstance();
         * for (int i = 0; i < myDate.length; ++i) {
         * output.println(df.format(myDate[i]) + "; ");
         * }
         * }</pre>
         * </blockquote>
         * <p>To format a date for a different Locale, specify it in the
         * call to {@link #getDateInstance(int, Locale) getDateInstance()}.
         * <blockquote>
         * <pre>{@code
         * DateFormat df = DateFormat.getDateInstance(DateFormat.LONG, Locale.FRANCE);
         * }</pre>
         * </blockquote>
         * <p>You can use a DateFormat to parse also.
         * <blockquote>
         * <pre>{@code
         * myDate = df.parse(myString);
         * }</pre>
         * </blockquote>
         * <p>Use {@code getDateInstance} to get the normal date format for that country.
         * There are other static factory methods available.
         * Use {@code getTimeInstance} to get the time format for that country.
         * Use {@code getDateTimeInstance} to get a date and time format. You can pass in
         * different options to these factory methods to control the length of the
         * result; from {@link #SHORT} to {@link #MEDIUM} to {@link #LONG} to {@link #FULL}. The exact result depends
         * on the locale, but generally:
         * <ul><li>{@link #SHORT} is completely numeric, such as {@code 12.13.52} or {@code 3:30pm}
         * <li>{@link #MEDIUM} is longer, such as {@code Jan 12, 1952}
         * <li>{@link #LONG} is longer, such as {@code January 12, 1952} or {@code 3:30:32pm}
         * <li>{@link #FULL} is pretty completely specified, such as
         * {@code Tuesday, April 12, 1952 AD or 3:30:42pm PST}.
         * </ul>
         * <p>You can also set the time zone on the format if you wish.
         * If you want even more control over the format or parsing,
         * (or want to give your users more control),
         * you can try casting the {@code DateFormat} you get from the factory methods
         * to a {@link SimpleDateFormat}. This will work for the majority
         * of countries; just remember to put it in a {@code try} block in case you
         * encounter an unusual one.
         * <p>You can also use forms of the parse and format methods with
         * {@link ParsePosition} and {@link FieldPosition} to
         * allow you to
         * <ul><li>progressively parse through pieces of a string.
         * <li>align any particular field, or find out where it is for selection
         * on the screen.
         * </ul>
         * <h3><a name="synchronization">Synchronization</a></h3>
         * <p>
         * Date formats are not synchronized.
         * It is recommended to create separate format instances for each thread.
         * If multiple threads access a format concurrently, it must be synchronized
         * externally.
         * @see Format
         * @see NumberFormat
         * @see SimpleDateFormat
         * @see java.util.Calendar
         * @see java.util.GregorianCalendar
         * @see java.util.TimeZone
         * @author Mark Davis, Chen-Lieh Huang, Alan Liu
         */
        // @ts-ignore
        abstract class DateFormat extends java.text.Format {
            /**
             * Create a new date format.
             */
            // @ts-ignore
            constructor()
            /**
             * The {@link Calendar} instance used for calculating the date-time fields
             * and the instant of time. This field is used for both formatting and
             * parsing.
             * <p>Subclasses should initialize this field to a {@link Calendar}
             * appropriate for the {@link Locale} associated with this
             * <code>DateFormat</code>.
             * @serial 
             */
            // @ts-ignore
            calendar: java.util.Calendar
            /**
             * The number formatter that <code>DateFormat</code> uses to format numbers
             * in dates and times.  Subclasses should initialize this to a number format
             * appropriate for the locale associated with this <code>DateFormat</code>.
             * @serial 
             */
            // @ts-ignore
            numberFormat: java.text.NumberFormat
            /**
             * Useful constant for ERA field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly ERA_FIELD: number /*int*/
            /**
             * Useful constant for YEAR field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly YEAR_FIELD: number /*int*/
            /**
             * Useful constant for MONTH field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly MONTH_FIELD: number /*int*/
            /**
             * Useful constant for DATE field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly DATE_FIELD: number /*int*/
            /**
             * Useful constant for one-based HOUR_OF_DAY field alignment.
             * Used in FieldPosition of date/time formatting.
             * HOUR_OF_DAY1_FIELD is used for the one-based 24-hour clock.
             * For example, 23:59 + 01:00 results in 24:59.
             */
            // @ts-ignore
            public static readonly HOUR_OF_DAY1_FIELD: number /*int*/
            /**
             * Useful constant for zero-based HOUR_OF_DAY field alignment.
             * Used in FieldPosition of date/time formatting.
             * HOUR_OF_DAY0_FIELD is used for the zero-based 24-hour clock.
             * For example, 23:59 + 01:00 results in 00:59.
             */
            // @ts-ignore
            public static readonly HOUR_OF_DAY0_FIELD: number /*int*/
            /**
             * Useful constant for MINUTE field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly MINUTE_FIELD: number /*int*/
            /**
             * Useful constant for SECOND field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly SECOND_FIELD: number /*int*/
            /**
             * Useful constant for MILLISECOND field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly MILLISECOND_FIELD: number /*int*/
            /**
             * Useful constant for DAY_OF_WEEK field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly DAY_OF_WEEK_FIELD: number /*int*/
            /**
             * Useful constant for DAY_OF_YEAR field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly DAY_OF_YEAR_FIELD: number /*int*/
            /**
             * Useful constant for DAY_OF_WEEK_IN_MONTH field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly DAY_OF_WEEK_IN_MONTH_FIELD: number /*int*/
            /**
             * Useful constant for WEEK_OF_YEAR field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly WEEK_OF_YEAR_FIELD: number /*int*/
            /**
             * Useful constant for WEEK_OF_MONTH field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly WEEK_OF_MONTH_FIELD: number /*int*/
            /**
             * Useful constant for AM_PM field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly AM_PM_FIELD: number /*int*/
            /**
             * Useful constant for one-based HOUR field alignment.
             * Used in FieldPosition of date/time formatting.
             * HOUR1_FIELD is used for the one-based 12-hour clock.
             * For example, 11:30 PM + 1 hour results in 12:30 AM.
             */
            // @ts-ignore
            public static readonly HOUR1_FIELD: number /*int*/
            /**
             * Useful constant for zero-based HOUR field alignment.
             * Used in FieldPosition of date/time formatting.
             * HOUR0_FIELD is used for the zero-based 12-hour clock.
             * For example, 11:30 PM + 1 hour results in 00:30 AM.
             */
            // @ts-ignore
            public static readonly HOUR0_FIELD: number /*int*/
            /**
             * Useful constant for TIMEZONE field alignment.
             * Used in FieldPosition of date/time formatting.
             */
            // @ts-ignore
            public static readonly TIMEZONE_FIELD: number /*int*/
            /**
             * Constant for full style pattern.
             */
            // @ts-ignore
            public static readonly FULL: number /*int*/
            /**
             * Constant for long style pattern.
             */
            // @ts-ignore
            public static readonly LONG: number /*int*/
            /**
             * Constant for medium style pattern.
             */
            // @ts-ignore
            public static readonly MEDIUM: number /*int*/
            /**
             * Constant for short style pattern.
             */
            // @ts-ignore
            public static readonly SHORT: number /*int*/
            /**
             * Constant for default style pattern.  Its value is MEDIUM.
             */
            // @ts-ignore
            public static readonly DEFAULT: number /*int*/
            /**
             * Overrides Format.
             * Formats a time object into a time string. Examples of time objects
             * are a time value expressed in milliseconds and a Date object.
             * @param obj must be a Number or a Date.
             * @param toAppendTo the string buffer for the returning time string.
             * @return the string buffer passed in as toAppendTo, with formatted text appended.
             * @param fieldPosition keeps track of the position of the field
             *  within the returned string.
             *  On input: an alignment field,
             *  if desired. On output: the offsets of the alignment field. For
             *  example, given a time text "1996.07.10 AD at 15:08:56 PDT",
             *  if the given fieldPosition is DateFormat.YEAR_FIELD, the
             *  begin index and end index of fieldPosition will be set to
             *  0 and 4, respectively.
             *  Notice that if the same time field appears
             *  more than once in a pattern, the fieldPosition will be set for the first
             *  occurrence of that time field. For instance, formatting a Date to
             *  the time string "1 PM PDT (Pacific Daylight Time)" using the pattern
             *  "h a z (zzzz)" and the alignment field DateFormat.TIMEZONE_FIELD,
             *  the begin index and end index of fieldPosition will be set to
             *  5 and 8, respectively, for the first occurrence of the timezone
             *  pattern character 'z'.
             * @see java.text.Format
             */
            // @ts-ignore
            public format(obj: java.lang.Object | any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer
            /**
             * Formats a Date into a date/time string.
             * @param date a Date to be formatted into a date/time string.
             * @param toAppendTo the string buffer for the returning date/time string.
             * @param fieldPosition keeps track of the position of the field
             *  within the returned string.
             *  On input: an alignment field,
             *  if desired. On output: the offsets of the alignment field. For
             *  example, given a time text "1996.07.10 AD at 15:08:56 PDT",
             *  if the given fieldPosition is DateFormat.YEAR_FIELD, the
             *  begin index and end index of fieldPosition will be set to
             *  0 and 4, respectively.
             *  Notice that if the same time field appears
             *  more than once in a pattern, the fieldPosition will be set for the first
             *  occurrence of that time field. For instance, formatting a Date to
             *  the time string "1 PM PDT (Pacific Daylight Time)" using the pattern
             *  "h a z (zzzz)" and the alignment field DateFormat.TIMEZONE_FIELD,
             *  the begin index and end index of fieldPosition will be set to
             *  5 and 8, respectively, for the first occurrence of the timezone
             *  pattern character 'z'.
             * @return the string buffer passed in as toAppendTo, with formatted text appended.
             */
            // @ts-ignore
            public abstract format(date: java.util.Date, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer
            /**
             * Formats a Date into a date/time string.
             * @param date the time value to be formatted into a time string.
             * @return the formatted time string.
             */
            // @ts-ignore
            public format(date: java.util.Date): string
            /**
             * Parses text from the beginning of the given string to produce a date.
             * The method may not use the entire text of the given string.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on date parsing.
             * @param source A <code>String</code> whose beginning should be parsed.
             * @return A <code>Date</code> parsed from the string.
             * @exception ParseException if the beginning of the specified string
             *             cannot be parsed.
             */
            // @ts-ignore
            public parse(source: java.lang.String | string): java.util.Date
            /**
             * Parse a date/time string according to the given parse position.  For
             * example, a time text {@code "07/10/96 4:5 PM, PDT"} will be parsed into a {@code Date}
             * that is equivalent to {@code Date(837039900000L)}.
             * <p> By default, parsing is lenient: If the input is not in the form used
             * by this object's format method but can still be parsed as a date, then
             * the parse succeeds.  Clients may insist on strict adherence to the
             * format by calling {@link #setLenient(boolean) setLenient(false)}.
             * <p>This parsing operation uses the {@link #calendar} to produce
             * a {@code Date}. As a result, the {@code calendar}'s date-time
             * fields and the {@code TimeZone} value may have been
             * overwritten, depending on subclass implementations. Any {@code
             * TimeZone} value that has previously been set by a call to
             * {@link #setTimeZone(java.util.TimeZone) setTimeZone} may need
             * to be restored for further operations.
             * @param source  The date/time string to be parsed
             * @param pos   On input, the position at which to start parsing; on
             *               output, the position at which parsing terminated, or the
             *               start position if the parse failed.
             * @return A {#code Date}, or {@code null} if the input could not be parsed
             */
            // @ts-ignore
            public abstract parse(source: java.lang.String | string, pos: java.text.ParsePosition): java.util.Date
            /**
             * Parses text from a string to produce a <code>Date</code>.
             * <p>
             * The method attempts to parse text starting at the index given by
             * <code>pos</code>.
             * If parsing succeeds, then the index of <code>pos</code> is updated
             * to the index after the last character used (parsing does not necessarily
             * use all characters up to the end of the string), and the parsed
             * date is returned. The updated <code>pos</code> can be used to
             * indicate the starting point for the next call to this method.
             * If an error occurs, then the index of <code>pos</code> is not
             * changed, the error index of <code>pos</code> is set to the index of
             * the character where the error occurred, and null is returned.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on date parsing.
             * @param source A <code>String</code>, part of which should be parsed.
             * @param pos A <code>ParsePosition</code> object with index and error
             *             index information as described above.
             * @return A <code>Date</code> parsed from the string. In case of
             *          error, returns null.
             * @exception NullPointerException if <code>pos</code> is null.
             */
            // @ts-ignore
            public parseObject(source: java.lang.String | string, pos: java.text.ParsePosition): any
            /**
             * Gets the time formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getTimeInstance(int, Locale) getTimeInstance(DEFAULT,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @return a time formatter.
             */
            // @ts-ignore
            public static getTimeInstance(): java.text.DateFormat
            /**
             * Gets the time formatter with the given formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getTimeInstance(int, Locale) getTimeInstance(style,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @param style the given formatting style. For example,
             *  SHORT for "h:mm a" in the US locale.
             * @return a time formatter.
             */
            // @ts-ignore
            public static getTimeInstance(style: number /*int*/): java.text.DateFormat
            /**
             * Gets the time formatter with the given formatting style
             * for the given locale.
             * @param style the given formatting style. For example,
             *  SHORT for "h:mm a" in the US locale.
             * @param aLocale the given locale.
             * @return a time formatter.
             */
            // @ts-ignore
            public static getTimeInstance(style: number /*int*/, aLocale: java.util.Locale): java.text.DateFormat
            /**
             * Gets the date formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateInstance(int, Locale) getDateInstance(DEFAULT,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @return a date formatter.
             */
            // @ts-ignore
            public static getDateInstance(): java.text.DateFormat
            /**
             * Gets the date formatter with the given formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateInstance(int, Locale) getDateInstance(style,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @param style the given formatting style. For example,
             *  SHORT for "M/d/yy" in the US locale.
             * @return a date formatter.
             */
            // @ts-ignore
            public static getDateInstance(style: number /*int*/): java.text.DateFormat
            /**
             * Gets the date formatter with the given formatting style
             * for the given locale.
             * @param style the given formatting style. For example,
             *  SHORT for "M/d/yy" in the US locale.
             * @param aLocale the given locale.
             * @return a date formatter.
             */
            // @ts-ignore
            public static getDateInstance(style: number /*int*/, aLocale: java.util.Locale): java.text.DateFormat
            /**
             * Gets the date/time formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateTimeInstance(int, int, Locale) getDateTimeInstance(DEFAULT,
             * DEFAULT, Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @return a date/time formatter.
             */
            // @ts-ignore
            public static getDateTimeInstance(): java.text.DateFormat
            /**
             * Gets the date/time formatter with the given date and time
             * formatting styles for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateTimeInstance(int, int, Locale) getDateTimeInstance(dateStyle,
             * timeStyle, Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @param dateStyle the given date formatting style. For example,
             *  SHORT for "M/d/yy" in the US locale.
             * @param timeStyle the given time formatting style. For example,
             *  SHORT for "h:mm a" in the US locale.
             * @return a date/time formatter.
             */
            // @ts-ignore
            public static getDateTimeInstance(dateStyle: number /*int*/, timeStyle: number /*int*/): java.text.DateFormat
            /**
             * Gets the date/time formatter with the given formatting styles
             * for the given locale.
             * @param dateStyle the given date formatting style.
             * @param timeStyle the given time formatting style.
             * @param aLocale the given locale.
             * @return a date/time formatter.
             */
            // @ts-ignore
            public static getDateTimeInstance(dateStyle: number /*int*/, timeStyle: number /*int*/, aLocale: java.util.Locale): java.text.DateFormat
            /**
             * Get a default date/time formatter that uses the SHORT style for both the
             * date and the time.
             * @return a date/time formatter
             */
            // @ts-ignore
            public static getInstance(): java.text.DateFormat
            /**
             * Returns an array of all locales for which the
             * <code>get*Instance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.DateFormatProvider DateFormatProvider} implementations.
             * It must contain at least a <code>Locale</code> instance equal to
             * {@link java.util.Locale#US Locale.US}.
             * @return An array of locales for which localized
             *          <code>DateFormat</code> instances are available.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[]
            /**
             * Set the calendar to be used by this date format.  Initially, the default
             * calendar for the specified or default locale is used.
             * <p>Any {@link java.util.TimeZone TimeZone} and {@linkplain
             * #isLenient() leniency} values that have previously been set are
             * overwritten by {@code newCalendar}'s values.
             * @param newCalendar the new {#code Calendar} to be used by the date format
             */
            // @ts-ignore
            public setCalendar(newCalendar: java.util.Calendar): void
            /**
             * Gets the calendar associated with this date/time formatter.
             * @return the calendar associated with this date/time formatter.
             */
            // @ts-ignore
            public getCalendar(): java.util.Calendar
            /**
             * Allows you to set the number formatter.
             * @param newNumberFormat the given new NumberFormat.
             */
            // @ts-ignore
            public setNumberFormat(newNumberFormat: java.text.NumberFormat): void
            /**
             * Gets the number formatter which this date/time formatter uses to
             * format and parse a time.
             * @return the number formatter which this date/time formatter uses.
             */
            // @ts-ignore
            public getNumberFormat(): java.text.NumberFormat
            /**
             * Sets the time zone for the calendar of this {@code DateFormat} object.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().setTimeZone(zone)
             * }</pre></blockquote>
             * <p>The {@code TimeZone} set by this method is overwritten by a
             * {@link #setCalendar(java.util.Calendar) setCalendar} call.
             * <p>The {@code TimeZone} set by this method may be overwritten as
             * a result of a call to the parse method.
             * @param zone the given new time zone.
             */
            // @ts-ignore
            public setTimeZone(zone: java.util.TimeZone): void
            /**
             * Gets the time zone.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().getTimeZone()
             * }</pre></blockquote>
             * @return the time zone associated with the calendar of DateFormat.
             */
            // @ts-ignore
            public getTimeZone(): java.util.TimeZone
            /**
             * Specify whether or not date/time parsing is to be lenient.  With
             * lenient parsing, the parser may use heuristics to interpret inputs that
             * do not precisely match this object's format.  With strict parsing,
             * inputs must match this object's format.
             * <p>This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().setLenient(lenient)
             * }</pre></blockquote>
             * <p>This leniency value is overwritten by a call to {@link
             * #setCalendar(java.util.Calendar) setCalendar()}.
             * @param lenient when {#code true}, parsing is lenient
             * @see java.util.Calendar#setLenient(boolean)
             */
            // @ts-ignore
            public setLenient(lenient: boolean): void
            /**
             * Tell whether date/time parsing is to be lenient.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().isLenient()
             * }</pre></blockquote>
             * @return {#code true} if the {@link #calendar} is lenient;
             *          {@code false} otherwise.
             * @see java.util.Calendar#isLenient()
             */
            // @ts-ignore
            public isLenient(): boolean
            /**
             * Overrides hashCode
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
