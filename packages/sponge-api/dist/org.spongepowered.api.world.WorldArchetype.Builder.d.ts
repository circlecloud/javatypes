declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace WorldArchetype {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.WorldArchetype, org.spongepowered.api.world.WorldArchetype.Builder> {
                        /**
                         * Sets enabled status. Built worlds who are enabled but unloaded may
                         * be loaded automatically if an attempt is made to transfer an entity
                         * to the world using {@link Entity#transferToWorld} .
                         * @param state Should be enabled
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        enabled(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether to load when the server starts.
                         * @param state Should load on startup
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        loadsOnStartup(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether the spawn chunks should remain loaded when
                         * no players are present.
                         * @param state Should keep spawn loaded
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        keepsSpawnLoaded(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether the spawn chunks generate on load.
                         * @param state Should generate spawn chunks on load
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        generateSpawnOnLoad(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the seed. See {@link #randomSeed()} if a random seed is desired.
                         * @param seed The seed
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        seed(seed: number /*long*/): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the seed to be randomized for each world created.
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        randomSeed(): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the default {@link GameMode}. If not specified this
                         * will default to {@link GameModes#SURVIVAL}.
                         * @param gameMode The gamemode
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        gameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the generator type. If not specified this will default
                         * to {@link GeneratorTypes#DEFAULT}
                         * @param type The type
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        generator(type: org.spongepowered.api.world.GeneratorType): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the generator modifiers.
                         * @param modifier The modifiers
                         * @return The builder, for chaining
                         * @throws IllegalArgumentException If one of the modifiers is not
                         *          registered in {#link GameRegistry}.
                         */
                        // @ts-ignore
                        generatorModifiers(...modifier: org.spongepowered.api.world.gen.WorldGeneratorModifier[]): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the dimension type.
                         * @param type The type
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        dimension(type: org.spongepowered.api.world.DimensionType): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the difficulty.
                         * @param difficulty The difficulty
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        difficulty(difficulty: org.spongepowered.api.world.difficulty.Difficulty): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether this should generate map features such as villages
                         * and strongholds. If not specified this will default to true.
                         * @param state Are map features enabled
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        usesMapFeatures(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether hardcore mode is enabled. On servers this will cause
                         * players to be banned upon death, on clients the world will be
                         * deleted! If not specified this will default to false.
                         * @param state Is hardcore mode enabled
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        hardcore(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets any extra settings required by the {@link GeneratorType} or by
                         * the {@link WorldGeneratorModifier}s. If not specified these will
                         * default to the settings within {@link GeneratorType#getGeneratorSettings()}.
                         * @param settings The generator settings
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        generatorSettings(settings: org.spongepowered.api.data.DataContainer): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the desired {@link PortalAgentType} for the world.
                         * @param type The type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        portalAgent(type: org.spongepowered.api.world.PortalAgentType): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether PVP combat is enabled in this world.
                         * @param state Whether PVP is enabled
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        pvp(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether commands are allowed to be executed.
                         * @param state Whether commands are allowed
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        commandsAllowed(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets whether the bonus chest should be created.
                         * @param state Whether bonus chest is enabled
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        generateBonusChest(state: boolean): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Sets the serialization behavior that will be used when saving.
                         * @param behavior The serialization behavior
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        serializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Fills this {@link Builder} for creating {@link WorldArchetype}s,
                         * the builder is then seeded with the values from the given
                         * {@link WorldProperties} object.
                         * @param properties The seed properties
                         * @return A new seeded builder
                         */
                        // @ts-ignore
                        from(properties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.world.WorldArchetype.Builder
                        /**
                         * Builds the {@link WorldArchetype} which can be used to create
                         * a {@link World} in {@link Server#createWorldProperties(String, WorldArchetype)}.
                         * <p>This will also register the settings as a new type in the
                         * {@link GameRegistry}.</p>
                         * @param id The id that this settings will be registered under
                         * @param name The human readable name of this settings
                         * @return The settings
                         */
                        // @ts-ignore
                        build(id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.world.WorldArchetype
                    }
                }
            }
        }
    }
}
