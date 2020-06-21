declare namespace org {
    namespace bukkit {
        namespace potion {
            /**
             * Represents a brewer that can create {@link PotionEffect}s.
             */
            // @ts-ignore
            interface PotionBrewer {
                /**
                 * Creates a {@link PotionEffect} from the given {@link PotionEffectType},
                 * applying duration modifiers and checks.
                 * @param potion The type of potion
                 * @param duration The duration in ticks
                 * @param amplifier The amplifier of the effect
                 * @return The resulting potion effect
                 */
                // @ts-ignore
                createEffect(potion: org.bukkit.potion.PotionEffectType, duration: number /*int*/, amplifier: number /*int*/): org.bukkit.potion.PotionEffect
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given data value.
                 * @param damage The data value of the potion
                 * @return The list of effects
                 * @deprecated Non-Functional
                 */
                // @ts-ignore
                getEffectsFromDamage(damage: number /*int*/): Array<org.bukkit.potion.PotionEffect>
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given type.
                 * @param type The type of the potion
                 * @param upgraded Whether the potion is upgraded
                 * @param extended Whether the potion is extended
                 * @return The list of effects
                 */
                // @ts-ignore
                getEffects(type: org.bukkit.potion.PotionType, upgraded: boolean, extended: boolean): Array<org.bukkit.potion.PotionEffect>
            }
        }
    }
}
