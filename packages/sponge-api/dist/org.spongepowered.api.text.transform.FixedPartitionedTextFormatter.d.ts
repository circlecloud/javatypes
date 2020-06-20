declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * Implementation of {@link PartitionedTextFormatter} that has a fixed amount
                     * of partitions.
                     */
                    // @ts-ignore
                    class FixedPartitionedTextFormatter extends java.lang.Object implements org.spongepowered.api.text.transform.PartitionedTextFormatter<org.spongepowered.api.text.transform.SimpleTextFormatter> {
                        /**
                         * Creates a new {@link FixedPartitionedTextFormatter} with
                         * the provided size of partitions.
                         * @param size The size of partitions
                         */
                        // @ts-ignore
                        constructor(size: number /*int*/)
                        /**
                         * Creates a new {@link FixedPartitionedTextFormatter} with
                         * the provided size of partitions.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getAll(): <any>
                        // @ts-ignore
                        get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        size(): int
                        /**
                         * Returns true if each partition is empty.
                         * @return True if each partition is empty
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        /**
                         * Clears each partition. Retains the actual partitions themselves.
                         */
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
