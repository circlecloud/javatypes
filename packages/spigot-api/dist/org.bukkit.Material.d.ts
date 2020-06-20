declare namespace org {
    namespace bukkit {
        /**
         * An enum of all material IDs accepted by the official server and client
         */
        // @ts-ignore
        class Material extends java.lang.Enum<org.bukkit.Material> implements org.bukkit.Keyed {
            // @ts-ignore
            readonly LEGACY_PREFIX: string
            // @ts-ignore
            readonly data: java.lang.Class<any>
            // @ts-ignore
            values(): org.bukkit.Material[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Material
            /**
             * Do not use for any reason.
             * @return ID of this material
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): int
            /**
             * Do not use for any reason.
             * @return legacy status
             */
            // @ts-ignore
            isLegacy(): boolean
            // @ts-ignore
            getKey(): org.bukkit.NamespacedKey
            /**
             * Gets the maximum amount of this material that can be held in a stack
             * @return Maximum stack size for this material
             */
            // @ts-ignore
            getMaxStackSize(): int
            /**
             * Gets the maximum durability of this material
             * @return Maximum durability for this material
             */
            // @ts-ignore
            getMaxDurability(): short
            /**
             * Creates a new {@link BlockData} instance for this Material, with all
             * properties initialized to unspecified defaults.
             * @return new data instance
             */
            // @ts-ignore
            createBlockData(): org.bukkit.block.data.BlockData
            /**
             * Creates a new {@link BlockData} instance for this Material, with
             * all properties initialized to unspecified defaults.
             * @param consumer consumer to run on new instance before returning
             * @return new data instance
             */
            // @ts-ignore
            createBlockData(consumer: java.util.function.Consumer<org.bukkit.block.data.BlockData> | java.util.function$.Consumer<org.bukkit.block.data.BlockData>): org.bukkit.block.data.BlockData
            /**
             * Creates a new {@link BlockData} instance for this Material, with all
             * properties initialized to unspecified defaults, except for those provided
             * in data.
             * @param data data string
             * @return new data instance
             * @throws IllegalArgumentException if the specified data is not valid
             */
            // @ts-ignore
            createBlockData(data: string): org.bukkit.block.data.BlockData
            /**
             * Gets the MaterialData class associated with this Material
             * @return MaterialData associated with this Material
             */
            // @ts-ignore
            getData(): java.lang.Class<? extends org.bukkit.material.MaterialData>
            /**
             * Constructs a new MaterialData relevant for this Material, with the
             * given initial data
             * @param raw Initial data to construct the MaterialData with
             * @return New MaterialData with the given data
             * @deprecated Magic value
             */
            // @ts-ignore
            getNewData(raw: number /*byte*/): org.bukkit.material.MaterialData
            /**
             * Checks if this Material is a placable block
             * @return true if this material is a block
             */
            // @ts-ignore
            isBlock(): boolean
            /**
             * Checks if this Material is edible.
             * @return true if this Material is edible.
             */
            // @ts-ignore
            isEdible(): boolean
            /**
             * Attempts to get the Material with the given name.
             * <p>
             * This is a normal lookup, names must be the precise name they are given
             * in the enum.
             * @param name Name of the material to get
             * @return Material if found, or null
             */
            // @ts-ignore
            getMaterial(name: string): org.bukkit.Material
            /**
             * Attempts to get the Material with the given name.
             * <p>
             * This is a normal lookup, names must be the precise name they are given in
             * the enum (but optionally including the LEGACY_PREFIX if legacyName is
             * true).
             * <p>
             * If legacyName is true, then the lookup will be against legacy materials,
             * but the returned Material will be a modern material (ie this method is
             * useful for updating stored data).
             * @param name Name of the material to get
             * @param legacyName whether this is a legacy name lookup
             * @return Material if found, or null
             */
            // @ts-ignore
            getMaterial(name: string, legacyName: boolean): org.bukkit.Material
            /**
             * Attempts to match the Material with the given name.
             * <p>
             * This is a match lookup; names will be stripped of the "minecraft:"
             * namespace, converted to uppercase, then stripped of special characters in
             * an attempt to format it like the enum.
             * @param name Name of the material to get
             * @return Material if found, or null
             */
            // @ts-ignore
            matchMaterial(name: string): org.bukkit.Material
            /**
             * Attempts to match the Material with the given name.
             * <p>
             * This is a match lookup; names will be stripped of the "minecraft:"
             * namespace, converted to uppercase, then stripped of special characters in
             * an attempt to format it like the enum.
             * @param name Name of the material to get
             * @param legacyName whether this is a legacy name (see
             *  {#link #getMaterial(java.lang.String, boolean)}
             * @return Material if found, or null
             */
            // @ts-ignore
            matchMaterial(name: string, legacyName: boolean): org.bukkit.Material
            /**
             * @return True if this material represents a playable music disk.
             */
            // @ts-ignore
            isRecord(): boolean
            /**
             * Check if the material is a block and solid (can be built upon)
             * @return True if this material is a block and solid
             */
            // @ts-ignore
            isSolid(): boolean
            /**
             * Check if the material is an air block.
             * @return True if this material is an air block.
             */
            // @ts-ignore
            isAir(): boolean
            /**
             * Check if the material is a block and does not block any light
             * @return True if this material is a block and does not block any light
             * @deprecated currently does not have an implementation which is well
             *  linked to the underlying server. Contributions welcome.
             */
            // @ts-ignore
            isTransparent(): boolean
            /**
             * Check if the material is a block and can catch fire
             * @return True if this material is a block and can catch fire
             */
            // @ts-ignore
            isFlammable(): boolean
            /**
             * Check if the material is a block and can burn away
             * @return True if this material is a block and can burn away
             */
            // @ts-ignore
            isBurnable(): boolean
            /**
             * Checks if this Material can be used as fuel in a Furnace
             * @return true if this Material can be used as fuel.
             */
            // @ts-ignore
            isFuel(): boolean
            /**
             * Check if the material is a block and completely blocks vision
             * @return True if this material is a block and completely blocks vision
             */
            // @ts-ignore
            isOccluding(): boolean
            /**
             * @return True if this material is affected by gravity.
             */
            // @ts-ignore
            hasGravity(): boolean
            /**
             * Checks if this Material is an obtainable item.
             * @return true if this material is an item
             */
            // @ts-ignore
            isItem(): boolean
            /**
             * Checks if this Material can be interacted with.
             * Interactable materials include those with functionality when they are
             * interacted with by a player such as chests, furnaces, etc.
             * Some blocks such as piston heads and stairs are considered interactable
             * though may not perform any additional functionality.
             * Note that the interactability of some materials may be dependant on their
             * state as well. This method will return true if there is at least one
             * state in which additional interact handling is performed for the
             * material.
             * @return true if this material can be interacted with.
             */
            // @ts-ignore
            isInteractable(): boolean
            /**
             * Obtains the block's hardness level (also known as "strength").
             * <br>
             * This number is used to calculate the time required to break each block.
             * <br>
             * Only available when {@link #isBlock()} is true.
             * @return the hardness of that material.
             */
            // @ts-ignore
            getHardness(): float
            /**
             * Obtains the blast resistance value (also known as block "durability").
             * <br>
             * This value is used in explosions to calculate whether a block should be
             * broken or not.
             * <br>
             * Only available when {@link #isBlock()} is true.
             * @return the blast resistance of that material.
             */
            // @ts-ignore
            getBlastResistance(): float
            /**
             * Determines the remaining item in a crafting grid after crafting with this
             * ingredient.
             * <br>
             * Only available when {@link #isItem()} is true.
             * @return the item left behind when crafting, or null if nothing is.
             */
            // @ts-ignore
            getCraftingRemainingItem(): org.bukkit.Material
        }
    }
}
