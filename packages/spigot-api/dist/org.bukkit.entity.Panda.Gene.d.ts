declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Panda {
                // @ts-ignore
                class Gene extends java.lang.Enum<org.bukkit.entity.Panda.Gene> {
                    // @ts-ignore
                    readonly NORMAL: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly LAZY: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly WORRIED: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly PLAYFUL: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly BROWN: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly WEAK: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    readonly AGGRESSIVE: org.bukkit.entity.Panda.Gene
                    // @ts-ignore
                    values(): org.bukkit.entity.Panda.Gene[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.entity.Panda.Gene
                    /**
                     * Gets whether this gene is recessive, i.e. required in both parents to
                     * propagate to children.
                     * @return recessive status
                     */
                    // @ts-ignore
                    isRecessive(): boolean
                }
            }
        }
    }
}
