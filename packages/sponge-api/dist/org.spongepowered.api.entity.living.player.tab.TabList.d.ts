declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            /**
                             * Represents a {@link Player}'s tab list.
                             */
                            // @ts-ignore
                            interface TabList {
                                /**
                                 * Gets the associated {@link Player} with this {@link TabList}.
                                 * @return The associated player
                                 */
                                // @ts-ignore
                                getPlayer(): org.spongepowered.api.entity.living.player.Player
                                /**
                                 * Gets this list's header.
                                 * @return The current header
                                 */
                                // @ts-ignore
                                getHeader(): java.util.Optional<org.spongepowered.api.text.Text>
                                /**
                                 * Sets this list's header.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 * @param header The new header
                                 * @return This tab list, for chaining
                                 */
                                // @ts-ignore
                                setHeader(header: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList
                                /**
                                 * Gets this list's footer.
                                 * @return The current footer
                                 */
                                // @ts-ignore
                                getFooter(): java.util.Optional<org.spongepowered.api.text.Text>
                                /**
                                 * Sets this list's footer.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 * @param footer The new footer
                                 * @return This tab list, for chaining
                                 */
                                // @ts-ignore
                                setFooter(footer: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList
                                /**
                                 * Sets this list's header and footer.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 * @param header The new header
                                 * @param footer The new footer
                                 * @return This tab list, for chaining
                                 */
                                // @ts-ignore
                                setHeaderAndFooter(header: org.spongepowered.api.text.Text, footer: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList
                                /**
                                 * Gets the entries on the list.
                                 * <p>The returned collection should be immutable.</p>
                                 * @return The entries on the list
                                 */
                                // @ts-ignore
                                getEntries(): Array<org.spongepowered.api.entity.living.player.tab.TabListEntry>
                                /**
                                 * Gets a {@link TabListEntry} matching the specified unique id.
                                 * @param uniqueId The unique id to search for
                                 * @return The entry if present, otherwise {#link Optional#empty()}
                                 */
                                // @ts-ignore
                                getEntry(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.living.player.tab.TabListEntry>
                                /**
                                 * Adds an entry to the list.
                                 * @param entry The entry to add
                                 * @return This tab list, for chaining
                                 * @throws IllegalArgumentException if an entry already with the same unique
                                 *      id exists on the list
                                 * @throws IllegalStateException if the provided entry was not
                                 */
                                // @ts-ignore
                                addEntry(entry: org.spongepowered.api.entity.living.player.tab.TabListEntry): org.spongepowered.api.entity.living.player.tab.TabList
                                /**
                                 * Removes an entry from the list.
                                 * <p>Note that if this is used on a player, but they remain visible
                                 * in-game, their skin will not work.</p>
                                 * @param uniqueId The unique id of the entry to remove
                                 * @return The entry that was associated with the unique id
                                 */
                                // @ts-ignore
                                removeEntry(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.living.player.tab.TabListEntry>
                            }
                        }
                    }
                }
            }
        }
    }
}
