declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Horse.
             */
            // @ts-ignore
            interface Horse extends org.bukkit.entity.AbstractHorse {
                /**
                 * Gets the horse's color.
                 * <p>
                 * Colors only apply to horses, not to donkeys, mules, skeleton horses
                 * or undead horses.
                 * @return a {#link Color} representing the horse's group
                 */
                // @ts-ignore
                getColor(): org.bukkit.entity.Horse.Color
                /**
                 * Sets the horse's color.
                 * <p>
                 * Attempting to set a color for any donkey, mule, skeleton horse or
                 * undead horse will not result in a change.
                 * @param color a {#link Color} for this horse
                 */
                // @ts-ignore
                setColor(color: org.bukkit.entity.Horse.Color): void
                /**
                 * Gets the horse's style.
                 * Styles determine what kind of markings or patterns a horse has.
                 * <p>
                 * Styles only apply to horses, not to donkeys, mules, skeleton horses
                 * or undead horses.
                 * @return a {#link Style} representing the horse's style
                 */
                // @ts-ignore
                getStyle(): org.bukkit.entity.Horse.Style
                /**
                 * Sets the style of this horse.
                 * Styles determine what kind of markings or patterns a horse has.
                 * <p>
                 * Attempting to set a style for any donkey, mule, skeleton horse or
                 * undead horse will not result in a change.
                 * @param style a {#link Style} for this horse
                 */
                // @ts-ignore
                setStyle(style: org.bukkit.entity.Horse.Style): void
                /**
                 * @return carrying chest status
                 * @deprecated see {#link ChestedHorse}
                 */
                // @ts-ignore
                isCarryingChest(): boolean
                /**
                 * @param chest chest
                 * @deprecated see {#link ChestedHorse}
                 */
                // @ts-ignore
                setCarryingChest(chest: boolean): void
                // @ts-ignore
                getInventory(): org.bukkit.inventory.HorseInventory
            }
        }
    }
}
