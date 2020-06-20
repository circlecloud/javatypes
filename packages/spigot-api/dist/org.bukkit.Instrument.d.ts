declare namespace org {
    namespace bukkit {
        // @ts-ignore
        class Instrument extends java.lang.Enum<org.bukkit.Instrument> {
            // @ts-ignore
            values(): org.bukkit.Instrument[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Instrument
            /**
             * @return The type ID of this instrument.
             * @deprecated Magic value
             */
            // @ts-ignore
            getType(): byte
            /**
             * Get an instrument by its type ID.
             * @param type The type ID
             * @return The instrument
             * @deprecated Magic value
             */
            // @ts-ignore
            getByType(type: number /*byte*/): org.bukkit.Instrument
        }
    }
}
