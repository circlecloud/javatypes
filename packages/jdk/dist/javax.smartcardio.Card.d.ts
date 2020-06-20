declare namespace javax {
    namespace smartcardio {
        /**
         * A Smart Card with which a connection has been established. Card objects
         * are obtained by calling {@link CardTerminal#connect CardTerminal.connect()}.
         * @see CardTerminal
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class Card extends java.lang.Object {
            /**
             * Constructs a new Card object.
             * <p>This constructor is called by subclasses only. Application should
             * call the {@linkplain CardTerminal#connect CardTerminal.connect()}
             * method to obtain a Card
             * object.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the ATR of this card.
             * @return the ATR of this card.
             */
            // @ts-ignore
            abstract getATR(): javax.smartcardio.ATR
            /**
             * Returns the protocol in use for this card.
             * @return the protocol in use for this card, for example "T=0" or "T=1"
             */
            // @ts-ignore
            abstract getProtocol(): java.lang.String
            /**
             * Returns the CardChannel for the basic logical channel. The basic
             * logical channel has a channel number of 0.
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             * @throws IllegalStateException if this card object has been disposed of
             *    via the {#linkplain #disconnect disconnect()} method
             */
            // @ts-ignore
            abstract getBasicChannel(): javax.smartcardio.CardChannel
            /**
             * Opens a new logical channel to the card and returns it. The channel is
             * opened by issuing a <code>MANAGE CHANNEL</code> command that should use
             * the format <code>[00 70 00 00 01]</code>.
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             * @throws CardException is a new logical channel could not be opened
             * @throws IllegalStateException if this card object has been disposed of
             *    via the {#linkplain #disconnect disconnect()} method
             */
            // @ts-ignore
            abstract openLogicalChannel(): javax.smartcardio.CardChannel
            /**
             * Requests exclusive access to this card.
             * <p>Once a thread has invoked <code>beginExclusive</code>, only this
             * thread is allowed to communicate with this card until it calls
             * <code>endExclusive</code>. Other threads attempting communication
             * will receive a CardException.
             * <p>Applications have to ensure that exclusive access is correctly
             * released. This can be achieved by executing
             * the <code>beginExclusive()</code> and <code>endExclusive</code> calls
             * in a <code>try ... finally</code> block.
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             * @throws CardException if exclusive access has already been set
             *    or if exclusive access could not be established
             * @throws IllegalStateException if this card object has been disposed of
             *    via the {#linkplain #disconnect disconnect()} method
             */
            // @ts-ignore
            abstract beginExclusive(): void
            /**
             * Releases the exclusive access previously established using
             * <code>beginExclusive</code>.
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             * @throws IllegalStateException if the active Thread does not currently have
             *    exclusive access to this card or
             *    if this card object has been disposed of
             *    via the {#linkplain #disconnect disconnect()} method
             * @throws CardException if the operation failed
             */
            // @ts-ignore
            abstract endExclusive(): void
            /**
             * Transmits a control command to the terminal device.
             * <p>This can be used to, for example, control terminal functions like
             * a built-in PIN pad or biometrics.
             * @param controlCode the control code of the command
             * @param command the command data
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             * @throws NullPointerException if command is null
             * @throws CardException if the card operation failed
             * @throws IllegalStateException if this card object has been disposed of
             *    via the {#linkplain #disconnect disconnect()} method
             */
            // @ts-ignore
            abstract transmitControlCommand(controlCode: number /*int*/, command: number /*byte*/[]): byte[]
            /**
             * Disconnects the connection with this card. After this method returns,
             * calling methods on this object or in CardChannels associated with this
             * object that require interaction with the card will raise an
             * IllegalStateException.
             * @param reset whether to reset the card after disconnecting.
             * @throws CardException if the card operation failed
             * @throws SecurityException if a SecurityManager exists and the
             *    caller does not have the required
             *    {#linkplain CardPermission permission}
             */
            // @ts-ignore
            abstract disconnect(reset: boolean): void
        }
    }
}
