declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player edits or signs a book and quill item. If the event is
                 * cancelled, no changes are made to the BookMeta
                 */
                // @ts-ignore
                class PlayerEditBookEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, slot: number /*int*/, previousBookMeta: org.bukkit.inventory.meta.BookMeta, newBookMeta: org.bukkit.inventory.meta.BookMeta, isSigning: boolean)
                    /**
                     * Gets the book meta currently on the book.
                     * <p>
                     * Note: this is a copy of the book meta. You cannot use this object to
                     * change the existing book meta.
                     * @return the book meta currently on the book
                     */
                    // @ts-ignore
                    public getPreviousBookMeta(): org.bukkit.inventory.meta.BookMeta
                    /**
                     * Gets the book meta that the player is attempting to add to the book.
                     * <p>
                     * Note: this is a copy of the proposed new book meta. Use {@link
                     * #setNewBookMeta(BookMeta)} to change what will actually be added to the
                     * book.
                     * @return the book meta that the player is attempting to add
                     */
                    // @ts-ignore
                    public getNewBookMeta(): org.bukkit.inventory.meta.BookMeta
                    /**
                     * Gets the inventory slot number for the book item that triggered this
                     * event.
                     * <p>
                     * This is a slot number on the player's hotbar in the range 0-8, or -1 for
                     * off hand.
                     * @return the inventory slot number that the book item occupies
                     * @deprecated books may be signed from off hand
                     */
                    // @ts-ignore
                    public getSlot(): number /*int*/
                    /**
                     * Sets the book meta that will actually be added to the book.
                     * @param newBookMeta new book meta
                     * @throws IllegalArgumentException if the new book meta is null
                     */
                    // @ts-ignore
                    public setNewBookMeta(newBookMeta: org.bukkit.inventory.meta.BookMeta): void
                    /**
                     * Gets whether or not the book is being signed. If a book is signed the
                     * Material changes from BOOK_AND_QUILL to WRITTEN_BOOK.
                     * @return true if the book is being signed
                     */
                    // @ts-ignore
                    public isSigning(): boolean
                    /**
                     * Sets whether or not the book is being signed. If a book is signed the
                     * Material changes from BOOK_AND_QUILL to WRITTEN_BOOK.
                     * @param signing whether or not the book is being signed.
                     */
                    // @ts-ignore
                    public setSigning(signing: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
