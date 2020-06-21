declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class LevelSoundEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_USE_ON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_STEP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FLY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_JUMP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HEAVY_STEP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_GALLOP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FALL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT_BABY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT_IN_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BREATHE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH_IN_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH_TO_ZOMBIE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HURT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HURT_IN_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_MAD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BOOST: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BOW: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SQUISH_BIG: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SQUISH_SMALL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FALL_BIG: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FALL_SMALL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SPLASH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FIZZ: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FLAP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SWIM: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DRINK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_EAT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_TAKEOFF: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHAKE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PLOP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LAND: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SADDLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_MOB_ARMOR_STAND_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ADD_CHEST: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_THROW: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ATTACK_NODAMAGE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ATTACK_STRONG: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_WARN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHEAR: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_MILK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_THUNDER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_EXPLODE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IGNITE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FUSE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_STARE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BREAK_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LAUNCH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLAST: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LARGE_BLAST: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_TWINKLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_REMEDY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_UNFECT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LEVELUP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BOW_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BULLET_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_EXTINGUISH_FIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_FIZZ: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CHEST_OPEN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CHEST_CLOSED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHULKERBOX_OPEN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHULKERBOX_CLOSED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ENDERCHEST_OPEN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ENDERCHEST_CLOSED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_POWER_ON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_POWER_OFF: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ATTACH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DETACH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DENY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_TRIPOD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_POP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DROP_SLOT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_NOTE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_THORNS: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PISTON_IN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PISTON_OUT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PORTAL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LAVA_POP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LAVA: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BURP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_FILL_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_FILL_LAVA: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_EMPTY_WATER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_EMPTY_LAVA: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_CHAIN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_DIAMOND: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_GENERIC: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_GOLD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_IRON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_LEATHER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ARMOR_EQUIP_ELYTRA: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_13: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_CAT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_BLOCKS: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_CHIRP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_FAR: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_MALL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_MELLOHI: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_STAL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_STRAD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_WARD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_11: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RECORD_WAIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_STOP_RECORD: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_GUARDIAN_FLOP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ELDERGUARDIAN_CURSE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_MOB_WARNING: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_MOB_WARNING_BABY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_TELEPORT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHULKER_OPEN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SHULKER_CLOSE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HAGGLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HAGGLE_YES: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HAGGLE_NO: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HAGGLE_IDLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CHORUSGROW: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CHORUSDEATH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_GLASS: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_POTION_BREWED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CAST_SPELL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PREPARE_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PREPARE_SUMMON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PREPARE_WOLOLO: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_FANG: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CHARGE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CAMERA_TAKE_PICTURE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LEASHKNOT_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LEASHKNOT_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_GROWL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_WHINE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PANT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PURR: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PURREOW: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH_MIN_VOLUME: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH_MID_VOLUME: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_BLAZE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_CAVE_SPIDER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_CREEPER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ELDER_GUARDIAN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ENDER_DRAGON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ENDERMAN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_EVOCATION_ILLAGER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_GHAST: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_HUSK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ILLUSION_ILLAGER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_MAGMA_CUBE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_POLAR_BEAR: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_SHULKER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_SILVERFISH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_SKELETON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_SLIME: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_SPIDER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_STRAY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_VEX: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_VINDICATION_ILLAGER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_WITCH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_WITHER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_WITHER_SKELETON: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_WOLF: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ZOMBIE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ZOMBIE_PIGMAN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_IMITATE_ZOMBIE_VILLAGER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_END_PORTAL_FRAME_FILL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_END_PORTAL_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_RANDOM_ANVIL_USE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BOTTLE_DRAGONBREATH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PORTAL_TRAVEL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_RETURN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_RIPTIDE_1: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_RIPTIDE_2: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_RIPTIDE_3: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_THROW: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_THUNDER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ITEM_TRIDENT_HIT_GROUND: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEFAULT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ELEMCONSTRUCT_OPEN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_ICEBOMB_HIT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BALLOONPOP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_ICEBOMB: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_BLEACH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_EPASTE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_EPASTE2: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_FERTILIZER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_FIREBALL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_MGSALT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_MISCFIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_FIRE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_MISCEXPLOSION: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_MISCMYSTICAL: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_MISCMYSTICAL2: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_LT_REACTION_PRODUCT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SPARKLER_USE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_GLOWSTICK_USE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SPARKLER_ACTIVE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONVERT_TO_DROWNED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_FILL_FISH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUCKET_EMPTY_FISH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUBBLE_UP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUBBLE_DOWN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUBBLE_POP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUBBLE_UPINSIDE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BUBBLE_DOWNINSIDE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_HURT_BABY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_DEATH_BABY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_STEP_BABY: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BORN: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_TURTLE_EGG_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_TURTLE_EGG_CRACK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_TURTLE_EGG_HATCH: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_TURTLE_EGG_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BEACON_ACTIVATE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BEACON_AMBIENT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BEACON_DEACTIVATE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BEACON_POWER: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONDUIT_ACTIVATE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONDUIT_AMBIENT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONDUIT_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONDUIT_DEACTIVATE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CONDUIT_SHORT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SWOOP: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_BAMBOO_SAPLING_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_PRESNEEZE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SNEEZE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT_TAME: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_SCARED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_BLOCK_SCAFFOLDING_CLIMB: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_LOADING_START: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_LOADING_MIDDLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_LOADING_END: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_QUICK_CHARGE_START: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_QUICK_CHARGE_MIDDLE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CROSSBOW_QUICK_CHARGE_END: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT_AGGRESSIVE: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_AMBIENT_WORRIED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_CANT_BREED: number /*int*/
                    // @ts-ignore
                    public static readonly SOUND_UNDEFINED: number /*int*/
                    // @ts-ignore
                    public sound: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public extraData: number /*int*/
                    // @ts-ignore
                    public entityIdentifier: java.lang.String | string
                    // @ts-ignore
                    public isBabyMob: boolean
                    // @ts-ignore
                    public isGlobal: boolean
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
