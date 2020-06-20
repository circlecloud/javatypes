declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a door.
             * This class was previously deprecated, but has been retrofitted to
             * work with modern doors. Some methods are undefined dependant on <code>isTopHalf()</code>
             * due to Minecraft's internal representation of doors.
             * @see Material#LEGACY_WOODEN_DOOR
             * @see Material#LEGACY_IRON_DOOR_BLOCK
             * @see Material#LEGACY_SPRUCE_DOOR
             * @see Material#LEGACY_BIRCH_DOOR
             * @see Material#LEGACY_JUNGLE_DOOR
             * @see Material#LEGACY_ACACIA_DOOR
             * @see Material#LEGACY_DARK_OAK_DOOR
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Door extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Openable {
                /**
                 * @deprecated Artifact of old API, equivalent to new <code>Door(Material.LEGACY_WOODEN_DOOR);</code>
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to closed
                 * @param type The type of material this door is made of. This must match the type of the block above.
                 * @param face The direction the door is facing.
                 * @see Material#LEGACY_WOODEN_DOOR
                 * @see Material#LEGACY_IRON_DOOR_BLOCK
                 * @see Material#LEGACY_SPRUCE_DOOR
                 * @see Material#LEGACY_BIRCH_DOOR
                 * @see Material#LEGACY_JUNGLE_DOOR
                 * @see Material#LEGACY_ACACIA_DOOR
                 * @see Material#LEGACY_DARK_OAK_DOOR
                 * @see BlockFace#WEST
                 * @see BlockFace#NORTH
                 * @see BlockFace#EAST
                 * @see BlockFace#SOUTH
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to open
                 * or closed
                 * @param type The type of material this door is made of. This must match the type of the block above.
                 * @param face The direction the door is facing.
                 * @param isOpen Whether the door is currently opened.
                 * @see Material#LEGACY_WOODEN_DOOR
                 * @see Material#LEGACY_IRON_DOOR_BLOCK
                 * @see Material#LEGACY_SPRUCE_DOOR
                 * @see Material#LEGACY_BIRCH_DOOR
                 * @see Material#LEGACY_JUNGLE_DOOR
                 * @see Material#LEGACY_ACACIA_DOOR
                 * @see Material#LEGACY_DARK_OAK_DOOR
                 * @see BlockFace#WEST
                 * @see BlockFace#NORTH
                 * @see BlockFace#EAST
                 * @see BlockFace#SOUTH
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of door of the given material type and with the hinge on the left or right
                 * @param type The type of material this door is made of. This must match the type of the block below.
                 * @param isHingeRight True if the hinge is on the right hand side, false if the hinge is on the left hand side.
                 * @see Material#LEGACY_WOODEN_DOOR
                 * @see Material#LEGACY_IRON_DOOR_BLOCK
                 * @see Material#LEGACY_SPRUCE_DOOR
                 * @see Material#LEGACY_BIRCH_DOOR
                 * @see Material#LEGACY_JUNGLE_DOOR
                 * @see Material#LEGACY_ACACIA_DOOR
                 * @see Material#LEGACY_DARK_OAK_DOOR
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, isHingeRight: boolean)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to
                 * closed
                 * @param species The species this wooden door is made of. This must match the species of the block above.
                 * @param face The direction the door is facing.
                 * @see TreeSpecies
                 * @see BlockFace#WEST
                 * @see BlockFace#NORTH
                 * @see BlockFace#EAST
                 * @see BlockFace#SOUTH
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to open
                 * or closed
                 * @param species The species this wooden door is made of. This must match the species of the block above.
                 * @param face The direction the door is facing.
                 * @param isOpen Whether the door is currently opened.
                 * @see TreeSpecies
                 * @see BlockFace#WEST
                 * @see BlockFace#NORTH
                 * @see BlockFace#EAST
                 * @see BlockFace#SOUTH
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of a wooden door of the given species and with the hinge on the left or right
                 * @param species The species this wooden door is made of. This must match the species of the block below.
                 * @param isHingeRight True if the hinge is on the right hand side, false if the hinge is on the left hand side.
                 * @see TreeSpecies
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isHingeRight: boolean)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Returns the item type of a wooden door for the given tree species.
                 * @param species The species of wood door required.
                 * @return The item type for the given species.
                 * @see Material#LEGACY_WOODEN_DOOR
                 * @see Material#LEGACY_SPRUCE_DOOR
                 * @see Material#LEGACY_BIRCH_DOOR
                 * @see Material#LEGACY_JUNGLE_DOOR
                 * @see Material#LEGACY_ACACIA_DOOR
                 * @see Material#LEGACY_DARK_OAK_DOOR
                 */
                // @ts-ignore
                getWoodDoorOfSpecies(species: org.bukkit.TreeSpecies): org.bukkit.Material
                /**
                 * Result is undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                isOpen(): boolean
                /**
                 * Set whether the door is open. Undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                setOpen(isOpen: boolean): void
                /**
                 * @return whether this is the top half of the door
                 */
                // @ts-ignore
                isTopHalf(): boolean
                /**
                 * Configure this part of the door to be either the top or the bottom half
                 * @param isTopHalf True to make it the top half.
                 */
                // @ts-ignore
                setTopHalf(isTopHalf: boolean): void
                /**
                 * @return BlockFace.SELF
                 * @deprecated This method should not be used; use hinge and facing accessors instead.
                 */
                // @ts-ignore
                getHingeCorner(): org.bukkit.block.BlockFace
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Set the direction that this door should is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 * @param face the direction
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Get the direction that this door is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 * @return the direction
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                /**
                 * Returns the side of the door the hinge is on.
                 * Undefined if <code>isTopHalf()</code> is false.
                 * @return false for left hinge, true for right hinge
                 */
                // @ts-ignore
                getHinge(): boolean
                /**
                 * Set whether the hinge is on the left or right side. Left is false, right is true.
                 * Undefined if <code>isTopHalf()</code> is false.
                 * @param isHingeRight True if the hinge is on the right hand side, false if the hinge is on the left hand side.
                 */
                // @ts-ignore
                setHinge(isHingeRight: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.Door
            }
        }
    }
}
