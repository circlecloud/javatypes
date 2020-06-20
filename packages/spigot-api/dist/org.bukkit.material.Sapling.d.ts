declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of Tree block that face a direction.
             * @see Material#LEGACY_SAPLING
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Sapling extends org.bukkit.material.Wood {
                /**
                 * Constructs a sapling.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a sapling of the given tree species.
                 * @param species the species of the sapling
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given tree species and if is it instant
                 * growable
                 * @param species the species of the tree block
                 * @param isInstantGrowable true if the Sapling should grow when next ticked with bonemeal
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                /**
                 * Constructs a sapling of the given type.
                 * @param type the type of tree block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a sapling of the given type and tree species.
                 * @param type the type of sapling
                 * @param species the species of the sapling
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a sapling of the given type and tree species and if is it
                 * instant growable
                 * @param type the type of sapling
                 * @param species the species of the sapling
                 * @param isInstantGrowable true if the Sapling should grow when next ticked
                 *  with bonemeal
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, isInstantGrowable: boolean)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Checks if the Sapling would grow when next ticked with bonemeal
                 * @return true if the Sapling would grow when next ticked with bonemeal
                 */
                // @ts-ignore
                isInstantGrowable(): boolean
                /**
                 * Set whether this sapling will grow when next ticked with bonemeal
                 * @param isInstantGrowable true if the Sapling should grow when next ticked
                 *  with bonemeal
                 */
                // @ts-ignore
                setIsInstantGrowable(isInstantGrowable: boolean): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Sapling
            }
        }
    }
}
