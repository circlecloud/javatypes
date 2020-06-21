declare namespace java {
    namespace time {
        /**
         * A time-zone offset from Greenwich/UTC, such as {@code +02:00}.
         * <p>
         * A time-zone offset is the amount of time that a time-zone differs from Greenwich/UTC.
         * This is usually a fixed number of hours and minutes.
         * <p>
         * Different parts of the world have different time-zone offsets.
         * The rules for how offsets vary by place and time of year are captured in the
         * {@link ZoneId} class.
         * <p>
         * For example, Paris is one hour ahead of Greenwich/UTC in winter and two hours
         * ahead in summer. The {@code ZoneId} instance for Paris will reference two
         * {@code ZoneOffset} instances - a {@code +01:00} instance for winter,
         * and a {@code +02:00} instance for summer.
         * <p>
         * In 2008, time-zone offsets around the world extended from -12:00 to +14:00.
         * To prevent any problems with that range being extended, yet still provide
         * validation, the range of offsets is restricted to -18:00 to 18:00 inclusive.
         * <p>
         * This class is designed for use with the ISO calendar system.
         * The fields of hours, minutes and seconds make assumptions that are valid for the
         * standard ISO definitions of those fields. This class may be used with other
         * calendar systems providing the definition of the time fields matches those
         * of the ISO calendar system.
         * <p>
         * Instances of {@code ZoneOffset} must be compared using {@link #equals}.
         * Implementations may choose to cache certain common offsets, however
         * applications must not rely on such caching.
         * <p>
         * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
         * class; use of identity-sensitive operations (including reference equality
         * ({@code ==}), identity hash code, or synchronization) on instances of
         * {@code ZoneOffset} may have unpredictable results and should be avoided.
         * The {@code equals} method should be used for comparisons.
         * @implSpec This class is immutable and thread-safe.
         * @since 1.8
         */
        // @ts-ignore
        class ZoneOffset extends java.time.ZoneId implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.ZoneOffset>, java.io.Serializable {
            /**
             * The time-zone offset for UTC, with an ID of 'Z'.
             */
            // @ts-ignore
            public static readonly UTC: java.time.ZoneOffset
            /**
             * Constant for the maximum supported offset.
             */
            // @ts-ignore
            public static readonly MIN: java.time.ZoneOffset
            /**
             * Constant for the maximum supported offset.
             */
            // @ts-ignore
            public static readonly MAX: java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} using the ID.
             * <p>
             * This method parses the string ID of a {@code ZoneOffset} to
             * return an instance. The parsing accepts all the formats generated by
             * {@link #getId()}, plus some additional formats:
             * <ul>
             * <li>{@code Z} - for UTC
             * <li>{@code +h}
             * <li>{@code +hh}
             * <li>{@code +hh:mm}
             * <li>{@code -hh:mm}
             * <li>{@code +hhmm}
             * <li>{@code -hhmm}
             * <li>{@code +hh:mm:ss}
             * <li>{@code -hh:mm:ss}
             * <li>{@code +hhmmss}
             * <li>{@code -hhmmss}
             * </ul>
             * Note that &plusmn; means either the plus or minus symbol.
             * <p>
             * The ID of the returned offset will be normalized to one of the formats
             * described by {@link #getId()}.
             * <p>
             * The maximum supported range is from +18:00 to -18:00 inclusive.
             * @param offsetId  the offset ID, not null
             * @return the zone-offset, not null
             * @throws DateTimeException if the offset ID is invalid
             */
            // @ts-ignore
            public static of(offsetId: java.lang.String | string): java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} using an offset in hours.
             * @param hours  the time-zone offset in hours, from -18 to +18
             * @return the zone-offset, not null
             * @throws DateTimeException if the offset is not in the required range
             */
            // @ts-ignore
            public static ofHours(hours: number /*int*/): java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} using an offset in
             * hours and minutes.
             * <p>
             * The sign of the hours and minutes components must match.
             * Thus, if the hours is negative, the minutes must be negative or zero.
             * If the hours is zero, the minutes may be positive, negative or zero.
             * @param hours  the time-zone offset in hours, from -18 to +18
             * @param minutes  the time-zone offset in minutes, from 0 to &plusmn;59, sign matches hours
             * @return the zone-offset, not null
             * @throws DateTimeException if the offset is not in the required range
             */
            // @ts-ignore
            public static ofHoursMinutes(hours: number /*int*/, minutes: number /*int*/): java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} using an offset in
             * hours, minutes and seconds.
             * <p>
             * The sign of the hours, minutes and seconds components must match.
             * Thus, if the hours is negative, the minutes and seconds must be negative or zero.
             * @param hours  the time-zone offset in hours, from -18 to +18
             * @param minutes  the time-zone offset in minutes, from 0 to &plusmn;59, sign matches hours and seconds
             * @param seconds  the time-zone offset in seconds, from 0 to &plusmn;59, sign matches hours and minutes
             * @return the zone-offset, not null
             * @throws DateTimeException if the offset is not in the required range
             */
            // @ts-ignore
            public static ofHoursMinutesSeconds(hours: number /*int*/, minutes: number /*int*/, seconds: number /*int*/): java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} from a temporal object.
             * <p>
             * This obtains an offset based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code ZoneOffset}.
             * <p>
             * A {@code TemporalAccessor} represents some form of date and time information.
             * This factory converts the arbitrary temporal object to an instance of {@code ZoneOffset}.
             * <p>
             * The conversion uses the {@link TemporalQueries#offset()} query, which relies
             * on extracting the {@link ChronoField#OFFSET_SECONDS OFFSET_SECONDS} field.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code ZoneOffset::from}.
             * @param temporal  the temporal object to convert, not null
             * @return the zone-offset, not null
             * @throws DateTimeException if unable to convert to an {#code ZoneOffset}
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.ZoneOffset
            /**
             * Obtains an instance of {@code ZoneOffset} specifying the total offset in seconds
             * <p>
             * The offset must be in the range {@code -18:00} to {@code +18:00}, which corresponds to -64800 to +64800.
             * @param totalSeconds  the total time-zone offset in seconds, from -64800 to +64800
             * @return the ZoneOffset, not null
             * @throws DateTimeException if the offset is not in the required range
             */
            // @ts-ignore
            public static ofTotalSeconds(totalSeconds: number /*int*/): java.time.ZoneOffset
            /**
             * Gets the total zone offset in seconds.
             * <p>
             * This is the primary way to access the offset amount.
             * It returns the total of the hours, minutes and seconds fields as a
             * single offset that can be added to a time.
             * @return the total zone offset amount in seconds
             */
            // @ts-ignore
            public getTotalSeconds(): number /*int*/
            /**
             * Gets the normalized zone offset ID.
             * <p>
             * The ID is minor variation to the standard ISO-8601 formatted string
             * for the offset. There are three formats:
             * <ul>
             * <li>{@code Z} - for UTC (ISO-8601)
             * <li>{@code +hh:mm} or {@code -hh:mm} - if the seconds are zero (ISO-8601)
             * <li>{@code +hh:mm:ss} or {@code -hh:mm:ss} - if the seconds are non-zero (not ISO-8601)
             * </ul>
             * @return the zone offset ID, not null
             */
            // @ts-ignore
            public getId(): string
            /**
             * Gets the associated time-zone rules.
             * <p>
             * The rules will always return this offset when queried.
             * The implementation class is immutable, thread-safe and serializable.
             * @return the rules, not null
             */
            // @ts-ignore
            public getRules(): java.time.zone.ZoneRules
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this offset can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range} and
             * {@link #get(TemporalField) get} methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@code OFFSET_SECONDS} field returns true.
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             * @param field  the field to check, null returns false
             * @return true if the field is supported on this offset, false if not
             */
            // @ts-ignore
            public isSupported(field: java.time.temporal.TemporalField): boolean
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This offset is used to enhance the accuracy of the returned range.
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
             * Gets the value of the specified field from this offset as an {@code int}.
             * <p>
             * This queries this offset for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@code OFFSET_SECONDS} field returns the value of the offset.
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
             * Gets the value of the specified field from this offset as a {@code long}.
             * <p>
             * This queries this offset for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@code OFFSET_SECONDS} field returns the value of the offset.
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
             * Queries this offset using the specified query.
             * <p>
             * This queries this offset using the specified query strategy object.
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
             * Adjusts the specified temporal object to have the same offset as this object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the offset changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#OFFSET_SECONDS} as the field.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisOffset.adjustInto(temporal);
             * temporal = temporal.with(thisOffset);
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
             * Compares this offset to another offset in descending order.
             * <p>
             * The offsets are compared in the order that they occur for the same time
             * of day around the world. Thus, an offset of {@code +10:00} comes before an
             * offset of {@code +09:00} and so on down to {@code -18:00}.
             * <p>
             * The comparison is "consistent with equals", as defined by {@link Comparable}.
             * @param other  the other date to compare to, not null
             * @return the comparator value, negative if less, positive if greater
             * @throws NullPointerException if {#code other} is null
             */
            // @ts-ignore
            public compareTo(other: java.time.ZoneOffset): number /*int*/
            /**
             * Checks if this offset is equal to another offset.
             * <p>
             * The comparison is based on the amount of the offset in seconds.
             * This is equivalent to a comparison by ID.
             * @param obj  the object to check, null returns false
             * @return true if this is equal to the other offset
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * A hash code for this offset.
             * @return a suitable hash code
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Outputs this offset as a {@code String}, using the normalized ID.
             * @return a string representation of this offset, not null
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
