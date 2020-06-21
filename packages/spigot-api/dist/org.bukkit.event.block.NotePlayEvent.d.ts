declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a note block is being played through player interaction or a
                 * redstone current.
                 */
                // @ts-ignore
                class NotePlayEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, instrument: org.bukkit.Instrument, note: org.bukkit.Note)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the {@link Instrument} to be used.
                     * @return the Instrument
                     */
                    // @ts-ignore
                    public getInstrument(): org.bukkit.Instrument
                    /**
                     * Gets the {@link Note} to be played.
                     * @return the Note
                     */
                    // @ts-ignore
                    public getNote(): org.bukkit.Note
                    /**
                     * Overrides the {@link Instrument} to be used.
                     * @param instrument the Instrument. Has no effect if null.
                     * @deprecated no effect on newer Minecraft versions
                     */
                    // @ts-ignore
                    public setInstrument(instrument: org.bukkit.Instrument): void
                    /**
                     * Overrides the {@link Note} to be played.
                     * @param note the Note. Has no effect if null.
                     * @deprecated no effect on newer Minecraft versions
                     */
                    // @ts-ignore
                    public setNote(note: org.bukkit.Note): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
