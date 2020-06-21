declare namespace javax {
    namespace smartcardio {
        /**
         * A Smart Card terminal, sometimes referred to as a Smart Card Reader.
         * A CardTerminal object can be obtained by calling
         * {@linkplain CardTerminals#list}
         * or {@linkplain CardTerminals#getTerminal CardTerminals.getTerminal()}.
         * <p>Note that physical card readers with slots for multiple cards are
         * represented by one <code>CardTerminal</code> object per such slot.
         * @see CardTerminals
         * @see TerminalFactory
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        abstract class CardTerminal extends java.lang.Object {
            /**
             * Constructs a new CardTerminal object.
             * <p>This constructor is called by subclasses only. Application should
             * call {@linkplain CardTerminals#list list()}
             * or {@linkplain CardTerminals#getTerminal getTerminal()}
             * to obtain a CardTerminal object.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the unique name of this terminal.
             * @return the unique name of this terminal.
             */
            // @ts-ignore
            public abstract getName(): string
            /**
             * Establishes a connection to the card.
             * If a connection has previously established using
             * the specified protocol, this method returns the same Card object as
             * the previous call.
             * @param protocol the protocol to use ("T=0", "T=1", or "T=CL"), or "*" to
             *    connect using any available protocol.
             * @throws NullPointerException if protocol is null
             * @throws IllegalArgumentException if protocol is an invalid protocol
             *    specification
             * @throws CardNotPresentException if no card is present in this terminal
             * @throws CardException if a connection could not be established
             *    using the specified protocol or if a connection has previously been
             *    established using a different protocol
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             */
            // @ts-ignore
            public abstract connect(protocol: java.lang.String | string): javax.smartcardio.Card
            /**
             * Returns whether a card is present in this terminal.
             * @return whether a card is present in this terminal.
             * @throws CardException if the status could not be determined
             */
            // @ts-ignore
            public abstract isCardPresent(): boolean
            /**
             * Waits until a card is present in this terminal or the timeout
             * expires. If the method returns due to an expired timeout, it returns
             * false. Otherwise it return true.
             * <P>If a card is present in this terminal when this
             * method is called, it returns immediately.
             * @param timeout if positive, block for up to <code>timeout</code>
             *    milliseconds; if zero, block indefinitely; must not be negative
             * @return false if the method returns due to an expired timeout,
             *    true otherwise.
             * @throws IllegalArgumentException if timeout is negative
             * @throws CardException if the operation failed
             */
            // @ts-ignore
            public abstract waitForCardPresent(timeout: number /*long*/): boolean
            /**
             * Waits until a card is absent in this terminal or the timeout
             * expires. If the method returns due to an expired timeout, it returns
             * false. Otherwise it return true.
             * <P>If no card is present in this terminal when this
             * method is called, it returns immediately.
             * @param timeout if positive, block for up to <code>timeout</code>
             *    milliseconds; if zero, block indefinitely; must not be negative
             * @return false if the method returns due to an expired timeout,
             *    true otherwise.
             * @throws IllegalArgumentException if timeout is negative
             * @throws CardException if the operation failed
             */
            // @ts-ignore
            public abstract waitForCardAbsent(timeout: number /*long*/): boolean
        }
    }
}
