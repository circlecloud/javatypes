declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace DataView {
                    /**
                     * The safety mode of the container.
                     */
                    // @ts-ignore
                    class SafetyMode extends java.lang.Enum<org.spongepowered.api.data.DataView.SafetyMode> {
                        /**
                         * All data added to the container will be cloned for safety.
                         */
                        // @ts-ignore
                        readonly ALL_DATA_CLONED: org.spongepowered.api.data.DataView.SafetyMode
                        /**
                         * All data added to the container will be cloned for safety.
                         */
                        // @ts-ignore
                        readonly CLONED_ON_SET: org.spongepowered.api.data.DataView.SafetyMode
                        /**
                         * No data added to the container will be cloned, useful for situations
                         * with a large amount of data where the cloning would be too costly.
                         */
                        // @ts-ignore
                        readonly NO_DATA_CLONED: org.spongepowered.api.data.DataView.SafetyMode
                        // @ts-ignore
                        values(): org.spongepowered.api.data.DataView.SafetyMode[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.spongepowered.api.data.DataView.SafetyMode
                    }
                }
            }
        }
    }
}
