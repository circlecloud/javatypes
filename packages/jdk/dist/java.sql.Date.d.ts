declare namespace java {
    namespace sql {
        /**
         * <P>A thin wrapper around a millisecond value that allows
         * JDBC to identify this as an SQL <code>DATE</code> value.  A
         * milliseconds value represents the number of milliseconds that
         * have passed since January 1, 1970 00:00:00.000 GMT.
         * <p>
         * To conform with the definition of SQL <code>DATE</code>, the
         * millisecond values wrapped by a <code>java.sql.Date</code> instance
         * must be 'normalized' by setting the
         * hours, minutes, seconds, and milliseconds to zero in the particular
         * time zone with which the instance is associated.
         */
        // @ts-ignore
        class Date extends java.util.Date {
            /**
             * Constructs a <code>Date</code> object initialized with the given
             * year, month, and day.
             * <P>
             * The result is undefined if a given argument is out of bounds.
             * @param year the year minus 1900; must be 0 to 8099. (Note that
             *         8099 is 9999 minus 1900.)
             * @param month 0 to 11
             * @param day 1 to 31
             * @deprecated instead use the constructor <code>Date(long date)</code>
             */
            // @ts-ignore
            constructor(year: number /*int*/, month: number /*int*/, day: number /*int*/)
            /**
             * Constructs a <code>Date</code> object using the given milliseconds
             * time value.  If the given milliseconds value contains time
             * information, the driver will set the time components to the
             * time in the default time zone (the time zone of the Java virtual
             * machine running the application) that corresponds to zero GMT.
             * @param date milliseconds since January 1, 1970, 00:00:00 GMT not
             *         to exceed the milliseconds representation for the year 8099.
             *         A negative number indicates the number of milliseconds
             *         before January 1, 1970, 00:00:00 GMT.
             */
            // @ts-ignore
            constructor(date: number /*long*/)
            /**
             * Sets an existing <code>Date</code> object
             * using the given milliseconds time value.
             * If the given milliseconds value contains time information,
             * the driver will set the time components to the
             * time in the default time zone (the time zone of the Java virtual
             * machine running the application) that corresponds to zero GMT.
             * @param date milliseconds since January 1, 1970, 00:00:00 GMT not
             *         to exceed the milliseconds representation for the year 8099.
             *         A negative number indicates the number of milliseconds
             *         before January 1, 1970, 00:00:00 GMT.
             */
            // @ts-ignore
            public setTime(date: number /*long*/): void
            /**
             * Converts a string in JDBC date escape format to
             * a <code>Date</code> value.
             * @param s a <code>String</code> object representing a date in
             *         in the format "yyyy-[m]m-[d]d". The leading zero for <code>mm</code>
             *  and <code>dd</code> may also be omitted.
             * @return a <code>java.sql.Date</code> object representing the
             *          given date
             * @throws IllegalArgumentException if the date given is not in the
             *          JDBC date escape format (yyyy-[m]m-[d]d)
             */
            // @ts-ignore
            public static valueOf(s: java.lang.String | string): java.sql.Date
            /**
             * Formats a date in the date escape format yyyy-mm-dd.
             * <P>
             * @return a String in yyyy-mm-dd format
             */
            // @ts-ignore
            public toString(): string
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #setHours
             */
            // @ts-ignore
            public getHours(): number /*int*/
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #setMinutes
             */
            // @ts-ignore
            public getMinutes(): number /*int*/
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #setSeconds
             */
            // @ts-ignore
            public getSeconds(): number /*int*/
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #getHours
             */
            // @ts-ignore
            public setHours(i: number /*int*/): void
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #getMinutes
             */
            // @ts-ignore
            public setMinutes(i: number /*int*/): void
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             * @deprecated 
             * @exception java.lang.IllegalArgumentException if this method is invoked
             * @see #getSeconds
             */
            // @ts-ignore
            public setSeconds(i: number /*int*/): void
            /**
             * Obtains an instance of {@code Date} from a {@link LocalDate} object
             * with the same year, month and day of month value as the given
             * {@code LocalDate}.
             * <p>
             * The provided {@code LocalDate} is interpreted as the local date
             * in the local time zone.
             * @param date a {#code LocalDate} to convert
             * @return a {#code Date} object
             * @exception NullPointerException if {#code date} is null
             * @since 1.8
             */
            // @ts-ignore
            public static valueOf(date: java.time.LocalDate): java.sql.Date
            /**
             * Converts this {@code Date} object to a {@code LocalDate}
             * <p>
             * The conversion creates a {@code LocalDate} that represents the same
             * date value as this {@code Date} in local time zone
             * @return a {#code LocalDate} object representing the same date value
             * @since 1.8
             */
            // @ts-ignore
            public toLocalDate(): java.time.LocalDate
            /**
             * This method always throws an UnsupportedOperationException and should
             * not be used because SQL {@code Date} values do not have a time
             * component.
             * @exception java.lang.UnsupportedOperationException if this method is invoked
             */
            // @ts-ignore
            public toInstant(): java.time.Instant
        }
    }
}
