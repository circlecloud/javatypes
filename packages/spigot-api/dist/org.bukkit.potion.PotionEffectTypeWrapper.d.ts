declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
            class PotionEffectTypeWrapper extends org.bukkit.potion.PotionEffectType {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                public getDurationModifier(): number /*double*/
                // @ts-ignore
                public getName(): string
                /**
                 * Get the potion type bound to this wrapper.
                 * @return The potion effect type
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionEffectType
                // @ts-ignore
                public isInstant(): boolean
                // @ts-ignore
                public getColor(): org.bukkit.Color
            }
        }
    }
}
