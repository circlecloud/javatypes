declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class LevelEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CLICK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CLICK_FAIL: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_DOOR: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_FIZZ: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_TNT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_GHAST: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_BLAZE_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_GHAST_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_DOOR_BUMP: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_DOOR_CRASH: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ENDERMAN_TELEPORT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ANVIL_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ANVIL_USE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ANVIL_FALL: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_DROP: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_THROWN: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_PORTAL: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_FRAME_ITEM_ADDED: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_FRAME_PLACED: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_FRAME_REMOVED: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_FRAME_ITEM_REMOVED: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ITEM_FRAME_ITEM_ROTATED: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CAMERA_TAKE_PICTURE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_EXPERIENCE_ORB: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_TOTEM: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ARMOR_STAND_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ARMOR_STAND_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ARMOR_STAND_FALL: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_ARMOR_STAND_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_GUARDIAN_CURSE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_BLOCK_FORCE_FIELD: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_PROJECTILE_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_DRAGON_EGG_TELEPORT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_ENDERMAN_TELEPORT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_PUNCH_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_BUTTON_CLICK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_EXPLODE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_DYE_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_CLEAN_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_FILL_POTION: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_TAKE_POTION: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_TAKE_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_ADD_DYE: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_CAULDRON_CLEAN_BANNER: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_DESTROY: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_EYE_DESPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PARTICLE_BONEMEAL: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_START_RAIN: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_START_THUNDER: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_STOP_RAIN: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_STOP_THUNDER: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CAULDRON: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CAULDRON_DYE_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CAULDRON_FILL_POTION: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SOUND_CAULDRON_FILL_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_BLOCK_START_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_BLOCK_STOP_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_SET_DATA: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_PLAYERS_SLEEPING: number /*int*/
                    // @ts-ignore
                    public static readonly EVENT_ADD_PARTICLE_MASK: number /*int*/
                    // @ts-ignore
                    public evid: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
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
