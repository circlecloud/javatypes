declare namespace org {
    namespace bukkit {
        /**
         * An Enum of Sounds the server is able to send to players.
         * <p>
         * WARNING: At any time, sounds may be added/removed from this Enum or even
         * MineCraft itself! There is no guarantee the sounds will play. There is no
         * guarantee values will not be removed from this Enum. As such, you should not
         * depend on the ordinal values of this class.
         */
        // @ts-ignore
        class Sound extends java.lang.Enum<org.bukkit.Sound> {
            // @ts-ignore
            values(): org.bukkit.Sound[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Sound
        }
    }
}
