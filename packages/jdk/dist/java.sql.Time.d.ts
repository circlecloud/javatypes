declare namespace java {
    namespace sql {
        /**
         * <P>A thin wrapper around the <code>java.util.Date</code> class that allows the JDBC
         * API to identify this as an SQL <code>TIME</code> value. The <code>Time</code>
         * class adds formatting and
         * parsing operations to support the JDBC escape syntax for time
         * values.
         * <p>The date components should be set to the "zero epoch"
         * value of January 1, 1970 and should not be accessed.
         */
        // @ts-ignore
        class Time extends java.util.Date {
            /**
             * Constructs a <code>Time</code> object initialized with the
             * given values for the hour, minute, and second.
             * The driver sets the date components to January 1, 1970.
             * Any method that attempts to access the date components of a
             * <code>Time</code> object will throw a
             * <code>java.lang.IllegalArgumentException</code>.
             * <P>
             * The result is undefined if a given argument is out of bounds.
             * @param hour 0 to 23
             * @param minute 0 to 59
             * @param second 0 to 59
             * @deprecated Use the constructor that takes a milliseconds value
             *              in place of this constructor
             */
            // @ts-ignore
            constructor(hour: number /*int*/, minute: number /*int*/, second: number /*int*/)
            /**
             * Constructs a <code>Time</code> object using a milliseconds time value.
             * @param time milliseconds since January 1, 1970, 00:00:00 GMT;
             *              a negative number is milliseconds before
             *                January 1, 1970, 00:00:00 GMT
             */
            // @ts-ignore
            constructor(time: number /*long*/)
            /**
             * Sets a <code>Time</code> object using a milliseconds time value.
             * @param time milliseconds since January 1, 1970, 00:00:00 GMT;
             *              a negative number is milliseconds before
             *                January 1, 1970, 00:00:00 GMT
             */
            // @ts-ignore
            setTime(time: number /*long*/): void
            /**
             * Converts a string in JDBC time escape format to a <code>Time</code> value.
             * @param s time in format "hh:mm:ss"
             * @return a corresponding <code>Time</code> object
             */
            // @ts-ignore
            valueOf(s: string): java.sql.Time
            /**
             * Formats a time in JDBC time escape format.
             * @return a <code>String</code> in hh:mm:ss format
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a year component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #setYear
             */
            // @ts-ignore
            getYear(): int
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a month component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #setMonth
             */
            // @ts-ignore
            getMonth(): int
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a day component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             */
            // @ts-ignore
            getDay(): int
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a date component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #setDate
             */
            // @ts-ignore
            getDate(): int
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a year component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #getYear
             */
            // @ts-ignore
            setYear(i: number /*int*/): void
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a month component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #getMonth
             */
            // @ts-ignore
            setMonth(i: number /*int*/): void
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a date component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this
             *            method is invoked
             * @see #getDate
             */
            // @ts-ignore
            setDate(i: number /*int*/): void
            /**
             * Obtains an instance of {@code Time} from a {@link LocalTime} object
             * with the same hour, minute and second time value as the given
             * {@code LocalTime}.
             * @param time a {#code LocalTime} to convert
             * @return a {#code Time} object
             * @exception NullPointerException if {#code time} is null
             * @since 1.8
             */
            // @ts-ignore
            valueOf(time: java.time.LocalTime): java.sql.Time
            /**
             * Converts this {@code Time} object to a {@code LocalTime}.
             * <p>
             * The conversion creates a {@code LocalTime} that represents the same
             * hour, minute, and second time value as this {@code Time}.
             * @return a {#code LocalTime} object representing the same time value
             * @since 1.8
             */
            // @ts-ignore
            toLocalTime(): java.time.LocalTime
            /**
             * This method always throws an UnsupportedOperationException and should
             * not be used because SQL {@code Time} values do not have a date
             * component.
             * @exception java.lang.UnsupportedOperationException if this method is invoked
             */
            // @ts-ignore
            toInstant(): java.time.Instant
        }
    }
}
