declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Location extends cn.nukkit.level.Position {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/, level: cn.nukkit.level.Level)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/, pitch: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/, pitch: number /*double*/, level: cn.nukkit.level.Level)
                // @ts-ignore
                public yaw: number /*double*/
                // @ts-ignore
                public pitch: number /*double*/
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3): cn.nukkit.level.Location
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level): cn.nukkit.level.Location
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level, yaw: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level, yaw: number /*double*/, pitch: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public getYaw(): number /*double*/
                // @ts-ignore
                public getPitch(): number /*double*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public getLocation(): cn.nukkit.level.Location
                // @ts-ignore
                public add(x: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.level.Location
                // @ts-ignore
                public subtract(): cn.nukkit.level.Location
                // @ts-ignore
                public subtract(x: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.level.Location
                // @ts-ignore
                public multiply(number: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public divide(number: number /*double*/): cn.nukkit.level.Location
                // @ts-ignore
                public ceil(): cn.nukkit.level.Location
                // @ts-ignore
                public floor(): cn.nukkit.level.Location
                // @ts-ignore
                public round(): cn.nukkit.level.Location
                // @ts-ignore
                public abs(): cn.nukkit.level.Location
                // @ts-ignore
                public getDirectionVector(): cn.nukkit.math.Vector3
                // @ts-ignore
                public clone(): cn.nukkit.level.Location
            }
        }
    }
}
