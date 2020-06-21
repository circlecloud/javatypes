declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace scheduler {
                // @ts-ignore
                class BungeeTask extends java.lang.Object implements java.lang.Runnable {
                    // @ts-ignore
                    constructor(sched: net.md_5.bungee.scheduler.BungeeScheduler, id: number /*int*/, owner: Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/, unit: java.util.concurrent.TimeUnit)
                    // @ts-ignore
                    public cancel(): void
                    // @ts-ignore
                    public run(): void
                    // @ts-ignore
                    public getSched(): net.md_5.bungee.scheduler.BungeeScheduler
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getOwner(): Plugin
                    // @ts-ignore
                    public getTask(): java.lang.Runnable
                    // @ts-ignore
                    public getDelay(): number /*long*/
                    // @ts-ignore
                    public getPeriod(): number /*long*/
                    // @ts-ignore
                    public getRunning(): java.util.concurrent.atomic.AtomicBoolean
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    canEqual(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
