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
                public static readonly ADVANCEMENT: java.lang.Class<org.spongepowered.api.advancement.Advancement>
                // @ts-ignore
                public static readonly ADVANCEMENT_TREE: java.lang.Class<org.spongepowered.api.advancement.AdvancementTree>
                // @ts-ignore
                public static readonly ADVANCEMENT_TYPE: java.lang.Class<org.spongepowered.api.advancement.AdvancementType>
                // @ts-ignore
                public static readonly AI_TASK_TYPE: java.lang.Class<org.spongepowered.api.entity.ai.task.AITaskType>
                // @ts-ignore
                public static readonly ARMOR_TYPE: java.lang.Class<org.spongepowered.api.data.type.ArmorType>
                // @ts-ignore
                public static readonly ART: java.lang.Class<org.spongepowered.api.data.type.Art>
                // @ts-ignore
                public static readonly BANNER_PATTERN_SHAPE: java.lang.Class<org.spongepowered.api.data.type.BannerPatternShape>
                // @ts-ignore
                public static readonly BAN_TYPE: java.lang.Class<org.spongepowered.api.util.ban.BanType>
                // @ts-ignore
                public static readonly BIG_MUSHROOM_TYPE: java.lang.Class<org.spongepowered.api.data.type.BigMushroomType>
                // @ts-ignore
                public static readonly BIOME_TREE_TYPE: java.lang.Class<org.spongepowered.api.world.gen.type.BiomeTreeType>
                // @ts-ignore
                public static readonly BIOME_TYPE: java.lang.Class<org.spongepowered.api.world.biome.BiomeType>
                // @ts-ignore
                public static readonly BLOCK_PALETTE_TYPE: java.lang.Class<org.spongepowered.api.world.schematic.BlockPaletteType>
                // @ts-ignore
                public static readonly BLOCK_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.BlockStatistic>
                // @ts-ignore
                public static readonly BLOCK_TYPE: java.lang.Class<org.spongepowered.api.block.BlockType>
                // @ts-ignore
                public static readonly BODY_PART: java.lang.Class<org.spongepowered.api.data.type.BodyPart>
                // @ts-ignore
                public static readonly BOSS_BAR_COLOR: java.lang.Class<org.spongepowered.api.boss.BossBarColor>
                // @ts-ignore
                public static readonly BOSS_BAR_OVERLAY: java.lang.Class<org.spongepowered.api.boss.BossBarOverlay>
                // @ts-ignore
                public static readonly BRICK_TYPE: java.lang.Class<org.spongepowered.api.data.type.BrickType>
                // @ts-ignore
                public static readonly CAREER: java.lang.Class<org.spongepowered.api.data.type.Career>
                // @ts-ignore
                public static readonly CHAT_TYPE: java.lang.Class<org.spongepowered.api.text.chat.ChatType>
                // @ts-ignore
                public static readonly CHAT_VISIBILITY: java.lang.Class<org.spongepowered.api.text.chat.ChatVisibility>
                // @ts-ignore
                public static readonly COAL_TYPE: java.lang.Class<org.spongepowered.api.data.type.CoalType>
                // @ts-ignore
                public static readonly COLLISION_RULE: java.lang.Class<org.spongepowered.api.scoreboard.CollisionRule>
                // @ts-ignore
                public static readonly COMPARISON_TYPE: java.lang.Class<org.spongepowered.api.data.type.ComparatorType>
                // @ts-ignore
                public static readonly COOKED_FISH: java.lang.Class<org.spongepowered.api.data.type.CookedFish>
                // @ts-ignore
                public static readonly CRAFTING_RECIPES: java.lang.Class<org.spongepowered.api.item.recipe.crafting.CraftingRecipe>
                // @ts-ignore
                public static readonly CRITERION: java.lang.Class<org.spongepowered.api.scoreboard.critieria.Criterion>
                // @ts-ignore
                public static readonly CURRENCY: java.lang.Class<org.spongepowered.api.service.economy.Currency>
                // @ts-ignore
                public static readonly DAMAGE_MODIFIER_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>
                // @ts-ignore
                public static readonly DAMAGE_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.damage.DamageType>
                // @ts-ignore
                public static readonly DATA_FORMAT: java.lang.Class<org.spongepowered.api.data.persistence.DataFormat>
                // @ts-ignore
                public static readonly DATA_TRANSLATOR: java.lang.Class<org.spongepowered.api.data.persistence.DataTranslator<any>>
                // @ts-ignore
                public static readonly DIFFICULTY: java.lang.Class<org.spongepowered.api.world.difficulty.Difficulty>
                // @ts-ignore
                public static readonly DIMENSION_TYPE: java.lang.Class<org.spongepowered.api.world.DimensionType>
                // @ts-ignore
                public static readonly DIRT_TYPE: java.lang.Class<org.spongepowered.api.data.type.DirtType>
                // @ts-ignore
                public static readonly DISGUISED_BLOCK_TYPE: java.lang.Class<org.spongepowered.api.data.type.DisguisedBlockType>
                // @ts-ignore
                public static readonly DISMOUNT_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.dismount.DismountType>
                // @ts-ignore
                public static readonly DISPLAY_SLOT: java.lang.Class<org.spongepowered.api.scoreboard.displayslot.DisplaySlot>
                // @ts-ignore
                public static readonly DOUBLE_PLANT_TYPE: java.lang.Class<org.spongepowered.api.data.type.DoublePlantType>
                // @ts-ignore
                public static readonly DYE_COLOR: java.lang.Class<org.spongepowered.api.data.type.DyeColor>
                /**
                 * Use the replacement, {@link #ENCHANTMENT_TYPE} instead.
                 * @deprecated Use {#link #ENCHANTMENT_TYPE} instead
                 */
                // @ts-ignore
                public static readonly ENCHANTMENT: java.lang.Class<org.spongepowered.api.item.enchantment.EnchantmentType>
                // @ts-ignore
                public static readonly ENCHANTMENT_TYPE: java.lang.Class<org.spongepowered.api.item.enchantment.EnchantmentType>
                // @ts-ignore
                public static readonly ENTITY_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.EntityStatistic>
                // @ts-ignore
                public static readonly ENTITY_TYPE: java.lang.Class<org.spongepowered.api.entity.EntityType>
                // @ts-ignore
                public static readonly EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                // @ts-ignore
                public static readonly EVENT_CONTEXT_KEY: java.lang.Class<org.spongepowered.api.event.cause.EventContextKey<any>>
                // @ts-ignore
                public static readonly FIREWORK_SHAPE: java.lang.Class<org.spongepowered.api.item.FireworkShape>
                // @ts-ignore
                public static readonly FISH: java.lang.Class<org.spongepowered.api.data.type.Fish>
                // @ts-ignore
                public static readonly FLUID_TYPE: java.lang.Class<org.spongepowered.api.extra.fluid.FluidType>
                // @ts-ignore
                public static readonly GAME_MODE: java.lang.Class<org.spongepowered.api.entity.living.player.gamemode.GameMode>
                // @ts-ignore
                public static readonly GENERATOR_TYPE: java.lang.Class<org.spongepowered.api.world.GeneratorType>
                // @ts-ignore
                public static readonly GOAL_TYPE: java.lang.Class<org.spongepowered.api.entity.ai.GoalType>
                // @ts-ignore
                public static readonly GOLDEN_APPLE: java.lang.Class<org.spongepowered.api.data.type.GoldenApple>
                // @ts-ignore
                public static readonly HAND_PREFERENCE: java.lang.Class<org.spongepowered.api.data.type.HandPreference>
                // @ts-ignore
                public static readonly HAND_TYPE: java.lang.Class<org.spongepowered.api.data.type.HandType>
                // @ts-ignore
                public static readonly HEALING_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.health.HealingType>
                // @ts-ignore
                public static readonly HEALTH_MODIFIER_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.health.HealthModifierType>
                // @ts-ignore
                public static readonly HELD_EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.HeldEquipmentType>
                // @ts-ignore
                public static readonly HINGE: java.lang.Class<org.spongepowered.api.data.type.Hinge>
                // @ts-ignore
                public static readonly HORSE_COLOR: java.lang.Class<org.spongepowered.api.data.type.HorseColor>
                // @ts-ignore
                public static readonly HORSE_STYLE: java.lang.Class<org.spongepowered.api.data.type.HorseStyle>
                // @ts-ignore
                public static readonly INSTRUMENT_TYPE: java.lang.Class<org.spongepowered.api.data.type.InstrumentType>
                // @ts-ignore
                public static readonly INVENTORY_ARCHETYPE: java.lang.Class<org.spongepowered.api.item.inventory.InventoryArchetype>
                // @ts-ignore
                public static readonly ITEM_STATISTIC: java.lang.Class<org.spongepowered.api.statistic.ItemStatistic>
                // @ts-ignore
                public static readonly ITEM_TYPE: java.lang.Class<org.spongepowered.api.item.ItemType>
                // @ts-ignore
                public static readonly LLAMA_VARIANT: java.lang.Class<org.spongepowered.api.data.type.LlamaVariant>
                // @ts-ignore
                public static readonly LOG_AXIS: java.lang.Class<org.spongepowered.api.data.type.LogAxis>
                // @ts-ignore
                public static readonly MUSHROOM_TYPE: java.lang.Class<org.spongepowered.api.world.gen.type.MushroomType>
                // @ts-ignore
                public static readonly NOTE_PITCH: java.lang.Class<org.spongepowered.api.data.type.NotePitch>
                // @ts-ignore
                public static readonly OBJECTIVE_DISPLAY_MODE: java.lang.Class<org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode>
                // @ts-ignore
                public static readonly OCELOT_TYPE: java.lang.Class<org.spongepowered.api.data.type.OcelotType>
                // @ts-ignore
                public static readonly PARROT_VARIANT: java.lang.Class<org.spongepowered.api.data.type.ParrotVariant>
                // @ts-ignore
                public static readonly PARTICLE_OPTION: java.lang.Class<org.spongepowered.api.effect.particle.ParticleOption<any>>
                // @ts-ignore
                public static readonly PARTICLE_TYPE: java.lang.Class<org.spongepowered.api.effect.particle.ParticleType>
                // @ts-ignore
                public static readonly PICKUP_RULE: java.lang.Class<org.spongepowered.api.data.type.PickupRule>
                // @ts-ignore
                public static readonly PISTON_TYPE: java.lang.Class<org.spongepowered.api.data.type.PistonType>
                // @ts-ignore
                public static readonly PLANT_TYPE: java.lang.Class<org.spongepowered.api.data.type.PlantType>
                // @ts-ignore
                public static readonly POPULATOR_OBJECT: java.lang.Class<org.spongepowered.api.world.gen.PopulatorObject>
                // @ts-ignore
                public static readonly POPULATOR_TYPE: java.lang.Class<org.spongepowered.api.world.gen.PopulatorType>
                // @ts-ignore
                public static readonly PORTAL_AGENT_TYPE: java.lang.Class<org.spongepowered.api.world.PortalAgentType>
                // @ts-ignore
                public static readonly PORTION_TYPE: java.lang.Class<org.spongepowered.api.data.type.PortionType>
                // @ts-ignore
                public static readonly POTION_EFFECT_TYPE: java.lang.Class<org.spongepowered.api.effect.potion.PotionEffectType>
                // @ts-ignore
                public static readonly PRISMARINE_TYPE: java.lang.Class<org.spongepowered.api.data.type.PrismarineType>
                // @ts-ignore
                public static readonly PROFESSION: java.lang.Class<org.spongepowered.api.data.type.Profession>
                // @ts-ignore
                public static readonly QUARTZ_TYPE: java.lang.Class<org.spongepowered.api.data.type.QuartzType>
                // @ts-ignore
                public static readonly QUERY_OPERATION_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.query.QueryOperationType<any>>
                // @ts-ignore
                public static readonly RABBIT_TYPE: java.lang.Class<org.spongepowered.api.data.type.RabbitType>
                // @ts-ignore
                public static readonly RAIL_DIRECTION: java.lang.Class<org.spongepowered.api.data.type.RailDirection>
                // @ts-ignore
                public static readonly RECORD_TYPE: java.lang.Class<org.spongepowered.api.effect.sound.record.RecordType>
                // @ts-ignore
                public static readonly ROTATION: java.lang.Class<org.spongepowered.api.util.rotation.Rotation>
                // @ts-ignore
                public static readonly SANDSTONE_TYPE: java.lang.Class<org.spongepowered.api.data.type.SandstoneType>
                // @ts-ignore
                public static readonly SAND_TYPE: java.lang.Class<org.spongepowered.api.data.type.SandType>
                // @ts-ignore
                public static readonly SELECTOR_TYPE: java.lang.Class<org.spongepowered.api.text.selector.SelectorType>
                // @ts-ignore
                public static readonly SERIALIZATION_BEHAVIOR: java.lang.Class<org.spongepowered.api.world.SerializationBehavior>
                // @ts-ignore
                public static readonly SHRUB_TYPE: java.lang.Class<org.spongepowered.api.data.type.ShrubType>
                // @ts-ignore
                public static readonly SKIN_PART: java.lang.Class<org.spongepowered.api.data.type.SkinPart>
                // @ts-ignore
                public static readonly SKULL_TYPE: java.lang.Class<org.spongepowered.api.data.type.SkullType>
                // @ts-ignore
                public static readonly SLAB_TYPE: java.lang.Class<org.spongepowered.api.data.type.SlabType>
                // @ts-ignore
                public static readonly SOUND_CATEGORY: java.lang.Class<org.spongepowered.api.effect.sound.SoundCategory>
                // @ts-ignore
                public static readonly SOUND_TYPE: java.lang.Class<org.spongepowered.api.effect.sound.SoundType>
                // @ts-ignore
                public static readonly SPAWN_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.spawn.SpawnType>
                // @ts-ignore
                public static readonly STAIR_SHAPE: java.lang.Class<org.spongepowered.api.data.type.StairShape>
                // @ts-ignore
                public static readonly STATISTIC: java.lang.Class<org.spongepowered.api.statistic.Statistic>
                // @ts-ignore
                public static readonly STATISTIC_TYPE: java.lang.Class<org.spongepowered.api.statistic.StatisticType>
                // @ts-ignore
                public static readonly STONE_TYPE: java.lang.Class<org.spongepowered.api.data.type.StoneType>
                // @ts-ignore
                public static readonly STRUCTURE_MODE: java.lang.Class<org.spongepowered.api.data.type.StructureMode>
                // @ts-ignore
                public static readonly TELEPORT_HELPER_FILTER: java.lang.Class<org.spongepowered.api.world.teleport.TeleportHelperFilter>
                // @ts-ignore
                public static readonly TELEPORT_TYPE: java.lang.Class<org.spongepowered.api.event.cause.entity.teleport.TeleportType>
                // @ts-ignore
                public static readonly TEXT_COLOR: java.lang.Class<org.spongepowered.api.text.format.TextColor>
                // @ts-ignore
                public static readonly TEXT_SERIALIZER: java.lang.Class<org.spongepowered.api.text.serializer.TextSerializer>
                // @ts-ignore
                public static readonly TEXT_STYLE: java.lang.Class<org.spongepowered.api.text.format.TextStyle>
                // @ts-ignore
                public static readonly TILE_ENTITY_TYPE: java.lang.Class<org.spongepowered.api.block.tileentity.TileEntityType>
                // @ts-ignore
                public static readonly TOOL_TYPE: java.lang.Class<org.spongepowered.api.data.type.ToolType>
                // @ts-ignore
                public static readonly TRANSACTION_TYPE: java.lang.Class<org.spongepowered.api.service.economy.transaction.TransactionType>
                // @ts-ignore
                public static readonly TREE_TYPE: java.lang.Class<org.spongepowered.api.data.type.TreeType>
                // @ts-ignore
                public static readonly TRIGGER: java.lang.Class<org.spongepowered.api.advancement.criteria.trigger.Trigger<any>>
                // @ts-ignore
                public static readonly VIRTUAL_BIOME_TYPE: java.lang.Class<org.spongepowered.api.world.biome.VirtualBiomeType>
                // @ts-ignore
                public static readonly VISIBILITY: java.lang.Class<org.spongepowered.api.scoreboard.Visibility>
                // @ts-ignore
                public static readonly WALL_TYPE: java.lang.Class<org.spongepowered.api.data.type.WallType>
                // @ts-ignore
                public static readonly WEATHER: java.lang.Class<org.spongepowered.api.world.weather.Weather>
                // @ts-ignore
                public static readonly WIRE_ATTACHMENT_TYPE: java.lang.Class<org.spongepowered.api.data.type.WireAttachmentType>
                // @ts-ignore
                public static readonly WORLD_ARCHETYPE: java.lang.Class<org.spongepowered.api.world.WorldArchetype>
                // @ts-ignore
                public static readonly WORLD_GENERATOR_MODIFIER: java.lang.Class<org.spongepowered.api.world.gen.WorldGeneratorModifier>
                // @ts-ignore
                public static readonly WORN_EQUIPMENT_TYPE: java.lang.Class<org.spongepowered.api.item.inventory.equipment.WornEquipmentType>
            }
        }
    }
}
