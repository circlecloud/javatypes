declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace ArmorStand {
                /**
                 * Represents types of locking mechanisms for ArmorStand equipment.
                 */
                // @ts-ignore
                class LockType extends java.lang.Enum<org.bukkit.entity.ArmorStand.LockType> {
                    /**
                     * Prevents adding or changing the respective equipment - players cannot
                     * replace the empty slot with a new item or swap the items between
                     * themselves and the ArmorStand.
                     */
                    // @ts-ignore
                    public static readonly ADDING_OR_CHANGING: org.bukkit.entity.ArmorStand.LockType
                    /**
                     * Prevents removing or changing the respective equipment - players
                     * cannot take an item from the slot or swap the items between
                     * themselves and the ArmorStand.
                     */
                    // @ts-ignore
                    public static readonly REMOVING_OR_CHANGING: org.bukkit.entity.ArmorStand.LockType
                    /**
                     * Prevents adding the respective equipment - players cannot replace the
                     * empty slot with a new item, but can swap items between themselves and
                     * the ArmorStand.
                     */
                    // @ts-ignore
                    public static readonly ADDING: org.bukkit.entity.ArmorStand.LockType
                    // @ts-ignore
                    public static values(): org.bukkit.entity.ArmorStand.LockType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.entity.ArmorStand.LockType
                }
            }
        }
    }
}
