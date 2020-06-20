declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Meow.
             */
            // @ts-ignore
            interface Cat extends org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Gets the current type of this cat.
                 * @return Type of the cat.
                 */
                // @ts-ignore
                getCatType(): org.bukkit.entity.Cat.Type
                /**
                 * Sets the current type of this cat.
                 * @param type New type of this cat.
                 */
                // @ts-ignore
                setCatType(type: org.bukkit.entity.Cat.Type): void
                /**
                 * Get the collar color of this cat
                 * @return the color of the collar
                 */
                // @ts-ignore
                getCollarColor(): org.bukkit.DyeColor
                /**
                 * Set the collar color of this cat
                 * @param color the color to apply
                 */
                // @ts-ignore
                setCollarColor(color: org.bukkit.DyeColor): void
            }
        }
    }
}
