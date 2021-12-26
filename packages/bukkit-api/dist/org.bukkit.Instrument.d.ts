declare namespace org {
    namespace bukkit {
        // @ts-ignore
        class Instrument extends java.lang.Enum<org.bukkit.Instrument> {
            /**
             * Piano is the standard instrument for a note block.
             */
            // @ts-ignore
            public static readonly PIANO: org.bukkit.Instrument
            /**
             * Bass drum is normally played when a note block is on top of a
             * stone-like block.
             */
            // @ts-ignore
            public static readonly BASS_DRUM: org.bukkit.Instrument
            /**
             * Snare drum is normally played when a note block is on top of a sandy
             * block.
             */
            // @ts-ignore
            public static readonly SNARE_DRUM: org.bukkit.Instrument
            /**
             * Sticks are normally played when a note block is on top of a glass
             * block.
             */
            // @ts-ignore
            public static readonly STICKS: org.bukkit.Instrument
            /**
             * Bass guitar is normally played when a note block is on top of a wooden
             * block.
             */
            // @ts-ignore
            public static readonly BASS_GUITAR: org.bukkit.Instrument
            /**
             * Flute is normally played when a note block is on top of a clay block.
             */
            // @ts-ignore
            public static readonly FLUTE: org.bukkit.Instrument
            /**
             * Bell is normally played when a note block is on top of a gold block.
             */
            // @ts-ignore
            public static readonly BELL: org.bukkit.Instrument
            /**
             * Guitar is normally played when a note block is on top of a woolen block.
             */
            // @ts-ignore
            public static readonly GUITAR: org.bukkit.Instrument
            /**
             * Chime is normally played when a note block is on top of a packed ice
             * block.
             */
            // @ts-ignore
            public static readonly CHIME: org.bukkit.Instrument
            /**
             * Xylophone is normally played when a note block is on top of a bone block.
             */
            // @ts-ignore
            public static readonly XYLOPHONE: org.bukkit.Instrument
            /**
             * Iron Xylophone is normally played when a note block is on top of a iron block.
             */
            // @ts-ignore
            public static readonly IRON_XYLOPHONE: org.bukkit.Instrument
            /**
             * Cow Bell is normally played when a note block is on top of a soul sand block.
             */
            // @ts-ignore
            public static readonly COW_BELL: org.bukkit.Instrument
            /**
             * Didgeridoo is normally played when a note block is on top of a pumpkin block.
             */
            // @ts-ignore
            public static readonly DIDGERIDOO: org.bukkit.Instrument
            /**
             * Bit is normally played when a note block is on top of a emerald block.
             */
            // @ts-ignore
            public static readonly BIT: org.bukkit.Instrument
            /**
             * Banjo is normally played when a note block is on top of a hay block.
             */
            // @ts-ignore
            public static readonly BANJO: org.bukkit.Instrument
            /**
             * Pling is normally played when a note block is on top of a glowstone block.
             */
            // @ts-ignore
            public static readonly PLING: org.bukkit.Instrument
            // @ts-ignore
            public static values(): org.bukkit.Instrument[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.Instrument
            /**
             * @return The type ID of this instrument.
             * @deprecated Magic value
             */
            // @ts-ignore
            public getType(): number /*byte*/
            /**
             * Get an instrument by its type ID.
             * @param type The type ID
             * @return The instrument
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByType(type: number /*byte*/): org.bukkit.Instrument
        }
    }
}
