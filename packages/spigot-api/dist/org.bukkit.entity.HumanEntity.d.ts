declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a human entity, such as an NPC or a player
             */
            // @ts-ignore
            interface HumanEntity extends org.bukkit.entity.LivingEntity, org.bukkit.entity.AnimalTamer, org.bukkit.inventory.InventoryHolder {
                /**
                 * Returns the name of this player
                 * @return Player name
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Get the player's inventory.
                 * @return The inventory of the player, this also contains the armor
                 *      slots.
                 */
                // @ts-ignore
                getInventory(): org.bukkit.inventory.PlayerInventory
                /**
                 * Get the player's EnderChest inventory
                 * @return The EnderChest of the player
                 */
                // @ts-ignore
                getEnderChest(): org.bukkit.inventory.Inventory
                /**
                 * Gets the player's selected main hand
                 * @return the players main hand
                 */
                // @ts-ignore
                getMainHand(): org.bukkit.inventory.MainHand
                /**
                 * If the player currently has an inventory window open, this method will
                 * set a property of that window, such as the state of a progress bar.
                 * @param prop The property.
                 * @param value The value to set the property to.
                 * @return True if the property was successfully set.
                 */
                // @ts-ignore
                setWindowProperty(prop: org.bukkit.inventory.InventoryView.Property, value: number /*int*/): boolean
                /**
                 * Gets the inventory view the player is currently viewing. If they do not
                 * have an inventory window open, it returns their internal crafting view.
                 * @return The inventory view.
                 */
                // @ts-ignore
                getOpenInventory(): org.bukkit.inventory.InventoryView
                /**
                 * Opens an inventory window with the specified inventory on the top and
                 * the player's inventory on the bottom.
                 * @param inventory The inventory to open
                 * @return The newly opened inventory view
                 */
                // @ts-ignore
                openInventory(inventory: org.bukkit.inventory.Inventory): org.bukkit.inventory.InventoryView
                /**
                 * Opens an empty workbench inventory window with the player's inventory
                 * on the bottom.
                 * @param location The location to attach it to. If null, the player's
                 *      location is used.
                 * @param force If false, and there is no workbench block at the location,
                 *      no inventory will be opened and null will be returned.
                 * @return The newly opened inventory view, or null if it could not be
                 *      opened.
                 */
                // @ts-ignore
                openWorkbench(location: org.bukkit.Location, force: boolean): org.bukkit.inventory.InventoryView
                /**
                 * Opens an empty enchanting inventory window with the player's inventory
                 * on the bottom.
                 * @param location The location to attach it to. If null, the player's
                 *      location is used.
                 * @param force If false, and there is no enchanting table at the
                 *      location, no inventory will be opened and null will be returned.
                 * @return The newly opened inventory view, or null if it could not be
                 *      opened.
                 */
                // @ts-ignore
                openEnchanting(location: org.bukkit.Location, force: boolean): org.bukkit.inventory.InventoryView
                /**
                 * Opens an inventory window to the specified inventory view.
                 * @param inventory The view to open
                 */
                // @ts-ignore
                openInventory(inventory: org.bukkit.inventory.InventoryView): void
                /**
                 * Starts a trade between the player and the villager.
                 * Note that only one player may trade with a villager at once. You must use
                 * the force parameter for this.
                 * @param trader The merchant to trade with. Cannot be null.
                 * @param force whether to force the trade even if another player is trading
                 * @return The newly opened inventory view, or null if it could not be
                 *  opened.
                 */
                // @ts-ignore
                openMerchant(trader: org.bukkit.entity.Villager, force: boolean): org.bukkit.inventory.InventoryView
                /**
                 * Starts a trade between the player and the merchant.
                 * Note that only one player may trade with a merchant at once. You must use
                 * the force parameter for this.
                 * @param merchant The merchant to trade with. Cannot be null.
                 * @param force whether to force the trade even if another player is trading
                 * @return The newly opened inventory view, or null if it could not be
                 *  opened.
                 */
                // @ts-ignore
                openMerchant(merchant: org.bukkit.inventory.Merchant, force: boolean): org.bukkit.inventory.InventoryView
                /**
                 * Force-closes the currently open inventory view for this player, if any.
                 */
                // @ts-ignore
                closeInventory(): void
                /**
                 * Returns the ItemStack currently in your hand, can be empty.
                 * @return The ItemStack of the item you are currently holding.
                 * @deprecated Humans may now dual wield in their off hand, use explicit
                 *  methods in {#link PlayerInventory}.
                 */
                // @ts-ignore
                getItemInHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item to the given ItemStack, this will replace whatever the
                 * user was holding.
                 * @param item The ItemStack which will end up in the hand
                 * @deprecated Humans may now dual wield in their off hand, use explicit
                 *  methods in {#link PlayerInventory}.
                 */
                // @ts-ignore
                setItemInHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Returns the ItemStack currently on your cursor, can be empty. Will
                 * always be empty if the player currently has no open window.
                 * @return The ItemStack of the item you are currently moving around.
                 */
                // @ts-ignore
                getItemOnCursor(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item to the given ItemStack, this will replace whatever the
                 * user was moving. Will always be empty if the player currently has no
                 * open window.
                 * @param item The ItemStack which will end up in the hand
                 */
                // @ts-ignore
                setItemOnCursor(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Check whether a cooldown is active on the specified material.
                 * @param material the material to check
                 * @return if a cooldown is active on the material
                 */
                // @ts-ignore
                hasCooldown(material: org.bukkit.Material): boolean
                /**
                 * Get the cooldown time in ticks remaining for the specified material.
                 * @param material the material to check
                 * @return the remaining cooldown time in ticks
                 */
                // @ts-ignore
                getCooldown(material: org.bukkit.Material): int
                /**
                 * Set a cooldown on the specified material for a certain amount of ticks.
                 * ticks. 0 ticks will result in the removal of the cooldown.
                 * <p>
                 * Cooldowns are used by the server for items such as ender pearls and
                 * shields to prevent them from being used repeatedly.
                 * <p>
                 * Note that cooldowns will not by themselves stop an item from being used
                 * for attacking.
                 * @param material the material to set the cooldown for
                 * @param ticks the amount of ticks to set or 0 to remove
                 */
                // @ts-ignore
                setCooldown(material: org.bukkit.Material, ticks: number /*int*/): void
                /**
                 * Get the sleep ticks of the player. This value may be capped.
                 * @return slumber ticks
                 */
                // @ts-ignore
                getSleepTicks(): int
                /**
                 * Gets the Location where the player will spawn at their bed, null if
                 * they have not slept in one or their current bed spawn is invalid.
                 * @return Bed Spawn Location if bed exists, otherwise null.
                 */
                // @ts-ignore
                getBedSpawnLocation(): org.bukkit.Location
                /**
                 * Sets the Location where the player will spawn at their bed.
                 * @param location where to set the respawn location
                 */
                // @ts-ignore
                setBedSpawnLocation(location: org.bukkit.Location): void
                /**
                 * Sets the Location where the player will spawn at their bed.
                 * @param location where to set the respawn location
                 * @param force whether to forcefully set the respawn location even if a
                 *      valid bed is not present
                 */
                // @ts-ignore
                setBedSpawnLocation(location: org.bukkit.Location, force: boolean): void
                /**
                 * Attempts to make the entity sleep at the given location.
                 * <br>
                 * The location must be in the current world and have a bed placed at the
                 * location. The game may also enforce other requirements such as proximity
                 * to bed, monsters, and dimension type if force is not set.
                 * @param location the location of the bed
                 * @param force whether to try and sleep at the location even if not
                 *  normally possible
                 * @return whether the sleep was successful
                 */
                // @ts-ignore
                sleep(location: org.bukkit.Location, force: boolean): boolean
                /**
                 * Causes the player to wakeup if they are currently sleeping.
                 * @param setSpawnLocation whether to set their spawn location to the bed
                 *  they are currently sleeping in
                 * @throws IllegalStateException if not sleeping
                 */
                // @ts-ignore
                wakeup(setSpawnLocation: boolean): void
                /**
                 * Gets the location of the bed the player is currently sleeping in
                 * @return location
                 * @throws IllegalStateException if not sleeping
                 */
                // @ts-ignore
                getBedLocation(): org.bukkit.Location
                /**
                 * Gets this human's current {@link GameMode}
                 * @return Current game mode
                 */
                // @ts-ignore
                getGameMode(): org.bukkit.GameMode
                /**
                 * Sets this human's current {@link GameMode}
                 * @param mode New game mode
                 */
                // @ts-ignore
                setGameMode(mode: org.bukkit.GameMode): void
                /**
                 * Check if the player is currently blocking (ie with a shield).
                 * @return Whether they are blocking.
                 */
                // @ts-ignore
                isBlocking(): boolean
                /**
                 * Check if the player currently has their hand raised (ie about to begin
                 * blocking).
                 * @return Whether their hand is raised
                 */
                // @ts-ignore
                isHandRaised(): boolean
                /**
                 * Get the total amount of experience required for the player to level
                 * @return Experience required to level up
                 */
                // @ts-ignore
                getExpToLevel(): int
                /**
                 * Gets the current cooldown for a player's attack.
                 * This is used to calculate damage, with 1.0 representing a fully charged
                 * attack and 0.0 representing a non-charged attack
                 * @return A float between 0.0-1.0 representing the progress of the charge
                 */
                // @ts-ignore
                getAttackCooldown(): float
                /**
                 * Discover a recipe for this player such that it has not already been
                 * discovered. This method will add the key's associated recipe to the
                 * player's recipe book.
                 * @param recipe the key of the recipe to discover
                 * @return whether or not the recipe was newly discovered
                 */
                // @ts-ignore
                discoverRecipe(recipe: org.bukkit.NamespacedKey): boolean
                /**
                 * Discover a collection of recipes for this player such that they have not
                 * already been discovered. This method will add the keys' associated
                 * recipes to the player's recipe book. If a recipe in the provided
                 * collection has already been discovered, it will be silently ignored.
                 * @param recipes the keys of the recipes to discover
                 * @return the amount of newly discovered recipes where 0 indicates that
                 *  none were newly discovered and a number equal to {#code recipes.size()}
                 *  indicates that all were new
                 */
                // @ts-ignore
                discoverRecipes(recipes: Array<org.bukkit.NamespacedKey>): int
                /**
                 * Undiscover a recipe for this player such that it has already been
                 * discovered. This method will remove the key's associated recipe from the
                 * player's recipe book.
                 * @param recipe the key of the recipe to undiscover
                 * @return whether or not the recipe was successfully undiscovered (i.e. it
                 *  was previously discovered)
                 */
                // @ts-ignore
                undiscoverRecipe(recipe: org.bukkit.NamespacedKey): boolean
                /**
                 * Undiscover a collection of recipes for this player such that they have
                 * already been discovered. This method will remove the keys' associated
                 * recipes from the player's recipe book. If a recipe in the provided
                 * collection has not yet been discovered, it will be silently ignored.
                 * @param recipes the keys of the recipes to undiscover
                 * @return the amount of undiscovered recipes where 0 indicates that none
                 *  were undiscovered and a number equal to {#code recipes.size()} indicates
                 *  that all were undiscovered
                 */
                // @ts-ignore
                undiscoverRecipes(recipes: Array<org.bukkit.NamespacedKey>): int
                /**
                 * Gets the entity currently perched on the left shoulder or null if no
                 * entity.
                 * <br>
                 * The returned entity will not be spawned within the world, so most
                 * operations are invalid unless the entity is first spawned in.
                 * @return left shoulder entity
                 * @deprecated There are currently no well defined semantics regarding
                 *  serialized entities in Bukkit. Use with care.
                 */
                // @ts-ignore
                getShoulderEntityLeft(): org.bukkit.entity.Entity
                /**
                 * Sets the entity currently perched on the left shoulder, or null to
                 * remove. This method will remove the entity from the world.
                 * <br>
                 * Note that only a copy of the entity will be set to display on the
                 * shoulder.
                 * <br>
                 * Also note that the client will currently only render {@link Parrot}
                 * entities.
                 * @param entity left shoulder entity
                 * @deprecated There are currently no well defined semantics regarding
                 *  serialized entities in Bukkit. Use with care.
                 */
                // @ts-ignore
                setShoulderEntityLeft(entity: org.bukkit.entity.Entity): void
                /**
                 * Gets the entity currently perched on the right shoulder or null if no
                 * entity.
                 * <br>
                 * The returned entity will not be spawned within the world, so most
                 * operations are invalid unless the entity is first spawned in.
                 * @return right shoulder entity
                 * @deprecated There are currently no well defined semantics regarding
                 *  serialized entities in Bukkit. Use with care.
                 */
                // @ts-ignore
                getShoulderEntityRight(): org.bukkit.entity.Entity
                /**
                 * Sets the entity currently perched on the right shoulder, or null to
                 * remove. This method will remove the entity from the world.
                 * <br>
                 * Note that only a copy of the entity will be set to display on the
                 * shoulder.
                 * <br>
                 * Also note that the client will currently only render {@link Parrot}
                 * entities.
                 * @param entity right shoulder entity
                 * @deprecated There are currently no well defined semantics regarding
                 *  serialized entities in Bukkit. Use with care.
                 */
                // @ts-ignore
                setShoulderEntityRight(entity: org.bukkit.entity.Entity): void
            }
        }
    }
}
