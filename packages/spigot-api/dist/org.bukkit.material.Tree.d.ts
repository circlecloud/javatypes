declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of Tree block that face a direction.
             * @see Material#LEGACY_LOG
             * @see Material#LEGACY_LOG_2
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Tree extends org.bukkit.material.Wood {
                /**
                 * Constructs a tree block.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a tree block of the given tree species.
                 * @param species the species of the tree block
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given tree species, and facing the given
                 * direction.
                 * @param species the species of the tree block
                 * @param dir the direction the tree block is facing
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
                /**
                 * Constructs a tree block of the given type.
                 * @param type the type of tree block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a tree block of the given type and tree species.
                 * @param type the type of tree block
                 * @param species the species of the tree block
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies)
                /**
                 * Constructs a tree block of the given type and tree species, and facing
                 * the given direction.
                 * @param type the type of tree block
                 * @param species the species of the tree block
                 * @param dir the direction the tree block is facing
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, species: org.bukkit.TreeSpecies, dir: org.bukkit.block.BlockFace)
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
                readonly DEFAULT_DIRECTION: org.bukkit.block.BlockFace
                /**
                 * Get direction of the log
                 * @return one of:
                 *  <ul>
                 *  <li>BlockFace.TOP for upright (default)
                 *  <li>BlockFace.NORTH (east-west)
                 *  <li>BlockFace.WEST (north-south)
                 *  <li>BlockFace.SELF (directionless)
                 *  </ul>
                 */
                // @ts-ignore
                getDirection(): org.bukkit.block.BlockFace
                /**
                 * Set direction of the log
                 * @param dir - direction of end of log (BlockFace.SELF for no direction)
                 */
                // @ts-ignore
                setDirection(dir: org.bukkit.block.BlockFace): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Tree
            }
        }
    }
}
