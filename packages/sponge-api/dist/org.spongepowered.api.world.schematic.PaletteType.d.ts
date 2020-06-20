declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    // @ts-ignore
                    interface PaletteType<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.CatalogType {
                        // @ts-ignore
                        create(): org.spongepowered.api.world.schematic.Palette<T>
                    }
                }
            }
        }
    }
}
