declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly HURT_ANIMATION: number /*int*/
                    // @ts-ignore
                    public static readonly DEATH_ANIMATION: number /*int*/
                    // @ts-ignore
                    public static readonly ARM_SWING: number /*int*/
                    // @ts-ignore
                    public static readonly TAME_FAIL: number /*int*/
                    // @ts-ignore
                    public static readonly TAME_SUCCESS: number /*int*/
                    // @ts-ignore
                    public static readonly SHAKE_WET: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly EAT_GRASS_ANIMATION: number /*int*/
                    // @ts-ignore
                    public static readonly FISH_HOOK_BUBBLE: number /*int*/
                    // @ts-ignore
                    public static readonly FISH_HOOK_POSITION: number /*int*/
                    // @ts-ignore
                    public static readonly FISH_HOOK_HOOK: number /*int*/
                    // @ts-ignore
                    public static readonly FISH_HOOK_TEASE: number /*int*/
                    // @ts-ignore
                    public static readonly SQUID_INK_CLOUD: number /*int*/
                    // @ts-ignore
                    public static readonly ZOMBIE_VILLAGER_CURE: number /*int*/
                    // @ts-ignore
                    public static readonly AMBIENT_SOUND: number /*int*/
                    // @ts-ignore
                    public static readonly RESPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly IRON_GOLEM_OFFER_FLOWER: number /*int*/
                    // @ts-ignore
                    public static readonly IRON_GOLEM_WITHDRAW_FLOWER: number /*int*/
                    // @ts-ignore
                    public static readonly LOVE_PARTICLES: number /*int*/
                    // @ts-ignore
                    public static readonly WITCH_SPELL_PARTICLES: number /*int*/
                    // @ts-ignore
                    public static readonly FIREWORK_EXPLOSION: number /*int*/
                    // @ts-ignore
                    public static readonly SILVERFISH_SPAWN_ANIMATION: number /*int*/
                    // @ts-ignore
                    public static readonly WITCH_DRINK_POTION: number /*int*/
                    // @ts-ignore
                    public static readonly WITCH_THROW_POTION: number /*int*/
                    // @ts-ignore
                    public static readonly MINECART_TNT_PRIME_FUSE: number /*int*/
                    // @ts-ignore
                    public static readonly ENCHANT: number /*int*/
                    // @ts-ignore
                    public static readonly ELDER_GUARDIAN_CURSE: number /*int*/
                    // @ts-ignore
                    public static readonly AGENT_ARM_SWING: number /*int*/
                    // @ts-ignore
                    public static readonly ENDER_DRAGON_DEATH: number /*int*/
                    // @ts-ignore
                    public static readonly DUST_PARTICLES: number /*int*/
                    // @ts-ignore
                    public static readonly ARROW_SHAKE: number /*int*/
                    // @ts-ignore
                    public static readonly EATING_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly BABY_ANIMAL_FEED: number /*int*/
                    // @ts-ignore
                    public static readonly DEATH_SMOKE_CLOUD: number /*int*/
                    // @ts-ignore
                    public static readonly COMPLETE_TRADE: number /*int*/
                    // @ts-ignore
                    public static readonly REMOVE_LEASH: number /*int*/
                    // @ts-ignore
                    public static readonly CONSUME_TOTEM: number /*int*/
                    // @ts-ignore
                    public static readonly PLAYER_CHECK_TREASURE_HUNTER_ACHIEVEMENT: number /*int*/
                    // @ts-ignore
                    public static readonly ENTITY_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly DRAGON_PUKE: number /*int*/
                    // @ts-ignore
                    public static readonly MERGE_ITEMS: number /*int*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public event: number /*int*/
                    // @ts-ignore
                    public data: number /*int*/
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
