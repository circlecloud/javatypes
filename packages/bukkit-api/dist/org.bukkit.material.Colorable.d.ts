declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * An object that can be colored.
             */
            // @ts-ignore
            interface Colorable {
                /**
                 * Gets the color of this object.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 * @return The DyeColor of this object.
                 */
                // @ts-ignore
                getColor(): org.bukkit.DyeColor
                /**
                 * Sets the color of this object to the specified DyeColor.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 * @param color The color of the object, as a DyeColor.
                 * @throws NullPointerException if argument is null and this implementation does not support null
                 */
                // @ts-ignore
                setColor(color: org.bukkit.DyeColor): void
            }
        }
    }
}
