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
                public static readonly LOWEST: org.bukkit.event.EventPriority
                /**
                 * Event call is of low importance
                 */
                // @ts-ignore
                public static readonly LOW: org.bukkit.event.EventPriority
                /**
                 * Event call is neither important nor unimportant, and may be ran
                 * normally
                 */
                // @ts-ignore
                public static readonly NORMAL: org.bukkit.event.EventPriority
                /**
                 * Event call is of high importance
                 */
                // @ts-ignore
                public static readonly HIGH: org.bukkit.event.EventPriority
                /**
                 * Event call is critical and must have the final say in what happens
                 * to the event
                 */
                // @ts-ignore
                public static readonly HIGHEST: org.bukkit.event.EventPriority
                /**
                 * Event is listened to purely for monitoring the outcome of an event.
                 * <p>
                 * No modifications to the event should be made under this priority
                 */
                // @ts-ignore
                public static readonly MONITOR: org.bukkit.event.EventPriority
                // @ts-ignore
                public static values(): org.bukkit.event.EventPriority[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.event.EventPriority
                // @ts-ignore
                public getSlot(): number /*int*/
            }
        }
    }
}
