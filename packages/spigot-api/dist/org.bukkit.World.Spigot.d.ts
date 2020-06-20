declare namespace org {
    namespace bukkit {
        namespace World {
            // @ts-ignore
            class Spigot extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Strikes lightning at the given {@link Location} and possibly without sound
                 * @param loc The location to strike lightning
                 * @param isSilent Whether this strike makes no sound
                 * @return The lightning entity.
                 */
                // @ts-ignore
                strikeLightning(loc: org.bukkit.Location, isSilent: boolean): org.bukkit.entity.LightningStrike
                /**
                 * Strikes lightning at the given {@link Location} without doing damage and possibly without sound
                 * @param loc The location to strike lightning
                 * @param isSilent Whether this strike makes no sound
                 * @return The lightning entity.
                 */
                // @ts-ignore
                strikeLightningEffect(loc: org.bukkit.Location, isSilent: boolean): org.bukkit.entity.LightningStrike
            }
        }
    }
}
