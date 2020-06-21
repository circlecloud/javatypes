declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Evoker {
                /**
                 * Represents the current spell the Evoker is using.
                 * @deprecated future versions of Minecraft have additional spell casting
                 *  entities.
                 */
                // @ts-ignore
                class Spell extends java.lang.Enum<org.bukkit.entity.Evoker.Spell> {
                    /**
                     * No spell is being evoked.
                     */
                    // @ts-ignore
                    readonly NONE: org.bukkit.entity.Evoker.Spell
                    /**
                     * The spell that summons Vexes.
                     */
                    // @ts-ignore
                    readonly SUMMON: org.bukkit.entity.Evoker.Spell
                    /**
                     * The spell that summons Fangs.
                     */
                    // @ts-ignore
                    readonly FANGS: org.bukkit.entity.Evoker.Spell
                    /**
                     * The "wololo" spell.
                     */
                    // @ts-ignore
                    readonly WOLOLO: org.bukkit.entity.Evoker.Spell
                    /**
                     * The spell that makes the casting entity invisible.
                     */
                    // @ts-ignore
                    readonly DISAPPEAR: org.bukkit.entity.Evoker.Spell
                    /**
                     * The spell that makes the target blind.
                     */
                    // @ts-ignore
                    readonly BLINDNESS: org.bukkit.entity.Evoker.Spell
                    // @ts-ignore
                    values(): org.bukkit.entity.Evoker.Spell[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.entity.Evoker.Spell
                }
            }
        }
    }
}
