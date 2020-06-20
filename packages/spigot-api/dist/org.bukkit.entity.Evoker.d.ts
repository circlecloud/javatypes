declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an Evoker "Illager".
             */
            // @ts-ignore
            interface Evoker extends org.bukkit.entity.Spellcaster {
                /**
                 * Gets the {@link Spell} the Evoker is currently using.
                 * @return the current spell
                 * @deprecated future versions of Minecraft have additional spell casting
                 *  entities.
                 */
                // @ts-ignore
                getCurrentSpell(): org.bukkit.entity.Evoker.Spell
                /**
                 * Sets the {@link Spell} the Evoker is currently using.
                 * @param spell the spell the evoker should be using
                 * @deprecated future versions of Minecraft have additional spell casting
                 *  entities.
                 */
                // @ts-ignore
                setCurrentSpell(spell: org.bukkit.entity.Evoker.Spell): void
            }
        }
    }
}
