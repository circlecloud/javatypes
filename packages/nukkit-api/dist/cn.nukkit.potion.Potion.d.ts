declare namespace cn {
    namespace nukkit {
        namespace potion {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Potion extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, level: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, level: number /*int*/, splash: boolean)
                // @ts-ignore
                public static readonly NO_EFFECTS: number /*int*/
                // @ts-ignore
                public static readonly WATER: number /*int*/
                // @ts-ignore
                public static readonly MUNDANE: number /*int*/
                // @ts-ignore
                public static readonly MUNDANE_II: number /*int*/
                // @ts-ignore
                public static readonly THICK: number /*int*/
                // @ts-ignore
                public static readonly AWKWARD: number /*int*/
                // @ts-ignore
                public static readonly NIGHT_VISION: number /*int*/
                // @ts-ignore
                public static readonly NIGHT_VISION_LONG: number /*int*/
                // @ts-ignore
                public static readonly INVISIBLE: number /*int*/
                // @ts-ignore
                public static readonly INVISIBLE_LONG: number /*int*/
                // @ts-ignore
                public static readonly LEAPING: number /*int*/
                // @ts-ignore
                public static readonly LEAPING_LONG: number /*int*/
                // @ts-ignore
                public static readonly LEAPING_II: number /*int*/
                // @ts-ignore
                public static readonly FIRE_RESISTANCE: number /*int*/
                // @ts-ignore
                public static readonly FIRE_RESISTANCE_LONG: number /*int*/
                // @ts-ignore
                public static readonly SPEED: number /*int*/
                // @ts-ignore
                public static readonly SPEED_LONG: number /*int*/
                // @ts-ignore
                public static readonly SPEED_II: number /*int*/
                // @ts-ignore
                public static readonly SLOWNESS: number /*int*/
                // @ts-ignore
                public static readonly SLOWNESS_LONG: number /*int*/
                // @ts-ignore
                public static readonly WATER_BREATHING: number /*int*/
                // @ts-ignore
                public static readonly WATER_BREATHING_LONG: number /*int*/
                // @ts-ignore
                public static readonly INSTANT_HEALTH: number /*int*/
                // @ts-ignore
                public static readonly INSTANT_HEALTH_II: number /*int*/
                // @ts-ignore
                public static readonly HARMING: number /*int*/
                // @ts-ignore
                public static readonly HARMING_II: number /*int*/
                // @ts-ignore
                public static readonly POISON: number /*int*/
                // @ts-ignore
                public static readonly POISON_LONG: number /*int*/
                // @ts-ignore
                public static readonly POISON_II: number /*int*/
                // @ts-ignore
                public static readonly REGENERATION: number /*int*/
                // @ts-ignore
                public static readonly REGENERATION_LONG: number /*int*/
                // @ts-ignore
                public static readonly REGENERATION_II: number /*int*/
                // @ts-ignore
                public static readonly STRENGTH: number /*int*/
                // @ts-ignore
                public static readonly STRENGTH_LONG: number /*int*/
                // @ts-ignore
                public static readonly STRENGTH_II: number /*int*/
                // @ts-ignore
                public static readonly WEAKNESS: number /*int*/
                // @ts-ignore
                public static readonly WEAKNESS_LONG: number /*int*/
                // @ts-ignore
                public static readonly WITHER_II: number /*int*/
                // @ts-ignore
                public static readonly TURTLE_MASTER: number /*int*/
                // @ts-ignore
                public static readonly TURTLE_MASTER_LONG: number /*int*/
                // @ts-ignore
                public static readonly TURTLE_MASTER_II: number /*int*/
                // @ts-ignore
                public static readonly SLOW_FALLING: number /*int*/
                // @ts-ignore
                public static readonly SLOW_FALLING_LONG: number /*int*/
                // @ts-ignore
                static potions: cn.nukkit.potion.Potion[]
                // @ts-ignore
                readonly id: number /*int*/
                // @ts-ignore
                readonly level: number /*int*/
                // @ts-ignore
                splash: boolean
                // @ts-ignore
                public static init(): void
                // @ts-ignore
                public static getPotion(id: number /*int*/): cn.nukkit.potion.Potion
                // @ts-ignore
                public static getPotionByName(name: java.lang.String | string): cn.nukkit.potion.Potion
                // @ts-ignore
                public getEffect(): cn.nukkit.potion.Effect
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLevel(): number /*int*/
                // @ts-ignore
                public isSplash(): boolean
                // @ts-ignore
                public setSplash(splash: boolean): cn.nukkit.potion.Potion
                // @ts-ignore
                public applyPotion(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public applyPotion(entity: cn.nukkit.entity.Entity, health: number /*double*/): void
                // @ts-ignore
                public clone(): cn.nukkit.potion.Potion
                // @ts-ignore
                public static getEffect(potionType: number /*int*/, isSplash: boolean): cn.nukkit.potion.Effect
                // @ts-ignore
                public static getLevel(potionType: number /*int*/): number /*int*/
                // @ts-ignore
                public static isInstant(potionType: number /*int*/): boolean
                // @ts-ignore
                public static getApplySeconds(potionType: number /*int*/, isSplash: boolean): number /*int*/
            }
        }
    }
}
