declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class EntityLiving extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityDamageable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                attackTime: number /*int*/
                // @ts-ignore
                invisible: boolean
                // @ts-ignore
                movementSpeed: number /*float*/
                // @ts-ignore
                turtleTicks: number /*int*/
                // @ts-ignore
                getGravity(): number /*float*/
                // @ts-ignore
                getDrag(): number /*float*/
                // @ts-ignore
                initEntity(): void
                // @ts-ignore
                public setHealth(health: number /*float*/): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public hasLineOfSight(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                public collidingWith(ent: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                // @ts-ignore
                public knockBack(attacker: cn.nukkit.entity.Entity, damage: number /*double*/, x: number /*double*/, z: number /*double*/): void
                // @ts-ignore
                public knockBack(attacker: cn.nukkit.entity.Entity, damage: number /*double*/, x: number /*double*/, z: number /*double*/, base: number /*double*/): void
                // @ts-ignore
                public kill(): void
                // @ts-ignore
                public entityBaseTick(): boolean
                // @ts-ignore
                public entityBaseTick(tickDiff: number /*int*/): boolean
                // @ts-ignore
                public getDrops(): cn.nukkit.item.Item[]
                // @ts-ignore
                public getLineOfSight(maxDistance: number /*int*/): cn.nukkit.block.Block[]
                // @ts-ignore
                public getLineOfSight(maxDistance: number /*int*/, maxLength: number /*int*/): cn.nukkit.block.Block[]
                // @ts-ignore
                public getLineOfSight(maxDistance: number /*int*/, maxLength: number /*int*/, transparent: java.util.Map<java.lang.Integer | number, java.lang.Object | any>): cn.nukkit.block.Block[]
                // @ts-ignore
                public getLineOfSight(maxDistance: number /*int*/, maxLength: number /*int*/, transparent: java.lang.Integer[] | number[]): cn.nukkit.block.Block[]
                // @ts-ignore
                public getTargetBlock(maxDistance: number /*int*/): cn.nukkit.block.Block
                // @ts-ignore
                public getTargetBlock(maxDistance: number /*int*/, transparent: java.util.Map<java.lang.Integer | number, java.lang.Object | any>): cn.nukkit.block.Block
                // @ts-ignore
                public getTargetBlock(maxDistance: number /*int*/, transparent: java.lang.Integer[] | number[]): cn.nukkit.block.Block
                // @ts-ignore
                public setMovementSpeed(speed: number /*float*/): void
                // @ts-ignore
                public getMovementSpeed(): number /*float*/
                // @ts-ignore
                public getAirTicks(): number /*int*/
                // @ts-ignore
                public setAirTicks(ticks: number /*int*/): void
            }
        }
    }
}
