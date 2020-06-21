declare namespace org {
    namespace bukkit {
        namespace event {
            /**
             * Represents an event's priority in execution
             */
            // @ts-ignore
            class EventPriority extends java.lang.Enum<org.bukkit.event.EventPriority> {
                /**
                 * Event call is of very low importance and should be ran first, to allow
                 * other plugins to further customise the outcome
                 */
                // @ts-ignore
                readonly LOWEST: org.bukkit.event.EventPriority
                /**
                 * Event call is of low importance
                 */
                // @ts-ignore
                readonly LOW: org.bukkit.event.EventPriority
                /**
                 * Event call is neither important nor unimportant, and may be ran
                 * normally
                 */
                // @ts-ignore
                readonly NORMAL: org.bukkit.event.EventPriority
                /**
                 * Event call is of high importance
                 */
                // @ts-ignore
                readonly HIGH: org.bukkit.event.EventPriority
                /**
                 * Event call is critical and must have the final say in what happens
                 * to the event
                 */
                // @ts-ignore
                readonly HIGHEST: org.bukkit.event.EventPriority
                /**
                 * Event is listened to purely for monitoring the outcome of an event.
                 * <p>
                 * No modifications to the event should be made under this priority
                 */
                // @ts-ignore
                readonly MONITOR: org.bukkit.event.EventPriority
                // @ts-ignore
                values(): org.bukkit.event.EventPriority[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.event.EventPriority
                // @ts-ignore
                getSlot(): number /*int*/
            }
        }
    }
}
