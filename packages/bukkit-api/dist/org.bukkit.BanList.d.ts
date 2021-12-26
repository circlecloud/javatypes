declare namespace org {
    namespace bukkit {
        /**
         * A ban list, containing bans of some {@link Type}.
         */
        // @ts-ignore
        interface BanList {
            /**
             * Gets a {@link BanEntry} by target.
             * @param target entry parameter to search for
             * @return the corresponding entry, or null if none found
             */
            // @ts-ignore
            getBanEntry(target: java.lang.String | string): org.bukkit.BanEntry
            /**
             * Adds a ban to the this list. If a previous ban exists, this will
             * update the previous entry.
             * @param target the target of the ban
             * @param reason reason for the ban, null indicates implementation default
             * @param expires date for the ban's expiration (unban), or null to imply
             *      forever
             * @param source source of the ban, null indicates implementation default
             * @return the entry for the newly created ban, or the entry for the
             *      (updated) previous ban
             */
            // @ts-ignore
            addBan(target: java.lang.String | string, reason: java.lang.String | string, expires: java.util.Date, source: java.lang.String | string): org.bukkit.BanEntry
            /**
             * Gets a set containing every {@link BanEntry} in this list.
             * @return an immutable set containing every entry tracked by this list
             */
            // @ts-ignore
            getBanEntries(): Array<org.bukkit.BanEntry>
            /**
             * Gets if a {@link BanEntry} exists for the target, indicating an active
             * ban status.
             * @param target the target to find
             * @return true if a {#link BanEntry} exists for the name, indicating an
             *      active ban status, false otherwise
             */
            // @ts-ignore
            isBanned(target: java.lang.String | string): boolean
            /**
             * Removes the specified target from this list, therefore indicating a
             * "not banned" status.
             * @param target the target to remove from this list
             */
            // @ts-ignore
            pardon(target: java.lang.String | string): void
        }
    }
}
