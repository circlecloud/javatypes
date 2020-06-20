declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                /**
                 * A Viewer is something that sees effects.
                 * The Viewer class contains methods for spawning particles and playing sound
                 * effects.
                 */
                // @ts-ignore
                interface Viewer {
                    /**
                     * Spawn a {@link ParticleEffect} at a given position.
                     * All players within a default radius around the position will see the
                     * particles.
                     * @param particleEffect The particle effect to spawn
                     * @param position The position at which to spawn the particle effect
                     */
                    // @ts-ignore
                    spawnParticles(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect, position: Vector3d): void
                    /**
                     * Spawn a {@link ParticleEffect} at a given position.
                     * All players within a given radius around the position will see the
                     * particles.
                     * @param particleEffect The particle effect to spawn
                     * @param position The position at which to spawn the particle effect
                     * @param radius The radius around the position where the particles can be
                     *             seen by players
                     */
                    // @ts-ignore
                    spawnParticles(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect, position: Vector3d, radius: number /*int*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: Vector3d, volume: number /*double*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position. All
                     * players within range will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param category The category to play the sound with
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: Vector3d, volume: number /*double*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     * @param pitch The modulation of the sound to play at, usually between 0
                     *         and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: Vector3d, volume: number /*double*/, pitch: number /*double*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param category The category to play the sound with
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     * @param pitch The modulation of the sound to play at, usually between 0
                     *         and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: Vector3d, volume: number /*double*/, pitch: number /*double*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     * @param pitch The modulation of the sound to play at, usually between 0
                     *         and 2
                     * @param minVolume The minimum volume to play the sound at, usually between
                     *         0 and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: Vector3d, volume: number /*double*/, pitch: number /*double*/, minVolume: number /*double*/): void
                    /**
                     * Plays the given {@link SoundType} at the given position. All
                     * players within range will hear the sound with the given volume.
                     * @param sound The sound to play
                     * @param category The category to play the sound with
                     * @param position The position to play the sound
                     * @param volume The volume to play the sound at, usually between 0 and 2
                     * @param pitch The modulation of the sound to play at, usually between 0
                     *         and 2
                     * @param minVolume The minimum volume to play the sound at, usually between
                     *         0 and 2
                     */
                    // @ts-ignore
                    playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: Vector3d, volume: number /*double*/, pitch: number /*double*/, minVolume: number /*double*/): void
                    /**
                     * Stops all the sounds.
                     */
                    // @ts-ignore
                    stopSounds(): void
                    /**
                     * Stops all the sounds of the given {@link SoundType}.
                     * @param sound The sound type
                     */
                    // @ts-ignore
                    stopSounds(sound: org.spongepowered.api.effect.sound.SoundType): void
                    /**
                     * Stops all the sounds that are played in the
                     * given {@link SoundCategory}.
                     * @param category The sound category
                     */
                    // @ts-ignore
                    stopSounds(category: org.spongepowered.api.effect.sound.SoundCategory): void
                    /**
                     * Stops all the sounds of the given {@link SoundType} that
                     * are played in the given {@link SoundCategory}.
                     * @param sound The sound type
                     * @param category The sound category
                     */
                    // @ts-ignore
                    stopSounds(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory): void
                    /**
                     * Plays the given {@link RecordType} at the given position. The benefit of playing
                     * {@link RecordType} instead of a {@link SoundType} allows you to stop them through
                     * the {@link #stopRecord(Vector3i)}. Playing a new {@link RecordType} at the same
                     * position will cancel the currently playing one.
                     * @param position The position
                     * @param recordType The record type
                     */
                    // @ts-ignore
                    playRecord(position: Vector3i, recordType: org.spongepowered.api.effect.sound.record.RecordType): void
                    /**
                     * Stops the record that is playing at the given position.
                     * @param position The position
                     */
                    // @ts-ignore
                    stopRecord(position: Vector3i): void
                    /**
                     * Sends a {@link Title} to this player.
                     * @param title The {#link Title} to send to the player
                     */
                    // @ts-ignore
                    sendTitle(title: org.spongepowered.api.text.title.Title): void
                    /**
                     * Removes the currently displayed {@link Title} from the player and resets
                     * all settings back to default values.
                     */
                    // @ts-ignore
                    resetTitle(): void
                    /**
                     * Removes the currently displayed {@link Title} from the player's screen.
                     */
                    // @ts-ignore
                    clearTitle(): void
                    /**
                     * Sends a {@link BookView} to this viewer.
                     * @param bookView BookView to send
                     */
                    // @ts-ignore
                    sendBookView(bookView: org.spongepowered.api.text.BookView): void
                    /**
                     * Sends a client-only block change.
                     * <p>This will not change the {@link World} in any way.</p>
                     * @param vec The position
                     * @param state The block state
                     */
                    // @ts-ignore
                    sendBlockChange(vec: Vector3i, state: org.spongepowered.api.block.BlockState): void
                    /**
                     * Sends a client-only block change.
                     * <p>This will not change the {@link World} in any way.</p>
                     * @param x The x position
                     * @param y The y position
                     * @param z The z position
                     * @param state The block state
                     */
                    // @ts-ignore
                    sendBlockChange(x: number /*int*/, y: number /*int*/, z: number /*int*/, state: org.spongepowered.api.block.BlockState): void
                    /**
                     * Resets the client's view of the provided position to what
                     * actually exists in the {@link World}.
                     * <p>This is useful for resetting what the client sees
                     * after sending a {@link #sendBlockChange block change}.</p>
                     * @param vec The position
                     */
                    // @ts-ignore
                    resetBlockChange(vec: Vector3i): void
                    /**
                     * Resets the client's view of the provided position to what
                     * actually exists in the {@link World}.
                     * <p>This is useful for resetting what the client sees
                     * after sending a {@link #sendBlockChange block change}.</p>
                     * @param x The x position
                     * @param y The y position
                     * @param z The z position
                     */
                    // @ts-ignore
                    resetBlockChange(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                }
            }
        }
    }
}
