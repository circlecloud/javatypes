declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    /**
                     * An enumeration of known {@link Key}s used throughout the API.
                     */
                    // @ts-ignore
                    class Keys extends java.lang.Object {
                        /**
                         * Represents the {@link Key} for the absorption amount of any
                         * {@link Living} entity.
                         * @see AbsorptionData#absorption()
                         */
                        // @ts-ignore
                        readonly ABSORPTION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the acceleration of a {@link Fireball}.
                         * @see AccelerationData#acceleration()
                         */
                        // @ts-ignore
                        readonly ACCELERATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the item a {@link Living} is using.
                         * For example a player eating a food or blocking with a shield.
                         * <p>If there is no item, the snapshot will be empty. You can check this
                         * with {@link ItemStackSnapshot#isEmpty()}.</p>
                         * @see ActiveItemData#activeItem()
                         */
                        // @ts-ignore
                        readonly ACTIVE_ITEM: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        /**
                         * Represents the {@link Key} for the "affecting spawning" state of
                         * {@link Player}s.
                         * <p>A {@link Player} who does not affect spawning will be treated as a
                         * spectator in regards to spawning. A {@link MobSpawner} will not be
                         * activated by his presence and mobs around him may naturally despawn
                         * if there is no other Player around who affects spawning.</p>
                         * @see AffectsSpawningData#affectsSpawning()
                         */
                        // @ts-ignore
                        readonly AFFECTS_SPAWNING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the age of any {@link Ageable} creature
                         * in ticks.
                         * @see AgeableData#age()
                         */
                        // @ts-ignore
                        readonly AGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether an {@link Agent}s AI is enabled.
                         * @see AgentData#aiEnabled()
                         */
                        // @ts-ignore
                        readonly AI_ENABLED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for how angry an {@link Entity} is. This
                         * applies mostly to {@link ZombiePigman}.
                         * <p>Unlike {@link #ANGRY}, the aggressiveness represented by this key may
                         * fade over time and the entity will become peaceful again once its anger
                         * reaches its minimum.</p>
                         * @see AngerableData#angerLevel()
                         */
                        // @ts-ignore
                        readonly ANGER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is currently
                         * aggressive. This mostly applies to wolves.
                         * @see AggressiveData#aggressive()
                         */
                        // @ts-ignore
                        readonly ANGRY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the age (in ticks) of an
                         * {@link AreaEffectCloud} created by a lingering potion.
                         * @see AreaEffectCloudData#age()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_AGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the color of an {@link AreaEffectCloud}
                         * created by a lingering potion.
                         * @see AreaEffectCloudData#color()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Color>>
                        /**
                         * Represents the {@link Key} for the maximum age (in ticks) of an
                         * {@link AreaEffectCloud} created by a lingering potion.
                         * @see AreaEffectCloudData#duration()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_DURATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the amount of ticks the duration of an
                         * {@link AreaEffectCloud} is increased or reduced when it applies its
                         * effect.
                         * @see AreaEffectCloudData#durationOnUse()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_DURATION_ON_USE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the particle type of an
                         * {@link AreaEffectCloud} created by a lingering potion.
                         * @see AreaEffectCloudData#particleType()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_PARTICLE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.effect.particle.ParticleType>>
                        /**
                         * Represents the {@link Key} for the radius of an {@link AreaEffectCloud}.
                         * @see AreaEffectCloudData#radius()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_RADIUS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the amount the radius of an
                         * {@link AreaEffectCloud} grows or shrinks each time it applies its
                         * effect.
                         * @see AreaEffectCloudData#radiusOnUse()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_RADIUS_ON_USE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the amount the radius of an
                         * {@link AreaEffectCloud} grows or shrinks per tick.
                         * @see AreaEffectCloudData#radiusOnUse()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_RADIUS_PER_TICK: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the delay (in ticks) after which an
                         * {@link AreaEffectCloud} will reapply its effect on a previously
                         * affected {@link Entity}.
                         * @see AreaEffectCloudData#applicationDelay()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_REAPPLICATION_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the duration in ticks after which an
                         * {@link AreaEffectCloud} will begin to apply its effect to entities.
                         * @see AreaEffectCloudData#waitTime()
                         */
                        // @ts-ignore
                        readonly AREA_EFFECT_CLOUD_WAIT_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether an {@link ArmorStand}'s arms are
                         * visible.
                         * @see ArmorStandData#arms()
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_HAS_ARMS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link ArmorStand} has a
                         * visible base plate.
                         * @see ArmorStandData#basePlate()
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_HAS_BASE_PLATE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link ArmorStand} is small.
                         * @see ArmorStandData#small()
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_IS_SMALL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link ArmorStand} has a
                         * significantly smaller collision box in order to act as a marker.
                         * @see ArmorStandData#marker()
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_MARKER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether players are prevented from taking
                         * items from an equipment slot on an {@link ArmorStand}
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_TAKING_DISABLED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>>
                        /**
                         * Represents the {@link Key} for whether players are prevented from taking
                         * items from an equipment slot on an {@link ArmorStand}
                         */
                        // @ts-ignore
                        readonly ARMOR_STAND_PLACING_DISABLED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>>
                        /**
                         * Represents the {@link Key} for the type of {@link Art} shown by
                         * (usually) a {@link Painting}.
                         * @see ArtData
                         */
                        // @ts-ignore
                        readonly ART: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.Art>>
                        /**
                         * Represents the {@link Key} for representing whether a {@link BlockState}
                         * is "attached" to another block.
                         * @see AttachedData#attached()
                         */
                        // @ts-ignore
                        readonly ATTACHED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the damage dealt by a
                         * {@link DamagingProjectile}, e.g. an {@link Arrow}.
                         * @see DamagingData#damage()
                         */
                        // @ts-ignore
                        readonly ATTACK_DAMAGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for representing the {@link Axis} direction
                         * of a {@link BlockState}.
                         * @see AxisData
                         */
                        // @ts-ignore
                        readonly AXIS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Axis>>
                        /**
                         * Represents the {@link Key} for a {@link Banner}'s base {@link DyeColor}.
                         * @see BannerData#baseColor()
                         */
                        // @ts-ignore
                        readonly BANNER_BASE_COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>>
                        /**
                         * Represents the {@link Key} for a {@link Banner}'s patterns.
                         * @see BannerData#patternsList()
                         */
                        // @ts-ignore
                        readonly BANNER_PATTERNS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.PatternListValue>
                        /**
                         * Represents the {@link Key} for the width of the physical form of an
                         * {@link Entity}.
                         * <p>Together with {@link #HEIGHT} this defines the size of an
                         * {@link Entity}.</p>
                         * @see SizeData#base()
                         */
                        // @ts-ignore
                        readonly BASE_SIZE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float>>
                        /**
                         * Represents the {@link Key} for the base vehicle a passenger is riding
                         * at the moment. This may be different from {@link Keys#VEHICLE} as the
                         * vehicle an {@link Entity} is riding may itself be the passenger of
                         * another vehicle.
                         * @see VehicleData#baseVehicle()
                         */
                        // @ts-ignore
                        readonly BASE_VEHICLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>>
                        /**
                         * Represents the {@link Key} for a {@link Beacon}'s primary effect.
                         * @see BeaconData#primaryEffect()
                         */
                        // @ts-ignore
                        readonly BEACON_PRIMARY_EFFECT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>>
                        /**
                         * Represents the {@link Key} for a {@link Beacon}'s secondary effect.
                         * @see BeaconData#secondaryEffect()
                         */
                        // @ts-ignore
                        readonly BEACON_SECONDARY_EFFECT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>>
                        /**
                         * Represents the {@link Key} for representing the {@link BigMushroomType}
                         * of a {@link BlockState}.
                         * @see BigMushroomData
                         */
                        // @ts-ignore
                        readonly BIG_MUSHROOM_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.BigMushroomType>>
                        /**
                         * Represents the {@link Key} for the rotation of specific body parts.
                         * <p>This value provides a mapping, effectively combining the data
                         * referenced by {@link #HEAD_ROTATION}, {@link #CHEST_ROTATION},
                         * {@link #RIGHT_ARM_ROTATION}, {@link #LEFT_ARM_ROTATION},
                         * {@link #RIGHT_LEG_ROTATION}, and {@link #LEFT_LEG_ROTATION}.</p>
                         * @see BodyPartRotationalData#partRotation()
                         */
                        // @ts-ignore
                        readonly BODY_ROTATIONS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.data.type.BodyPart, Vector3d>>
                        /**
                         * Represents the {@link Key} for the author of a
                         * {@link ItemTypes#WRITTEN_BOOK}.
                         * @see AuthorData#author()
                         */
                        // @ts-ignore
                        readonly BOOK_AUTHOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.text.Text>>
                        /**
                         * Represents the {@link Key} for the content of a
                         * {@link ItemTypes#WRITTEN_BOOK}.
                         * <p>Use {@link Keys#PLAIN_BOOK_PAGES} if you wish to inspect the contents
                         * of a {@link ItemTypes#WRITABLE_BOOK}.</p>
                         * @see PagedData#pages()
                         */
                        // @ts-ignore
                        readonly BOOK_PAGES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>>
                        /**
                         * Represents the {@link Key} for the {@link BlockType}s able to be broken
                         * by an item.
                         * @see BreakableData#breakable()
                         */
                        // @ts-ignore
                        readonly BREAKABLE_BLOCK_TYPES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.block.BlockType>>
                        /**
                         * Represents the {@link Key} for representing the {@link BrickType}
                         * of a {@link BlockState}.
                         * @see BrickData
                         */
                        // @ts-ignore
                        readonly BRICK_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.BrickType>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} can breed.
                         * @see BreedableData#breedable()
                         */
                        // @ts-ignore
                        readonly CAN_BREED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link FallingBlock} can drop
                         * as an item.
                         * @see FallingBlockData#canDropAsItem()
                         */
                        // @ts-ignore
                        readonly CAN_DROP_AS_ITEM: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Humanoid} can fly.
                         * <p>For a {@link Player} this means he is able to toggle flight mode by
                         * double-tapping his jump button.</p>
                         * @see FlyingAbilityData#canFly()
                         */
                        // @ts-ignore
                        readonly CAN_FLY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Living} entity may
                         * change blocks. This mostly applies to {@link Enderman} or
                         * {@link Creeper}s, but also to some projectiles like {@link Fireball}s.
                         * @see GriefingData#canGrief()
                         */
                        // @ts-ignore
                        readonly CAN_GRIEF: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link FallingBlock} will place
                         * itself upon landing.
                         * @see FallingBlockData#canPlaceAsBlock()
                         */
                        // @ts-ignore
                        readonly CAN_PLACE_AS_BLOCK: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the {@link Villager}'s {@link Career}.
                         * @see CareerData
                         */
                        // @ts-ignore
                        readonly CAREER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.Career>>
                        /**
                         * Represents the {@link Key} for the rotation of the
                         * {@link BodyParts#CHEST}.
                         * @see BodyPartRotationalData#bodyRotation()
                         */
                        // @ts-ignore
                        readonly CHEST_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the {@link CoalType} of an
                         * {@link ItemStack} or {@link ItemStackSnapshot} of type
                         * {@link ItemTypes#COAL}.
                         * @see CoalData
                         */
                        // @ts-ignore
                        readonly COAL_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.CoalType>>
                        /**
                         * Represents the {@link Key} for the {@link Color} of an
                         * {@link ItemStack}.
                         * @see ColoredData#color()
                         */
                        // @ts-ignore
                        readonly COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Color>>
                        /**
                         * Represents a key for the stored command, mostly related to
                         * {@link CommandBlock}s and {@link CommandBlockMinecart}s.
                         * @see CommandData#storedCommand()
                         */
                        // @ts-ignore
                        readonly COMMAND: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.String>>
                        /**
                         * Represents the {@link Key} for representing the {@link ComparatorType}
                         * of a {@link BlockState}.
                         * @see ComparatorData
                         */
                        // @ts-ignore
                        readonly COMPARATOR_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.ComparatorType>>
                        /**
                         * Represents the {@link Key} for representing the connected directions
                         * of a {@link BlockState}.
                         * @see ConnectedDirectionData#connectedDirections()
                         */
                        // @ts-ignore
                        readonly CONNECTED_DIRECTIONS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.util.Direction>>
                        /**
                         * Represents the {@link Key} for representing the "connected to the east"
                         * of a {@link BlockState}.
                         * @see ConnectedDirectionData#connectedEast()
                         */
                        // @ts-ignore
                        readonly CONNECTED_EAST: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "connected to the north"
                         * state of a {@link BlockState}.
                         * @see ConnectedDirectionData#connectedNorth()
                         */
                        // @ts-ignore
                        readonly CONNECTED_NORTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "connected to the south"
                         * state of a {@link BlockState}.
                         * @see ConnectedDirectionData#connectedSouth()
                         */
                        // @ts-ignore
                        readonly CONNECTED_SOUTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "connected to the west"
                         * state of a {@link BlockState}.
                         * @see ConnectedDirectionData#connectedWest()
                         */
                        // @ts-ignore
                        readonly CONNECTED_WEST: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the amount of experience points stored
                         * by an {@link ExperienceOrb}.
                         * @see ExpOrbData#experience()
                         */
                        // @ts-ignore
                        readonly CONTAINED_EXPERIENCE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the type of {@link CookedFish} an
                         * {@link ItemStack} with {@link ItemTypes#COOKED_FISH} has.
                         * @see CookedFishData
                         */
                        // @ts-ignore
                        readonly COOKED_FISH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.CookedFish>>
                        /**
                         * Represents the {@link Key} for the amount of ticks a {@link Hopper} has
                         * to cool down before transferring the next item.
                         * @see CooldownData#cooldown()
                         */
                        // @ts-ignore
                        readonly COOLDOWN: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether a {@link Creeper} is charged.
                         * @see ChargedData#charged()
                         */
                        // @ts-ignore
                        readonly CREEPER_CHARGED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether the next attack of an
                         * {@link Entity} will be a critical hit.
                         * @see CriticalHitData#criticalHit()
                         */
                        // @ts-ignore
                        readonly CRITICAL_HIT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a custom name is visible on an
                         * {@link Entity}.
                         * @see CustomNameVisibleData#customNameVisible()
                         */
                        // @ts-ignore
                        readonly CUSTOM_NAME_VISIBLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the damage dealt towards entities of a
                         * specific {@link EntityType}. Types not present in this mapping will be
                         * dealt damage to according to {@link #ATTACK_DAMAGE}.
                         * @see DamagingData#damageForEntity()
                         */
                        // @ts-ignore
                        readonly DAMAGE_ENTITY_MAP: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.entity.EntityType, java.lang.Double>>
                        /**
                         * Represents the {@link Key} for representing whether a {@link BlockState}
                         * will decay. This usually applies to {@link BlockTypes#LEAVES}.
                         * @see DecayableData#decayable()
                         */
                        // @ts-ignore
                        readonly DECAYABLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the delay on a redstone repeater.
                         * @see DelayableData#delay()
                         */
                        // @ts-ignore
                        readonly DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the despawn delay
                         * of an {@link Item}.
                         * @see DespawnDelayData#delay()
                         */
                        // @ts-ignore
                        readonly DESPAWN_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the {@link Direction}
                         * of a {@link BlockState} or an {@link Entity}.
                         * @see DirectionalData#direction()
                         */
                        // @ts-ignore
                        readonly DIRECTION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Direction>>
                        /**
                         * Represents the {@link Key} for representing the {@link DirtType}
                         * of a {@link BlockState}.
                         * @see DirtData
                         */
                        // @ts-ignore
                        readonly DIRT_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DirtType>>
                        /**
                         * Represents the {@link Key} for representing the "disarmed" state
                         * of a {@link BlockState}. This usually applies to
                         * {@link BlockTypes#TRIPWIRE}s and {@link BlockTypes#TRIPWIRE_HOOK}s.
                         * @see DisarmedData#disarmed()
                         */
                        // @ts-ignore
                        readonly DISARMED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link DisguisedBlockType}
                         * of a {@link BlockState}.
                         * @see DisguisedBlockData
                         */
                        // @ts-ignore
                        readonly DISGUISED_BLOCK_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DisguisedBlockType>>
                        /**
                         * Represents the {@link Key} for the display name of an {@link Entity},
                         * {@link ItemStack} or {@link TileEntity}.
                         * <p>On a {@link ItemTypes#WRITTEN_BOOK} item this will also set the title
                         * of the book.</p>
                         * @see DisplayNameData#displayName()
                         */
                        // @ts-ignore
                        readonly DISPLAY_NAME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.text.Text>>
                        /**
                         * Represents the {@link Key} for representing the dominant {@link HandPreference}
                         * of a {@link Living} entity.
                         * <p><em>NOTE:</em> Does not apply to {@link Player}s as their
                         * {@link HandPreference} can not be changed server-side.
                         * See {@link DominantHandProperty}.</p>
                         * @see DominantHandData#dominantHand()
                         */
                        // @ts-ignore
                        readonly DOMINANT_HAND: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HandPreference>>
                        /**
                         * Represents the {@link Key} for representing the {@link DoublePlantType}
                         * of a {@link BlockState}.
                         * @see DoublePlantData
                         */
                        // @ts-ignore
                        readonly DOUBLE_PLANT_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DoublePlantType>>
                        /**
                         * Represents the {@link Key} for the color of a dyeable block, item or
                         * entity.
                         * @see DyeableData
                         */
                        // @ts-ignore
                        readonly DYE_COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>>
                        /**
                         * Represents the {@link Key} for representing the age of
                         * an {@link EndGateway}.
                         * @see EndGatewayData#age()
                         */
                        // @ts-ignore
                        readonly END_GATEWAY_AGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Long>>
                        /**
                         * Represents the {@link Key} for representing the teleport cooldown of
                         * an {@link EndGateway}.
                         * @see EndGatewayData#teleportCooldown()
                         */
                        // @ts-ignore
                        readonly END_GATEWAY_TELEPORT_COOLDOWN: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing if the exact teleport location
                         * should be used with a {@link EndGateway}.
                         * @see EndGatewayData#exactTeleport()
                         */
                        // @ts-ignore
                        readonly EXACT_TELEPORT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the current level of exhaustion of a
                         * {@link Humanoid}.
                         * <p>Exhaustion will <em>decrease</em> on activities like walking, running
                         * or jumping. Once it reaches 0, the {@link #SATURATION} will decrease and
                         * the exhaustion level will be reset to its maximum.</p>
                         * @see FoodData#exhaustion()
                         */
                        // @ts-ignore
                        readonly EXHAUSTION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for representing the exit
                         * portal {@link Vector3i location} of an {@link EndGateway}.
                         * @see EndGatewayData#exitPosition()
                         */
                        // @ts-ignore
                        readonly EXIT_POSITION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3i>>
                        /**
                         * Represents the {@link Key} for the total experience a {@link Player}
                         * requires to advance from his current level to the next one.
                         * @see ExperienceHolderData#getExperienceBetweenLevels()
                         */
                        // @ts-ignore
                        readonly EXPERIENCE_FROM_START_OF_LEVEL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the current level a {@link Player} has.
                         * @see ExperienceHolderData#level()
                         */
                        // @ts-ignore
                        readonly EXPERIENCE_LEVEL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the amount of experience a {@link Player}
                         * has collected towards the next level.
                         * @see ExperienceHolderData#experienceSinceLevel()
                         */
                        // @ts-ignore
                        readonly EXPERIENCE_SINCE_LEVEL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for after how many ticks an entity or
                         * {@link Weather} will last before expiring.
                         * <p>Usually applies to {@link Endermite}s or {@link Item}s.</p>
                         * @see ExpirableData#expireTicks()
                         */
                        // @ts-ignore
                        readonly EXPIRATION_TICKS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the radius of the {@link Explosion} to
                         * be created by detonating an {@link Explosive}.
                         * <p>May be absent if the explosion radius is unknown because it is either
                         * determined randomly at the time of the explosion or computed from the
                         * context in which the {@link Explosive} explodes.</p>
                         * @see ExplosionRadiusData#explosionRadius()
                         */
                        // @ts-ignore
                        readonly EXPLOSION_RADIUS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing whether a {@link Piston} is
                         * currently extended.
                         * @see ExtendedData#extended()
                         */
                        // @ts-ignore
                        readonly EXTENDED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link FallingBlock} will
                         * damage an {@link Entity} it lands on.
                         * @see FallingBlockData#canHurtEntities()
                         */
                        // @ts-ignore
                        readonly FALLING_BLOCK_CAN_HURT_ENTITIES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the {@link BlockState} of a
                         * {@link FallingBlock}.
                         * @see FallingBlockData#blockState()
                         */
                        // @ts-ignore
                        readonly FALLING_BLOCK_STATE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>>
                        /**
                         * Represents the {@link Key} for how much damage a {@link FallingBlock}
                         * deals to {@link Living} entities it hits.
                         * <p>This damage is capped by {@link #MAX_FALL_DAMAGE}.</p>
                         * @see FallingBlockData#fallDamagePerBlock()
                         */
                        // @ts-ignore
                        readonly FALL_DAMAGE_PER_BLOCK: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for representing the distance an entity has
                         * fallen.
                         * @see FallDistanceData#fallDistance()
                         */
                        // @ts-ignore
                        readonly FALL_DISTANCE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float>>
                        /**
                         * Represents the {@link Key} for the amount of ticks a
                         * {@link FallingBlock} has been falling for.
                         * @see FallingBlockData#fallTime()
                         */
                        // @ts-ignore
                        readonly FALL_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the "filled" state
                         * of a {@link BlockState}.
                         * <p>Usually applies to {@link BlockTypes#END_PORTAL_FRAME}s.</p>
                         * @see FilledData#filled()
                         */
                        // @ts-ignore
                        readonly FILLED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the {@link FireworkEffect}s of a
                         * {@link ItemTypes#FIREWORK_CHARGE}, {@link ItemTypes#FIREWORKS} or a
                         * {@link Firework}.
                         * @see FireworkEffectData#effects()
                         */
                        // @ts-ignore
                        readonly FIREWORK_EFFECTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.FireworkEffect>>
                        /**
                         * Represents the {@link Key} for the flight duration of a firework.
                         * <p>The duration is tiered and will stay partially random. A rocket will
                         * fly for roughly {@code modifier * 10 + (random number from 0 to 13)}
                         * ticks in Vanilla Minecraft.</p>
                         * @see FireworkRocketData#flightModifier()
                         */
                        // @ts-ignore
                        readonly FIREWORK_FLIGHT_MODIFIER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the delay in ticks until the
                         * {@link Entity} will be damaged by the fire.
                         * @see IgniteableData#fireDelay()
                         */
                        // @ts-ignore
                        readonly FIRE_DAMAGE_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the amount of ticks an
                         * {@link Entity} is still burning.
                         * @see IgniteableData#fireTicks()
                         */
                        // @ts-ignore
                        readonly FIRE_TICKS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the time a {@link Player} first played
                         * on the Server.
                         * @see JoinData#firstPlayed()
                         */
                        // @ts-ignore
                        readonly FIRST_DATE_PLAYED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.time.Instant>>
                        /**
                         * Represents the {@link Key} for the {@link Fish} type an {@link Item} or
                         * {@link ItemStack} may have.
                         * <p>Only for {@link ItemTypes#FISH}, for {@link ItemTypes#COOKED_FISH}
                         * see {@link #COOKED_FISH}.</p>
                         * @see FishData
                         */
                        // @ts-ignore
                        readonly FISH_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.Fish>>
                        /**
                         * Represents the {@link Key} for representing the
                         * {@link FluidStackSnapshot} contained within an item container. Item
                         * containers may include buckets and other mod added items.
                         * @see FluidItemData#fluid()
                         */
                        // @ts-ignore
                        readonly FLUID_ITEM_STACK: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.extra.fluid.FluidStackSnapshot>>
                        /**
                         * Represents the {@link Key} for representing the "fluid level" state
                         * of a {@link BlockState}.
                         * @see FluidLevelData#level()
                         */
                        // @ts-ignore
                        readonly FLUID_LEVEL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the directional tank
                         * information.
                         * @see FluidTankData#fluids()
                         */
                        // @ts-ignore
                        readonly FLUID_TANK_CONTENTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.util.Direction, java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>>>
                        /**
                         * Represents the {@link Key} for the speed at which an entity flies.
                         * @see MovementSpeedData#flySpeed()
                         */
                        // @ts-ignore
                        readonly FLYING_SPEED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the food level of a {@link Humanoid}.
                         * @see FoodData#foodLevel()
                         */
                        // @ts-ignore
                        readonly FOOD_LEVEL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the time a {@link FusedExplosive}'s fuse
                         * will burn before the explosion.
                         * @see FuseData#fuseDuration()
                         */
                        // @ts-ignore
                        readonly FUSE_DURATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the {@link GameMode} a {@link Humanoid}
                         * has.
                         * @see GameModeData
                         */
                        // @ts-ignore
                        readonly GAME_MODE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.living.player.gamemode.GameMode>>
                        /**
                         * Represents the {@link Key} for the generation of a
                         * {@link ItemTypes#WRITTEN_BOOK}. Depending on the book's generation
                         * it may be impossible to copy it.
                         * @see GenerationData#generation()
                         */
                        // @ts-ignore
                        readonly GENERATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing whether an entity has a
                         * glowing outline.
                         * @see GlowingData#glowing()
                         */
                        // @ts-ignore
                        readonly GLOWING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the type of a
                         * {@link ItemTypes#GOLDEN_APPLE}.
                         * @see GoldenAppleData
                         */
                        // @ts-ignore
                        readonly GOLDEN_APPLE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.GoldenApple>>
                        /**
                         * Represents the {@link Key} for representing the "growth stage" state
                         * of a {@link BlockState}.
                         * @see GrowthData#growthStage()
                         */
                        // @ts-ignore
                        readonly GROWTH_STAGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is affected by
                         * gravity.
                         * @see GravityData#gravity()
                         */
                        // @ts-ignore
                        readonly HAS_GRAVITY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the direction an entities head is
                         * rotated to.
                         * @see BodyPartRotationalData#headDirection()
                         */
                        // @ts-ignore
                        readonly HEAD_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for a {@link Living}'s current health.
                         * @see HealthData#health()
                         */
                        // @ts-ignore
                        readonly HEALTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for how much health a half-heart on a
                         * {@link Player}'s GUI will stand for.
                         * @see HealthScalingData#healthScale()
                         */
                        // @ts-ignore
                        readonly HEALTH_SCALE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the height of the physical form of an
                         * {@link Entity}.
                         * <p>Together with {@link #BASE_SIZE} this defines the size of an
                         * {@link Entity}.</p>
                         * @see SizeData#height()
                         */
                        // @ts-ignore
                        readonly HEIGHT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float>>
                        /**
                         * Represents the {@link Key} for representing the "attributes hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideAttributes()
                         */
                        // @ts-ignore
                        readonly HIDE_ATTRIBUTES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "can destroy hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideCanDestroy()
                         */
                        // @ts-ignore
                        readonly HIDE_CAN_DESTROY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "can place hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideCanPlace()
                         */
                        // @ts-ignore
                        readonly HIDE_CAN_PLACE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "enchantments hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideEnchantments()
                         */
                        // @ts-ignore
                        readonly HIDE_ENCHANTMENTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "miscellaneous hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideMiscellaneous()
                         */
                        // @ts-ignore
                        readonly HIDE_MISCELLANEOUS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "unbreakable hidden"
                         * state of an {@link ItemStack}.
                         * @see HideData#hideUnbreakable()
                         */
                        // @ts-ignore
                        readonly HIDE_UNBREAKABLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link Hinge}
                         * of a {@link BlockState}.
                         * @see HingeData
                         */
                        // @ts-ignore
                        readonly HINGE_POSITION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.Hinge>>
                        /**
                         * Represents the {@link Key} for the color of a {@link Horse}.
                         * @see HorseData#color()
                         */
                        // @ts-ignore
                        readonly HORSE_COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseColor>>
                        /**
                         * Represents the {@link Key} for the style of a {@link Horse}.
                         * @see HorseData#style()
                         */
                        // @ts-ignore
                        readonly HORSE_STYLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseStyle>>
                        /**
                         * Represents the {@link Key} for whether an {@link Item} will not despawn
                         * for an infinite time.
                         * @see DespawnDelayData#infinite()
                         */
                        // @ts-ignore
                        readonly INFINITE_DESPAWN_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "is infinite" state
                         * of the pickup delay of an {@link Item}.
                         * @see PickupDelayData#infinite()
                         */
                        // @ts-ignore
                        readonly INFINITE_PICKUP_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "vanish" state
                         * of an {@link Entity}. This will only simply render the entity as
                         * vanish, but not prevent any entity updates being sent to clients.
                         * To fully "vanish" an {@link Entity}, use {@link #VANISH}.
                         * @see InvisibilityData#invisible()
                         */
                        // @ts-ignore
                        readonly INVISIBLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the amount of ticks an {@link Entity}
                         * will remain invulnerable for.
                         * @see InvulnerabilityData#invulnerableTicks()
                         */
                        // @ts-ignore
                        readonly INVULNERABILITY_TICKS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing if an {@link Entity}
                         * is invulnerable or not.
                         * <p>This does not protect from the void, players in creative mode,
                         * and manual killing like the /kill command.</p>
                         * @see InvulnerabilityData#invulnerable()
                         */
                        // @ts-ignore
                        readonly INVULNERABLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "in-wall" state of
                         * {@link BlockTypes#FENCE}s.
                         * @see InWallData#inWall()
                         */
                        // @ts-ignore
                        readonly IN_WALL: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the state whether a {@link Ageable}
                         * entity is considered an "adult" and may affect breeding capabilities.
                         */
                        // @ts-ignore
                        readonly IS_ADULT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Blaze} is currently
                         * burning.
                         * <p>Unlike {@link #MAX_BURN_TIME}, the burning effect will not damage
                         * the burning entity.</p>
                         * @see FlammableData#flammable()
                         */
                        // @ts-ignore
                        readonly IS_AFLAME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Player} is flying with an
                         * {@link ItemTypes#ELYTRA}.
                         * @see ElytraFlyingData#elytraFlying()
                         */
                        // @ts-ignore
                        readonly IS_ELYTRA_FLYING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is flying.
                         * <p>This key only tells whether an entity is flying at the moment. On a
                         * {@link Player} it does not necessarily mean that the player may toggle
                         * freely between flying and walking. To check whether a player may switch
                         * his flying state, check {@link #CAN_FLY}.</p>
                         * @see FlyingData#flying()
                         */
                        // @ts-ignore
                        readonly IS_FLYING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Gets the {@link Value} for whether this mob is exhibiting
                         * "johnny" behavior.
                         * <p>In vanilla this currently only applies to {@link Vindicator}s.</p>
                         * @see <a href="https://minecraft.gamepedia.com/Vindicator#Behavior">
                         *      The Minecraft Wiki for more information about "johnny" behavior</a>
                         * @see JohnnyData#johnny()
                         */
                        // @ts-ignore
                        readonly IS_JOHNNY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Villager} is playing.
                         * <p>In Vanilla, this only applies to villagers that are considered
                         * "babies" according to {@link #AGE}.</p>
                         * @see PlayingData#playing()
                         */
                        // @ts-ignore
                        readonly IS_PLAYING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Enderman} is screaming.
                         * @see ScreamingData#screaming()
                         */
                        // @ts-ignore
                        readonly IS_SCREAMING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Sheep} is sheared.
                         * @see ShearedData#sheared()
                         */
                        // @ts-ignore
                        readonly IS_SHEARED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is silent.
                         * <p>A silent entity will not emit sounds or make noises.</p>
                         * @see SilentData#silent()
                         */
                        // @ts-ignore
                        readonly IS_SILENT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Wolf} or {@link Ocelot}
                         * is sitting.
                         * @see SittingData#sitting()
                         */
                        // @ts-ignore
                        readonly IS_SITTING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Bat} or {@link Player}
                         * is sleeping.
                         * <p>If a player is considered sleeping as per this data value, he does
                         * not need to be in bed in order for the other players to be able to
                         * advance through the night by going to bed.</p>
                         * @see SleepingData#sleeping()
                         */
                        // @ts-ignore
                        readonly IS_SLEEPING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is sneaking.
                         * <p>Sneaking entities generally move slower and do not make walking
                         * sounds.</p>
                         * @see SneakingData#sneaking()
                         */
                        // @ts-ignore
                        readonly IS_SNEAKING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} is sprinting.
                         * @see SprintData#sprinting()
                         */
                        // @ts-ignore
                        readonly IS_SPRINTING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether a {@link Wolf}, a
                         * {@link BlockState} of {@link BlockTypes#SPONGE} or an {@link ItemStack}
                         * of {@link ItemTypes#SPONGE} is wet.
                         * @see WetData#wet()
                         */
                        // @ts-ignore
                        readonly IS_WET: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the {@link BlockState} represented by
                         * an {@link ItemStack}.
                         * @see BlockItemData#state()
                         */
                        // @ts-ignore
                        readonly ITEM_BLOCKSTATE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>>
                        /**
                         * Represents the {@link Key} for the durability of an {@link ItemStack}.
                         * @see DurabilityData#durability()
                         */
                        // @ts-ignore
                        readonly ITEM_DURABILITY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the enchantments applied to an
                         * {@link ItemStack}.
                         * <p>This data is usually applicable to all types of armor, weapons and
                         * tools. Enchantments that are only stored on an item stack in order to
                         * be transferred to another item (like on
                         * {@link ItemTypes#ENCHANTED_BOOK}s) use the {@link #STORED_ENCHANTMENTS}
                         * key instead.)</p>
                         * @see EnchantmentData#enchantments()
                         */
                        // @ts-ignore
                        readonly ITEM_ENCHANTMENTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.enchantment.Enchantment>>
                        /**
                         * Represents the {@link Key} for the displayed description ("lore") text
                         * of an {@link ItemStack}.
                         * <p>The lore text is usually displayed when the player hovers his cursor
                         * over the stack. For the contents of a book see {@link #BOOK_PAGES}
                         * instead.</p>
                         * @see LoreData#lore()
                         */
                        // @ts-ignore
                        readonly ITEM_LORE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>>
                        /**
                         * Gets the {@link Value} for whether this vindicator is considered a
                         * "johnny" vindicator. "Johnny" vindicators will deal more damage and
                         * often times carry an {@link ItemTypes#IRON_AXE} of sorts.
                         * @deprecated In favor of {#link Keys#IS_JOHNNY} to match with the rest of
                         *      API and in-case other mobs ever support "johnny" mode in
                         *      any implementation. Will be removed in API 8
                         */
                        // @ts-ignore
                        readonly JOHNNY_VINDICATOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the knockback strength applied by an
                         * {@link Arrow}.
                         * <p>For the knockback provided by hits with a weapon according to the
                         * enchantment of the same name, see {@link #ITEM_ENCHANTMENTS}.</p>
                         * @see KnockbackData#knockbackStrength()
                         */
                        // @ts-ignore
                        readonly KNOCKBACK_STRENGTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for who last attacked an {@link Entity}.
                         * <p>This will usually be an entity snapshot of a {@link Living}.</p>
                         * <p>This data will usually only be present within 100 ticks of the attack
                         * occurring.</p>
                         * @see DamageableData#lastAttacker()
                         */
                        // @ts-ignore
                        readonly LAST_ATTACKER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.entity.EntitySnapshot>>
                        /**
                         * Represents the {@link Key} for the output yielded by the last command of
                         * a {@link CommandBlock}.
                         * @see CommandData#lastOutput()
                         */
                        // @ts-ignore
                        readonly LAST_COMMAND_OUTPUT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.text.Text>>
                        /**
                         * Represents the {@link Key} for the last amount of damage received by an
                         * {@link Entity}.
                         * <p>This data will usually only be present within 100 ticks of the attack
                         * occurring.</p>
                         * @see DamageableData#lastDamage()
                         */
                        // @ts-ignore
                        readonly LAST_DAMAGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the last time a {@link User} has been
                         * playing on the server.
                         * @see JoinData#lastPlayed()
                         */
                        // @ts-ignore
                        readonly LAST_DATE_PLAYED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.time.Instant>>
                        /**
                         * Represents the {@link Key} for representing the "layer" value of
                         * {@link BlockTypes#SNOW_LAYER} and other possible layered blocks.
                         * @see LayeredData#layer()
                         */
                        // @ts-ignore
                        readonly LAYER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the rotation of an {@link Entity}'s left
                         * arm.
                         * @see BodyPartRotationalData#leftArmDirection()
                         */
                        // @ts-ignore
                        readonly LEFT_ARM_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the rotation of an {@link Entity}'s left
                         * leg.
                         * @see BodyPartRotationalData#leftLegDirection()
                         */
                        // @ts-ignore
                        readonly LEFT_LEG_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for a {@link Llama}s carrying strength. The higher the strength,
                         * the more items it can carry (effectively the size of inventory).
                         */
                        // @ts-ignore
                        readonly LLAMA_STRENGTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for a {@link Llama}'s {@link LlamaVariant}.
                         */
                        // @ts-ignore
                        readonly LLAMA_VARIANT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.LlamaVariant>>
                        /**
                         * Represents the {@link Key} for the token used to lock a
                         * {@link TileEntityCarrier}.
                         * @see LockableData#lockToken()
                         */
                        // @ts-ignore
                        readonly LOCK_TOKEN: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.String>>
                        /**
                         * Represents the {@link Key} for the axis of a {@link BlockTypes#LOG}.
                         * <p>It differs from {@link #AXIS} in that a log axis may also be
                         * {@link LogAxes#NONE}.</p>
                         * @see LogAxisData
                         */
                        // @ts-ignore
                        readonly LOG_AXIS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.LogAxis>>
                        /**
                         * Represents the {@link Key} for the maximum air supply a {@link Living}
                         * may have.
                         * <p>For the current amount of air, check {@link #REMAINING_AIR}.</p>
                         * @see BreathingData#maxAir()
                         */
                        // @ts-ignore
                        readonly MAX_AIR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the maximum amount of ticks a
                         * {@link Furnace} can burn with the currently used fuel item.
                         * @see FurnaceData#maxBurnTime()
                         */
                        // @ts-ignore
                        readonly MAX_BURN_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the total time the current
                         * {@link ItemStack} in a {@link Furnace} has to be cooked.
                         * @see FurnaceData#maxCookTime()
                         */
                        // @ts-ignore
                        readonly MAX_COOK_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the maximum damage a {@link FallingBlock}
                         * can deal.
                         * @see FallingBlockData#maxFallDamage()
                         */
                        // @ts-ignore
                        readonly MAX_FALL_DAMAGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the maximum health of a {@link Living}.
                         * @see HealthData#maxHealth()
                         */
                        // @ts-ignore
                        readonly MAX_HEALTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for representing the "moisture" state of
                         * {@link BlockTypes#FARMLAND}.
                         * @see MoistureData#moisture()
                         */
                        // @ts-ignore
                        readonly MOISTURE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the pitch of a {@link Note} block.
                         * @see NoteData#note()
                         */
                        // @ts-ignore
                        readonly NOTE_PITCH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.NotePitch>>
                        /**
                         * Represents the {@link Key} for representing the "occupied" state of
                         * {@link BlockTypes#BED}.
                         * @see OccupiedData#occupied()
                         */
                        // @ts-ignore
                        readonly OCCUPIED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the type of an {@link Ocelot}.
                         * @see OcelotData
                         */
                        // @ts-ignore
                        readonly OCELOT_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.OcelotType>>
                        /**
                         * Represents the {@link Key} for representing a block's offset when inside
                         * a {@link Minecart}.
                         * @see MinecartBlockData#offset()
                         */
                        // @ts-ignore
                        readonly OFFSET: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the "open" state of
                         * various door typed blocks.
                         * @see OpenData#open()
                         */
                        // @ts-ignore
                        readonly OPEN: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link ParrotVariant variant} of a {@link Parrot}.
                         * @see ParrotData#type()
                         */
                        // @ts-ignore
                        readonly PARROT_VARIANT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.ParrotVariant>>
                        /**
                         * Represents the {@link Key} for the amount of ticks a {@link Furnace} has
                         * already been burning with the current fuel item.
                         * <p>Once this value reaches the one of {@link #MAX_BURN_TIME}, the
                         * furnace will require more fuel in order to keep burning.</p>
                         * @see FurnaceData#passedBurnTime()
                         */
                        // @ts-ignore
                        readonly PASSED_BURN_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the amount of ticks a {@link Furnace} has
                         * been cooking the current item for.
                         * <p>Once this value reaches the one of {@link #MAX_COOK_TIME}, the
                         * item will be finished cooking.</p>
                         * @see FurnaceData#passedCookTime()
                         */
                        // @ts-ignore
                        readonly PASSED_COOK_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the entities that act as passengers for
                         * an {@link Entity}.
                         * <p>For example, a {@link Player} riding on a {@link Horse} or a
                         * {@link Pig} would be considered its passenger.</p>
                         * @see PassengerData#passengers()
                         */
                        // @ts-ignore
                        readonly PASSENGERS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<java.util.UUID>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} will be
                         * prevented from despawning.
                         * <p>In Vanilla, entities may despawn if the player moves too far from
                         * them. A persisting entity will not be removed due to no players being
                         * near it.</p>
                         * @see PersistingData#persists()
                         */
                        // @ts-ignore
                        readonly PERSISTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the pickup delay
                         * of an {@link Item}.
                         * @see PickupDelayData#delay()
                         */
                        // @ts-ignore
                        readonly PICKUP_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the "pickup rule" of an {@link Arrow}.
                         * @see PickupRuleData
                         */
                        // @ts-ignore
                        readonly PICKUP_RULE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.PickupRule>>
                        /**
                         * Represents the {@link Key} for whether a {@link Pig} is saddled.
                         * @see PigSaddleData#saddle()
                         */
                        // @ts-ignore
                        readonly PIG_SADDLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link PistonType}
                         * of a {@link BlockTypes#PISTON}.
                         * @see PistonData
                         */
                        // @ts-ignore
                        readonly PISTON_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.PistonType>>
                        /**
                         * Represents the {@link Key} for which block types an {@link ItemStack}
                         * may be placed on.
                         * @see PlaceableData#placeable()
                         */
                        // @ts-ignore
                        readonly PLACEABLE_BLOCKS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.block.BlockType>>
                        /**
                         * Represents the {@link Key} for the content of a
                         * {@link ItemTypes#WRITABLE_BOOK}.
                         * <p>Use {@link Keys#BOOK_PAGES} if you wish to get the contents of a
                         * {@link ItemTypes#WRITTEN_BOOK}</p>
                         * @see PlainPagedData#pages()
                         */
                        // @ts-ignore
                        readonly PLAIN_BOOK_PAGES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<java.lang.String>>
                        /**
                         * Represents the {@link Key} for representing the {@link PlantType}
                         * of a {@link BlockState}.
                         * @see PlantData
                         */
                        // @ts-ignore
                        readonly PLANT_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.PlantType>>
                        /**
                         * Represents the {@link Key} for whether an {@link IronGolem} has been
                         * created by a {@link Player}.
                         * @see PlayerCreatedData#playerCreated()
                         */
                        // @ts-ignore
                        readonly PLAYER_CREATED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link PortionType}
                         * of a {@link BlockState}.
                         * @see PortionData
                         */
                        // @ts-ignore
                        readonly PORTION_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.PortionType>>
                        /**
                         * Represents the {@link Key} for the color of an {@link ItemStack} potion.
                         * @see PotionColorData#color()
                         */
                        // @ts-ignore
                        readonly POTION_COLOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Color>>
                        /**
                         * Represents the {@link Key} for which potion effects are present on an
                         * {@link Entity} or stored on an {@link ItemStack}.
                         * @see PotionEffectData#effects()
                         */
                        // @ts-ignore
                        readonly POTION_EFFECTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.effect.potion.PotionEffect>>
                        /**
                         * Represents the {@link Key} for representing the potion type of an {@link ItemStack}.
                         * @see PotionTypeData#type()
                         */
                        // @ts-ignore
                        readonly POTION_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.potion.PotionType>>
                        /**
                         * Represents the {@link Key} for representing the "power" state
                         * of a {@link BlockState}.
                         * <p>Applies to blocks that may emit a Redstone signal of variable
                         * strength, such as {@link BlockTypes#REDSTONE_WIRE},
                         * {@link BlockTypes#DAYLIGHT_DETECTOR},
                         * {@link BlockTypes#LIGHT_WEIGHTED_PRESSURE_PLATE} etc.</p>
                         * @see RedstonePoweredData#power()
                         */
                        // @ts-ignore
                        readonly POWER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the "powered" state
                         * of a {@link BlockState}.
                         * <p>Applies to blocks that may be powered in order to emit a
                         * Redstone signal of consistently maximum strength, such as
                         * {@link BlockTypes#LEVER}, {@link BlockTypes#WOODEN_BUTTON},
                         * {@link BlockTypes#WOODEN_PRESSURE_PLATE}, and their stone
                         * counterparts.</p>
                         * @see PoweredData#powered()
                         */
                        // @ts-ignore
                        readonly POWERED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link PrismarineType}
                         * of a {@link BlockState}.
                         * @see PrismarineData
                         */
                        // @ts-ignore
                        readonly PRISMARINE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.PrismarineType>>
                        /**
                         * Represents the {@link Key} for representing the {@link QuartzType}
                         * of a {@link BlockState}.
                         * @see QuartzData
                         */
                        // @ts-ignore
                        readonly QUARTZ_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.QuartzType>>
                        /**
                         * Represents the {@link Key} for the type of a {@link Rabbit}.
                         * @see RabbitData
                         */
                        // @ts-ignore
                        readonly RABBIT_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.RabbitType>>
                        /**
                         * Represents the {@link Key} for representing the {@link RailDirection}
                         * of a {@link BlockState}.
                         * @see RailDirectionData
                         */
                        // @ts-ignore
                        readonly RAIL_DIRECTION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.RailDirection>>
                        /**
                         * Represents the {@link Key} for how much air a {@link Living} has left.
                         * @see BreathingData#remainingAir()
                         */
                        // @ts-ignore
                        readonly REMAINING_AIR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for how many more ticks the current brewing
                         * process of a {@link BrewingStand} will take.
                         * <p>If nothing is being brewed, the remaining brew time will be 0.</p>
                         * @see BrewingStandData#remainingBrewTime()
                         */
                        // @ts-ignore
                        readonly REMAINING_BREW_TIME: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the {@link BlockState}
                         * inside a {@link Minecart}.
                         * @see MinecartBlockData#block()
                         */
                        // @ts-ignore
                        readonly REPRESENTED_BLOCK: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>>
                        /**
                         * Represents the {@link Key} for the item displayed in an
                         * {@link ItemFrame}.
                         * @see RepresentedItemData#item()
                         */
                        // @ts-ignore
                        readonly REPRESENTED_ITEM: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        /**
                         * Represents the {@link Key} for the player represented by a
                         * {@link BlockTypes#SKULL} block or a {@link ItemTypes#SKULL} item stack.
                         * <p>This will have no effect unless the {@link #SKULL_TYPE} is set to
                         * {@link SkullTypes#PLAYER}.</p>
                         * @see RepresentedPlayerData#owner()
                         */
                        // @ts-ignore
                        readonly REPRESENTED_PLAYER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.profile.GameProfile>>
                        /**
                         * Represents the {@link Key} for the spawn locations a {@link Player}
                         * may have for various worlds based on {@link UUID} of the world.
                         * @see RespawnLocationData#respawnLocation()
                         */
                        // @ts-ignore
                        readonly RESPAWN_LOCATIONS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<java.util.UUID, org.spongepowered.api.util.RespawnLocation>>
                        /**
                         * Represents the {@link Key} for the rotation of an {@link Entity}'s right
                         * arm.
                         * @see BodyPartRotationalData#rightArmDirection()
                         */
                        // @ts-ignore
                        readonly RIGHT_ARM_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the rotation of an {@link Entity}'s right
                         * leg.
                         * @see BodyPartRotationalData#rightLegDirection()
                         */
                        // @ts-ignore
                        readonly RIGHT_LEG_ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the {@link Rotation} of a block or an
                         * {@link ItemFrame}.
                         * @see RotationalData
                         */
                        // @ts-ignore
                        readonly ROTATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.rotation.Rotation>>
                        /**
                         * Represents the {@link Key} for representing the {@link SandstoneType}
                         * of a {@link BlockState}.
                         * @see SandstoneData
                         */
                        // @ts-ignore
                        readonly SANDSTONE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.SandstoneType>>
                        /**
                         * Represents the {@link Key} for representing the {@link SandType}
                         * of a {@link BlockState}.
                         * @see SandData
                         */
                        // @ts-ignore
                        readonly SAND_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.SandType>>
                        /**
                         * Represents the {@link Key} for the current saturation of a {@link Living}.
                         * <p>When the saturation reaches 0, the {@link #FOOD_LEVEL} will decrease
                         * and the saturation will be reset to maximum.</p>
                         * @see FoodData#saturation()
                         */
                        // @ts-ignore
                        readonly SATURATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the "scale" for the size of an
                         * {@link Entity}.
                         * @see SizeData#scale()
                         */
                        // @ts-ignore
                        readonly SCALE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float>>
                        /**
                         * Represents the {@link Key} for representing the "seamless" state
                         * of a {@link BlockState}.
                         * @see SeamlessData#seamless()
                         */
                        // @ts-ignore
                        readonly SEAMLESS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the "should drop" state
                         * of a {@link BlockState}.
                         * @see DropData#willDrop()
                         */
                        // @ts-ignore
                        readonly SHOULD_DROP: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the {@link ShrubType}
                         * of a {@link BlockState}.
                         * @see ShrubData
                         */
                        // @ts-ignore
                        readonly SHRUB_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.ShrubType>>
                        /**
                         * Represents the {@link Key} for the lines displayed on a {@link Sign}.
                         * @see SignData#lines()
                         */
                        // @ts-ignore
                        readonly SIGN_LINES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>>
                        /**
                         * Represents the {@link Key} for the skin of a {@link Humanoid}.
                         * <p>Skins can only be manipulated by supplying the UUID of a player
                         * having that skin. The binary skin data is signed by Mojang so fully
                         * customized skins are not possible.</p>
                         * @see SkinData#skinUniqueId()
                         */
                        // @ts-ignore
                        readonly SKIN_UNIQUE_ID: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.util.UUID>>
                        /**
                         * Represents the {@link Key} for the type of skull a block or item stack
                         * has.
                         * @see SkullData
                         */
                        // @ts-ignore
                        readonly SKULL_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.SkullType>>
                        /**
                         * Represents the {@link Key} for representing the {@link SlabType}
                         * of a {@link BlockState}.
                         * @see SlabData
                         */
                        // @ts-ignore
                        readonly SLAB_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.SlabType>>
                        /**
                         * Represents the {@link Key} for the size of a {@link Slime}.
                         * @see SlimeData#size()
                         */
                        // @ts-ignore
                        readonly SLIME_SIZE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the "snowed" state
                         * of a {@link BlockState}.
                         * @see SnowedData#hasSnow()
                         */
                        // @ts-ignore
                        readonly SNOWED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the entity type spawned by an
                         * {@link ItemStack} of the type {@link ItemTypes#SPAWN_EGG}.
                         * <p>For the type of entity spawned by a {@link MobSpawner},
                         * see {@link #SPAWNER_ENTITIES}.</p>
                         * @see SpawnableData
                         */
                        // @ts-ignore
                        readonly SPAWNABLE_ENTITY_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntityType>>
                        /**
                         * Represents the {@link Key} for the list of {@link EntityArchetype}s able
                         * to be spawned by a {@link MobSpawner}.
                         * @see MobSpawnerData#possibleEntitiesToSpawn()
                         */
                        // @ts-ignore
                        readonly SPAWNER_ENTITIES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.WeightedCollectionValue<org.spongepowered.api.entity.EntityArchetype>>
                        /**
                         * Represents the {@link Key} for the maximum amount of ticks between two
                         * batches of entities spawned by a {@link MobSpawner}.
                         * @see MobSpawnerData#maximumSpawnDelay()
                         */
                        // @ts-ignore
                        readonly SPAWNER_MAXIMUM_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for the maximum number of entities around a
                         * {@link MobSpawner}. A spawner will not spawn entities if there are more
                         * entities around than this value permits.
                         * @see MobSpawnerData#maximumNearbyEntities()
                         */
                        // @ts-ignore
                        readonly SPAWNER_MAXIMUM_NEARBY_ENTITIES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for the minimum amount of ticks between two
                         * batches of entities spawned by a {@link MobSpawner}.
                         * @see MobSpawnerData#minimumSpawnDelay()
                         */
                        // @ts-ignore
                        readonly SPAWNER_MINIMUM_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for the next entity that will be spawned
                         * by a {@link MobSpawner}.
                         * <p>Normally the entities to be spawned are determined by a random value
                         * applied to the {@link #SPAWNER_ENTITIES} weighted collection. If this
                         * value exists, it will override the random spawn with a definite one.</p>
                         * @see MobSpawnerData#nextEntityToSpawn()
                         */
                        // @ts-ignore
                        readonly SPAWNER_NEXT_ENTITY_TO_SPAWN: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.weighted.WeightedSerializableObject<org.spongepowered.api.entity.EntityArchetype>>>
                        /**
                         * Represents the {@link Key} for the remaining number of ticks to pass
                         * before another attempt to spawn entities is made by a {@link MobSpawner}.
                         * @see MobSpawnerData#remainingDelay()
                         */
                        // @ts-ignore
                        readonly SPAWNER_REMAINING_DELAY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for how close a {@link Player} has to be
                         * around the {@link MobSpawner} in order for it to attempt to
                         * spawn entities.
                         * @see MobSpawnerData#requiredPlayerRange()
                         */
                        // @ts-ignore
                        readonly SPAWNER_REQUIRED_PLAYER_RANGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for how many entities a {@link MobSpawner} has
                         * spawned so far.
                         * @see MobSpawnerData#spawnCount()
                         */
                        // @ts-ignore
                        readonly SPAWNER_SPAWN_COUNT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for how far away from the
                         * {@link MobSpawner} the entities spawned by it may appear.
                         * @see MobSpawnerData#spawnRange()
                         */
                        // @ts-ignore
                        readonly SPAWNER_SPAWN_RANGE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>>
                        /**
                         * Represents the {@link Key} for representing the {@link StairShape}
                         * of a {@link BlockState}.
                         * @see StairShapeData
                         */
                        // @ts-ignore
                        readonly STAIR_SHAPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.StairShape>>
                        /**
                         * Represents the {@link Key} for the {@link Statistic}s of a {@link Player}.
                         * @see StatisticData
                         */
                        // @ts-ignore
                        readonly STATISTICS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.statistic.Statistic, java.lang.Long>>
                        /**
                         * Represents the {@link Key} for representing the {@link StoneType}
                         * of a {@link BlockState}.
                         * @see StoneData
                         */
                        // @ts-ignore
                        readonly STONE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.StoneType>>
                        /**
                         * Represents the {@link Key} for the enchantments stored on an
                         * {@link ItemStack}.
                         * <p>Stored enchantments are meant to be transferred. Usually this key
                         * applies to {@link ItemTypes#ENCHANTED_BOOK} stacks. Enchantments
                         * affecting the item stack are retrieved via {@link #ITEM_ENCHANTMENTS}
                         * instead.</p>
                         * @see StoredEnchantmentData#enchantments()
                         */
                        // @ts-ignore
                        readonly STORED_ENCHANTMENTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.enchantment.Enchantment>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_AUTHOR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.String>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_IGNORE_ENTITIES: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_INTEGRITY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Float>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_MODE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.StructureMode>>
                        /**
                         * Represents the {@link Key} for representing the position of a {@link Structure}.
                         * @see StructureData#size()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_POSITION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3i>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_POWERED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_SEED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Long>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_SHOW_AIR: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the mode of a {@link Structure}.
                         * @see StructureData#mode()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_SHOW_BOUNDING_BOX: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for representing the size of a {@link Structure}.
                         * @see StructureData#size()
                         */
                        // @ts-ignore
                        readonly STRUCTURE_SIZE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3i>>
                        /**
                         * Represents the {@link Key} for representing the amount of "stuck arrows"
                         * in {@link Living} entities.
                         * @see StuckArrowsData#stuckArrows()
                         */
                        // @ts-ignore
                        readonly STUCK_ARROWS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents a key for the amount of successful executions of a command
                         * stored in a {@link CommandBlock} or {@link CommandBlockMinecart}.
                         * @see CommandData#successCount()
                         */
                        // @ts-ignore
                        readonly SUCCESS_COUNT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for representing the "suspended" state
                         * of a {@link BlockState}.
                         */
                        // @ts-ignore
                        readonly SUSPENDED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the owner uuid of a tamed {@link Animal}.
                         * <p>Tamable animals in Vanilla may be a {@link Wolf}, an {@link Ocelot}
                         * or a {@link Horse}.</p>
                         * @see TameableData#owner()
                         */
                        // @ts-ignore
                        readonly TAMED_OWNER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<java.util.UUID>>
                        /**
                         * Represents the {@link Key} for a targeted entity,
                         * like by a {@link ShulkerBullet}.
                         * @see TargetedEntityData#value
                         */
                        // @ts-ignore
                        readonly TARGETED_ENTITY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>>
                        /**
                         * Represents the {@link Key} for the location targeted by an
                         * {@link EyeOfEnder} or a {@link Player}'s compass.
                         * @see TargetedLocationData#target()
                         */
                        // @ts-ignore
                        readonly TARGETED_LOCATION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the remaining fuse time in ticks of a
                         * {@link FusedExplosive}. This value may be set to an arbitrary value
                         * if the explosive is not primed.
                         * @see FuseData#ticksRemaining()
                         */
                        // @ts-ignore
                        readonly TICKS_REMAINING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for the full amount of experience a
                         * {@link Player} has.
                         * @see ExperienceHolderData#totalExperience()
                         */
                        // @ts-ignore
                        readonly TOTAL_EXPERIENCE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>>
                        /**
                         * Represents the {@link Key} for whether a {@link CommandBlock} does track
                         * its output.
                         * <p>If this is set, the output of the most recent execution can be
                         * retrieved using {@link #LAST_COMMAND_OUTPUT}.</p>
                         * @see CommandData#doesTrackOutput()
                         */
                        // @ts-ignore
                        readonly TRACKS_OUTPUT: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the {@link TradeOffer}s offered by a
                         * {@link Villager}.
                         * @see TradeOfferData#tradeOffers()
                         */
                        // @ts-ignore
                        readonly TRADE_OFFERS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.merchant.TradeOffer>>
                        /**
                         * Represents the {@link Key} for representing the {@link TreeType}
                         * of a {@link BlockState}.
                         * @see TreeData
                         */
                        // @ts-ignore
                        readonly TREE_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.TreeType>>
                        /**
                         * Represents the {@link Key} for whether an {@link ItemStack} is unbreakable.
                         * <p>Setting this to {@code  true} will prevent the item stack's
                         * {@link #ITEM_DURABILITY} from changing.</p>
                         * @see DurabilityData#unbreakable()
                         */
                        // @ts-ignore
                        readonly UNBREAKABLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Gets the {@link Key} for the "vanish" state of an {@link Entity}.
                         * <p>The presence of a vanished entity will not be made known to a client;
                         * no packets pertaining to this entity are sent. Client-side, this entity
                         * will cease to exist. Server-side it may still be targeted by hostile
                         * entities or collide with other entities.</p>
                         * <p>Vanishing an {@link Entity} ridden by other entities (see
                         * {@link #PASSENGERS} will cause problems.</p>
                         * @see Keys#VANISH
                         */
                        // @ts-ignore
                        readonly VANISH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for whether an {@link Entity} ignores collision
                         * with other entities.
                         * <p>This state will be ignored if the {@link Entity} is not also
                         * vanished as per {@link #VANISH}.</p>
                         * @see InvisibilityData#ignoresCollisionDetection()
                         */
                        // @ts-ignore
                        readonly VANISH_IGNORES_COLLISION: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for
                         * Gets the {@link Value} for whether an {@link Entity} can be targeted for
                         * attack by another entity. This prevents neither {@link Player}s from
                         * attacking the entity nor will it be protected from untargeted damage
                         * like fire or explosions.
                         * <p>This state will be ignored if the {@link Entity} is not also
                         * vanished as per {@link #VANISH}.}.</p>
                         * @see InvisibilityData#untargetable()
                         */
                        // @ts-ignore
                        readonly VANISH_PREVENTS_TARGETING: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for the vehicle an {@link Entity} is riding.
                         * <p>Vehicles may be nested as a vehicle might itself ride another entity.
                         * To get the vehicle on bottom, use {@link #BASE_VEHICLE}.</p>
                         * @see VehicleData#vehicle()
                         */
                        // @ts-ignore
                        readonly VEHICLE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>>
                        /**
                         * Represents the {@link Key} for the velocity of an {@link Entity}.
                         * @see VelocityData#velocity()
                         */
                        // @ts-ignore
                        readonly VELOCITY: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<Vector3d>>
                        /**
                         * Represents the {@link Key} for the speed at which an entity walks.
                         * @see MovementSpeedData#walkSpeed()
                         */
                        // @ts-ignore
                        readonly WALKING_SPEED: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Double>>
                        /**
                         * Represents the {@link Key} for the type of
                         * {@link BlockTypes#COBBLESTONE_WALL} blocks.
                         * @see WallData
                         */
                        // @ts-ignore
                        readonly WALL_TYPE: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WallType>>
                        /**
                         * Represents the {@link Key} for whether a thrown {@link EyeOfEnder} will
                         * shatter.
                         * @see ShatteringData#willShatter()
                         */
                        // @ts-ignore
                        readonly WILL_SHATTER: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>
                        /**
                         * Represents the {@link Key} for how a {@link BlockTypes#REDSTONE_WIRE} is
                         * connected to its neighboring blocks.
                         * @see WireAttachmentData#wireAttachments()
                         */
                        // @ts-ignore
                        readonly WIRE_ATTACHMENTS: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.util.Direction, org.spongepowered.api.data.type.WireAttachmentType>>
                        /**
                         * Represents the {@link Key} for how a {@link BlockTypes#REDSTONE_WIRE} is
                         * connected to its neighboring block to the {@link Direction#EAST}.
                         * @see WireAttachmentData#wireAttachmentEast()
                         */
                        // @ts-ignore
                        readonly WIRE_ATTACHMENT_EAST: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>>
                        /**
                         * Represents the {@link Key} for how a {@link BlockTypes#REDSTONE_WIRE} is
                         * connected to its neighboring block to the {@link Direction#NORTH}.
                         * @see WireAttachmentData#wireAttachmentNorth()
                         */
                        // @ts-ignore
                        readonly WIRE_ATTACHMENT_NORTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>>
                        /**
                         * Represents the {@link Key} for how a {@link BlockTypes#REDSTONE_WIRE} is
                         * connected to its neighboring block to the {@link Direction#SOUTH}.
                         * @see WireAttachmentData#wireAttachmentSouth()
                         */
                        // @ts-ignore
                        readonly WIRE_ATTACHMENT_SOUTH: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>>
                        /**
                         * Represents the {@link Key} for how a {@link BlockTypes#REDSTONE_WIRE} is
                         * connected to its neighboring block to the {@link Direction#WEST}.
                         * @see WireAttachmentData#wireAttachmentWest()
                         */
                        // @ts-ignore
                        readonly WIRE_ATTACHMENT_WEST: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>>
                    }
                }
            }
        }
    }
}
