declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Ocelot {
                /**
                 * Represents the various different cat types there are.
                 * @deprecated Cats are now a separate entity.
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<org.bukkit.entity.Ocelot.Type> {
                    // @ts-ignore
                    values(): org.bukkit.entity.Ocelot.Type[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.entity.Ocelot.Type
                    /**
                     * Gets the ID of this cat type.
                     * @return Type ID.
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getId(): int
                    /**
                     * Gets a cat type by its ID.
                     * @param id ID of the cat type to get.
                     * @return Resulting type, or null if not found.
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getType(id: number /*int*/): org.bukkit.entity.Ocelot.Type
                }
            }
        }
    }
}
