declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Provides an easy way to retrieve types from a {@link Game}.
             * <p>Note that the registries may be in flux, especially during game
             * initialization. These will be accurate for the time they are called, however
             * they may change at a later point. Do not assume that the contents of a
             * collection will be all the entries that will exist.</p>
             * <p>Some of the returned instances my become incorrect if they are later
             * overwritten. However, this should occur prior to
             * {@link GameState#POST_INITIALIZATION}.</p>
             */
            // @ts-ignore
            interface GameRegistry {
                /**
                 * Attempts to retrieve the specific type of {@link CatalogType} based on
                 * the string id given.
                 * <p>Some types may not be available for various reasons including but not
                 * restricted to: mods adding custom types, plugins providing custom types,
                 * game version changes.</p>
                 * @param typeClass The class of the type of {#link CatalogType}
                 * @param id The case insensitive string id of the dummy type
                 * @param <T> The type of dummy type
                 * @return The found dummy type, if available
                 * @see CatalogType
                 */
                // @ts-ignore
                getType<T extends org.spongepowered.api.CatalogType>(typeClass: java.lang.Class<T>, id: java.lang.String | string): java.util.Optional<T>
                /**
                 * Gets a collection of all available found specific types of
                 * {@link CatalogType} requested.
                 * <p>The presented {@link CatalogType}s may not exist in default catalogs
                 * due to various reasons including but not restricted to: mods, plugins,
                 * game changes.</p>
                 * @param typeClass The class of {#link CatalogType}
                 * @param <T> The type of {#link CatalogType}
                 * @return A collection of all known types of the requested catalog type
                 */
                // @ts-ignore
                getAllOf<T extends org.spongepowered.api.CatalogType>(typeClass: java.lang.Class<T>): Array<T>
                /**
                 * Gets a collection of all available found specific types of
                 * {@link CatalogType} requested.
                 * @param pluginId The plugin id to check for types
                 * @param typeClass The class of {#link CatalogType}
                 * @param <T> The type of {#link CatalogType}
                 * @return A collection of all known types of the requested catalog type
                 */
                // @ts-ignore
                getAllFor<T extends org.spongepowered.api.CatalogType>(pluginId: java.lang.String | string, typeClass: java.lang.Class<T>): Array<T>
                /**
                 * Gets all {@link CatalogType} for Minecraft as a base mod. Note that
                 * some {@link CatalogType}s are not originally from the game itself, and
                 * may be provided by Sponge.
                 * @param typeClass The type of catalog type
                 * @param <T> The type of catalog type
                 * @return The collection of all known types of the requested catalog type
                 */
                // @ts-ignore
                getAllForMinecraft<T extends org.spongepowered.api.CatalogType>(typeClass: java.lang.Class<T>): Array<T>
                /**
                 * Gets all {@link CatalogType} for Sponge as a base mod. Note that
                 * some {@link CatalogType}s are not originally from the game itself, and
                 * may be provided by Sponge.
                 * @param typeClass The type of catalog type
                 * @param <T> The type of catalog type
                 * @return The collection of all known types of the requested catalog type
                 */
                // @ts-ignore
                getAllForSponge<T extends org.spongepowered.api.CatalogType>(typeClass: java.lang.Class<T>): Array<T>
                /**
                 * Registers the {@link CatalogRegistryModule} for dummy registration and
                 * handling.
                 * <p>By default, the only supported modules that can be registered are
                 * dependent that plugins are not attempting to register new modules for
                 * API-provided {@link CatalogType}s.</p>
                 * @param catalogClass The dummy class itself
                 * @param registryModule The registry module
                 * @param <T> The type of dummy
                 * @return fluent interface
                 * @throws IllegalArgumentException If there is a module already registered
                 * @throws RegistryModuleAlreadyRegisteredException If the registry module
                 *       is already registered
                 * @throws UnsupportedOperationException If an attempt is made to register
                 *       a module for an API catalog
                 */
                // @ts-ignore
                registerModule<T extends org.spongepowered.api.CatalogType>(catalogClass: java.lang.Class<T>, registryModule: org.spongepowered.api.registry.CatalogRegistryModule<T>): org.spongepowered.api.GameRegistry
                /**
                 * Registers the desired {@link RegistryModule}.
                 * @param module The module to register
                 * @return This registry, for chaining
                 * @throws RegistryModuleAlreadyRegisteredException if the specified
                 *       registry module is already registered
                 */
                // @ts-ignore
                registerModule(module: org.spongepowered.api.registry.RegistryModule): org.spongepowered.api.GameRegistry
                /**
                 * Registers a {@link Supplier} for creating the desired {@link ResettableBuilder}.
                 * @param builderClass The builder class
                 * @param supplier The supplier
                 * @param <T> The type of builder/supplier
                 * @return This registry, for chaining
                 */
                // @ts-ignore
                registerBuilderSupplier<T>(builderClass: java.lang.Class<T>, supplier: java.util.function$.Supplier<any>): org.spongepowered.api.GameRegistry
                /**
                 * Gets a builder of the desired class type, examples may include:
                 * {@link org.spongepowered.api.item.inventory.ItemStack.Builder}, etc.
                 * @param builderClass The class of the builder
                 * @param <T> The type of builder
                 * @return The builder, if available
                 * @throws IllegalArgumentException If there is no supplier for the given
                 *       builder class
                 */
                // @ts-ignore
                createBuilder<T extends org.spongepowered.api.util.ResettableBuilder>(builderClass: java.lang.Class<T>): T
                /**
                 * Registers a new {@link CatalogType} instance if registration for that
                 * type is supported.
                 * <p>Note that this is intended only for registering new instances of
                 * already existing CatalogTypes, not for registering entirely new
                 * CatalogType classes.</p>
                 * @param type The CatalogType class
                 * @param obj The dummy type instance
                 * @param <T> dummy object type
                 * @return The registered type
                 * @throws IllegalArgumentException If there is an id conflict with the
                 *       given type and an existing type
                 * @throws UnsupportedOperationException If registration for the given type
                 *       is not supported
                 * @throws CatalogTypeAlreadyRegisteredException if the type cannot be
                 *       registered because a matching type was already registered
                 * @deprecated Is scheduled to be removed in API 8, the
                 *       {#link org.spongepowered.api.event.game.GameRegistryEvent.Register}
                 *       should be used instead
                 */
                // @ts-ignore
                register<T extends org.spongepowered.api.CatalogType>(type: java.lang.Class<T>, obj: T): T
                /**
                 * Gets a {@link Collection} of the default GameRules.
                 * @return The default GameRules.
                 */
                // @ts-ignore
                getDefaultGameRules(): Array<java.lang.String | string>
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link EntityType}. If the statistic group is not a valid
                 * {@link EntityStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 * @param statType The type of statistic to return
                 * @param entityType The entity type for the statistic to return
                 * @return The entity statistic or Optional.empty() if not found
                 */
                // @ts-ignore
                getEntityStatistic(statType: org.spongepowered.api.statistic.StatisticType, entityType: org.spongepowered.api.entity.EntityType): java.util.Optional<org.spongepowered.api.statistic.EntityStatistic>
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link ItemType}. If the statistic group is not a valid
                 * {@link ItemStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 * @param statType The type of statistic to return
                 * @param itemType The item type for the statistic to return
                 * @return The item statistic or Optional.empty() if not found
                 */
                // @ts-ignore
                getItemStatistic(statType: org.spongepowered.api.statistic.StatisticType, itemType: org.spongepowered.api.item.ItemType): java.util.Optional<org.spongepowered.api.statistic.ItemStatistic>
                /**
                 * Gets the {@link Statistic} for the given {@link StatisticType} and
                 * {@link BlockType}. If the statistic group is not a valid
                 * {@link BlockStatistic} group then {@link Optional#empty()} will be
                 * returned.
                 * @param statType The type of statistic to return
                 * @param blockType The block type for the statistic to return
                 * @return The block statistic or Optional.empty() if not found
                 */
                // @ts-ignore
                getBlockStatistic(statType: org.spongepowered.api.statistic.StatisticType, blockType: org.spongepowered.api.block.BlockType): java.util.Optional<org.spongepowered.api.statistic.BlockStatistic>
                /**
                 * Gets the {@link Rotation} with the provided degrees.
                 * @param degrees The degrees of the rotation
                 * @return The {#link Rotation} with the given degrees or
                 *       <tt>Optional.empty()</tt> if not found
                 */
                // @ts-ignore
                getRotationFromDegree(degrees: number /*int*/): java.util.Optional<org.spongepowered.api.util.rotation.Rotation>
                /**
                 * Loads a {@link Favicon} from the specified encoded string. The format of
                 * the input depends on the implementation.
                 * @param raw The encoded favicon
                 * @return The loaded favicon
                 * @throws IOException If the favicon couldn't be loaded
                 */
                // @ts-ignore
                loadFavicon(raw: java.lang.String | string): org.spongepowered.api.network.status.Favicon
                /**
                 * Loads a favicon from a specified {@link Path}.
                 * @param path The path to the favicon
                 * @return The loaded favicon from the file
                 * @throws IOException If the favicon couldn't be loaded
                 * @throws FileNotFoundException If the file doesn't exist
                 */
                // @ts-ignore
                loadFavicon(path: java.nio.file.Path): org.spongepowered.api.network.status.Favicon
                /**
                 * Loads a favicon from a specified {@link URL}.
                 * @param url The favicon URL
                 * @return The loaded favicon from the URL
                 * @throws IOException If the favicon couldn't be loaded
                 */
                // @ts-ignore
                loadFavicon(url: java.net.URL): org.spongepowered.api.network.status.Favicon
                /**
                 * Loads a favicon from a specified {@link InputStream}.
                 * @param in The favicon input stream
                 * @return The loaded favicon from the input stream
                 * @throws IOException If the favicon couldn't be loaded
                 */
                // @ts-ignore
                loadFavicon(input: java.io.InputStream): org.spongepowered.api.network.status.Favicon
                /**
                 * Loads a favicon from a specified {@link BufferedImage}.
                 * @param image The favicon image
                 * @return The loaded favicon from the image
                 * @throws IOException If the favicon couldn't be loaded
                 */
                // @ts-ignore
                loadFavicon(image: java.awt.image.BufferedImage): org.spongepowered.api.network.status.Favicon
                /**
                 * Retrieves the crafting RecipeRegistry for this GameRegistry.
                 * @return The crafting recipe registry
                 */
                // @ts-ignore
                getCraftingRecipeRegistry(): org.spongepowered.api.item.recipe.crafting.CraftingRecipeRegistry
                /**
                 * Retrieves the smelting RecipeRegistry for this GameRegistry.
                 * @return The smelting recipe registry
                 */
                // @ts-ignore
                getSmeltingRecipeRegistry(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipeRegistry
                /**
                 * Gets a {@link ResourcePack} that's already been created by its ID.
                 * @param id The ID of the pack
                 * @return The ResourcePack with the specified ID, or Optional.empty() if
                 *          none could be found
                 */
                // @ts-ignore
                getResourcePackById(id: java.lang.String | string): java.util.Optional<org.spongepowered.api.resourcepack.ResourcePack>
                /**
                 * Gets a {@link DisplaySlot} which displays only for teams with the
                 * provided color.
                 * @param color The color for the display slot
                 * @return The {#link DisplaySlot} with the provided color, or
                 *       <tt>Optional.empty()</tt> if not found
                 */
                // @ts-ignore
                getDisplaySlotForColor(color: org.spongepowered.api.text.format.TextColor): java.util.Optional<org.spongepowered.api.scoreboard.displayslot.DisplaySlot>
                /**
                 * Registers a new {@link AbstractAITask} with an {@link Agent} as the
                 * owner. The complete id will be in the format of
                 * <code>{@link PluginContainer#getId()}:id</code>.
                 * @param plugin The plugin who owns it
                 * @param id The id that represents the task type
                 * @param name The name for the task
                 * @param aiClass The class of the task
                 * @return The type
                 */
                // @ts-ignore
                registerAITaskType(plugin: java.lang.Object | any, id: java.lang.String | string, name: java.lang.String | string, aiClass: java.lang.Class<any>): org.spongepowered.api.entity.ai.task.AITaskType
                /**
                 * Gets the {@link ExtentBufferFactory} for creating buffers
                 * to store extent data.
                 * @return The extent buffer factory
                 */
                // @ts-ignore
                getExtentBufferFactory(): org.spongepowered.api.world.extent.ExtentBufferFactory
                /**
                 * Gets the {@link ValueFactory} for creating values.
                 * @return The value factory
                 */
                // @ts-ignore
                getValueFactory(): org.spongepowered.api.data.value.ValueFactory
                /**
                 * Gets the {@link VillagerRegistry} for the register mappings of
                 * {@link Career}s to {@link TradeOfferGenerator}s based on a level.
                 * @return The villager registry instance
                 */
                // @ts-ignore
                getVillagerRegistry(): org.spongepowered.api.item.merchant.VillagerRegistry
                /**
                 * Gets the internal {@link TextSerializerFactory}.
                 * @return The text serializer factory
                 * @deprecated Use {#link TextSerializers} instead
                 */
                // @ts-ignore
                getTextSerializerFactory(): org.spongepowered.api.text.serializer.TextSerializerFactory
                /**
                 * Gets the internal {@link SelectorFactory}.
                 * @return The selector factory
                 * @deprecated Use the appropriate class in the selector package instead
                 */
                // @ts-ignore
                getSelectorFactory(): org.spongepowered.api.text.selector.SelectorFactory
                /**
                 * Gets a locale for the specified locale code, e.g. {@code en_US}.
                 * @param locale The locale to lookup (e.g. {#code en_US}.
                 * @return The locale
                 */
                // @ts-ignore
                getLocale(locale: java.lang.String | string): java.util.Locale
                /**
                 * Gets the {@link Translation} with the provided ID.
                 * @param id The ID of the translation
                 * @return The {#link Translation} with the given ID or Optional.empty() if
                 *       not found
                 */
                // @ts-ignore
                getTranslationById(id: java.lang.String | string): java.util.Optional<org.spongepowered.api.text.translation.Translation>
            }
        }
    }
}
