declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    /**
                     * Represents the properties of a {@link World} which are persisted across runtime instances.
                     */
                    // @ts-ignore
                    interface WorldProperties extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Gets whether this world has been initialized.
                         * @return Is initialized
                         */
                        // @ts-ignore
                        isInitialized(): boolean
                        /**
                         * Gets the name of this world.
                         * @return The name
                         */
                        // @ts-ignore
                        getWorldName(): java.lang.String
                        /**
                         * Gets the {@link UUID} of the world.
                         * @return The unique Id
                         */
                        // @ts-ignore
                        getUniqueId(): java.util.UUID
                        /**
                         * Gets whether this world is enabled. A world which is enabled but unloaded
                         * may be loaded automatically if an attempt is made to transfer an entity
                         * to the world using {@link Entity#transferToWorld} .
                         * @return Is enabled
                         */
                        // @ts-ignore
                        isEnabled(): boolean
                        /**
                         * Sets this world as enabled. A world which is enabled but unloaded may be
                         * loaded automatically if an attempt is made to transfer an entity to the
                         * world using {@link Entity#transferToWorld} .
                         * @param state The new state
                         */
                        // @ts-ignore
                        setEnabled(state: boolean): void
                        /**
                         * Gets whether this world will load when the server starts up.
                         * @return Loads on startup
                         */
                        // @ts-ignore
                        loadOnStartup(): boolean
                        /**
                         * Sets whether this world should load when the server starts up.
                         * @param state Should load on startup
                         */
                        // @ts-ignore
                        setLoadOnStartup(state: boolean): void
                        /**
                         * Gets whether spawn chunks of this world remain loaded when no players are
                         * present.
                         * @return True if spawn chunks of this world remain loaded without players,
                         *          false if not
                         */
                        // @ts-ignore
                        doesKeepSpawnLoaded(): boolean
                        /**
                         * Sets whether the spawn chunks of the world should remain loaded when no
                         * players are present.
                         * @param state Should keep spawn loaded
                         */
                        // @ts-ignore
                        setKeepSpawnLoaded(state: boolean): void
                        /**
                         * Gets whether spawn chunks of this world will generate on load.
                         * @return True if spawn chunks of this world generate on load.
                         */
                        // @ts-ignore
                        doesGenerateSpawnOnLoad(): boolean
                        /**
                         * Sets whether the spawn chunks of the world will generate on load.
                         * @param state Should generate spawn chunks on load.
                         */
                        // @ts-ignore
                        setGenerateSpawnOnLoad(state: boolean): void
                        /**
                         * Gets the default spawn position of this world.
                         * @return The spawn position
                         */
                        // @ts-ignore
                        getSpawnPosition(): Vector3i
                        /**
                         * Sets the default spawn position of this world.
                         * @param position The spawn position
                         */
                        // @ts-ignore
                        setSpawnPosition(position: Vector3i): void
                        /**
                         * Gets the {@link GeneratorType} of this world.
                         * @return The type
                         */
                        // @ts-ignore
                        getGeneratorType(): org.spongepowered.api.world.GeneratorType
                        /**
                         * Sets the {@link GeneratorType} of this world.
                         * @param type The generator type
                         */
                        // @ts-ignore
                        setGeneratorType(type: org.spongepowered.api.world.GeneratorType): void
                        /**
                         * Gets the seed of this world.
                         * @return The seed
                         */
                        // @ts-ignore
                        getSeed(): long
                        /**
                         * Sets the seed of this world.
                         * <p>Warning: this may cause the edge of currently generated chunks to no
                         * longer align with newly generated chunks.</p>
                         * @param seed The new world seed
                         */
                        // @ts-ignore
                        setSeed(seed: number /*long*/): void
                        /**
                         * Gets the number of ticks which have occurred since the world was created.
                         * @return The total time in ticks
                         */
                        // @ts-ignore
                        getTotalTime(): long
                        /**
                         * Gets the time of day, in ticks. The total number of ticks in a day is
                         * 24000, however this value does not reset to zero at the start of each day
                         * but rather keeps counting passed 24000.
                         * @return The time of day
                         */
                        // @ts-ignore
                        getWorldTime(): long
                        /**
                         * Sets the time of day, in ticks. The total number of ticks in a day is
                         * 24000, however this value does not reset to zero at the start of each day
                         * but rather keeps counting passed 24000.
                         * @param time The time of day
                         */
                        // @ts-ignore
                        setWorldTime(time: number /*long*/): void
                        /**
                         * Gets the {@link DimensionType} of this world.
                         * @return The dimension type
                         */
                        // @ts-ignore
                        getDimensionType(): org.spongepowered.api.world.DimensionType
                        /**
                         * Gets the {@link PortalAgentType} for the world.
                         * @return The portal agent type
                         */
                        // @ts-ignore
                        getPortalAgentType(): org.spongepowered.api.world.PortalAgentType
                        /**
                         * Gets whether PVP combat is enabled in this world.
                         * @return Whether PVP is enabled
                         */
                        // @ts-ignore
                        isPVPEnabled(): boolean
                        /**
                         * Sets whether PVP combat is enabled in this world.
                         * @param enabled Whether PVP is enabled
                         */
                        // @ts-ignore
                        setPVPEnabled(enabled: boolean): void
                        /**
                         * Gets whether this world is currently experiencing rain/snow/cloud-cover
                         * (depending on the biome of a specific location).
                         * @return Is raining
                         */
                        // @ts-ignore
                        isRaining(): boolean
                        /**
                         * Sets whether this world is currently experiencing rain/snow/cloud-cover
                         * (depending on the biome of a specific location).
                         * @param state Is raining
                         */
                        // @ts-ignore
                        setRaining(state: boolean): void
                        /**
                         * Gets the number of ticks until the weather is next toggled to a new
                         * random value.
                         * @return The time until the weather changes
                         */
                        // @ts-ignore
                        getRainTime(): int
                        /**
                         * Sets the number of ticks until the weather is next toggled to a new
                         * random value.
                         * @param time The time until the weather changes
                         */
                        // @ts-ignore
                        setRainTime(time: number /*int*/): void
                        /**
                         * Gets whether this world is currently experiencing a lightning storm.
                         * @return Is thundering
                         */
                        // @ts-ignore
                        isThundering(): boolean
                        /**
                         * Sets whether this world is currently experiencing a lightning storm.
                         * @param state Is thundering
                         */
                        // @ts-ignore
                        setThundering(state: boolean): void
                        /**
                         * Gets the number of ticks until the {@link #isThundering()} state is
                         * toggled to a new random value.
                         * @return The time until the thundering state changes
                         */
                        // @ts-ignore
                        getThunderTime(): int
                        /**
                         * Sets the number of ticks until the {@link #isThundering()} state is
                         * toggled to a new random value.
                         * @param time The time until the thundering state changes
                         */
                        // @ts-ignore
                        setThunderTime(time: number /*int*/): void
                        /**
                         * Gets the default {@link GameMode} of this world.
                         * @return The game mode
                         */
                        // @ts-ignore
                        getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode
                        /**
                         * Sets the default {@link GameMode} of this world.
                         * @param gamemode The game mode
                         */
                        // @ts-ignore
                        setGameMode(gamemode: org.spongepowered.api.entity.living.player.gamemode.GameMode): void
                        /**
                         * Gets whether this world will generate map features such as villages and
                         * strongholds.
                         * @return Whether map features enabled
                         */
                        // @ts-ignore
                        usesMapFeatures(): boolean
                        /**
                         * Sets whether this world will generate map features such as villages and
                         * strongholds.
                         * @param state Whether map features enabled
                         */
                        // @ts-ignore
                        setMapFeaturesEnabled(state: boolean): void
                        /**
                         * Gets whether this world is set to hardcore mode.
                         * @return Is hardcore
                         */
                        // @ts-ignore
                        isHardcore(): boolean
                        /**
                         * Sets whether this world is set to hardcore mode.
                         * @param state Is hardcore
                         */
                        // @ts-ignore
                        setHardcore(state: boolean): void
                        /**
                         * Gets whether commands are allowed within this world. May not be respected
                         * when not in single player.
                         * @return Whether commands are allowed
                         */
                        // @ts-ignore
                        areCommandsAllowed(): boolean
                        /**
                         * Sets whether commands are allowed within this world. May not be respected
                         * when not in single player.
                         * @param state Whether commands are allowed
                         */
                        // @ts-ignore
                        setCommandsAllowed(state: boolean): void
                        /**
                         * Gets the difficulty of this world.
                         * @return The difficulty
                         */
                        // @ts-ignore
                        getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty
                        /**
                         * Sets the difficulty of this world.
                         * @param difficulty The difficulty
                         */
                        // @ts-ignore
                        setDifficulty(difficulty: org.spongepowered.api.world.difficulty.Difficulty): void
                        /**
                         * Gets whether the bonus chest should be generated.
                         * <p>This only applies on the initial load of the {@link World}
                         * created via this properties.</p>
                         * @return True if bonus chest is generated, false if not
                         */
                        // @ts-ignore
                        doesGenerateBonusChest(): boolean
                        /**
                         * Gets the center of the world border.
                         * <p>The returned position is three-dimensional. As the world border
                         * extends over the entire y-axis, the returned position will always have a
                         * {@code y} set to 0.</p>
                         * @return The center
                         */
                        // @ts-ignore
                        getWorldBorderCenter(): Vector3d
                        /**
                         * Sets the center of the world border.
                         * @param x The x-axis center of the world border
                         * @param z The z-axis center of the world border
                         */
                        // @ts-ignore
                        setWorldBorderCenter(x: number /*double*/, z: number /*double*/): void
                        /**
                         * Gets the diameter of the world border.
                         * <p>The returned diameter applies to the x and z axis. The world border
                         * extends over the entire y-axis.</p>
                         * @return The diameter
                         */
                        // @ts-ignore
                        getWorldBorderDiameter(): double
                        /**
                         * Sets the diameter of the world border.
                         * <p>The specified diameter applies to the x and z axis. The world border
                         * extends over the entire y-axis.</p>
                         * @param diameter The diameter
                         */
                        // @ts-ignore
                        setWorldBorderDiameter(diameter: number /*double*/): void
                        /**
                         * Gets the time remaining until the world border stops expanding or
                         * contracting.
                         * @return The time remaining, in milliseconds
                         */
                        // @ts-ignore
                        getWorldBorderTimeRemaining(): long
                        /**
                         * Sets the time remaining until the world border stops expanding or
                         * contracting.
                         * @param time The new remaining time
                         */
                        // @ts-ignore
                        setWorldBorderTimeRemaining(time: number /*long*/): void
                        /**
                         * Gets the diameter the world border is expanding or contracting to.
                         * <p>This will return the same value as {@link #getWorldBorderDiameter}
                         * unless {@link #getWorldBorderTimeRemaining} is greater than 0.</p>
                         * @return The diameter being changed to
                         */
                        // @ts-ignore
                        getWorldBorderTargetDiameter(): double
                        /**
                         * Sets the target diameter of the world border.
                         * <p>The world border diameter increases/decrease linearly over time
                         * specified in {@link #getWorldBorderTimeRemaining()}. The specified
                         * diameter applies to the x and z axis. The world border extends over the
                         * entire y-axis.</p>
                         * @param diameter The diameter where the border will expand/contract to
                         */
                        // @ts-ignore
                        setWorldBorderTargetDiameter(diameter: number /*double*/): void
                        /**
                         * Gets the distance a player may be outside the world border before taking
                         * damage.
                         * @return The distance
                         */
                        // @ts-ignore
                        getWorldBorderDamageThreshold(): double
                        /**
                         * Sets the distance a player may be be outside the world border before
                         * taking damage.
                         * @param distance The distance
                         */
                        // @ts-ignore
                        setWorldBorderDamageThreshold(distance: number /*double*/): void
                        /**
                         * Gets the damage done to a player per block per tick when outside the
                         * buffer.
                         * @return The damage amount
                         */
                        // @ts-ignore
                        getWorldBorderDamageAmount(): double
                        /**
                         * Sets the damage done to a player per block per tick when outside the
                         * buffer.
                         * @param damage The damage amount
                         */
                        // @ts-ignore
                        setWorldBorderDamageAmount(damage: number /*double*/): void
                        /**
                         * Gets the time when a contracting world border will warn a player for whom
                         * the world border will reach in {@code time} seconds.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         * @return The time, in seconds
                         */
                        // @ts-ignore
                        getWorldBorderWarningTime(): int
                        /**
                         * Sets the time when a contracting world border will warn a player for whom
                         * the world border will reach in {@code time} seconds.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         * @param time The time, in seconds
                         */
                        // @ts-ignore
                        setWorldBorderWarningTime(time: number /*int*/): void
                        /**
                         * Gets the distance when a contracting world border will warn a player for
                         * whom the world border is {@code distance} blocks away.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         * @return The distance, in blocks
                         */
                        // @ts-ignore
                        getWorldBorderWarningDistance(): int
                        /**
                         * Sets the distance when a contracting world border will warn a player for
                         * whom the world border is {@code distance} blocks away.
                         * <p>In Minecraft, the warning is displayed in the form of a reddish
                         * tint.</p>
                         * @param distance The distance, in blocks
                         */
                        // @ts-ignore
                        setWorldBorderWarningDistance(distance: number /*int*/): void
                        /**
                         * Gets the specified GameRule value.
                         * @param gameRule The name of the GameRule.
                         * @return The GameRule value, if it exists.
                         */
                        // @ts-ignore
                        getGameRule(gameRule: string): java.util.Optional<java.lang.String>
                        /**
                         * Gets a map of the currently set game rules and their values.
                         * @return An immutable map of the game rules
                         */
                        // @ts-ignore
                        getGameRules(): java.util.Map<java.lang.String, java.lang.String>
                        /**
                         * Sets the specified GameRule value. If one with this name does not exist,
                         * it will be created.
                         * @param gameRule The name of the GameRule.
                         * @param value The value to set the GameRule to.
                         */
                        // @ts-ignore
                        setGameRule(gameRule: string, value: string): void
                        /**
                         * Removes custom GameRule.
                         * @param gameRule The name of the GameRule.
                         * @return True if GameRule was deleted, false if not
                         */
                        // @ts-ignore
                        removeGameRule(gameRule: string): boolean
                        /**
                         * Gets a {@link DataContainer} containing any additional properties for
                         * this world. The returned data is a snapshot of the data and is not live.
                         * @return Any additional properties
                         */
                        // @ts-ignore
                        getAdditionalProperties(): org.spongepowered.api.data.DataContainer
                        /**
                         * Gets a section of the additional properties returned by
                         * {@link #getAdditionalProperties()}. The returned data is a snapshot of
                         * the data and is not live.
                         * @param path The path for the section.
                         * @return The data view representing the requested section
                         */
                        // @ts-ignore
                        getPropertySection(path: org.spongepowered.api.data.DataQuery): java.util.Optional<org.spongepowered.api.data.DataView>
                        /**
                         * Sets a path within the additional data to the given {@link DataView}. If
                         * you are using this to store data related to your mod/plugin is is HIGHLY
                         * recommended that the identifier you pass in be your mod/plugin id.
                         * @param path The path for the section
                         * @param data The new data
                         */
                        // @ts-ignore
                        setPropertySection(path: org.spongepowered.api.data.DataQuery, data: org.spongepowered.api.data.DataView): void
                        /**
                         * Gets an immutable collection of the world generator modifiers currently
                         * in use.
                         * @return The world generator modifiers in use.
                         */
                        // @ts-ignore
                        getGeneratorModifiers(): java.util.Collection<org.spongepowered.api.world.gen.WorldGeneratorModifier>
                        /**
                         * Sets the given world generator modifiers to be used.
                         * @param modifiers The modifiers to set.
                         * @throws IllegalArgumentException If any of the modifiers has not been
                         *          registered in the {#link GameRegistry}.
                         */
                        // @ts-ignore
                        setGeneratorModifiers(modifiers: Array<org.spongepowered.api.world.gen.WorldGeneratorModifier>): void
                        /**
                         * Gets the generator settings. These can be used by the generator type
                         * and/or by the generator modifiers.
                         * @return The generator settings.
                         */
                        // @ts-ignore
                        getGeneratorSettings(): org.spongepowered.api.data.DataContainer
                        /**
                         * Gets the {@link SerializationBehavior} in use.
                         * @return The serialization behavior
                         */
                        // @ts-ignore
                        getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior
                        /**
                         * Sets the {@link SerializationBehavior} for use.
                         * @param behavior The serialization behavior
                         */
                        // @ts-ignore
                        setSerializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): void
                    }
                }
            }
        }
    }
}
