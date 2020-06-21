declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Spellcaster {
                /**
                 * Represents the current spell the entity is using.
                 */
                // @ts-ignore
                class Spell extends java.lang.Enum<org.bukkit.entity.Spellcaster.Spell> {
                    /**
                     * No spell is being used..
                     */
                    // @ts-ignore
                    readonly NONE: org.bukkit.entity.Spellcaster.Spell
                    /**
                     * The spell that summons Vexes.
                     */
                    // @ts-ignore
                    readonly SUMMON_VEX: org.bukkit.entity.Spellcaster.Spell
                    /**
                     * The spell that summons Fangs.
                     */
                    // @ts-ignore
                    readonly FANGS: org.bukkit.entity.Spellcaster.Spell
                    /**
                     * The "wololo" spell.
                     */
                    // @ts-ignore
                    readonly WOLOLO: org.bukkit.entity.Spellcaster.Spell
                    /**
                     * The spell that makes the casting entity invisible.
                     */
                    // @ts-ignore
                    readonly DISAPPEAR: org.bukkit.entity.Spellcaster.Spell
                    /**
                     * The spell that makes the target blind.
                     */
                    // @ts-ignore
                    readonly BLINDNESS: org.bukkit.entity.Spellcaster.Spell
                    // @ts-ignore
                    values(): org.bukkit.entity.Spellcaster.Spell[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.entity.Spellcaster.Spell
                }
            }
        }
    }
}
