declare namespace java {
    namespace lang {
        namespace Thread {
            /**
             * The possible Thread states.
             */
            // @ts-ignore
            class State extends java.lang.Enum<java.lang.Thread.State> {
                /**
                 * A Thread which has not yet started.
                 */
                // @ts-ignore
                public static readonly NEW: java.lang.Thread.State
                /**
                 * A Thread which is running or suspended.
                 */
                // @ts-ignore
                public static readonly RUNNABLE: java.lang.Thread.State
                /**
                 * A Thread which is blocked on a monitor.
                 */
                // @ts-ignore
                public static readonly BLOCKED: java.lang.Thread.State
                /**
                 * A Thread which is waiting with no timeout.
                 */
                // @ts-ignore
                public static readonly WAITING: java.lang.Thread.State
                /**
                 * A Thread which is waiting with a timeout.
                 */
                // @ts-ignore
                public static readonly TIMED_WAITING: java.lang.Thread.State
                /**
                 * A thread which is no longer alive.
                 */
                // @ts-ignore
                public static readonly TERMINATED: java.lang.Thread.State
                // @ts-ignore
                public static values(): java.lang.Thread.State[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.lang.Thread.State
            }
        }
    }
}
