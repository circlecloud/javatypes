declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a spell casting "Illager".
             */
            // @ts-ignore
            interface Spellcaster extends org.bukkit.entity.Illager {
                /**
                 * Gets the {@link Spell} the entity is currently using.
                 * @return the current spell
                 */
                // @ts-ignore
                getSpell(): org.bukkit.entity.Spellcaster.Spell
                /**
                 * Sets the {@link Spell} the entity is currently using.
                 * @param spell the spell the entity should be using
                 */
                // @ts-ignore
                setSpell(spell: org.bukkit.entity.Spellcaster.Spell): void
            }
        }
    }
}
