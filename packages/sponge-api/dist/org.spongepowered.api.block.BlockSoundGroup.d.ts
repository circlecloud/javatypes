declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                /**
                 * Represents sounds for a block.
                 */
                // @ts-ignore
                interface BlockSoundGroup {
                    /**
                     * Gets the volume used when playing sounds.
                     * @return The volume
                     */
                    // @ts-ignore
                    getVolume(): number /*double*/
                    /**
                     * Gets the pitch used when playing sounds.
                     * @return The pitch
                     */
                    // @ts-ignore
                    getPitch(): number /*double*/
                    /**
                     * Gets the sound played when the block is breaking.
                     * @return The break sound
                     */
                    // @ts-ignore
                    getBreakSound(): org.spongepowered.api.effect.sound.SoundType
                    /**
                     * Gets the sound played when the block is stepped on.
                     * @return The step sound
                     */
                    // @ts-ignore
                    getStepSound(): org.spongepowered.api.effect.sound.SoundType
                    /**
                     * Gets the sound played when the block is placed.
                     * @return The place sound
                     */
                    // @ts-ignore
                    getPlaceSound(): org.spongepowered.api.effect.sound.SoundType
                    /**
                     * Gets the sound played when the block is hit.
                     * @return The hit sound
                     */
                    // @ts-ignore
                    getHitSound(): org.spongepowered.api.effect.sound.SoundType
                    /**
                     * Gets the sound played when a {@link Living} entity falls onto the block.
                     * @return The fall sound
                     */
                    // @ts-ignore
                    getFallSound(): org.spongepowered.api.effect.sound.SoundType
                }
            }
        }
    }
}
