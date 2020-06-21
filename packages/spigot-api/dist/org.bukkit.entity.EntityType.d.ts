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
                readonly DROPPED_ITEM: org.bukkit.entity.EntityType
                /**
                 * An experience orb.
                 */
                // @ts-ignore
                readonly EXPERIENCE_ORB: org.bukkit.entity.EntityType
                /**
                 * @see AreaEffectCloud
                 */
                // @ts-ignore
                readonly AREA_EFFECT_CLOUD: org.bukkit.entity.EntityType
                /**
                 * @see ElderGuardian
                 */
                // @ts-ignore
                readonly ELDER_GUARDIAN: org.bukkit.entity.EntityType
                /**
                 * @see WitherSkeleton
                 */
                // @ts-ignore
                readonly WITHER_SKELETON: org.bukkit.entity.EntityType
                /**
                 * @see Stray
                 */
                // @ts-ignore
                readonly STRAY: org.bukkit.entity.EntityType
                /**
                 * A flying chicken egg.
                 */
                // @ts-ignore
                readonly EGG: org.bukkit.entity.EntityType
                /**
                 * A leash attached to a fencepost.
                 */
                // @ts-ignore
                readonly LEASH_HITCH: org.bukkit.entity.EntityType
                /**
                 * A painting on a wall.
                 */
                // @ts-ignore
                readonly PAINTING: org.bukkit.entity.EntityType
                /**
                 * An arrow projectile; may get stuck in the ground.
                 */
                // @ts-ignore
                readonly ARROW: org.bukkit.entity.EntityType
                /**
                 * A flying snowball.
                 */
                // @ts-ignore
                readonly SNOWBALL: org.bukkit.entity.EntityType
                /**
                 * A flying large fireball, as thrown by a Ghast for example.
                 */
                // @ts-ignore
                readonly FIREBALL: org.bukkit.entity.EntityType
                /**
                 * A flying small fireball, such as thrown by a Blaze or player.
                 */
                // @ts-ignore
                readonly SMALL_FIREBALL: org.bukkit.entity.EntityType
                /**
                 * A flying ender pearl.
                 */
                // @ts-ignore
                readonly ENDER_PEARL: org.bukkit.entity.EntityType
                /**
                 * An ender eye signal.
                 */
                // @ts-ignore
                readonly ENDER_SIGNAL: org.bukkit.entity.EntityType
                /**
                 * A flying splash potion.
                 */
                // @ts-ignore
                readonly SPLASH_POTION: org.bukkit.entity.EntityType
                /**
                 * A flying experience bottle.
                 */
                // @ts-ignore
                readonly THROWN_EXP_BOTTLE: org.bukkit.entity.EntityType
                /**
                 * An item frame on a wall.
                 */
                // @ts-ignore
                readonly ITEM_FRAME: org.bukkit.entity.EntityType
                /**
                 * A flying wither skull projectile.
                 */
                // @ts-ignore
                readonly WITHER_SKULL: org.bukkit.entity.EntityType
                /**
                 * Primed TNT that is about to explode.
                 */
                // @ts-ignore
                readonly PRIMED_TNT: org.bukkit.entity.EntityType
                /**
                 * A block that is going to or is about to fall.
                 */
                // @ts-ignore
                readonly FALLING_BLOCK: org.bukkit.entity.EntityType
                /**
                 * Internal representation of a Firework once it has been launched.
                 */
                // @ts-ignore
                readonly FIREWORK: org.bukkit.entity.EntityType
                /**
                 * @see Husk
                 */
                // @ts-ignore
                readonly HUSK: org.bukkit.entity.EntityType
                /**
                 * Like {@link #ARROW} but causes the {@link PotionEffectType#GLOWING} effect on all team members.
                 */
                // @ts-ignore
                readonly SPECTRAL_ARROW: org.bukkit.entity.EntityType
                /**
                 * Bullet fired by {@link #SHULKER}.
                 */
                // @ts-ignore
                readonly SHULKER_BULLET: org.bukkit.entity.EntityType
                /**
                 * Like {@link #FIREBALL} but with added effects.
                 */
                // @ts-ignore
                readonly DRAGON_FIREBALL: org.bukkit.entity.EntityType
                /**
                 * @see ZombieVillager
                 */
                // @ts-ignore
                readonly ZOMBIE_VILLAGER: org.bukkit.entity.EntityType
                /**
                 * @see SkeletonHorse
                 */
                // @ts-ignore
                readonly SKELETON_HORSE: org.bukkit.entity.EntityType
                /**
                 * @see ZombieHorse
                 */
                // @ts-ignore
                readonly ZOMBIE_HORSE: org.bukkit.entity.EntityType
                /**
                 * Mechanical entity with an inventory for placing weapons / armor into.
                 */
                // @ts-ignore
                readonly ARMOR_STAND: org.bukkit.entity.EntityType
                /**
                 * @see Donkey
                 */
                // @ts-ignore
                readonly DONKEY: org.bukkit.entity.EntityType
                /**
                 * @see Mule
                 */
                // @ts-ignore
                readonly MULE: org.bukkit.entity.EntityType
                /**
                 * @see EvokerFangs
                 */
                // @ts-ignore
                readonly EVOKER_FANGS: org.bukkit.entity.EntityType
                /**
                 * @see Evoker
                 */
                // @ts-ignore
                readonly EVOKER: org.bukkit.entity.EntityType
                /**
                 * @see Vex
                 */
                // @ts-ignore
                readonly VEX: org.bukkit.entity.EntityType
                /**
                 * @see Vindicator
                 */
                // @ts-ignore
                readonly VINDICATOR: org.bukkit.entity.EntityType
                /**
                 * @see Illusioner
                 */
                // @ts-ignore
                readonly ILLUSIONER: org.bukkit.entity.EntityType
                /**
                 * @see CommandMinecart
                 */
                // @ts-ignore
                readonly MINECART_COMMAND: org.bukkit.entity.EntityType
                /**
                 * A placed boat.
                 */
                // @ts-ignore
                readonly BOAT: org.bukkit.entity.EntityType
                /**
                 * @see RideableMinecart
                 */
                // @ts-ignore
                readonly MINECART: org.bukkit.entity.EntityType
                /**
                 * @see StorageMinecart
                 */
                // @ts-ignore
                readonly MINECART_CHEST: org.bukkit.entity.EntityType
                /**
                 * @see PoweredMinecart
                 */
                // @ts-ignore
                readonly MINECART_FURNACE: org.bukkit.entity.EntityType
                /**
                 * @see ExplosiveMinecart
                 */
                // @ts-ignore
                readonly MINECART_TNT: org.bukkit.entity.EntityType
                /**
                 * @see HopperMinecart
                 */
                // @ts-ignore
                readonly MINECART_HOPPER: org.bukkit.entity.EntityType
                /**
                 * @see SpawnerMinecart
                 */
                // @ts-ignore
                readonly MINECART_MOB_SPAWNER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly CREEPER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SKELETON: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SPIDER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly GIANT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly ZOMBIE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SLIME: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly GHAST: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PIG_ZOMBIE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly ENDERMAN: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly CAVE_SPIDER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SILVERFISH: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly BLAZE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly MAGMA_CUBE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly ENDER_DRAGON: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly WITHER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly BAT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly WITCH: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly ENDERMITE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly GUARDIAN: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SHULKER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PIG: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SHEEP: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly COW: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly CHICKEN: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SQUID: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly WOLF: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly MUSHROOM_COW: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SNOWMAN: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly OCELOT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly IRON_GOLEM: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly HORSE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly RABBIT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly POLAR_BEAR: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly LLAMA: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly LLAMA_SPIT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PARROT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly VILLAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly ENDER_CRYSTAL: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly TURTLE: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PHANTOM: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly TRIDENT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly COD: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly SALMON: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PUFFERFISH: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly TROPICAL_FISH: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly DROWNED: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly DOLPHIN: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly CAT: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PANDA: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PILLAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly RAVAGER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly TRADER_LLAMA: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly WANDERING_TRADER: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly FOX: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly BEE: org.bukkit.entity.EntityType
                /**
                 * A fishing line and bobber.
                 */
                // @ts-ignore
                readonly FISHING_HOOK: org.bukkit.entity.EntityType
                /**
                 * A bolt of lightning.
                 * <p>
                 * Spawn with {@link World#strikeLightning(Location)}.
                 */
                // @ts-ignore
                readonly LIGHTNING: org.bukkit.entity.EntityType
                // @ts-ignore
                readonly PLAYER: org.bukkit.entity.EntityType
                /**
                 * An unknown entity without an Entity Class
                 */
                // @ts-ignore
                readonly UNKNOWN: org.bukkit.entity.EntityType
                // @ts-ignore
                values(): org.bukkit.entity.EntityType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.entity.EntityType
                /**
                 * Gets the entity type name.
                 * @return the entity type's name
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getName(): string
                // @ts-ignore
                getKey(): org.bukkit.NamespacedKey
                // @ts-ignore
                getEntityClass(): java.lang.Class<any>
                /**
                 * Gets the entity type id.
                 * @return the raw type id
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getTypeId(): number /*short*/
                /**
                 * Gets an entity type from its name.
                 * @param name the entity type's name
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                fromName(name: java.lang.String | string): org.bukkit.entity.EntityType
                /**
                 * Gets an entity from its id.
                 * @param id the raw type id
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                fromId(id: number /*int*/): org.bukkit.entity.EntityType
                /**
                 * Some entities cannot be spawned using {@link
                 * World#spawnEntity(Location, EntityType)} or {@link
                 * World#spawn(Location, Class)}, usually because they require additional
                 * information in order to spawn.
                 * @return False if the entity type cannot be spawned
                 */
                // @ts-ignore
                isSpawnable(): boolean
                // @ts-ignore
                isAlive(): boolean
            }
        }
    }
}
