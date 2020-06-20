declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace catalog {
                        /**
                         * An enumeration of known {@link DataManipulator}s applicable to
                         * {@link ItemStack}s.
                         */
                        // @ts-ignore
                        class CatalogItemData extends java.lang.Object {
                            /**
                             * Represents the {@link BlockState} that the item is representing.
                             */
                            // @ts-ignore
                            readonly BLOCK_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.BlockItemData>
                            /**
                             * Signifies that the item can break specific blocks under conditions of
                             * specific game modes and such.
                             */
                            // @ts-ignore
                            readonly BREAKABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.BreakableData>
                            /**
                             * Represents a limitation on the "cloneability" of an item. Usually
                             * applicable to {@link ItemTypes#WRITTEN_BOOK}.
                             */
                            // @ts-ignore
                            readonly CLONEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.GenerationData>
                            /**
                             * Represents the {@link CoalType} of an {@link ItemTypes#COAL}.
                             */
                            // @ts-ignore
                            readonly COAL_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.CoalData>
                            /**
                             * Signifies that an item is rendered by a specific {@link Color}.
                             * Usually applicable to {@link ItemTypes#LEATHER_BOOTS} and other leather
                             * armors.
                             */
                            // @ts-ignore
                            readonly COLORED_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.ColoredData>
                            /**
                             * Represents the {@link CookedFish} type of a
                             * {@link ItemTypes#COOKED_FISH}.
                             */
                            // @ts-ignore
                            readonly COOKED_FISH_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.CookedFishData>
                            /**
                             * Signifies that an item has a custom name.
                             */
                            // @ts-ignore
                            readonly DISPLAY_NAME_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DisplayNameData>
                            /**
                             * Signifies that an item is "damageable" and has limited uses. Usually
                             * applicable to all armor, tools, and weapons.
                             */
                            // @ts-ignore
                            readonly DURABILITY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.DurabilityData>
                            /**
                             * Represents the {@link DyeColor} information for a dye related item.
                             */
                            // @ts-ignore
                            readonly DYEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DyeableData>
                            /**
                             * Signifies that an item has {@link Enchantment}s applied to it.
                             */
                            // @ts-ignore
                            readonly ENCHANTMENT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.EnchantmentData>
                            /**
                             * Represents the {@link FireworkEffect}s of {@link ItemTypes#FIREWORKS}
                             * or a {@link ItemTypes#FIREWORK_CHARGE}.
                             */
                            // @ts-ignore
                            readonly FIREWORK_EFFECT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.FireworkEffectData>
                            /**
                             * Represents the flight time of {@link ItemTypes#FIREWORKS}.
                             */
                            // @ts-ignore
                            readonly FIREWORK_ROCKET_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.FireworkRocketData>
                            /**
                             * Represents the {@link Fish} type of a {@link ItemTypes#FISH}.
                             */
                            // @ts-ignore
                            readonly FISH_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.FishData>
                            /**
                             * Represents the {@link GoldenApple} type of a
                             * {@link ItemTypes#GOLDEN_APPLE}.
                             */
                            // @ts-ignore
                            readonly GOLDEN_APPLE_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.GoldenAppleData>
                            /**
                             * Signifies that an item has an {@link Inventory} attached to it. Usually
                             * applicable to {@link ItemTypes#CHEST}
                             */
                            // @ts-ignore
                            readonly INVENTORY_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.InventoryItemData>
                            /**
                             * Signifies that an item has extra {@link Text}s associated to its
                             * tag information on hover.
                             */
                            // @ts-ignore
                            readonly LORE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.LoreData>
                            /**
                             * Represents the various information of a {@link ItemTypes#MAP}.
                             */
                            // @ts-ignore
                            readonly MAP_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.MapItemData>
                            /**
                             * Signifies that an item has "pages" of {@link Text}. Usually applicable
                             * to {@link ItemTypes#BOOK}s.
                             */
                            // @ts-ignore
                            readonly PAGED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.PagedData>
                            /**
                             * Signifies that an item can be placed.
                             */
                            // @ts-ignore
                            readonly PLACEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.PlaceableData>
                            /**
                             * Signifies that an item can have {@link PotionEffect}s applied upon
                             * use. Usually applicable to {@link ItemTypes#POTION}s.
                             */
                            // @ts-ignore
                            readonly POTION_EFFECT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.PotionEffectData>
                            /**
                             * Signifies that an item can have {@link PotionType}.
                             * Usually applicable to {@link ItemTypes#POTION}s.
                             */
                            // @ts-ignore
                            readonly POTION_TYPE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.PotionTypeData>
                            /**
                             * Represents the {@link EntityType} that can be spawned upon use.
                             * Usually applicable to {@link ItemTypes#SPAWN_EGG}.
                             */
                            // @ts-ignore
                            readonly SPAWNABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.SpawnableData>
                            /**
                             * Signifies that there are stored {@link Enchantment}s available on the
                             * item such that they can be used to enchant another item within an
                             * {@link EnchantmentTable}.
                             */
                            // @ts-ignore
                            readonly STORED_ENCHANTMENT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.item.StoredEnchantmentData>
                            /**
                             * Signifies that an item is "pointing" to a particular location. Usually
                             * applicable to {@link ItemTypes#COMPASS}.
                             */
                            // @ts-ignore
                            readonly TARGETED_LOCATION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.TargetedLocationData>
                        }
                    }
                }
            }
        }
    }
}
