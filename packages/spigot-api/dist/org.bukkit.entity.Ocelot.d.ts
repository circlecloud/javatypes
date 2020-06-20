declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * A wild tameable cat
             */
            // @ts-ignore
            interface Ocelot extends org.bukkit.entity.Animals {
                /**
                 * Gets the current type of this cat.
                 * @return Type of the cat.
                 */
                // @ts-ignore
                getCatType(): org.bukkit.entity.Ocelot.Type
                /**
                 * Sets the current type of this cat.
                 * @param type New type of this cat.
                 */
                // @ts-ignore
                setCatType(type: org.bukkit.entity.Ocelot.Type): void
            }
        }
    }
}
