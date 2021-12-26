declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Players extends java.lang.Object {
                // @ts-ignore
                public static getNullable(uuid: java.util.UUID): Player
                // @ts-ignore
                public static get(uuid: java.util.UUID): java.util.Optional<Player>
                // @ts-ignore
                public static getNullable(username: java.lang.String | string): Player
                // @ts-ignore
                public static get(username: java.lang.String | string): java.util.Optional<Player>
                // @ts-ignore
                public static all(): Array<Player>
                // @ts-ignore
                public static stream(): java.util.stream.Stream<Player>
                // @ts-ignore
                public static forEach(consumer: java.util.function$.Consumer<Player>): void
                // @ts-ignore
                public static forEachIfPlayer(objects: java.lang.Iterable<java.lang.Object | any>, consumer: java.util.function$.Consumer<Player>): void
                // @ts-ignore
                public static streamInRange(center: Location, radius: number /*double*/): java.util.stream.Stream<Player>
                // @ts-ignore
                public static forEachInRange(center: Location, radius: number /*double*/, consumer: java.util.function$.Consumer<Player>): void
                // @ts-ignore
                public static msg(sender: CommandSender, ...msgs: java.lang.String[] | string[]): void
                // @ts-ignore
                public static getOfflineNullable(uuid: java.util.UUID): OfflinePlayer
                // @ts-ignore
                public static getOffline(uuid: java.util.UUID): java.util.Optional<OfflinePlayer>
                // @ts-ignore
                public static getOfflineNullable(username: java.lang.String | string): OfflinePlayer
                // @ts-ignore
                public static getOffline(username: java.lang.String | string): java.util.Optional<OfflinePlayer>
                // @ts-ignore
                public static allOffline(): Array<OfflinePlayer>
                // @ts-ignore
                public static streamOffline(): java.util.stream.Stream<OfflinePlayer>
                // @ts-ignore
                public static forEachOffline(consumer: java.util.function$.Consumer<OfflinePlayer>): void
                // @ts-ignore
                public static playSound(player: Player, sound: Sound): void
                // @ts-ignore
                public static playSound(player: Player, location: Location, sound: Sound): void
                // @ts-ignore
                public static playSound(location: Location, sound: Sound): void
                // @ts-ignore
                public static sendBlockChange(player: Player, loc: Location, type: Material, data: number /*int*/): void
                // @ts-ignore
                public static sendBlockChange(player: Player, block: Block, type: Material, data: number /*int*/): void
                // @ts-ignore
                public static sendBlockChange(player: Player, loc: Location, type: Material): void
                // @ts-ignore
                public static sendBlockChange(player: Player, block: Block, type: Material): void
                // @ts-ignore
                public static spawnParticle(player: Player, location: Location, particle: Particle): void
                // @ts-ignore
                public static spawnParticle(location: Location, particle: Particle): void
                // @ts-ignore
                public static spawnParticle(player: Player, location: Location, particle: Particle, amount: number /*int*/): void
                // @ts-ignore
                public static spawnParticle(location: Location, particle: Particle, amount: number /*int*/): void
                // @ts-ignore
                public static spawnParticleOffset(player: Player, location: Location, particle: Particle, offset: number /*double*/): void
                // @ts-ignore
                public static spawnParticleOffset(location: Location, particle: Particle, offset: number /*double*/): void
                // @ts-ignore
                public static spawnParticleOffset(player: Player, location: Location, particle: Particle, amount: number /*int*/, offset: number /*double*/): void
                // @ts-ignore
                public static spawnParticleOffset(location: Location, particle: Particle, amount: number /*int*/, offset: number /*double*/): void
                // @ts-ignore
                public static spawnEffect(player: Player, location: Location, effect: Effect): void
                // @ts-ignore
                public static spawnEffect(location: Location, effect: Effect): void
                // @ts-ignore
                public static spawnEffect(player: Player, location: Location, effect: Effect, amount: number /*int*/): void
                // @ts-ignore
                public static spawnEffect(location: Location, effect: Effect, amount: number /*int*/): void
                // @ts-ignore
                public static resetWalkSpeed(player: Player): void
                // @ts-ignore
                public static resetFlySpeed(player: Player): void
            }
        }
    }
}
