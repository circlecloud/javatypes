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
                    readonly DISALLOWED: org.bukkit.entity.AbstractArrow.PickupStatus
                    /**
                     * The arrow can be picked up.
                     */
                    // @ts-ignore
                    readonly ALLOWED: org.bukkit.entity.AbstractArrow.PickupStatus
                    /**
                     * The arrow can only be picked up by players in creative mode.
                     */
                    // @ts-ignore
                    readonly CREATIVE_ONLY: org.bukkit.entity.AbstractArrow.PickupStatus
                    // @ts-ignore
                    values(): org.bukkit.entity.AbstractArrow.PickupStatus[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.entity.AbstractArrow.PickupStatus
                }
            }
        }
    }
}
