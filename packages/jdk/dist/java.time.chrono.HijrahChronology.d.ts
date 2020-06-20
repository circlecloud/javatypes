declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * The Hijrah calendar is a lunar calendar supporting Islamic calendars.
             * <p>
             * The HijrahChronology follows the rules of the Hijrah calendar system. The Hijrah
             * calendar has several variants based on differences in when the new moon is
             * determined to have occurred and where the observation is made.
             * In some variants the length of each month is
             * computed algorithmically from the astronomical data for the moon and earth and
             * in others the length of the month is determined by an authorized sighting
             * of the new moon. For the algorithmically based calendars the calendar
             * can project into the future.
             * For sighting based calendars only historical data from past
             * sightings is available.
             * <p>
             * The length of each month is 29 or 30 days.
             * Ordinary years have 354 days; leap years have 355 days.
             * <p>
             * CLDR and LDML identify variants:
             * <table cellpadding="2" summary="Variants of Hijrah Calendars">
             * <thead>
             * <tr class="tableSubHeadingColor">
             * <th class="colFirst" align="left" >Chronology ID</th>
             * <th class="colFirst" align="left" >Calendar Type</th>
             * <th class="colFirst" align="left" >Locale extension, see {@link java.util.Locale}</th>
             * <th class="colLast" align="left" >Description</th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr class="altColor">
             * <td>Hijrah-umalqura</td>
             * <td>islamic-umalqura</td>
             * <td>ca-islamic-umalqura</td>
             * <td>Islamic - Umm Al-Qura calendar of Saudi Arabia</td>
             * </tr>
             * </tbody>
             * </table>
             * <p>Additional variants may be available through {@link Chronology#getAvailableChronologies()}.
             * <p>Example</p>
             * <p>
             * Selecting the chronology from the locale uses {@link Chronology#ofLocale}
             * to find the Chronology based on Locale supported BCP 47 extension mechanism
             * to request a specific calendar ("ca"). For example,
             * </p>
             * <pre>
             * Locale locale = Locale.forLanguageTag("en-US-u-ca-islamic-umalqura");
             * Chronology chrono = Chronology.ofLocale(locale);
             * </pre>
             * @implSpec This class is immutable and thread-safe.
             * @implNote Each Hijrah variant is configured individually. Each variant is defined by a
             *  property resource that defines the {#code ID}, the {@code calendar type},
             *  the start of the calendar, the alignment with the
             *  ISO calendar, and the length of each month for a range of years.
             *  The variants are identified in the {@code calendars.properties} file.
             *  The new properties are prefixed with {@code "calendars.hijrah."}:
             *  <table cellpadding="2" border="0" summary="Configuration of Hijrah Calendar Variants">
             *  <thead>
             *  <tr class="tableSubHeadingColor">
             *  <th class="colFirst" align="left">Property Name</th>
             *  <th class="colFirst" align="left">Property value</th>
             *  <th class="colLast" align="left">Description </th>
             *  </tr>
             *  </thead>
             *  <tbody>
             *  <tr class="altColor">
             *  <td>calendars.hijrah.{ID}</td>
             *  <td>The property resource defining the {@code {ID}} variant</td>
             *  <td>The property resource is located with the {@code calendars.properties} file</td>
             *  </tr>
             *  <tr class="rowColor">
             *  <td>calendars.hijrah.{ID}.type</td>
             *  <td>The calendar type</td>
             *  <td>LDML defines the calendar type names</td>
             *  </tr>
             *  </tbody>
             *  </table>
             *  <p>
             *  The Hijrah property resource is a set of properties that describe the calendar.
             *  The syntax is defined by {@code java.util.Properties#load(Reader)}.
             *  <table cellpadding="2" summary="Configuration of Hijrah Calendar">
             *  <thead>
             *  <tr class="tableSubHeadingColor">
             *  <th class="colFirst" align="left" > Property Name</th>
             *  <th class="colFirst" align="left" > Property value</th>
             *  <th class="colLast" align="left" > Description </th>
             *  </tr>
             *  </thead>
             *  <tbody>
             *  <tr class="altColor">
             *  <td>id</td>
             *  <td>Chronology Id, for example, "Hijrah-umalqura"</td>
             *  <td>The Id of the calendar in common usage</td>
             *  </tr>
             *  <tr class="rowColor">
             *  <td>type</td>
             *  <td>Calendar type, for example, "islamic-umalqura"</td>
             *  <td>LDML defines the calendar types</td>
             *  </tr>
             *  <tr class="altColor">
             *  <td>version</td>
             *  <td>Version, for example: "1.8.0_1"</td>
             *  <td>The version of the Hijrah variant data</td>
             *  </tr>
             *  <tr class="rowColor">
             *  <td>iso-start</td>
             *  <td>ISO start date, formatted as {@code yyyy-MM-dd}, for example: "1900-04-30"</td>
             *  <td>The ISO date of the first day of the minimum Hijrah year.</td>
             *  </tr>
             *  <tr class="altColor">
             *  <td>yyyy - a numeric 4 digit year, for example "1434"</td>
             *  <td>The value is a sequence of 12 month lengths,
             *  for example: "29 30 29 30 29 30 30 30 29 30 29 29"</td>
             *  <td>The lengths of the 12 months of the year separated by whitespace.
             *  A numeric year property must be present for every year without any gaps.
             *  The month lengths must be between 29-32 inclusive.
             *  </td>
             *  </tr>
             *  </tbody>
             *  </table>
             * @since 1.8
             */
            // @ts-ignore
            class HijrahChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
                /**
                 * Singleton instance of the Islamic Umm Al-Qura calendar of Saudi Arabia.
                 * Other Hijrah chronology variants may be available from
                 * {@link Chronology#getAvailableChronologies}.
                 */
                // @ts-ignore
                readonly INSTANCE: java.time.chrono.HijrahChronology
                /**
                 * Gets the ID of the chronology.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}. It can be used to
                 * lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * @return the chronology ID, non-null
                 * @see #getCalendarType()
                 */
                // @ts-ignore
                getId(): java.lang.String
                /**
                 * Gets the calendar type of the Islamic calendar.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * @return the calendar system type; non-null if the calendar has
                 *     a standard type, otherwise null
                 * @see #getId()
                 */
                // @ts-ignore
                getCalendarType(): java.lang.String
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 * @param era  the Hijrah era, not null
                 * @param yearOfEra  the year-of-era
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Hijrah local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code HijrahEra}
                 */
                // @ts-ignore
                date(era: java.time.chrono.Era, yearOfEra: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.HijrahDate
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 * @param prolepticYear  the proleptic-year
                 * @param month  the month-of-year
                 * @param dayOfMonth  the day-of-month
                 * @return the Hijrah local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                date(prolepticYear: number /*int*/, month: number /*int*/, dayOfMonth: number /*int*/): java.time.chrono.HijrahDate
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * era, year-of-era and day-of-year fields.
                 * @param era  the Hijrah era, not null
                 * @param yearOfEra  the year-of-era
                 * @param dayOfYear  the day-of-year
                 * @return the Hijrah local date, not null
                 * @throws DateTimeException if unable to create the date
                 * @throws ClassCastException if the {#code era} is not a {@code HijrahEra}
                 */
                // @ts-ignore
                dateYearDay(era: java.time.chrono.Era, yearOfEra: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.HijrahDate
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * proleptic-year and day-of-year fields.
                 * @param prolepticYear  the proleptic-year
                 * @param dayOfYear  the day-of-year
                 * @return the Hijrah local date, not null
                 * @throws DateTimeException if the value of the year is out of range,
                 *   or if the day-of-year is invalid for the year
                 */
                // @ts-ignore
                dateYearDay(prolepticYear: number /*int*/, dayOfYear: number /*int*/): java.time.chrono.HijrahDate
                /**
                 * Obtains a local date in the Hijrah calendar system from the epoch-day.
                 * @param epochDay  the epoch day
                 * @return the Hijrah local date, not null
                 * @throws DateTimeException if unable to create the date
                 */
                // @ts-ignore
                dateEpochDay(epochDay: number /*long*/): java.time.chrono.HijrahDate
                // @ts-ignore
                dateNow(): java.time.chrono.HijrahDate
                // @ts-ignore
                dateNow(zone: java.time.ZoneId): java.time.chrono.HijrahDate
                // @ts-ignore
                dateNow(clock: java.time.Clock): java.time.chrono.HijrahDate
                // @ts-ignore
                date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate
                // @ts-ignore
                localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate>
                // @ts-ignore
                zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate>
                // @ts-ignore
                zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate>
                // @ts-ignore
                isLeapYear(prolepticYear: number /*long*/): boolean
                // @ts-ignore
                prolepticYear(era: java.time.chrono.Era, yearOfEra: number /*int*/): int
                // @ts-ignore
                eraOf(eraValue: number /*int*/): java.time.chrono.HijrahEra
                // @ts-ignore
                eras(): java.util.List<java.time.chrono.Era>
                // @ts-ignore
                range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange
                // @ts-ignore
                resolveDate(fieldValues: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.HijrahDate
            }
        }
    }
}
