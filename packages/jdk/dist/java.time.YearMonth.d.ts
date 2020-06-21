declare namespace java {
    namespace time {
        /**
         * A year-month in the ISO-8601 calendar system, such as {@code 2007-12}.
         * <p>
         * {@code YearMonth} is an immutable date-time object that represents the combination
         * of a year and month. Any field that can be derived from a year and month, such as
         * quarter-of-year, can be obtained.
         * <p>
         * This class does not store or represent a day, time or time-zone.
         * For example, the value "October 2007" can be stored in a {@code YearMonth}.
         * <p>
         * The ISO-8601 calendar system is the modern civil calendar system used today
         * in most of the world. It is equivalent to the proleptic Gregorian calendar
         * system, in which today's rules for leap years are applied for all time.
         * For most applications written today, the ISO-8601 rules are entirely suitable.
         * However, any application that makes use of historical dates, and requires them
         * to be accurate will find the ISO-8601 approach unsuitable.
         * <p>
         * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
         * class; use of identity-sensitive operations (including reference equality
         * ({@code ==}), identity hash code, or synchronization) on instances of
         * {@code YearMonth} may have unpredictable results and should be avoided.
         * The {@code equals} method should be used for comparisons.
         * @implSpec This class is immutable and thread-safe.
         * @since 1.8
         */
        // @ts-ignore
        class YearMonth extends java.lang.Object implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.YearMonth>, java.io.Serializable {
            /**
             * Obtains the current year-month from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current year-month.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             * @return the current year-month using the system clock and default time-zone, not null
             */
            // @ts-ignore
            public static now(): java.time.YearMonth
            /**
             * Obtains the current year-month from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current year-month.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             * @param zone  the zone ID to use, not null
             * @return the current year-month using the system clock, not null
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.YearMonth
            /**
             * Obtains the current year-month from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current year-month.
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             * @param clock  the clock to use, not null
             * @return the current year-month, not null
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.YearMonth
            /**
             * Obtains an instance of {@code YearMonth} from a year and month.
             * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
             * @param month  the month-of-year to represent, not null
             * @return the year-month, not null
             * @throws DateTimeException if the year value is invalid
             */
            // @ts-ignore
            public static of(year: number /*int*/, month: java.time.Month): java.time.YearMonth
            /**
             * Obtains an instance of {@code YearMonth} from a year and month.
             * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
             * @param month  the month-of-year to represent, from 1 (January) to 12 (December)
             * @return the year-month, not null
             * @throws DateTimeException if either field value is invalid
             */
            // @ts-ignore
            public static of(year: number /*int*/, month: number /*int*/): java.time.YearMonth
            /**
             * Obtains an instance of {@code YearMonth} from a temporal object.
             * <p>
             * This obtains a year-month based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code YearMonth}.
             * <p>
             * The conversion extracts the {@link ChronoField#YEAR YEAR} and
             * {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} fields.
             * The extraction is only permitted if the temporal object has an ISO
             * chronology, or can be converted to a {@code LocalDate}.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code YearMonth::from}.
             * @param temporal  the temporal object to convert, not null
             * @return the year-month, not null
             * @throws DateTimeException if unable to convert to a {#code YearMonth}
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.YearMonth
            /**
             * Obtains an instance of {@code YearMonth} from a text string such as {@code 2007-12}.
             * <p>
             * The string must represent a valid year-month.
             * The format must be {@code uuuu-MM}.
             * Years outside the range 0000 to 9999 must be prefixed by the plus or minus symbol.
             * @param text  the text to parse such as "2007-12", not null
             * @return the parsed year-month, not null
             * @throws DateTimeParseException if the text cannot be parsed
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.YearMonth
            /**
             * Obtains an instance of {@code YearMonth} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a year-month.
             * @param text  the text to parse, not null
             * @param formatter  the formatter to use, not null
             * @return the parsed year-month, not null
             * @throws DateTimeParseException if the text cannot be parsed
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.YearMonth
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this year-month can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range},
             * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
             * methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code MONTH_OF_YEAR}
             * <li>{@code PROLEPTIC_MONTH}
             * <li>{@code YEAR_OF_ERA}
             * <li>{@code YEAR}
             * <li>{@code ERA}
             * </ul>
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             * @param field  the field to check, null returns false
             * @return true if the field is supported on this year-month, false if not
             */
            // @ts-ignore
            public isSupported(field: java.time.temporal.TemporalField): boolean
            /**
             * Checks if the specified unit is supported.
             * <p>
             * This checks if the specified unit can be added to, or subtracted from, this year-month.
             * If false, then calling the {@link #plus(long, TemporalUnit)} and
             * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
             * <p>
             * If the unit is a {@link ChronoUnit} then the query is implemented here.
             * The supported units are:
             * <ul>
             * <li>{@code MONTHS}
             * <li>{@code YEARS}
             * <li>{@code DECADES}
             * <li>{@code CENTURIES}
             * <li>{@code MILLENNIA}
             * <li>{@code ERAS}
             * </ul>
             * All other {@code ChronoUnit} instances will return false.
             * <p>
             * If the unit is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.isSupportedBy(Temporal)}
             * passing {@code this} as the argument.
             * Whether the unit is supported is determined by the unit.
             * @param unit  the unit to check, null returns false
             * @return true if the unit can be added/subtracted, false if not
             */
            // @ts-ignore
            public isSupported(unit: java.time.temporal.TemporalUnit): boolean
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This year-month is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return
             * appropriate range instances.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the range can be obtained is determined by the field.
             * @param field  the field to query the range for, not null
             * @return the range of valid values for the field, not null
             * @throws DateTimeException if the range for the field cannot be obtained
             * @throws UnsupportedTemporalTypeException if the field is not supported
             */
            // @ts-ignore
            public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            /**
             * Gets the value of the specified field from this year-month as an {@code int}.
             * <p>
             * This queries this year-month for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this year-month, except {@code PROLEPTIC_MONTH} which is too
             * large to fit in an {@code int} and throw a {@code DateTimeException}.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             * @param field  the field to get, not null
             * @return the value for the field
             * @throws DateTimeException if a value for the field cannot be obtained or
             *          the value is outside the range of valid values for the field
             * @throws UnsupportedTemporalTypeException if the field is not supported or
             *          the range of values exceeds an {#code int}
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public get(field: java.time.temporal.TemporalField): number /*int*/
            /**
             * Gets the value of the specified field from this year-month as a {@code long}.
             * <p>
             * This queries this year-month for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this year-month.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             * @param field  the field to get, not null
             * @return the value for the field
             * @throws DateTimeException if a value for the field cannot be obtained
             * @throws UnsupportedTemporalTypeException if the field is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public getLong(field: java.time.temporal.TemporalField): number /*long*/
            /**
             * Gets the year field.
             * <p>
             * This method returns the primitive {@code int} value for the year.
             * <p>
             * The year returned by this method is proleptic as per {@code get(YEAR)}.
             * @return the year, from MIN_YEAR to MAX_YEAR
             */
            // @ts-ignore
            public getYear(): number /*int*/
            /**
             * Gets the month-of-year field from 1 to 12.
             * <p>
             * This method returns the month as an {@code int} from 1 to 12.
             * Application code is frequently clearer if the enum {@link Month}
             * is used by calling {@link #getMonth()}.
             * @return the month-of-year, from 1 to 12
             * @see #getMonth()
             */
            // @ts-ignore
            public getMonthValue(): number /*int*/
            /**
             * Gets the month-of-year field using the {@code Month} enum.
             * <p>
             * This method returns the enum {@link Month} for the month.
             * This avoids confusion as to what {@code int} values mean.
             * If you need access to the primitive {@code int} value then the enum
             * provides the {@link Month#getValue() int value}.
             * @return the month-of-year, not null
             * @see #getMonthValue()
             */
            // @ts-ignore
            public getMonth(): java.time.Month
            /**
             * Checks if the year is a leap year, according to the ISO proleptic
             * calendar system rules.
             * <p>
             * This method applies the current rules for leap years across the whole time-line.
             * In general, a year is a leap year if it is divisible by four without
             * remainder. However, years divisible by 100, are not leap years, with
             * the exception of years divisible by 400 which are.
             * <p>
             * For example, 1904 is a leap year it is divisible by 4.
             * 1900 was not a leap year as it is divisible by 100, however 2000 was a
             * leap year as it is divisible by 400.
             * <p>
             * The calculation is proleptic - applying the same rules into the far future and far past.
             * This is historically inaccurate, but is correct for the ISO-8601 standard.
             * @return true if the year is leap, false otherwise
             */
            // @ts-ignore
            public isLeapYear(): boolean
            /**
             * Checks if the day-of-month is valid for this year-month.
             * <p>
             * This method checks whether this year and month and the input day form
             * a valid date.
             * @param dayOfMonth  the day-of-month to validate, from 1 to 31, invalid value returns false
             * @return true if the day is valid for this year-month
             */
            // @ts-ignore
            public isValidDay(dayOfMonth: number /*int*/): boolean
            /**
             * Returns the length of the month, taking account of the year.
             * <p>
             * This returns the length of the month in days.
             * For example, a date in January would return 31.
             * @return the length of the month in days, from 28 to 31
             */
            // @ts-ignore
            public lengthOfMonth(): number /*int*/
            /**
             * Returns the length of the year.
             * <p>
             * This returns the length of the year in days, either 365 or 366.
             * @return 366 if the year is leap, 365 otherwise
             */
            // @ts-ignore
            public lengthOfYear(): number /*int*/
            /**
             * Returns an adjusted copy of this year-month.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the year-month adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the year field.
             * A more complex adjuster might set the year-month to the next month that
             * Halley's comet will pass the Earth.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param adjuster the adjuster to use, not null
             * @return a {#code YearMonth} based on {@code this} with the adjustment made, not null
             * @throws DateTimeException if the adjustment cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.YearMonth
            /**
             * Returns a copy of this year-month with the specified field set to a new value.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the year or month.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code MONTH_OF_YEAR} -
             * Returns a {@code YearMonth} with the specified month-of-year.
             * The year will be unchanged.
             * <li>{@code PROLEPTIC_MONTH} -
             * Returns a {@code YearMonth} with the specified proleptic-month.
             * This completely replaces the year and month of this object.
             * <li>{@code YEAR_OF_ERA} -
             * Returns a {@code YearMonth} with the specified year-of-era
             * The month and era will be unchanged.
             * <li>{@code YEAR} -
             * Returns a {@code YearMonth} with the specified year.
             * The month will be unchanged.
             * <li>{@code ERA} -
             * Returns a {@code YearMonth} with the specified era.
             * The month and year-of-era will be unchanged.
             * </ul>
             * <p>
             * In all cases, if the new value is outside the valid range of values for the field
             * then a {@code DateTimeException} will be thrown.
             * <p>
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.adjustInto(Temporal, long)}
             * passing {@code this} as the argument. In this case, the field determines
             * whether and how to adjust the instant.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param field  the field to set in the result, not null
             * @param newValue  the new value of the field in the result
             * @return a {#code YearMonth} based on {@code this} with the specified field set, not null
             * @throws DateTimeException if the field cannot be set
             * @throws UnsupportedTemporalTypeException if the field is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public with(field: java.time.temporal.TemporalField, newValue: number /*long*/): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the year altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param year  the year to set in the returned year-month, from MIN_YEAR to MAX_YEAR
             * @return a {#code YearMonth} based on this year-month with the requested year, not null
             * @throws DateTimeException if the year value is invalid
             */
            // @ts-ignore
            public withYear(year: number /*int*/): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the month-of-year altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param month  the month-of-year to set in the returned year-month, from 1 (January) to 12 (December)
             * @return a {#code YearMonth} based on this year-month with the requested month, not null
             * @throws DateTimeException if the month-of-year value is invalid
             */
            // @ts-ignore
            public withMonth(month: number /*int*/): java.time.YearMonth
            /**
             * Returns a copy of this year-month with the specified amount added.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the specified amount added.
             * The amount is typically {@link Period} but may be any other type implementing
             * the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#addTo(Temporal)}. The amount implementation is free
             * to implement the addition in any way it wishes, however it typically
             * calls back to {@link #plus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToAdd  the amount to add, not null
             * @return a {#code YearMonth} based on this year-month with the addition made, not null
             * @throws DateTimeException if the addition cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.YearMonth
            /**
             * Returns a copy of this year-month with the specified amount added.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code MONTHS} -
             * Returns a {@code YearMonth} with the specified number of months added.
             * This is equivalent to {@link #plusMonths(long)}.
             * <li>{@code YEARS} -
             * Returns a {@code YearMonth} with the specified number of years added.
             * This is equivalent to {@link #plusYears(long)}.
             * <li>{@code DECADES} -
             * Returns a {@code YearMonth} with the specified number of decades added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 10.
             * <li>{@code CENTURIES} -
             * Returns a {@code YearMonth} with the specified number of centuries added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 100.
             * <li>{@code MILLENNIA} -
             * Returns a {@code YearMonth} with the specified number of millennia added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 1,000.
             * <li>{@code ERAS} -
             * Returns a {@code YearMonth} with the specified number of eras added.
             * Only two eras are supported so the amount must be one, zero or minus one.
             * If the amount is non-zero then the year is changed such that the year-of-era
             * is unchanged.
             * </ul>
             * <p>
             * All other {@code ChronoUnit} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
             * passing {@code this} as the argument. In this case, the unit determines
             * whether and how to perform the addition.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToAdd  the amount of the unit to add to the result, may be negative
             * @param unit  the unit of the amount to add, not null
             * @return a {#code YearMonth} based on this year-month with the specified amount added, not null
             * @throws DateTimeException if the addition cannot be made
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public plus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the specified number of years added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param yearsToAdd  the years to add, may be negative
             * @return a {#code YearMonth} based on this year-month with the years added, not null
             * @throws DateTimeException if the result exceeds the supported range
             */
            // @ts-ignore
            public plusYears(yearsToAdd: number /*long*/): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the specified number of months added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param monthsToAdd  the months to add, may be negative
             * @return a {#code YearMonth} based on this year-month with the months added, not null
             * @throws DateTimeException if the result exceeds the supported range
             */
            // @ts-ignore
            public plusMonths(monthsToAdd: number /*long*/): java.time.YearMonth
            /**
             * Returns a copy of this year-month with the specified amount subtracted.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the specified amount subtracted.
             * The amount is typically {@link Period} but may be any other type implementing
             * the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#subtractFrom(Temporal)}. The amount implementation is free
             * to implement the subtraction in any way it wishes, however it typically
             * calls back to {@link #minus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToSubtract  the amount to subtract, not null
             * @return a {#code YearMonth} based on this year-month with the subtraction made, not null
             * @throws DateTimeException if the subtraction cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.YearMonth
            /**
             * Returns a copy of this year-month with the specified amount subtracted.
             * <p>
             * This returns a {@code YearMonth}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToSubtract  the amount of the unit to subtract from the result, may be negative
             * @param unit  the unit of the amount to subtract, not null
             * @return a {#code YearMonth} based on this year-month with the specified amount subtracted, not null
             * @throws DateTimeException if the subtraction cannot be made
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public minus(amountToSubtract: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the specified number of years subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param yearsToSubtract  the years to subtract, may be negative
             * @return a {#code YearMonth} based on this year-month with the years subtracted, not null
             * @throws DateTimeException if the result exceeds the supported range
             */
            // @ts-ignore
            public minusYears(yearsToSubtract: number /*long*/): java.time.YearMonth
            /**
             * Returns a copy of this {@code YearMonth} with the specified number of months subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param monthsToSubtract  the months to subtract, may be negative
             * @return a {#code YearMonth} based on this year-month with the months subtracted, not null
             * @throws DateTimeException if the result exceeds the supported range
             */
            // @ts-ignore
            public minusMonths(monthsToSubtract: number /*long*/): java.time.YearMonth
            /**
             * Queries this year-month using the specified query.
             * <p>
             * This queries this year-month using the specified query strategy object.
             * The {@code TemporalQuery} object defines the logic to be used to
             * obtain the result. Read the documentation of the query to understand
             * what the result of this method will be.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalQuery#queryFrom(TemporalAccessor)} method on the
             * specified query passing {@code this} as the argument.
             * @param <R> the type of the result
             * @param query  the query to invoke, not null
             * @return the query result, null may be returned (defined by the query)
             * @throws DateTimeException if unable to query (defined by the query)
             * @throws ArithmeticException if numeric overflow occurs (defined by the query)
             */
            // @ts-ignore
            public query<R>(query: java.time.temporal.TemporalQuery<R>): R
            /**
             * Adjusts the specified temporal object to have this year-month.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the year and month changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#PROLEPTIC_MONTH} as the field.
             * If the specified temporal object does not use the ISO calendar system then
             * a {@code DateTimeException} is thrown.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisYearMonth.adjustInto(temporal);
             * temporal = temporal.with(thisYearMonth);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param temporal  the target object to be adjusted, not null
             * @return the adjusted object, not null
             * @throws DateTimeException if unable to make the adjustment
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal
            /**
             * Calculates the amount of time until another year-month in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code YearMonth}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified year-month.
             * The result will be negative if the end is before the start.
             * The {@code Temporal} passed to this method is converted to a
             * {@code YearMonth} using {@link #from(TemporalAccessor)}.
             * For example, the amount in years between two year-months can be calculated
             * using {@code startYearMonth.until(endYearMonth, YEARS)}.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two year-months.
             * For example, the amount in decades between 2012-06 and 2032-05
             * will only be one decade as it is one month short of two decades.
             * <p>
             * There are two equivalent ways of using this method.
             * The first is to invoke this method.
             * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
             * <pre>
             * // these two lines are equivalent
             * amount = start.until(end, MONTHS);
             * amount = MONTHS.between(start, end);
             * </pre>
             * The choice should be made based on which makes the code more readable.
             * <p>
             * The calculation is implemented in this method for {@link ChronoUnit}.
             * The units {@code MONTHS}, {@code YEARS}, {@code DECADES},
             * {@code CENTURIES}, {@code MILLENNIA} and {@code ERAS} are supported.
             * Other {@code ChronoUnit} values will throw an exception.
             * <p>
             * If the unit is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.between(Temporal, Temporal)}
             * passing {@code this} as the first argument and the converted input temporal
             * as the second argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param endExclusive  the end date, exclusive, which is converted to a {#code YearMonth}, not null
             * @param unit  the unit to measure the amount in, not null
             * @return the amount of time between this year-month and the end year-month
             * @throws DateTimeException if the amount cannot be calculated, or the end
             *   temporal cannot be converted to a {#code YearMonth}
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            public until(endExclusive: java.time.temporal.Temporal, unit: java.time.temporal.TemporalUnit): number /*long*/
            /**
             * Formats this year-month using the specified formatter.
             * <p>
             * This year-month will be passed to the formatter to produce a string.
             * @param formatter  the formatter to use, not null
             * @return the formatted year-month string, not null
             * @throws DateTimeException if an error occurs during printing
             */
            // @ts-ignore
            public format(formatter: java.time.format.DateTimeFormatter): string
            /**
             * Combines this year-month with a day-of-month to create a {@code LocalDate}.
             * <p>
             * This returns a {@code LocalDate} formed from this year-month and the specified day-of-month.
             * <p>
             * The day-of-month value must be valid for the year-month.
             * <p>
             * This method can be used as part of a chain to produce a date:
             * <pre>
             * LocalDate date = year.atMonth(month).atDay(day);
             * </pre>
             * @param dayOfMonth  the day-of-month to use, from 1 to 31
             * @return the date formed from this year-month and the specified day, not null
             * @throws DateTimeException if the day is invalid for the year-month
             * @see #isValidDay(int)
             */
            // @ts-ignore
            public atDay(dayOfMonth: number /*int*/): java.time.LocalDate
            /**
             * Returns a {@code LocalDate} at the end of the month.
             * <p>
             * This returns a {@code LocalDate} based on this year-month.
             * The day-of-month is set to the last valid day of the month, taking
             * into account leap years.
             * <p>
             * This method can be used as part of a chain to produce a date:
             * <pre>
             * LocalDate date = year.atMonth(month).atEndOfMonth();
             * </pre>
             * @return the last valid date of this year-month, not null
             */
            // @ts-ignore
            public atEndOfMonth(): java.time.LocalDate
            /**
             * Compares this year-month to another year-month.
             * <p>
             * The comparison is based first on the value of the year, then on the value of the month.
             * It is "consistent with equals", as defined by {@link Comparable}.
             * @param other  the other year-month to compare to, not null
             * @return the comparator value, negative if less, positive if greater
             */
            // @ts-ignore
            public compareTo(other: java.time.YearMonth): number /*int*/
            /**
             * Checks if this year-month is after the specified year-month.
             * @param other  the other year-month to compare to, not null
             * @return true if this is after the specified year-month
             */
            // @ts-ignore
            public isAfter(other: java.time.YearMonth): boolean
            /**
             * Checks if this year-month is before the specified year-month.
             * @param other  the other year-month to compare to, not null
             * @return true if this point is before the specified year-month
             */
            // @ts-ignore
            public isBefore(other: java.time.YearMonth): boolean
            /**
             * Checks if this year-month is equal to another year-month.
             * <p>
             * The comparison is based on the time-line position of the year-months.
             * @param obj  the object to check, null returns false
             * @return true if this is equal to the other year-month
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * A hash code for this year-month.
             * @return a suitable hash code
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Outputs this year-month as a {@code String}, such as {@code 2007-12}.
             * <p>
             * The output will be in the format {@code uuuu-MM}:
             * @return a string representation of this year-month, not null
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
