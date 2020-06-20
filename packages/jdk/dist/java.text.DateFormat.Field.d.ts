declare namespace java {
    namespace text {
        namespace DateFormat {
            /**
             * Defines constants that are used as attribute keys in the
             * <code>AttributedCharacterIterator</code> returned
             * from <code>DateFormat.formatToCharacterIterator</code> and as
             * field identifiers in <code>FieldPosition</code>.
             * <p>
             * The class also provides two methods to map
             * between its constants and the corresponding Calendar constants.
             * @since 1.4
             * @see java.util.Calendar
             */
            // @ts-ignore
            class Field extends java.text.Format.Field {
                /**
                 * Creates a <code>Field</code>.
                 * @param name the name of the <code>Field</code>
                 * @param calendarField the <code>Calendar</code> constant this
                 *         <code>Field</code> corresponds to; any value, even one
                 *         outside the range of legal <code>Calendar</code> values may
                 *         be used, but <code>-1</code> should be used for values
                 *         that don't correspond to legal <code>Calendar</code> values
                 */
                // @ts-ignore
                constructor(name: string, calendarField: number /*int*/)
                /**
                 * Constant identifying the era field.
                 */
                // @ts-ignore
                readonly ERA: java.text.DateFormat.Field
                /**
                 * Constant identifying the year field.
                 */
                // @ts-ignore
                readonly YEAR: java.text.DateFormat.Field
                /**
                 * Constant identifying the month field.
                 */
                // @ts-ignore
                readonly MONTH: java.text.DateFormat.Field
                /**
                 * Constant identifying the day of month field.
                 */
                // @ts-ignore
                readonly DAY_OF_MONTH: java.text.DateFormat.Field
                /**
                 * Constant identifying the hour of day field, where the legal values
                 * are 1 to 24.
                 */
                // @ts-ignore
                readonly HOUR_OF_DAY1: java.text.DateFormat.Field
                /**
                 * Constant identifying the hour of day field, where the legal values
                 * are 0 to 23.
                 */
                // @ts-ignore
                readonly HOUR_OF_DAY0: java.text.DateFormat.Field
                /**
                 * Constant identifying the minute field.
                 */
                // @ts-ignore
                readonly MINUTE: java.text.DateFormat.Field
                /**
                 * Constant identifying the second field.
                 */
                // @ts-ignore
                readonly SECOND: java.text.DateFormat.Field
                /**
                 * Constant identifying the millisecond field.
                 */
                // @ts-ignore
                readonly MILLISECOND: java.text.DateFormat.Field
                /**
                 * Constant identifying the day of week field.
                 */
                // @ts-ignore
                readonly DAY_OF_WEEK: java.text.DateFormat.Field
                /**
                 * Constant identifying the day of year field.
                 */
                // @ts-ignore
                readonly DAY_OF_YEAR: java.text.DateFormat.Field
                /**
                 * Constant identifying the day of week field.
                 */
                // @ts-ignore
                readonly DAY_OF_WEEK_IN_MONTH: java.text.DateFormat.Field
                /**
                 * Constant identifying the week of year field.
                 */
                // @ts-ignore
                readonly WEEK_OF_YEAR: java.text.DateFormat.Field
                /**
                 * Constant identifying the week of month field.
                 */
                // @ts-ignore
                readonly WEEK_OF_MONTH: java.text.DateFormat.Field
                /**
                 * Constant identifying the time of day indicator
                 * (e.g. "a.m." or "p.m.") field.
                 */
                // @ts-ignore
                readonly AM_PM: java.text.DateFormat.Field
                /**
                 * Constant identifying the hour field, where the legal values are
                 * 1 to 12.
                 */
                // @ts-ignore
                readonly HOUR1: java.text.DateFormat.Field
                /**
                 * Constant identifying the hour field, where the legal values are
                 * 0 to 11.
                 */
                // @ts-ignore
                readonly HOUR0: java.text.DateFormat.Field
                /**
                 * Constant identifying the time zone field.
                 */
                // @ts-ignore
                readonly TIME_ZONE: java.text.DateFormat.Field
                /**
                 * Returns the <code>Field</code> constant that corresponds to
                 * the <code>Calendar</code> constant <code>calendarField</code>.
                 * If there is no direct mapping between the <code>Calendar</code>
                 * constant and a <code>Field</code>, null is returned.
                 * @throws IllegalArgumentException if <code>calendarField</code> is
                 *          not the value of a <code>Calendar</code> field constant.
                 * @param calendarField Calendar field constant
                 * @return Field instance representing calendarField.
                 * @see java.util.Calendar
                 */
                // @ts-ignore
                ofCalendarField(calendarField: number /*int*/): java.text.DateFormat.Field
                /**
                 * Returns the <code>Calendar</code> field associated with this
                 * attribute. For example, if this represents the hours field of
                 * a <code>Calendar</code>, this would return
                 * <code>Calendar.HOUR</code>. If there is no corresponding
                 * <code>Calendar</code> constant, this will return -1.
                 * @return Calendar constant for this field
                 * @see java.util.Calendar
                 */
                // @ts-ignore
                getCalendarField(): int
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 * @throws InvalidObjectException if the constant could not be
                 *          resolved.
                 * @return resolved DateFormat.Field constant
                 */
                // @ts-ignore
                readResolve(): java.lang.Object
            }
        }
    }
}
