declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Position extends cn.nukkit.math.Vector3 {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(x: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/)
                // @ts-ignore
                constructor(x: number /*double*/, y: number /*double*/, z: number /*double*/, level: cn.nukkit.level.Level)
                // @ts-ignore
                public level: cn.nukkit.level.Level
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3): cn.nukkit.level.Position
                // @ts-ignore
                public static fromObject(pos: cn.nukkit.math.Vector3, level: cn.nukkit.level.Level): cn.nukkit.level.Position
                // @ts-ignore
                public getLevel(): cn.nukkit.level.Level
                // @ts-ignore
                public setLevel(level: cn.nukkit.level.Level): cn.nukkit.level.Position
                // @ts-ignore
                public isValid(): boolean
                // @ts-ignore
                public setStrong(): boolean
                // @ts-ignore
                public setWeak(): boolean
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace): cn.nukkit.level.Position
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace, step: number /*int*/): cn.nukkit.level.Position
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public setComponents(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public getLevelBlock(): cn.nukkit.block.Block
                // @ts-ignore
                public getLocation(): cn.nukkit.level.Location
                // @ts-ignore
                public add(x: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public add(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public add(x: cn.nukkit.math.Vector3): cn.nukkit.level.Position
                // @ts-ignore
                public subtract(): cn.nukkit.level.Position
                // @ts-ignore
                public subtract(x: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public subtract(x: number /*double*/, y: number /*double*/, z: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public subtract(x: cn.nukkit.math.Vector3): cn.nukkit.level.Position
                // @ts-ignore
                public multiply(number: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public divide(number: number /*double*/): cn.nukkit.level.Position
                // @ts-ignore
                public ceil(): cn.nukkit.level.Position
                // @ts-ignore
                public floor(): cn.nukkit.level.Position
                // @ts-ignore
                public round(): cn.nukkit.level.Position
                // @ts-ignore
                public abs(): cn.nukkit.level.Position
                // @ts-ignore
                public clone(): cn.nukkit.level.Position
                // @ts-ignore
                public getChunk(): cn.nukkit.level.format.FullChunk
            }
        }
    }
}
