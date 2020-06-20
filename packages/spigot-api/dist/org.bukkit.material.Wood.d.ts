declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents wood blocks of different species.
             * @see Material#LEGACY_WOOD
             * @see Material#LEGACY_SAPLING
             * @see Material#LEGACY_WOOD_DOUBLE_STEP
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Wood extends org.bukkit.material.MaterialData {
                /**
                 * Constructs a wood block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a wood block of the given tree species.
                 * @param species the species of the wood block
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a wood block of the given type.
                 * @param type the type of wood block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a wood block of the given type and tree species.
                 * @param type the type of wood block
                 * @param species the species of the wood block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                readonly DEFAULT_TYPE: org.bukkit.Material
                // @ts-ignore
                readonly DEFAULT_SPECIES: org.bukkit.TreeSpecies
                /**
                 * Gets the current species of this wood block
                 * @return TreeSpecies of this wood block
                 */
                // @ts-ignore
                getSpecies(): org.bukkit.TreeSpecies
                /**
                 * Sets the species of this wood block
                 * @param species New species of this wood block
                 */
                // @ts-ignore
                setSpecies(species: org.bukkit.TreeSpecies): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Wood
            }
        }
    }
}
