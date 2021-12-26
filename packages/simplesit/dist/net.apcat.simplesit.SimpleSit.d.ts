declare namespace net {
    namespace apcat {
        namespace simplesit {
            // @ts-ignore
            class SimpleSit extends JavaPlugin {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public onEnable(): void
                // @ts-ignore
                public onDisable(): void
                // @ts-ignore
                public convertConfig(): void
                // @ts-ignore
                public getSeats(): java.util.Map<java.util.UUID, ArmorStand>
                // @ts-ignore
                public getLaying(): java.util.Map<java.util.UUID, net.apcat.simplesit.tasks.LayTask>
                // @ts-ignore
                public checkForUpdates(): boolean
                // @ts-ignore
                public getSitFailMessage(): string
                // @ts-ignore
                public getSitDownMessage(): string
                // @ts-ignore
                public getSitUpMessage(): string
                // @ts-ignore
                public getSitPermission(): Permission
                // @ts-ignore
                public getLayPermission(): Permission
                // @ts-ignore
                public getLayDownMessage(): string
                // @ts-ignore
                public getLayUpMessage(): string
                // @ts-ignore
                public getLayFailMessage(): string
                // @ts-ignore
                public getLayOverLapMessage(): string
            }
        }
    }
}
