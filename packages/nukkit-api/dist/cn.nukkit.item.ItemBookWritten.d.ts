declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            class ItemBookWritten extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                isWritten: boolean
                // @ts-ignore
                public writeBook(author: java.lang.String | string, title: java.lang.String | string, pages: java.lang.String[] | string[]): cn.nukkit.item.Item
                // @ts-ignore
                public writeBook(author: java.lang.String | string, title: java.lang.String | string, pages: cn.nukkit.nbt.tag.ListTag<cn.nukkit.nbt.tag.CompoundTag>): cn.nukkit.item.Item
                // @ts-ignore
                public getAuthor(): string
                // @ts-ignore
                public getTitle(): string
                // @ts-ignore
                public getPages(): string[]
            }
        }
    }
}
