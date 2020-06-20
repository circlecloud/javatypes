declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace catalog {
                        /**
                         * An enumeration of all known vanilla {@link DataManipulator}s that may be
                         * applicable to any {@link Entity}.
                         */
                        // @ts-ignore
                        class CatalogEntityData extends java.lang.Object {
                            /**
                             * Represents the current acceleration of a {@link Fireball}.
                             */
                            // @ts-ignore
                            readonly ACCELERATION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.AccelerationData>
                            /**
                             * The {@link AgeableData} that represents age determining whether an
                             * {@link Entity} is a child or an adult. Always exists for
                             * {@link Ageable} entities.
                             */
                            // @ts-ignore
                            readonly AGEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.AgeableData>
                            /**
                             * The {@link AgentData} that signifies that an {@link Agent}'s AI is
                             * enabled.
                             */
                            // @ts-ignore
                            readonly AGENT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.AgentData>
                            /**
                             * The {@link AggressiveData} that signifies whether an {@link Agent} is
                             * considered aggressive, may attack other entities.
                             */
                            // @ts-ignore
                            readonly AGGRESSIVE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.AggressiveData>
                            /**
                             * The {@link AngerableData} that signifies an {@link Agent} is angry but
                             * will calm down after a certain amount of time has passed.
                             */
                            // @ts-ignore
                            readonly ANGERABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.AngerableData>
                            /**
                             * The {@link DisabledSlotsData} signifies which slots are unable to be taken
                             * from / placed into in an armour stand
                             */
                            // @ts-ignore
                            readonly DISABLED_SLOTS_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.DisabledSlotsData>
                            /**
                             * The {@link ArtData} that signifies what piece of {@link Art} is being
                             * displayed. It is applicable for {@link Painting} entities.
                             */
                            // @ts-ignore
                            readonly ART_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ArtData>
                            /**
                             * Represents the mapped rotational data for all known body parts. Usually
                             * applicable to {@link Humanoid}s and {@link ArmorStand}s.
                             */
                            // @ts-ignore
                            readonly BODY_PART_ROTATIONAL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.BodyPartRotationalData>
                            /**
                             * Entities that have {@link BreathingData} when under water. Usually
                             * applies to {@link Living} entities but not {@link Aquatic} entities.
                             */
                            // @ts-ignore
                            readonly BREATHING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.BreathingData>
                            /**
                             * Signifies an entity is ready to breed. Usually applies to
                             * {@link Animal}s, or sometimes for {@link Zombie}s to call
                             * reinforcements.
                             */
                            // @ts-ignore
                            readonly BREEDABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.BreedableData>
                            /**
                             * Mainly for {@link Villager}s to determine their applicable
                             * {@link TradeOffer}s.
                             */
                            // @ts-ignore
                            readonly CAREER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.CareerData>
                            /**
                             * Represents whether an entity is considered "charged". Usually applies
                             * to {@link Creeper}s.
                             */
                            // @ts-ignore
                            readonly CHARGED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ChargedData>
                            /**
                             * Signifies that an entity will perform a "critical hit" the next attack.
                             * Usually applies to {@link Arrow}s.
                             */
                            // @ts-ignore
                            readonly CRITICAL_HIT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.CriticalHitData>
                            /**
                             * Signifies that an entity can take damage and tracks it's last damage
                             * source. Usually applies to {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly DAMAGEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.DamageableData>
                            /**
                             * Signifies that an owner is going to deal a certain amount of damage
                             * on the next "attack". Usually applicable to {@link Arrow}s and other
                             * {@link Projectile}s.
                             */
                            // @ts-ignore
                            readonly DAMAGING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.DamagingData>
                            /**
                             * Represents the custom name of an entity. Usually applies to
                             * {@link Player}s and {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly DISPLAY_NAME_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DisplayNameData>
                            /**
                             * Represents the dominant {@link HandPreference} used by an entity for for "main"
                             * interactions such as such as tool use or block breaking. Usually
                             * applicable to {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly DOMINANT_HAND_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.DominantHandData>
                            /**
                             * Signifies that the entity can be dyed a specific {@link DyeColor}.
                             * Usually applies to {@link Sheep}.
                             */
                            // @ts-ignore
                            readonly DYEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DyeableData>
                            /**
                             * Signifies that an entity can hold "experience". Usually applies to
                             * {@link Player}s.
                             */
                            // @ts-ignore
                            readonly EXPERIENCE_HOLDER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ExperienceHolderData>
                            /**
                             * Signifies that an entity can expire after a certain amount of time.
                             * Usually applies to {@link Weather}, {@link Endermite}s, and
                             * {@link Item}s.
                             */
                            // @ts-ignore
                            readonly EXPIRABLE_DATA_CLASS: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData>
                            /**
                             * Represents the "explosion radius" that an entity will have upon
                             * detonation. Usually applies to all {@link Explosive}s.
                             */
                            // @ts-ignore
                            readonly EXPLOSIVE_RADIUS_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ExplosionRadiusData>
                            /**
                             * Represents a falling block that can deal damage upon landing.
                             * Applies to {@link FallingBlock}s.
                             */
                            // @ts-ignore
                            readonly FALLING_BLOCK_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.FallingBlockData>
                            /**
                             * Represents the {@link FireworkEffect}s that a {@link Firework} will have
                             * upon detonation.
                             */
                            // @ts-ignore
                            readonly FIREWORK_EFFECT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.FireworkEffectData>
                            /**
                             * Represents the flight time of a {@link Firework}.
                             */
                            // @ts-ignore
                            readonly FIREWORK_ROCKET_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.FireworkRocketData>
                            /**
                             * Represents when an entity is considering to be "flying". Applicable for
                             * almost all types of {@link Entity}.
                             */
                            // @ts-ignore
                            readonly FLYING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.FlyingData>
                            /**
                             * Represents the saturation, exhaustion, and food level for an entity.
                             * Usually applicable to {@link Player}s.
                             */
                            // @ts-ignore
                            readonly FOOD_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.FoodData>
                            /**
                             * Represents the expiring "fuse" duration on an explosive entity before
                             * the {@link Explosive} detonates.
                             */
                            // @ts-ignore
                            readonly FUSE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.FuseData>
                            /**
                             * Signifies that an entity has a {@link GameMode}. Usually applies to
                             * {@link Player}s.
                             */
                            // @ts-ignore
                            readonly GAME_MODE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.GameModeData>
                            /**
                             * Represents that an entity has a glowing outline. Few entities, such
                             * as {@link Snowball}, do not show this glow.
                             * <!-- TODO: Find all non-effected entities -->
                             */
                            // @ts-ignore
                            readonly GLOWING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.GlowingData>
                            /**
                             * Signifies that an entity will ignore gravity. Usually applies to all
                             * known types of entities.
                             */
                            // @ts-ignore
                            readonly GRAVITY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.GravityData>
                            /**
                             * Signifies that an entity can modify blocks in the world. Usually applies
                             * to {@link Enderman} and {@link Humanoid}s.
                             */
                            // @ts-ignore
                            readonly GRIEFING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.GriefingData>
                            /**
                             * Signifies that an entity can have health and dies upon the depletion
                             * of health. Usually applies to all {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly HEALTH_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.HealthData>
                            /**
                             * Represents a {@link RideableHorse}s specific data, such as {@link HorseStyle},
                             * and {@link HorseColor}.
                             */
                            // @ts-ignore
                            readonly HORSE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.HorseData>
                            /**
                             * Represents that an entity is self igniting. Usually applies to
                             * {@link Blaze}.
                             */
                            // @ts-ignore
                            readonly IGNITEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.IgniteableData>
                            /**
                             * Signifies that an entity is rendered vanish. Usually applies to all
                             * known types of {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly INVISIBILITY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.InvisibilityData>
                            /**
                             * Represents whether an entity is exhibiting "johnny" behavior. In vanilla
                             * this is only applicable to {@link Vindicator}s.
                             */
                            // @ts-ignore
                            readonly JOHNNY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.JohnnyData>
                            /**
                             * Represents the specific information of an initial joined time on the
                             * server. Usually applicable to {@link Player}s and {@link User}s.
                             */
                            // @ts-ignore
                            readonly JOIN_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.JoinData>
                            /**
                             * Represents the "level" of knockback an entity will perform in the
                             * next attack. Usually applicable to {@link Arrow}s.
                             */
                            // @ts-ignore
                            readonly KNOCKBACK_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.KnockbackData>
                            /**
                             * Represents the information for the {@link Entity} leashing another
                             * {@link Entity}. Usually applicable to {@link Living} entities.
                             */
                            // @ts-ignore
                            readonly LEASH_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.LeashData>
                            /**
                             * Represents the target entity an entity is either guided or aiming
                             * towards. Usually applicable for {@link ShulkerBullet}s.
                             */
                            // @ts-ignore
                            readonly TARGETED_ENTITY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.TargetedEntityData>
                            /**
                             * Represents the target location an entity is either guided or aiming
                             * towards. Usually applicable for {@link EyeOfEnder}s.
                             */
                            // @ts-ignore
                            readonly LOCATION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.TargetedLocationData>
                            /**
                             * Represents a {@link Minecart} with a {@link BlockState} shown inside.
                             */
                            // @ts-ignore
                            readonly MINECART_BLOCK_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.MinecartBlockData>
                            /**
                             * Represents the {@link OcelotType} of an {@link Ocelot}.
                             */
                            // @ts-ignore
                            readonly OCELOT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.OcelotData>
                            /**
                             * Represents the amount of "experience" an {@link ExperienceOrb}
                             * contains.
                             */
                            // @ts-ignore
                            readonly ORB_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ExpOrbData>
                            /**
                             * Signifies that an entity is a "passenger" riding another {@link Entity}.
                             * Usually applicable for all {@link Entity}.
                             */
                            // @ts-ignore
                            readonly PASSENGER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.PassengerData>
                            /**
                             * Signifies that an entity will "persist" in the world data. Usually
                             * applicable to all {@link Entity}.
                             */
                            // @ts-ignore
                            readonly PERSISTING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.PersistingData>
                            /**
                             * Signifies that an entity was created by a {@link Player}. Usually
                             * applicable to {@link IronGolem}s.
                             */
                            // @ts-ignore
                            readonly PLAYER_CREATED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.PlayerCreatedData>
                            /**
                             * Signifies that an entity is "playing". Usually applicable to
                             * {@link Villager}s.
                             */
                            // @ts-ignore
                            readonly PLAYING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.PlayingData>
                            /**
                             * Signifies that an entity is currently affected by some variety of
                             * {@link PotionEffect}s. Applicable to all {@link Entity}.
                             */
                            // @ts-ignore
                            readonly POTION_EFFECT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.PotionEffectData>
                            /**
                             * Represents the {@link RabbitType} of a {@link Rabbit}.
                             */
                            // @ts-ignore
                            readonly RABBIT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.RabbitData>
                            /**
                             * Signifies that an entity is representing an {@link ItemStack}.
                             * Usually applicable to {@link Item}s and {@link ItemFrame}s.
                             */
                            // @ts-ignore
                            readonly REPRESENTED_ITEM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.RepresentedItemData>
                            /**
                             * Signifies that an entity will respawn after death and has a respawn
                             * location. Usually applicable to {@link Player}s.
                             */
                            // @ts-ignore
                            readonly RESPAWN_LOCATION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.RespawnLocationData>
                            /**
                             * Signifies that an entity has a "saddle". Usually applicable to
                             * {@link Pig}s.
                             */
                            // @ts-ignore
                            readonly PIG_SADDLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.PigSaddleData>
                            /**
                             * Signifies that an entity is currently "screaming". Usually applicable
                             * to {@link Enderman}.
                             */
                            // @ts-ignore
                            readonly SCREAMING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ScreamingData>
                            /**
                             * Signifies that an entity is currently "silent", and will play no sounds.
                             * Usually applicable to all {@link Entity Entities}.
                             */
                            // @ts-ignore
                            readonly SILENT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SilentData>
                            /**
                             * Signifies that an entity will "shatter" upon expiration. Usually
                             * applicable to {@link EyeOfEnder}.
                             */
                            // @ts-ignore
                            readonly SHATTERING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ShatteringData>
                            /**
                             * Signifies that an entity is currently "sheared" and will regrow at some
                             * point. Usually applicable to {@link Sheep}.
                             */
                            // @ts-ignore
                            readonly SHEARED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.ShearedData>
                            /**
                             * Signifies that an entity is currently sitting. Usually applicable to
                             * {@link Wolf} and {@link Ocelot}s.
                             */
                            // @ts-ignore
                            readonly SITTING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SittingData>
                            /**
                             * Represents the base and height sizes of an entity if it has physical
                             * form. Usually applies to all types of {@link Entity}.
                             */
                            // @ts-ignore
                            readonly SIZE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SizeData>
                            /**
                             * Signifies that the owner is currently "sleeping". This will usually
                             * apply to {@link Humanoid}s and {@link Bat}s.
                             */
                            // @ts-ignore
                            readonly SLEEPING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SleepingData>
                            /**
                             * Represents the size of a {@link Slime}. Usually applicable to all
                             * {@link Slime}s and {@link MagmaCube}s.
                             */
                            // @ts-ignore
                            readonly SLIME_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SlimeData>
                            /**
                             * Signifies that an entity is currently "sneaking". Usually applicable to
                             * {@link Player}s.
                             */
                            // @ts-ignore
                            readonly SNEAKING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.SneakingData>
                            /**
                             * Represents the container of all known applied {@link Statistic}s. Usually
                             * applicable to {@link Player}s and {@link User}s.
                             */
                            // @ts-ignore
                            readonly STATISTIC_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.StatisticData>
                            /**
                             * Signifies that an entity is "tamed" and has an owner. Usually applicable
                             * to {@link RideableHorse}s, {@link Ocelot}s, and {@link Wolf} entities.
                             */
                            // @ts-ignore
                            readonly TAMEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.TameableData>
                            /**
                             * Signifies that an entity is currently being ridden by another
                             * {@link Entity}.
                             */
                            // @ts-ignore
                            readonly VEHICLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.VehicleData>
                            /**
                             * Represents the current velocity of an entity. Applicable to all
                             * {@link Entity}.
                             */
                            // @ts-ignore
                            readonly VELOCITY_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.entity.VelocityData>
                            /**
                             * Signifies that an entity is currently "wet". Usually applicable to
                             * {@link Wolf} entities.
                             */
                            // @ts-ignore
                            readonly WET_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.WetData>
                        }
                    }
                }
            }
        }
    }
}
