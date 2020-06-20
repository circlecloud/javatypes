declare namespace java {
    namespace applet {
        /**
         * The <code>AudioClip</code> interface is a simple abstraction for
         * playing a sound clip. Multiple <code>AudioClip</code> items can be
         * playing at the same time, and the resulting sound is mixed
         * together to produce a composite.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        interface AudioClip {
            /**
             * Starts playing this audio clip. Each time this method is called,
             * the clip is restarted from the beginning.
             */
            // @ts-ignore
            play(): void
            /**
             * Starts playing this audio clip in a loop.
             */
            // @ts-ignore
            loop(): void
            /**
             * Stops playing this audio clip.
             */
            // @ts-ignore
            stop(): void
        }
    }
}
