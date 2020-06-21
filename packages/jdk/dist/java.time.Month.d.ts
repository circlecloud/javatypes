declare namespace java {
    namespace time {
        /**
         * A month-of-year, such as 'July'.
         * <p>
         * {@code Month} is an enum representing the 12 months of the year -
         * January, February, March, April, May, June, July, August, September, October,
         * November and December.
         * <p>
         * In addition to the textual enum name, each month-of-year has an {@code int} value.
         * The {@code int} value follows normal usage and the ISO-8601 standard,
         * from 1 (January) to 12 (December). It is recommended that applications use the enum
         * rather than the {@code int} value to ensure code clarity.
         * <p>
         * <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code Month}.
         * Use {@code getValue()} instead.</b>
         * <p>
         * This enum represents a common concept that is found in many calendar systems.
         * As such, this enum may be used by any calendar system that has the month-of-year
         * concept defined exactly equivalent to the ISO-8601 calendar system.
         * @implSpec This is an immutable and thread-safe enum.
         * @since 1.8
         */
        // @ts-ignore
        class Month extends java.lang.Enum<java.time.Month> implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster {
            /**
             * The singleton instance for the month of January with 31 days.
             * This has the numeric value of {@code 1}.
             */
            // @ts-ignore
            readonly JANUARY: java.time.Month
            /**
             * The singleton instance for the month of February with 28 days, or 29 in a leap year.
             * This has the numeric value of {@code 2}.
             */
            // @ts-ignore
            readonly FEBRUARY: java.time.Month
            /**
             * The singleton instance for the month of March with 31 days.
             * This has the numeric value of {@code 3}.
             */
            // @ts-ignore
            readonly MARCH: java.time.Month
            /**
             * The singleton instance for the month of April with 30 days.
             * This has the numeric value of {@code 4}.
             */
            // @ts-ignore
            readonly APRIL: java.time.Month
            /**
             * The singleton instance for the month of May with 31 days.
             * This has the numeric value of {@code 5}.
             */
            // @ts-ignore
            readonly MAY: java.time.Month
            /**
             * The singleton instance for the month of June with 30 days.
             * This has the numeric value of {@code 6}.
             */
            // @ts-ignore
            readonly JUNE: java.time.Month
            /**
             * The singleton instance for the month of July with 31 days.
             * This has the numeric value of {@code 7}.
             */
            // @ts-ignore
            readonly JULY: java.time.Month
            /**
             * The singleton instance for the month of August with 31 days.
             * This has the numeric value of {@code 8}.
             */
            // @ts-ignore
            readonly AUGUST: java.time.Month
            /**
             * The singleton instance for the month of September with 30 days.
             * This has the numeric value of {@code 9}.
             */
            // @ts-ignore
            readonly SEPTEMBER: java.time.Month
            /**
             * The singleton instance for the month of October with 31 days.
             * This has the numeric value of {@code 10}.
             */
            // @ts-ignore
            readonly OCTOBER: java.time.Month
            /**
             * The singleton instance for the month of November with 30 days.
             * This has the numeric value of {@code 11}.
             */
            // @ts-ignore
            readonly NOVEMBER: java.time.Month
            /**
             * The singleton instance for the month of December with 31 days.
             * This has the numeric value of {@code 12}.
             */
            // @ts-ignore
            readonly DECEMBER: java.time.Month
            // @ts-ignore
            values(): java.time.Month[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): java.time.Month
            /**
             * Obtains an instance of {@code Month} from an {@code int} value.
             * <p>
             * {@code Month} is an enum representing the 12 months of the year.
             * This factory allows the enum to be obtained from the {@code int} value.
             * The {@code int} value follows the ISO-8601 standard, from 1 (January) to 12 (December).
             * @param month  the month-of-year to represent, from 1 (January) to 12 (December)
             * @return the month-of-year, not null
             * @throws DateTimeException if the month-of-year is invalid
             */
            // @ts-ignore
            of(month: number /*int*/): java.time.Month
            /**
             * Obtains an instance of {@code Month} from a temporal object.
             * <p>
             * This obtains a month based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code Month}.
             * <p>
             * The conversion extracts the {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} field.
             * The extraction is only permitted if the temporal object has an ISO
             * chronology, or can be converted to a {@code LocalDate}.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code Month::from}.
             * @param temporal  the temporal object to convert, not null
             * @return the month-of-year, not null
             * @throws DateTimeException if unable to convert to a {#code Month}
             */
            // @ts-ignore
            from(temporal: java.time.temporal.TemporalAccessor): java.time.Month
            /**
             * Gets the month-of-year {@code int} value.
             * <p>
             * The values are numbered following the ISO-8601 standard,
             * from 1 (January) to 12 (December).
             * @return the month-of-year, from 1 (January) to 12 (December)
             */
            // @ts-ignore
            getValue(): number /*int*/
            /**
             * Gets the textual representation, such as 'Jan' or 'December'.
             * <p>
             * This returns the textual name used to identify the month-of-year,
             * suitable for presentation to the user.
             * The parameters control the style of the returned text and the locale.
             * <p>
             * If no textual mapping is found then the {@link #getValue() numeric value} is returned.
             * @param style  the length of the text required, not null
             * @param locale  the locale to use, not null
             * @return the text value of the month-of-year, not null
             */
            // @ts-ignore
            getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this month-of-year can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range} and
             * {@link #get(TemporalField) get} methods will throw an exception.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then
             * this method returns true.
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             * @param field  the field to check, null returns false
             * @return true if the field is supported on this month-of-year, false if not
             */
            // @ts-ignore
            isSupported(field: java.time.temporal.TemporalField): boolean
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This month is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * range of the month-of-year, from 1 to 12, will be returned.
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
            range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            /**
             * Gets the value of the specified field from this month-of-year as an {@code int}.
             * <p>
             * This queries this month for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * value of the month-of-year, from 1 to 12, will be returned.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             * @param field  the field to get, not null
             * @return the value for the field, within the valid range of values
             * @throws DateTimeException if a value for the field cannot be obtained or
             *          the value is outside the range of valid values for the field
             * @throws UnsupportedTemporalTypeException if the field is not supported or
             *          the range of values exceeds an {#code int}
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            get(field: java.time.temporal.TemporalField): number /*int*/
            /**
             * Gets the value of the specified field from this month-of-year as a {@code long}.
             * <p>
             * This queries this month for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * value of the month-of-year, from 1 to 12, will be returned.
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
            getLong(field: java.time.temporal.TemporalField): number /*long*/
            /**
             * Returns the month-of-year that is the specified number of quarters after this one.
             * <p>
             * The calculation rolls around the end of the year from December to January.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param months  the months to add, positive or negative
             * @return the resulting month, not null
             */
            // @ts-ignore
            plus(months: number /*long*/): java.time.Month
            /**
             * Returns the month-of-year that is the specified number of months before this one.
             * <p>
             * The calculation rolls around the start of the year from January to December.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param months  the months to subtract, positive or negative
             * @return the resulting month, not null
             */
            // @ts-ignore
            minus(months: number /*long*/): java.time.Month
            /**
             * Gets the length of this month in days.
             * <p>
             * This takes a flag to determine whether to return the length for a leap year or not.
             * <p>
             * February has 28 days in a standard year and 29 days in a leap year.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             * @param leapYear  true if the length is required for a leap year
             * @return the length of this month in days, from 28 to 31
             */
            // @ts-ignore
            length(leapYear: boolean): number /*int*/
            /**
             * Gets the minimum length of this month in days.
             * <p>
             * February has a minimum length of 28 days.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             * @return the minimum length of this month in days, from 28 to 31
             */
            // @ts-ignore
            minLength(): number /*int*/
            /**
             * Gets the maximum length of this month in days.
             * <p>
             * February has a maximum length of 29 days.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             * @return the maximum length of this month in days, from 29 to 31
             */
            // @ts-ignore
            maxLength(): number /*int*/
            /**
             * Gets the day-of-year corresponding to the first day of this month.
             * <p>
             * This returns the day-of-year that this month begins on, using the leap
             * year flag to determine the length of February.
             * @param leapYear  true if the length is required for a leap year
             * @return the day of year corresponding to the first day of this month, from 1 to 336
             */
            // @ts-ignore
            firstDayOfYear(leapYear: boolean): number /*int*/
            /**
             * Gets the month corresponding to the first month of this quarter.
             * <p>
             * The year can be divided into four quarters.
             * This method returns the first month of the quarter for the base month.
             * January, February and March return January.
             * April, May and June return April.
             * July, August and September return July.
             * October, November and December return October.
             * @return the first month of the quarter corresponding to this month, not null
             */
            // @ts-ignore
            firstMonthOfQuarter(): java.time.Month
            /**
             * Queries this month-of-year using the specified query.
             * <p>
             * This queries this month-of-year using the specified query strategy object.
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
            query<R>(query: java.time.temporal.TemporalQuery<R>): R
            /**
             * Adjusts the specified temporal object to have this month-of-year.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the month-of-year changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#MONTH_OF_YEAR} as the field.
             * If the specified temporal object does not use the ISO calendar system then
             * a {@code DateTimeException} is thrown.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisMonth.adjustInto(temporal);
             * temporal = temporal.with(thisMonth);
             * </pre>
             * <p>
             * For example, given a date in May, the following are output:
             * <pre>
             * dateInMay.with(JANUARY);    // four months earlier
             * dateInMay.with(APRIL);      // one months earlier
             * dateInMay.with(MAY);        // same date
             * dateInMay.with(JUNE);       // one month later
             * dateInMay.with(DECEMBER);   // seven months later
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param temporal  the target object to be adjusted, not null
             * @return the adjusted object, not null
             * @throws DateTimeException if unable to make the adjustment
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal
        }
    }
}
