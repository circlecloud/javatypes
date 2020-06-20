declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * Implementation of {@link PartitionedTextFormatter} that allows for
                     * modifications on the partitions.
                     */
                    // @ts-ignore
                    class DynamicPartitionedTextFormatter extends java.lang.Object implements org.spongepowered.api.text.transform.PartitionedTextFormatter<org.spongepowered.api.text.transform.SimpleTextFormatter> {
                        /**
                         * Creates a new {@link DynamicPartitionedTextFormatter}.
                         * @param initialSize The initial size of partitions
                         */
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        /**
                         * creates a new partitioned text formatter.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly partitions: Array<org.spongepowered.api.text.transform.SimpleTextFormatter>
                        // @ts-ignore
                        getAll(): <any>
                        // @ts-ignore
                        get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        size(): int
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        clear(): void
                        // @ts-ignore
                        add(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        add(elements: Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        insert(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): void
                        // @ts-ignore
                        insert(i: number /*int*/, elements: Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): void
                        // @ts-ignore
                        remove(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        remove(elements: Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        retain(elements: Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                    }
                }
            }
        }
    }
}
