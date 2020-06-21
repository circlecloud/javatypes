declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * A ItemFlag can hide some Attributes from ItemStacks
             */
            // @ts-ignore
            class ItemFlag extends java.lang.Enum<org.bukkit.inventory.ItemFlag> {
                /**
                 * Setting to show/hide enchants
                 */
                // @ts-ignore
                readonly HIDE_ENCHANTS: org.bukkit.inventory.ItemFlag
                /**
                 * Setting to show/hide Attributes like Damage
                 */
                // @ts-ignore
                readonly HIDE_ATTRIBUTES: org.bukkit.inventory.ItemFlag
                /**
                 * Setting to show/hide the unbreakable State
                 */
                // @ts-ignore
                readonly HIDE_UNBREAKABLE: org.bukkit.inventory.ItemFlag
                /**
                 * Setting to show/hide what the ItemStack can break/destroy
                 */
                // @ts-ignore
                readonly HIDE_DESTROYS: org.bukkit.inventory.ItemFlag
                /**
                 * Setting to show/hide where this ItemStack can be build/placed on
                 */
                // @ts-ignore
                readonly HIDE_PLACED_ON: org.bukkit.inventory.ItemFlag
                /**
                 * Setting to show/hide potion effects on this ItemStack
                 */
                // @ts-ignore
                readonly HIDE_POTION_EFFECTS: org.bukkit.inventory.ItemFlag
                // @ts-ignore
                values(): org.bukkit.inventory.ItemFlag[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.inventory.ItemFlag
            }
        }
    }
}
