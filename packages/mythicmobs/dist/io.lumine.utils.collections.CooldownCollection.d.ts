declare namespace io {
    namespace lumine {
        namespace utils {
            namespace collections {
                // @ts-ignore
                class CooldownCollection<T> extends java.lang.Object {
                    // @ts-ignore
                    public static create(base: io.lumine.utils.Cooldown): io.lumine.utils.collections.CooldownCollection<java.lang.String | string>
                    // @ts-ignore
                    public static create<T>(mappingFunc: java.util.function$.Function<T, java.lang.String | string>, base: io.lumine.utils.Cooldown): io.lumine.utils.collections.CooldownCollection<T>
                    // @ts-ignore
                    public static createWithToString<T>(base: io.lumine.utils.Cooldown): io.lumine.utils.collections.CooldownCollection<T>
                    // @ts-ignore
                    public get(t: T): io.lumine.utils.Cooldown
                    // @ts-ignore
                    public test(t: T): boolean
                    // @ts-ignore
                    public testSilently(t: T): boolean
                    // @ts-ignore
                    public elapsed(t: T): number /*long*/
                    // @ts-ignore
                    public reset(t: T): void
                    // @ts-ignore
                    public remainingMillis(t: T): number /*long*/
                    // @ts-ignore
                    public remainingTime(t: T, unit: java.util.concurrent.TimeUnit): number /*long*/
                }
            }
        }
    }
}
