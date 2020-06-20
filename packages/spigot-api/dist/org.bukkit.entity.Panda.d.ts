declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Panda entity.
             */
            // @ts-ignore
            interface Panda extends org.bukkit.entity.Animals {
                /**
                 * Gets this Panda's main gene.
                 * @return main gene
                 */
                // @ts-ignore
                getMainGene(): org.bukkit.entity.Panda.Gene
                /**
                 * Sets this Panda's main gene.
                 * @param gene main gene
                 */
                // @ts-ignore
                setMainGene(gene: org.bukkit.entity.Panda.Gene): void
                /**
                 * Gets this Panda's hidden gene.
                 * @return hidden gene
                 */
                // @ts-ignore
                getHiddenGene(): org.bukkit.entity.Panda.Gene
                /**
                 * Sets this Panda's hidden gene.
                 * @param gene hidden gene
                 */
                // @ts-ignore
                setHiddenGene(gene: org.bukkit.entity.Panda.Gene): void
            }
        }
    }
}
