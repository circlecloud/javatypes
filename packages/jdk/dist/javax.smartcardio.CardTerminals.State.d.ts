declare namespace javax {
    namespace smartcardio {
        namespace CardTerminals {
            /**
             * Enumeration of attributes of a CardTerminal.
             * It is used as a parameter to the {@linkplain CardTerminals#list} method.
             * @since 1.6
             */
            // @ts-ignore
            class State extends java.lang.Enum<javax.smartcardio.CardTerminals.State> {
                /**
                 * All CardTerminals.
                 */
                // @ts-ignore
                public static readonly ALL: javax.smartcardio.CardTerminals.State
                /**
                 * CardTerminals in which a card is present.
                 */
                // @ts-ignore
                public static readonly CARD_PRESENT: javax.smartcardio.CardTerminals.State
                /**
                 * CardTerminals in which a card is not present.
                 */
                // @ts-ignore
                public static readonly CARD_ABSENT: javax.smartcardio.CardTerminals.State
                /**
                 * CardTerminals for which a card insertion was detected during the
                 * latest call to {@linkplain State#waitForChange waitForChange()}
                 * call.
                 */
                // @ts-ignore
                public static readonly CARD_INSERTION: javax.smartcardio.CardTerminals.State
                /**
                 * CardTerminals for which a card removal was detected during the
                 * latest call to {@linkplain State#waitForChange waitForChange()}
                 * call.
                 */
                // @ts-ignore
                public static readonly CARD_REMOVAL: javax.smartcardio.CardTerminals.State
                // @ts-ignore
                public static values(): javax.smartcardio.CardTerminals.State[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.smartcardio.CardTerminals.State
            }
        }
    }
}
