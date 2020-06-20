declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace sound {
                    namespace PlaySoundEvent {
                        /**
                         * Fired when a sound is broadcasted to all {@link Player}s on the server.
                         * <p>Examples of when this might be fired include:</p>
                         * <ul>
                         * <li>When a Wither or Dragon dies;</li>
                         * <li>When a sound event is played globally</li>
                         * </ul>
                         */
                        // @ts-ignore
                        interface Broadcast extends org.spongepowered.api.event.sound.PlaySoundEvent {
                        }
                    }
                }
            }
        }
    }
}
