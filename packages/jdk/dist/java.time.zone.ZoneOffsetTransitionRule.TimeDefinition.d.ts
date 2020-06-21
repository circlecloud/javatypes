declare namespace java {
    namespace time {
        namespace zone {
            namespace ZoneOffsetTransitionRule {
                /**
                 * A definition of the way a local time can be converted to the actual
                 * transition date-time.
                 * <p>
                 * Time zone rules are expressed in one of three ways:
                 * <ul>
                 * <li>Relative to UTC</li>
                 * <li>Relative to the standard offset in force</li>
                 * <li>Relative to the wall offset (what you would see on a clock on the wall)</li>
                 * </ul>
                 */
                // @ts-ignore
                class TimeDefinition extends java.lang.Enum<java.time.zone.ZoneOffsetTransitionRule.TimeDefinition> {
                    /**
                     * The local date-time is expressed in terms of the UTC offset.
                     */
                    // @ts-ignore
                    readonly UTC: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition
                    /**
                     * The local date-time is expressed in terms of the wall offset.
                     */
                    // @ts-ignore
                    readonly WALL: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition
                    /**
                     * The local date-time is expressed in terms of the standard offset.
                     */
                    // @ts-ignore
                    readonly STANDARD: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition
                    // @ts-ignore
                    values(): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition
                    /**
                     * Converts the specified local date-time to the local date-time actually
                     * seen on a wall clock.
                     * <p>
                     * This method converts using the type of this enum.
                     * The output is defined relative to the 'before' offset of the transition.
                     * <p>
                     * The UTC type uses the UTC offset.
                     * The STANDARD type uses the standard offset.
                     * The WALL type returns the input date-time.
                     * The result is intended for use with the wall-offset.
                     * @param dateTime  the local date-time, not null
                     * @param standardOffset  the standard offset, not null
                     * @param wallOffset  the wall offset, not null
                     * @return the date-time relative to the wall/before offset, not null
                     */
                    // @ts-ignore
                    createDateTime(dateTime: java.time.LocalDateTime, standardOffset: java.time.ZoneOffset, wallOffset: java.time.ZoneOffset): java.time.LocalDateTime
                }
            }
        }
    }
}
