declare namespace org {
    namespace spigotmc {
        /**
         * Provides custom timing sections for /timings merged.
         */
        // @ts-ignore
        class CustomTimingsHandler extends java.lang.Object {
            // @ts-ignore
            constructor(name: java.lang.String | string)
            // @ts-ignore
            constructor(name: java.lang.String | string, parent: org.spigotmc.CustomTimingsHandler)
            /**
             * Prints the timings and extra data to the given stream.
             * @param printStream output stream
             */
            // @ts-ignore
            public static printTimings(printStream: java.io.PrintStream): void
            /**
             * Resets all timings.
             */
            // @ts-ignore
            public static reload(): void
            /**
             * Ticked every tick by CraftBukkit to count the number of times a timer
             * caused TPS loss.
             */
            // @ts-ignore
            public static tick(): void
            /**
             * Starts timing to track a section of code.
             */
            // @ts-ignore
            public startTiming(): void
            /**
             * Stops timing a section of code.
             */
            // @ts-ignore
            public stopTiming(): void
            /**
             * Reset this timer, setting all values to zero.
             */
            // @ts-ignore
            public reset(): void
        }
    }
}
