declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
            class PotionEffectTypeWrapper extends org.bukkit.potion.PotionEffectType {
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                getDurationModifier(): double
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Get the potion type bound to this wrapper.
                 * @return The potion effect type
                 */
                // @ts-ignore
                getType(): org.bukkit.potion.PotionEffectType
                // @ts-ignore
                isInstant(): boolean
                // @ts-ignore
                getColor(): org.bukkit.Color
            }
        }
    }
}
