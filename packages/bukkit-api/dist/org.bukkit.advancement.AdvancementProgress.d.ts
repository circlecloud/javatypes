declare namespace org {
    namespace bukkit {
        namespace advancement {
            /**
             * The individual status of an advancement for a player. This class is not
             * reference safe as the underlying advancement may be reloaded.
             */
            // @ts-ignore
            interface AdvancementProgress {
                /**
                 * The advancement this progress is concerning.
                 * @return the relevant advancement
                 */
                // @ts-ignore
                getAdvancement(): org.bukkit.advancement.Advancement
                /**
                 * Check if all criteria for this advancement have been met.
                 * @return true if this advancement is done
                 */
                // @ts-ignore
                isDone(): boolean
                /**
                 * Mark the specified criteria as awarded at the current time.
                 * @param criteria the criteria to mark
                 * @return true if awarded, false if criteria does not exist or already
                 *  awarded.
                 */
                // @ts-ignore
                awardCriteria(criteria: java.lang.String | string): boolean
                /**
                 * Mark the specified criteria as uncompleted.
                 * @param criteria the criteria to mark
                 * @return true if removed, false if criteria does not exist or not awarded
                 */
                // @ts-ignore
                revokeCriteria(criteria: java.lang.String | string): boolean
                /**
                 * Get the date the specified criteria was awarded.
                 * @param criteria the criteria to check
                 * @return date awarded or null if unawarded or criteria does not exist
                 */
                // @ts-ignore
                getDateAwarded(criteria: java.lang.String | string): java.util.Date
                /**
                 * Get the criteria which have not been awarded.
                 * @return unmodifiable copy of criteria remaining
                 */
                // @ts-ignore
                getRemainingCriteria(): Array<java.lang.String | string>
                /**
                 * Gets the criteria which have been awarded.
                 * @return unmodifiable copy of criteria awarded
                 */
                // @ts-ignore
                getAwardedCriteria(): Array<java.lang.String | string>
            }
        }
    }
}
