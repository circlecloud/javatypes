declare namespace java {
    namespace util {
        /**
         * <code>GregorianCalendar</code> is a concrete subclass of
         * <code>Calendar</code> and provides the standard calendar system
         * used by most of the world.
         * <p> <code>GregorianCalendar</code> is a hybrid calendar that
         * supports both the Julian and Gregorian calendar systems with the
         * support of a single discontinuity, which corresponds by default to
         * the Gregorian date when the Gregorian calendar was instituted
         * (October 15, 1582 in some countries, later in others).  The cutover
         * date may be changed by the caller by calling {@link
         * #setGregorianChange(Date) setGregorianChange()}.
         * <p>
         * Historically, in those countries which adopted the Gregorian calendar first,
         * October 4, 1582 (Julian) was thus followed by October 15, 1582 (Gregorian). This calendar models
         * this correctly.  Before the Gregorian cutover, <code>GregorianCalendar</code>
         * implements the Julian calendar.  The only difference between the Gregorian
         * and the Julian calendar is the leap year rule. The Julian calendar specifies
         * leap years every four years, whereas the Gregorian calendar omits century
         * years which are not divisible by 400.
         * <p>
         * <code>GregorianCalendar</code> implements <em>proleptic</em> Gregorian and
         * Julian calendars. That is, dates are computed by extrapolating the current
         * rules indefinitely far backward and forward in time. As a result,
         * <code>GregorianCalendar</code> may be used for all years to generate
         * meaningful and consistent results. However, dates obtained using
         * <code>GregorianCalendar</code> are historically accurate only from March 1, 4
         * AD onward, when modern Julian calendar rules were adopted.  Before this date,
         * leap year rules were applied irregularly, and before 45 BC the Julian
         * calendar did not even exist.
         * <p>
         * Prior to the institution of the Gregorian calendar, New Year's Day was
         * March 25. To avoid confusion, this calendar always uses January 1. A manual
         * adjustment may be made if desired for dates that are prior to the Gregorian
         * changeover and which fall between January 1 and March 24.
         * <h3><a name="week_and_year">Week Of Year and Week Year</a></h3>
         * <p>Values calculated for the {@link Calendar#WEEK_OF_YEAR
         * WEEK_OF_YEAR} field range from 1 to 53. The first week of a
         * calendar year is the earliest seven day period starting on {@link
         * Calendar#getFirstDayOfWeek() getFirstDayOfWeek()} that contains at
         * least {@link Calendar#getMinimalDaysInFirstWeek()
         * getMinimalDaysInFirstWeek()} days from that year. It thus depends
         * on the values of {@code getMinimalDaysInFirstWeek()}, {@code
         * getFirstDayOfWeek()}, and the day of the week of January 1. Weeks
         * between week 1 of one year and week 1 of the following year
         * (exclusive) are numbered sequentially from 2 to 52 or 53 (except
         * for year(s) involved in the Julian-Gregorian transition).
         * <p>The {@code getFirstDayOfWeek()} and {@code
         * getMinimalDaysInFirstWeek()} values are initialized using
         * locale-dependent resources when constructing a {@code
         * GregorianCalendar}. <a name="iso8601_compatible_setting">The week
         * determination is compatible</a> with the ISO 8601 standard when {@code
         * getFirstDayOfWeek()} is {@code MONDAY} and {@code
         * getMinimalDaysInFirstWeek()} is 4, which values are used in locales
         * where the standard is preferred. These values can explicitly be set by
         * calling {@link Calendar#setFirstDayOfWeek(int) setFirstDayOfWeek()} and
         * {@link Calendar#setMinimalDaysInFirstWeek(int)
         * setMinimalDaysInFirstWeek()}.
         * <p>A <a name="week_year"><em>week year</em></a> is in sync with a
         * {@code WEEK_OF_YEAR} cycle. All weeks between the first and last
         * weeks (inclusive) have the same <em>week year</em> value.
         * Therefore, the first and last days of a week year may have
         * different calendar year values.
         * <p>For example, January 1, 1998 is a Thursday. If {@code
         * getFirstDayOfWeek()} is {@code MONDAY} and {@code
         * getMinimalDaysInFirstWeek()} is 4 (ISO 8601 standard compatible
         * setting), then week 1 of 1998 starts on December 29, 1997, and ends
         * on January 4, 1998. The week year is 1998 for the last three days
         * of calendar year 1997. If, however, {@code getFirstDayOfWeek()} is
         * {@code SUNDAY}, then week 1 of 1998 starts on January 4, 1998, and
         * ends on January 10, 1998; the first three days of 1998 then are
         * part of week 53 of 1997 and their week year is 1997.
         * <h4>Week Of Month</h4>
         * <p>Values calculated for the <code>WEEK_OF_MONTH</code> field range from 0
         * to 6.  Week 1 of a month (the days with <code>WEEK_OF_MONTH =
         * 1</code>) is the earliest set of at least
         * <code>getMinimalDaysInFirstWeek()</code> contiguous days in that month,
         * ending on the day before <code>getFirstDayOfWeek()</code>.  Unlike
         * week 1 of a year, week 1 of a month may be shorter than 7 days, need
         * not start on <code>getFirstDayOfWeek()</code>, and will not include days of
         * the previous month.  Days of a month before week 1 have a
         * <code>WEEK_OF_MONTH</code> of 0.
         * <p>For example, if <code>getFirstDayOfWeek()</code> is <code>SUNDAY</code>
         * and <code>getMinimalDaysInFirstWeek()</code> is 4, then the first week of
         * January 1998 is Sunday, January 4 through Saturday, January 10.  These days
         * have a <code>WEEK_OF_MONTH</code> of 1.  Thursday, January 1 through
         * Saturday, January 3 have a <code>WEEK_OF_MONTH</code> of 0.  If
         * <code>getMinimalDaysInFirstWeek()</code> is changed to 3, then January 1
         * through January 3 have a <code>WEEK_OF_MONTH</code> of 1.
         * <h4>Default Fields Values</h4>
         * <p>The <code>clear</code> method sets calendar field(s)
         * undefined. <code>GregorianCalendar</code> uses the following
         * default value for each calendar field if its value is undefined.
         * <table cellpadding="0" cellspacing="3" border="0"
         * summary="GregorianCalendar default field values"
         * style="text-align: left; width: 66%;">
         * <tbody>
         * <tr>
         * <th style="vertical-align: top; background-color: rgb(204, 204, 255);
         * text-align: center;">Field<br>
         * </th>
         * <th style="vertical-align: top; background-color: rgb(204, 204, 255);
         * text-align: center;">Default Value<br>
         * </th>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle;">
         * <code>ERA<br></code>
         * </td>
         * <td style="vertical-align: middle;">
         * <code>AD<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle; background-color: rgb(238, 238, 255);">
         * <code>YEAR<br></code>
         * </td>
         * <td style="vertical-align: middle; background-color: rgb(238, 238, 255);">
         * <code>1970<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle;">
         * <code>MONTH<br></code>
         * </td>
         * <td style="vertical-align: middle;">
         * <code>JANUARY<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: top; background-color: rgb(238, 238, 255);">
         * <code>DAY_OF_MONTH<br></code>
         * </td>
         * <td style="vertical-align: top; background-color: rgb(238, 238, 255);">
         * <code>1<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle;">
         * <code>DAY_OF_WEEK<br></code>
         * </td>
         * <td style="vertical-align: middle;">
         * <code>the first day of week<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: top; background-color: rgb(238, 238, 255);">
         * <code>WEEK_OF_MONTH<br></code>
         * </td>
         * <td style="vertical-align: top; background-color: rgb(238, 238, 255);">
         * <code>0<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: top;">
         * <code>DAY_OF_WEEK_IN_MONTH<br></code>
         * </td>
         * <td style="vertical-align: top;">
         * <code>1<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle; background-color: rgb(238, 238, 255);">
         * <code>AM_PM<br></code>
         * </td>
         * <td style="vertical-align: middle; background-color: rgb(238, 238, 255);">
         * <code>AM<br></code>
         * </td>
         * </tr>
         * <tr>
         * <td style="vertical-align: middle;">
         * <code>HOUR, HOUR_OF_DAY, MINUTE, SECOND, MILLISECOND<br></code>
         * </td>
         * <td style="vertical-align: middle;">
         * <code>0<br></code>
         * </td>
         * </tr>
         * </tbody>
         * </table>
         * <br>Default values are not applicable for the fields not listed above.
         * <p>
         * <strong>Example:</strong>
         * <blockquote>
         * <pre>
         * // get the supported ids for GMT-08:00 (Pacific Standard Time)
         * String[] ids = TimeZone.getAvailableIDs(-8 * 60 * 60 * 1000);
         * // if no ids were returned, something is wrong. get out.
         * if (ids.length == 0)
         * System.exit(0);
         * // begin output
         * System.out.println("Current Time");
         * // create a Pacific Standard Time time zone
         * SimpleTimeZone pdt = new SimpleTimeZone(-8 * 60 * 60 * 1000, ids[0]);
         * // set up rules for Daylight Saving Time
         * pdt.setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2 * 60 * 60 * 1000);
         * pdt.setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2 * 60 * 60 * 1000);
         * // create a GregorianCalendar with the Pacific Daylight time zone
         * // and the current date and time
         * Calendar calendar = new GregorianCalendar(pdt);
         * Date trialTime = new Date();
         * calendar.setTime(trialTime);
         * // print out a bunch of interesting things
         * System.out.println("ERA: " + calendar.get(Calendar.ERA));
         * System.out.println("YEAR: " + calendar.get(Calendar.YEAR));
         * System.out.println("MONTH: " + calendar.get(Calendar.MONTH));
         * System.out.println("WEEK_OF_YEAR: " + calendar.get(Calendar.WEEK_OF_YEAR));
         * System.out.println("WEEK_OF_MONTH: " + calendar.get(Calendar.WEEK_OF_MONTH));
         * System.out.println("DATE: " + calendar.get(Calendar.DATE));
         * System.out.println("DAY_OF_MONTH: " + calendar.get(Calendar.DAY_OF_MONTH));
         * System.out.println("DAY_OF_YEAR: " + calendar.get(Calendar.DAY_OF_YEAR));
         * System.out.println("DAY_OF_WEEK: " + calendar.get(Calendar.DAY_OF_WEEK));
         * System.out.println("DAY_OF_WEEK_IN_MONTH: "
         * + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
         * System.out.println("AM_PM: " + calendar.get(Calendar.AM_PM));
         * System.out.println("HOUR: " + calendar.get(Calendar.HOUR));
         * System.out.println("HOUR_OF_DAY: " + calendar.get(Calendar.HOUR_OF_DAY));
         * System.out.println("MINUTE: " + calendar.get(Calendar.MINUTE));
         * System.out.println("SECOND: " + calendar.get(Calendar.SECOND));
         * System.out.println("MILLISECOND: " + calendar.get(Calendar.MILLISECOND));
         * System.out.println("ZONE_OFFSET: "
         * + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000)));
         * System.out.println("DST_OFFSET: "
         * + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000)));
         * System.out.println("Current Time, with hour reset to 3");
         * calendar.clear(Calendar.HOUR_OF_DAY); // so doesn't override
         * calendar.set(Calendar.HOUR, 3);
         * System.out.println("ERA: " + calendar.get(Calendar.ERA));
         * System.out.println("YEAR: " + calendar.get(Calendar.YEAR));
         * System.out.println("MONTH: " + calendar.get(Calendar.MONTH));
         * System.out.println("WEEK_OF_YEAR: " + calendar.get(Calendar.WEEK_OF_YEAR));
         * System.out.println("WEEK_OF_MONTH: " + calendar.get(Calendar.WEEK_OF_MONTH));
         * System.out.println("DATE: " + calendar.get(Calendar.DATE));
         * System.out.println("DAY_OF_MONTH: " + calendar.get(Calendar.DAY_OF_MONTH));
         * System.out.println("DAY_OF_YEAR: " + calendar.get(Calendar.DAY_OF_YEAR));
         * System.out.println("DAY_OF_WEEK: " + calendar.get(Calendar.DAY_OF_WEEK));
         * System.out.println("DAY_OF_WEEK_IN_MONTH: "
         * + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
         * System.out.println("AM_PM: " + calendar.get(Calendar.AM_PM));
         * System.out.println("HOUR: " + calendar.get(Calendar.HOUR));
         * System.out.println("HOUR_OF_DAY: " + calendar.get(Calendar.HOUR_OF_DAY));
         * System.out.println("MINUTE: " + calendar.get(Calendar.MINUTE));
         * System.out.println("SECOND: " + calendar.get(Calendar.SECOND));
         * System.out.println("MILLISECOND: " + calendar.get(Calendar.MILLISECOND));
         * System.out.println("ZONE_OFFSET: "
         * + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000))); // in hours
         * System.out.println("DST_OFFSET: "
         * + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000))); // in hours
         * </pre>
         * </blockquote>
         * @see TimeZone
         * @author David Goldsmith, Mark Davis, Chen-Lieh Huang, Alan Liu
         * @since JDK1.1
         */
        // @ts-ignore
        class GregorianCalendar extends java.util.Calendar {
            /**
             * Constructs a default <code>GregorianCalendar</code> using the current time
             * in the default time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the given time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             * @param zone the given time zone.
             */
            // @ts-ignore
            constructor(zone: java.util.TimeZone)
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the default time zone with the given locale.
             * @param aLocale the given locale.
             */
            // @ts-ignore
            constructor(aLocale: java.util.Locale)
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the given time zone with the given locale.
             * @param zone the given time zone.
             * @param aLocale the given locale.
             */
            // @ts-ignore
            constructor(zone: java.util.TimeZone, aLocale: java.util.Locale)
            /**
             * Constructs a <code>GregorianCalendar</code> with the given date set
             * in the default time zone with the default locale.
             * @param year the value used to set the <code>YEAR</code> calendar field in the calendar.
             * @param month the value used to set the <code>MONTH</code> calendar field in the calendar.
             *  Month value is 0-based. e.g., 0 for January.
             * @param dayOfMonth the value used to set the <code>DAY_OF_MONTH</code> calendar field in the calendar.
             */
            // @ts-ignore
            constructor(year: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/)
            /**
             * Constructs a <code>GregorianCalendar</code> with the given date
             * and time set for the default time zone with the default locale.
             * @param year the value used to set the <code>YEAR</code> calendar field in the calendar.
             * @param month the value used to set the <code>MONTH</code> calendar field in the calendar.
             *  Month value is 0-based. e.g., 0 for January.
             * @param dayOfMonth the value used to set the <code>DAY_OF_MONTH</code> calendar field in the calendar.
             * @param hourOfDay the value used to set the <code>HOUR_OF_DAY</code> calendar field
             *  in the calendar.
             * @param minute the value used to set the <code>MINUTE</code> calendar field
             *  in the calendar.
             */
            // @ts-ignore
            constructor(year: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/, hourOfDay: number /*int*/, minute: number /*int*/)
            /**
             * Constructs a GregorianCalendar with the given date
             * and time set for the default time zone with the default locale.
             * @param year the value used to set the <code>YEAR</code> calendar field in the calendar.
             * @param month the value used to set the <code>MONTH</code> calendar field in the calendar.
             *  Month value is 0-based. e.g., 0 for January.
             * @param dayOfMonth the value used to set the <code>DAY_OF_MONTH</code> calendar field in the calendar.
             * @param hourOfDay the value used to set the <code>HOUR_OF_DAY</code> calendar field
             *  in the calendar.
             * @param minute the value used to set the <code>MINUTE</code> calendar field
             *  in the calendar.
             * @param second the value used to set the <code>SECOND</code> calendar field
             *  in the calendar.
             */
            // @ts-ignore
            constructor(year: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/, hourOfDay: number /*int*/, minute: number /*int*/, second: number /*int*/)
            /**
             * Value of the <code>ERA</code> field indicating
             * the period before the common era (before Christ), also known as BCE.
             * The sequence of years at the transition from <code>BC</code> to <code>AD</code> is
             * ..., 2 BC, 1 BC, 1 AD, 2 AD,...
             * @see #ERA
             */
            // @ts-ignore
            readonly BC: number /*int*/
            /**
             * Value of the <code>ERA</code> field indicating
             * the common era (Anno Domini), also known as CE.
             * The sequence of years at the transition from <code>BC</code> to <code>AD</code> is
             * ..., 2 BC, 1 BC, 1 AD, 2 AD,...
             * @see #ERA
             */
            // @ts-ignore
            readonly AD: number /*int*/
            /**
             * Sets the <code>GregorianCalendar</code> change date. This is the point when the switch
             * from Julian dates to Gregorian dates occurred. Default is October 15,
             * 1582 (Gregorian). Previous to this, dates will be in the Julian calendar.
             * <p>
             * To obtain a pure Julian calendar, set the change date to
             * <code>Date(Long.MAX_VALUE)</code>.  To obtain a pure Gregorian calendar,
             * set the change date to <code>Date(Long.MIN_VALUE)</code>.
             * @param date the given Gregorian cutover date.
             */
            // @ts-ignore
            setGregorianChange(date: java.util.Date): void
            /**
             * Gets the Gregorian Calendar change date.  This is the point when the
             * switch from Julian dates to Gregorian dates occurred. Default is
             * October 15, 1582 (Gregorian). Previous to this, dates will be in the Julian
             * calendar.
             * @return the Gregorian cutover date for this <code>GregorianCalendar</code> object.
             */
            // @ts-ignore
            getGregorianChange(): java.util.Date
            /**
             * Determines if the given year is a leap year. Returns <code>true</code> if
             * the given year is a leap year. To specify BC year numbers,
             * <code>1 - year number</code> must be given. For example, year BC 4 is
             * specified as -3.
             * @param year the given year.
             * @return <code>true</code> if the given year is a leap year; <code>false</code> otherwise.
             */
            // @ts-ignore
            isLeapYear(year: number /*int*/): boolean
            /**
             * Returns {@code "gregory"} as the calendar type.
             * @return {#code "gregory"}
             * @since 1.8
             */
            // @ts-ignore
            getCalendarType(): java.lang.String
            /**
             * Compares this <code>GregorianCalendar</code> to the specified
             * <code>Object</code>. The result is <code>true</code> if and
             * only if the argument is a <code>GregorianCalendar</code> object
             * that represents the same time value (millisecond offset from
             * the <a href="Calendar.html#Epoch">Epoch</a>) under the same
             * <code>Calendar</code> parameters and Gregorian change date as
             * this object.
             * @param obj the object to compare with.
             * @return <code>true</code> if this object is equal to <code>obj</code>;
             *  <code>false</code> otherwise.
             * @see Calendar#compareTo(Calendar)
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Generates the hash code for this <code>GregorianCalendar</code> object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Adds the specified (signed) amount of time to the given calendar field,
             * based on the calendar's rules.
             * <p><em>Add rule 1</em>. The value of <code>field</code>
             * after the call minus the value of <code>field</code> before the
             * call is <code>amount</code>, modulo any overflow that has occurred in
             * <code>field</code>. Overflow occurs when a field value exceeds its
             * range and, as a result, the next larger field is incremented or
             * decremented and the field value is adjusted back into its range.</p>
             * <p><em>Add rule 2</em>. If a smaller field is expected to be
             * invariant, but it is impossible for it to be equal to its
             * prior value because of changes in its minimum or maximum after
             * <code>field</code> is changed, then its value is adjusted to be as close
             * as possible to its expected value. A smaller field represents a
             * smaller unit of time. <code>HOUR</code> is a smaller field than
             * <code>DAY_OF_MONTH</code>. No adjustment is made to smaller fields
             * that are not expected to be invariant. The calendar system
             * determines what fields are expected to be invariant.</p>
             * @param field the calendar field.
             * @param amount the amount of date or time to be added to the field.
             * @exception IllegalArgumentException if <code>field</code> is
             *  <code>ZONE_OFFSET</code>, <code>DST_OFFSET</code>, or unknown,
             *  or if any calendar fields have out-of-range values in
             *  non-lenient mode.
             */
            // @ts-ignore
            add(field: number /*int*/, amount: number /*int*/): void
            /**
             * Adds or subtracts (up/down) a single unit of time on the given time
             * field without changing larger fields.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to December 31, 1999. Calling {@link #roll(int,boolean) roll(Calendar.MONTH, true)}
             * sets the calendar to January 31, 1999.  The <code>YEAR</code> field is unchanged
             * because it is a larger field than <code>MONTH</code>.</p>
             * @param up indicates if the value of the specified calendar field is to be
             *  rolled up or rolled down. Use <code>true</code> if rolling up, <code>false</code> otherwise.
             * @exception IllegalArgumentException if <code>field</code> is
             *  <code>ZONE_OFFSET</code>, <code>DST_OFFSET</code>, or unknown,
             *  or if any calendar fields have out-of-range values in
             *  non-lenient mode.
             * @see #add(int,int)
             * @see #set(int,int)
             */
            // @ts-ignore
            roll(field: number /*int*/, up: boolean): void
            /**
             * Adds a signed amount to the specified calendar field without changing larger fields.
             * A negative roll amount means to subtract from field without changing
             * larger fields. If the specified amount is 0, this method performs nothing.
             * <p>This method calls {@link #complete()} before adding the
             * amount so that all the calendar fields are normalized. If there
             * is any calendar field having an out-of-range value in non-lenient mode, then an
             * <code>IllegalArgumentException</code> is thrown.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to August 31, 1999. Calling <code>roll(Calendar.MONTH,
             * 8)</code> sets the calendar to April 30, <strong>1999</strong>. Using a
             * <code>GregorianCalendar</code>, the <code>DAY_OF_MONTH</code> field cannot
             * be 31 in the month April. <code>DAY_OF_MONTH</code> is set to the closest possible
             * value, 30. The <code>YEAR</code> field maintains the value of 1999 because it
             * is a larger field than <code>MONTH</code>.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to Sunday June 6, 1999. Calling
             * <code>roll(Calendar.WEEK_OF_MONTH, -1)</code> sets the calendar to
             * Tuesday June 1, 1999, whereas calling
             * <code>add(Calendar.WEEK_OF_MONTH, -1)</code> sets the calendar to
             * Sunday May 30, 1999. This is because the roll rule imposes an
             * additional constraint: The <code>MONTH</code> must not change when the
             * <code>WEEK_OF_MONTH</code> is rolled. Taken together with add rule 1,
             * the resultant date must be between Tuesday June 1 and Saturday June
             * 5. According to add rule 2, the <code>DAY_OF_WEEK</code>, an invariant
             * when changing the <code>WEEK_OF_MONTH</code>, is set to Tuesday, the
             * closest possible value to Sunday (where Sunday is the first day of the
             * week).</p>
             * @param field the calendar field.
             * @param amount the signed amount to add to <code>field</code>.
             * @exception IllegalArgumentException if <code>field</code> is
             *  <code>ZONE_OFFSET</code>, <code>DST_OFFSET</code>, or unknown,
             *  or if any calendar fields have out-of-range values in
             *  non-lenient mode.
             * @see #roll(int,boolean)
             * @see #add(int,int)
             * @see #set(int,int)
             * @since 1.2
             */
            // @ts-ignore
            roll(field: number /*int*/, amount: number /*int*/): void
            /**
             * Returns the minimum value for the given calendar field of this
             * <code>GregorianCalendar</code> instance. The minimum value is
             * defined as the smallest value returned by the {@link
             * Calendar#get(int) get} method for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * @param field the calendar field.
             * @return the minimum value for the given calendar field.
             * @see #getMaximum(int)
             * @see #getGreatestMinimum(int)
             * @see #getLeastMaximum(int)
             * @see #getActualMinimum(int)
             * @see #getActualMaximum(int)
             */
            // @ts-ignore
            getMinimum(field: number /*int*/): int
            /**
             * Returns the maximum value for the given calendar field of this
             * <code>GregorianCalendar</code> instance. The maximum value is
             * defined as the largest value returned by the {@link
             * Calendar#get(int) get} method for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * @param field the calendar field.
             * @return the maximum value for the given calendar field.
             * @see #getMinimum(int)
             * @see #getGreatestMinimum(int)
             * @see #getLeastMaximum(int)
             * @see #getActualMinimum(int)
             * @see #getActualMaximum(int)
             */
            // @ts-ignore
            getMaximum(field: number /*int*/): int
            /**
             * Returns the highest minimum value for the given calendar field
             * of this <code>GregorianCalendar</code> instance. The highest
             * minimum value is defined as the largest value returned by
             * {@link #getActualMinimum(int)} for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * @param field the calendar field.
             * @return the highest minimum value for the given calendar field.
             * @see #getMinimum(int)
             * @see #getMaximum(int)
             * @see #getLeastMaximum(int)
             * @see #getActualMinimum(int)
             * @see #getActualMaximum(int)
             */
            // @ts-ignore
            getGreatestMinimum(field: number /*int*/): int
            /**
             * Returns the lowest maximum value for the given calendar field
             * of this <code>GregorianCalendar</code> instance. The lowest
             * maximum value is defined as the smallest value returned by
             * {@link #getActualMaximum(int)} for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * @param field the calendar field
             * @return the lowest maximum value for the given calendar field.
             * @see #getMinimum(int)
             * @see #getMaximum(int)
             * @see #getGreatestMinimum(int)
             * @see #getActualMinimum(int)
             * @see #getActualMaximum(int)
             */
            // @ts-ignore
            getLeastMaximum(field: number /*int*/): int
            /**
             * Returns the minimum value that this calendar field could have,
             * taking into consideration the given time value and the current
             * values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * <p>For example, if the Gregorian change date is January 10,
             * 1970 and the date of this <code>GregorianCalendar</code> is
             * January 20, 1970, the actual minimum value of the
             * <code>DAY_OF_MONTH</code> field is 10 because the previous date
             * of January 10, 1970 is December 27, 1996 (in the Julian
             * calendar). Therefore, December 28, 1969 to January 9, 1970
             * don't exist.
             * @param field the calendar field
             * @return the minimum of the given field for the time value of
             *  this <code>GregorianCalendar</code>
             * @see #getMinimum(int)
             * @see #getMaximum(int)
             * @see #getGreatestMinimum(int)
             * @see #getLeastMaximum(int)
             * @see #getActualMaximum(int)
             * @since 1.2
             */
            // @ts-ignore
            getActualMinimum(field: number /*int*/): int
            /**
             * Returns the maximum value that this calendar field could have,
             * taking into consideration the given time value and the current
             * values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * For example, if the date of this instance is February 1, 2004,
             * the actual maximum value of the <code>DAY_OF_MONTH</code> field
             * is 29 because 2004 is a leap year, and if the date of this
             * instance is February 1, 2005, it's 28.
             * <p>This method calculates the maximum value of {@link
             * Calendar#WEEK_OF_YEAR WEEK_OF_YEAR} based on the {@link
             * Calendar#YEAR YEAR} (calendar year) value, not the <a
             * href="#week_year">week year</a>. Call {@link
             * #getWeeksInWeekYear()} to get the maximum value of {@code
             * WEEK_OF_YEAR} in the week year of this {@code GregorianCalendar}.
             * @param field the calendar field
             * @return the maximum of the given field for the time value of
             *  this <code>GregorianCalendar</code>
             * @see #getMinimum(int)
             * @see #getMaximum(int)
             * @see #getGreatestMinimum(int)
             * @see #getLeastMaximum(int)
             * @see #getActualMinimum(int)
             * @since 1.2
             */
            // @ts-ignore
            getActualMaximum(field: number /*int*/): int
            // @ts-ignore
            clone(): java.lang.Object
            // @ts-ignore
            getTimeZone(): java.util.TimeZone
            // @ts-ignore
            setTimeZone(zone: java.util.TimeZone): void
            /**
             * Returns {@code true} indicating this {@code GregorianCalendar}
             * supports week dates.
             * @return {#code true} (always)
             * @see #getWeekYear()
             * @see #setWeekDate(int,int,int)
             * @see #getWeeksInWeekYear()
             * @since 1.7
             */
            // @ts-ignore
            isWeekDateSupported(): boolean
            /**
             * Returns the <a href="#week_year">week year</a> represented by this
             * {@code GregorianCalendar}. The dates in the weeks between 1 and the
             * maximum week number of the week year have the same week year value
             * that may be one year before or after the {@link Calendar#YEAR YEAR}
             * (calendar year) value.
             * <p>This method calls {@link Calendar#complete()} before
             * calculating the week year.
             * @return the week year represented by this {#code GregorianCalendar}.
             *          If the {@link Calendar#ERA ERA} value is {@link #BC}, the year is
             *          represented by 0 or a negative number: BC 1 is 0, BC 2
             *          is -1, BC 3 is -2, and so on.
             * @throws IllegalArgumentException
             *          if any of the calendar fields is invalid in non-lenient mode.
             * @see #isWeekDateSupported()
             * @see #getWeeksInWeekYear()
             * @see Calendar#getFirstDayOfWeek()
             * @see Calendar#getMinimalDaysInFirstWeek()
             * @since 1.7
             */
            // @ts-ignore
            getWeekYear(): int
            /**
             * Sets this {@code GregorianCalendar} to the date given by the
             * date specifiers - <a href="#week_year">{@code weekYear}</a>,
             * {@code weekOfYear}, and {@code dayOfWeek}. {@code weekOfYear}
             * follows the <a href="#week_and_year">{@code WEEK_OF_YEAR}
             * numbering</a>.  The {@code dayOfWeek} value must be one of the
             * {@link Calendar#DAY_OF_WEEK DAY_OF_WEEK} values: {@link
             * Calendar#SUNDAY SUNDAY} to {@link Calendar#SATURDAY SATURDAY}.
             * <p>Note that the numeric day-of-week representation differs from
             * the ISO 8601 standard, and that the {@code weekOfYear}
             * numbering is compatible with the standard when {@code
             * getFirstDayOfWeek()} is {@code MONDAY} and {@code
             * getMinimalDaysInFirstWeek()} is 4.
             * <p>Unlike the {@code set} method, all of the calendar fields
             * and the instant of time value are calculated upon return.
             * <p>If {@code weekOfYear} is out of the valid week-of-year
             * range in {@code weekYear}, the {@code weekYear}
             * and {@code weekOfYear} values are adjusted in lenient
             * mode, or an {@code IllegalArgumentException} is thrown in
             * non-lenient mode.
             * @param weekYear    the week year
             * @param weekOfYear  the week number based on {#code weekYear}
             * @param dayOfWeek   the day of week value: one of the constants
             *                     for the {#link #DAY_OF_WEEK DAY_OF_WEEK} field:
             *                     {@link Calendar#SUNDAY SUNDAY}, ...,
             *                     {@link Calendar#SATURDAY SATURDAY}.
             * @exception IllegalArgumentException
             *             if any of the given date specifiers is invalid,
             *             or if any of the calendar fields are inconsistent
             *             with the given date specifiers in non-lenient mode
             * @see GregorianCalendar#isWeekDateSupported()
             * @see Calendar#getFirstDayOfWeek()
             * @see Calendar#getMinimalDaysInFirstWeek()
             * @since 1.7
             */
            // @ts-ignore
            setWeekDate(weekYear: number /*int*/, weekOfYear: number /*int*/, dayOfWeek: number /*int*/): void
            /**
             * Returns the number of weeks in the <a href="#week_year">week year</a>
             * represented by this {@code GregorianCalendar}.
             * <p>For example, if this {@code GregorianCalendar}'s date is
             * December 31, 2008 with <a href="#iso8601_compatible_setting">the ISO
             * 8601 compatible setting</a>, this method will return 53 for the
             * period: December 29, 2008 to January 3, 2010 while {@link
             * #getActualMaximum(int) getActualMaximum(WEEK_OF_YEAR)} will return
             * 52 for the period: December 31, 2007 to December 28, 2008.
             * @return the number of weeks in the week year.
             * @see Calendar#WEEK_OF_YEAR
             * @see #getWeekYear()
             * @see #getActualMaximum(int)
             * @since 1.7
             */
            // @ts-ignore
            getWeeksInWeekYear(): int
            /**
             * Converts the time value (millisecond offset from the <a
             * href="Calendar.html#Epoch">Epoch</a>) to calendar field values.
             * The time is <em>not</em>
             * recomputed first; to recompute the time, then the fields, call the
             * <code>complete</code> method.
             * @see Calendar#complete
             */
            // @ts-ignore
            computeFields(): void
            /**
             * Converts calendar field values to the time value (millisecond
             * offset from the <a href="Calendar.html#Epoch">Epoch</a>).
             * @exception IllegalArgumentException if any calendar fields are invalid.
             */
            // @ts-ignore
            computeTime(): void
            /**
             * Converts this object to a {@code ZonedDateTime} that represents
             * the same point on the time-line as this {@code GregorianCalendar}.
             * <p>
             * Since this object supports a Julian-Gregorian cutover date and
             * {@code ZonedDateTime} does not, it is possible that the resulting year,
             * month and day will have different values.  The result will represent the
             * correct date in the ISO calendar system, which will also be the same value
             * for Modified Julian Days.
             * @return a zoned date-time representing the same point on the time-line
             *   as this gregorian calendar
             * @since 1.8
             */
            // @ts-ignore
            toZonedDateTime(): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code GregorianCalendar} with the default locale
             * from a {@code ZonedDateTime} object.
             * <p>
             * Since {@code ZonedDateTime} does not support a Julian-Gregorian cutover
             * date and uses ISO calendar system, the return GregorianCalendar is a pure
             * Gregorian calendar and uses ISO 8601 standard for week definitions,
             * which has {@code MONDAY} as the {@link Calendar#getFirstDayOfWeek()
             * FirstDayOfWeek} and {@code 4} as the value of the
             * {@link Calendar#getMinimalDaysInFirstWeek() MinimalDaysInFirstWeek}.
             * <p>
             * {@code ZoneDateTime} can store points on the time-line further in the
             * future and further in the past than {@code GregorianCalendar}. In this
             * scenario, this method will throw an {@code IllegalArgumentException}
             * exception.
             * @param zdt  the zoned date-time object to convert
             * @return the gregorian calendar representing the same point on the
             *   time-line as the zoned date-time provided
             * @exception NullPointerException if {#code zdt} is null
             * @exception IllegalArgumentException if the zoned date-time is too
             *  large to represent as a {#code GregorianCalendar}
             * @since 1.8
             */
            // @ts-ignore
            from(zdt: java.time.ZonedDateTime): java.util.GregorianCalendar
        }
    }
}
