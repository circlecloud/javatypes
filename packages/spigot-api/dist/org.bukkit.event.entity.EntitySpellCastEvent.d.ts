declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a {@link Spellcaster} casts a spell.
                 */
                // @ts-ignore
                class EntitySpellCastEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Spellcaster, spell: org.bukkit.entity.Spellcaster.Spell)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Spellcaster
                    /**
                     * Get the spell to be cast in this event.
                     * This is a convenience method equivalent to
                     * {@link Spellcaster#getSpell()}.
                     * @return the spell to cast
                     */
                    // @ts-ignore
                    public getSpell(): org.bukkit.entity.Spellcaster.Spell
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
