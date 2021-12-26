declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Cooldown extends java.lang.Object implements java.util.function.LongSupplier {
                // @ts-ignore
                public static ofTicks(ticks: number /*long*/): io.lumine.utils.Cooldown
                // @ts-ignore
                public static of(amount: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.Cooldown
                // @ts-ignore
                public test(): boolean
                // @ts-ignore
                public testSilently(): boolean
                // @ts-ignore
                public elapsed(): number /*long*/
                // @ts-ignore
                public reset(): void
                // @ts-ignore
                public remainingMillis(): number /*long*/
                // @ts-ignore
                public remainingTime(unit: java.util.concurrent.TimeUnit): number /*long*/
                // @ts-ignore
                public getAsLong(): number /*long*/
                // @ts-ignore
                public getTimeout(): number /*long*/
                // @ts-ignore
                public copy(): io.lumine.utils.Cooldown
            }
        }
    }
}
