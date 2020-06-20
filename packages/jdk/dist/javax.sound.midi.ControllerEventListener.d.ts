declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * The <code>ControllerEventListener</code> interface should be implemented
             * by classes whose instances need to be notified when a <code>Sequencer</code>
             * has processed a requested type of MIDI control-change event.
             * To register a <code>ControllerEventListener</code> object to receive such
             * notifications, invoke the
             * {@link Sequencer#addControllerEventListener(ControllerEventListener, int[])
             * addControllerEventListener} method of <code>Sequencer</code>,
             * specifying the types of MIDI controllers about which you are interested in
             * getting control-change notifications.
             * @see MidiChannel#controlChange(int, int)
             * @author Kara Kytle
             */
            // @ts-ignore
            interface ControllerEventListener extends java.util.EventListener {
                /**
                 * Invoked when a <code>Sequencer</code> has encountered and processed
                 * a control-change event of interest to this listener.  The event passed
                 * in is a <code>ShortMessage</code> whose first data byte indicates
                 * the controller number and whose second data byte is the value to which
                 * the controller was set.
                 * @param event the control-change event that the sequencer encountered in
                 *  the sequence it is processing
                 * @see Sequencer#addControllerEventListener(ControllerEventListener, int[])
                 * @see MidiChannel#controlChange(int, int)
                 * @see ShortMessage#getData1
                 * @see ShortMessage#getData2
                 */
                // @ts-ignore
                controlChange(event: javax.sound.midi.ShortMessage): void
            }
        }
    }
}
