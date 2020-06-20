declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * Ports are simple lines for input or output of audio to or from audio devices.
             * Common examples of ports that act as source lines (mixer inputs) include the microphone,
             * line input, and CD-ROM drive.  Ports that act as target lines (mixer outputs) include the
             * speaker, headphone, and line output.  You can access port using a <code>{@link Port.Info}</code>
             * object.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            interface Port extends javax.sound.sampled.Line {
            }
        }
    }
}
