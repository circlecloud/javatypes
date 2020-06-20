declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of long grasses.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class LongGrass extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(species: org.bukkit.GrassSpecies)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Gets the current species of this grass
                 * @return GrassSpecies of this grass
                 */
                // @ts-ignore
                getSpecies(): org.bukkit.GrassSpecies
                /**
                 * Sets the species of this grass
                 * @param species New species of this grass
                 */
                // @ts-ignore
                setSpecies(species: org.bukkit.GrassSpecies): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.LongGrass
            }
        }
    }
}
