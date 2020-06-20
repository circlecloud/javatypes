declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Enumeration of all known {@link CatalogType}s for autocompletion when using
             * the {@link GameRegistry} to retrieve specific types or all of a certain type.
             * <p>These are generally useful for {@link GameRegistry#getType(Class, String)}
             * and {@link GameRegistry#getAllOf(Class)}.</p>
             */
            // @ts-ignore
            class CatalogTypes extends java.lang.Object {
                // @ts-ignore
                readonly ADVANCEMENT: java.lang.Class<org.spongepowered.api.advancement.Advancement>
                // @ts-ignore
                readonly ADVANCEMENT_TREE: java.lang.Class<org.spongepowered.api.advancement.AdvancementTree>
                // @ts-ignore
                readonly ADVANCEMENT_TYPE: java.lang.Class<org.spongepowered.api.advancement.AdvancementType>
                // @ts-ignore
                readonly AI_TASK_TYPE: java.lang.Class<org.spongepowered.api.entity.ai.task.AITaskType>
                // @ts-ignore
                readonly ARMOR_TYPE: java.lang.Class<org.spongepowered.api.data.type.ArmorType>
                // @ts-ignore
                readonly ART: java.lang.Class<org.spongepowered.api.data.type.Art>
                // @ts-ignore
                readonly BANNER_PATTERN_SHAPE: java.lang.Class<org.spongepowered.api.data.type.BannerPatternShape>
                // @ts-ignore
                readonly BAN_TYPE: java.lang.Class<org.spongepowered.api.util.ban.BanType>
                // @ts-ignore
                readonly BIG_MUSHROOM_TYPE: java.lang.Class<org.spongepowered.api.data.type.BigMushroomType>
                // @ts-ignore
                readonly BIOME_TREE_TYPE: java.lang.Class<org.spongepowered.api.world.gen.type.BiomeTreeType>
                // @ts-ignore
                readonly BIOME_TYPE: java.lang.Class<org.spongepowered.api.world.biome.BiomeType>
                // @ts-ignore
                readonly BLOCK_PALETTE_TYPE: java.lang.Class<org.spongepowered.api.world.schematic.BlockPaletteType>
                // @ts-ignore
                readonly BLOCK_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.BlockStatistic>
                // @ts-ignore
                readonly BLOCK_TYPE: java.lang.Class<org.spongepowered.api.block.BlockType>
                // @ts-ignore
                readonly BODY_PART: java.lang.Class<org.spongepowered.api.data.type.BodyPart>
                // @ts-ignore
                readonly BOSS_BAR_COLOR: java.lang.Class<org.spongepowered.api.boss.BossBarColor>
                // @ts-ignore
                readonly BOSS_BAR_OVERLAY: java.lang.Class<org.spongepowered.api.boss.BossBarOverlay>
                // @ts-ignore
                readonly BRICK_TYPE: java.lang.Class<org.spongepowered.api.data.type.BrickType>
                // @ts-ignore
                readonly CAREER: java.lang.Class<org.spongepowered.api.data.type.Career>
                // @ts-ignore
                readonly CHAT_TYPE: java.lang.Class<org.spongepowered.api.text.chat.ChatType>
                // @ts-ignore
                readonly CHAT_VISIBILITY: java.lang.Class<org.spongepowered.api.text.chat.ChatVisibility>
                // @ts-ignore
                readonly COAL_TYPE: java.lang.Class<org.spongepowered.api.data.type.CoalType>
                // @ts-ignore
                readonly COLLISION_RULE: java.lang.Class<org.spongepowered.api.scoreboard.CollisionRule>
                // @ts-ignore
                readonly COMPARISON_TYPE: java.lang.Class<org.spongepowered.api.data.type.ComparatorType>
                // @ts-ignore
                readonly COOKED_FISH: java.lang.Class<org.spongepowered.api.data.type.CookedFish>
                // @ts-ignore
                readonly CRAFTING_RECIPES: java.lang.Class<org.spongepowered.api.item.recipe.crafting.CraftingRecipe>
                // @ts-ignore
                readonly CRITERION: java.lang.Class<org.spongepowered.api.scoreboard.critieria.Criterion>
                // @ts-ignore
                readonly CURRENCY: java.lang.Class<org.spongepowered.api.service.economy.Currency>
                // @ts-ignore
                readonly DAMAGE_MODIFIER_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>
                // @ts-ignore
                readonly DAMAGE_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.damage.DamageType>
                // @ts-ignore
                readonly DATA_FORMAT: java.lang.Class<org.spongepowered.api.data.persistence.DataFormat>
                // @ts-ignore
                readonly DATA_TRANSLATOR: java.lang.Class<org.spongepowered.api.data.persistence.DataTranslator>
                // @ts-ignore
                readonly DIFFICULTY: java.lang.Class<org.spongepowered.api.world.difficulty.Difficulty>
                // @ts-ignore
                readonly DIMENSION_TYPE: java.lang.Class<org.spongepowered.api.world.DimensionType>
                // @ts-ignore
                readonly DIRT_TYPE: java.lang.Class<org.spongepowered.api.data.type.DirtType>
                // @ts-ignore
                readonly DISGUISED_BLOCK_TYPE: java.lang.Class<org.spongepowered.api.data.type.DisguisedBlockType>
                // @ts-ignore
                readonly DISMOUNT_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.dismount.DismountType>
                // @ts-ignore
                readonly DISPLAY_SLOT: java.lang.Class<org.spongepowered.api.scoreboard.displayslot.DisplaySlot>
                // @ts-ignore
                readonly DOUBLE_PLANT_TYPE: java.lang.Class<org.spongepowered.api.data.type.DoublePlantType>
                // @ts-ignore
                readonly DYE_COLOR: java.lang.Class<org.spongepowered.api.data.type.DyeColor>
                /**
                 * Use the replacement, {@link #ENCHANTMENT_TYPE} instead.
                 * @deprecated Use {#link #ENCHANTMENT_TYPE} instead
                 */
                // @ts-ignore
                readonly ENCHANTMENT: java.lang.Class<org.spongepowered.api.item.enchantment.EnchantmentType>
                // @ts-ignore
                readonly ENCHANTMENT_TYPE: java.lang.Class<org.spongepowered.api.item.enchantment.EnchantmentType>
                // @ts-ignore
                readonly ENTITY_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.EntityStatistic>
                // @ts-ignore
                readonly ENTITY_TYPE: java.lang.Class<org.spongepowered.api.entity.EntityType>
                // @ts-ignore
                readonly EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                // @ts-ignore
                readonly EVENT_CONTEXT_KEY: java.lang.Class<org.spongepowered.api.event.cause.EventContextKey>
                // @ts-ignore
                readonly FIREWORK_SHAPE: java.lang.Class<org.spongepowered.api.item.FireworkShape>
                // @ts-ignore
                readonly FISH: java.lang.Class<org.spongepowered.api.data.type.Fish>
                // @ts-ignore
                readonly FLUID_TYPE: java.lang.Class<org.spongepowered.api.extra.fluid.FluidType>
                // @ts-ignore
                readonly GAME_MODE: java.lang.Class<org.spongepowered.api.entity.living.player.gamemode.GameMode>
                // @ts-ignore
                readonly GENERATOR_TYPE: java.lang.Class<org.spongepowered.api.world.GeneratorType>
                // @ts-ignore
                readonly GOAL_TYPE: java.lang.Class<org.spongepowered.api.entity.ai.GoalType>
                // @ts-ignore
                readonly GOLDEN_APPLE: java.lang.Class<org.spongepowered.api.data.type.GoldenApple>
                // @ts-ignore
                readonly HAND_PREFERENCE: java.lang.Class<org.spongepowered.api.data.type.HandPreference>
                // @ts-ignore
                readonly HAND_TYPE: java.lang.Class<org.spongepowered.api.data.type.HandType>
                // @ts-ignore
                readonly HEALING_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.health.HealingType>
                // @ts-ignore
                readonly HEALTH_MODIFIER_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.health.HealthModifierType>
                // @ts-ignore
                readonly HELD_EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.HeldEquipmentType>
                // @ts-ignore
                readonly HINGE: java.lang.Class<org.spongepowered.api.data.type.Hinge>
                // @ts-ignore
                readonly HORSE_COLOR: java.lang.Class<org.spongepowered.api.data.type.HorseColor>
                // @ts-ignore
                readonly HORSE_STYLE: java.lang.Class<org.spongepowered.api.data.type.HorseStyle>
                // @ts-ignore
                readonly INSTRUMENT_TYPE: java.lang.Class<org.spongepowered.api.data.type.InstrumentType>
                // @ts-ignore
                readonly INVENTORY_ARCHETYPE: java.lang.Class<org.spongepowered.api.item.inventory.InventoryArchetype>
                // @ts-ignore
                readonly ITEM_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.ItemStatistic>
                // @ts-ignore
                readonly ITEM_TYPE: java.lang.Class<org.spongepowered.api.item.ItemType>
                // @ts-ignore
                readonly LLAMA_VARIANT: java.lang.Class<org.spongepowered.api.data.type.LlamaVariant>
                // @ts-ignore
                readonly LOG_AXIS: java.lang.Class<org.spongepowered.api.data.type.LogAxis>
                // @ts-ignore
                readonly MUSHROOM_TYPE: java.lang.Class<org.spongepowered.api.world.gen.type.MushroomType>
                // @ts-ignore
                readonly NOTE_PITCH: java.lang.Class<org.spongepowered.api.data.type.NotePitch>
                // @ts-ignore
                readonly OBJECTIVE_DISPLAY_MODE: java.lang.Class<org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode>
                // @ts-ignore
                readonly OCELOT_TYPE: java.lang.Class<org.spongepowered.api.data.type.OcelotType>
                // @ts-ignore
                readonly PARROT_VARIANT: java.lang.Class<org.spongepowered.api.data.type.ParrotVariant>
                // @ts-ignore
                readonly PARTICLE_OPTION: java.lang.Class<org.spongepowered.api.effect.particle.ParticleOption>
                // @ts-ignore
                readonly PARTICLE_TYPE: java.lang.Class<org.spongepowered.api.effect.particle.ParticleType>
                // @ts-ignore
                readonly PICKUP_RULE: java.lang.Class<org.spongepowered.api.data.type.PickupRule>
                // @ts-ignore
                readonly PISTON_TYPE: java.lang.Class<org.spongepowered.api.data.type.PistonType>
                // @ts-ignore
                readonly PLANT_TYPE: java.lang.Class<org.spongepowered.api.data.type.PlantType>
                // @ts-ignore
                readonly POPULATOR_OBJECT: java.lang.Class<org.spongepowered.api.world.gen.PopulatorObject>
                // @ts-ignore
                readonly POPULATOR_TYPE: java.lang.Class<org.spongepowered.api.world.gen.PopulatorType>
                // @ts-ignore
                readonly PORTAL_AGENT_TYPE: java.lang.Class<org.spongepowered.api.world.PortalAgentType>
                // @ts-ignore
                readonly PORTION_TYPE: java.lang.Class<org.spongepowered.api.data.type.PortionType>
                // @ts-ignore
                readonly POTION_EFFECT_TYPE: java.lang.Class<org.spongepowered.api.effect.potion.PotionEffectType>
                // @ts-ignore
                readonly PRISMARINE_TYPE: java.lang.Class<org.spongepowered.api.data.type.PrismarineType>
                // @ts-ignore
                readonly PROFESSION: java.lang.Class<org.spongepowered.api.data.type.Profession>
                // @ts-ignore
                readonly QUARTZ_TYPE: java.lang.Class<org.spongepowered.api.data.type.QuartzType>
                // @ts-ignore
                readonly QUERY_OPERATION_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.query.QueryOperationType>
                // @ts-ignore
                readonly RABBIT_TYPE: java.lang.Class<org.spongepowered.api.data.type.RabbitType>
                // @ts-ignore
                readonly RAIL_DIRECTION: java.lang.Class<org.spongepowered.api.data.type.RailDirection>
                // @ts-ignore
                readonly RECORD_TYPE: java.lang.Class<org.spongepowered.api.effect.sound.record.RecordType>
                // @ts-ignore
                readonly ROTATION: java.lang.Class<org.spongepowered.api.util.rotation.Rotation>
                // @ts-ignore
                readonly SANDSTONE_TYPE: java.lang.Class<org.spongepowered.api.data.type.SandstoneType>
                // @ts-ignore
                readonly SAND_TYPE: java.lang.Class<org.spongepowered.api.data.type.SandType>
                // @ts-ignore
                readonly SELECTOR_TYPE: java.lang.Class<org.spongepowered.api.text.selector.SelectorType>
                // @ts-ignore
                readonly SERIALIZATION_BEHAVIOR: java.lang.Class<org.spongepowered.api.world.SerializationBehavior>
                // @ts-ignore
                readonly SHRUB_TYPE: java.lang.Class<org.spongepowered.api.data.type.ShrubType>
                // @ts-ignore
                readonly SKIN_PART: java.lang.Class<org.spongepowered.api.data.type.SkinPart>
                // @ts-ignore
                readonly SKULL_TYPE: java.lang.Class<org.spongepowered.api.data.type.SkullType>
                // @ts-ignore
                readonly SLAB_TYPE: java.lang.Class<org.spongepowered.api.data.type.SlabType>
                // @ts-ignore
                readonly SOUND_CATEGORY: java.lang.Class<org.spongepowered.api.effect.sound.SoundCategory>
                // @ts-ignore
                readonly SOUND_TYPE: java.lang.Class<org.spongepowered.api.effect.sound.SoundType>
                // @ts-ignore
                readonly SPAWN_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.spawn.SpawnType>
                // @ts-ignore
                readonly STAIR_SHAPE: java.lang.Class<org.spongepowered.api.data.type.StairShape>
                // @ts-ignore
                readonly STATISTIC: java.lang.Class<org.spongepowered.api.statistic.Statistic>
                // @ts-ignore
                readonly STATISTIC_TYPE: java.lang.Class<org.spongepowered.api.statistic.StatisticType>
                // @ts-ignore
                readonly STONE_TYPE: java.lang.Class<org.spongepowered.api.data.type.StoneType>
                // @ts-ignore
                readonly STRUCTURE_MODE: java.lang.Class<org.spongepowered.api.data.type.StructureMode>
                // @ts-ignore
                readonly TELEPORT_HELPER_FILTER: java.lang.Class<org.spongepowered.api.world.teleport.TeleportHelperFilter>
                // @ts-ignore
                readonly TELEPORT_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.teleport.TeleportType>
                // @ts-ignore
                readonly TEXT_COLOR: java.lang.Class<org.spongepowered.api.text.format.TextColor>
                // @ts-ignore
                readonly TEXT_SERIALIZER: java.lang.Class<org.spongepowered.api.text.serializer.TextSerializer>
                // @ts-ignore
                readonly TEXT_STYLE: java.lang.Class<org.spongepowered.api.text.format.TextStyle>
                // @ts-ignore
                readonly TILE_ENTITY_TYPE: java.lang.Class<org.spongepowered.api.block.tileentity.TileEntityType>
                // @ts-ignore
                readonly TOOL_TYPE: java.lang.Class<org.spongepowered.api.data.type.ToolType>
                // @ts-ignore
                readonly TRANSACTION_TYPE: java.lang.Class<org.spongepowered.api.service.economy.transaction.TransactionType>
                // @ts-ignore
                readonly TREE_TYPE: java.lang.Class<org.spongepowered.api.data.type.TreeType>
                // @ts-ignore
                readonly TRIGGER: java.lang.Class<org.spongepowered.api.advancement.criteria.trigger.Trigger>
                // @ts-ignore
                readonly VIRTUAL_BIOME_TYPE: java.lang.Class<org.spongepowered.api.world.biome.VirtualBiomeType>
                // @ts-ignore
                readonly VISIBILITY: java.lang.Class<org.spongepowered.api.scoreboard.Visibility>
                // @ts-ignore
                readonly WALL_TYPE: java.lang.Class<org.spongepowered.api.data.type.WallType>
                // @ts-ignore
                readonly WEATHER: java.lang.Class<org.spongepowered.api.world.weather.Weather>
                // @ts-ignore
                readonly WIRE_ATTACHMENT_TYPE: java.lang.Class<org.spongepowered.api.data.type.WireAttachmentType>
                // @ts-ignore
                readonly WORLD_ARCHETYPE: java.lang.Class<org.spongepowered.api.world.WorldArchetype>
                // @ts-ignore
                readonly WORLD_GENERATOR_MODIFIER: java.lang.Class<org.spongepowered.api.world.gen.WorldGeneratorModifier>
                // @ts-ignore
                readonly WORN_EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.WornEquipmentType>
            }
        }
    }
}
