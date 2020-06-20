declare namespace java {
    namespace time {
        /**
         * A date-time with a time-zone in the ISO-8601 calendar system,
         * such as {@code 2007-12-03T10:15:30+01:00 Europe/Paris}.
         * <p>
         * {@code ZonedDateTime} is an immutable representation of a date-time with a time-zone.
         * This class stores all date and time fields, to a precision of nanoseconds,
         * and a time-zone, with a zone offset used to handle ambiguous local date-times.
         * For example, the value
         * "2nd October 2007 at 13:45.30.123456789 +02:00 in the Europe/Paris time-zone"
         * can be stored in a {@code ZonedDateTime}.
         * <p>
         * This class handles conversion from the local time-line of {@code LocalDateTime}
         * to the instant time-line of {@code Instant}.
         * The difference between the two time-lines is the offset from UTC/Greenwich,
         * represented by a {@code ZoneOffset}.
         * <p>
         * Converting between the two time-lines involves calculating the offset using the
         * {@link ZoneRules rules} accessed from the {@code ZoneId}.
         * Obtaining the offset for an instant is simple, as there is exactly one valid
         * offset for each instant. By contrast, obtaining the offset for a local date-time
         * is not straightforward. There are three cases:
         * <ul>
         * <li>Normal, with one valid offset. For the vast majority of the year, the normal
         * case applies, where there is a single valid offset for the local date-time.</li>
         * <li>Gap, with zero valid offsets. This is when clocks jump forward typically
         * due to the spring daylight savings change from "winter" to "summer".
         * In a gap there are local date-time values with no valid offset.</li>
         * <li>Overlap, with two valid offsets. This is when clocks are set back typically
         * due to the autumn daylight savings change from "summer" to "winter".
         * In an overlap there are local date-time values with two valid offsets.</li>
         * </ul>
         * <p>
         * Any method that converts directly or implicitly from a local date-time to an
         * instant by obtaining the offset has the potential to be complicated.
         * <p>
         * For Gaps, the general strategy is that if the local date-time falls in the
         * middle of a Gap, then the resulting zoned date-time will have a local date-time
         * shifted forwards by the length of the Gap, resulting in a date-time in the later
         * offset, typically "summer" time.
         * <p>
         * For Overlaps, the general strategy is that if the local date-time falls in the
         * middle of an Overlap, then the previous offset will be retained. If there is no
         * previous offset, or the previous offset is invalid, then the earlier offset is
         * used, typically "summer" time.. Two additional methods,
         * {@link #withEarlierOffsetAtOverlap()} and {@link #withLaterOffsetAtOverlap()},
         * help manage the case of an overlap.
         * <p>
         * In terms of design, this class should be viewed primarily as the combination
         * of a {@code LocalDateTime} and a {@code ZoneId}. The {@code ZoneOffset} is
         * a vital, but secondary, piece of information, used to ensure that the class
         * represents an instant, especially during a daylight savings overlap.
         * <p>
         * This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
         * class; use of identity-sensitive operations (including reference equality
         * ({@code ==}), identity hash code, or synchronization) on instances of
         * {@code ZonedDateTime} may have unpredictable results and should be avoided.
         * The {@code equals} method should be used for comparisons.
         * @implSpec A {#code ZonedDateTime} holds state equivalent to three separate objects,
         *  a {@code LocalDateTime}, a {@code ZoneId} and the resolved {@code ZoneOffset}.
         *  The offset and local date-time are used to define an instant when necessary.
         *  The zone ID is used to obtain the rules for how and when the offset changes.
         *  The offset cannot be freely set, as the zone controls which offsets are valid.
         *  <p>
         *  This class is immutable and thread-safe.
         * @since 1.8
         */
        // @ts-ignore
        class ZonedDateTime extends java.lang.Object implements java.time.temporal.Temporal, java.time.chrono.ChronoZonedDateTime<java.time.LocalDate>, java.io.Serializable {
            /**
             * Obtains the current date-time from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current date-time.
             * The zone and offset will be set based on the time-zone in the clock.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             * @return the current date-time using the system clock, not null
             */
            // @ts-ignore
            now(): java.time.ZonedDateTime
            /**
             * Obtains the current date-time from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date-time.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * The offset will be calculated from the specified time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             * @param zone  the zone ID to use, not null
             * @return the current date-time using the system clock, not null
             */
            // @ts-ignore
            now(zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains the current date-time from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current date-time.
             * The zone and offset will be set based on the time-zone in the clock.
             * <p>
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             * @param clock  the clock to use, not null
             * @return the current date-time, not null
             */
            // @ts-ignore
            now(clock: java.time.Clock): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date and time.
             * <p>
             * This creates a zoned date-time matching the input local date and time as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date time and first combined to form a local date-time.
             * The local date-time is then resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             * @param date  the local date, not null
             * @param time  the local time, not null
             * @param zone  the time-zone, not null
             * @return the offset date-time, not null
             */
            // @ts-ignore
            of(date: java.time.LocalDate, time: java.time.LocalTime, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date-time.
             * <p>
             * This creates a zoned date-time matching the input local date-time as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             * @param localDateTime  the local date-time, not null
             * @param zone  the time-zone, not null
             * @return the zoned date-time, not null
             */
            // @ts-ignore
            of(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a year, month, day,
             * hour, minute, second, nanosecond and time-zone.
             * <p>
             * This creates a zoned date-time matching the local date-time of the seven
             * specified fields as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             * <p>
             * This method exists primarily for writing test cases.
             * Non test-code will typically use other methods to create an offset time.
             * {@code LocalDateTime} has five additional convenience variants of the
             * equivalent factory method taking fewer arguments.
             * They are not provided here to reduce the footprint of the API.
             * @param year  the year to represent, from MIN_YEAR to MAX_YEAR
             * @param month  the month-of-year to represent, from 1 (January) to 12 (December)
             * @param dayOfMonth  the day-of-month to represent, from 1 to 31
             * @param hour  the hour-of-day to represent, from 0 to 23
             * @param minute  the minute-of-hour to represent, from 0 to 59
             * @param second  the second-of-minute to represent, from 0 to 59
             * @param nanoOfSecond  the nano-of-second to represent, from 0 to 999,999,999
             * @param zone  the time-zone, not null
             * @return the offset date-time, not null
             * @throws DateTimeException if the value of any field is out of range, or
             *   if the day-of-month is invalid for the month-year
             */
            // @ts-ignore
            of(year: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/, hour: number /*int*/, minute: number /*int*/, second: number /*int*/, nanoOfSecond: number /*int*/, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date-time
             * using the preferred offset if possible.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, where clocks are set back, there are two valid offsets.
             * If the preferred offset is one of the valid offsets then it is used.
             * Otherwise the earlier valid offset is used, typically corresponding to "summer".
             * <p>
             * In the case of a gap, where clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             * @param localDateTime  the local date-time, not null
             * @param zone  the time-zone, not null
             * @param preferredOffset  the zone offset, null if no preference
             * @return the zoned date-time, not null
             */
            // @ts-ignore
            ofLocal(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId, preferredOffset: java.time.ZoneOffset): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from an {@code Instant}.
             * <p>
             * This creates a zoned date-time with the same instant as that specified.
             * Calling {@link #toInstant()} will return an instant equal to the one used here.
             * <p>
             * Converting an instant to a zoned date-time is simple as there is only one valid
             * offset for each instant.
             * @param instant  the instant to create the date-time from, not null
             * @param zone  the time-zone, not null
             * @return the zoned date-time, not null
             * @throws DateTimeException if the result exceeds the supported range
             */
            // @ts-ignore
            ofInstant(instant: java.time.Instant, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from the instant formed by combining
             * the local date-time and offset.
             * <p>
             * This creates a zoned date-time by {@link LocalDateTime#toInstant(ZoneOffset) combining}
             * the {@code LocalDateTime} and {@code ZoneOffset}.
             * This combination uniquely specifies an instant without ambiguity.
             * <p>
             * Converting an instant to a zoned date-time is simple as there is only one valid
             * offset for each instant. If the valid offset is different to the offset specified,
             * then the date-time and offset of the zoned date-time will differ from those specified.
             * <p>
             * If the {@code ZoneId} to be used is a {@code ZoneOffset}, this method is equivalent
             * to {@link #of(LocalDateTime, ZoneId)}.
             * @param localDateTime  the local date-time, not null
             * @param offset  the zone offset, not null
             * @param zone  the time-zone, not null
             * @return the zoned date-time, not null
             */
            // @ts-ignore
            ofInstant(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} strictly validating the
             * combination of local date-time, offset and zone ID.
             * <p>
             * This creates a zoned date-time ensuring that the offset is valid for the
             * local date-time according to the rules of the specified zone.
             * If the offset is invalid, an exception is thrown.
             * @param localDateTime  the local date-time, not null
             * @param offset  the zone offset, not null
             * @param zone  the time-zone, not null
             * @return the zoned date-time, not null
             */
            // @ts-ignore
            ofStrict(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a temporal object.
             * <p>
             * This obtains a zoned date-time based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code ZonedDateTime}.
             * <p>
             * The conversion will first obtain a {@code ZoneId} from the temporal object,
             * falling back to a {@code ZoneOffset} if necessary. It will then try to obtain
             * an {@code Instant}, falling back to a {@code LocalDateTime} if necessary.
             * The result will be either the combination of {@code ZoneId} or {@code ZoneOffset}
             * with {@code Instant} or {@code LocalDateTime}.
             * Implementations are permitted to perform optimizations such as accessing
             * those fields that are equivalent to the relevant objects.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code ZonedDateTime::from}.
             * @param temporal  the temporal object to convert, not null
             * @return the zoned date-time, not null
             * @throws DateTimeException if unable to convert to an {#code ZonedDateTime}
             */
            // @ts-ignore
            from(temporal: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a text string such as
             * {@code 2007-12-03T10:15:30+01:00[Europe/Paris]}.
             * <p>
             * The string must represent a valid date-time and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_ZONED_DATE_TIME}.
             * @param text  the text to parse such as "2007-12-03T10:15:30+01:00[Europe/Paris]", not null
             * @return the parsed zoned date-time, not null
             * @throws DateTimeParseException if the text cannot be parsed
             */
            // @ts-ignore
            parse(text: java.lang.CharSequence): java.time.ZonedDateTime
            /**
             * Obtains an instance of {@code ZonedDateTime} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a date-time.
             * @param text  the text to parse, not null
             * @param formatter  the formatter to use, not null
             * @return the parsed zoned date-time, not null
             * @throws DateTimeParseException if the text cannot be parsed
             */
            // @ts-ignore
            parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.ZonedDateTime
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this date-time can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range},
             * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
             * methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code NANO_OF_SECOND}
             * <li>{@code NANO_OF_DAY}
             * <li>{@code MICRO_OF_SECOND}
             * <li>{@code MICRO_OF_DAY}
             * <li>{@code MILLI_OF_SECOND}
             * <li>{@code MILLI_OF_DAY}
             * <li>{@code SECOND_OF_MINUTE}
             * <li>{@code SECOND_OF_DAY}
             * <li>{@code MINUTE_OF_HOUR}
             * <li>{@code MINUTE_OF_DAY}
             * <li>{@code HOUR_OF_AMPM}
             * <li>{@code CLOCK_HOUR_OF_AMPM}
             * <li>{@code HOUR_OF_DAY}
             * <li>{@code CLOCK_HOUR_OF_DAY}
             * <li>{@code AMPM_OF_DAY}
             * <li>{@code DAY_OF_WEEK}
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_MONTH}
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_YEAR}
             * <li>{@code DAY_OF_MONTH}
             * <li>{@code DAY_OF_YEAR}
             * <li>{@code EPOCH_DAY}
             * <li>{@code ALIGNED_WEEK_OF_MONTH}
             * <li>{@code ALIGNED_WEEK_OF_YEAR}
             * <li>{@code MONTH_OF_YEAR}
             * <li>{@code PROLEPTIC_MONTH}
             * <li>{@code YEAR_OF_ERA}
             * <li>{@code YEAR}
             * <li>{@code ERA}
             * <li>{@code INSTANT_SECONDS}
             * <li>{@code OFFSET_SECONDS}
             * </ul>
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             * @param field  the field to check, null returns false
             * @return true if the field is supported on this date-time, false if not
             */
            // @ts-ignore
            isSupported(field: java.time.temporal.TemporalField): boolean
            /**
             * Checks if the specified unit is supported.
             * <p>
             * This checks if the specified unit can be added to, or subtracted from, this date-time.
             * If false, then calling the {@link #plus(long, TemporalUnit)} and
             * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
             * <p>
             * If the unit is a {@link ChronoUnit} then the query is implemented here.
             * The supported units are:
             * <ul>
             * <li>{@code NANOS}
             * <li>{@code MICROS}
             * <li>{@code MILLIS}
             * <li>{@code SECONDS}
             * <li>{@code MINUTES}
             * <li>{@code HOURS}
             * <li>{@code HALF_DAYS}
             * <li>{@code DAYS}
             * <li>{@code WEEKS}
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
            isSupported(unit: java.time.temporal.TemporalUnit): boolean
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This date-time is used to enhance the accuracy of the returned range.
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
            range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            /**
             * Gets the value of the specified field from this date-time as an {@code int}.
             * <p>
             * This queries this date-time for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date-time, except {@code NANO_OF_DAY}, {@code MICRO_OF_DAY},
             * {@code EPOCH_DAY}, {@code PROLEPTIC_MONTH} and {@code INSTANT_SECONDS} which are too
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
            get(field: java.time.temporal.TemporalField): int
            /**
             * Gets the value of the specified field from this date-time as a {@code long}.
             * <p>
             * This queries this date-time for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date-time.
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
            getLong(field: java.time.temporal.TemporalField): long
            /**
             * Gets the zone offset, such as '+01:00'.
             * <p>
             * This is the offset of the local date-time from UTC/Greenwich.
             * @return the zone offset, not null
             */
            // @ts-ignore
            getOffset(): java.time.ZoneOffset
            /**
             * Returns a copy of this date-time changing the zone offset to the
             * earlier of the two valid offsets at a local time-line overlap.
             * <p>
             * This method only has any effect when the local time-line overlaps, such as
             * at an autumn daylight savings cutover. In this scenario, there are two
             * valid offsets for the local date-time. Calling this method will return
             * a zoned date-time with the earlier of the two selected.
             * <p>
             * If this method is called when it is not an overlap, {@code this}
             * is returned.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @return a {#code ZonedDateTime} based on this date-time with the earlier offset, not null
             */
            // @ts-ignore
            withEarlierOffsetAtOverlap(): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time changing the zone offset to the
             * later of the two valid offsets at a local time-line overlap.
             * <p>
             * This method only has any effect when the local time-line overlaps, such as
             * at an autumn daylight savings cutover. In this scenario, there are two
             * valid offsets for the local date-time. Calling this method will return
             * a zoned date-time with the later of the two selected.
             * <p>
             * If this method is called when it is not an overlap, {@code this}
             * is returned.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @return a {#code ZonedDateTime} based on this date-time with the later offset, not null
             */
            // @ts-ignore
            withLaterOffsetAtOverlap(): java.time.ZonedDateTime
            /**
             * Gets the time-zone, such as 'Europe/Paris'.
             * <p>
             * This returns the zone ID. This identifies the time-zone {@link ZoneRules rules}
             * that determine when and how the offset from UTC/Greenwich changes.
             * <p>
             * The zone ID may be same as the {@linkplain #getOffset() offset}.
             * If this is true, then any future calculations, such as addition or subtraction,
             * have no complex edge cases due to time-zone rules.
             * See also {@link #withFixedOffsetZone()}.
             * @return the time-zone, not null
             */
            // @ts-ignore
            getZone(): java.time.ZoneId
            /**
             * Returns a copy of this date-time with a different time-zone,
             * retaining the local date-time if possible.
             * <p>
             * This method changes the time-zone and retains the local date-time.
             * The local date-time is only changed if it is invalid for the new zone,
             * determined using the same approach as
             * {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}.
             * <p>
             * To change the zone and adjust the local date-time,
             * use {@link #withZoneSameInstant(ZoneId)}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param zone  the time-zone to change to, not null
             * @return a {#code ZonedDateTime} based on this date-time with the requested zone, not null
             */
            // @ts-ignore
            withZoneSameLocal(zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with a different time-zone,
             * retaining the instant.
             * <p>
             * This method changes the time-zone and retains the instant.
             * This normally results in a change to the local date-time.
             * <p>
             * This method is based on retaining the same instant, thus gaps and overlaps
             * in the local time-line have no effect on the result.
             * <p>
             * To change the offset while keeping the local time,
             * use {@link #withZoneSameLocal(ZoneId)}.
             * @param zone  the time-zone to change to, not null
             * @return a {#code ZonedDateTime} based on this date-time with the requested zone, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            withZoneSameInstant(zone: java.time.ZoneId): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the zone ID set to the offset.
             * <p>
             * This returns a zoned date-time where the zone ID is the same as {@link #getOffset()}.
             * The local date-time, offset and instant of the result will be the same as in this date-time.
             * <p>
             * Setting the date-time to a fixed single offset means that any future
             * calculations, such as addition or subtraction, have no complex edge cases
             * due to time-zone rules.
             * This might also be useful when sending a zoned date-time across a network,
             * as most protocols, such as ISO-8601, only handle offsets,
             * and not region-based zone IDs.
             * <p>
             * This is equivalent to {@code ZonedDateTime.of(zdt.toLocalDateTime(), zdt.getOffset())}.
             * @return a {#code ZonedDateTime} with the zone ID set to the offset, not null
             */
            // @ts-ignore
            withFixedOffsetZone(): java.time.ZonedDateTime
            /**
             * Gets the {@code LocalDateTime} part of this date-time.
             * <p>
             * This returns a {@code LocalDateTime} with the same year, month, day and time
             * as this date-time.
             * @return the local date-time part of this date-time, not null
             */
            // @ts-ignore
            toLocalDateTime(): java.time.LocalDateTime
            /**
             * Gets the {@code LocalDate} part of this date-time.
             * <p>
             * This returns a {@code LocalDate} with the same year, month and day
             * as this date-time.
             * @return the date part of this date-time, not null
             */
            // @ts-ignore
            toLocalDate(): java.time.LocalDate
            /**
             * Gets the year field.
             * <p>
             * This method returns the primitive {@code int} value for the year.
             * <p>
             * The year returned by this method is proleptic as per {@code get(YEAR)}.
             * To obtain the year-of-era, use {@code get(YEAR_OF_ERA)}.
             * @return the year, from MIN_YEAR to MAX_YEAR
             */
            // @ts-ignore
            getYear(): int
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
            getMonthValue(): int
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
            getMonth(): java.time.Month
            /**
             * Gets the day-of-month field.
             * <p>
             * This method returns the primitive {@code int} value for the day-of-month.
             * @return the day-of-month, from 1 to 31
             */
            // @ts-ignore
            getDayOfMonth(): int
            /**
             * Gets the day-of-year field.
             * <p>
             * This method returns the primitive {@code int} value for the day-of-year.
             * @return the day-of-year, from 1 to 365, or 366 in a leap year
             */
            // @ts-ignore
            getDayOfYear(): int
            /**
             * Gets the day-of-week field, which is an enum {@code DayOfWeek}.
             * <p>
             * This method returns the enum {@link DayOfWeek} for the day-of-week.
             * This avoids confusion as to what {@code int} values mean.
             * If you need access to the primitive {@code int} value then the enum
             * provides the {@link DayOfWeek#getValue() int value}.
             * <p>
             * Additional information can be obtained from the {@code DayOfWeek}.
             * This includes textual names of the values.
             * @return the day-of-week, not null
             */
            // @ts-ignore
            getDayOfWeek(): java.time.DayOfWeek
            /**
             * Gets the {@code LocalTime} part of this date-time.
             * <p>
             * This returns a {@code LocalTime} with the same hour, minute, second and
             * nanosecond as this date-time.
             * @return the time part of this date-time, not null
             */
            // @ts-ignore
            toLocalTime(): java.time.LocalTime
            /**
             * Gets the hour-of-day field.
             * @return the hour-of-day, from 0 to 23
             */
            // @ts-ignore
            getHour(): int
            /**
             * Gets the minute-of-hour field.
             * @return the minute-of-hour, from 0 to 59
             */
            // @ts-ignore
            getMinute(): int
            /**
             * Gets the second-of-minute field.
             * @return the second-of-minute, from 0 to 59
             */
            // @ts-ignore
            getSecond(): int
            /**
             * Gets the nano-of-second field.
             * @return the nano-of-second, from 0 to 999,999,999
             */
            // @ts-ignore
            getNano(): int
            /**
             * Returns an adjusted copy of this date-time.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the date-time adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the year field.
             * A more complex adjuster might set the date to the last day of the month.
             * A selection of common adjustments is provided in
             * {@link java.time.temporal.TemporalAdjusters TemporalAdjusters}.
             * These include finding the "last day of the month" and "next Wednesday".
             * Key date-time classes also implement the {@code TemporalAdjuster} interface,
             * such as {@link Month} and {@link java.time.MonthDay MonthDay}.
             * The adjuster is responsible for handling special cases, such as the varying
             * lengths of month and leap years.
             * <p>
             * For example this code returns a date on the last day of July:
             * <pre>
             * import static java.time.Month.*;
             * import static java.time.temporal.TemporalAdjusters.*;
             * result = zonedDateTime.with(JULY).with(lastDayOfMonth());
             * </pre>
             * <p>
             * The classes {@link LocalDate} and {@link LocalTime} implement {@code TemporalAdjuster},
             * thus this method can be used to change the date, time or offset:
             * <pre>
             * result = zonedDateTime.with(date);
             * result = zonedDateTime.with(time);
             * </pre>
             * <p>
             * {@link ZoneOffset} also implements {@code TemporalAdjuster} however using it
             * as an argument typically has no effect. The offset of a {@code ZonedDateTime} is
             * controlled primarily by the time-zone. As such, changing the offset does not generally
             * make sense, because there is only one valid offset for the local date-time and zone.
             * If the zoned date-time is in a daylight savings overlap, then the offset is used
             * to switch between the two valid offsets. In all other cases, the offset is ignored.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param adjuster the adjuster to use, not null
             * @return a {#code ZonedDateTime} based on {@code this} with the adjustment made, not null
             * @throws DateTimeException if the adjustment cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            with(adjuster: java.time.temporal.TemporalAdjuster): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the specified field set to a new value.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the year, month or day-of-month.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * In some cases, changing the specified field can cause the resulting date-time to become invalid,
             * such as changing the month from 31st January to February would make the day-of-month invalid.
             * In cases like this, the field is responsible for resolving the date. Typically it will choose
             * the previous valid date, which would be the last valid day of February in this example.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * <p>
             * The {@code INSTANT_SECONDS} field will return a date-time with the specified instant.
             * The zone and nano-of-second are unchanged.
             * The result will have an offset derived from the new instant and original zone.
             * If the new instant value is outside the valid range then a {@code DateTimeException} will be thrown.
             * <p>
             * The {@code OFFSET_SECONDS} field will typically be ignored.
             * The offset of a {@code ZonedDateTime} is controlled primarily by the time-zone.
             * As such, changing the offset does not generally make sense, because there is only
             * one valid offset for the local date-time and zone.
             * If the zoned date-time is in a daylight savings overlap, then the offset is used
             * to switch between the two valid offsets. In all other cases, the offset is ignored.
             * If the new offset value is outside the valid range then a {@code DateTimeException} will be thrown.
             * <p>
             * The other {@link #isSupported(TemporalField) supported fields} will behave as per
             * the matching method on {@link LocalDateTime#with(TemporalField, long) LocalDateTime}.
             * The zone is not part of the calculation and will be unchanged.
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
             * @return a {#code ZonedDateTime} based on {@code this} with the specified field set, not null
             * @throws DateTimeException if the field cannot be set
             * @throws UnsupportedTemporalTypeException if the field is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            with(field: java.time.temporal.TemporalField, newValue: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withYear(int) changing the year} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param year  the year to set in the result, from MIN_YEAR to MAX_YEAR
             * @return a {#code ZonedDateTime} based on this date-time with the requested year, not null
             * @throws DateTimeException if the year value is invalid
             */
            // @ts-ignore
            withYear(year: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the month-of-year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withMonth(int) changing the month} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param month  the month-of-year to set in the result, from 1 (January) to 12 (December)
             * @return a {#code ZonedDateTime} based on this date-time with the requested month, not null
             * @throws DateTimeException if the month-of-year value is invalid
             */
            // @ts-ignore
            withMonth(month: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the day-of-month altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withDayOfMonth(int) changing the day-of-month} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param dayOfMonth  the day-of-month to set in the result, from 1 to 28-31
             * @return a {#code ZonedDateTime} based on this date-time with the requested day, not null
             * @throws DateTimeException if the day-of-month value is invalid,
             *   or if the day-of-month is invalid for the month-year
             */
            // @ts-ignore
            withDayOfMonth(dayOfMonth: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the day-of-year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withDayOfYear(int) changing the day-of-year} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param dayOfYear  the day-of-year to set in the result, from 1 to 365-366
             * @return a {#code ZonedDateTime} based on this date with the requested day, not null
             * @throws DateTimeException if the day-of-year value is invalid,
             *   or if the day-of-year is invalid for the year
             */
            // @ts-ignore
            withDayOfYear(dayOfYear: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the hour-of-day altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withHour(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param hour  the hour-of-day to set in the result, from 0 to 23
             * @return a {#code ZonedDateTime} based on this date-time with the requested hour, not null
             * @throws DateTimeException if the hour value is invalid
             */
            // @ts-ignore
            withHour(hour: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the minute-of-hour altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withMinute(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param minute  the minute-of-hour to set in the result, from 0 to 59
             * @return a {#code ZonedDateTime} based on this date-time with the requested minute, not null
             * @throws DateTimeException if the minute value is invalid
             */
            // @ts-ignore
            withMinute(minute: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the second-of-minute altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withSecond(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param second  the second-of-minute to set in the result, from 0 to 59
             * @return a {#code ZonedDateTime} based on this date-time with the requested second, not null
             * @throws DateTimeException if the second value is invalid
             */
            // @ts-ignore
            withSecond(second: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the nano-of-second altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withNano(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param nanoOfSecond  the nano-of-second to set in the result, from 0 to 999,999,999
             * @return a {#code ZonedDateTime} based on this date-time with the requested nanosecond, not null
             * @throws DateTimeException if the nano value is invalid
             */
            // @ts-ignore
            withNano(nanoOfSecond: number /*int*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the time truncated.
             * <p>
             * Truncation returns a copy of the original date-time with fields
             * smaller than the specified unit set to zero.
             * For example, truncating with the {@link ChronoUnit#MINUTES minutes} unit
             * will set the second-of-minute and nano-of-second field to zero.
             * <p>
             * The unit must have a {@linkplain TemporalUnit#getDuration() duration}
             * that divides into the length of a standard day without remainder.
             * This includes all supplied time units on {@link ChronoUnit} and
             * {@link ChronoUnit#DAYS DAYS}. Other units throw an exception.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#truncatedTo(TemporalUnit) truncating}
             * the underlying local date-time. This is then converted back to a
             * {@code ZonedDateTime}, using the zone ID to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param unit  the unit to truncate to, not null
             * @return a {#code ZonedDateTime} based on this date-time with the time truncated, not null
             * @throws DateTimeException if unable to truncate
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             */
            // @ts-ignore
            truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the specified amount added.
             * The amount is typically {@link Period} or {@link Duration} but may be
             * any other type implementing the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#addTo(Temporal)}. The amount implementation is free
             * to implement the addition in any way it wishes, however it typically
             * calls back to {@link #plus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToAdd  the amount to add, not null
             * @return a {#code ZonedDateTime} based on this date-time with the addition made, not null
             * @throws DateTimeException if the addition cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The zone is not part of the calculation and will be unchanged in the result.
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line.
             * The period is first added to the local date-time, then converted back
             * to a zoned date-time using the zone ID.
             * The conversion uses {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}
             * with the offset before the addition.
             * <p>
             * Time units operate on the instant time-line.
             * The period is first added to the local date-time, then converted back to
             * a zoned date-time using the zone ID.
             * The conversion uses {@link #ofInstant(LocalDateTime, ZoneOffset, ZoneId)}
             * with the offset before the addition.
             * <p>
             * If the field is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
             * passing {@code this} as the argument. In this case, the unit determines
             * whether and how to perform the addition.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToAdd  the amount of the unit to add to the result, may be negative
             * @param unit  the unit of the amount to add, not null
             * @return a {#code ZonedDateTime} based on this date-time with the specified amount added, not null
             * @throws DateTimeException if the addition cannot be made
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            plus(amountToAdd: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of years added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusYears(long) adding years} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param years  the years to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the years added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusYears(years: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of months added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusMonths(long) adding months} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param months  the months to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the months added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusMonths(months: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of weeks added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusWeeks(long) adding weeks} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param weeks  the weeks to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the weeks added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusWeeks(weeks: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of days added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusDays(long) adding days} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param days  the days to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the days added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusDays(days: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of hours added.
             * <p>
             * This operates on the instant time-line, such that adding one hour will
             * always be a duration of one hour later.
             * This may cause the local date-time to change by an amount other than one hour.
             * Note that this is a different approach to that used by days, months and years,
             * thus adding one day is not the same as adding 24 hours.
             * <p>
             * For example, consider a time-zone where the spring DST cutover means that the
             * local times 01:00 to 01:59 occur twice changing from offset +02:00 to +01:00.
             * <ul>
             * <li>Adding one hour to 00:30+02:00 will result in 01:30+02:00
             * <li>Adding one hour to 01:30+02:00 will result in 01:30+01:00
             * <li>Adding one hour to 01:30+01:00 will result in 02:30+01:00
             * <li>Adding three hours to 00:30+02:00 will result in 02:30+01:00
             * </ul>
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param hours  the hours to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the hours added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusHours(hours: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of minutes added.
             * <p>
             * This operates on the instant time-line, such that adding one minute will
             * always be a duration of one minute later.
             * This may cause the local date-time to change by an amount other than one minute.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param minutes  the minutes to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the minutes added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusMinutes(minutes: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of seconds added.
             * <p>
             * This operates on the instant time-line, such that adding one second will
             * always be a duration of one second later.
             * This may cause the local date-time to change by an amount other than one second.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param seconds  the seconds to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the seconds added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusSeconds(seconds: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of nanoseconds added.
             * <p>
             * This operates on the instant time-line, such that adding one nano will
             * always be a duration of one nano later.
             * This may cause the local date-time to change by an amount other than one nano.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param nanos  the nanos to add, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the nanoseconds added, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            plusNanos(nanos: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the specified amount subtracted.
             * The amount is typically {@link Period} or {@link Duration} but may be
             * any other type implementing the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#subtractFrom(Temporal)}. The amount implementation is free
             * to implement the subtraction in any way it wishes, however it typically
             * calls back to {@link #minus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToSubtract  the amount to subtract, not null
             * @return a {#code ZonedDateTime} based on this date-time with the subtraction made, not null
             * @throws DateTimeException if the subtraction cannot be made
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line.
             * The period is first subtracted from the local date-time, then converted back
             * to a zoned date-time using the zone ID.
             * The conversion uses {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}
             * with the offset before the subtraction.
             * <p>
             * Time units operate on the instant time-line.
             * The period is first subtracted from the local date-time, then converted back to
             * a zoned date-time using the zone ID.
             * The conversion uses {@link #ofInstant(LocalDateTime, ZoneOffset, ZoneId)}
             * with the offset before the subtraction.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param amountToSubtract  the amount of the unit to subtract from the result, may be negative
             * @param unit  the unit of the amount to subtract, not null
             * @return a {#code ZonedDateTime} based on this date-time with the specified amount subtracted, not null
             * @throws DateTimeException if the subtraction cannot be made
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            minus(amountToSubtract: number /*long*/, unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of years subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusYears(long) subtracting years} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param years  the years to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the years subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusYears(years: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of months subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusMonths(long) subtracting months} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param months  the months to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the months subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusMonths(months: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of weeks subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusWeeks(long) subtracting weeks} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param weeks  the weeks to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the weeks subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusWeeks(weeks: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of days subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusDays(long) subtracting days} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param days  the days to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the days subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusDays(days: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of hours subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one hour will
             * always be a duration of one hour earlier.
             * This may cause the local date-time to change by an amount other than one hour.
             * Note that this is a different approach to that used by days, months and years,
             * thus subtracting one day is not the same as adding 24 hours.
             * <p>
             * For example, consider a time-zone where the spring DST cutover means that the
             * local times 01:00 to 01:59 occur twice changing from offset +02:00 to +01:00.
             * <ul>
             * <li>Subtracting one hour from 02:30+01:00 will result in 01:30+02:00
             * <li>Subtracting one hour from 01:30+01:00 will result in 01:30+02:00
             * <li>Subtracting one hour from 01:30+02:00 will result in 00:30+01:00
             * <li>Subtracting three hours from 02:30+01:00 will result in 00:30+02:00
             * </ul>
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param hours  the hours to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the hours subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusHours(hours: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of minutes subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one minute will
             * always be a duration of one minute earlier.
             * This may cause the local date-time to change by an amount other than one minute.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param minutes  the minutes to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the minutes subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusMinutes(minutes: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of seconds subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one second will
             * always be a duration of one second earlier.
             * This may cause the local date-time to change by an amount other than one second.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param seconds  the seconds to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the seconds subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusSeconds(seconds: number /*long*/): java.time.ZonedDateTime
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of nanoseconds subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one nano will
             * always be a duration of one nano earlier.
             * This may cause the local date-time to change by an amount other than one nano.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param nanos  the nanos to subtract, may be negative
             * @return a {#code ZonedDateTime} based on this date-time with the nanoseconds subtracted, not null
             * @throws DateTimeException if the result exceeds the supported date range
             */
            // @ts-ignore
            minusNanos(nanos: number /*long*/): java.time.ZonedDateTime
            /**
             * Queries this date-time using the specified query.
             * <p>
             * This queries this date-time using the specified query strategy object.
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
             * Calculates the amount of time until another date-time in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code ZonedDateTime}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified date-time.
             * The result will be negative if the end is before the start.
             * For example, the amount in days between two date-times can be calculated
             * using {@code startDateTime.until(endDateTime, DAYS)}.
             * <p>
             * The {@code Temporal} passed to this method is converted to a
             * {@code ZonedDateTime} using {@link #from(TemporalAccessor)}.
             * If the time-zone differs between the two zoned date-times, the specified
             * end date-time is normalized to have the same zone as this date-time.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two date-times.
             * For example, the amount in months between 2012-06-15T00:00Z and 2012-08-14T23:59Z
             * will only be one month as it is one minute short of two months.
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
             * The units {@code NANOS}, {@code MICROS}, {@code MILLIS}, {@code SECONDS},
             * {@code MINUTES}, {@code HOURS} and {@code HALF_DAYS}, {@code DAYS},
             * {@code WEEKS}, {@code MONTHS}, {@code YEARS}, {@code DECADES},
             * {@code CENTURIES}, {@code MILLENNIA} and {@code ERAS} are supported.
             * Other {@code ChronoUnit} values will throw an exception.
             * <p>
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line, using the local date-time.
             * For example, the period from noon on day 1 to noon the following day
             * in days will always be counted as exactly one day, irrespective of whether
             * there was a daylight savings change or not.
             * <p>
             * Time units operate on the instant time-line.
             * The calculation effectively converts both zoned date-times to instants
             * and then calculates the period between the instants.
             * For example, the period from noon on day 1 to noon the following day
             * in hours may be 23, 24 or 25 hours (or some other amount) depending on
             * whether there was a daylight savings change or not.
             * <p>
             * If the unit is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.between(Temporal, Temporal)}
             * passing {@code this} as the first argument and the converted input temporal
             * as the second argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             * @param endExclusive  the end date, exclusive, which is converted to a {#code ZonedDateTime}, not null
             * @param unit  the unit to measure the amount in, not null
             * @return the amount of time between this date-time and the end date-time
             * @throws DateTimeException if the amount cannot be calculated, or the end
             *   temporal cannot be converted to a {#code ZonedDateTime}
             * @throws UnsupportedTemporalTypeException if the unit is not supported
             * @throws ArithmeticException if numeric overflow occurs
             */
            // @ts-ignore
            until(endExclusive: java.time.temporal.Temporal, unit: java.time.temporal.TemporalUnit): long
            /**
             * Formats this date-time using the specified formatter.
             * <p>
             * This date-time will be passed to the formatter to produce a string.
             * @param formatter  the formatter to use, not null
             * @return the formatted date-time string, not null
             * @throws DateTimeException if an error occurs during printing
             */
            // @ts-ignore
            format(formatter: java.time.format.DateTimeFormatter): java.lang.String
            /**
             * Converts this date-time to an {@code OffsetDateTime}.
             * <p>
             * This creates an offset date-time using the local date-time and offset.
             * The zone ID is ignored.
             * @return an offset date-time representing the same local date-time and offset, not null
             */
            // @ts-ignore
            toOffsetDateTime(): java.time.OffsetDateTime
            /**
             * Checks if this date-time is equal to another date-time.
             * <p>
             * The comparison is based on the offset date-time and the zone.
             * Only objects of type {@code ZonedDateTime} are compared, other types return false.
             * @param obj  the object to check, null returns false
             * @return true if this is equal to the other date-time
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * A hash code for this date-time.
             * @return a suitable hash code
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Outputs this date-time as a {@code String}, such as
             * {@code 2007-12-03T10:15:30+01:00[Europe/Paris]}.
             * <p>
             * The format consists of the {@code LocalDateTime} followed by the {@code ZoneOffset}.
             * If the {@code ZoneId} is not the same as the offset, then the ID is output.
             * The output is compatible with ISO-8601 if the offset and ID are the same.
             * @return a string representation of this date-time, not null
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
