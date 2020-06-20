declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                class HelpCommand extends org.bukkit.command.defaults.BukkitCommand {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    execute(sender: org.bukkit.command.CommandSender, currentAlias: string, args: string[]): boolean
                    // @ts-ignore
                    tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string[]): java.util.List<java.lang.String>
                    // @ts-ignore
                    findPossibleMatches(searchString: string): org.bukkit.help.HelpTopic
                    /**
                     * Computes the Dameraur-Levenshtein Distance between two strings. Adapted
                     * from the algorithm at <a href="http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance">Wikipedia: Damerau–Levenshtein distance</a>
                     * @param s1 The first string being compared.
                     * @param s2 The second string being compared.
                     * @return The number of substitutions, deletions, insertions, and
                     *  transpositions required to get from s1 to s2.
                     */
                    // @ts-ignore
                    damerauLevenshteinDistance(s1: string, s2: string): int
                }
            }
        }
    }
}
