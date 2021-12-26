declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace AbstractArrow {
                /**
                 * Represents the pickup status of this arrow.
                 */
                // @ts-ignore
                class PickupStatus extends java.lang.Enum<org.bukkit.entity.AbstractArrow.PickupStatus> {
                    /**
                     * The arrow cannot be picked up.
                     */
                    // @ts-ignore
                    public static readonly DISALLOWED: org.bukkit.entity.AbstractArrow.PickupStatus
                    /**
                     * The arrow can be picked up.
                     */
                    // @ts-ignore
                    public static readonly ALLOWED: org.bukkit.entity.AbstractArrow.PickupStatus
                    /**
                     * The arrow can only be picked up by players in creative mode.
                     */
                    // @ts-ignore
                    public static readonly CREATIVE_ONLY: org.bukkit.entity.AbstractArrow.PickupStatus
                    // @ts-ignore
                    public static values(): org.bukkit.entity.AbstractArrow.PickupStatus[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.entity.AbstractArrow.PickupStatus
                }
            }
        }
    }
}
