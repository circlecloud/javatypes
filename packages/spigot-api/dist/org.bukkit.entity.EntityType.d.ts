declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            class EntityType extends java.lang.Enum<org.bukkit.entity.EntityType> implements org.bukkit.Keyed {
                /**
                 * An item resting on the ground.
                 * <p>
                 * Spawn with {@link World#dropItem(Location, ItemStack)} or {@link
                 * World#dropItemNaturally(Location, ItemStack)}
                 */
                // @ts-ignore
                public static readonly DROPPED_ITEM: org.bukkit.entity.EntityType
                /**
                 * An experience orb.
                 */
                // @ts-ignore
                public static readonly EXPERIENCE_ORB: org.bukkit.entity.EntityType
                /**
                 * @see AreaEffectCloud
                 */
                // @ts-ignore
                public static readonly AREA_EFFECT_CLOUD: org.bukkit.entity.EntityType
                /**
                 * @see ElderGuardian
                 */
                // @ts-ignore
                public static readonly ELDER_GUARDIAN: org.bukkit.entity.EntityType
                /**
                 * @see WitherSkeleton
                 */
                // @ts-ignore
                public static readonly WITHER_SKELETON: org.bukkit.entity.EntityType
                /**
                 * @see Stray
                 */
                // @ts-ignore
                public static readonly STRAY: org.bukkit.entity.EntityType
                /**
                 * A flying chicken egg.
                 */
                // @ts-ignore
                public static readonly EGG: org.bukkit.entity.EntityType
                /**
                 * A leash attached to a fencepost.
                 */
                // @ts-ignore
                public static readonly LEASH_HITCH: org.bukkit.entity.EntityType
                /**
                 * A painting on a wall.
                 */
                // @ts-ignore
                public static readonly PAINTING: org.bukkit.entity.EntityType
                /**
                 * An arrow projectile; may get stuck in the ground.
                 */
                // @ts-ignore
                public static readonly ARROW: org.bukkit.entity.EntityType
                /**
                 * A flying snowball.
                 */
                // @ts-ignore
                public static readonly SNOWBALL: org.bukkit.entity.EntityType
                /**
                 * A flying large fireball, as thrown by a Ghast for example.
                 */
                // @ts-ignore
                public static readonly FIREBALL: org.bukkit.entity.EntityType
                /**
                 * A flying small fireball, such as thrown by a Blaze or player.
                 */
                // @ts-ignore
                public static readonly SMALL_FIREBALL: org.bukkit.entity.EntityType
                /**
                 * A flying ender pearl.
                 */
                // @ts-ignore
                public static readonly ENDER_PEARL: org.bukkit.entity.EntityType
                /**
                 * An ender eye signal.
                 */
                // @ts-ignore
                public static readonly ENDER_SIGNAL: org.bukkit.entity.EntityType
                /**
                 * A flying splash potion.
                 */
                // @ts-ignore
                public static readonly SPLASH_POTION: org.bukkit.entity.EntityType
                /**
                 * A flying experience bottle.
                 */
                // @ts-ignore
                public static readonly THROWN_EXP_BOTTLE: org.bukkit.entity.EntityType
                /**
                 * An item frame on a wall.
                 */
                // @ts-ignore
                public static readonly ITEM_FRAME: org.bukkit.entity.EntityType
                /**
                 * A flying wither skull projectile.
                 */
                // @ts-ignore
                public static readonly WITHER_SKULL: org.bukkit.entity.EntityType
                /**
                 * Primed TNT that is about to explode.
                 */
                // @ts-ignore
                public static readonly PRIMED_TNT: org.bukkit.entity.EntityType
                /**
                 * A block that is going to or is about to fall.
                 */
                // @ts-ignore
                public static readonly FALLING_BLOCK: org.bukkit.entity.EntityType
                /**
                 * Internal representation of a Firework once it has been launched.
                 */
                // @ts-ignore
                public static readonly FIREWORK: org.bukkit.entity.EntityType
                /**
                 * @see Husk
                 */
                // @ts-ignore
                public static readonly HUSK: org.bukkit.entity.EntityType
                /**
                 * Like {@link #ARROW} but causes the {@link PotionEffectType#GLOWING} effect on all team members.
                 */
                // @ts-ignore
                public static readonly SPECTRAL_ARROW: org.bukkit.entity.EntityType
                /**
                 * Bullet fired by {@link #SHULKER}.
                 */
                // @ts-ignore
                public static readonly SHULKER_BULLET: org.bukkit.entity.EntityType
                /**
                 * Like {@link #FIREBALL} but with added effects.
                 */
                // @ts-ignore
                public static readonly DRAGON_FIREBALL: org.bukkit.entity.EntityType
                /**
                 * @see ZombieVillager
                 */
                // @ts-ignore
                public static readonly ZOMBIE_VILLAGER: org.bukkit.entity.EntityType
                /**
                 * @see SkeletonHorse
                 */
                // @ts-ignore
                public static readonly SKELETON_HORSE: org.bukkit.entity.EntityType
                /**
                 * @see ZombieHorse
                 */
                // @ts-ignore
                public static readonly ZOMBIE_HORSE: org.bukkit.entity.EntityType
                /**
                 * Mechanical entity with an inventory for placing weapons / armor into.
                 */
                // @ts-ignore
                public static readonly ARMOR_STAND: org.bukkit.entity.EntityType
                /**
                 * @see Donkey
                 */
                // @ts-ignore
                public static readonly DONKEY: org.bukkit.entity.EntityType
                /**
                 * @see Mule
                 */
                // @ts-ignore
                public static readonly MULE: org.bukkit.entity.EntityType
                /**
                 * @see EvokerFangs
                 */
                // @ts-ignore
                public static readonly EVOKER_FANGS: org.bukkit.entity.EntityType
                /**
                 * @see Evoker
                 */
                // @ts-ignore
                public static readonly EVOKER: org.bukkit.entity.EntityType
                /**
                 * @see Vex
                 */
                // @ts-ignore
                public static readonly VEX: org.bukkit.entity.EntityType
                /**
                 * @see Vindicator
                 */
                // @ts-ignore
                public static readonly VINDICATOR: org.bukkit.entity.EntityType
                /**
                 * @see Illusioner
                 */
                // @ts-ignore
                public static readonly ILLUSIONER: org.bukkit.entity.EntityType
                /**
                 * @see CommandMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_COMMAND: org.bukkit.entity.EntityType
                /**
                 * A placed boat.
                 */
                // @ts-ignore
                public static readonly BOAT: org.bukkit.entity.EntityType
                /**
                 * @see RideableMinecart
                 */
                // @ts-ignore
                public static readonly MINECART: org.bukkit.entity.EntityType
                /**
                 * @see StorageMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_CHEST: org.bukkit.entity.EntityType
                /**
                 * @see PoweredMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_FURNACE: org.bukkit.entity.EntityType
                /**
                 * @see ExplosiveMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_TNT: org.bukkit.entity.EntityType
                /**
                 * @see HopperMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_HOPPER: org.bukkit.entity.EntityType
                /**
                 * @see SpawnerMinecart
                 */
                // @ts-ignore
                public static readonly MINECART_MOB_SPAWNER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly CREEPER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SKELETON: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SPIDER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly GIANT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ZOMBIE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SLIME: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly GHAST: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ZOMBIFIED_PIGLIN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ENDERMAN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly CAVE_SPIDER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SILVERFISH: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly BLAZE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly MAGMA_CUBE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ENDER_DRAGON: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly WITHER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly BAT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly WITCH: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ENDERMITE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly GUARDIAN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SHULKER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PIG: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SHEEP: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly COW: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly CHICKEN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SQUID: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly WOLF: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly MUSHROOM_COW: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SNOWMAN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly OCELOT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly IRON_GOLEM: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly HORSE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly RABBIT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly POLAR_BEAR: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly LLAMA: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly LLAMA_SPIT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PARROT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly VILLAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ENDER_CRYSTAL: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly TURTLE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PHANTOM: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly TRIDENT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly COD: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly SALMON: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PUFFERFISH: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly TROPICAL_FISH: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly DROWNED: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly DOLPHIN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly CAT: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PANDA: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PILLAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly RAVAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly TRADER_LLAMA: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly WANDERING_TRADER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly FOX: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly BEE: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly HOGLIN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PIGLIN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly STRIDER: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly ZOGLIN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PIGLIN_BRUTE: org.bukkit.entity.EntityType
                /**
                 * A fishing line and bobber.
                 */
                // @ts-ignore
                public static readonly FISHING_HOOK: org.bukkit.entity.EntityType
                /**
                 * A bolt of lightning.
                 * <p>
                 * Spawn with {@link World#strikeLightning(Location)}.
                 */
                // @ts-ignore
                public static readonly LIGHTNING: org.bukkit.entity.EntityType
                // @ts-ignore
                public static readonly PLAYER: org.bukkit.entity.EntityType
                /**
                 * An unknown entity without an Entity Class
                 */
                // @ts-ignore
                public static readonly UNKNOWN: org.bukkit.entity.EntityType
                // @ts-ignore
                public static values(): org.bukkit.entity.EntityType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.entity.EntityType
                /**
                 * Gets the entity type name.
                 * @return the entity type's name
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getKey(): org.bukkit.NamespacedKey
                // @ts-ignore
                public getEntityClass(): java.lang.Class<any>
                /**
                 * Gets the entity type id.
                 * @return the raw type id
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public getTypeId(): number /*short*/
                /**
                 * Gets an entity type from its name.
                 * @param name the entity type's name
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static fromName(name: java.lang.String | string): org.bukkit.entity.EntityType
                /**
                 * Gets an entity from its id.
                 * @param id the raw type id
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static fromId(id: number /*int*/): org.bukkit.entity.EntityType
                /**
                 * Some entities cannot be spawned using {@link
                 * World#spawnEntity(Location, EntityType)} or {@link
                 * World#spawn(Location, Class)}, usually because they require additional
                 * information in order to spawn.
                 * @return False if the entity type cannot be spawned
                 */
                // @ts-ignore
                public isSpawnable(): boolean
                // @ts-ignore
                public isAlive(): boolean
            }
        }
    }
}
