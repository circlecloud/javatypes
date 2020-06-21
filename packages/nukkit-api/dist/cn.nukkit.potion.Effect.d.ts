declare namespace cn {
    namespace nukkit {
        namespace potion {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Effect extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor(id: number /*int*/, name: java.lang.String | string, r: number /*int*/, g: number /*int*/, b: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, name: java.lang.String | string, r: number /*int*/, g: number /*int*/, b: number /*int*/, isBad: boolean)
                // @ts-ignore
                public static readonly SPEED: number /*int*/
                // @ts-ignore
                public static readonly SLOWNESS: number /*int*/
                // @ts-ignore
                public static readonly HASTE: number /*int*/
                // @ts-ignore
                public static readonly SWIFTNESS: number /*int*/
                // @ts-ignore
                public static readonly FATIGUE: number /*int*/
                // @ts-ignore
                public static readonly MINING_FATIGUE: number /*int*/
                // @ts-ignore
                public static readonly STRENGTH: number /*int*/
                // @ts-ignore
                public static readonly HEALING: number /*int*/
                // @ts-ignore
                public static readonly HARMING: number /*int*/
                // @ts-ignore
                public static readonly JUMP: number /*int*/
                // @ts-ignore
                public static readonly NAUSEA: number /*int*/
                // @ts-ignore
                public static readonly CONFUSION: number /*int*/
                // @ts-ignore
                public static readonly REGENERATION: number /*int*/
                // @ts-ignore
                public static readonly DAMAGE_RESISTANCE: number /*int*/
                // @ts-ignore
                public static readonly FIRE_RESISTANCE: number /*int*/
                // @ts-ignore
                public static readonly WATER_BREATHING: number /*int*/
                // @ts-ignore
                public static readonly INVISIBILITY: number /*int*/
                // @ts-ignore
                public static readonly BLINDNESS: number /*int*/
                // @ts-ignore
                public static readonly NIGHT_VISION: number /*int*/
                // @ts-ignore
                public static readonly HUNGER: number /*int*/
                // @ts-ignore
                public static readonly WEAKNESS: number /*int*/
                // @ts-ignore
                public static readonly POISON: number /*int*/
                // @ts-ignore
                public static readonly WITHER: number /*int*/
                // @ts-ignore
                public static readonly HEALTH_BOOST: number /*int*/
                // @ts-ignore
                public static readonly ABSORPTION: number /*int*/
                // @ts-ignore
                public static readonly SATURATION: number /*int*/
                // @ts-ignore
                public static readonly LEVITATION: number /*int*/
                // @ts-ignore
                public static readonly FATAL_POISON: number /*int*/
                // @ts-ignore
                public static readonly COUNDIT_POWER: number /*int*/
                // @ts-ignore
                public static readonly SLOW_FALLING: number /*int*/
                // @ts-ignore
                static effects: cn.nukkit.potion.Effect[]
                // @ts-ignore
                readonly id: number /*int*/
                // @ts-ignore
                readonly name: java.lang.String | string
                // @ts-ignore
                duration: number /*int*/
                // @ts-ignore
                amplifier: number /*int*/
                // @ts-ignore
                color: number /*int*/
                // @ts-ignore
                show: boolean
                // @ts-ignore
                ambient: boolean
                // @ts-ignore
                readonly bad: boolean
                // @ts-ignore
                public static init(): void
                // @ts-ignore
                public static getEffect(id: number /*int*/): cn.nukkit.potion.Effect
                // @ts-ignore
                public static getEffectByName(name: java.lang.String | string): cn.nukkit.potion.Effect
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public setDuration(ticks: number /*int*/): cn.nukkit.potion.Effect
                // @ts-ignore
                public getDuration(): number /*int*/
                // @ts-ignore
                public isVisible(): boolean
                // @ts-ignore
                public setVisible(visible: boolean): cn.nukkit.potion.Effect
                // @ts-ignore
                public getAmplifier(): number /*int*/
                // @ts-ignore
                public setAmplifier(amplifier: number /*int*/): cn.nukkit.potion.Effect
                // @ts-ignore
                public isAmbient(): boolean
                // @ts-ignore
                public setAmbient(ambient: boolean): cn.nukkit.potion.Effect
                // @ts-ignore
                public isBad(): boolean
                // @ts-ignore
                public canTick(): boolean
                // @ts-ignore
                public applyEffect(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public getColor(): number /*int*/[]
                // @ts-ignore
                public setColor(r: number /*int*/, g: number /*int*/, b: number /*int*/): void
                // @ts-ignore
                public add(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public remove(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public clone(): cn.nukkit.potion.Effect
            }
        }
    }
}
