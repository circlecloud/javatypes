declare namespace java {
    namespace time {
        namespace temporal {
            /**
             * The range of valid values for a date-time field.
             * <p>
             * All {@link TemporalField} instances have a valid range of values.
             * For example, the ISO day-of-month runs from 1 to somewhere between 28 and 31.
             * This class captures that valid range.
             * <p>
             * It is important to be aware of the limitations of this class.
             * Only the minimum and maximum values are provided.
             * It is possible for there to be invalid values within the outer range.
             * For example, a weird field may have valid values of 1, 2, 4, 6, 7, thus
             * have a range of '1 - 7', despite that fact that values 3 and 5 are invalid.
             * <p>
             * Instances of this class are not tied to a specific field.
             * @implSpec This class is immutable and thread-safe.
             * @since 1.8
             */
            // @ts-ignore
            class ValueRange extends java.lang.Object implements java.io.Serializable {
                /**
                 * Obtains a fixed value range.
                 * <p>
                 * This factory obtains a range where the minimum and maximum values are fixed.
                 * For example, the ISO month-of-year always runs from 1 to 12.
                 * @param min  the minimum value
                 * @param max  the maximum value
                 * @return the ValueRange for min, max, not null
                 * @throws IllegalArgumentException if the minimum is greater than the maximum
                 */
                // @ts-ignore
                public static of(min: number /*long*/, max: number /*long*/): java.time.temporal.ValueRange
                /**
                 * Obtains a variable value range.
                 * <p>
                 * This factory obtains a range where the minimum value is fixed and the maximum value may vary.
                 * For example, the ISO day-of-month always starts at 1, but ends between 28 and 31.
                 * @param min  the minimum value
                 * @param maxSmallest  the smallest maximum value
                 * @param maxLargest  the largest maximum value
                 * @return the ValueRange for min, smallest max, largest max, not null
                 * @throws IllegalArgumentException if
                 *      the minimum is greater than the smallest maximum,
                 *   or the smallest maximum is greater than the largest maximum
                 */
                // @ts-ignore
                public static of(min: number /*long*/, maxSmallest: number /*long*/, maxLargest: number /*long*/): java.time.temporal.ValueRange
                /**
                 * Obtains a fully variable value range.
                 * <p>
                 * This factory obtains a range where both the minimum and maximum value may vary.
                 * @param minSmallest  the smallest minimum value
                 * @param minLargest  the largest minimum value
                 * @param maxSmallest  the smallest maximum value
                 * @param maxLargest  the largest maximum value
                 * @return the ValueRange for smallest min, largest min, smallest max, largest max, not null
                 * @throws IllegalArgumentException if
                 *      the smallest minimum is greater than the smallest maximum,
                 *   or the smallest maximum is greater than the largest maximum
                 *   or the largest minimum is greater than the largest maximum
                 */
                // @ts-ignore
                public static of(minSmallest: number /*long*/, minLargest: number /*long*/, maxSmallest: number /*long*/, maxLargest: number /*long*/): java.time.temporal.ValueRange
                /**
                 * Is the value range fixed and fully known.
                 * <p>
                 * For example, the ISO day-of-month runs from 1 to between 28 and 31.
                 * Since there is uncertainty about the maximum value, the range is not fixed.
                 * However, for the month of January, the range is always 1 to 31, thus it is fixed.
                 * @return true if the set of values is fixed
                 */
                // @ts-ignore
                public isFixed(): boolean
                /**
                 * Gets the minimum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month always starts at 1.
                 * The minimum is therefore 1.
                 * @return the minimum value for this field
                 */
                // @ts-ignore
                public getMinimum(): number /*long*/
                /**
                 * Gets the largest possible minimum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month always starts at 1.
                 * The largest minimum is therefore 1.
                 * @return the largest possible minimum value for this field
                 */
                // @ts-ignore
                public getLargestMinimum(): number /*long*/
                /**
                 * Gets the smallest possible maximum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month runs to between 28 and 31 days.
                 * The smallest maximum is therefore 28.
                 * @return the smallest possible maximum value for this field
                 */
                // @ts-ignore
                public getSmallestMaximum(): number /*long*/
                /**
                 * Gets the maximum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month runs to between 28 and 31 days.
                 * The maximum is therefore 31.
                 * @return the maximum value for this field
                 */
                // @ts-ignore
                public getMaximum(): number /*long*/
                /**
                 * Checks if all values in the range fit in an {@code int}.
                 * <p>
                 * This checks that all valid values are within the bounds of an {@code int}.
                 * <p>
                 * For example, the ISO month-of-year has values from 1 to 12, which fits in an {@code int}.
                 * By comparison, ISO nano-of-day runs from 1 to 86,400,000,000,000 which does not fit in an {@code int}.
                 * <p>
                 * This implementation uses {@link #getMinimum()} and {@link #getMaximum()}.
                 * @return true if a valid value always fits in an {#code int}
                 */
                // @ts-ignore
                public isIntValue(): boolean
                /**
                 * Checks if the value is within the valid range.
                 * <p>
                 * This checks that the value is within the stored range of values.
                 * @param value  the value to check
                 * @return true if the value is valid
                 */
                // @ts-ignore
                public isValidValue(value: number /*long*/): boolean
                /**
                 * Checks if the value is within the valid range and that all values
                 * in the range fit in an {@code int}.
                 * <p>
                 * This method combines {@link #isIntValue()} and {@link #isValidValue(long)}.
                 * @param value  the value to check
                 * @return true if the value is valid and fits in an {#code int}
                 */
                // @ts-ignore
                public isValidIntValue(value: number /*long*/): boolean
                /**
                 * Checks that the specified value is valid.
                 * <p>
                 * This validates that the value is within the valid range of values.
                 * The field is only used to improve the error message.
                 * @param value  the value to check
                 * @param field  the field being checked, may be null
                 * @return the value that was passed in
                 * @see #isValidValue(long)
                 */
                // @ts-ignore
                public checkValidValue(value: number /*long*/, field: java.time.temporal.TemporalField): number /*long*/
                /**
                 * Checks that the specified value is valid and fits in an {@code int}.
                 * <p>
                 * This validates that the value is within the valid range of values and that
                 * all valid values are within the bounds of an {@code int}.
                 * The field is only used to improve the error message.
                 * @param value  the value to check
                 * @param field  the field being checked, may be null
                 * @return the value that was passed in
                 * @see #isValidIntValue(long)
                 */
                // @ts-ignore
                public checkValidIntValue(value: number /*long*/, field: java.time.temporal.TemporalField): number /*int*/
                /**
                 * Checks if this range is equal to another range.
                 * <p>
                 * The comparison is based on the four values, minimum, largest minimum,
                 * smallest maximum and maximum.
                 * Only objects of type {@code ValueRange} are compared, other types return false.
                 * @param obj  the object to check, null returns false
                 * @return true if this is equal to the other range
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * A hash code for this range.
                 * @return a suitable hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Outputs this range as a {@code String}.
                 * <p>
                 * The format will be '{min}/{largestMin} - {smallestMax}/{max}',
                 * where the largestMin or smallestMax sections may be omitted, together
                 * with associated slash, if they are the same as the min or max.
                 * @return a string representation of this range, not null
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
