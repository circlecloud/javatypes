declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
            class PotionData extends java.lang.Object {
                /**
                 * Instantiates a final PotionData object to contain information about a
                 * Potion
                 * @param type the type of the Potion
                 * @param extended whether the potion is extended PotionType#isExtendable()
                 *  must be true
                 * @param upgraded whether the potion is upgraded PotionType#isUpgradable()
                 *  must be true
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, extended: boolean, upgraded: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Gets the type of the potion, Type matches up with each kind of craftable
                 * potion
                 * @return the potion type
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionType
                /**
                 * Checks if the potion is in an upgraded state. This refers to whether or
                 * not the potion is Tier 2, such as Potion of Fire Resistance II.
                 * @return true if the potion is upgraded;
                 */
                // @ts-ignore
                public isUpgraded(): boolean
                /**
                 * Checks if the potion is in an extended state. This refers to the extended
                 * duration potions
                 * @return true if the potion is extended
                 */
                // @ts-ignore
                public isExtended(): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
            }
        }
    }
}
