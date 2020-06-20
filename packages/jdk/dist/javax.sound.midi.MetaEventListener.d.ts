declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * The <code>MetaEventListener</code> interface should be implemented
             * by classes whose instances need to be notified when a <code>{@link Sequencer}</code>
             * has processed a <code>{@link MetaMessage}</code>.
             * To register a <code>MetaEventListener</code> object to receive such
             * notifications, pass it as the argument to the
             * <code>{@link Sequencer#addMetaEventListener(MetaEventListener) addMetaEventListener}</code>
             * method of <code>Sequencer</code>.
             * @author Kara Kytle
             */
            // @ts-ignore
            interface MetaEventListener extends java.util.EventListener {
                /**
                 * Invoked when a <code>{@link Sequencer}</code> has encountered and processed
                 * a <code>MetaMessage</code> in the <code>{@link Sequence}</code> it is processing.
                 * @param meta the meta-message that the sequencer encountered
                 */
                // @ts-ignore
                meta(meta: javax.sound.midi.MetaMessage): void
            }
        }
    }
}
