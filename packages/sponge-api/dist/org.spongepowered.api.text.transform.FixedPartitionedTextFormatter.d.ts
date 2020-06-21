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
                        public getAll(): object
                        // @ts-ignore
                        public get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        public set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        public size(): number /*int*/
                        /**
                         * Returns true if each partition is empty.
                         * @return True if each partition is empty
                         */
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        /**
                         * Clears each partition. Retains the actual partitions themselves.
                         */
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public add(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        public add(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        public insert(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): void
                        // @ts-ignore
                        public insert(i: number /*int*/, elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): void
                        // @ts-ignore
                        public remove(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        public remove(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        public retain(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                    }
                }
            }
        }
    }
}
