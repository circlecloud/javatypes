declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            class Attribute extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                public static readonly ABSORPTION: number /*int*/
                // @ts-ignore
                public static readonly SATURATION: number /*int*/
                // @ts-ignore
                public static readonly EXHAUSTION: number /*int*/
                // @ts-ignore
                public static readonly KNOCKBACK_RESISTANCE: number /*int*/
                // @ts-ignore
                public static readonly MAX_HEALTH: number /*int*/
                // @ts-ignore
                public static readonly MOVEMENT_SPEED: number /*int*/
                // @ts-ignore
                public static readonly FOLLOW_RANGE: number /*int*/
                // @ts-ignore
                public static readonly MAX_HUNGER: number /*int*/
                // @ts-ignore
                public static readonly FOOD: number /*int*/
                // @ts-ignore
                public static readonly ATTACK_DAMAGE: number /*int*/
                // @ts-ignore
                public static readonly EXPERIENCE_LEVEL: number /*int*/
                // @ts-ignore
                public static readonly EXPERIENCE: number /*int*/
                // @ts-ignore
                public static readonly LUCK: number /*int*/
                // @ts-ignore
                static attributes: java.util.Map<java.lang.Integer | number, cn.nukkit.entity.Attribute>
                // @ts-ignore
                minValue: number /*float*/
                // @ts-ignore
                maxValue: number /*float*/
                // @ts-ignore
                defaultValue: number /*float*/
                // @ts-ignore
                currentValue: number /*float*/
                // @ts-ignore
                name: java.lang.String | string
                // @ts-ignore
                shouldSend: boolean
                // @ts-ignore
                public static init(): void
                // @ts-ignore
                public static addAttribute(id: number /*int*/, name: java.lang.String | string, minValue: number /*float*/, maxValue: number /*float*/, defaultValue: number /*float*/): cn.nukkit.entity.Attribute
                // @ts-ignore
                public static addAttribute(id: number /*int*/, name: java.lang.String | string, minValue: number /*float*/, maxValue: number /*float*/, defaultValue: number /*float*/, shouldSend: boolean): cn.nukkit.entity.Attribute
                // @ts-ignore
                public static getAttribute(id: number /*int*/): cn.nukkit.entity.Attribute
                /**
                 * @param name name
                 * @return null|Attribute
                 */
                // @ts-ignore
                public static getAttributeByName(name: java.lang.String | string): cn.nukkit.entity.Attribute
                // @ts-ignore
                public getMinValue(): number /*float*/
                // @ts-ignore
                public setMinValue(minValue: number /*float*/): cn.nukkit.entity.Attribute
                // @ts-ignore
                public getMaxValue(): number /*float*/
                // @ts-ignore
                public setMaxValue(maxValue: number /*float*/): cn.nukkit.entity.Attribute
                // @ts-ignore
                public getDefaultValue(): number /*float*/
                // @ts-ignore
                public setDefaultValue(defaultValue: number /*float*/): cn.nukkit.entity.Attribute
                // @ts-ignore
                public getValue(): number /*float*/
                // @ts-ignore
                public setValue(value: number /*float*/): cn.nukkit.entity.Attribute
                // @ts-ignore
                public setValue(value: number /*float*/, fit: boolean): cn.nukkit.entity.Attribute
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public isSyncable(): boolean
                // @ts-ignore
                public clone(): cn.nukkit.entity.Attribute
            }
        }
    }
}
