declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents leather armor ({@link Material#LEATHER_BOOTS}, {@link
                 * Material#LEATHER_CHESTPLATE}, {@link Material#LEATHER_HELMET}, or {@link
                 * Material#LEATHER_LEGGINGS}) that can be colored.
                 */
                // @ts-ignore
                interface LeatherArmorMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the color of the armor. If it has not been set otherwise, it will
                     * be {@link ItemFactory#getDefaultLeatherColor()}.
                     * @return the color of the armor, never null
                     */
                    // @ts-ignore
                    getColor(): org.bukkit.Color
                    /**
                     * Sets the color of the armor.
                     * @param color the color to set. Setting it to null is equivalent to
                     *      setting it to {#link ItemFactory#getDefaultLeatherColor()}.
                     */
                    // @ts-ignore
                    setColor(color: org.bukkit.Color): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.LeatherArmorMeta
                }
            }
        }
    }
}
