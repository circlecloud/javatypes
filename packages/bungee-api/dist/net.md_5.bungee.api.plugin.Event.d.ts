declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * Dummy class which all callable events must extend.
                     */
                    // @ts-ignore
                    abstract class Event extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Method called after this event has been dispatched to all handlers.
                         */
                        // @ts-ignore
                        public postCall(): void
                    }
                }
            }
        }
    }
}
