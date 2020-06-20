declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a minecart entity.
             */
            // @ts-ignore
            interface Minecart extends org.bukkit.entity.Vehicle {
                /**
                 * Sets a minecart's damage.
                 * @param damage over 40 to "kill" a minecart
                 */
                // @ts-ignore
                setDamage(damage: number /*double*/): void
                /**
                 * Gets a minecart's damage.
                 * @return The damage
                 */
                // @ts-ignore
                getDamage(): double
                /**
                 * Gets the maximum speed of a minecart. The speed is unrelated to the
                 * velocity.
                 * @return The max speed
                 */
                // @ts-ignore
                getMaxSpeed(): double
                /**
                 * Sets the maximum speed of a minecart. Must be nonnegative. Default is
                 * 0.4D.
                 * @param speed The max speed
                 */
                // @ts-ignore
                setMaxSpeed(speed: number /*double*/): void
                /**
                 * Returns whether this minecart will slow down faster without a passenger
                 * occupying it
                 * @return Whether it decelerates faster
                 */
                // @ts-ignore
                isSlowWhenEmpty(): boolean
                /**
                 * Sets whether this minecart will slow down faster without a passenger
                 * occupying it
                 * @param slow Whether it will decelerate faster
                 */
                // @ts-ignore
                setSlowWhenEmpty(slow: boolean): void
                /**
                 * Gets the flying velocity modifier. Used for minecarts that are in
                 * mid-air. A flying minecart's velocity is multiplied by this factor each
                 * tick.
                 * @return The vector factor
                 */
                // @ts-ignore
                getFlyingVelocityMod(): org.bukkit.util.Vector
                /**
                 * Sets the flying velocity modifier. Used for minecarts that are in
                 * mid-air. A flying minecart's velocity is multiplied by this factor each
                 * tick.
                 * @param flying velocity modifier vector
                 */
                // @ts-ignore
                setFlyingVelocityMod(flying: org.bukkit.util.Vector): void
                /**
                 * Gets the derailed velocity modifier. Used for minecarts that are on the
                 * ground, but not on rails.
                 * <p>
                 * A derailed minecart's velocity is multiplied by this factor each tick.
                 * @return derailed visible speed
                 */
                // @ts-ignore
                getDerailedVelocityMod(): org.bukkit.util.Vector
                /**
                 * Sets the derailed velocity modifier. Used for minecarts that are on the
                 * ground, but not on rails. A derailed minecart's velocity is multiplied
                 * by this factor each tick.
                 * @param derailed visible speed
                 */
                // @ts-ignore
                setDerailedVelocityMod(derailed: org.bukkit.util.Vector): void
                /**
                 * Sets the display block for this minecart.
                 * Passing a null value will set the minecart to have no display block.
                 * @param material the material to set as display block.
                 */
                // @ts-ignore
                setDisplayBlock(material: org.bukkit.material.MaterialData): void
                /**
                 * Gets the display block for this minecart.
                 * This function will return the type AIR if none is set.
                 * @return the block displayed by this minecart.
                 */
                // @ts-ignore
                getDisplayBlock(): org.bukkit.material.MaterialData
                /**
                 * Sets the display block for this minecart.
                 * Passing a null value will set the minecart to have no display block.
                 * @param blockData the material to set as display block.
                 */
                // @ts-ignore
                setDisplayBlockData(blockData: org.bukkit.block.data.BlockData): void
                /**
                 * Gets the display block for this minecart.
                 * This function will return the type AIR if none is set.
                 * @return the block displayed by this minecart.
                 */
                // @ts-ignore
                getDisplayBlockData(): org.bukkit.block.data.BlockData
                /**
                 * Sets the offset of the display block.
                 * @param offset the block offset to set for this minecart.
                 */
                // @ts-ignore
                setDisplayBlockOffset(offset: number /*int*/): void
                /**
                 * Gets the offset of the display block.
                 * @return the current block offset for this minecart.
                 */
                // @ts-ignore
                getDisplayBlockOffset(): int
            }
        }
    }
}
