declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class Particle extends cn.nukkit.math.Vector3 {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(x: number /*double*/)
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/)
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                    // @ts-ignore
                    public static readonly TYPE_BUBBLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CRITICAL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_BLOCK_FORCE_FIELD: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SMOKE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_EXPLODE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_EVAPORATION: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FLAME: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_LAVA: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_LARGE_SMOKE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_REDSTONE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RISING_RED_DUST: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ITEM_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SNOWBALL_POOF: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_HUGE_EXPLODE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_HUGE_EXPLODE_SEED: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MOB_FLAME: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_HEART: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TERRAIN: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SUSPENDED_TOWN: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TOWN_AURA: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_PORTAL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_WATER_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_WATER_WAKE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DRIP_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DRIP_LAVA: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DRIP_HONEY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FALLING_DUST: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DUST: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MOB_SPELL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MOB_SPELL_AMBIENT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MOB_SPELL_INSTANTANEOUS: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_NOTE_AND_DUST: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SLIME: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RAIN_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_VILLAGER_ANGRY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_VILLAGER_HAPPY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ENCHANTMENT_TABLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TRACKING_EMITTER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_NOTE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_WITCH_SPELL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CARROT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_END_ROD: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RISING_DRAGONS_BREATH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SPIT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TOTEM: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FOOD: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FIREWORKS_STARTER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FIREWORKS_SPARK: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FIREWORKS_OVERLAY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_BALLOON_GAS: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_COLORED_FLAME: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SPARKLER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CONDUIT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_BUBBLE_COLUMN_UP: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_BUBBLE_COLUMN_DOWN: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SNEEZE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_LARGE_EXPLOSION: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_INK: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FALLING_RED_DUST: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CAMPFIRE_SMOKE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FALLING_DRAGONS_BREATH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DRAGONS_BREATH: number /*int*/
                    // @ts-ignore
                    public abstract encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
