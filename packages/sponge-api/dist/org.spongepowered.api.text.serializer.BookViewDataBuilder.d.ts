declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * An implementation of {@link AbstractDataBuilder} and {@link TypeSerializer} for {@link BookView}.
                     */
                    // @ts-ignore
                    class BookViewDataBuilder extends org.spongepowered.api.data.persistence.AbstractDataBuilder<org.spongepowered.api.text.BookView> {
                        /**
                         * Constructs a new {@link BookViewDataBuilder} to build
                         * {@link BookView}s.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional<org.spongepowered.api.text.BookView>
                        // @ts-ignore
                        public deserialize(type: object, value: ConfigurationNode): org.spongepowered.api.text.BookView
                        // @ts-ignore
                        public serialize(type: object, bookView: org.spongepowered.api.text.BookView, value: ConfigurationNode): void
                    }
                }
            }
        }
    }
}
