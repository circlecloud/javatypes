declare namespace org {
    namespace bukkit {
        namespace boss {
            namespace DragonBattle {
                /**
                 * Represents a phase in the dragon respawn process.
                 */
                // @ts-ignore
                class RespawnPhase extends java.lang.Enum<org.bukkit.boss.DragonBattle.RespawnPhase> {
                    /**
                     * The crystal beams are directed upwards into the sky.
                     */
                    // @ts-ignore
                    public static readonly START: org.bukkit.boss.DragonBattle.RespawnPhase
                    /**
                     * The crystal beams remain directed upwards.
                     */
                    // @ts-ignore
                    public static readonly PREPARING_TO_SUMMON_PILLARS: org.bukkit.boss.DragonBattle.RespawnPhase
                    /**
                     * The crystal beams are directed from pillar to pillar, regenerating
                     * their crystals if necessary.
                     */
                    // @ts-ignore
                    public static readonly SUMMONING_PILLARS: org.bukkit.boss.DragonBattle.RespawnPhase
                    /**
                     * All crystals (including those from the pillars) are aimed towards the
                     * sky. Shortly thereafter summoning the dragon and destroying the
                     * crystals used to initiate the dragon's respawn.
                     */
                    // @ts-ignore
                    public static readonly SUMMONING_DRAGON: org.bukkit.boss.DragonBattle.RespawnPhase
                    /**
                     * The end of the respawn sequence. The dragon is actually summoned.
                     */
                    // @ts-ignore
                    public static readonly END: org.bukkit.boss.DragonBattle.RespawnPhase
                    /**
                     * No respawn is in progress.
                     */
                    // @ts-ignore
                    public static readonly NONE: org.bukkit.boss.DragonBattle.RespawnPhase
                    // @ts-ignore
                    public static values(): org.bukkit.boss.DragonBattle.RespawnPhase[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.boss.DragonBattle.RespawnPhase
                }
            }
        }
    }
}
