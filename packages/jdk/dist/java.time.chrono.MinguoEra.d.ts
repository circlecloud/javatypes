declare namespace java {
    namespace time {
        namespace chrono {
            /**
             * An era in the Minguo calendar system.
             * <p>
             * The Minguo calendar system has two eras.
             * The current era, for years from 1 onwards, is known as the 'Republic of China' era.
             * All previous years, zero or earlier in the proleptic count or one and greater
             * in the year-of-era count, are part of the 'Before Republic of China' era.
             * <table summary="Minguo years and eras" cellpadding="2" cellspacing="3" border="0" >
             * <thead>
             * <tr class="tableSubHeadingColor">
             * <th class="colFirst" align="left">year-of-era</th>
             * <th class="colFirst" align="left">era</th>
             * <th class="colFirst" align="left">proleptic-year</th>
             * <th class="colLast" align="left">ISO proleptic-year</th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr class="rowColor">
             * <td>2</td><td>ROC</td><td>2</td><td>1913</td>
             * </tr>
             * <tr class="altColor">
             * <td>1</td><td>ROC</td><td>1</td><td>1912</td>
             * </tr>
             * <tr class="rowColor">
             * <td>1</td><td>BEFORE_ROC</td><td>0</td><td>1911</td>
             * </tr>
             * <tr class="altColor">
             * <td>2</td><td>BEFORE_ROC</td><td>-1</td><td>1910</td>
             * </tr>
             * </tbody>
             * </table>
             * <p>
             * <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code MinguoEra}.
             * Use {@code getValue()} instead.</b>
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class MinguoEra extends java.lang.Enum<java.time.chrono.MinguoEra> implements java.time.chrono.Era {
                /**
                 * The singleton instance for the era before the current one, 'Before Republic of China Era',
                 * which has the numeric value 0.
                 */
                // @ts-ignore
                public static readonly BEFORE_ROC: java.time.chrono.MinguoEra
                /**
                 * The singleton instance for the current era, 'Republic of China Era',
                 * which has the numeric value 1.
                 */
                // @ts-ignore
                public static readonly ROC: java.time.chrono.MinguoEra
                // @ts-ignore
                public static values(): java.time.chrono.MinguoEra[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.time.chrono.MinguoEra
                /**
                 * Obtains an instance of {@code MinguoEra} from an {@code int} value.
                 * <p>
                 * {@code MinguoEra} is an enum representing the Minguo eras of BEFORE_ROC/ROC.
                 * This factory allows the enum to be obtained from the {@code int} value.
                 * @param minguoEra  the BEFORE_ROC/ROC value to represent, from 0 (BEFORE_ROC) to 1 (ROC)
                 * @return the era singleton, not null
                 * @throws DateTimeException if the value is invalid
                 */
                // @ts-ignore
                public static of(minguoEra: number /*int*/): java.time.chrono.MinguoEra
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era BEFORE_ROC has the value 0, while the era ROC has the value 1.
                 * @return the era value, from 0 (BEFORE_ROC) to 1 (ROC)
                 */
                // @ts-ignore
                public getValue(): number /*int*/
            }
        }
    }
}
