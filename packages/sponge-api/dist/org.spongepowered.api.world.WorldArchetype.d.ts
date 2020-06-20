declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A representation of the settings which define a {@link World} for creation.
                 */
                // @ts-ignore
                interface WorldArchetype extends org.spongepowered.api.CatalogType {
                    /**
                     * Gets a new Builder instance for {@link WorldArchetype}.
                     * @return A new builder instance
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.world.WorldArchetype.Builder
                    /**
                     * Gets enabled status. Built worlds who are enabled but unloaded may
                     * be loaded automatically if an attempt is made to transfer an entity
                     * to the world using {@link Entity#transferToWorld} .
                     * @return True if enabled, false if not
                     */
                    // @ts-ignore
                    isEnabled(): boolean
                    /**
                     * Gets whether to load when the server starts.
                     * @return True to load when server starts, false if not
                     */
                    // @ts-ignore
                    loadOnStartup(): boolean
                    /**
                     * Gets whether spawn chunks remain loaded when no players are present.
                     * @return True to keep spawn chunks loaded, false if not
                     */
                    // @ts-ignore
                    doesKeepSpawnLoaded(): boolean
                    /**
                     * Gets whether spawn chunks will generate on load.
                     * @return True to generate spawn on load, false if not
                     */
                    // @ts-ignore
                    doesGenerateSpawnOnLoad(): boolean
                    /**
                     * Gets the seed.
                     * @return The seed
                     */
                    // @ts-ignore
                    getSeed(): long
                    /**
                     * Gets if the seed will be randomized for each world generated.
                     * @return If the seed is randomized
                     */
                    // @ts-ignore
                    isSeedRandomized(): boolean
                    /**
                     * Gets the gamemode.
                     * @return The gamemode
                     */
                    // @ts-ignore
                    getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode
                    /**
                     * Gets the generator type.
                     * @return The generator type
                     */
                    // @ts-ignore
                    getGeneratorType(): org.spongepowered.api.world.GeneratorType
                    /**
                     * Gets an immutable collection of the world generator modifiers.
                     * @return The modifiers
                     */
                    // @ts-ignore
                    getGeneratorModifiers(): java.util.Collection<org.spongepowered.api.world.gen.WorldGeneratorModifier>
                    /**
                     * Gets whether map features are enabled.
                     * <p>Examples include Villages, Temples, etc.</p>
                     * @return True if map features are enabled, false if not
                     */
                    // @ts-ignore
                    usesMapFeatures(): boolean
                    /**
                     * Gets whether hardcore mode is enabled.
                     * @return True if hardcore mode is enabled, false if not
                     */
                    // @ts-ignore
                    isHardcore(): boolean
                    /**
                     * Gets whether commands are allowed.
                     * @return True if commands are allowed, false if not
                     */
                    // @ts-ignore
                    areCommandsAllowed(): boolean
                    /**
                     * Gets whether the bonus chest should be generated.
                     * <p>This only applies on the initial load of the {@link World}
                     * created via the {@link WorldProperties} created from this settings.</p>
                     * @return True if bonus chest is generated, false if not
                     */
                    // @ts-ignore
                    doesGenerateBonusChest(): boolean
                    /**
                     * Gets the dimension type.
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
                     * Gets the difficulty.
                     * @return The difficulty
                     */
                    // @ts-ignore
                    getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty
                    /**
                     * Gets whether PVP combat is enabled.
                     * @return True if PVP combat is enabled, false if not
                     */
                    // @ts-ignore
                    isPVPEnabled(): boolean
                    /**
                     * Gets a {@link DataContainer} of any extra settings required by the
                     * generator.
                     * @return The generator settings
                     */
                    // @ts-ignore
                    getGeneratorSettings(): org.spongepowered.api.data.DataContainer
                    /**
                     * Gets the {@link SerializationBehavior} that worlds built from this will use.
                     * @return The serialization mode
                     */
                    // @ts-ignore
                    getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior
                }
            }
        }
    }
}
