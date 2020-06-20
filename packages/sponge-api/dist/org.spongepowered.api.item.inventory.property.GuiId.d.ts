declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * GuiIds are used in a {@link GuiIdProperty} when building a custom {@link Inventory}.
                         * The GuiId defines what {@link Container} is displayed on the client side when the
                         * custom inventory is opened.
                         * <p>When using the default vanilla {@link InventoryArchetype}s the
                         * GuiIdProperty is already set, but can be overridden.</p>
                         * <p>Sponge will not allow to open a inventory that has the wrong
                         * total size for the GuiId. e.g. You can open a 1x9 Grid Inventory as
                         * a Dispenser (3x3). But a 2x9 inventory will not work with it.</p>
                         */
                        // @ts-ignore
                        interface GuiId extends org.spongepowered.api.CatalogType {
                        }
                    }
                }
            }
        }
    }
}
