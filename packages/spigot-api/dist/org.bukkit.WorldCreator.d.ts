declare namespace org {
    namespace bukkit {
        /**
         * Represents various types of options that may be used to create a world.
         */
        // @ts-ignore
        class WorldCreator extends java.lang.Object {
            /**
             * Creates an empty WorldCreationOptions for the given world name
             * @param name Name of the world that will be created
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Copies the options from the specified world
             * @param world World to copy options from
             * @return This object, for chaining
             */
            // @ts-ignore
            copy(world: org.bukkit.World): org.bukkit.WorldCreator
            /**
             * Copies the options from the specified {@link WorldCreator}
             * @param creator World creator to copy options from
             * @return This object, for chaining
             */
            // @ts-ignore
            copy(creator: org.bukkit.WorldCreator): org.bukkit.WorldCreator
            /**
             * Gets the name of the world that is to be loaded or created.
             * @return World name
             */
            // @ts-ignore
            name(): java.lang.String
            /**
             * Gets the seed that will be used to create this world
             * @return World seed
             */
            // @ts-ignore
            seed(): long
            /**
             * Sets the seed that will be used to create this world
             * @param seed World seed
             * @return This object, for chaining
             */
            // @ts-ignore
            seed(seed: number /*long*/): org.bukkit.WorldCreator
            /**
             * Gets the environment that will be used to create or load the world
             * @return World environment
             */
            // @ts-ignore
            environment(): org.bukkit.World.Environment
            /**
             * Sets the environment that will be used to create or load the world
             * @param env World environment
             * @return This object, for chaining
             */
            // @ts-ignore
            environment(env: org.bukkit.World.Environment): org.bukkit.WorldCreator
            /**
             * Gets the type of the world that will be created or loaded
             * @return World type
             */
            // @ts-ignore
            type(): org.bukkit.WorldType
            /**
             * Sets the type of the world that will be created or loaded
             * @param type World type
             * @return This object, for chaining
             */
            // @ts-ignore
            type(type: org.bukkit.WorldType): org.bukkit.WorldCreator
            /**
             * Gets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * @return Chunk generator
             */
            // @ts-ignore
            generator(): org.bukkit.generator.ChunkGenerator
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * @param generator Chunk generator
             * @return This object, for chaining
             */
            // @ts-ignore
            generator(generator: org.bukkit.generator.ChunkGenerator): org.bukkit.WorldCreator
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * <p>
             * If the generator cannot be found for the given name, the natural
             * environment generator will be used instead and a warning will be
             * printed to the console.
             * @param generator Name of the generator to use, in "plugin:id" notation
             * @return This object, for chaining
             */
            // @ts-ignore
            generator(generator: string): org.bukkit.WorldCreator
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * <p>
             * If the generator cannot be found for the given name, the natural
             * environment generator will be used instead and a warning will be
             * printed to the specified output
             * @param generator Name of the generator to use, in "plugin:id" notation
             * @param output {#link CommandSender} that will receive any error
             *      messages
             * @return This object, for chaining
             */
            // @ts-ignore
            generator(generator: string, output: org.bukkit.command.CommandSender): org.bukkit.WorldCreator
            /**
             * Sets the generator settings of the world that will be created or loaded.
             * <p>
             * Currently only {@link WorldType#FLAT} uses these settings, and expects
             * them to be in JSON format with a valid biome defined. An example valid
             * configuration is as follows:
             * <code>{"layers": [{"block": "stone", "height": 1}, {"block": "grass", "height": 1}], "biome":"plains"}</code>
             * @param generatorSettings The settings that should be used by the
             *  generator
             * @return This object, for chaining
             */
            // @ts-ignore
            generatorSettings(generatorSettings: string): org.bukkit.WorldCreator
            /**
             * Gets the generator settings of the world that will be created or loaded.
             * @return The settings that should be used by the generator
             * @see #generatorSettings(java.lang.String)
             */
            // @ts-ignore
            generatorSettings(): java.lang.String
            /**
             * Sets whether or not worlds created or loaded with this creator will
             * have structures.
             * @param generate Whether to generate structures
             * @return This object, for chaining
             */
            // @ts-ignore
            generateStructures(generate: boolean): org.bukkit.WorldCreator
            /**
             * Gets whether or not structures will be generated in the world.
             * @return True if structures will be generated
             */
            // @ts-ignore
            generateStructures(): boolean
            /**
             * Sets whether the world will be hardcore or not.
             * In a hardcore world the difficulty will be locked to hard.
             * @param hardcore Whether the world will be hardcore
             * @return This object, for chaining
             */
            // @ts-ignore
            hardcore(hardcore: boolean): org.bukkit.WorldCreator
            /**
             * Gets whether the world will be hardcore or not.
             * In a hardcore world the difficulty will be locked to hard.
             * @return hardcore status
             */
            // @ts-ignore
            hardcore(): boolean
            /**
             * Creates a world with the specified options.
             * <p>
             * If the world already exists, it will be loaded from disk and some
             * options may be ignored.
             * @return Newly created or loaded world
             */
            // @ts-ignore
            createWorld(): org.bukkit.World
            /**
             * Creates a new {@link WorldCreator} for the given world name
             * @param name Name of the world to load or create
             * @return Resulting WorldCreator
             */
            // @ts-ignore
            name(name: string): org.bukkit.WorldCreator
            /**
             * Attempts to get the {@link ChunkGenerator} with the given name.
             * <p>
             * If the generator is not found, null will be returned and a message will
             * be printed to the specified {@link CommandSender} explaining why.
             * <p>
             * The name must be in the "plugin:id" notation, or optionally just
             * "plugin", where "plugin" is the safe-name of a plugin and "id" is an
             * optional unique identifier for the generator you wish to request from
             * the plugin.
             * @param world Name of the world this will be used for
             * @param name Name of the generator to retrieve
             * @param output Where to output if errors are present
             * @return Resulting generator, or null
             */
            // @ts-ignore
            getGeneratorForName(world: string, name: string, output: org.bukkit.command.CommandSender): org.bukkit.generator.ChunkGenerator
        }
    }
}
