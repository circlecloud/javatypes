declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * An era in the ISO calendar system.
             * <p>
             * The ISO-8601 standard does not define eras.
             * A definition has therefore been created with two eras - 'Current era' (CE) for
             * years on or after 0001-01-01 (ISO), and 'Before current era' (BCE) for years before that.
             * <table summary="ISO years and eras" cellpadding="2" cellspacing="3" border="0" >
             * <thead>
             * <tr class="tableSubHeadingColor">
             * <th class="colFirst" align="left">year-of-era</th>
             * <th class="colFirst" align="left">era</th>
             * <th class="colLast" align="left">proleptic-year</th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr class="rowColor">
             * <td>2</td><td>CE</td><td>2</td>
             * </tr>
             * <tr class="altColor">
             * <td>1</td><td>CE</td><td>1</td>
             * </tr>
             * <tr class="rowColor">
             * <td>1</td><td>BCE</td><td>0</td>
             * </tr>
             * <tr class="altColor">
             * <td>2</td><td>BCE</td><td>-1</td>
             * </tr>
             * </tbody>
             * </table>
             * <p>
             * <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code IsoEra}.
             * Use {@code getValue()} instead.</b>
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class IsoEra extends java.lang.Enum<java.time.chrono.IsoEra> implements java.time.chrono.Era {
                /**
                 * The singleton instance for the era before the current one, 'Before Current Era',
                 * which has the numeric value 0.
                 */
                // @ts-ignore
                public static readonly BCE: java.time.chrono.IsoEra
                /**
                 * The singleton instance for the current era, 'Current Era',
                 * which has the numeric value 1.
                 */
                // @ts-ignore
                public static readonly CE: java.time.chrono.IsoEra
                // @ts-ignore
                public static values(): java.time.chrono.IsoEra[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.time.chrono.IsoEra
                /**
                 * Obtains an instance of {@code IsoEra} from an {@code int} value.
                 * <p>
                 * {@code IsoEra} is an enum representing the ISO eras of BCE/CE.
                 * This factory allows the enum to be obtained from the {@code int} value.
                 * @param isoEra  the BCE/CE value to represent, from 0 (BCE) to 1 (CE)
                 * @return the era singleton, not null
                 * @throws DateTimeException if the value is invalid
                 */
                // @ts-ignore
                public static of(isoEra: number /*int*/): java.time.chrono.IsoEra
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era BCE has the value 0, while the era CE has the value 1.
                 * @return the era value, from 0 (BCE) to 1 (CE)
                 */
                // @ts-ignore
                public getValue(): number /*int*/
            }
        }
    }
}
