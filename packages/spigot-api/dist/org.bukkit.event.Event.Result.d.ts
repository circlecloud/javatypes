declare namespace org {
    namespace bukkit {
        namespace event {
            namespace Event {
                // @ts-ignore
                class Result extends java.lang.Enum<org.bukkit.event.Event.Result> {
                    /**
                     * Deny the event. Depending on the event, the action indicated by the
                     * event will either not take place or will be reverted. Some actions
                     * may not be denied.
                     */
                    // @ts-ignore
                    readonly DENY: org.bukkit.event.Event.Result
                    /**
                     * Neither deny nor allow the event. The server will proceed with its
                     * normal handling.
                     */
                    // @ts-ignore
                    readonly DEFAULT: org.bukkit.event.Event.Result
                    /**
                     * Allow / Force the event. The action indicated by the event will
                     * take place if possible, even if the server would not normally allow
                     * the action. Some actions may not be allowed.
                     */
                    // @ts-ignore
                    readonly ALLOW: org.bukkit.event.Event.Result
                    // @ts-ignore
                    values(): org.bukkit.event.Event.Result[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.event.Event.Result
                }
            }
        }
    }
}
